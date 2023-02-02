'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../node_modules/.pnpm/registry.npmmirror.com_vue@3.2.45/node_modules/vue/dist/vue.runtime.esm-bundler.js');
var button = require('./button2.js');
var useButton = require('./use-button.js');
var buttonCustom = require('./button-custom.js');
require('../../../hooks/index.js');
var runtimeCore_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_runtime-core@3.2.45/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js');
var index = require('../../../hooks/use-namespace/index.js');
var shared_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js');
var reactivity_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_reactivity@3.2.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js');

const _hoisted_1 = ["type", "autofocus", "disabled", "aria-disabled"];
var _sfc_main = /* @__PURE__ */ runtimeCore_esmBundler.defineComponent({
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
      return runtimeCore_esmBundler.openBlock(), runtimeCore_esmBundler.createElementBlock("button", {
        class: shared_esmBundler.normalizeClass([
          reactivity_esmBundler.unref(ns).b(),
          reactivity_esmBundler.unref(ns).m(reactivity_esmBundler.unref(_type)),
          reactivity_esmBundler.unref(ns).m(reactivity_esmBundler.unref(_size)),
          reactivity_esmBundler.unref(ns).is("secondary", reactivity_esmBundler.unref(_secondary)),
          reactivity_esmBundler.unref(ns).is("disabled", _ctx.disabled),
          reactivity_esmBundler.unref(ns).is("ghost", _ctx.ghost),
          reactivity_esmBundler.unref(ns).is("strong", _ctx.strong),
          reactivity_esmBundler.unref(ns).is("circle", _ctx.circle),
          reactivity_esmBundler.unref(ns).is("block", _ctx.block),
          reactivity_esmBundler.unref(ns).is("dashed", _ctx.dashed),
          reactivity_esmBundler.unref(ns).is("round", _ctx.round),
          reactivity_esmBundler.unref(ns).is("loading", _ctx.loading)
        ]),
        style: shared_esmBundler.normalizeStyle(reactivity_esmBundler.unref(buttonStyle)),
        type: _ctx.nativeType,
        autofocus: _ctx.autofocus,
        disabled: _ctx.disabled || _ctx.loading,
        "aria-disabled": _ctx.disabled || _ctx.loading,
        onClick: _cache[0] || (_cache[0] = (...args) => reactivity_esmBundler.unref(handleClick) && reactivity_esmBundler.unref(handleClick)(...args))
      }, [
        runtimeCore_esmBundler.renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});

exports["default"] = _sfc_main;
//# sourceMappingURL=button.vue_vue_type_script_setup_true_name_PiesButton_lang.js.map
