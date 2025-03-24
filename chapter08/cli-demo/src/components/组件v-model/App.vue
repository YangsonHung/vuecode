<script>
import HyxInput from "@/components/组件v-model/HyxInput.vue";
import HyxMultipleInput from "@/components/组件v-model/HyxMultipleInput.vue";
import HyxForm from "@/components/组件v-model/HyxForm.vue";

export default {
  components: {
    // HyxInput,
    // HyxMultipleInput,
    HyxForm,
  },
  data() {
    return {
      message: "Hello",
      title: "World",
      formData: {
        name: "John",
        title: "Doe",
      },
    };
  },
};
</script>

<template>
  <div>
    <div>message：{{ message }}</div>
    <div>title：{{ title }}</div>
    <div>formData: {{ formData }}</div>
    <!--  第一种写法  -->
    <!--    <HyxInput v-model="message" />-->
    <!--  第二种写法  -->
    <!--    <HyxInput :model-value="message" @update:model-value="message = $event" />-->
    <!--    多个v-model-->
    <!--    <HyxMultipleInput-->
    <!--      v-model="message"-->
    <!--      v-model:title="title"-->
    <!--    ></HyxMultipleInput>-->
    <HyxForm v-model="formData"></HyxForm>
  </div>
</template>

<style scoped></style>
