import { createApp } from 'vue'
import {createPinia} from 'pinia'
import persist from 'pinia-plugin-persistedstate'

import App from './App.vue'

const pinia = createPinia()//创建Pinia实例
const app = createApp(App)//创建根实例

app.use(pinia.use(persist))
app.mount('#app')
