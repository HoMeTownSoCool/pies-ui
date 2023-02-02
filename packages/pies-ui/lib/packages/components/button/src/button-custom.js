'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../node_modules/.pnpm/registry.npmmirror.com_vue@3.2.45/node_modules/vue/dist/vue.runtime.esm-bundler.js');
require('../../../../node_modules/.pnpm/registry.npmmirror.com_@ctrl_tinycolor@3.5.0/node_modules/@ctrl/tinycolor/dist/module/public_api.js');
var runtimeCore_esmBundler = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_runtime-core@3.2.45/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js');
var index = require('../../../../node_modules/.pnpm/registry.npmmirror.com_@ctrl_tinycolor@3.5.0/node_modules/@ctrl/tinycolor/dist/module/index.js');

function useButtonCustomStyle(props) {
  return runtimeCore_esmBundler.computed(() => {
    const styles = {};
    const buttonColor = props.color;
    const textColor = props.textColor;
    const secondary = props.secondary;
    if (buttonColor) {
      const color = new index.TinyColor(buttonColor);
      styles["box-shadow"] = `0 2px 0 ${color.tint(93)}`;
      if (secondary) {
        styles.backgroundColor = color.tint(70).toString();
        styles.borderColor = color.tint(70).toString();
      } else {
        styles.backgroundColor = buttonColor;
        styles.borderColor = buttonColor;
        styles.color = textColor ? textColor : "#fff";
      }
    }
    return styles;
  });
}

exports.useButtonCustomStyle = useButtonCustomStyle;
//# sourceMappingURL=button-custom.js.map
