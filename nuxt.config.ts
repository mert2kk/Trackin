import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      googleClientId: "370536410950-5v5k9bifbf46u1eaq3d3pk092g21ds72.apps.googleusercontent.com"
    }
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/css/main.css',
  ],
  plugins: [
    '~/plugins/googleAuth.client.ts',
    '~/plugins/vuetify.client.ts',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  // vite: {
  //   plugins: [
  //     vuetify({
  //       autoImport: true,
  //     }),
  //   ],
  // },

  devtools: {
    enabled: true,
  },
})
