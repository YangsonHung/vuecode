<script>
import { onMounted, onUpdated, onUnmounted, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value++;
    };

    onMounted(() => {
      console.log("onMounted");
    });

    onMounted(() => {
      console.log("onMounted 2");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      counter,
      increment,
    };
  },
};
</script>

<template>
  <div>
    {{ counter }}
  </div>
  <button @click="increment">点击</button>
</template>

<style scoped></style>
