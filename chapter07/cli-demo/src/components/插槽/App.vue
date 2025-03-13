<template>
    <MySlotCpn></MySlotCpn>
    <br>
    <MySlotCpn>文本</MySlotCpn>
    <br>
    <MySlotCpn>
        <button>按钮</button>
    </MySlotCpn>
    <br>
    <MySlotCpn>
        <MyButton></MyButton>
    </MySlotCpn>
    <br>

    <NarBar :name="name" :test="test">
        <template v-slot:one>
            <div>1</div>
        </template>
        <template #two>
            <div>2</div>
        </template>
        <template #three>
            <div>3</div>
        </template>
        <template v-slot:[name]>
            <div>hhhhyx</div>
        </template>
        <template #[test]>
            <div>tttttest</div>
        </template>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </NarBar>

    <!-- 类似 children 函数渲染 props render -->
    <ShowNames :names="names">
        <template v-slot:default="slotProps">
            <span>{{ slotProps.item }} - {{ slotProps.index }} - {{ slotProps.hyx }}</span>
        </template>
    </ShowNames>

    <br>
    <ShowNames :names="names2">
        <template v-slot="my">
            <span>{{ my.item }} - {{ my.index }} - {{ my.hyx }}</span>
        </template>

        <template v-slot:hyx>
            <div>hyxxxxxxxx</div>
        </template>
    </ShowNames>

    <br>
    <ShowNames :names="names3" v-slot="my">
        <span>{{ my.item }} - {{ my.index }} - {{ my.hyx }}</span>
    </ShowNames>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue';
import MyButton from './MyButton.vue';
import NarBar from './NarBar.vue';
import ShowNames from './ShowNames.vue';
export default {
    components: {
        MySlotCpn,
        MyButton,
        NarBar,
        ShowNames
    },
    data() {
        return {
            name: 'hyx',
            test: 'test',
            names: ['jack', 'Bob', 'Candy'],
            names2: ['jack2', 'Bob2', 'Candy2'],
            names3: ['jack3', 'Bob3', 'Candy3']
        }
    }
}
</script>

<style scoped></style>