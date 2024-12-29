import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/is-ammar-1.github.io/', // Replace <your-repo-name> with your GitHub repository name
  build: {
    outDir: 'dist',},
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});