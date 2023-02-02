'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../node_modules/.pnpm/registry.npmmirror.com_vue@3.2.45/node_modules/vue/dist/vue.runtime.esm-bundler.js');
require('../../../tokens/index.js');
var runtimeCore_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_runtime-core@3.2.45/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js');
var buttonGroup = require('../../../tokens/button-group.js');
var reactivity_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_reactivity@3.2.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js');

function handleHref(props) {
  props.href ? window.open(props.href, props.target) : null;
  return;
}
const useButton = (props, emit) => {
  const buttonGroupContext = runtimeCore_esmBundler.inject(buttonGroup.buttonGroupContextKey, void 0);
  const _type = runtimeCore_esmBundler.computed(() => props.type || buttonGroupContext?.type || "");
  const _size = runtimeCore_esmBundler.computed(() => props.size || buttonGroupContext?.size || "");
  const _secondary = runtimeCore_esmBundler.computed(() => props.secondary || buttonGroupContext?.secondary || false);
  const _ref = reactivity_esmBundler.ref();
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

exports.useButton = useButton;
//# sourceMappingURL=use-button.js.map
