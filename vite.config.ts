import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Hangman-Game-React-JS-TypeScript/",
  plugins: [react()],
})
