import { App } from 'vue'
import InputAddOn from './lib/index.vue'

InputAddOn.install = (app: App): void => {
  app.component(InputAddOn.name, InputAddOn)
}

export default InputAddOn
