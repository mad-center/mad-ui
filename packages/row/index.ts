import { App } from 'vue'
import Row from './lib/index.vue'

Row.install = (app: App): void => {
  app.component(Row.name, Row)
}

export default Row
