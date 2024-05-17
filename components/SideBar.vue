<template>
  <div
    class="flex h-full w-72 flex-col border-r bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
  >
    <header
      class="flex flex-col items-stretch justify-between border-b py-2 px-4"
    >
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-2">
          <IconsBotIcon class="h-6 w-6" />
          <h1 class="text-lg font-semibold">Marvin</h1>
        </div>
        <div class="flex items-center gap-1">
          <Button size="icon" variant="ghost">
            <IconsSettingsIcon class="h-5 w-5" />
            <span class="sr-only">Settings</span>
          </Button>
          <Button size="icon" variant="ghost">
            <IconsUserIcon class="h-5 w-5" />
            <span class="sr-only">Profile</span>
          </Button>
        </div>
      </div>
    </header>

    <div class="flex-1 overflow-auto p-2">
      <div class="flex gap-2 flex-1">
        <Tabs defaultValue="chat" class="flex-1">
          <TabsList class="flex flex-1">
            <TabsTrigger value="chat" class="flex-1">Chat</TabsTrigger>
            <TabsTrigger value="assistants" class="flex-1"
              >Assistants</TabsTrigger
            >
          </TabsList>
          <TabsContent value="chat">
            <div class="flex h-full flex-col gap-5 p-1">
              <Button>
                <IconsPlusIcon class="h-5 w-5" />
                New Chat
              </Button>
              <ChatsList />
            </div>
          </TabsContent>
          <TabsContent value="assistants" />
        </Tabs>
      </div>
    </div>
  </div>
</template>
