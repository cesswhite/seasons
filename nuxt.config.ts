// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-og-image", "@nuxt/image"],
  css: ["~/assets/css/global.css"],
  experimental: {
    typedPages: true
  }
})