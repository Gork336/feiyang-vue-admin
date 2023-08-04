import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    visualizer(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/echarts")) {
            return "echarts";
          }
          if (id.includes("node_modules/zrender")) {
            return "zrender";
          }
          if (id.includes("node_modules/lodash")) {
            return "lodash";
          }
          if (id.includes("node_modules/axios")) {
            return "axios";
          }
          if (id.includes("node_modules/@vue")) {
            return "@vue";
          }
          if (id.includes("node_modules/vue-router")) {
            return "vue-router";
          }
          if (id.includes("node_modules/gsap")) {
            return "gsap";
          }
          if (id.includes("node_modules/@fortawesome")) {
            return "@fortawesome";
          }
          if (id.includes("node_modules/element-plus")) {
            if (id.includes("node_modules/element-plus/es/components/table")) {
              return "element-plus-table";
            }
            if (id.includes("node_modules/element-plus/es/components/select")) {
              return "element-plus-select";
            }
            if (id.includes("node_modules/element-plus/es/components/date")) {
              return "element-plus-date";
            }
          }

        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
