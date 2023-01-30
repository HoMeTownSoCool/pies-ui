import { computed } from 'vue';
import type { ButtonProps } from './button';
import { TinyColor } from '@ctrl/tinycolor';
export function useButtonCustomStyle(props: ButtonProps) {
  return computed(() => {
    const styles: Record<string, string> = {};
    const buttonColor = props.color;
    const textColor = props.textColor;
    const secondary = props.secondary;
    if (buttonColor) {
      const color = new TinyColor(buttonColor);
      styles['box-shadow'] = `0 2px 0 ${color.tint(93)}`;
      if (secondary) {
        styles.backgroundColor = color.tint(70).toString();
        styles.borderColor = color.tint(70).toString();
      } else {
        styles.backgroundColor = buttonColor;
        styles.borderColor = buttonColor;
        styles.color = textColor ? textColor : '#fff';
      }
    }

    return styles;
  });
}
