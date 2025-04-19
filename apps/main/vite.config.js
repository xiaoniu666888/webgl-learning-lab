import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './',
  resolve: {
    alias: {
      '@/utils': path.join(__dirname, '../../packages/utils')
    }
  },
  server: {
    open: true,
    port: 8080,
  }
})