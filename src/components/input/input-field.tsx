import { Slot, component$ } from "@builder.io/qwik";

import clsx from "clsx";

type Props = {
  iconPosition?: "left" | "right";
};

export const InputField = component$(({ iconPosition }: Props) => {
  return (
    <span
      class={clsx("relative block w-full text-xl text-slate-600", {
        "[&>*:first-child]-left-0 [&>*:first-child]-ml-3 [&>*:last-child]:pl-10":
          iconPosition === "left",
        "[&>*:first-child]-right-0 [&>*:first-child]-mr-3 [&>*:last-child]:pr-10":
          iconPosition === "right",
      })}
    >
      {iconPosition && <Slot name="icon" />}

      <Slot name="input" />
    </span>
  );
});
