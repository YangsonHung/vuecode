<template>
    <div>
        <slot name="one"></slot>
        <slot name="two"></slot>
        <slot name="three"></slot>
        <slot :name="name"></slot>
        <slot :name="test"></slot>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        test: String
    }
}
</script>

<style scoped>

</style>