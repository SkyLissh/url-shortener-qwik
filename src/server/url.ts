import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { procedure, router } from "~/server/trpc";

import { urls } from "~/db/schema/url";

import { UrlCreateSchema } from "~/schemas/url";

export const urlRouter = router({
  create: procedure.input(UrlCreateSchema).mutation(async ({ ctx, input }) => {
    const targetUrl = await ctx.db
      .select()
      .from(urls)
      .where(eq(urls.targetUrl, input.targetUrl));

    if (targetUrl.length > 0) {
      return targetUrl[0].shortenUrl;
    }

    const url = await ctx.db.insert(urls).values(input).returning();

    return url[0].shortenUrl;
  }),
  getByShorten: procedure
    .input(z.object({ shortenUrl: z.string().length(10) }))
    .query(async ({ ctx, input }) => {
      const url = await ctx.db
        .select()
        .from(urls)
        .where(eq(urls.shortenUrl, input.shortenUrl));

      if (url.length <= 0) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Url not found", cause: url });
      }

      return url[0];
    }),
});
