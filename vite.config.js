import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: Path.resolve(__dirname, "./src/main.js"),
      name: 'LutterUI', // 库的全局变量名
      fileName: (format) => `index.${format}.js`, // 输出文件名
      formats: ['es', 'cjs'] // 打包格式
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
