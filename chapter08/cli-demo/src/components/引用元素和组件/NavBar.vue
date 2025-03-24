<template>
  <div>NavBar</div>
  <button v-on:click="getParentAndRoot">获取父组件和根组件的实例对象</button>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      msg: "NavBar MSG",
    };
  },
  methods: {
    sayHello() {
      console.log("Hello from NavBar");
      return "Hello from NavBar return";
    },
    getParentAndRoot() {
      console.log("父组件实例对象:", this.$parent);
      console.log("根组件实例对象:", this.$root);
      console.log("父组件的值 :>> ", this.$parent.val);
    },
  },
};
</script>

<style scoped></style>
