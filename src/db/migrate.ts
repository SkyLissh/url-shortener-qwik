import "dotenv/config";

import { sql } from "@vercel/postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

import { db } from "./db";

await migrate(db, { migrationsFolder: "./drizzle" });
await sql.end();
