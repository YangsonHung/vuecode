import { createApp } from 'vue';
import App from './06_nexttick/App.vue';
import router from './router';
import store from './store';
import registerDirectives from './directives';
import pluginsObject from '@/plugins/plugins_object';
import pluginsFunction from "@/plugins/plugins_function";

const app = createApp(App);

app.directive('focus', {
    mounted(el, bindings) {
        console.log('bindings 33333333:>> ', bindings);
        el.focus();
    },
});

registerDirectives(app);

app.use(pluginsFunction).use(pluginsObject).use(store).use(router).mount('#app');
