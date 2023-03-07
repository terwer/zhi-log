import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export const commonConfig = {
  base: "./",
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, ""),
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  ...commonConfig,
  plugins: [dts()],
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "src/logUtil.ts"),
        path.resolve(__dirname, "src/logConstants.ts"),
      ],
    },
    rollupOptions: {
      external: ["path"],
    },
  },
})
