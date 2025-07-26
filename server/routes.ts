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

      // Configuration SMTP pour Outlook/Hotmail
      const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true pour 465, false pour les autres ports
        auth: {
          user: "contact@labtek.fr",
          pass: "V)137679247759oc*",
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false,
        },
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

  // Generate PDF quote
  app.post("/api/generate-quote-pdf", async (req, res) => {
    try {
      const {
        clientInfo,
        services,
        subtotal,
        total,
        maintenance,
        additionalNotes,
        date,
        quoteNumber,
        urgencyMultiplier,
      } = req.body;

      // Send email notification
      try {
        // Configuration SMTP pour Outlook/Hotmail
        const transporter = nodemailer.createTransport({
          host: "smtp-mail.outlook.com",
          port: 587,
          secure: false, // true pour 465, false pour les autres ports
          auth: {
            user: "contact@labtek.fr",
            pass: "V)137679247759oc*",
          },
          tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false,
          },
        });

        const mailOptions = {
          from: "contact@labtek.fr",
          to: "contact@labtek.fr",
          subject: `Nouveau devis généré - ${quoteNumber}`,
          html: `
            <h2>Nouveau devis généré</h2>
            <p><strong>Numéro de devis:</strong> ${quoteNumber}</p>
            <p><strong>Date:</strong> ${date}</p>

            <h3>Informations client:</h3>
            <ul>
              <li><strong>Nom:</strong> ${clientInfo.name}</li>
              <li><strong>Entreprise:</strong> ${clientInfo.company || "Particulier"}</li>
              <li><strong>Email:</strong> ${clientInfo.email}</li>
              <li><strong>Téléphone:</strong> ${clientInfo.phone || "Non renseigné"}</li>
              <li><strong>Nombre d'employés:</strong> ${clientInfo.employees}</li>
              <li><strong>Délai:</strong> ${clientInfo.urgency}</li>
            </ul>

            <h3>Services demandés:</h3>
            <ul>
              ${services
                .map(
                  (service) => `
                <li>${service.name} (Quantité: ${service.quantity}) - ${service.total}€</li>
              `,
                )
                .join("")}
            </ul>

            <h3>Contrat de maintenance:</h3>
            <p>${maintenance ? `${maintenance.name} - ${maintenance.price}€/mois` : "Aucun"}</p>

            <h3>Total du devis:</h3>
            <p><strong>${total.toFixed(2)}€ HT (${(total * 1.2).toFixed(2)}€ TTC)</strong></p>

            ${additionalNotes ? `<h3>Notes supplémentaires:</h3><p>${additionalNotes}</p>` : ""}
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.log("Email notification failed:", emailError);
      }

      const doc = new PDFDocument({
        margin: 40,
        size: "A4",
        info: {
          Title: `Devis ${quoteNumber}`,
          Author: "LABTEK",
          Subject: "Devis Services Informatiques",
        },
      });

      // Set response headers
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="devis-${quoteNumber}.pdf"`,
      );

      // Pipe PDF to response
      doc.pipe(res);

      // Add logo if exists
      const logoPath = path.join(
        __dirname,
        "../attached_assets/Labtek-logo_1753288270340.png",
      );
      if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 50, 50, { width: 60 });
      }

      // Header with company info
      doc.fontSize(28).fillColor("#4F6FEF").text("LABTEK", 120, 50);
      doc
        .fontSize(11)
        .fillColor("#333")
        .text("BAROUJAN BASKARAN", 50, 120)
        .text("Micro-entrepreneur - Services Informatiques", 50, 135)
        .text("91250 SAINT-GERMAIN-LÈS-CORBEIL, FRANCE", 50, 150)
        .text("SIRET: 123 456 789 01234", 50, 165)
        .text("TVA non applicable, article 293 B du CGI", 50, 180)
        .text("Tél: +33 6 76 45 42 67 - Email: contact@labtek.fr", 50, 195);

      // Quote title and info in a styled box
      doc.rect(380, 50, 170, 80).fillAndStroke("#f8f9fa", "#4F6FEF");
      doc.fontSize(24).fillColor("#4F6FEF").text("DEVIS", 420, 65);
      doc.fontSize(12).fillColor("#333");
      doc.text(`N° ${quoteNumber}`, 390, 90);
      doc.text(`Date: ${date}`, 390, 105);
      doc.fontSize(10).fillColor("#666").text("PROVISOIRE", 480, 115);

      // Client information in styled box
      let yPos = 220;
      doc.rect(50, yPos, 250, 100).fillAndStroke("#f8f9fa", "#e9ecef");
      doc
        .fontSize(14)
        .fillColor("#4F6FEF")
        .text("INFORMATIONS CLIENT", 60, yPos + 10);
      doc.fontSize(11).fillColor("#000");
      yPos += 35;
      doc.text(clientInfo.name, 60, yPos);
      if (clientInfo.company) {
        yPos += 15;
        doc.text(clientInfo.company, 60, yPos);
      }
      yPos += 15;
      doc.text(`Email: ${clientInfo.email}`, 60, yPos);
      if (clientInfo.phone) {
        yPos += 15;
        doc.text(`Téléphone: ${clientInfo.phone}`, 60, yPos);
      }

      // Services table
      yPos += 40;
      doc
        .fontSize(14)
        .fillColor("#4F6FEF")
        .text("DÉTAIL DES PRESTATIONS", 50, yPos);
      yPos += 25;

      // Table headers
      doc.fontSize(10).fillColor("#000");
      doc.text("Référence", 50, yPos);
      doc.text("Désignation", 120, yPos);
      doc.text("Quantité", 320, yPos);
      doc.text("Prix Unitaire HT", 380, yPos);
      doc.text("TVA", 460, yPos);
      doc.text("Total HT", 500, yPos);

      // Table line
      yPos += 15;
      doc.moveTo(50, yPos).lineTo(550, yPos).stroke();
      yPos += 10;

      // Services rows
      let refNumber = 1;
      services.forEach((service: any) => {
        const ref = `LAB${String(refNumber).padStart(3, "0")}`;
        doc.fontSize(9);
        doc.text(ref, 50, yPos);
        doc.text(service.name, 120, yPos, { width: 190 });
        doc.text(service.quantity.toString(), 330, yPos);
        doc.text(`${service.basePrice.toFixed(2)} €`, 380, yPos);
        doc.text("20%", 465, yPos);
        doc.text(
          `${(service.basePrice * service.quantity).toFixed(2)} €`,
          500,
          yPos,
        );
        yPos += 15;
        refNumber++;

        // Service options
        if (service.selectedOptions && service.selectedOptions.length > 0) {
          service.options?.forEach((option: any) => {
            if (service.selectedOptions.includes(option.id)) {
              const optionRef = `LAB${String(refNumber).padStart(3, "0")}`;
              doc.fontSize(8).fillColor("#666");
              doc.text(optionRef, 50, yPos);
              doc.text(`Option: ${option.name}`, 120, yPos, { width: 190 });
              doc.text(service.quantity.toString(), 330, yPos);
              doc.text(`${option.price.toFixed(2)} €`, 380, yPos);
              doc.text("20%", 465, yPos);
              doc.text(
                `${(option.price * service.quantity).toFixed(2)} €`,
                500,
                yPos,
              );
              yPos += 12;
              refNumber++;
            }
          });
          doc.fillColor("#000");
        }
        yPos += 5;
      });

      // Maintenance contract
      if (maintenance && maintenance.price > 0) {
        const maintenanceRef = `LAB${String(refNumber).padStart(3, "0")}`;
        doc.fontSize(9);
        doc.text(maintenanceRef, 50, yPos);
        doc.text(`Maintenance ${maintenance.name}`, 120, yPos, { width: 190 });
        doc.text("1", 330, yPos);
        doc.text(`${maintenance.price.toFixed(2)} €/mois`, 380, yPos);
        doc.text("20%", 465, yPos);
        doc.text(`${maintenance.price.toFixed(2)} €`, 500, yPos);
        yPos += 20;
      }

      // Totals section
      yPos += 20;
      const totalHT = total;
      const tva = totalHT * 0.2;
      const totalTTC = totalHT * 1.2;

      // Totals box
      doc.rect(350, yPos, 200, 80).stroke();
      yPos += 15;

      doc.fontSize(12).fillColor("#000");
      doc.text("Total HT:", 360, yPos);
      doc.text(`${totalHT.toFixed(2)} €`, 480, yPos);
      yPos += 20;

      doc.text("TVA (20%):", 360, yPos);
      doc.text(`${tva.toFixed(2)} €`, 480, yPos);
      yPos += 20;

      doc.fontSize(14).fillColor("#4F6FEF");
      doc.text("Total TTC:", 360, yPos);
      doc.text(`${totalTTC.toFixed(2)} €`, 480, yPos);

      // Conditions
      yPos += 60;
      doc
        .fontSize(12)
        .fillColor("#4F6FEF")
        .text("CONDITIONS DE RÉALISATION", 50, yPos);
      yPos += 20;
      doc.fontSize(10).fillColor("#000");

      const urgencyText =
        urgencyMultiplier > 1
          ? `Intervention en urgence (majoration appliquée x${urgencyMultiplier}).`
          : "Délai d'intervention standard.";
      doc.text(`• ${urgencyText}`, 50, yPos);
      yPos += 15;
      doc.text("• Garantie matériel selon conditions constructeur.", 50, yPos);
      yPos += 15;
      doc.text(
        "• Formation incluse selon prestations sélectionnées.",
        50,
        yPos,
      );

      // Payment terms
      yPos += 30;
      doc
        .fontSize(12)
        .fillColor("#4F6FEF")
        .text("CONDITIONS DE PAIEMENT", 50, yPos);
      yPos += 20;
      doc.fontSize(10).fillColor("#000");
      doc.text("• Paiement comptant à 30 jours. Paiement comptant.", 50, yPos);
      yPos += 15;
      doc.text(
        "• En cas de retard de paiement, des pénalités seront dues sur la base de 3 fois",
        50,
        yPos,
      );
      yPos += 12;
      doc.text(
        "  le taux d'intérêt légal, et une indemnité forfaitaire de 40 euros sera appliquée",
        50,
        yPos,
      );
      yPos += 12;
      doc.text("  pour frais de recouvrement.", 50, yPos);

      // Additional notes
      if (additionalNotes) {
        yPos += 30;
        doc
          .fontSize(12)
          .fillColor("#4F6FEF")
          .text("NOTES SUPPLÉMENTAIRES", 50, yPos);
        yPos += 20;
        doc
          .fontSize(10)
          .fillColor("#000")
          .text(additionalNotes, 50, yPos, { width: 500 });
        yPos += 40;
      }

      // Footer
      const footerYPos = Math.max(yPos + 40, 700);
      doc.fontSize(10).fillColor("#666");
      doc.text("Devis valable 30 jours.", 50, footerYPos);
      doc.text("Bon pour Accord", 50, footerYPos + 20);
      doc.text("Date: ____/____/________ Signature:", 50, footerYPos + 40);

      // Add "SPÉCIMEN" watermark
      doc
        .fontSize(60)
        .fillColor("#666", 0.1)
        .rotate(-45, { origin: [300, 400] });
      doc.text("SPÉCIMEN", 200, 400);

      doc.end();
    } catch (error) {
      console.error("Erreur génération PDF:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Erreur lors de la génération du PDF" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}