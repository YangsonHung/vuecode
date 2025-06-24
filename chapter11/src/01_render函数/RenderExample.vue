<script>
import { h } from "vue";
export default {
  // render() {
  //   return h("h4", { class: 'title' }, "RenderExample");
  // },
  setup() {
    return () => h("h4", { class: "title" }, "RenderExample setup");
  },
};
</script>

<style scoped></style>
