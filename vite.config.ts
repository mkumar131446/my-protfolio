import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Local macOS Finder keeps recreating dist/.DS_Store, which some sandboxed
    // environments refuse to unlink — that made vite's default dist-cleaning
    // step fail. Skipping the auto-clean avoids that; dist/ is gitignored anyway.
    emptyOutDir: false,
  },
})
