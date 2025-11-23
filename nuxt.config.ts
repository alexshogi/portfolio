// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-11-11',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Alexey | Front-End Developer'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  i18n: {
    defaultLocale: 'ru',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ]
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700], 
    },
    display: 'swap', 
  }
})