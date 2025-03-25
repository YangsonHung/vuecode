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
/* 进入之前，离开之后*/
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
/*开始进入，离开应用*/
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
/* 进入和离开过渡阶段的样式 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease;
}
</style>
<!--
enter from to active
leave to from active

-->
