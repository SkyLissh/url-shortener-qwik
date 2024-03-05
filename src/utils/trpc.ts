import { createTRPCClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import type { AppRouter } from "~/server";
import { getBaseUrl } from "./base-url";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/trpc`,
      transformer: superjson,
    }),
  ],
});
