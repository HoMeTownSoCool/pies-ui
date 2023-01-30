<template>
  <div class="home" w-full h-full flex="~ col" items="center" justify="center" box="border" gap="38px" p="b-140px">
    <img
      cursor="pointer"
      w="220px"
      transform="scale-90 hover:scale-100"
      transition="all"
      src="../../assets/images/logo1.png"
      alt=""
      @click="showCofetti"
    />
    <h1 text-size-32px text="#1d2129" m="t-30px">一个 Vue 3 组件库 </h1>
    <p text-size-14px text="#1d2129">🐌 Progress is extremely slow 🐛 译：慢就是快!</p>
    <p text-size-12px text="#86909c">注意‼️: 该库目前仅用于个人学习，请不要再生产环境使用，除非你准备润🏃🏻‍♀️</p>
    <div>
      <pies-button type="primary">马上开始</pies-button>
    </div>
    <shape-divider />
  </div>
</template>
<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core';
  import ShapeDivider from './shape-divider.vue';

  const showCofetti = useDebounceFn(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        }
      });
    }, 300);
  }, 300);
</script>
