import { App } from 'vue'
import CircularRipple from './lib/index.vue'

export default (app: App): void => {
  app.component(CircularRipple.name, CircularRipple)
}

export { CircularRipple }
