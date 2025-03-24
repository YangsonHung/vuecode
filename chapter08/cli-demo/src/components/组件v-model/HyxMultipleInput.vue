<template>
  <div>
    <input :value="modelValue" @input="inputChange" />
    <input :value="title" @input="input2Change" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  methods: {
    inputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    input2Change(e) {
      this.$emit("update:title", e.target.value);
    },
  },
};
</script>

<style scoped></style>
