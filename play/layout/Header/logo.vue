<template>
  <div
    class="logo"
    transform="active:scale-95"
    transition="all"
    flex="~"
    justify="center"
    items="center"
    cursor="pointer"
    @click="
      () => {
        routerPush('/');
        playCofetti();
      }
    "
  >
    <img w="120px" src="../../assets/images/logo.jpg" alt="" />
  </div>
</template>
<script setup lang="ts">
  import { useRouter, useCofetti } from '../../hooks';
  const { routerPush } = useRouter();
  const { playCofetti } = useCofetti();
</script>
