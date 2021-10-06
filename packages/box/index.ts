import { App } from 'vue'
import Box from './lib/index.vue'

Box.install = (app: App): void => {
  app.component(Box.name, Box)
}

export default Box
