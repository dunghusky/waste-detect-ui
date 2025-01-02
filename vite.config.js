import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://52.88.216.148:8000', //http://54.160.228.250:6060',// 'http://127.0.0.1:8000',//'http://52.88.216.148:8000',  // địa chỉ và cổng backend
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')  // loại bỏ "/api" prefix trong request
      }
    }
  }
})
