<template>
  <button
    :class="classList"
    :style="styleList"
    :type="nativeType"
    :autofocus="autofocus"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts" name="PiesButton">
  import { computed } from 'vue';
  import { Props, Emits } from './button';

  const props = defineProps(Props);
  const emits = defineEmits(Emits);

  const classList = computed(() => {
    const { type, size, dashed, loading, block, circle, strong, ghost, disabled, secondary } = props;
    return [
      'pies-button',
      {
        [`pies-button--${type}`]: type,
        [`pies-button--${size}`]: size,
        ['is-secondary']: secondary,
        ['is-disabled']: disabled,
        ['is-ghost']: ghost,
        ['is-strong']: strong,
        ['is-circle']: circle,
        ['is-block']: block,
        ['is-dashed']: dashed,
        ['is-loading']: loading
      }
    ];
  });

  const styleList = computed(() => {
    const { textColor } = props;
    return {
      color: textColor
    };
  });

  function handleHref() {
    props.href ? window.open(props.href, props.target) : null;
    return;
  }

  function handleClick(evt: MouseEvent): void {
    handleHref();
    emits('click', evt);
  }
</script>
