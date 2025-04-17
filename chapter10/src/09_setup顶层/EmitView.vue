<script setup>
import { ref, defineEmits, defineExpose } from 'vue'
const emit = defineEmits(['change'])
const age = 18;
const name = ref('张三');
const increment = () => {
  emit('change', 1);
}


defineExpose({
  age,
  name
})
</script>

<template>
  <div>
    <button @click="increment">传数据给父组件</button>
  </div>
</template>

<style scoped>

</style>
