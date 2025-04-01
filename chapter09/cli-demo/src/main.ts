import { createApp } from 'vue'
import App from './components/transition-group列表动画/App.vue'
import router from './router'
import store from './store'
import 'animate.css'

createApp(App).use(store).use(router).mount('#app')
