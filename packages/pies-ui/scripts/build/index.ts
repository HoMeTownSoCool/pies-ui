// packages/vlib-ui/scripts/build/index.ts
import { parallel } from "gulp";
import { buildModules, buildFull, generateTypes, copyFiles, buildStyle } from "./task";

export default parallel(buildModules, buildFull, generateTypes, buildStyle, copyFiles);