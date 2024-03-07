import { migrate } from "drizzle-orm/vercel-postgres/migrator";

import { db, pool } from "./db";

await migrate(db(), { migrationsFolder: "./drizzle" });
await pool().end();
