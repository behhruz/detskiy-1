import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Ensures the development server runs on this port
  },
  build: {
    outDir: 'dist', // Output directory for production builds
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias setup for cleaner imports
    },
  },
});
