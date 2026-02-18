-- scripts/enqueue.lua
-- FIX Bug #1: 1 Redis op замість 3. Атомарно: SET metadata + LPUSH queue.
local taskId   = KEYS[1]
local taskData = ARGV[1]
local ttl      = tonumber(ARGV[2]) or 86400

redis.call("SET", "task:" .. taskId, taskData, "EX", ttl)
redis.call("LPUSH", "compression-queue", taskId)

return redis.call("LLEN", "compression-queue")
