import { App } from 'vue'
import Progress from './lib/index.vue'

Progress.install = (app: App): void => {
  app.component(Progress.name, Progress)
}

export default Progress
