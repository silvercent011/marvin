export async function createChat() {
  return await $fetch("/api/chat/new", {
    method: "POST",
  });
}
