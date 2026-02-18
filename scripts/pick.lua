-- scripts/pick.lua
-- FIX Bug #1: race condition — RPOPLPUSH + heartbeat в одній транзакції
local taskId = redis.call("RPOPLPUSH", "compression-queue", "compression-processing")
if not taskId then return nil end

local taskData = redis.call("GET", "task:" .. taskId)
if not taskData then
  redis.call("LREM", "compression-processing", 1, taskId)
  return nil
end

local task = cjson.decode(taskData)
task.status    = "processing"
task.updatedAt = tonumber(ARGV[1])

redis.call("SET",    "task:"      .. taskId, cjson.encode(task), "EX", 86400)
redis.call("HSET",   "heartbeat:" .. taskId, "ts", ARGV[1], "attempts", task.attempts)
redis.call("EXPIRE", "heartbeat:" .. taskId, 60)

return { taskId, cjson.encode(task) }
