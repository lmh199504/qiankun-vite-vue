import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router, routes } from './router'
const app = createApp(App, { routes })
app.use(router)
app.mount('#app')