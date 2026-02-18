const { Redis } = require("@upstash/redis");
require("dotenv").config({ path: ".env.local" });

async function check() {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  
  const taskId = "5a5bc2f3-ef61-4d70-a19b-c8b2619a6bc5";
  
  // Перевірка task:key
  const task = await redis.get(`task:${taskId}`);
  console.log("📄 Task:", task);
  
  // Перевірка result:key
  const result = await redis.get(`result:${taskId}`);
  console.log("✅ Result:", result);
  
  // Всі ключі
  const keys = await redis.keys("*");
  console.log("🔑 Всі ключі:", keys);
  
  // Черга
  const queue = await redis.llen("compression-queue");
  console.log("📦 Queue:", queue);
  
  const processing = await redis.llen("compression-processing");
  console.log("⚙️ Processing:", processing);
}

check().catch(console.error);
