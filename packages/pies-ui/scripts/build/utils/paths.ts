import { resolve } from "path";

export const piesRoot = resolve(__dirname, "..", "..", "..", "..","..")

// root
export const root = resolve(__dirname, "..", "..", "..", "..");
export const compRoot = resolve(root, "components");
export const themeRoot = resolve(root, "theme-chalk/src")
// output
export const output = resolve(root, "./pies-ui/dist");
export const outputEsm = resolve(root, "./pies-ui/es");
export const outputCjs = resolve(root, "./pies-ui/lib");

// package
export const compPackage = resolve(root, "./pies-ui/package.json");