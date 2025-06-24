<template>
    <div>

    </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
    setup() {
        const instance = getCurrentInstance();
        console.log(' :>> ', instance.appContext.config.globalProperties.$name);
    }
}
</script>

<style scoped>

</style>