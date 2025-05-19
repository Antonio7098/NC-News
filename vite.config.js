import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss(), require('@tailwindcss/line-clamp')],
  server: {
    proxy: {
      '/api': 'https://nc-news-q3ya.onrender.com/api', // or wherever your backend runs
    },
  },
})
