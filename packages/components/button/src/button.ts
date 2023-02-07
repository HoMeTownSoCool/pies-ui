import type { ExtractPropTypes, PropType } from 'vue';
import type { ButtonType, ButtonSize } from './interface';

export const buttonTypes = ['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', ''] as const;
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const;

export const buttonProps = {
  /** 按钮的类型 */
  type: {
    type: String as PropType<ButtonType>,
    default: (): string => '',
    validator(value: ButtonType) {
      return (['default', 'primary', 'success', 'warning', 'info', 'danger', 'text', ''] as const).includes(value);
    }
  },
  /** 按钮的大小 */
  size: {
    type: String as PropType<ButtonSize>,
    default: (): string => '',
    validator(value: ButtonSize) {
      return (['', 'default', 'small', 'large'] as const).includes(value);
    }
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 是否加载中 */
  loading: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 是否是「链接」按钮 */
  link: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 是否是「文字」按钮 */
  text: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 是否是「圆角」按钮 */
  round: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 是否是「圆形」按钮 */
  circle: {
    type: Boolean,
    default: (): Boolean => false
  }
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof Emits;
