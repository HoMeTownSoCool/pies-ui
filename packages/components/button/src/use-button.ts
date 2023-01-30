import { computed, inject, ref } from 'vue';
import type { SetupContext } from 'vue';
import { buttonGroupContextKey } from '@pies-ui/tokens';
import type { ButtonEmits, ButtonProps } from './button';

function handleHref(props: ButtonProps) {
  props.href ? window.open(props.href, props.target) : null;
  return;
}

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
  const buttonGroupContext = inject(buttonGroupContextKey, undefined);

  const _type = computed(() => props.type || buttonGroupContext?.type || '');
  const _size = computed(() => props.size || buttonGroupContext?.size || '');
  const _secondary = computed(() => props.secondary || buttonGroupContext?.secondary || false);
  const _ref = ref<HTMLButtonElement>();
  const handleClick = (evt: MouseEvent) => {
    handleHref(props);
    emit('click', evt);
  };
  return {
    _type,
    _size,
    _secondary,
    _ref,
    handleClick
  };
};
