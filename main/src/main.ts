import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

/**
 * qiankun启动方式
 * 
 * 1. registerMicroApps + start 自动加载
 * 2. loadMicroApp 手动加载
 */
import './qiankun'



const app = createApp(App)
app.use(router)
app.mount('#app')