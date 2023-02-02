declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./interface").ButtonType>;
        default: () => undefined;
        validator(value: import("./interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./interface").ButtonSize>;
        default: () => undefined;
        validator(value: import("./interface").ButtonSize): boolean;
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
        type: import("vue").PropType<import("./interface").ButtonHrefTarget>;
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
        type: import("vue").PropType<import("./interface").ButtonIconPlacement>;
        default: () => import("./interface").ButtonIconPlacement;
        validator(value: import("./interface").ButtonIconPlacement): boolean;
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
        type: import("vue").PropType<import("./interface").ButtonNativeType>;
        default: () => import("./interface").ButtonNativeType;
        validator(value: any): boolean;
    };
}, {
    props: any;
    emit: (event: "click", evt: MouseEvent) => void;
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
    _ref: import("vue").Ref<HTMLButtonElement | undefined>;
    _size: import("vue").ComputedRef<import("./interface").ButtonSize | "">;
    _type: import("vue").ComputedRef<import("./interface").ButtonType | "">;
    _secondary: import("vue").ComputedRef<boolean>;
    handleClick: (evt: MouseEvent) => void;
    buttonStyle: import("vue").ComputedRef<Record<string, string>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => MouseEvent;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./interface").ButtonType>;
        default: () => undefined;
        validator(value: import("./interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./interface").ButtonSize>;
        default: () => undefined;
        validator(value: import("./interface").ButtonSize): boolean;
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
        type: import("vue").PropType<import("./interface").ButtonHrefTarget>;
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
        type: import("vue").PropType<import("./interface").ButtonIconPlacement>;
        default: () => import("./interface").ButtonIconPlacement;
        validator(value: import("./interface").ButtonIconPlacement): boolean;
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
        type: import("vue").PropType<import("./interface").ButtonNativeType>;
        default: () => import("./interface").ButtonNativeType;
        validator(value: any): boolean;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("./interface").ButtonType;
    size: import("./interface").ButtonSize;
    secondary: boolean;
    href: string;
    target: import("./interface").ButtonHrefTarget;
    dashed: boolean;
    loading: boolean;
    block: boolean;
    disabled: boolean;
    circle: boolean;
    round: boolean;
    strong: boolean;
    color: string;
    textColor: string;
    icon: string;
    iconPlacement: import("./interface").ButtonIconPlacement;
    autofocus: boolean;
    ghost: boolean;
    nativeType: import("./interface").ButtonNativeType;
}>;
export default _sfc_main;
