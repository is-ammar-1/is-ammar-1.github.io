import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/is-ammar-1.github.io/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});