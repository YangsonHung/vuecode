<template>
  <div>
    fullName：{{ fullName }}
    <div>
      <button v-on:click="changeFirstName">change firstName</button>
    </div>
    <div>
      <button v-on:click="changeName">changeName</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const firstName = ref("Kobe");
    const lastName = ref("Bryant");

    // 返回不可变的响应式ref对象
    // const fullName = computed(() => firstName.value + " " + lastName.value);
    // 可变的ref对象
    const fullName = computed({
      get: () => {
        return firstName.value + " " + lastName.value;
      },
      set: (newValue) => {
        const names = newValue.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    const changeFirstName = () => {
      firstName.value = "Bob";
    };

    const changeName = () => {
      fullName.value = "Ludwig Beethoven";
    };

    return {
      fullName,
      changeName,
      changeFirstName,
    };
  },
};
</script>

<style scoped></style>
