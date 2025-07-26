
const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message, services, to } = req.body;

    console.log('Received contact form submission:', {
      name, email, phone, subject, services, to
    });

    // Validation des champs requis
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Champs requis manquants',
        details: 'Nom, email, sujet et message sont obligatoires'
      });
    }

    // Configuration SMTP pour Outlook avec mot de passe d'application
    const transporter = nodemailer.createTransporter({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "contact@labtek.fr",
        pass: "pcmqmbrzwgttmgzc",
      },
      tls: {
        rejectUnauthorized: false,
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: to || "contact@labtek.fr",
      replyTo: email,
      subject: `Contact depuis le site web - ${subject}`,
      html: `
        <h2>Nouveau message depuis le site web</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
        ${services ? `<p><strong>Services demandés:</strong> ${services}</p>` : ''}
        <p><strong>Sujet:</strong> ${subject}</p>

        <h3>Message:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4F6FEF; margin: 10px 0;">
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>

        <hr>
        <p style="font-size: 12px; color: #666;">
          Ce message a été envoyé depuis le formulaire de contact du site web LABTEK.<br>
          Vous pouvez répondre directement à cet email pour contacter ${name}.
        </p>
      `,
      text: `
Nouveau message depuis le site web

Nom: ${name}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
${services ? `Services demandés: ${services}` : ''}
Sujet: ${subject}

Message:
${message}

---
Ce message a été envoyé depuis le formulaire de contact du site web LABTEK.
      `
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully to:', to || "contact@labtek.fr");

    res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès vers ' + (to || "contact@labtek.fr")
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message',
      details: error.message
    });
  }
};
