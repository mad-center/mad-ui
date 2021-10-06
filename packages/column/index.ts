import { App } from 'vue'
import Column from './lib/index.vue'

Column.install = (app: App): void => {
  app.component(Column.name, Column)
}

export default Column
