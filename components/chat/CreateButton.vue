<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

async function handleCreate() {
  const { data, error } = await useAsyncData(() => createChat());

  if (!error.value && data.value) {
    return navigateTo(`/chat/${data.value.chatId}`);
  }
}
</script>
<template>
  <Button @click="handleCreate">
    <IconsPlusIcon class="h-5 w-5" />
    {{ t("newChat") }}
  </Button>
</template>

<i18n lang="yaml">
en:
  newChat: "New Chat"
pt-BR:
  newChat: "Novo Chat"
</i18n>
