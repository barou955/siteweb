import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🚀 Génération du site statique...');

try {
  // 1. Build Vite
  console.log('📦 Build Vite en cours...');
  execSync('vite build', { stdio: 'inherit' });

  // 2. Vérifier que le répertoire de sortie existe
  const distDir = join(__dirname, 'dist/public');
  if (!existsSync(distDir)) {
    console.error('❌ Le répertoire dist/public n\'existe pas après le build');
    process.exit(1);
  }

  // 3. Copier les fichiers SEO
  console.log('📄 Copie des fichiers SEO...');
  const seoFiles = ['robots.txt', 'sitemap.xml', 'googled6d2f7191889bcdf.html'];

  seoFiles.forEach(file => {
    const sourcePath = join(__dirname, 'client/public', file);
    const destPath = join(distDir, file);

    if (existsSync(sourcePath)) {
      copyFileSync(sourcePath, destPath);
      console.log(`✅ ${file} copié`);
    } else {
      console.warn(`⚠️  ${file} non trouvé dans client/public`);
    }
  });

  // 4. Générer le sitemap dynamique
  console.log('🗺️  Génération du sitemap...');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://labtek.fr/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  writeFileSync(join(distDir, 'sitemap.xml'), sitemap);

  console.log('✅ Site statique généré avec succès dans dist/public/');
  console.log('📁 Fichiers générés :');
  execSync('ls -la dist/public/', { stdio: 'inherit' });

} catch (error) {
  console.error('❌ Erreur lors de la génération :', error.message);
  process.exit(1);
}
