<template>
    <div>
        <input type="number" v-model="counter" >
        <h2>
            <span>数字变化：</span>
            <span>{{ showNumber }}</span>
        </h2>
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data() {
        return {
            showNumber: 0,
            counter: 1
        }
    },
    watch: {
        counter(newVal) {
            gsap.to(this, { duraton: 3, showNumber: newVal, onUpdate: () => {
                console.log(this.showNumber)
            }})
        }
    }
}
</script>

<style scoped>

</style>