declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly type: import("../../button/src/interface").ButtonType;
            readonly size: import("../../button/src/interface").ButtonSize;
            readonly secondary: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "size" | "secondary">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            readonly type: import("../../button/src/interface").ButtonType;
            readonly size: import("../../button/src/interface").ButtonSize;
            readonly secondary: boolean;
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
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly type: import("../../button/src/interface").ButtonType;
    readonly size: import("../../button/src/interface").ButtonSize;
    readonly secondary: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
