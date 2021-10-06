import { App } from 'vue'
import Notification from './lib/index.vue'

Notification.install = (app: App): void => {
  app.component(Notification.name, Notification)
}

export default Notification
