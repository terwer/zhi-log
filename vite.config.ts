import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import path from "path"

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, ""),
      },
    ],
  },
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ZhiLog",
      formats: ["es", "cjs"],
      fileName: "index",
    },
  },
  plugins: [dts()],
})
