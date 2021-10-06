import { App } from 'vue'
import Gear from './lib/index.vue'

Gear.install = (app: App): void => {
  app.component(Gear.name, Gear)
}

export default Gear
