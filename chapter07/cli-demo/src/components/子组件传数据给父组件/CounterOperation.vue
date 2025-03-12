<template>
    <div>
        <input type="text" v-model.number="num">
        <button @click="add()">add</button>
        <button @click="sub()">sub</button>
        <button @click="addN()">+n</button>
    </div>
</template>

<script>
export default {
    props: ['count'],
    // emits: ['add', 'sub', 'addN'],
    emits: {
        add: null,
        sub: null,
        addN(n) {
            if (n>10) return true;
            return false;
        }
    },
    data() {
        return {
            num: 0
        }
    },
    methods: {
        add() {
            this.$emit('add');
        },
        sub() {
            this.$emit('sub');
        },
        addN() {
            this.$emit('addN', this.num);
        }
    }
}
</script>

<style scoped>

</style>