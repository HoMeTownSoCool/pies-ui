<template>
  <app-main>
    <div w="full" text="24px bold">安装</div>
    <div w="full" text="14px" m="y-24px"
      >建议使用包管理器进行安装（ <pies-button type="text" href="https://www.npmjs.com/">NPM</pies-button
      ><pies-button type="text" href="https://yarnpkg.com/">Yarn</pies-button>
      <pies-button type="text" href="https://pnpm.io/">pnpm</pies-button>） 安装 Pies UI。</div
    >
    <div v-highlight class="hl-pre">
      <div class="pre-box">
        <pre><code v-text="pre1"></code></pre>
      </div>
    </div>
    <div w="full" text="14px" m="t-24px"
      >友情提示💡：如果网不行可以考虑使用 <pies-button type="text" href="https://github.com/cnpm/cnpm">cnpm</pies-button
      ><pies-button type="text" href="https://registry.npmmirror.com/">淘宝镜像</pies-button>。</div
    >
  </app-main>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const pre1 = ref(`# NPM
$ npm install pies-ui --save

# Yarn
$ yarn add pies-ui

# pnpm
$ pnpm install pies-ui`);
</script>
