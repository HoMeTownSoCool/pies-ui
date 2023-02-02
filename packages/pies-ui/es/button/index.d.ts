export declare const PiesButton: import("@pies-ui/utils/vue/typescript").SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            strong: boolean;
            circle: boolean;
            type: import("./src/interface").ButtonType;
            size: import("./src/interface").ButtonSize;
            secondary: boolean;
            href: string;
            target: import("./src/interface").ButtonHrefTarget;
            dashed: boolean;
            loading: boolean;
            block: boolean;
            disabled: boolean;
            round: boolean;
            color: string;
            textColor: string;
            icon: string;
            iconPlacement: import("./src/interface").ButtonIconPlacement;
            autofocus: boolean;
            ghost: boolean;
            nativeType: import("./src/interface").ButtonNativeType;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<import("./src/interface").ButtonType>;
                default: () => undefined;
                validator(value: import("./src/interface").ButtonType): boolean;
            };
            size: {
                type: import("vue").PropType<import("./src/interface").ButtonSize>;
                default: () => undefined;
                validator(value: import("./src/interface").ButtonSize): boolean;
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
                type: import("vue").PropType<import("./src/interface").ButtonHrefTarget>;
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
                type: import("vue").PropType<import("./src/interface").ButtonIconPlacement>;
                default: () => import("./src/interface").ButtonIconPlacement;
                validator(value: import("./src/interface").ButtonIconPlacement): boolean;
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
                type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
                default: () => import("./src/interface").ButtonNativeType;
                validator(value: any): boolean;
            };
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "strong" | "circle" | "type" | "size" | "secondary" | "href" | "target" | "dashed" | "loading" | "block" | "disabled" | "round" | "color" | "textColor" | "icon" | "iconPlacement" | "autofocus" | "ghost" | "nativeType">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: "click", evt: MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<import("./src/interface").ButtonType>;
                default: () => undefined;
                validator(value: import("./src/interface").ButtonType): boolean;
            };
            size: {
                type: import("vue").PropType<import("./src/interface").ButtonSize>;
                default: () => undefined;
                validator(value: import("./src/interface").ButtonSize): boolean;
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
                type: import("vue").PropType<import("./src/interface").ButtonHrefTarget>;
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
                type: import("vue").PropType<import("./src/interface").ButtonIconPlacement>;
                default: () => import("./src/interface").ButtonIconPlacement;
                validator(value: import("./src/interface").ButtonIconPlacement): boolean;
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
                type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
                default: () => import("./src/interface").ButtonNativeType;
                validator(value: any): boolean;
            };
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {
            size: import("vue").ComputedRef<import("./src/interface").ButtonSize | "">;
            type: import("vue").ComputedRef<import("./src/interface").ButtonType | "">;
            ref: import("vue").Ref<HTMLButtonElement | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (evt: MouseEvent) => MouseEvent;
        }, string, {
            strong: boolean;
            circle: boolean;
            type: import("./src/interface").ButtonType;
            size: import("./src/interface").ButtonSize;
            secondary: boolean;
            href: string;
            target: import("./src/interface").ButtonHrefTarget;
            dashed: boolean;
            loading: boolean;
            block: boolean;
            disabled: boolean;
            round: boolean;
            color: string;
            textColor: string;
            icon: string;
            iconPlacement: import("./src/interface").ButtonIconPlacement;
            autofocus: boolean;
            ghost: boolean;
            nativeType: import("./src/interface").ButtonNativeType;
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<import("./src/interface").ButtonType>;
            default: () => undefined;
            validator(value: import("./src/interface").ButtonType): boolean;
        };
        size: {
            type: import("vue").PropType<import("./src/interface").ButtonSize>;
            default: () => undefined;
            validator(value: import("./src/interface").ButtonSize): boolean;
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
            type: import("vue").PropType<import("./src/interface").ButtonHrefTarget>;
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
            type: import("vue").PropType<import("./src/interface").ButtonIconPlacement>;
            default: () => import("./src/interface").ButtonIconPlacement;
            validator(value: import("./src/interface").ButtonIconPlacement): boolean;
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
            type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
            default: () => import("./src/interface").ButtonNativeType;
            validator(value: any): boolean;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        size: import("vue").ComputedRef<import("./src/interface").ButtonSize | "">;
        type: import("vue").ComputedRef<import("./src/interface").ButtonType | "">;
        ref: import("vue").Ref<HTMLButtonElement | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./src/interface").ButtonType>;
        default: () => undefined;
        validator(value: import("./src/interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./src/interface").ButtonSize>;
        default: () => undefined;
        validator(value: import("./src/interface").ButtonSize): boolean;
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
        type: import("vue").PropType<import("./src/interface").ButtonHrefTarget>;
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
        type: import("vue").PropType<import("./src/interface").ButtonIconPlacement>;
        default: () => import("./src/interface").ButtonIconPlacement;
        validator(value: import("./src/interface").ButtonIconPlacement): boolean;
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
        type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
        default: () => import("./src/interface").ButtonNativeType;
        validator(value: any): boolean;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    size: import("vue").ComputedRef<import("./src/interface").ButtonSize | "">;
    type: import("vue").ComputedRef<import("./src/interface").ButtonType | "">;
    ref: import("vue").Ref<HTMLButtonElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => MouseEvent;
}, string, {
    strong: boolean;
    circle: boolean;
    type: import("./src/interface").ButtonType;
    size: import("./src/interface").ButtonSize;
    secondary: boolean;
    href: string;
    target: import("./src/interface").ButtonHrefTarget;
    dashed: boolean;
    loading: boolean;
    block: boolean;
    disabled: boolean;
    round: boolean;
    color: string;
    textColor: string;
    icon: string;
    iconPlacement: import("./src/interface").ButtonIconPlacement;
    autofocus: boolean;
    ghost: boolean;
    nativeType: import("./src/interface").ButtonNativeType;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
})> & Record<string, any>;
export default PiesButton;
