import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      process.env.POSTGRES_URL ??
      "postgresql://postgres:postgres@localhost:5432/url-shortener",
  },
} satisfies Config;
