<template>
  <div>
    <h4 ref="title">app</h4>
    <button @click="onClick">获取元素对象和组件实例</button>
    <div>
      <nav-bar ref="navBar"></nav-bar>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
  methods: {
    onClick() {
      console.log(this.$refs.title);
      console.log(this.$refs.navBar);
      console.log("msg:", this.$refs.navBar.msg);
      console.log("hello:", this.$refs.navBar.sayHello());
    },
  },
  data() {
    return {
      val: "123",
    };
  },
};
</script>

<style scoped></style>
