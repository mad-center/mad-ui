import { App } from 'vue'
import TreeItem from './lib/index.vue'

TreeItem.install = (app: App): void => {
  app.component(TreeItem.name, TreeItem)
}

export default TreeItem
