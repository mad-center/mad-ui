import { App } from 'vue'
import Expansion from './lib/index.vue'

Expansion.install = (app: App): void => {
  app.component(Expansion.name, Expansion)
}

export default Expansion
