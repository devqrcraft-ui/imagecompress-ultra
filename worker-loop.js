const { Redis } = require("@upstash/redis");
require("dotenv").config({ path: ".env.local" });

async function compressImage(blobUrl) {
  const sharp = require("sharp");
  const { put } = require("@vercel/blob");
  const imgResp = await fetch(blobUrl);
  const buffer = Buffer.from(await imgResp.arrayBuffer());
  const compressed = await sharp(buffer).resize({ width: 2048, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
  const blob = await put("compressed/" + Date.now() + ".webp", compressed, { access: "public", contentType: "image/webp" });
  return blob.url;
}

async function processQueue() {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  console.log("Worker Loop started...");

  while (true) {
    const taskId = await redis.rpop("compression-queue");
    if (!taskId) {
      console.log("Queue empty, waiting...");
      await new Promise(r => setTimeout(r, 3000));
      continue;
    }

    console.log("Got task:", taskId);

    const taskData = await redis.get("task:" + taskId);
    if (!taskData) continue;

    const task = typeof taskData === "string" ? JSON.parse(taskData) : taskData;
    console.log("Processing...");

    task.status = "done";
    task.updatedAt = Date.now();
    task.outputBlobUrl = await compressImage(task.inputBlobUrl);

    await redis.set("task:" + taskId, JSON.stringify(task), { ex: 3600 });
    await redis.set("result:" + taskId, task.outputBlobUrl, { ex: 3600 });

    console.log("Done!");
  }
}

processQueue().catch(console.error);
