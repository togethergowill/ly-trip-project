import { createApp } from 'vue'
<<<<<<< HEAD
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.css'
import pinia from './stores'
import router from './router'



const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
=======
import App from './02.组件之间通信-父传子/App.vue'
// import App from "./16.组件绑定-v-model绑定/App.vue"
createApp(App).mount('#app')
>>>>>>> refs/remotes/origin/develop
