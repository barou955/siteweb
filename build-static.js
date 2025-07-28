
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { generateSitemap } from './generate-sitemap.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    // Ensure custom images are in place
    console.log('📄 Copying custom images...');
    const publicDir = path.resolve(__dirname, "client/public");
    
    // Copy custom images from attached_assets to public folder
    const sourceOffice = path.resolve(__dirname, "attached_assets/outil collaboratif_1753702685573.png");
    const sourceDepannage = path.resolve(__dirname, "attached_assets/dépannage_1753702867409.png");
    const destOffice = path.resolve(publicDir, "office-suite-personnalise.png");
    const destDepannage = path.resolve(publicDir, "depannage-personnalise.png");
    
    if (fs.existsSync(sourceOffice)) {
      fs.copyFileSync(sourceOffice, destOffice);
      console.log('✅ Copied office suite image');
    }
    
    if (fs.existsSync(sourceDepannage)) {
      fs.copyFileSync(sourceDepannage, destDepannage);
      console.log('✅ Copied depannage image');
    }

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
