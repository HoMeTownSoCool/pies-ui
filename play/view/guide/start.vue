<template>
  <app-main>
    <div w="full"> </div>
    <div v-highlight class="hl-pre">
      <div class="pre-box">
        <pre><code v-text="pre1"></code></pre>
      </div>
    </div>
  </app-main>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const pre1 = ref(`<script setup>
  import { PiesButton } from 'pies-ui'
<\/script>`);
</script>
