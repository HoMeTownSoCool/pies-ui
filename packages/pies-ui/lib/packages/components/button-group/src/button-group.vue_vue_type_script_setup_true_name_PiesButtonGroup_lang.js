"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../../hooks/use-namespace/index.js");
const buttonGroup = require("./button-group2.js");
const buttonGroup$1 = require("../../../tokens/button-group.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "button-group",
  props: buttonGroup.Props,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("button");
    vue.provide(
      buttonGroup$1.buttonGroupContextKey,
      vue.reactive({
        size: vue.toRef(props, "size"),
        type: vue.toRef(props, "type"),
        secondary: vue.toRef(props, "secondary")
      })
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(`${vue.unref(ns).b("group")}`)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
