<template>
  <div
    class="header"
    w="full"
    h="64px"
    bg="#fff"
    shadow-sm
    flex
    justify="between"
    items="center"
    p="x-32px"
    box="border"
  >
    <div class="logo" flex="~" justify="center" items="center">
      <img w="120px" src="../../assets/images/logo.jpg" alt="" />
    </div>
    <ul class="menu" flex="~" gap="8">
      <li
        v-for="item in menus"
        :key="item.path"
        t-p-c
        :text="`#000 hover:#000`"
        cursor="pointer"
        @click="jumpRouter(item.path)"
        >{{ item.name }}</li
      >
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const menus = [
    { name: '首页', path: '/' },
    { name: '指南', path: '/guide' },
    { name: '组件', path: '/components' }
  ];

  function jumpRouter(path: string) {
    router.push(path);
  }
</script>
