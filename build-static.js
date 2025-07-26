#!/usr/bin/env node

// Build script for static deployment on Vercel
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
const fs = require('fs');
const { generateSitemap } = require('./generate-sitemap');

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite config for static build
const config = {
  plugins: [
    await import('@vitejs/plugin-react').then(m => m.default())
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
};

async function buildStatic() {
  console.log('🚀 Building static site...');

  try {
    // Générer le sitemap avant le build
    console.log('📄 Generating sitemap...');
    generateSitemap();
  
  console.log('Building static site for Vercel...');
  await build(config);
  console.log('✅ Static build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
}

buildStatic();