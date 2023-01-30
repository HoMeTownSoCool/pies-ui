import { Props as ButtonProps } from '../../button/src/button';

import type { ExtractPropTypes } from 'vue';

export const Props = {
  /**
   * 按钮组大小
   */
  size: ButtonProps.size,
  /**
   * 按钮组类型
   */
  type: ButtonProps.type,
  /**
   * 是否为二级按钮组
   */
  secondary: ButtonProps.secondary
} as const;
export type ButtonGroupProps = ExtractPropTypes<typeof Props>;
