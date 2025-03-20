<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        home 组件 - {{ name }} - {{ age }}
    </div>
    <div>count: {{ count }}</div>
    <button @click="btnClick">点击</button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'homeView',
    props: {
        name: {
            type: String,
            default: 'coderwhy'
        },
        age: {
            type: Number,
            default: 18
        }
    },
    data() {
        return {
            count: 0
        }
    },
    emits: ['pageClick'],
    methods: {
        btnClick() {
            this.count++;
            this.$emit('pageClick', 'coderwhy');
        }
    },
    activated() {
        console.log('homeView activated');
    },
    deactivated() {
        console.log('homeView deactivated');
    }
}
</script>

<style scoped>

</style>