// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/%E5%89%8D%E7%AB%AF%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B/Learn_Vue3_Basic/13.ly-trip-project/node_modules/.pnpm/vite@5.2.10_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/%E5%89%8D%E7%AB%AF%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B/Learn_Vue3_Basic/13.ly-trip-project/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.10_less@4.2.0__vue@3.4.26/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/%E5%89%8D%E7%AB%AF%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B/Learn_Vue3_Basic/13.ly-trip-project/node_modules/.pnpm/unplugin-auto-import@0.17.5_rollup@4.17.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/%E5%89%8D%E7%AB%AF%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B/Learn_Vue3_Basic/13.ly-trip-project/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.5_rollup@4.17.2_vue@3.4.26/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///E:/%E5%89%8D%E7%AB%AF%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B/Learn_Vue3_Basic/13.ly-trip-project/node_modules/.pnpm/@vant+auto-import-resolver@1.1.0/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/%E5%89%8D%E7%AB%AF%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE%E6%A1%88%E4%BE%8B/Learn_Vue3_Basic/13.ly-trip-project/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxcdTUyNERcdTdBRUZcdTdDRkJcdTUyMTdcdTVCNjZcdTRFNjBcdTk4NzlcdTc2RUVcdTY4NDhcdTRGOEJcXFxcTGVhcm5fVnVlM19CYXNpY1xcXFwxMy5seS10cmlwLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1NTI0RFx1N0FFRlx1N0NGQlx1NTIxN1x1NUI2Nlx1NEU2MFx1OTg3OVx1NzZFRVx1Njg0OFx1NEY4QlxcXFxMZWFybl9WdWUzX0Jhc2ljXFxcXDEzLmx5LXRyaXAtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovJUU1JTg5JThEJUU3JUFCJUFGJUU3JUIzJUJCJUU1JTg4JTk3JUU1JUFEJUE2JUU0JUI5JUEwJUU5JUExJUI5JUU3JTlCJUFFJUU2JUExJTg4JUU0JUJFJThCL0xlYXJuX1Z1ZTNfQmFzaWMvMTMubHktdHJpcC1wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tICdAdmFudC9hdXRvLWltcG9ydC1yZXNvbHZlcic7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZaLFNBQVMsZUFBZSxXQUFXO0FBRWhjLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQU5vTCxJQUFNLDJDQUEyQztBQVNsUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLElBQzVCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
