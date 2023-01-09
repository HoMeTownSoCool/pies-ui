import type { ButtonHTMLAttributes } from "vue";

/** 按钮的类型 */
export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "error";

/** 按钮的权重 */
export type ButtonWeight = "default" | "secondary" | "tertiary" | "quaternary";
/** 按钮的大小 */
export type ButtonSize = "small" | "default" | "large";

/** 按钮icon位置 */
export type ButtonIconPlacement = "right" | "left";

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes["type"]>;
