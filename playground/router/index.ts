import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../Home.vue'
import {
  elements,
  components,
  formElements,
  layout,
  patterns,
  plugins,
  views,
} from './routes'

// const mapRoutes = (items, path) => {
//   return items.map((item) => ({
//     name: item.name,
//     path: `/${path}/${item.name}`,
//     component: require(`@/../website/${path}/${item.name}/index`).default,
//   }))
// }

// const elementRoutes = mapRoutes(elements, 'elements')
// const componentRoutes = mapRoutes(components, 'components')
// const formRoutes = mapRoutes(formElements, 'form')
// const layoutRoutes = mapRoutes(layout, 'layout')
// const patternRoutes = mapRoutes(patterns, 'patterns')
// const pluginRoutes = mapRoutes(plugins, 'plugins')
// const viewRoutes = mapRoutes(views, 'views')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../About.vue'),
  },
]
  .concat
  // elementRoutes,
  // componentRoutes,
  // formRoutes,
  // layoutRoutes,
  // patternRoutes,
  // pluginRoutes,
  // viewRoutes
  ()

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
