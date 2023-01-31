<template>
  <div
    class="header"
    w="full"
    h="64px"
    bg="#fff"
    shadow-sm
    flex="~ shrink-0"
    justify="between"
    items="center"
    p="x-32px"
    box="border"
  >
    <header-logo />
    <header-menu />
  </div>
</template>
<script setup lang="ts">
  import HeaderLogo from './logo.vue';
  import HeaderMenu from './menu.vue';
</script>
