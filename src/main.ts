import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import 'virtual:uno.css'
import { routes } from 'vue-router/auto-routes'
console.log(routes)

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes, base: import.meta.env.BASE_URL },
)
