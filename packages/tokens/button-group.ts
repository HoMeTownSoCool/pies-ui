import type { InjectionKey } from 'vue';
import type { ButtonProps } from '@pies-ui/components/button/src/button';
export interface ButtonGroupContext {
  size?: ButtonProps['size'];
  type?: ButtonProps['type'];
  secondary?: ButtonProps['secondary'];
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol('buttonGroupContextKey');
