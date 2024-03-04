import { $, component$, useSignal } from "@builder.io/qwik";
import { LuClipboard } from "@qwikest/icons/lucide";

import { Button } from "./button";
import { Tooltip } from "./tooltip";

export const Clipboard = component$(({ text }: { text: string }) => {
  const message = useSignal("");
  const showTooltip = useSignal(false);

  const copyToClipboard = $(async () => {
    try {
      await navigator.clipboard.writeText(text);
      message.value = "Copied!";
      showTooltip.value = true;
    } catch {
      message.value = "Error";
      showTooltip.value = true;
    }
  });

  return (
    <Tooltip message={message.value} show={showTooltip.value}>
      <Button
        type="button"
        onClick$={copyToClipboard}
        onFocusOut$={() => (showTooltip.value = false)}
      >
        <LuClipboard />
      </Button>
    </Tooltip>
  );
});
