// src/lib/gdpr-saga.ts
// GDPR deletion saga з compensation-queue — фікс Bug #10
// Патерн: спочатку записуємо намір → виконуємо → підтверджуємо або компенсуємо

import { redis } from "@/lib/redis";

export type SagaStep =
  | "delete_blob"
  | "delete_task_meta"
  | "delete_output_blob"
  | "audit_log";

export type SagaStatus = "pending" | "in_progress" | "completed" | "compensating" | "failed";

interface SagaState {
  id:          string;
  userId:      string;
  taskIds:     string[];
  steps:       Record<SagaStep, "pending" | "done" | "failed">;
  status:      SagaStatus;
  createdAt:   number;
  updatedAt:   number;
  attempts:    number;
  lastError?:  string;
}

const SAGA_TTL     = 86400 * 7;  // 7 днів зберігаємо для аудиту
const COMP_QUEUE   = "gdpr:compensation-queue";
const SAGA_PREFIX  = "gdpr:saga:";

export class GdprSaga {
  // Створюємо новий saga-запит на видалення
  static async create(userId: string, taskIds: string[]): Promise<string> {
    const id  = `gdpr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const key = `${SAGA_PREFIX}${id}`;

    const state: SagaState = {
      id,
      userId,
      taskIds,
      steps: {
        delete_blob:       "pending",
        delete_task_meta:  "pending",
        delete_output_blob:"pending",
        audit_log:         "pending",
      },
      status:    "pending",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      attempts:  0,
    };

    // Атомарно: зберігаємо стан + кладемо в чергу компенсації
    const pipeline = redis!.pipeline();
    pipeline.set(key, JSON.stringify(state), { ex: SAGA_TTL });
    pipeline.lpush(COMP_QUEUE, id);
    await pipeline.exec();

    return id;
  }

  // Обробляємо один saga крок
  static async processNext(): Promise<string | null> {
    // Беремо з черги (RPOPLPUSH для at-least-once гарантії)
    const id = await redis!.lmove(COMP_QUEUE, `${COMP_QUEUE}:processing`, "right", "left") as string | null;
    if (!id) return null;

    const key   = `${SAGA_PREFIX}${id}`;
    const raw   = await redis!.get(key);
    if (!raw) {
      // Стан втрачено — видаляємо з processing
      await redis!.lrem(`${COMP_QUEUE}:processing`, 1, id);
      return null;
    }

    const state = JSON.parse(raw as string) as SagaState;
    state.status   = "in_progress";
    state.attempts += 1;
    state.updatedAt = Date.now();

    try {
      // Виконуємо кроки послідовно
      for (const [step, stepStatus] of Object.entries(state.steps) as [SagaStep, string][]) {
        if (stepStatus === "done") continue;

        await GdprSaga.executeStep(step, state);
        state.steps[step] = "done";

        // Зберігаємо прогрес після кожного кроку
        await redis!.set(key, JSON.stringify(state), { ex: SAGA_TTL });
      }

      state.status = "completed";
      await redis!.set(key, JSON.stringify(state), { ex: SAGA_TTL });
      await redis!.lrem(`${COMP_QUEUE}:processing`, 1, id);

      return id;
    } catch (err) {
      state.lastError = String(err);

      if (state.attempts >= 5) {
        state.status = "failed";
        await redis!.set(key, JSON.stringify(state), { ex: SAGA_TTL });
        await redis!.lrem(`${COMP_QUEUE}:processing`, 1, id);
        // Алерт — потрібне ручне втручання
        console.error(`[GDPR-SAGA] Failed after 5 attempts: ${id}`, err);
      } else {
        // Retry з exponential backoff — повертаємо в основну чергу
        state.status = "compensating";
        await redis!.set(key, JSON.stringify(state), { ex: SAGA_TTL });
        await redis!.lrem(`${COMP_QUEUE}:processing`, 1, id);

        const backoff = Math.pow(2, state.attempts) * 1000; // 2s, 4s, 8s, 16s
        setTimeout(async () => {
          await redis!.lpush(COMP_QUEUE, id);
        }, backoff);
      }

      return null;
    }
  }

  private static async executeStep(step: SagaStep, state: SagaState): Promise<void> {
    // Ці імпорти динамічні щоб уникнути циклічних залежностей
    switch (step) {
      case "delete_blob": {
        const { del } = await import("@vercel/blob");
        for (const taskId of state.taskIds) {
          const taskRaw = await redis!.get(`task:${taskId}`);
          if (!taskRaw) continue;
          const task = JSON.parse(taskRaw as string);
          if (task.inputBlobUrl) await del(task.inputBlobUrl);
        }
        break;
      }

      case "delete_output_blob": {
        const { del } = await import("@vercel/blob");
        for (const taskId of state.taskIds) {
          const taskRaw = await redis!.get(`task:${taskId}`);
          if (!taskRaw) continue;
          const task = JSON.parse(taskRaw as string);
          if (task.outputBlobUrl) await del(task.outputBlobUrl);
        }
        break;
      }

      case "delete_task_meta": {
        const pipeline = redis!.pipeline();
        for (const taskId of state.taskIds) {
          pipeline.del(`task:${taskId}`);
        }
        await pipeline.exec();
        break;
      }

      case "audit_log": {
        // Записуємо лог видалення для compliance (зберігаємо 30 днів)
        await redis!.set(
          `gdpr:audit:${state.userId}:${state.id}`,
          JSON.stringify({
            userId:    state.userId,
            taskCount: state.taskIds.length,
            deletedAt: Date.now(),
          }),
          { ex: 86400 * 30 }
        );
        break;
      }
    }
  }

  // Отримати статус saga
  static async getStatus(id: string): Promise<SagaState | null> {
    const raw = await redis!.get(`${SAGA_PREFIX}${id}`);
    return raw ? JSON.parse(raw as string) : null;
  }
}
