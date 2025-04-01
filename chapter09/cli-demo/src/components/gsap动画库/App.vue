<template>
    <div>
        <button @click="show = !show">点击</button>
        <transition name="fade" @enter="enter" @leave="leave" :css="false">
            <h4 v-if="show" style="border: 1px solid pink; width: 110px">
                Hello World
            </h4>
        </transition>
    </div>
</template>

<script>
import gsap from "gsap";
export default {
    name: "App",
    props: {},
    data() {
        return {
            show: true,
        };
    },

    methods: {
        enter(el,done) {
            console.log('enter', el);
            gsap.from(el, { scale: 0, x: 200, onComplete: done });
        },
        leave(el,done) {
            console.log('leave', el);
            gsap.to(el, { scale: 0, x: 200, onComplete: done });
        },
    }
}

</script>

<style scoped></style>