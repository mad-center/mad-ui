import { App } from 'vue'
import ImageCross from './lib/index.vue'

ImageCross.install = (app: App): void => {
  app.component(ImageCross.name, ImageCross)
}

export default ImageCross
