import { NextRequest, NextResponse } from "next/server";
import { getFingerprint } from "@/lib/fingerprint";
import { checkAbuse } from "@/lib/abuse-score";

export const config = {
  matcher: ["/api/compress", "/api/task/:path*"],
};

export async function middleware(req: NextRequest) {
  try {
    const fp = await getFingerprint(req);
    const level = await checkAbuse(fp);

    if (level === "blocked") {
      return NextResponse.json(
        { error: "Too many requests. Try again in 30 minutes.", code: "BLOCKED" },
        { status: 429 }
      );
    }

    if (level === "captcha") {
      const token = req.headers.get("x-turnstile-token");
      if (!token) {
        return NextResponse.json(
          { error: "Captcha required.", code: "CAPTCHA_REQUIRED" },
          { status: 429 }
        );
      }
      // Turnstile верифікація відбувається в route handler
    }

    // Додаємо fingerprint в header для route handlers
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-fingerprint", fp);
    requestHeaders.set("x-abuse-level", level);

    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (err) {
    console.error("[middleware] error:", err);
    return NextResponse.next(); // fail-open
  }
}
