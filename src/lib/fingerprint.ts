import { NextRequest } from "next/server";

// SHA-256 fingerprint без PII — тільки IP + UA hash
export async function getFingerprint(req: NextRequest): Promise<string> {
  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const ua = req.headers.get("user-agent") ?? "unknown";

  // Солимо щоб не можна було reverse-engineer IP
  const salt = process.env.FINGERPRINT_SALT ?? "default-salt-change-in-prod";
  const raw = `${ip}|${ua}|${salt}`;

  const encoded = new TextEncoder().encode(raw);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
