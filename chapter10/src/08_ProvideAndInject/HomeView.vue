<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name');
    const age = inject('age');
    const counter = inject('counter');
    const info = inject('info');

    const increment = () => {
      counter.value++;
      info.name = info.name + counter.value;
    }

    return {
      name,
      age,
      counter,
      increment
    }
  }
}
</script>

<template>
<div>
  <h1>{{name}}</h1>
  <p>{{age}}</p>
  <p>{{counter}}</p>
  <button @click="increment">home组件加1</button>
</div>
</template>

<style scoped>

</style>
