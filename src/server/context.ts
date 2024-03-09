import { db } from "~/db/db";

export const createContext = () => {
  const dbInstance = db();

  return { db: dbInstance };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
