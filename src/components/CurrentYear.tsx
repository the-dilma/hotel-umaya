import { cacheLife } from "next/cache";

// Cached on the server and refreshed daily, so the page can still be prerendered.
export default async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
