<template>
    <div>
        <h4 class="red">hello red</h4>
        <h4 class="yellow">hello yellow</h4>
        <h4 class="blue">hello blue</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color1: 'red',
            color2: 'yellow',
        }
    },
    computed: {
        color3() {
            return 'blue'
        }
    }
}
</script>

<style scoped>
.red {
    color: v-bind(color1);
}
.yellow {
    color: v-bind(color2);
}
.blue {
    color: v-bind(color3);
}
</style>