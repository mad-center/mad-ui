import { App } from 'vue'
import InsetBorder from './lib/index.vue'

InsetBorder.install = (app: App): void => {
  app.component(InsetBorder.name, InsetBorder)
}

export default InsetBorder
