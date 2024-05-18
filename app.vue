<!-- <script setup>
import { handleChat } from "./composables/handleChat";

const streamCache = ref("");

const model = ref("phi3");

const prompt = ref("Olá");

async function makeRequest() {
  const data = await createChat();

  await handleChat(data.chatId, model.value, prompt.value, streamCache);
}
</script>

<template>
  <Mainpage />
</template> -->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
