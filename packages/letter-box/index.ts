import { App } from 'vue'
import LetterBox from './lib/index.vue'

LetterBox.install = (app: App): void => {
  app.component(LetterBox.name, LetterBox)
}

export default LetterBox
