<template>
  <div></div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  setup() {
    const instance = getCurrentInstance();
    console.log(
      "instance.appContext.config.globalProperties.$name :>> ",
      instance.appContext.config.globalProperties.$name
    );
    console.log(
      "instance.appContext.config.globalProperties.$mark :>> ",
      instance.appContext.config.globalProperties.$mark
    );
  },
};
</script>

<style scoped></style>
