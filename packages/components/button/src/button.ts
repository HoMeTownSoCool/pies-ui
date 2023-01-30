import type { ExtractPropTypes, PropType } from 'vue';
import type { ButtonType, ButtonSize, ButtonIconPlacement, ButtonNativeType, ButtonHrefTarget } from './interface';

export const Props = {
  /** 按钮的类型 */
  type: {
    type: String as PropType<ButtonType>,
    default: (): undefined => undefined,
    validator(value: ButtonType) {
      return (['default', 'primary', 'success', 'info', 'warning', 'danger', 'text'] as const).includes(value);
    }
  },
  /** 按钮的大小 */
  size: {
    type: String as PropType<ButtonSize>,
    default: (): undefined => undefined,
    validator(value: ButtonSize) {
      return (['small', 'default', 'large'] as const).includes(value);
    }
  },
  /** 是否为次要按钮 */
  secondary: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
  href: {
    type: String,
    default: (): String => ''
  },
  /** 相当于 a 链接的 target 属性，href 存在时生效*/
  target: {
    type: String as PropType<ButtonHrefTarget>,
    default: (): String => ''
  },
  /** 是否为虚线按钮 */
  dashed: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 按钮是否显示加载状态 */
  loading: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 按钮是否显示为块级按钮 */
  block: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 按钮是否禁用 */
  disabled: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 是否为圆形按钮 */
  circle: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 按钮是否显示圆角 */
  round: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 按钮文字是否加粗 */
  strong: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 按钮的颜色 */
  color: {
    type: String,
    default: (): undefined => undefined
  },
  /** 按钮文字的颜色 */
  textColor: {
    type: String,
    default: (): undefined => undefined
  },
  /** 按钮上的图标 */
  icon: {
    type: String,
    default: (): undefined => undefined
  },
  /** 按钮上的图标的位置 */
  iconPlacement: {
    type: String as PropType<ButtonIconPlacement>,
    default: (): ButtonIconPlacement => 'left',
    validator(value: ButtonIconPlacement) {
      return (['left', 'right'] as const).includes(value);
    }
  },
  /** 原生 autofocus 属性 */
  autofocus: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 是否透明背景 */
  ghost: {
    type: Boolean,
    default: (): Boolean => false
  },
  /** 原生按钮类型 */
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value) {
      return (['button', 'submit', 'reset'] as const).includes(value);
    }
  }
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
export type ButtonEmits = typeof Emits;
