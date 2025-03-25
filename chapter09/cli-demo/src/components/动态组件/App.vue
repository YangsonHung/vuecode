<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {},
};
</script>

<template>
  <div>
    <button @click="show = !show">点击</button>
    <transition name="fade" mode="out-in">
      <h4 v-if="show" style="border: 1px solid pink; width: 110px">
        Hello World
      </h4>
      <h4 v-else style="border: 1px solid pink; width: 110px">
        你好 世界
      </h4>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

</style>
