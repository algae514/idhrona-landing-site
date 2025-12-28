import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true'
    ? '/idhrona-landing-site/'
    : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})