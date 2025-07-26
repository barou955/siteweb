
const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER || "contact@labtek.fr",
          pass: process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD,
        },
        tls: {
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

    // Header with company info
    doc.fontSize(28).fillColor("#4F6FEF").text("LABTEK", 50, 50);
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
    services.forEach((service) => {
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
        service.options?.forEach((option) => {
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
}
