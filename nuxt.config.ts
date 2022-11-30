// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    APP_SECRET: process.env.APP_SECRET, //,
    // NUXT_AUTH_URL: process.env.NUXT_AUTH_URL,
  },
})
