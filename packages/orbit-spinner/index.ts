import { App } from 'vue'
import OrbitSpinner from './lib/index.vue'

OrbitSpinner.install = (app: App): void => {
  app.component(OrbitSpinner.name, OrbitSpinner)
}

export default OrbitSpinner
