import { App } from 'vue'
import Image from './lib/index.vue'

Image.install = (app: App): void => {
  app.component(Image.name, Image)
}

export default Image
