<template>
  <div :class="`${ns.b('group')}`">
    <slot />
  </div>
</template>
<script setup lang="ts" name="PiesButtonGroup">
  import { provide, reactive, toRef } from 'vue';
  import { useNamespace } from '@pies-ui/hooks';
  import { Props } from './button-group';
  import { buttonGroupContextKey } from '@pies-ui/tokens';

  const ns = useNamespace('button');

  const props = defineProps(Props);

  provide(
    buttonGroupContextKey,
    reactive({
      size: toRef(props, 'size'),
      type: toRef(props, 'type'),
      secondary: toRef(props, 'secondary')
    })
  );
</script>
