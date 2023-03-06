import path from "path"
import {defineConfig} from "vite"

export const commonConfig = {
  plugins: [],
  base: "./",
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, ""),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "public"),
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  ...commonConfig,
  // base: "/appearance/themes/zhi/dist",
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "src/log.ts"),
      name: "ZhiLog",
      // the proper extensions will be added
      fileName: "zhi-log",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
