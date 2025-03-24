<script>
import HomeView from "./HomeView.vue";
export default {
  name: "App",
  components: {
    HomeView,
  },
  data() {
    return {
      isShowHomeView: true,
      msg: "123"
    };
  },
};
</script>

<template>
  <div>
    <div>
      <button v-on:click="isShowHomeView = !isShowHomeView">{{ isShowHomeView ? '销毁' : '创建'}}</button>
    </div>
    <template v-if="isShowHomeView">
      <HomeView></HomeView>
    </template>
    <div>
      <input type="text" :value="msg" v-on:input="msg=$event.target.value" />
      <div>
        {{msg}}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
