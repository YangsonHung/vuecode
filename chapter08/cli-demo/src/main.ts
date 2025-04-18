import { createApp } from 'vue'
import App from './components/组件v-model/App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
