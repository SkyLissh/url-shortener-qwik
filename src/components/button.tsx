import type { PropsOf } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

export const Button = component$(({ ...props }: PropsOf<"button">) => {
  return (
    <button
      class="h-min rounded-md bg-indigo-500 p-4 text-3xl text-slate-100 transition-colors duration-300 ease-in-out hover:bg-indigo-400"
      {...props}
    >
      <Slot />
    </button>
  );
});
