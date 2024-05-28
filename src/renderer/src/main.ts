import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'swiper/css'

createApp(App).use(router).mount('#app')
