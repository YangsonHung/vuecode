<template>
    <div>
        <EventChild :customClick="ctmclick" v-on:click="handleChildClick"></EventChild>
    </div>
</template>

<script>
import EventChild from './EventChild.vue';
export default {
    components: {
        EventChild
    },
    methods: {
        handleChildClick: function (e) {
            console.log('e :>> ', e);
        },
        ctmclick: function (e) {
            console.log('e :>> ', e);
        }
    }
}
</script>

<style scoped>

</style>