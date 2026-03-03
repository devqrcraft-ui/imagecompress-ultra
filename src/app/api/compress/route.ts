// src/app/api/compress/route.ts
// Push-модель: waitUntil запускає worker одразу після upload
// FIX Bug #5: Safari iOS fallback для file.stream()
import { NextResponse }              from "next/server";
import { put }                       from "@vercel/blob";
import { redis }                     from "@/lib/redis";
import { enqueueTask, pickTask, ackTask, failTask } from "@/lib/queue";
import { compressWithSharp }         from "@/lib/sharp-compress";

export const runtime = "nodejs"; // Sharp потребує Node.js (не Edge)

const MAX_FILE_SIZE  = 20 * 1024 * 1024; // 20 MB
const MAX_QUEUE_DEPTH = 1000;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file     = formData.get("file")    as File | null;
    const format   = (formData.get("format") as string | null) ?? "webp";
    const quality  = parseInt((formData.get("quality") as string | null) ?? "80", 10);

    // ── Валідація ────────────────────────────────────────────────
    if (!file) {
      return NextResponse.json({ error: "No file", code: "NO_FILE" }, { status: 400 });
    }
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Not an image", code: "INVALID_TYPE" }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large", code: "FILE_TOO_LARGE" }, { status: 413 });
    }
    if (!["webp", "avif", "jpeg", "png"].includes(format)) {
      return NextResponse.json({ error: "Invalid format", code: "INVALID_FORMAT" }, { status: 400 });
    }

    // ── Перевірка черги ──────────────────────────────────────────
    const queueDepth = redis ? await redis.llen("compression-queue") : 0;
    if (queueDepth > MAX_QUEUE_DEPTH) {
      return NextResponse.json(
        { error: "Server busy — retry later", code: "QUEUE_FULL" },
        { status: 503 },
      );
    }

    // ── Upload input у Vercel Blob ───────────────────────────────
    // FIX Bug #5: Safari iOS < 16.4 не має file.stream()
    const stream = file.stream
      ? file.stream()
      : new Response(file).body!;

    const inputBlob = await put(
      `input/${Date.now()}-${crypto.randomUUID()}-${file.name}`,
      stream,
      { access: "public", contentType: file.type, addRandomSuffix: false },
    );

    // ── Ставимо в чергу ──────────────────────────────────────────
    const { id } = await enqueueTask(inputBlob.url, format, quality);

    // ── Push-модель: запускаємо worker одразу через waitUntil ────
    // waitUntil доступний в Vercel — задача обробляється < 1 сек
    // без waitUntil — cron підхопить за 5 хв (safety net)
    try {
      const ctx = (request as unknown as { [k: symbol]: { waitUntil?: (p: Promise<unknown>) => void } })[
        Symbol.for("next.request.context")
      ];
      if (ctx?.waitUntil) {
        ctx.waitUntil(runWorkerOnce());
      }
    } catch {}

    return NextResponse.json({ taskId: id });

  } catch (err) {
    console.error("[compress] Error:", err);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL" },
      { status: 500 },
    );
  }
}

// ── Worker — обробляє одну задачу з черги ───────────────────────
async function runWorkerOnce(): Promise<void> {
  const picked = await pickTask();
  if (!picked) return;

  try {
    const outputUrl = await compressWithSharp(
      picked.task.inputBlobUrl,
      (picked.task.format as "webp" | "avif" | "jpeg" | "png") ?? "webp",
      picked.task.quality ?? 80,
    );
    await ackTask(picked.id, outputUrl);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    await failTask(picked.id, msg);
  }
}
