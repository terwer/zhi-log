import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import path from "path"

export default defineConfig({
  plugins: [dts()],
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
      entry: [
        path.resolve(__dirname, "src/index.ts"),
        path.resolve(__dirname, "src/logConstants.ts"),
      ],
      name: "ZhiLog",
      formats: ["es", "cjs"],
      // fileName: "index",
    },
    rollupOptions: {
      external: ["path"],
    },
  },
})
