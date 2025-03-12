<template>
    <div>
        <button @click="changeCount">changeCount</button>
        <div>app：{{ count }}</div>
        <Home></Home>
    </div>
</template>

<script>
import Home from './Home.vue';
import { computed } from 'vue'
export default {
    data() {
        return {
            count: 11,
            arr: [1]
        }
    },
    methods: {
        changeCount() {
            this.count = 222;
            this.arr.push(2)
        }
    },
    components: {
        Home
    },
    provide() {
        return {
            name: 'hyx',
            count: computed(() => this.count),
            arr: this.arr,
            len: computed(() => this.arr.length)
        }
    }
}
</script>

<style scoped></style>