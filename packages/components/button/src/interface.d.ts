import type { ButtonHTMLAttributes } from "vue";

/** 按钮的类型 */
export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "text";

/** 按钮的大小 */
export type ButtonSize = "small" | "default" | "large";

/** 按钮icon位置 */
export type ButtonIconPlacement = "right" | "left";

/** 按钮原生type属性 */
export type ButtonNativeType = NonNullable<ButtonHTMLAttributes["type"]>;

/** 原生target属性 */
export type ButtonHrefTarget = "_blank" | "_self" | "_parent" | "_top";
