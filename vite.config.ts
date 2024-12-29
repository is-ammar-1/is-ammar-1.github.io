import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Changed from '/is-ammar-1.github.io/'
  build: {
    outDir: 'dist',},
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});