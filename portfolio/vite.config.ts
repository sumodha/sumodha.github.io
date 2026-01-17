import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // plugin to use svg react components

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(),],
  base: '/sumodha.github.io/'
})
