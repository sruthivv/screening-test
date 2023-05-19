// https://nuxt.com/docs/api/configuration/nuxt-config

import{resolve} from 'path';
export default defineNuxtConfig({
alias:{
  '@assets': resolve(__dirname, 'assets'),
},
css: [
  'bootstrap/dist/css/bootstrap.css',
  '@assets/css/main.css',
],
modules: ['@nuxtjs/tailwindcss',
'nuxt-icon','@element-plus/nuxt'],
 tailwindcss: {
    viewer: false
  },
})
