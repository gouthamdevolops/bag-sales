const HEALTH_URL = "/health";
const PING_INTERVAL_MS = 30000;

if (typeof window !== "undefined") {
  setInterval(() => {
    fetch(HEALTH_URL).catch(() => {});
  }, PING_INTERVAL_MS);
}
