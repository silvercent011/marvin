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
  ssr: false,
  vite: {
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      strictPort: true,
      // @ts-ignore
      host: "0.0.0.0",
      hmr: {
        protocol: "ws",
        host: "0.0.0.0",
        port: 5183,
      },
    },
  },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxtjs/i18n"
  ],
  colorMode: {
    classSuffix: "",
    preference: "system",
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});