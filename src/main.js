import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './theme/index.scss'
import router from './router'

import store from './store'
// store.dispatch('user/getUserInfo') // 获取用户信息
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
