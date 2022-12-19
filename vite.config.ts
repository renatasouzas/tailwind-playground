
/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    outDir: './dist'
  },
  resolve: {},
  plugins: [
    react({
      include: '**/*.{jsx,tsx}'
    })
  ],
  server: {
    port: 8081
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
})