import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',  // địa chỉ và cổng backend
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')  // loại bỏ "/api" prefix trong request
      }
    }
  }
})
