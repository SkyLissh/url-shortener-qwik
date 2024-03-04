import { z } from "zod";

export const UrlCreateSchema = z.object({
  targetUrl: z.string().url(),
});

export const UrlSchema = UrlCreateSchema.extend({
  id: z.string().uuid(),
  clicks: z.number().nullable().default(0),
  isActive: z.boolean(),
  shortenUrl: z.string().length(10),
});

export type Url = z.infer<typeof UrlSchema>;
