<template>
    <div>
        <h1>{{ title }}</h1>
        <div>{{ content }}</div>
        <div>{{ count }}{{ typeof count }}</div>
        <div>{{ status }}</div>
    </div>
</template>

<script>
export default {
    // props: ['title', 'content']
    props: {
        title: String,
        content: {
            type: String,
            required: false,
            default: "默认内容"
        },
        count: [String, Number],
        obj: {
            type: Object,
            default() {
                return {
                    a: 1
                }
            }
        },
        status: {
            validator(value) {
                return ['1', '2', '3'].includes(value);
            }
        },
        fn: {
            type: Function,
            default() {
                return 'Default Funtion'
            }
        }
    }
}
</script>

<style scoped>

</style>