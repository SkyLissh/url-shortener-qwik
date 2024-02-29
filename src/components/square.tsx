import type { PropsOf } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import { twMerge } from "tailwind-merge";

export const Square = component$(({ class: class$, ...props }: PropsOf<"div">) => {
  return (
    <div
      class={twMerge(
        "h-16 w-16 rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500",
        class$?.toString()
      )}
      {...props}
    ></div>
  );
});
