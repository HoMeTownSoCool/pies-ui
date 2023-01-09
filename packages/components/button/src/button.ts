import { ExtractPropTypes, PropType } from "vue";
import type {
  ButtonType,
  ButtonWeight,
  ButtonSize,
  ButtonIconPlacement,
  ButtonNativeType,
} from "./interface";

export const Props = {
  /** 按钮的类型 */
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => "default",
    validator(value: ButtonType) {
      return (
        ["default", "primary", "success", "info", "warning", "error"] as const
      ).includes(value);
    },
  },
  /** 按钮的权重 */
  weight: {
    type: String as PropType<ButtonWeight>,
    default: (): ButtonWeight => "default",
    validator(value: ButtonWeight) {
      return (
        ["default", "secondary", "tertiary", "quaternary"] as const
      ).includes(value);
    },
  },
  /** 按钮的大小 */
  size: {
    type: String as PropType<ButtonSize>,
    default: (): ButtonSize => "default",
    validator(value: ButtonSize) {
      return (["small", "default", "large"] as const).includes(value);
    },
  },
  /** 是否为虚线按钮 */
  dashed: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 是否为文本按钮 */
  text: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 按钮是否显示加载状态 */
  loading: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 按钮是否显示为块级按钮 */
  block: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 按钮是否禁用 */
  disabled: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 是否为圆形按钮 */
  circle: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 按钮是否显示圆角 */
  round: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 按钮文字是否加粗 */
  strong: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 按钮的颜色 */
  color: {
    type: String,
    default: (): undefined => undefined,
  },
  /** 按钮文字的颜色 */
  textColor: {
    type: String,
    default: (): undefined => undefined,
  },
  /** 按钮上的图标 */
  icon: {
    type: String,
    default: (): undefined => undefined,
  },
  /** 按钮上的图标的位置 */
  iconPlacement: {
    type: String as PropType<ButtonIconPlacement>,
    default: (): ButtonIconPlacement => "left",
    validator(value: ButtonIconPlacement) {
      return (["left", "right"] as const).includes(value);
    },
  },
  /** 原生 autofocus 属性 */
  autofocus: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 是否透明背景 */
  ghost: {
    type: Boolean,
    default: (): Boolean => false,
  },
  /** 原生按钮类型 */
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => "button",
    validator(value) {
      return (["button", "submit", "reset"] as const).includes(value);
    },
  },
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt,
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
