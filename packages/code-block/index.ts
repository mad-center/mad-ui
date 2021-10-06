import { App } from 'vue'
import CodeBlock from './lib/index.vue'

CodeBlock.install = (app: App): void => {
  app.component(CodeBlock.name, CodeBlock)
}

export default CodeBlock
