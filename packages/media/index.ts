import { App } from 'vue'
import Media from './lib/index.vue'

Media.install = (app: App): void => {
  app.component(Media.name, Media)
}

export default Media
