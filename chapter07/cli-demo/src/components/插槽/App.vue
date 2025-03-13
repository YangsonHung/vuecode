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
</template>

<script>
import MySlotCpn from './MySlotCpn.vue';
import MyButton from './MyButton.vue';
import NarBar from './NarBar.vue';
export default {
    components: {
        MySlotCpn,
        MyButton,
        NarBar
    },
    data() {
        return {
            name: 'hyx',
            test: 'test'
        }
    }
}
</script>

<style scoped></style>