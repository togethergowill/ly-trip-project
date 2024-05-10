import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.css'
import pinia from './stores'
import router from './router'



const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

