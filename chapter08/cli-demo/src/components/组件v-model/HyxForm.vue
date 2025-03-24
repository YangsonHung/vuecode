<template>
  <div>
    <input :value="modelValue.name" @input="inputChange($event, 'name')" />
    <input :value="modelValue.title" @input="inputChange($event, 'title')" />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: Object,
  },
  emits: ['update:modelValue'],
  methods: {
    inputChange(event, field) {
      this.$emit('update:modelValue',{
        ...this.modelValue,
        [field]: event.target.value,
      });
    }
  }
}
</script>
<style scoped></style>
