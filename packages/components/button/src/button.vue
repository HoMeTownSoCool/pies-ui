<template>
  <button
    :class="classList"
    :type="nativeType"
    :autofocus="autofocus"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts" name="PiesButton">
import { computed } from "vue";
import { Props, Emits } from "./button";

const props = defineProps(Props);
const emits = defineEmits(Emits);

const classList = computed(() => {
  const {
    type,
    size,
    dashed,
    text,
    loading,
    block,
    circle,
    strong,
    ghost,
    disabled,
    weight,
  } = props;
  return [
    "pies-button",
    {
      [`pies-button--${type}`]: type,
      [`pies-button--${size}`]: size,
      [`pies-button--${weight}`]: weight,
      [`is-disabled`]: disabled,
      [`is-ghost`]: ghost,
      [`is-strong`]: strong,
      [`is-circle`]: circle,
      [`is-block`]: block,
      [`is-dashed`]: dashed,
      [`is-loading`]: loading,
      [`is-text`]: text,
    },
  ];
});

function handleClick(evt: MouseEvent): void {
  emits("click", evt);
}
</script>
