# Déploiement sur Vercel

## Configuration pour site statique

Ce projet Labtek est configuré pour être déployé comme site statique sur Vercel avec les fichiers suivants :

### Fichiers de configuration

- **`vercel.json`** : Configuration de déploiement Vercel
- **`build-static.js`** : Script de build pour génération statique
- **`.gitignore`** : Fichiers à ignorer lors du déploiement

## Instructions de déploiement

### 1. Préparer le projet

```bash
# S'assurer que le build fonctionne localement
node build-static.js
```

### 2. Déployer sur Vercel

#### Option A : Via le dashboard Vercel
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration via `vercel.json`
3. Le build utilisera automatiquement `node build-static.js`

#### Option B : Via la CLI Vercel
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### 3. Configuration du domaine personnalisé

1. Dans le dashboard Vercel, aller dans **Settings > Domains**
2. Ajouter votre domaine `labtek.fr`
3. Configurer les DNS selon les instructions Vercel

## Résolution de problèmes

### Page noire avec code affiché
- **Cause** : Le serveur Node.js s'exécute au lieu de servir les fichiers statiques
- **Solution** : Utiliser la configuration `vercel.json` fournie qui force le déploiement statique

### Erreurs de build
- **Vérifier** : `node build-static.js` fonctionne localement
- **Vérifier** : Toutes les dépendances sont installées
- **Logs** : Consulter les logs de build dans le dashboard Vercel

### Assets manquants
- Les assets de `attached_assets/` sont inclus via l'alias `@assets`
- Vérifier que les imports utilisent bien cette syntaxe

## Structure des fichiers générés

```
dist/public/
├── index.html          # Page principale
├── assets/
│   ├── index-xxx.css   # Styles compilés
│   ├── index-xxx.js    # JavaScript compilé
│   └── [autres assets] # Images, fonts, etc.
└── [fichiers statiques]
```

Le site fonctionnera alors parfaitement comme site vitrine statique sur votre domaine labtek.fr !