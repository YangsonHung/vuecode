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
    <transition name="fade">
      <h4 v-if="show" style="border: 1px solid pink; width: 110px">
        Hello World
      </h4>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease;
}
</style>
<!--
enter from to active
leave to from active

-->
