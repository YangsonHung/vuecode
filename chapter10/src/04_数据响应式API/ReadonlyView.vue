<template>
    <div>
        <button @click="updateState">点击修改</button>
    </div>
</template>

<script>
import { ref, reactive, readonly, isProxy, isReactive, isReadonly, toRaw, shallowReactive, shallowReadonly } from 'vue';
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    setup() {
        const state = shallowReactive({
            foo: 1,
            nested: {
                bar: 1,
            },
        });

        const readonlyState = shallowReadonly(state);

        const info = {
            name: 'why',
        };
        const reactiveInfo = reactive(info);

        const info1 = {
            name: 'why',
        };
        const info2 = reactive({
            name: 'why',
        });
        const info3 = ref('why');

        const readonlyInfo1 = readonly(info1);
        const readonlyInfo2 = readonly(info2);
        const readonlyInfo3 = readonly(info3);

        console.log('isProxy info2 :>> ', isProxy(info2));
        console.log('isProxy info3 :>> ', isProxy(info3));
        console.log('isReactive info2 :>> ', isReactive(info2));
        console.log('isReactive readonlyInfo2 :>> ', isReactive(readonlyInfo2));
        console.log('isReadonly readonlyInfo2 :>> ', isReadonly(readonlyInfo2));
        console.log('toRaw toRaw(reactiveInfo) === info :>> ', toRaw(reactiveInfo) === info);

        const updateState = () => {
            readonlyInfo1.name = 'code';

            info1.name = 'code';

            readonlyInfo2.name = 'code';

            info2.name = 'code';

            readonlyInfo3.value = 'code';

            info1.value = 'code';
        };

        return {
            updateState,
        };
    },
};
</script>

<style scoped></style>
