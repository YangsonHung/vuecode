<template>
    <div style="border: 1px solid #ddd;margin: 10px;">
        <h4>{{ title }}</h4>
        <button @click="bar">点击复用basepage的方法</button>
    </div>
</template>

<script>
import BasePage from './BasePage.vue';
export default {
    extends: BasePage
}
</script>

<style scoped>

</style>