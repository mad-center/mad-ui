import { App } from 'vue'
import Shield from './lib/index.vue'

Shield.install = (app: App): void => {
  app.component(Shield.name, Shield)
}

export default Shield
