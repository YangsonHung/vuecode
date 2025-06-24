<script>
import { h } from "vue";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    return h("p", { class: "render-counter" }, [
      h("h4", null, `render函数计数器：${this.counter}`),
      h("button", { onClick: () => this.counter++ }, "+1"),
      h("button", { onClick: () => this.counter-- }, "-1"),
    ]);
  },
};
</script>

<style scoped></style>
