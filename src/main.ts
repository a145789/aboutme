import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import 'virtual:uno.css'
import { routes } from 'vue-router/auto-routes'
import type { RouteRecordRaw } from 'vue-router'
import { moduleRawPath } from './content'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes, base: import.meta.env.BASE_URL },
)

export function includedRoutes(paths: string[], routes: RouteRecordRaw[]) {
  const staticPaths = paths.filter((path) => !path.includes(':'))

  const dynamicPaths = Object.keys(moduleRawPath).map((key) => `/${key}`)

  return [...staticPaths, ...dynamicPaths]
}
