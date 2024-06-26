export default defineEventHandler(async (event) => {
  const storage = useStorage("chats");

  const keys = await storage.getKeys();

  const chats = await Promise.all(
    keys.map(async (key) => {
      const data = await storage.getItem(key);
      console.log("data", data);
      //TODO: atualizar para o formato sem arrays
      if (data.length === 0) {
        return { chatId: key };
      }

      // @ts-ignore
      data.chatId = key;
      return data;
    })
  );

  return chats;
});
