<template>
    <div class="main">
        <main-banner></main-banner>
        <main-product-list></main-product-list>
        <div class="msg">hello main</div>
    </div>
</template>

<script>
import MainBanner from './MainBanner.vue';
import MainProductList from './MainProductList.vue';
export default {
    name: 'AppMain',
    components: {
        MainBanner,
        MainProductList
    }
}
</script>

<style scoped></style>