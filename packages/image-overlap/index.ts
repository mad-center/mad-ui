import { App } from 'vue'
import ImageOverlap from './lib/index.vue'

ImageOverlap.install = (app: App): void => {
  app.component(ImageOverlap.name, ImageOverlap)
}

export default ImageOverlap
