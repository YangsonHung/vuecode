import { createApp } from 'vue'
// import App from './App.vue'
import App from './06_watch/App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// app.mixin({
//     created() {
//         console.log("global created");

//     },
// })

app.use(store).use(router).mount('#app')
