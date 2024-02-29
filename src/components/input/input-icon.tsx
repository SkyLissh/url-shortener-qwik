import { Slot, component$ } from "@builder.io/qwik";

export const InputIcon = component$(() => {
  return (
    <span class="absolute inset-y-0 left-0 ml-3 flex items-center">
      <Slot />
    </span>
  );
});
