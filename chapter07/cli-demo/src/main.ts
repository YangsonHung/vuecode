import { createApp } from 'vue'
// import App from './App.vue'
import App from './components/Provide和Inject/App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
