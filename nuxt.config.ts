import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/css/main.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
  },
})