import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://ad39dd97a7bdbed63fb4f2356f86b7c5@o4510908333490176.ingest.us.sentry.io/4510908339519488",
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,
  ignoreErrors: [
    "Cannot read properties of null (reading 'tagName')",
    "Cannot read properties of null",
  ],
  beforeSend(event) {
    const ua = event.request?.headers?.["user-agent"] || "";
    if (ua.includes("Android 4") || ua.includes("Android 2") || ua.includes("Android 3")) {
      return null;
    }
    return event;
  },
});
