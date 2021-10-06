import { App } from 'vue'
import ImageReveal from './lib/index.vue'

ImageReveal.install = (app: App): void => {
  app.component(ImageReveal.name, ImageReveal)
}

export default ImageReveal
