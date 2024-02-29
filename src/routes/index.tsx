import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import { useForm, zodForm$, type InitialValues } from "@modular-forms/qwik";
import { LuChevronRight, LuLink } from "@qwikest/icons/lucide";
import { z } from "zod";

import { Button } from "~/components/button";
import { Input, InputField, InputIcon } from "~/components/input";
import { Square } from "~/components/square";

const FormSchema = z.object({
  url: z.string().min(1, "Url is required").url("Please enter a valid url"),
});

type UrlForm = z.infer<typeof FormSchema>;

export const useFormLoader = routeLoader$<InitialValues<UrlForm>>(() => ({
  url: "",
}));

export default component$(() => {
  const [_, { Form, Field }] = useForm<UrlForm>({
    loader: useFormLoader(),
    validate: zodForm$(FormSchema),
    validateOn: "input",
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
                    placeholder="https://qwik.builder.io"
                    invalid={field.error !== ""}
                    {...props}
                  />
                </InputField>
                {field.error && <p class="text-red-500">{field.error}</p>}
              </div>
            )}
          </Field>

          <Button type="submit">
            <LuChevronRight />
          </Button>
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
