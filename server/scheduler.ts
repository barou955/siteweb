
import cron from 'node-cron';
import { IndexNowService } from './indexnow';

export class IndexNowScheduler {
  private static isRunning = false;

  /**
   * Démarre le planificateur automatique
   */
  static start(): void {
    if (this.isRunning) {
      console.log('📅 IndexNow scheduler déjà en cours d\'exécution');
      return;
    }

    // Soumission quotidienne à 9h00
    cron.schedule('0 9 * * *', async () => {
      console.log('🔄 Soumission quotidienne programmée à IndexNow...');
      await IndexNowService.submitAllPages();
    });

    // Soumission hebdomadaire du sitemap le dimanche à 10h00
    cron.schedule('0 10 * * 0', async () => {
      console.log('🗓️ Soumission hebdomadaire du sitemap à IndexNow...');
      await IndexNowService.submitUrl('https://labtek.fr/sitemap.xml');
    });

    this.isRunning = true;
    console.log('✅ IndexNow scheduler démarré avec succès');
    console.log('   - Soumission quotidienne: 9h00');
    console.log('   - Soumission sitemap: Dimanche 10h00');
  }

  /**
   * Arrête le planificateur
   */
  static stop(): void {
    cron.destroy();
    this.isRunning = false;
    console.log('⏹️ IndexNow scheduler arrêté');
  }

  /**
   * Statut du planificateur
   */
  static getStatus(): boolean {
    return this.isRunning;
  }

  /**
   * Soumission immédiate manuelle
   */
  static async submitNow(): Promise<void> {
    console.log('⚡ Soumission immédiate à IndexNow...');
    await IndexNowService.submitAllPages();
  }
}
