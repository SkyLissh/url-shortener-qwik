import { Slot, component$ } from "@builder.io/qwik";

type Props = {
  message: string;
  show?: boolean;
};

export const Tooltip = component$(({ message, show }: Props) => {
  return (
    <div class="relative">
      {show && (
        <div class="absolute -bottom-[80%] left-1/2 -translate-x-1/2  rounded-lg border border-slate-400 bg-slate-200 p-2 text-sm">
          <span>{message}</span>
        </div>
      )}
      <Slot />
    </div>
  );
});
