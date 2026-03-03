// src/app/api/cron/stuck-tasks/route.ts
// Safety net — підбирає зависші задачі якщо worker не встиг підтвердити
// Запускається через Vercel Cron кожну хвилину

import { NextRequest, NextResponse } from "next/server";
import { redis }                     from "@/lib/redis";
import { failTask }                  from "@/lib/queue";

// Верифікація Vercel Cron secret
function isAuthorized(req: NextRequest): boolean {
  const secret = req.headers.get("authorization");
  return secret === `Bearer ${process.env.CRON_SECRET}`;
}

// Задача "зависла" якщо heartbeat не оновлювався більше 90 секунд
const STUCK_THRESHOLD_SEC = 90;

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = Math.floor(Date.now() / 1000);
  let rescued = 0;
  let failed  = 0;

  try {
    // Отримуємо всі задачі зі статусом "processing"
    const processingIds = await redis!.lrange("compression-processing", 0, -1);

    for (const taskId of processingIds) {
      const heartbeatKey = `heartbeat:${taskId}`;
      const heartbeat    = await redis.get(heartbeatKey);

      if (heartbeat !== null) {
        // Heartbeat живий — пропускаємо
        continue;
      }

      // Heartbeat відсутній → задача зависла
      const taskRaw = await redis.get(`task:${taskId}`);
      if (!taskRaw) {
        // Метадані втрачені — прибираємо з черги
        await redis.lrem("compression-processing", 1, taskId);
        failed++;
        continue;
      }

      const task = JSON.parse(taskRaw as string);

      if (task.attempts >= task.maxAttempts) {
        // Вичерпали спроби — позначаємо як failed
        await failTask(taskId, "stuck: max attempts reached");
        failed++;
      } else {
        // Повертаємо в чергу для retry
        const pipeline = redis.pipeline();
        pipeline.lrem("compression-processing", 1, taskId);
        pipeline.set(`task:${taskId}`, JSON.stringify({
          ...task,
          status:    "queued",
          attempts:  task.attempts + 1,
          updatedAt: now,
          lastError: "rescued from stuck state",
        }), { ex: 86400 });
        pipeline.lpush("compression-queue", taskId);
        await pipeline.exec();
        rescued++;
      }
    }

    // Обробляємо GDPR компенсації якщо є
    const { GdprSaga } = await import("@/lib/gdpr-saga");
    const gdprProcessed = await GdprSaga.processNext();

    return NextResponse.json({
      ok:            true,
      timestamp:     now,
      rescued,
      failed,
      gdprProcessed: gdprProcessed ?? null,
      checked:       processingIds.length,
    });

  } catch (err) {
    console.error("[CRON:stuck-tasks]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
