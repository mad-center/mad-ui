import { App } from 'vue'
import Icon from './lib/index.vue'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

export default Icon
