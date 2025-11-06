// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/image', '@nuxt/content'],
  image: {
    provider: 'github',
    github: {},
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'vitesse-light',
        },
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
