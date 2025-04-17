<script>
import { provide, ref, reactive, readonly } from 'vue'
import HomeView from './HomeView.vue'
export default {
  components: {
    HomeView
  },
  setup() {
    const name = 'Hung';
    const age  = 18;
    let counter = ref(100);
    const info = reactive({
      name: 'Hung',
      age: 18
    })
    provide('info', readonly(info))
    provide('name', name);
    provide('age', age);
    provide('counter', counter);
    const increment = () => {
      counter.value++;
    }

    return {
      increment,
      counter,
      name,
      age,
      info
    }
  }
}
</script>

<template>
  <div>
    <div>
      <button @click="increment">Increment</button>
      <div>Counter: {{ counter }}</div>
      <div>{{info.name}}</div>
    </div>
    <HomeView />
  </div>
</template>

<style scoped>

</style>
