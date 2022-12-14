import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend"; //用于给setup script组建增加name属性

export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
});
