import type { ExtractPropTypes, PropType } from 'vue';
import type { ButtonType, ButtonSize, ButtonIconPlacement, ButtonNativeType, ButtonHrefTarget } from './interface';
export declare const Props: {
    type: {
        type: PropType<ButtonType>;
        default: () => undefined;
        validator(value: ButtonType): boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: () => undefined;
        validator(value: ButtonSize): boolean;
    };
    secondary: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    href: {
        type: StringConstructor;
        default: () => String;
    };
    target: {
        type: PropType<ButtonHrefTarget>;
        default: () => String;
    };
    dashed: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    block: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    round: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    strong: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    color: {
        type: StringConstructor;
        default: () => undefined;
    };
    textColor: {
        type: StringConstructor;
        default: () => undefined;
    };
    icon: {
        type: StringConstructor;
        default: () => undefined;
    };
    iconPlacement: {
        type: PropType<ButtonIconPlacement>;
        default: () => ButtonIconPlacement;
        validator(value: ButtonIconPlacement): boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    ghost: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    nativeType: {
        type: PropType<ButtonNativeType>;
        default: () => ButtonNativeType;
        validator(value: any): boolean;
    };
};
export declare const Emits: {
    click: (evt: MouseEvent) => MouseEvent;
};
export type ButtonProps = ExtractPropTypes<typeof Props>;
export type ButtonEmits = typeof Emits;
