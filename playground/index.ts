// import '@mad-ui/base/base.scss'

import { base } from '@mad-ui/base'
// console.log(base.colors['body-bg-color'])

import router from './router/index'
import { createApp } from 'vue'
import playground from './playground.vue'

const app = createApp(playground)
app.use(router)
app.mount('#app')
