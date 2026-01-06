import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.{ts,tsx}"],
  format: ["esm"],
  target: ["chrome91", "firefox90", "edge91", "safari15", "ios15", "opera77"],
  outDir: "dist",
  dts: true,
  sourcemap: true,
  clean: true,
  tsconfig: "tsconfig.build.json",
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@emotion/react",
    "@emotion/styled",
    "@tanstack/react-query",
  ],
  treeshake: false,
  bundle: false,
  splitting: false,
});
