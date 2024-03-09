import { routeLoader$ } from "@builder.io/qwik-city";
import { TRPCError } from "@trpc/server";

import { trpc } from "~/utils/trpc";

export const useTargetUrl = routeLoader$(async ({ params, redirect }) => {
  try {
    const url = await trpc.url.getByShorten.query({ shortenUrl: params.url });

    if (!url.isActive) redirect(301, "/404");

    redirect(301, url.targetUrl);
  } catch (error) {
    if (error instanceof TRPCError && error.code === "NOT_FOUND") {
      redirect(301, "/404");
    }
  }
});
