import { App } from 'vue'
import Cover from './lib/index.vue'

Cover.install = (app: App): void => {
  app.component(Cover.name, Cover)
}

export default Cover
