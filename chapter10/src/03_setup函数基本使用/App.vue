<template>
    <div>
        <setup-props message="setup props参数"></setup-props>
        <setup-context message="setup context参数" id="code" class="why">
            <button>按钮</button>
        </setup-context>
        <setupReturn message="setup return"></setupReturn>
    </div>
</template>

<script>
import SetupProps from './SetupProps.vue';
import SetupContext from './SetupContext.vue';
import SetupReturn from './setupReturn.vue';
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        SetupProps,
        SetupReturn,
        SetupContext
    }
}
</script>

<style scoped>

</style>