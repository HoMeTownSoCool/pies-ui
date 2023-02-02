// packages/vlib-ui/scripts/build/task/build-full.ts
import path from "path";
import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDefineOptions from "unplugin-vue-define-options/rollup";
import esbuild, { minify as minifyPlugin } from "rollup-plugin-esbuild";
import { compRoot, output } from "../utils/paths";
import { target, generateExternal } from "../utils/rollup";
import { PKG_CAMELCASE_NAME } from "../utils/constants";

const build = async (minify: boolean) => {
  // 入口
  const input = [path.resolve(compRoot, "index.ts")];

  // 编译解析
  const bundle = await rollup({
    input,
    plugins: [
      vueDefineOptions(),
      vue(),
      vueJsx(),
      nodeResolve(),
      esbuild({
        target,
        sourceMap: minify,
        treeShaking: true,
      }),
      minify // 生成的是否是压缩版本
        ? minifyPlugin({
            target,
            sourceMap: minify,
          })
        : null,
    ],
    treeshake: true,
    external: generateExternal({ full: false }), // 外部模块，只提取前置依赖为外部模块
  });

  // 输出文件
  await Promise.all([
    bundle.write({
      format: "esm",
      file: path.resolve(output, `index${minify ? ".min" : ""}.mjs`),
      exports: undefined,
      sourcemap: minify,
    }),
    bundle.write({
      format: "umd",
      file: path.resolve(output, `index${minify ? ".min" : ""}.js`),
      exports: "named",
      sourcemap: minify,
      name: PKG_CAMELCASE_NAME, // 组件全局名称
      globals: {
        // 外部模块的全局名称
        vue: "Vue",
        vant: "vant",
      },
    }),
  ]);
};

// 合并为一个主任务
export const buildFull = async () => {
  await Promise.all([build(false), build(true)]);
};