import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'; // 引入插件

export default defineConfig({
  plugins: [vue(), vueSetupExtend(), Unocss()]
});
