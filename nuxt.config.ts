// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-11',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Alexey | Front-End Developer'
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700], 
    },
    display: 'swap', 
  },
})