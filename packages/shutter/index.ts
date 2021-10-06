import { App } from 'vue'
import Shutter from './lib/index.vue'

Shutter.install = (app: App): void => {
  app.component(Shutter.name, Shutter)
}

export default Shutter
