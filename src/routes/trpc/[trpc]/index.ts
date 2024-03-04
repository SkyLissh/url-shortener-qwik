import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "~/server";

export const onRequest: RequestHandler = async ({ request, send }) => {
  const httpResponse = await fetchRequestHandler({
    endpoint: "/trpc",
    req: request,
    router: appRouter,
    createContext: () => ({}),
  });

  send(httpResponse);
};
