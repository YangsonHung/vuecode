<script setup>
import { ref, onUpdated, nextTick } from "vue";
const message = ref("");
const count = ref(0);
const titleRef = ref(null);
const add = () => {
  message.value += "更新DOM";
  console.log("add :>> ", titleRef.value.offsetHeight);
};
onUpdated(() => {
  // console.log("onUpdated :>> ", titleRef.value.offsetHeight);
});
const increment = () => {
  count.value++;
};
const addNext = () => {
  message.value += "更新DOM";
  nextTick(() => {
    console.log("addNext :>> ", titleRef.value.offsetHeight);
  });
};
</script>

<template>
  <div>计数器：{{ count }}</div>
  <button @click="increment">+1</button>
  <h4 ref="titleRef">{{ message }}</h4>
  <button @click="add">更新DOM</button>
  <button @click="addNext">更新DOM点击next</button>
</template>

<style scoped></style>
