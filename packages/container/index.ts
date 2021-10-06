import { App } from 'vue'
import Container from './lib/index.vue'

Container.install = (app: App): void => {
  app.component(Container.name, Container)
}

export default Container
