<template>
  <div class="box">
    <button @click="show = !show">点击</button>
    <transition
      name="fade"
      appear
      enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__backOutRight"
    >
      <h4 v-if="show" style="border: 1px solid pink; width: 110px">
        Hello World
      </h4>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {},
  data() {
    return {
      show: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
/*.fade-enter-active {
  animation: backInLeft 1s ease-in;
}
.fade-leave-active {
  animation: backOutRight 1s ease-in;
}*/
</style>
