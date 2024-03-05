import { router } from "~/server/trpc";

import { urlRouter } from "~/server/url";

export const appRouter = router({
  url: urlRouter,
});

export type AppRouter = typeof appRouter;
