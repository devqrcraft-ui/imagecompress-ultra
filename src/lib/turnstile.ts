export async function verifyTurnstile(token: string): Promise<boolean> {
  if (!token) return false;

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("[turnstile] TURNSTILE_SECRET_KEY not set — skipping verify");
    return true;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token }),
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);

    if (!res.ok) return false;
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("[turnstile] verify error:", err);
    return false; // fail-closed при помилці
  }
}
