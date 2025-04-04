<template>
    <div>
        <h4>当前计数器：{{ counter }}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    setup(props, context) {
        let counter = 100;
        const increment = () => {
            counter++;
            console.log('counter :>> ', counter);
        };
        return {
            counter,
            increment
        }
    },
};
</script>

<style scoped></style>