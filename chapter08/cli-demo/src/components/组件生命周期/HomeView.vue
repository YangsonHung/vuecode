<script>
export default {
  name: 'HomeView',
  data() {
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Hello Vue3!';
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.$refs.title.innerHTML);
  },
  updated() {
    console.log('updated', this.$refs.title.innerHTML);
  }
}
</script>

<template>
  <div ref='title'>
    {{ message }}
  </div>
  <div>
    <button v-on:click="changeMessage">changeMessage</button>
  </div>
</template>

<style scoped>

</style>
