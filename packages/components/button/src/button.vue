<template>
  <button
    :class="buttonClass"
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
  import { computed } from 'vue';
  import { Props, Emits } from './button';
  import { useButtonCustomStyle } from './button-custom';
  import { useNamespace } from '@pies-ui/hooks';

  const props = defineProps(Props);
  const emits = defineEmits(Emits);

  const ns = useNamespace('button');

  const buttonClass = computed(() => {
    const { type, size, dashed, loading, block, circle, strong, ghost, disabled, secondary, round } = props;
    return [
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('secondary', secondary),
      ns.is('disabled', disabled),
      ns.is('ghost', ghost),
      ns.is('strong', strong),
      ns.is('circle', circle),
      ns.is('block', block),
      ns.is('dashed', dashed),
      ns.is('round', round),
      ns.is('loading', loading)
    ];
  });

  const buttonStyle = useButtonCustomStyle(props);
  function handleHref() {
    props.href ? window.open(props.href, props.target) : null;
    return;
  }

  function handleClick(evt: MouseEvent): void {
    handleHref();
    emits('click', evt);
  }
</script>
