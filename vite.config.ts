import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Hangman-game-using-react-js-typescript/",
  plugins: [react()],
})
