export async function handleChat(chatId, model, message, reference) {
  const data = await fetch(`/api/chat/${chatId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      message: message,
    }),
  });

  const reader = data.body.getReader();

  const decoder = new TextDecoder("utf-8");

  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    if (value) {
      reference.value += decoder.decode(value, { stream: true });
    }
  }
}
