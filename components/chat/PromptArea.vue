<template>
  <form class="px-4 pb-4 bg-transparent container mx-auto">
    <div
      class="flex items-center gap-2 p-2 rounded-full bg-slate-800 border border-slate-600"
    >
      <Textarea
        rows="1"
        class="border-none flex-1 resize-none rounded-full h-10 bg-transparent"
        placeholder="Type your message..."
      />
      <Button class="rounded-full">Send</Button>
    </div>
  </form>
</template>
