<script setup>
import { handleChat } from "./composables/handleChat";

const streamCache = ref("");

const model = ref("");

const prompt = ref("");

async function makeRequest() {
  const data = await createChat();

  await handleChat(data.chatId, model.value, prompt.value, streamCache);
}
</script>

<template>
  <div>
    {{ streamCache }}
  </div>
  <button @click="makeRequest">Call</button>
</template>
