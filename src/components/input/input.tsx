import type { PropsOf } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import { clsx } from "clsx";

type Props = {
  invalid?: boolean;
};

export const Input = component$(
  ({ invalid, ...props }: Props & PropsOf<"input">) => {
    return (
      <input
        class={clsx(
          "w-full rounded-md border  bg-slate-200 p-4",
          invalid
            ? "border-red-500 focus:outline-red-500"
            : "border-slate-400 focus:outline-indigo-500",
        )}
        {...props}
      />
    );
  },
);
