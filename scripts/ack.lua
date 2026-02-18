-- scripts/ack.lua
-- Підтвердження успішної компресії — 1 op замість 3
local taskId   = KEYS[1]
local outputUrl = ARGV[1]
local now       = ARGV[2]

redis.call("LREM", "compression-processing", 1, taskId)
redis.call("DEL",  "heartbeat:" .. taskId)

local taskData = redis.call("GET", "task:" .. taskId)
if not taskData then return "NOT_FOUND" end

local task = cjson.decode(taskData)
task.status       = "done"
task.outputBlobUrl = outputUrl
task.updatedAt    = tonumber(now)

-- FIX Bug #4: result key з TTL 2 год (не вічний)
redis.call("SET", "task:"   .. taskId, cjson.encode(task), "EX", 3600)
redis.call("SET", "result:" .. taskId, outputUrl,          "EX", 7200)

return "OK"
