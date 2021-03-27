import '@mad-ui/base/base.scss'

import { base } from '@mad-ui/base'

console.log(base)

import { createApp } from 'vue'
import playground from './playground.vue'

const app = createApp(playground)
app.mount('#app')
