import { App } from 'vue'
import Grid from './lib/index.vue'

Grid.install = (app: App): void => {
  app.component(Grid.name, Grid)
}

export default Grid
