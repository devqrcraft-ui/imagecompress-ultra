// src/lib/circuit-breaker.ts
// Fail-closed circuit breaker — фікс Bug #6 з blueprint
// Стани: CLOSED (норма) → OPEN (блок) → HALF_OPEN (проба)

import { redis } from "@/lib/redis";

type CBState = "CLOSED" | "OPEN" | "HALF_OPEN";

interface CBStatus {
  state:      CBState;
  failures:   number;
  lastFailed: number;   // unix ms
  nextRetry:  number;   // unix ms
}

// Налаштування (env-override)
const FAILURE_THRESHOLD  = parseInt(process.env.CB_FAILURE_THRESHOLD  ?? "5");
const RECOVERY_TIMEOUT   = parseInt(process.env.CB_RECOVERY_TIMEOUT   ?? "30000"); // 30s
const HALF_OPEN_MAX_CALLS = 1; // скільки пробних запитів дозволяємо

const CB_KEY = "circuit-breaker:sharp";

export class CircuitBreaker {
  private name: string;

  constructor(name = "sharp") {
    this.name = name;
  }

  private key() { return `circuit-breaker:${this.name}`; }

  async getStatus(): Promise<CBStatus> {
    const raw = await redis!.get(this.key());
    if (!raw) {
      return { state: "CLOSED", failures: 0, lastFailed: 0, nextRetry: 0 };
    }
    return JSON.parse(raw as string) as CBStatus;
  }

  // Перевіряємо чи можна виконувати запит
  async canExecute(): Promise<boolean> {
    const status = await this.getStatus();
    const now    = Date.now();

    if (status.state === "CLOSED") return true;

    if (status.state === "OPEN") {
      if (now >= status.nextRetry) {
        // Переходимо в HALF_OPEN для пробного запиту
        await this.setState("HALF_OPEN", status.failures);
        return true;
      }
      return false; // fail-closed — блокуємо
    }

    // HALF_OPEN — дозволяємо один пробний запит
    return true;
  }

  // Реєструємо успіх
  async recordSuccess(): Promise<void> {
    const status = await this.getStatus();
    if (status.state !== "CLOSED") {
      // Відновлення — скидаємо лічильник
      await redis!.del(this.key());
    }
  }

  // Реєструємо помилку
  async recordFailure(error: string): Promise<void> {
    const status   = await this.getStatus();
    const failures = status.failures + 1;

    if (failures >= FAILURE_THRESHOLD || status.state === "HALF_OPEN") {
      // Відкриваємо breaker
      await this.setState("OPEN", failures, error);
    } else {
      await this.setState("CLOSED", failures, error);
    }
  }

  private async setState(
    state:    CBState,
    failures: number,
    lastError?: string
  ): Promise<void> {
    const now    = Date.now();
    const status: CBStatus & { lastError?: string } = {
      state,
      failures,
      lastFailed: now,
      nextRetry:  state === "OPEN" ? now + RECOVERY_TIMEOUT : 0,
      ...(lastError ? { lastError } : {}),
    };
    // TTL = recovery timeout * 2 щоб не висіло вічно
    await redis!.set(this.key(), JSON.stringify(status), {
      ex: Math.ceil((RECOVERY_TIMEOUT * 2) / 1000),
    });
  }

  // Обгортка для автоматичного запису success/failure
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    const canRun = await this.canExecute();
    if (!canRun) {
      throw new Error(`Circuit breaker OPEN for ${this.name} — service unavailable`);
    }

    try {
      const result = await fn();
      await this.recordSuccess();
      return result;
    } catch (err) {
      await this.recordFailure(String(err));
      throw err;
    }
  }
}

// Singleton для Sharp
export const sharpBreaker = new CircuitBreaker("sharp");
