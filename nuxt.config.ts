// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpTo: process.env.SMTP_TO,

    public: {
      apiBaseURL: "",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Teplosnami",
      titleTemplate: "%s",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "telephone=no",
        },
      ],
      link: [
        {
          rel: "icon",
          sizes: "16x16",
          href: "/favicon.ico",
        },
      ],
    },
  },

  devtools: { enabled: true },
  css: ["~/app/assets/scss/main.scss"],

  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "nuxt-swiper",
    // "pinia-plugin-persistedstate/nuxt",
    "@nuxt/image-edge",
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
    [
      "yandex-metrika-module-nuxt3",
      {
        id: "103502811",
        webvisor: true,
      },
    ],
  ],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});
