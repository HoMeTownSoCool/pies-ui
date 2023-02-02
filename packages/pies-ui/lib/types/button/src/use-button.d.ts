import type { SetupContext } from 'vue';
import type { ButtonEmits, ButtonProps } from './button';
export declare const useButton: (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
    _type: import("vue").ComputedRef<import("./interface").ButtonType | "">;
    _size: import("vue").ComputedRef<import("./interface").ButtonSize | "">;
    _secondary: import("vue").ComputedRef<boolean>;
    _ref: import("vue").Ref<HTMLButtonElement | undefined>;
    handleClick: (evt: MouseEvent) => void;
};
