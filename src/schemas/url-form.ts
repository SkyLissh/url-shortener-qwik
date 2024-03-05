import { z } from "zod";

export const UrlFormSchema = z.object({
  url: z.string().min(1, "Url is required").url("Please enter a valid url"),
});

export type UrlForm = z.infer<typeof UrlFormSchema>;
