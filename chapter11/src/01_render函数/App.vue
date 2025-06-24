<script>
import RenderExample from "@/01_render函数/RenderExample.vue";
import RenderCounter from "@/01_render函数/RenderCounter.vue";
import RenderSetupCounter from './RenderSetupCounter.vue';
import RenderSlot from './RenderSlot.vue';
export default {
  components: {
    // RenderCounter,
    // RenderExample,
    RenderSlot,
    // RenderSetupCounter
  },
};
</script>

<template>
  <div>
    <!-- <RenderExample /> -->
    <!-- <RenderCounter /> -->
    <!-- <RenderSetupCounter></RenderSetupCounter> -->
     <RenderSlot></RenderSlot>
  </div>
</template>

<style scoped></style>
