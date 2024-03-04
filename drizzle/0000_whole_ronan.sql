CREATE TABLE IF NOT EXISTS "urls" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clicks" integer DEFAULT 0,
	"is_active" boolean DEFAULT true NOT NULL,
	"shorten_url" varchar(10),
	"target_url" text NOT NULL,
	CONSTRAINT "urls_shorten_url_unique" UNIQUE("shorten_url")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "shorten_url_idx" ON "urls" ("shorten_url");