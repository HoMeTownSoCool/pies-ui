"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../../../node_modules/.pnpm/registry.npmmirror.com_@ctrl_tinycolor@3.5.0/node_modules/@ctrl/tinycolor/dist/module/index.js");
function useButtonCustomStyle(props) {
  return vue.computed(() => {
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
