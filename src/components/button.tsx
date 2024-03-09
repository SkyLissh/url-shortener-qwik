import type { PropsOf } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const button = tv({
  base: "h-min rounded-md transition-colors duration-300 ease-in-out font-semibold",
  variants: {
    variant: {
      flat: "bg-indigo-500 text-slate-100 hover:bg-indigo-400",
      text: "text-indigo-500 hover:bg-indigo-100 focus:bg-indigo-200",
    },
    size: {
      small: "text-sm p-2",
      medium: "text-base p-4",
      large: "text-lg p-4",
    },
  },
  defaultVariants: {
    variant: "flat",
    size: "medium",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type Props = ButtonVariants & PropsOf<"button">;

export const Button = component$(({ variant, size, class: class$, ...props }: Props) => {
  return (
    <button class={button({ variant, size, class: class$?.toString() })} {...props}>
      <Slot />
    </button>
  );
});
