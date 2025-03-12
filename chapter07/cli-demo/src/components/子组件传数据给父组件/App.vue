<template>
    <CounterOperation @addN="addN" @add="add" @sub="sub" :count="count"></CounterOperation>
    <div>{{ count }}</div>
</template>

<script>
import CounterOperation from './CounterOperation.vue';
export default {
    components: {
        CounterOperation
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count++;
        },
        sub() {
            this.count--;
        },
        addN(n) {
            this.count = this.count + n
        }
    }
}
</script>

<style scoped>

</style>