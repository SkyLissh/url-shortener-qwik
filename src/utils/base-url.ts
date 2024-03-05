export function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";
  if (import.meta.env.VITE_VERCEL_ENV === "development")
    return `http://localhost:${import.meta.env.VITE_PORT ?? 5173}`;

  if (import.meta.env.VITE_VERCEL_URL)
    // reference for vercel.com
    return `https://${import.meta.env.VITE_VERCEL_URL}`;
  if (import.meta.env.VITE_RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${import.meta.env.VITE_RENDER_INTERNAL_HOSTNAME}:${import.meta.env.VITE_PORT}`;
  // assume localhost
  return `http://localhost:${import.meta.env.VITE_PORT ?? 5173}`;
}
