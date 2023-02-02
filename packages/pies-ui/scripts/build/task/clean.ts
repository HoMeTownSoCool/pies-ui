// packages/ui/scripts/build/task/clean.ts
import fs from "fs-extra";
import { output, outputEsm, outputCjs } from "../utils";

export const clean = async () => {
  await Promise.all([
    fs.remove(output),
    fs.remove(outputEsm),
    fs.remove(outputCjs),
    // ...
  ]);
};