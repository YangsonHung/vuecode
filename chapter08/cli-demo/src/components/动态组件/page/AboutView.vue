<template>
    <div>
        about 组件{{ count }}
    </div>
    <button @click="btnClick">点击递增</button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'about',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        btnClick() {
            this.count++;
        }
    }
}
</script>

<style scoped>

</style>