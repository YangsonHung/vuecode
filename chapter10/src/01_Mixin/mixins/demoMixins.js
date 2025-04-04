export const demoMixin = {
    data() {
        return {
            message: 'Hello Mixin',
        };
    },
    methods: {
        foo() {
            console.log('demo mixin foo');
        },
    },
    created() {
        console.log('demo mixin created');
    },
};

export const dynamicDemoMixin = methods => {
    if (methods) {
        return {
            ...demoMixin,
            methods,
        };
    }

    return demoMixin;
};
