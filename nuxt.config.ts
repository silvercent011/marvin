// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    storage: {
      chats: {
        driver: "fs",
        base: "./db/chats",
      },
    },
  },
});
