"use client";

export default function WhatsAppButton() {
  const phoneNumber = "21623782889";

  const message = encodeURIComponent(
    "Bonjour DEVFLO, je souhaite avoir des informations concernant la création d'un site web."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter DEVFLO sur WhatsApp"
      className="whatsapp-button"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}