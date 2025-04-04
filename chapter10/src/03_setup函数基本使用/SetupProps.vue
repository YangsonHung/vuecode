<template>
    <div>
        <h4>{{ message }}</h4>
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
    setup(props) {
        console.log(props);
        console.log(props.message);
    },
};
</script>

<style scoped></style>