<template>
    <div>
        <h4>{{ message }}</h4>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    setup(props, context) {
        console.log(props);
        console.log(props.message);
        console.log(context.attrs.id, context.attrs.class);
        console.log(context.slots);
        console.log(context.emit);
    },
};
</script>

<style scoped></style>