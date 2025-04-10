<template>
    <div>
        <h4>当前计数器：{{ state.counter }}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    setup() {
        const state = reactive({ counter: 100 });
        const increment = () => {
            state.counter++;
            console.log('counter :>> ', state.counter);
        };
        return {
            state,
            increment,
        };
    },
};
</script>

<style scoped></style>
