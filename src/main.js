import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import router from './router'

// use(router) -> arquivo router
createApp(App).use(router).mount('#app')
