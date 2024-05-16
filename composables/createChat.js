export async function createChat() {
  const data = await $fetch("/api/chat/new", {
    method: "POST",
  });

  return data;
}
