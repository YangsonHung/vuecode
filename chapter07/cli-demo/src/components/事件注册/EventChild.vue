<template>
    <div>
        <button v-on:click="handleClick(8888)">点击调用父级事件</button>
        <br>
        <button v-bind:onclick="() => customClick(2233)">customClick</button>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        customClick: Function
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style scoped>

</style>