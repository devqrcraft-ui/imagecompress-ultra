// src/app/api/task/[id]/route.ts
// Polling статусу задачі — frontend опитує кожні 2 сек
import { NextResponse } from "next/server";
import { getTask }      from "@/lib/queue";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "Invalid task id" }, { status: 400 });
  }

  const task = await getTask(id);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  // Повертаємо тільки потрібні поля — не весь internal state
  return NextResponse.json({
    taskId:       task.id,
    status:       task.status,          // queued | processing | done | failed | retrying
    outputBlobUrl: task.outputBlobUrl,  // є тільки при status=done
    progress:     statusToProgress(task.status),
    error:        task.lastError,
  });
}

function statusToProgress(status: string): number {
  switch (status) {
    case "queued":     return 10;
    case "processing": return 60;
    case "done":       return 100;
    case "failed":     return 0;
    case "retrying":   return 30;
    default:           return 0;
  }
}
