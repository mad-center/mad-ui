import { App } from 'vue'
import Tag from './lib/index.vue'

Tag.install = (app: App): void => {
  app.component(Tag.name, Tag)
}

export default Tag
