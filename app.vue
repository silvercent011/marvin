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

<script setup lang="ts">
import { appWindow } from "@tauri-apps/api/window";

onMounted(async () => {
  await appWindow.setDecorations(true);
});

function minimize() {
  appWindow.minimize();
}

async function maximize() {
  (await appWindow.isMaximized())
    ? appWindow.unmaximize()
    : appWindow.maximize();
}

function close() {
  appWindow.close();
}
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <div class="titlebar-button" @click="minimize" id="titlebar-minimize">
      <img
        src="https://api.iconify.design/mdi:window-minimize.svg"
        alt="minimize"
      />
    </div>
    <div class="titlebar-button" @click="maximize" id="titlebar-maximize">
      <img
        src="https://api.iconify.design/mdi:window-maximize.svg"
        alt="maximize"
      />
    </div>
    <div class="titlebar-button" @click="close" id="titlebar-close">
      <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
    </div>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
