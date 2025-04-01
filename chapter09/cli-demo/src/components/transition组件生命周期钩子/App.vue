<template>
    <div class="box">
        <button @click="show = !show">点击</button>
        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
            @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <h4 v-if="show" style="border: 1px solid pink; width: 110px">
                Hello World
            </h4>
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
    props: {},
    data() {
        return {
            show: true,
        };
    },
    methods: {
        beforeEnter(el) {
            console.log("beforeEnter", el);
        },
        enter(el, done) {
            console.log("enter", el);
            done();
        },
        afterEnter(el) {
            console.log("afterEnter", el);
        },
        beforeLeave(el) {
            console.log("beforeLeave", el);
        },
        leave(el, done) {
            console.log("leave", el);
            done();
        },
        afterLeave(el) {
            console.log("afterLeave", el);
        },
    },
};
</script>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease;
}</style>