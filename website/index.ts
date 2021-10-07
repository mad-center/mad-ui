import router from './router/index'
import { createApp } from 'vue'
import MadUI from '../packages'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(MadUI)
app.mount('#app')
