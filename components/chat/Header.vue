<template>
  <div
    class="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800"
  >
    <div class="flex items-center gap-4">
      <img
        alt="User avatar"
        class="h-10 w-10 rounded-full"
        height="{40}"
        :src="'/placeholder.svg' || ''"
        :style="{ aspectRatio: '40/40', objectFit: 'cover' }"
        :width="40"
      />
      <div>
        <h2 class="text-lg font-semibold dark:text-gray-50">AI Assistant</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Online</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <Button>Call</Button>
      <Button>Video</Button>
    </div>
  </div>
</template>
