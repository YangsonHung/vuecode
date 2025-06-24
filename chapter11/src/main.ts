import { createApp } from 'vue';
import App from './05_插件/App.vue';
import router from './router';
import store from './store';
import registerDirectives from './directives';
import pluginsObject from './plugins/plugins_object';

const app = createApp(App);

app.directive('focus', {
    mounted(el, bindings) {
        console.log('bindings 33333333:>> ', bindings);
        el.focus();
    },
});

registerDirectives(app);

app.use(pluginsObject).use(store).use(router).mount('#app');
