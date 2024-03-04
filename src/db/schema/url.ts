import {
  boolean,
  index,
  integer,
  pgTable,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

const urlGenerator = () => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const urls = pgTable(
  "urls",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    clicks: integer("clicks").default(0),
    isActive: boolean("is_active").notNull().default(true),
    shortenUrl: varchar("shorten_url", { length: 10 })
      .notNull()
      .unique()
      .$defaultFn(urlGenerator),
    targetUrl: text("target_url").notNull(),
  },
  (table) => ({
    shortenUrlIdx: index("shorten_url_idx").on(table.shortenUrl),
  })
);
