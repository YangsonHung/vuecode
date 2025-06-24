<template>
    <div>
        App组件
        <teleport to="body">12121212</teleport>
        <teleport to="body">
            <div>777</div>
        </teleport>
        <teleport to="body"><HelloWorld></HelloWorld></teleport>
    </div>
</template>

<script>
import HelloWorld from '@/01_render函数/HelloWorld.vue';
export default {
    components: {
        HelloWorld
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>