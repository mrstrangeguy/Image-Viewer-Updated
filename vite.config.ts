import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/variables.scss";`, // Import your global SCSS variables here
      },
    },
  }
})
