<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

defineProps(["chats"]);
</script>
<template>
  <div class="text-md font-semibold">{{ t("title") }}</div>
  <div class="flex-1 overflow-y-auto">
    <div class="flex flex-col gap-2">
      <ChatsItem v-for="chat in chats" :chat />
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  title: "History"
pt-BR:
  title: "Histórico"
</i18n>
