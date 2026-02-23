import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ViteImageOptimizer({
            jpg: { quality: 80 },
            png: { quality: 80 },
            webp: { quality: 80 },
        }),
    ],
    base: "/tokyo05/",
})
