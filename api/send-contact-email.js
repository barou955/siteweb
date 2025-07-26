
export default async function handler(req, res) {
  // Autoriser les requêtes CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message, services } = req.body;

    // Validation des champs requis
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Champs requis manquants',
        details: 'Nom, email, sujet et message sont obligatoires'
      });
    }

    // Pour le moment, on simule l'envoi réussi
    // En production, vous pourrez intégrer avec un service d'email
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      services,
      timestamp: new Date().toISOString()
    });

    // Simuler un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès'
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message',
      details: 'Erreur interne du serveur'
    });
  }
}
