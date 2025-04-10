<script>
import { ref, watchEffect, watchPostEffect } from 'vue'
export default {
  setup() {
    const titleRef = ref(null);

    // watchEffect(() => {
    //   console.log(titleRef.value);
    // }, { flush: 'post' })

    watchPostEffect(() => {
      console.log(titleRef.value)
    });


    return {
      titleRef,
    }
  }
}
</script>

<template>
  <h4 ref="titleRef">哈哈哈</h4>
</template>

<style scoped>

</style>
