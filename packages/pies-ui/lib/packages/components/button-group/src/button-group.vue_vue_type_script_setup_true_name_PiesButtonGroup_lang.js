'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../node_modules/.pnpm/registry.npmmirror.com_vue@3.2.45/node_modules/vue/dist/vue.runtime.esm-bundler.js');
require('../../../hooks/index.js');
var buttonGroup = require('./button-group2.js');
require('../../../tokens/index.js');
var runtimeCore_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_runtime-core@3.2.45/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js');
var index = require('../../../hooks/use-namespace/index.js');
var buttonGroup$1 = require('../../../tokens/button-group.js');
var reactivity_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_reactivity@3.2.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js');
var shared_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js');

var _sfc_main = /* @__PURE__ */ runtimeCore_esmBundler.defineComponent({
  __name: "button-group",
  props: buttonGroup.Props,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("button");
    runtimeCore_esmBundler.provide(
      buttonGroup$1.buttonGroupContextKey,
      reactivity_esmBundler.reactive({
        size: reactivity_esmBundler.toRef(props, "size"),
        type: reactivity_esmBundler.toRef(props, "type"),
        secondary: reactivity_esmBundler.toRef(props, "secondary")
      })
    );
    return (_ctx, _cache) => {
      return runtimeCore_esmBundler.openBlock(), runtimeCore_esmBundler.createElementBlock("div", {
        class: shared_esmBundler.normalizeClass(`${reactivity_esmBundler.unref(ns).b("group")}`)
      }, [
        runtimeCore_esmBundler.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});

exports["default"] = _sfc_main;
//# sourceMappingURL=button-group.vue_vue_type_script_setup_true_name_PiesButtonGroup_lang.js.map
