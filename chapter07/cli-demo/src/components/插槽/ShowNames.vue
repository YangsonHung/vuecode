<template>
    <div class="show-names">
        <template v-for="(item, index) in names" :key="item">
            <slot hyx="123" :item="item" :index="index"></slot>
            <br>
        </template>
        <slot name="hyx"></slot>
    </div>
</template>

<script>
export default {
    props: {
        names: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped></style>