<script>
import { h } from 'vue';

export default {
    data() {
        return {};
    },
    methods: {},
    render() {
        return h('div', { class: 'hello-world' }, [
            h('h4', null, 'HelloWorld组件'),
            this.$slots.default ? this.$slots.default({ name: 'coderwhy' }) : h('span', null, '我是插槽默认值'),
        ]);
    },
};
</script>

<style scoped>
.hello-world {
    border: 1px solid #ddd;
    margin: 8px;
}
</style>
