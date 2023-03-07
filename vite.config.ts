import path from "path"
import { defineConfig } from "vite"

export const commonConfig = {
  plugins: [],
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
    minify: false,
  },
})
