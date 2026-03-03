// src/lib/queue.ts
// Lua-скрипти завантажуються один раз при старті сервера
import { redis } from "@/lib/redis";
import * as fs   from "fs";
import * as path from "path";

export interface CompressionTask {
  id:            string;
  inputBlobUrl:  string;
  outputBlobUrl?: string;
  status:        "queued" | "processing" | "done" | "failed" | "retrying";
  attempts:      number;
  maxAttempts:   number;
  createdAt:     number;
  updatedAt:     number;
  lastError?:    string;
  format?:       string;
  quality?:      number;
}

// Lua-скрипти читаємо один раз — не на кожен запит
const scripts = {
  enqueue: fs.readFileSync(path.join(process.cwd(), "scripts/enqueue.lua"), "utf8"),
  pick:    fs.readFileSync(path.join(process.cwd(), "scripts/pick.lua"),    "utf8"),
  ack:     fs.readFileSync(path.join(process.cwd(), "scripts/ack.lua"),     "utf8"),
  fail:    fs.readFileSync(path.join(process.cwd(), "scripts/fail.lua"),    "utf8"),
};

// ── enqueueTask ──────────────────────────────────────────────────
export async function enqueueTask(
  inputBlobUrl: string,
  format = "webp",
  quality = 80,
): Promise<{ id: string; queueDepth: number }> {
  const id = crypto.randomUUID();

  const task: CompressionTask = {
    id,
    inputBlobUrl,
    status:      "queued",
    attempts:    0,
    maxAttempts: 3,
    createdAt:   Date.now(),
    updatedAt:   Date.now(),
    format,
    quality,
  };

  const depth = (await redis!.eval(
    scripts.enqueue,
    [id],
    [JSON.stringify(task), "86400"],
  )) as number;

  return { id, queueDepth: depth };
}

// ── pickTask ─────────────────────────────────────────────────────
// FIX Bug #3: помилка pickTask не вбиває worker
export async function pickTask(): Promise<{ id: string; task: CompressionTask } | null> {
  try {
    const result = (await redis!.eval(
      scripts.pick,
      [],
      [Date.now().toString()],
    )) as [string, string] | null;

    if (!result) return null;
    return { id: result[0], task: JSON.parse(result[1]) };
  } catch (err) {
    console.error("[pickTask] Error:", err);
    return null;
  }
}

// ── ackTask ──────────────────────────────────────────────────────
export async function ackTask(id: string, outputBlobUrl: string): Promise<void> {
  await redis!.eval(scripts.ack, [id], [outputBlobUrl, Date.now().toString()]);
}

// ── failTask ─────────────────────────────────────────────────────
export async function failTask(
  id: string,
  error: string,
): Promise<"FAILED" | "RETRYING" | "NOT_FOUND"> {
  return redis.eval(
    scripts.fail,
    [id],
    [error, Date.now().toString()],
  ) as Promise<"FAILED" | "RETRYING" | "NOT_FOUND">;
}

// ── getTask ──────────────────────────────────────────────────────
export async function getTask(id: string): Promise<CompressionTask | null> {
  const raw = await redis!.get<string>(`task:${id}`);
  if (!raw) return null;
  return typeof raw === "string" ? JSON.parse(raw) : raw;
}
