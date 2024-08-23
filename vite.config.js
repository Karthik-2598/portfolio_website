import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/karthik_portfolio/",
  build:{
    outDir:"docs",
  }
})
