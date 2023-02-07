<template>
  <button
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('disabled', disabled),
      ns.is('link', link),
      ns.is('text', text),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('round', loading)
    ]"
    ><slot></slot
  ></button>
</template>
<script setup lang="ts" name="PiesButton">
  import { buttonProps } from './button';
  import { useNamespace } from '@pies-ui/hooks';

  const ns = useNamespace('button');

  defineProps(buttonProps);
</script>
