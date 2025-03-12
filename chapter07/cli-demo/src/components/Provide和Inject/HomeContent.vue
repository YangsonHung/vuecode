<template>
    <div>HomeContent</div>
    <div>name: {{ name }}</div>
    <div>count: {{ count }}</div>
    <div>arr: {{ arr }}</div>
    <div>len: {{ len }}</div>
</template>

<script>
export default {
    inject: ['name', 'count', 'arr', 'len']
}
</script>

<style scoped>

</style>