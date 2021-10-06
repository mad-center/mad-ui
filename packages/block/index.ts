import { App } from 'vue'
import Block from './lib/index.vue'

Block.install = (app: App): void => {
  app.component(Block.name, Block)
}

export default Block
