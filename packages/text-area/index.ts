import { App } from 'vue'
import TextArea from './lib/index.vue'

TextArea.install = (app: App): void => {
  app.component(TextArea.name, TextArea)
}

export default TextArea
