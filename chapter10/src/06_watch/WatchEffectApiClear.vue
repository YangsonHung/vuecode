<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const age = ref(18);
    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log('ok==============');
      }, 2000)

      onInvalidate(() => {
        clearTimeout(timer);
        console.log('onInvalidate');
      });

      console.log(age.value);
    })

    const changeAge = () => {
      age.value++;
      // if (age.value > 20) {
      //   stop();
      // }
    }

    return {
      changeAge,
      age
    }
  }
}
</script>

<template>
  <div>
    {{ age }}
  </div>
  <button @click="changeAge">修改age</button>
</template>

<style scoped>

</style>
