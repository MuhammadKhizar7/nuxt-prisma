// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    origin: process.env.API_BASE_URL,
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
})
