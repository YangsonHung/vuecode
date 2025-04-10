<script>
import { reactive, watch, ref } from "vue";
export default {
  setup() {
    // const info = ref({ name: "jack", age: 18 });
    const name = ref("jack");
    const info = reactive({ name: "jack", age: 18 });
    const names = reactive(['abc', 'def']);
    const deepInfo = reactive({
      name: 'Jack',
      age: 18,
      friend: {
        name: 'John',
        age: 18
      }
    })

    watch(
      () => info.name,
      (newValue, oldValue) => {
        console.log('newValue 1:>> ', newValue);
        console.log('oldValue 1:>> ', oldValue);
      }
    );

    watch(
        [() => info, name, () => [...names]],
        (newValue, oldValue) => {
          console.log('newValue 2:>> ', newValue);
          console.log('oldValue 2:>> ', oldValue);
        }
    );

    watch(() => ({...deepInfo}), (newValue, oldValue) => {
      console.log('newValue 3:>> ', newValue);
      console.log('oldValue 3:>> ', oldValue);
    }, { deep: true, immediate: true });

    const changeData = () => {
      info.name = "John";
      name.value = "John";
      names.push('fgh')

      deepInfo.friend.age = 29;
    }

    return {
      changeData,
      info
    }
  },
};
</script>

<template>
  <div>
    <h4>{{info.name}}</h4>
    <button @click="changeData">
      修改数据
    </button>
  </div>
</template>

<style scoped></style>
