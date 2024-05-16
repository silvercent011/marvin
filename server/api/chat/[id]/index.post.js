import ollama from "ollama";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const chatId = getRouterParam(event, "id");

  const { model, message } = body;

  setResponseHeader(event, "Content-Type", "text/html");
  setResponseHeader(event, "Cache-Control", "no-cache");
  setResponseHeader(event, "Transfer-Encoding", "chunked");

  const storage = useStorage("chats");

  const streamData = [];

  const messagesStored = await storage.getItem(chatId);

  const messages = [
    ...messagesStored,
    {
      role: "user",
      content: message,
      model,
      createdAt: new Date(),
    },
  ];

  const response = await ollama.chat({
    model,
    messages,
    stream: true,
  });

  const stream = new ReadableStream({
    async start(controller) {
      for await (const part of response) {
        streamData.push(part.message.content);
        controller.enqueue(part.message.content);
      }
      controller.close();

      messages.push({
        role: "assistant",
        content: streamData.join(" "),
        model,
        createdAt: new Date(),
      });

      await storage.setItem(chatId, messages);
    },

    cancel() {},
  });

  return sendStream(event, stream);
});
