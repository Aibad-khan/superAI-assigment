import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://superai-assigment.onrender.com', // Backend server URL
        changeOrigin: true,
        
      },
    },
  },
  plugins: [react()],
})
