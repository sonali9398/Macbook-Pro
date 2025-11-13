import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', 
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss({
      theme: {
        container: {
          center: true,
          padding: '1rem',
          screens: {
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
            '2xl': '100%',
          },
        },
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000, 
  },
})
