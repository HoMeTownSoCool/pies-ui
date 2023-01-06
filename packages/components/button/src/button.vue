<template>
  <button>
    <slot>{{ p.size }}||{{ p.type }}</slot>
  </button>
</template>
<script setup lang="ts" name="PiesButton">
import { computed } from "vue";
import { buttonProps } from "./button";

const props = defineProps(buttonProps);
const p = computed(() => {
  const { size = "meduim", type = "text" } = props;
  return { size, type };
});
</script>
