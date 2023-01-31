<template>
  <div class="guide" w="full" h="full" bg="#F6F7F9" flex="~">
    <div class="sidebar-wrap" w="300px" box="border" p="12px"><side-bar-component :group="group" /></div>
    <div class="content-wrap" w="full" box="border" p="12px">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SideBar from '../../layout/SideBar/index';
  const SideBarComponent = SideBar.conponent;
  const group: SideBar.Group[] = SideBar.config.guide;
</script>
<style scoped lang="scss">
  .sidebar-wrap,
  .content-wrap {
    overflow-y: scroll;
    height: calc(100vh - 64px);
  }
</style>
