import type { RequestHandler } from "@builder.io/qwik-city";
import { TRPCClientError } from "@trpc/client";

import { trpc } from "~/utils/trpc";

export const onGet: RequestHandler = async ({ params, redirect, status }) => {
  try {
    const url = await trpc.url.getByShorten.query({ shortenUrl: params.url });

    if (!url.isActive) status(404);

    throw redirect(301, url.targetUrl);
  } catch (error) {
    if (error instanceof TRPCClientError) {
      status(404);
      return;
    }

    throw error;
  }
};
