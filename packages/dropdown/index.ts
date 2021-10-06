import { App } from 'vue'
import Dropdown from './lib/index.vue'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

export default Dropdown
