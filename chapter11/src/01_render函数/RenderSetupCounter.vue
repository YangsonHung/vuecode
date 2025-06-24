<script>
import { ref, h } from 'vue';

export default {
    setup() {
        const counter = ref(0);

        return () => {
            return h('p', { class: 'render-counter' }, [
                h('h4', null, `render setup函数计数器：${counter.value}`),
                h('button', { onClick: () => counter.value++ }, '+1'),
                h('button', { onClick: () => counter.value-- }, '-1'),
            ]);
        };
    },
};
</script>

<style scoped></style>
