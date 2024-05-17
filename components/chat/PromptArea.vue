<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <form class="px-4 pb-4 bg-transparent container mx-auto">
    <div
      class="flex items-center gap-2 p-2 rounded-full bg-slate-800 border border-slate-600"
    >
      <Textarea
        rows="1"
        class="border-none flex-1 resize-none rounded-full h-10 bg-transparent"
        :placeholder="t('placeholder')"
      />
      <Button size="icon" class="rounded-full">
        <Icon name="fluent:arrow-up-12-filled" />
      </Button>
    </div>
  </form>
</template>

<i18n lang="yaml">
en:
  placeholder: "Type your message..."
pt-BR:
  placeholder: "Digite sua mensagem..."
</i18n>
