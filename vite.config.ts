import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [react()],
  publicDir: 'client/public',
  build: {
    outDir: 'dist/public',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000'
    },
    headers: {
      'X-Content-Type-Options': 'nosniff'
    }
  },
  assetsInclude: ['**/*.webmanifest'],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});
