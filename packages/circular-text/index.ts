import { App } from 'vue'
import CircularText from './lib/index.vue'

CircularText.install = (app: App): void => {
  app.component(CircularText.name, CircularText)
}

export default CircularText
