const path = require('path');
const fs = require('fs');
const { build, defineConfig } = require('vite');

const vue = require('@vitejs/plugin-vue');
const dts = require('vite-plugin-dts');
const DefineOptions = require('unplugin-vue-define-options/vite');

const rootDir = path.resolve(__dirname, '../');
const outDir = resolve('packages/pies/dist');

const baseConfig = defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      include: ['packages/pies', 'packages/components'],
      outputDir: path.resolve(outDir, 'types')
    })
  ],
  build: {
    lib: {
      entry: resolve('packages/pies/index.ts'),
      name: 'pies',
      fileName: format => `index.${format}.js`
    },
    outDir,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});

main();

async function main() {
  // build
  await build(baseConfig);

  await copyFiles();
}

async function copyFiles() {
  // fs.copyFileSync(
  //   resolve('packages/pies/package.json'),
  //   resolve('packages/pies/dist/package.json')
  // )
  fs.copyFileSync(resolve('README.md'), resolve('packages/pies/README.md'));
}

function resolve(...urlOrUrls) {
  return path.resolve(rootDir, ...urlOrUrls);
}
