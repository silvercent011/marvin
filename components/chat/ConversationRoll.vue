<template>
  <div class="overflow-y-auto">
    <div class="flex flex-col gap-6 p-5 container mx-auto px-10">
      <div class="flex items-start gap-4" v-for="i in 100">
        <Icon
          size="40"
          name="fluent:bot-sparkle-20-filled"
          class="aspect-square h-10"
        />
        <div class="flex-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800">
          <p>Hello! I'm an AI assistant. How can I help you today?</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div
          class="flex-1 rounded-lg bg-gray-900 p-4 text-sm text-gray-50 dark:bg-gray-700"
        >
          <p>
            Hi there! I'm wondering if you can help me with a task I'm working
            on.
          </p>
        </div>
        <Icon
          size="40"
          name="fluent:person-12-filled"
          class="aspect-square h-10"
        />
      </div>
    </div>
  </div>
</template>
