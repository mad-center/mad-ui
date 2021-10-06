import { App } from 'vue'
import ClipPath from './lib/index.vue'

ClipPath.install = (app: App): void => {
  app.component(ClipPath.name, ClipPath)
}

export default ClipPath
