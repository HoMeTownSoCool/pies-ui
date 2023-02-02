import type { ExtractPropTypes } from 'vue';
export declare const Props: {
    readonly size: {
        type: import("vue").PropType<import("../../button/src/interface").ButtonSize>;
        default: () => undefined;
        validator(value: import("../../button/src/interface").ButtonSize): boolean;
    };
    readonly type: {
        type: import("vue").PropType<import("../../button/src/interface").ButtonType>;
        default: () => undefined;
        validator(value: import("../../button/src/interface").ButtonType): boolean;
    };
    readonly secondary: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
};
export type ButtonGroupProps = ExtractPropTypes<typeof Props>;
