<template>
    <div>
        NavBar
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "NavBar MSG"
        }
    },
    methods: {
        sayHello() {
            console.log('Hello from NavBar');
            return "Hello from NavBar return"
        }
    }
}
</script>

<style scoped>

</style>