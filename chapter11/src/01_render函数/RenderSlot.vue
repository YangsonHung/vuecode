<template>
    <div></div>
</template>

<script>
import { h } from 'vue';
import HelloWorld from './HelloWorld.vue';

export default {
    data() {
        return {};
    },
    methods: {},
    render() {
        return h('div', { class: 'render-slot' }, [
            h(HelloWorld, null, { default: props => h('span', null, `name: ${props.name}`) }),
        ]);
    },
};
</script>

<style scoped>
.render-slot {
    border: 1px solid #ddd;
    margin: 8px;
}
</style>
