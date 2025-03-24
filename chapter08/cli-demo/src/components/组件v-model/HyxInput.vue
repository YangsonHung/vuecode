<template>
  <div>
    <!--    1支持-->
    <!--    <input :value="modelValue" @input="inputClick">-->
    <!--    2不支持-->
    <!--    <input v-model="modelValue">-->
    <!--    3支持 使用计算属性-->
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    inputClick(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
  created() {
    console.log("created", this.modelValue);
  },
  updated() {
    console.log("updated", this.modelValue);
  },
  computed: {
    value: {
      set(val) {
        this.$emit("update:modelValue", val);
      },
      get() {
        return this.modelValue;
      },
    },
  },
};
</script>

<style scoped></style>
