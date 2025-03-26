<script>
import HomeView from "./HomeView.vue";
import AboutView from "./AboutView.vue";

export default {
  components: {
    HomeView,
    AboutView,
  },
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
    <transition name="fade" mode="out-in" appear>
      <component :is="show ? 'HomeView' : 'AboutView'"></component>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
</style>
