import type { VercelPool } from "@vercel/postgres";
import { createPool } from "@vercel/postgres";
import type { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

let _db: VercelPgDatabase<Record<string, unknown>> | undefined;
let _pool: VercelPool | undefined;

export const initDb = (connectionString: string) => {
  if (_db && _pool) return;

  _pool = createPool({ connectionString });
  _db = drizzle(_pool);
};

export const pool = () => {
  if (!_pool) throw new Error("Pool not initialized");
  return _pool;
};

export const db = () => {
  if (!_db) throw new Error("Database not initialized");
  return _db;
};
