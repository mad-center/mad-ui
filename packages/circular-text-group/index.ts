import { App } from 'vue'
import CircularTextGroup from './lib/index.vue'

CircularTextGroup.install = (app: App): void => {
  app.component(CircularTextGroup.name, CircularTextGroup)
}

export default CircularTextGroup
