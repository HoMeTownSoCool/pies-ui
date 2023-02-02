"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const button = require("./button2.js");
const useButton = require("./use-button.js");
const buttonCustom = require("./button-custom.js");
const index = require("../../../hooks/use-namespace/index.js");
const _hoisted_1 = ["type", "autofocus", "disabled", "aria-disabled"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "button",
  props: button.Props,
  emits: button.Emits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = index.useNamespace("button");
    const { _ref, _size, _type, _secondary, handleClick } = useButton.useButton(props, emit);
    const buttonStyle = buttonCustom.useButtonCustomStyle(props);
    expose({
      size: _size,
      type: _type,
      ref: _ref
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).m(vue.unref(_type)),
          vue.unref(ns).m(vue.unref(_size)),
          vue.unref(ns).is("secondary", vue.unref(_secondary)),
          vue.unref(ns).is("disabled", _ctx.disabled),
          vue.unref(ns).is("ghost", _ctx.ghost),
          vue.unref(ns).is("strong", _ctx.strong),
          vue.unref(ns).is("circle", _ctx.circle),
          vue.unref(ns).is("block", _ctx.block),
          vue.unref(ns).is("dashed", _ctx.dashed),
          vue.unref(ns).is("round", _ctx.round),
          vue.unref(ns).is("loading", _ctx.loading)
        ]),
        style: vue.normalizeStyle(vue.unref(buttonStyle)),
        type: _ctx.nativeType,
        autofocus: _ctx.autofocus,
        disabled: _ctx.disabled || _ctx.loading,
        "aria-disabled": _ctx.disabled || _ctx.loading,
        onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(handleClick) && vue.unref(handleClick)(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;
