import { App } from 'vue'
import LetterPaper from './lib/index.vue'

LetterPaper.install = (app: App): void => {
  app.component(LetterPaper.name, LetterPaper)
}

export default LetterPaper
