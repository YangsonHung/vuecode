import { createApp } from 'vue'
import App from './components/引用元素和组件/App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
