import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { useForm, zodForm$, type InitialValues } from "@modular-forms/qwik";
import { LuChevronRight, LuLink, LuLoader2 } from "@qwikest/icons/lucide";

import { Button } from "~/components/button";
import { Clipboard } from "~/components/clipboard";
import { Input, InputField, InputIcon } from "~/components/input";
import { Square } from "~/components/square";

import { UrlFormSchema, type UrlForm } from "~/schemas/url-form";
import { useShortUrl } from "~/server/actions/url";

export const useFormLoader = routeLoader$<InitialValues<UrlForm>>(() => ({
  url: "",
}));

export default component$(() => {
  const [urlForm, { Form, Field }] = useForm<UrlForm, { shortenUrl: string }>({
    loader: useFormLoader(),
    validate: zodForm$(UrlFormSchema),
    validateOn: "input",
    action: useShortUrl(),
  });

  return (
    <>
      <Square class="absolute right-8 top-8" />
      <Square class="absolute inset-0 left-1/4 top-28 h-20 w-20" />
      <Square class="absolute bottom-1/4 right-8 hidden h-20 w-20 sm:block" />
      <Square class="absolute bottom-16 right-1/4" />
      <Square class="absolute bottom-28 left-20 h-20 w-20" />
      <main class="container  mx-auto flex h-screen flex-col items-center justify-center gap-8 px-4">
        <h1 class="text-center text-6xl font-bold text-indigo-500">URL Shortener</h1>
        <p class="text-center text-4xl font-medium text-slate-900">
          Create short urls, in a simpler way!
        </p>
        <Form class="flex w-full flex-row gap-4 sm:max-w-lg">
          <Field name="url">
            {(field, props) => (
              <div class="flex flex-auto flex-col gap-4">
                <InputField iconPosition="left">
                  <InputIcon q:slot="icon">
                    <LuLink />
                  </InputIcon>
                  <Input
                    q:slot="input"
                    type="text"
                    value={urlForm.response.data?.shortenUrl}
                    placeholder="https://qwik.builder.io"
                    invalid={field.error !== ""}
                    {...props}
                  />
                </InputField>
                {field.error && <p class="text-red-500">{field.error}</p>}
                {urlForm.response.status === "error" && (
                  <p class="text-red-500">{urlForm.response.message}</p>
                )}
              </div>
            )}
          </Field>

          {urlForm.response.status === "success" ? (
            <Clipboard text={urlForm.response.data?.shortenUrl ?? ""} />
          ) : (
            <Button type="submit">
              {urlForm.submitting ? (
                <LuLoader2 class="animate-spin" />
              ) : (
                <LuChevronRight />
              )}
            </Button>
          )}
        </Form>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
