import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import { Props, Emits } from "./button2.mjs";
import { useButton } from "./use-button.mjs";
import { useButtonCustomStyle } from "./button-custom.mjs";
import { useNamespace } from "../../../hooks/use-namespace/index.mjs";
const _hoisted_1 = ["type", "autofocus", "disabled", "aria-disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: Props,
  emits: Emits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("button");
    const { _ref, _size, _type, _secondary, handleClick } = useButton(props, emit);
    const buttonStyle = useButtonCustomStyle(props);
    expose({
      size: _size,
      type: _type,
      ref: _ref
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(unref(_type)),
          unref(ns).m(unref(_size)),
          unref(ns).is("secondary", unref(_secondary)),
          unref(ns).is("disabled", _ctx.disabled),
          unref(ns).is("ghost", _ctx.ghost),
          unref(ns).is("strong", _ctx.strong),
          unref(ns).is("circle", _ctx.circle),
          unref(ns).is("block", _ctx.block),
          unref(ns).is("dashed", _ctx.dashed),
          unref(ns).is("round", _ctx.round),
          unref(ns).is("loading", _ctx.loading)
        ]),
        style: normalizeStyle(unref(buttonStyle)),
        type: _ctx.nativeType,
        autofocus: _ctx.autofocus,
        disabled: _ctx.disabled || _ctx.loading,
        "aria-disabled": _ctx.disabled || _ctx.loading,
        onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClick) && unref(handleClick)(...args))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
