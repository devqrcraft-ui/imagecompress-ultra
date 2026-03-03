import { redis } from '@/lib/redis';

export type AbuseLevel = 'ok' | 'warn' | 'captcha' | 'blocked';

export async function getAbuseLevel(ip: string): Promise<AbuseLevel> {
  try {
    const key = `abuse:${ip}`;
    const score = await redis!.get<number>(key);
    if ((score ?? 0) >= 100) return 'blocked';
    if ((score ?? 0) >= 50) return 'captcha';
    if ((score ?? 0) >= 20) return 'warn';
    return 'ok';
  } catch { return 'ok'; }
}

export async function incrementAbuse(ip: string, points = 1): Promise<void> {
  try {
    const key = `abuse:${ip}`;
    await redis!.incrby(key, points);
    await redis!.expire(key, 86400);
  } catch {}
}