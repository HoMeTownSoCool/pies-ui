import '../../../../node_modules/.pnpm/registry.npmmirror.com_vue@3.2.45/node_modules/vue/dist/vue.runtime.esm-bundler.mjs';
import '../../../hooks/index.mjs';
import { Props } from './button-group2.mjs';
import '../../../tokens/index.mjs';
import { defineComponent, provide, openBlock, createElementBlock, renderSlot } from '../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_runtime-core@3.2.45/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { buttonGroupContextKey } from '../../../tokens/button-group.mjs';
import { reactive, toRef, unref } from '../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_reactivity@3.2.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs';
import { normalizeClass } from '../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
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

export { _sfc_main as default };
//# sourceMappingURL=button-group.vue_vue_type_script_setup_true_name_PiesButtonGroup_lang.mjs.map
