<template>
    <div>
        <h4>当前计数器：{{ counter }}</h4>
        <button @click="increment">+1</button>
        <div>{{ info.counter }}</div>
        <div>{{ reactiveCounter.counter }}</div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    setup() {
        const counter = ref(100);
        const info = {
            counter
        }
        const reactiveCounter = reactive({
            counter
        })
        const increment = () => {
            counter.value++;
            console.log('counter :>> ', counter.value);
        };
        return {
            counter,
            increment,
            info,
            reactiveCounter
        };
    },
};
</script>

<style scoped></style>
