import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/global.css'
import App from './App.vue'
import router from './router'


// use(router) -> arquivo router
createApp(App).use(router).use(createPinia()).mount('#app')
