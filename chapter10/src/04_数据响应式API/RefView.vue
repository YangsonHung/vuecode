<template>
    <div>
        <h4>{{ name }} - {{ age }}</h4>
        <button @click="changeAge">修改age++</button>
        <h4>{{ num }}</h4>
        <button @click="changeNum">修改num++</button>

        <div>
            <input type="text" v-model="msg" />
            <div>
                {{ msg }}
            </div>
        </div>

        <button @click="changeInfo1">changeInfo1</button>
        <div>{{ info1 }}</div>
    </div>
</template>

<script>
import { reactive, toRefs, toRef, ref, unref, isRef, shallowRef, triggerRef } from 'vue';
import useDebounceRef from './hooks/useDebounceRef';

export default {
    setup() {
        const count = ref(100);
        const num = useDebounceRef(200, 1000);
        const msg = useDebounceRef('hello', 1000);
        console.log('count :>> ', count);
        let unrefCount = unref(count);
        console.log('unrefCount :>> ', unrefCount);
        const info = reactive({ name: 'why', age: 18 });
        // const { name, age } = toRefs(info);

        // let { name, age } = info;

        let age = toRef(info, 'age');
        let name = toRef(info, 'name');

        console.log('isRef(age) :>> ', isRef(age));

        const info1 = shallowRef({ name: 'jack' });

        const changeAge = () => {
            info.age++;
            console.log('info.age :>> ', info.age);
        };

        const changeNum = () => {
            num.value++;
            console.log('num.value :>> ', num.value);
        };

        const changeInfo1 = () => {
            info1.value.name = 11;
            console.log('info1.value :>> ', info1.value);
            triggerRef(info1);
        };

        return {
            name,
            age,
            changeAge,
            changeNum,
            num,
            msg,
            info1,
            changeInfo1
        };
    },
};
</script>

<style scoped></style>
