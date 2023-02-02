import '../../../../node_modules/.pnpm/registry.npmmirror.com_vue@3.2.45/node_modules/vue/dist/vue.runtime.esm-bundler.mjs';
import '../../../tokens/index.mjs';
import { inject, computed } from '../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_runtime-core@3.2.45/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs';
import { buttonGroupContextKey } from '../../../tokens/button-group.mjs';
import { ref } from '../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_reactivity@3.2.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.mjs';

function handleHref(props) {
  props.href ? window.open(props.href, props.target) : null;
  return;
}
const useButton = (props, emit) => {
  const buttonGroupContext = inject(buttonGroupContextKey, void 0);
  const _type = computed(() => props.type || buttonGroupContext?.type || "");
  const _size = computed(() => props.size || buttonGroupContext?.size || "");
  const _secondary = computed(() => props.secondary || buttonGroupContext?.secondary || false);
  const _ref = ref();
  const handleClick = (evt) => {
    handleHref(props);
    emit("click", evt);
  };
  return {
    _type,
    _size,
    _secondary,
    _ref,
    handleClick
  };
};

export { useButton };
//# sourceMappingURL=use-button.mjs.map
