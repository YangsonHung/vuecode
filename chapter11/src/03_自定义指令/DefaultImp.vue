<template>
    <div>
        <!-- <input type="text" ref="input" /> -->
        <input placeholder="22222" type="text" v-focus />
        <button v-why:info.aaa.bbb="123456" @click="increment">当前计数{{ counter }}</button>
        <div v-format-time="'YYYY/MM/DD'">{{ timestamp }}</div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
    directives: {
        why: {
            created(el, bindings, vnode, prevNode) {
                console.log('created :>> ', el);
                console.log('bindings :>> ', bindings);
            },
            beforeMount() {
                console.log('beforeMount :>> ');
            },
            mounted() {
                console.log('mounted :>> ');
            },
            beforeUpdate() {
                console.log('beforeUpdate :>> ');
            },
            updated() {
                console.log('updated :>> ');
            },
            beforeUnmont() {
                console.log('beforeUnmont :>> ');
            },
            unMounted() {
                console.log('unMounted :>> ');
            },
        },
    },
    setup() {
        const input = ref(null);
        const counter = ref(0);
        const increment = () => counter.value++;

        const timestamp = "1645710167"
        onMounted(() => {
            // input.value.focus();
        });

        return {
            timestamp,
            input,
            counter,
            increment,
        };
    },
};
</script>

<style scoped></style>
