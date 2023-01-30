<template>
  <div class="wrap" h="full" w="full" flex="~ col">
    <layout-header />
    <div class="content" flex="1"> <router-view /></div>
  </div>
</template>
<script setup lang="ts">
  import LayoutHeader from './layout/Header/index.vue';
</script>
