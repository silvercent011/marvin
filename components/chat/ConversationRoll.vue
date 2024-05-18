<script lang="ts" setup>
import { Icon } from "#components";
import type { SetupContext } from "vue";

const element = ref<HTMLDivElement | null>(null);

onMounted(() => {
  element.value!.scrollTop = element.value!.scrollHeight;
});

const MessageLayout = defineComponent((_: any, { slots }: SetupContext) => {
  return () => h("div", { class: "flex items-start gap-4" }, slots.default?.());
});
const Message = defineComponent({
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }: SetupContext) {
    console.log(props.role);

    return () =>
      h(MessageLayout, [
        props.role === "assistant" &&
          h(Icon, {
            size: "40",
            name: "fluent:bot-sparkle-20-filled",
            class: "aspect-square h-10",
          }),

        ,
        h(
          "div",
          {
            class:
              props && props.role === "assistant"
                ? "flex-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800"
                : "flex-1 rounded-lg bg-gray-900 p-4 text-sm text-gray-50 dark:bg-gray-700",
          },
          slots.default?.()
        ),

        props.role !== "assistant" &&
          h(Icon, {
            size: "40",
            name: "fluent:person-12-filled",
            class: "aspect-square h-10",
          }),
      ]);
  },
});
</script>

<template>
  <div class="overflow-y-auto" ref="element">
    <div class="flex flex-col gap-6 p-5 container mx-auto px-10">
      <Message role="assistant">
        Hello! I'm an AI assistant. How can I help you today?
      </Message>

      <Message role="user">
        Hi there! I'm wondering if you can help me with a task I'm working on.
      </Message>
    </div>
  </div>
</template>
