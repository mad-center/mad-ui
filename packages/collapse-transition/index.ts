import { App } from 'vue'
import CollapseTransition from './lib/index.vue'

CollapseTransition.install = (app: App): void => {
  app.component(CollapseTransition.name, CollapseTransition)
}

export default CollapseTransition
