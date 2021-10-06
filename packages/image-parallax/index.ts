import { App } from 'vue'
import ImageParallax from './lib/index.vue'

ImageParallax.install = (app: App): void => {
  app.component(ImageParallax.name, ImageParallax)
}

export default ImageParallax
