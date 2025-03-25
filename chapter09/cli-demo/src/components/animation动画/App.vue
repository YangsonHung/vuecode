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
.fade-enter-active {
  animation: bounce 1s ease;
}
.fade-leave-active {
  animation: bounce 1s ease reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
