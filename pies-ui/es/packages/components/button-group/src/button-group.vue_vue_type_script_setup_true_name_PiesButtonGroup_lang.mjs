import { defineComponent, provide, reactive, toRef, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { useNamespace } from "../../../hooks/use-namespace/index.mjs";
import { Props } from "./button-group2.mjs";
import { buttonGroupContextKey } from "../../../tokens/button-group.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button-group",
  props: Props,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("button");
    provide(
      buttonGroupContextKey,
      reactive({
        size: toRef(props, "size"),
        type: toRef(props, "type"),
        secondary: toRef(props, "secondary")
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns).b("group")}`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
