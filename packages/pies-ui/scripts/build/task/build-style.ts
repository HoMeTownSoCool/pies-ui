// packages/vlib-ui/scripts/build/task/build-style.ts
import { dest, src } from "gulp";
import path from "path";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import { rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import glob from "fast-glob";
import { themeRoot, output, outputEsm, outputCjs } from "../utils/paths";
import { generatePaths } from "../utils/rollup";

const buildScssCopy = async () => {
  await new Promise((resolve) => {
    src(`${themeRoot}/**/*.scss`)
      .pipe(dest(`${outputEsm}/style/scss`)) // es
      .pipe(dest(`${outputCjs}/style/scss`)) // lib
      .on("end", resolve); // 监听流完成
  });
};

const buildScssModules = async () => {
  const sass = gulpSass(dartSass);
  await new Promise((resolve) => {
    src(`${themeRoot}/**/*.scss`)
      .pipe(sass.sync()) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(dest(`${outputEsm}/style/css`)) // es
      .pipe(dest(`${outputCjs}/style/css`)) // lib
      .on("end", resolve); // 监听流完成
  });
};

const buildScssFull = async () => {
  const sass = gulpSass(dartSass);
  await new Promise((resolve) => {
    src(`${themeRoot}/*.scss`)
      .pipe(sass.sync()) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(dest(output)) // dist
      .on("end", resolve); // 监听流完成
  });
};

export const buildStyle = async () => {
  await Promise.all([buildScssCopy(),buildScssModules(), buildScssFull()]);
};