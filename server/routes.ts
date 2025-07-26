import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import PDFDocument from "pdfkit";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Send contact form email
  app.post("/api/send-contact-email", async (req, res) => {
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
      const transporter = nodemailer.createTransport({
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
  });

  // Generate PDF quote - Completely recreated function
  app.post("/api/generate-quote-pdf", (req, res) => {
    console.log('PDF generation route called with method:', req.method);
    
    try {
      const {
        clientInfo,
        services,
        total,
        maintenance,
        additionalNotes,
        date,
        quoteNumber,
        urgencyMultiplier
      } = req.body;

      console.log('Creating PDF with data:', {
        clientName: clientInfo?.name,
        servicesCount: services?.length,
        total: total
      });

      // Create PDF document
      const doc = new PDFDocument({
        size: 'A4',
        margin: 50,
        info: {
          Title: `Devis LABTEK ${quoteNumber}`,
          Author: 'LABTEK - Services Informatiques',
          Subject: 'Devis personnalisé'
        }
      });

      // Set headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="devis-labtek-${quoteNumber}.pdf"`);
      res.setHeader('Content-Length', doc.length);

      // Stream PDF directly to response
      doc.pipe(res);

      // Company header
      doc.fontSize(24)
         .fillColor('#4F6FEF')
         .text('LABTEK', 50, 50);

      doc.fontSize(10)
         .fillColor('#333333')
         .text('BAROUJAN BASKARAN - Micro-entrepreneur', 50, 80)
         .text('Services Informatiques et Solutions Digitales', 50, 95)
         .text('91250 SAINT-GERMAIN-LÈS-CORBEIL, FRANCE', 50, 110)
         .text('SIRET: 123 456 789 01234', 50, 125)
         .text('Tél: +33 6 76 45 42 67 - Email: contact@labtek.fr', 50, 140);

      // Quote info box
      doc.rect(400, 50, 150, 90)
         .fillAndStroke('#f8f9fa', '#4F6FEF');
      
      doc.fontSize(20)
         .fillColor('#4F6FEF')
         .text('DEVIS', 430, 70);
      
      doc.fontSize(12)
         .fillColor('#000000')
         .text(`N° ${quoteNumber}`, 410, 95)
         .text(`Date: ${date}`, 410, 110);

      doc.fontSize(8)
         .fillColor('#666666')
         .text('PROVISOIRE', 470, 125);

      // Client information
      let currentY = 180;
      doc.fontSize(14)
         .fillColor('#4F6FEF')
         .text('INFORMATIONS CLIENT', 50, currentY);

      currentY += 25;
      doc.fontSize(11)
         .fillColor('#000000')
         .text(`Nom: ${clientInfo.name}`, 50, currentY);

      if (clientInfo.company) {
        currentY += 15;
        doc.text(`Société: ${clientInfo.company}`, 50, currentY);
      }

      currentY += 15;
      doc.text(`Email: ${clientInfo.email}`, 50, currentY);

      if (clientInfo.phone) {
        currentY += 15;
        doc.text(`Téléphone: ${clientInfo.phone}`, 50, currentY);
      }

      currentY += 15;
      doc.text(`Nombre d'employés: ${clientInfo.employees}`, 50, currentY);

      currentY += 15;
      doc.text(`Délai: ${clientInfo.urgency === 'urgent' ? 'Urgent' : clientInfo.urgency === 'emergency' ? 'Urgence' : 'Standard'}`, 50, currentY);

      // Services table
      currentY += 40;
      doc.fontSize(14)
         .fillColor('#4F6FEF')
         .text('PRESTATIONS DEMANDÉES', 50, currentY);

      currentY += 25;
      
      // Table headers
      doc.fontSize(10)
         .fillColor('#000000')
         .text('Désignation', 50, currentY)
         .text('Qté', 350, currentY)
         .text('Prix Unit. HT', 400, currentY)
         .text('Total HT', 480, currentY);

      currentY += 15;
      doc.moveTo(50, currentY)
         .lineTo(550, currentY)
         .stroke();

      currentY += 10;

      // Services list
      let serviceNumber = 1;
      services.forEach((service) => {
        doc.fontSize(9)
           .text(`${serviceNumber}. ${service.name}`, 50, currentY)
           .text(service.quantity.toString(), 355, currentY)
           .text(`${service.basePrice.toFixed(2)} €`, 405, currentY)
           .text(`${(service.basePrice * service.quantity).toFixed(2)} €`, 485, currentY);

        currentY += 15;

        // Service options
        if (service.selectedOptions && service.selectedOptions.length > 0) {
          service.options?.forEach((option) => {
            if (service.selectedOptions.includes(option.id)) {
              doc.fontSize(8)
                 .fillColor('#666666')
                 .text(`   + ${option.name}`, 55, currentY)
                 .text(service.quantity.toString(), 355, currentY)
                 .text(`${option.price.toFixed(2)} €`, 405, currentY)
                 .text(`${(option.price * service.quantity).toFixed(2)} €`, 485, currentY);
              currentY += 12;
            }
          });
          doc.fillColor('#000000');
        }

        serviceNumber++;
        currentY += 5;
      });

      // Maintenance
      if (maintenance && maintenance.price > 0) {
        doc.fontSize(9)
           .text(`${serviceNumber}. Contrat de maintenance ${maintenance.name}`, 50, currentY)
           .text('1', 355, currentY)
           .text(`${maintenance.price.toFixed(2)} €/mois`, 405, currentY)
           .text(`${maintenance.price.toFixed(2)} €`, 485, currentY);
        currentY += 20;
      }

      // Totals
      currentY += 20;
      const totalHT = total;
      const tva = totalHT * 0.2;
      const totalTTC = totalHT + tva;

      doc.rect(350, currentY, 200, 70)
         .stroke();

      currentY += 15;
      doc.fontSize(11)
         .text('Sous-total HT:', 360, currentY)
         .text(`${totalHT.toFixed(2)} €`, 480, currentY);

      currentY += 15;
      doc.text('TVA (20%):', 360, currentY)
         .text(`${tva.toFixed(2)} €`, 480, currentY);

      currentY += 15;
      doc.fontSize(12)
         .fillColor('#4F6FEF')
         .text('TOTAL TTC:', 360, currentY)
         .text(`${totalTTC.toFixed(2)} €`, 480, currentY);

      // Additional notes
      if (additionalNotes && additionalNotes.trim()) {
        currentY += 60;
        doc.fontSize(12)
           .fillColor('#4F6FEF')
           .text('NOTES SUPPLÉMENTAIRES', 50, currentY);

        currentY += 20;
        doc.fontSize(10)
           .fillColor('#000000')
           .text(additionalNotes, 50, currentY, { width: 500 });
      }

      // Footer conditions
      currentY = Math.max(currentY + 60, 650);
      doc.fontSize(10)
         .fillColor('#000000')
         .text('Conditions:', 50, currentY)
         .text('• Devis valable 30 jours à compter de la date d\'émission', 50, currentY + 15)
         .text('• Paiement à 30 jours fin de mois', 50, currentY + 30)
         .text('• TVA non applicable (article 293 B du CGI)', 50, currentY + 45);

      currentY += 80;
      doc.text('Bon pour accord, date et signature :', 50, currentY);

      // Watermark
      doc.fontSize(50)
         .fillColor('#cccccc', 0.3)
         .rotate(-45, { origin: [300, 400] });
      doc.text('DEVIS', 250, 350);

      // Finalize PDF
      doc.end();

      console.log('PDF generation completed successfully');

    } catch (error) {
      console.error('PDF generation error:', error);
      if (!res.headersSent) {
        res.status(500).json({ 
          error: 'Erreur lors de la génération du PDF', 
          details: error.message 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
