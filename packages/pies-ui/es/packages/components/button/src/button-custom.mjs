import { computed } from "vue";
import { TinyColor } from "../../../../node_modules/.pnpm/registry.npmmirror.com_@ctrl_tinycolor@3.5.0/node_modules/@ctrl/tinycolor/dist/module/index.mjs";
function useButtonCustomStyle(props) {
  return computed(() => {
    const styles = {};
    const buttonColor = props.color;
    const textColor = props.textColor;
    const secondary = props.secondary;
    if (buttonColor) {
      const color = new TinyColor(buttonColor);
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
export {
  useButtonCustomStyle
};
