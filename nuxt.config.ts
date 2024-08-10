// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-og-image", "@nuxt/image"],
  css: ["~/assets/css/global.css"],
  experimental: {
    typedPages: true
  }
})