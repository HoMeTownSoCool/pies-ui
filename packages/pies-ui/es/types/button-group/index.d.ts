export declare const PiesButtonGroup: import("@pies-ui/utils/vue/typescript").SFCWithInstall<import("vue").DefineComponent<{
    readonly size: {
        type: import("vue").PropType<import("../button/src/interface").ButtonSize>;
        default: () => undefined;
        validator(value: import("../button/src/interface").ButtonSize): boolean;
    };
    readonly type: {
        type: import("vue").PropType<import("../button/src/interface").ButtonType>;
        default: () => undefined;
        validator(value: import("../button/src/interface").ButtonType): boolean;
    };
    readonly secondary: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
}, {
    ns: {
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: (name: string, ...args: [] | [boolean | undefined]) => string;
    };
    props: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        type: import("vue").PropType<import("../button/src/interface").ButtonSize>;
        default: () => undefined;
        validator(value: import("../button/src/interface").ButtonSize): boolean;
    };
    readonly type: {
        type: import("vue").PropType<import("../button/src/interface").ButtonType>;
        default: () => undefined;
        validator(value: import("../button/src/interface").ButtonType): boolean;
    };
    readonly secondary: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
}>>, {
    readonly type: import("../button/src/interface").ButtonType;
    readonly size: import("../button/src/interface").ButtonSize;
    readonly secondary: boolean;
}>> & Record<string, any>;
export default PiesButtonGroup;
