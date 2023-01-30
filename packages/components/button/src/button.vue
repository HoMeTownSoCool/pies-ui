<template>
  <button
    :class="[
      ns.b(),
      ns.m(_type),
      ns.m(_size),
      ns.is('secondary', _secondary),
      ns.is('disabled', disabled),
      ns.is('ghost', ghost),
      ns.is('strong', strong),
      ns.is('circle', circle),
      ns.is('block', block),
      ns.is('dashed', dashed),
      ns.is('round', round),
      ns.is('loading', loading)
    ]"
    :style="buttonStyle"
    :type="nativeType"
    :autofocus="autofocus"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts" name="PiesButton">
  import { Props, Emits } from './button';
  import { useButton } from './use-button';
  import { useButtonCustomStyle } from './button-custom';
  import { useNamespace } from '@pies-ui/hooks';

  const props = defineProps(Props);
  const emit = defineEmits(Emits);

  const ns = useNamespace('button');

  const { _ref, _size, _type, _secondary, handleClick } = useButton(props, emit);

  const buttonStyle = useButtonCustomStyle(props);

  defineExpose({
    /** @description 按钮大小 */
    size: _size,
    /** @description 按钮类型 */
    type: _type,
    /** @description 按钮html元素 */
    ref: _ref
  });
</script>
