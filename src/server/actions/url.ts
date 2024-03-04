import { formAction$, zodForm$ } from "@modular-forms/qwik";

import { trpc } from "~/utils/trpc";

import { UrlFormSchema, type UrlForm } from "~/schemas/url-form";
import { getBaseUrl } from "~/utils/base-url";

export const useShortUrl = formAction$<UrlForm, { shortenUrl: string }>(
  async (values) => {
    const url = new URL(values.url);

    if (url.host === new URL(getBaseUrl()).host) {
      return { status: "error", message: "This url is already shortened" };
    }

    const shortenUrl = await trpc.url.create.mutate({ targetUrl: values.url });

    return {
      data: { shortenUrl: `${getBaseUrl()}/${shortenUrl}` },
      status: "success",
      message: "Url shortened",
    };
  },
  zodForm$(UrlFormSchema)
);
