import { App } from 'vue'
import Wave from './lib/index.vue'

Wave.install = (app: App): void => {
  app.component(Wave.name, Wave)
}

export default Wave
