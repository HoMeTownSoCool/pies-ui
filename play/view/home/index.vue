<template>
  <div class="home" w-full h-full flex="~ col" items="center" justify="center" box="border" gap="38px" p="b-140px">
    <img
      cursor="pointer"
      w="220px"
      transform="scale-90 hover:scale-100"
      transition="all"
      src="../../assets/images/logo1.png"
      alt=""
      @click="playCofetti"
    />
    <h1 text-size-32px text="#1d2129" m="t-30px">一个 Vue 3 组件库 </h1>
    <p text-size-14px text="#1d2129">🐌 Progress is extremely slow 🐛 译：慢就是快!</p>
    <p text-size-12px text="#86909c">注意‼️: 该库目前仅用于个人学习使用，请您不要在生产环境使用，除非你准备润🏃🏻‍♀️</p>
    <div>
      <pies-button type="primary" @click="routerPush('/guide')">马上开始</pies-button>
    </div>
    <shape-divider />
  </div>
</template>
<script setup lang="ts">
  import ShapeDivider from './shape-divider.vue';
  import { useRouter, useCofetti } from '../../hooks';

  const { routerPush } = useRouter();
  const { playCofetti } = useCofetti();
</script>
