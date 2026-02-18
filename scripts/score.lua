local fp = KEYS[1]
local now = tonumber(ARGV[1])
local minute = math.floor(now / 60000)
local hllKey = "hll:" .. fp .. ":" .. minute
redis.call("PFADD", hllKey, tostring(now))
redis.call("EXPIRE", hllKey, 120)
local approx = redis.call("PFCOUNT", hllKey)
if approx > 5 then
  local exactKey = "exact:" .. fp .. ":" .. minute
  redis.call("ZADD", exactKey, now, tostring(now))
  redis.call("EXPIRE", exactKey, 120)
  local exact = redis.call("ZCARD", exactKey)
  if exact > 10 then
    local abuse = redis.call("INCR", "abuse:" .. fp)
    redis.call("EXPIRE", "abuse:" .. fp, 3600)
    if tonumber(abuse) > 3 then
      redis.call("SET", "block:" .. fp, "1", "EX", 1800)
      return "blocked"
    end
    if exact > 30 then return "captcha" end
    return "warn"
  end
end
return "ok"
