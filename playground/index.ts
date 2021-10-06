import router from './router/index'
import { createApp } from 'vue'
import MadUI from '../packages'
import playground from './playground.vue'

const app = createApp(playground)
app.use(router)
app.use(MadUI)
app.mount('#app')
