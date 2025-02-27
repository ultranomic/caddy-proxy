// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: true,
  },
  eslint: {
    checker: true,
  },

  modules: ['@nuxt/eslint'],
});
