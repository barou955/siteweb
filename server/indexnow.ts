
import fetch from 'node-fetch';
import crypto from 'crypto';

export class IndexNowService {
  private static apiKey: string;
  private static keyLocation: string;

  static {
    // Générer une clé API unique pour IndexNow
    this.apiKey = crypto.randomBytes(16).toString('hex');
    this.keyLocation = `https://labtek.fr/${this.apiKey}.txt`;
  }

  /**
   * Soumet une URL à IndexNow pour indexation sur Bing
   */
  static async submitUrl(url: string): Promise<boolean> {
    try {
      const payload = {
        host: 'labtek.fr',
        key: this.apiKey,
        keyLocation: this.keyLocation,
        urlList: [url]
      };

      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Labtek-IndexNow/1.0'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        console.log(`✅ URL soumise avec succès à IndexNow: ${url}`);
        return true;
      } else if (response.status === 202) {
        console.log(`✅ URL acceptée par IndexNow: ${url}`);
        return true;
      } else {
        console.error(`❌ Erreur IndexNow (${response.status}): ${await response.text()}`);
        return false;
      }
    } catch (error) {
      console.error('❌ Erreur lors de la soumission IndexNow:', error);
      return false;
    }
  }

  /**
   * Soumet plusieurs URLs en une seule requête
   */
  static async submitUrls(urls: string[]): Promise<boolean> {
    try {
      const payload = {
        host: 'labtek.fr',
        key: this.apiKey,
        keyLocation: this.keyLocation,
        urlList: urls
      };

      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Labtek-IndexNow/1.0'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`✅ ${urls.length} URLs soumises avec succès à IndexNow`);
        return true;
      } else {
        console.error(`❌ Erreur IndexNow (${response.status}): ${await response.text()}`);
        return false;
      }
    } catch (error) {
      console.error('❌ Erreur lors de la soumission IndexNow:', error);
      return false;
    }
  }

  /**
   * Soumet automatiquement toutes les pages principales
   */
  static async submitAllPages(): Promise<void> {
    const mainUrls = [
      'https://labtek.fr/',
      'https://labtek.fr/#services',
      'https://labtek.fr/#about',
      'https://labtek.fr/#contact',
      'https://labtek.fr/#testimonials',
      'https://labtek.fr/#process',
      'https://labtek.fr/#maintenance',
      'https://labtek.fr/depannage-assistance',
      'https://labtek.fr/installation-equipements',
      'https://labtek.fr/installation-programmes',
      'https://labtek.fr/montage-pc-sur-mesure',
      'https://labtek.fr/securite-sauvegarde',
      'https://labtek.fr/email-professionnel',
      'https://labtek.fr/sites-web',
      'https://labtek.fr/formation-accompagnement',
      'https://labtek.fr/infogerance-legere'
    ];

    await this.submitUrls(mainUrls);
  }

  /**
   * Retourne la clé API pour créer le fichier de vérification
   */
  static getApiKey(): string {
    return this.apiKey;
  }

  /**
   * Retourne l'URL du fichier de clé
   */
  static getKeyLocation(): string {
    return this.keyLocation;
  }
}
