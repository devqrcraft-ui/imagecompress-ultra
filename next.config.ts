import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Захист від clickjacking
        { key: "X-Frame-Options", value: "DENY" },
        // Захист від MIME sniffing
        { key: "X-Content-Type-Options", value: "nosniff" },
        // XSS захист
        { key: "X-XSS-Protection", value: "1; mode=block" },
        // Приватність referrer
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        // Блокує камеру, мікрофон, геолокацію
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        // Захист від копіювання контенту ботами
        { key: "X-Robots-Tag", value: "noarchive, nosnippet" },
        // CSP — блокує сторонні скрипти/стилі
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "connect-src 'self' https://*.upstash.io https://sentry.io",
            "frame-src https://challenges.cloudflare.com",
            "object-src 'none'",
            "base-uri 'self'",
          ].join("; "),
        },
      ],
    },
  ],
};

export default nextConfig;
