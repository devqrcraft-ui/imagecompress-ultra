const { Redis } = require("@upstash/redis");
require("dotenv").config({ path: ".env.local" });

async function test() {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  
  console.log("🔍 Перевірка Redis...");
  
  // 1. Перевірка чи Redis працює
  const ping = await redis.ping();
  console.log("✅ Redis ping:", ping);
  
  // 2. Перевірка черги
  const queueLength = await redis.llen("compression-queue");
  console.log("📦 Черга (compression-queue):", queueLength);
  
  // 3. Перевірка processing
  const processingLength = await redis.llen("compression-processing");
  console.log("⚙️ В обробці (compression-processing):", processingLength);
  
  // 4. Всі ключі
  const keys = await redis.keys("*");
  console.log("🔑 Всі ключі в Redis:", keys);
  
  // 5. Перевірка конкретної задачі
  const task = await redis.get("task:60c5bc93-eecf-40b1-ac0c-065616cae95f");
  console.log("📄 Задача:", task);
}

test().catch(console.error);
