
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, message } = body;

    // Vérification des champs obligatoires
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Veuillez remplir tous les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    // Configuration SMTP OVH
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "ssl0.ovh.net",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Vérifie la connexion SMTP
   await transporter.verify();

console.log("SMTP_FROM =", process.env.SMTP_USER);
console.log("SMTP_TO =", process.env.CONTACT_EMAIL);
console.log("SMTP_USER =", process.env.SMTP_USER);

// Envoi de l'email
const info = await transporter.sendMail({
  from: `"DevFlo Website" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL || "site@devflo.pro",
  replyTo: email,

  subject: `Nouvelle demande de contact - ${name}`,

  text: `
Nouvelle demande depuis le site devflo.pro

Nom : ${name}

Téléphone : ${phone || "Non renseigné"}

Email : ${email}

Projet :
${message}
  `,

  html: `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">
      <h2>Nouvelle demande depuis devflo.pro</h2>

      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>

      <p>
        <strong>Téléphone :</strong>
        ${escapeHtml(phone || "Non renseigné")}
      </p>

      <p><strong>Email :</strong> ${escapeHtml(email)}</p>

      <hr />

      <p><strong>Projet :</strong></p>

      <p style="white-space: pre-line;">
        ${escapeHtml(message)}
      </p>
    </div>
  `,
});

console.log("EMAIL ENVOYÉ :", info.messageId);
console.log("RESPONSE SMTP :", info.response);
    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a été envoyée avec succès.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur envoi email :", error);

    return NextResponse.json(
      {
        error: "Impossible d'envoyer votre demande pour le moment.",
      },
      { status: 500 }
    );
  }
}

// Petite protection pour éviter d'injecter du HTML dans l'email
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
