<template>
  <ul class="menu" flex="~" gap="8">
    <li
      v-for="item in menus"
      :key="item.path"
      t-p-c
      :text="`14px #000 hover:#000`"
      cursor="pointer"
      @click="routerPush(item.path)"
      >{{ item.name }}</li
    >
  </ul>
</template>
<script setup lang="ts">
  import { useRouter } from '../../hooks';
  const { routerPush } = useRouter();
  const menus = [
    { name: '首页', path: '/' },
    { name: '指南', path: '/guide' },
    { name: '组件', path: '/components' }
  ];
</script>
