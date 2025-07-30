import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { IndexNowService } from "./indexnow";

export async function registerRoutes(app: Express): Promise<Server> {
  // IndexNow API routes
  
  // Route pour servir le fichier de clé IndexNow
  app.get(`/${IndexNowService.getApiKey()}.txt`, (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(IndexNowService.getApiKey());
  });

  // Route pour soumettre manuellement une URL
  app.post('/api/indexnow/submit', async (req, res) => {
    try {
      const { url } = req.body;
      
      if (!url) {
        return res.status(400).json({ error: 'URL is required' });
      }

      const success = await IndexNowService.submitUrl(url);
      
      if (success) {
        res.json({ message: 'URL soumise avec succès à IndexNow', url });
      } else {
        res.status(500).json({ error: 'Échec de la soumission à IndexNow' });
      }
    } catch (error) {
      console.error('Erreur IndexNow:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });

  // Route pour soumettre toutes les pages
  app.post('/api/indexnow/submit-all', async (req, res) => {
    try {
      await IndexNowService.submitAllPages();
      res.json({ message: 'Toutes les pages ont été soumises à IndexNow' });
    } catch (error) {
      console.error('Erreur IndexNow:', error);
      res.status(500).json({ error: 'Erreur lors de la soumission' });
    }
  });

  // Route pour obtenir les informations IndexNow
  app.get('/api/indexnow/info', (req, res) => {
    res.json({
      apiKey: IndexNowService.getApiKey(),
      keyLocation: IndexNowService.getKeyLocation(),
      status: 'configured'
    });
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
