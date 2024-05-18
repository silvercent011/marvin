<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

defineProps(["chat"]);
</script>

<template>
  <NuxtLink
    :to="`/chat/${chat.chatId}`"
    class="flex items-center gap-4 rounded-md bg-gray-200 px-3 py-2 text-sm dark:bg-gray-700"
  >
    <div class="flex-1">
      <div class="font-semibold">{{ chat.title || t("newChat") }}</div>
    </div>
  </NuxtLink>
</template>

<i18n lang="json">
{
  "en": {
    "newChat": "New Chat"
  },
  "pt-BR": {
    "newChat": "Novo Chat"
  }
}
</i18n>
