<template>
    <div>
        <h2>{{ message }}</h2>
        <button @click="foo">调用demoMixin的foo方法</button>
    </div>
</template>

<script>
import { demoMixin, dynamicDemoMixin } from './mixins/demoMixins'
export default {
    mixins: [dynamicDemoMixin({
        foo() {
            console.log("动态的方法 foo");

        }
    })],
    data() {
        return {
            message: 'Hello App'
        }
    },
    methods: {
        // foo() {
        //     console.log("app foo")
        // }
    },
    created() {
        console.log("app created")
    }
}
</script>

<style scoped></style>