import { component$ } from "@builder.io/qwik";

import Image from "~/assets/404.svg?jsx";

export default component$(() => {
  return (
    <main class="container mx-auto flex h-screen flex-col items-center justify-center gap-8 px-4">
      <Image class="h-1/2 w-full md:w-2/4" />
      <h1 class="text-center text-xl font-bold text-indigo-500 md:text-3xl">
        It seems that the page you are looking for does not exist
      </h1>
    </main>
  );
});
