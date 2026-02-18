-- scripts/fail.lua
-- Обробка помилки з exponential backoff — 1 op замість 4
-- FIX Bug #2: правильний zadd синтаксис для Upstash
local taskId  = KEYS[1]
local errorMsg = ARGV[1]
local now      = tonumber(ARGV[2])

redis.call("LREM", "compression-processing", 1, taskId)
redis.call("DEL",  "heartbeat:" .. taskId)

local taskData = redis.call("GET", "task:" .. taskId)
if not taskData then return "NOT_FOUND" end

local task = cjson.decode(taskData)
task.attempts  = task.attempts + 1
task.updatedAt = now
task.lastError = errorMsg

if task.attempts >= task.maxAttempts then
  task.status = "failed"
  redis.call("SET",   "task:" .. taskId, cjson.encode(task), "EX", 86400)
  redis.call("LPUSH", "compression-dead", taskId)
  return "FAILED"
else
  task.status = "retrying"
  redis.call("SET", "task:" .. taskId, cjson.encode(task), "EX", 86400)
  local backoffMs = math.pow(2, task.attempts) * 1000
  redis.call("ZADD", "compression-delayed", now + backoffMs, taskId)
  return "RETRYING"
end
