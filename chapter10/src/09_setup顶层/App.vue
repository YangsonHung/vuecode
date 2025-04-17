<script setup>
import { ref, defineProps, defineEmits, watchEffect, useSlots, useAttrs} from 'vue'
import EmitView from "@/09_setup顶层/EmitView.vue";
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['change'])

const counter = ref(0);

const emitRef = ref(null);


const increment = () => {
  counter.value++;
  emit('change');
}

const change = (e) => {
  console.log('e :>> ', e);
}

watchEffect(() => {
  console.log(emitRef.value)
  console.log(emitRef.value.name)
  console.log(emitRef.value.age)
}, { flush: 'post' });

const slots = useSlots();
const attrs = useAttrs();

</script>

<template>
<div>
  <button @click="increment">{{ counter }}</button>
  <div>
    {{ counter }}
  </div>
  <emit-view @change="change" ref="emitRef" />
</div>
</template>

<style scoped>

</style>
