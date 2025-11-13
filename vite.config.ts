import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import contentGenerator, { contentGeneratorBuild } from './plugins/content-generator'

// https://vite.dev/config/
export default defineConfig({
  base: '/aboutme/',
  plugins: [VueRouter(), vue(), vueJsx(), vueDevTools(), UnoCSS(), contentGenerator(), contentGeneratorBuild()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
