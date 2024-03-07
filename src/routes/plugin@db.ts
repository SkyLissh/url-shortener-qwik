import type { RequestHandler } from "@builder.io/qwik-city";
import { initDb } from "~/db/db";

export const onRequest: RequestHandler = ({ env }) => {
  initDb(env.get("POSTGRES_URL")!);
};
