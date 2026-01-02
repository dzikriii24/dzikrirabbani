import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Wajib untuk Tailwind v4
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Plugin Tailwind v4 dimasukkan di sini
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    })
  ],
  base: '/', // Pastikan ini '/' untuk root domain di Vercel
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})