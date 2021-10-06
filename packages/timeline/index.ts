import { App } from 'vue'
import Timeline from './lib/index.vue'

Timeline.install = (app: App): void => {
  app.component(Timeline.name, Timeline)
}

export default Timeline
