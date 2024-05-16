export default defineEventHandler(async (event) => {
  const storage = useStorage("chats");

  const chatId = "chat-" + Math.random().toString(36).substring(2);

  const messages = [];

  await storage.setItem(chatId, messages);

  return {
    chatId: chatId,
  };
});
