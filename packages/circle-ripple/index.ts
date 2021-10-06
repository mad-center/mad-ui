import { App } from 'vue'
import CircleRipple from './lib/index.vue'

CircleRipple.install = (app: App): void => {
  app.component(CircleRipple.name, CircleRipple)
}

export default CircleRipple
