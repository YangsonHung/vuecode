<template>
    <div>
        <input v-model="keyword">
        <transition-group tag="ul" name="why" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <li v-for="(item, index) in showNames" :key="item" :data-index="index">
                {{ item }}
            </li>
        </transition-group>
    </div>
</template>

<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            names: ['abc', 'cba', 'nba', 'why', 'kilei', 'tom'],
            keyword: ''
        }
    },
    computed: {
        showNames() {
            return this.names.filter(item => item.indexOf(this.keyword) !== -1);
        }
    },
    methods: {
        beforeEnter(el) {
            console.log('el beforeEnter :>> ', el);
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter(el, done) {
            console.log('el enter :>> ', el);
            gsap.to(el, {
                opacity: 1,
                height: '1.5em',
                deplay: el.dataset.index * 0.5,
                onComplete: done
            })

        },
        leave(el, done) {
            console.log('el leave :>> ', el);

            gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index * 0.5,
                onComplete: done
            })

        }
    }
}
</script>

<style scoped>
.why-enter-from,
.why-leave-to {
    opacity: 0;
}
.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}
</style>