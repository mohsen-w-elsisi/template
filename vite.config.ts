import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        // insert app manifest here
      },
    }),
  ],
  resolve: {
    alias: {
      $assets: path.resolve(__dirname, "./src/assets"),
      $lib: path.resolve(__dirname, "./src/lib"),
      $components: path.resolve(__dirname, "./src/components"),
      $icons: path.resolve(__dirname, "./src/icons"),
    },
  },
});
