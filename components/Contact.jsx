
"use client";

import { useState } from "react";
import { siteConfig } from "../lib/site-config";
import "./css/Contact.css";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const content = {
    fr: {
      title: "Vous avez un projet ?",
      lead:
        "Entreprise, commerce, hôtel, restaurant ou indépendant : parlons de votre site et demandez votre devis gratuitement.",
      whatsapp: "WhatsApp disponible",
      name: "Nom",
      phone: "Téléphone",
      email: "Email",
      project: "Votre projet",
      placeholder:
        "Décrivez votre activité et ce que vous souhaitez pour votre site.",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      success: "Votre demande a bien été envoyée. Nous vous répondrons rapidement.",
      error:
        "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.",
    },

    en: {
      title: "Do you have a project?",
      lead:
        "Business, shop, hotel, restaurant or freelancer: let's talk about your website and get your free quote.",
      whatsapp: "WhatsApp available",
      name: "Name",
      phone: "Phone",
      email: "Email",
      project: "Your project",
      placeholder:
        "Describe your business and what you would like for your website.",
      submit: "Send request",
      sending: "Sending...",
      success: "Your request has been sent successfully. We will reply shortly.",
      error:
        "An error occurred. Please try again or contact us directly by email.",
    },
  };

  const t = content[language];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setStatus("success");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur formulaire contact :", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-5">
            <h2 className="section-title">
              {t.title}
            </h2>

            <p className="contact__lead">
              {t.lead}
            </p>

            <ul className="list-unstyled contact__list">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="contact__link"
                >
                  <i className="fa-solid fa-phone"></i>
                  {siteConfig.phone} ({t.whatsapp})
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="contact__link"
                >
                  <i className="fa-solid fa-envelope"></i>
                  {siteConfig.email}
                </a>
              </li>

              <li className="contact__link contact__link--static">
                <i className="fa-solid fa-location-dot"></i>
                {siteConfig.location}
              </li>
            </ul>
          </div>

          <div className="col-lg-7">
            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="row g-3">

                <div className="col-sm-6">
                  <label
                    className="form-label"
                    htmlFor="name"
                  >
                    {t.name}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label
                    className="form-label"
                    htmlFor="phone"
                  >
                    {t.phone}
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label
                    className="form-label"
                    htmlFor="email"
                  >
                    {t.email}
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label
                    className="form-label"
                    htmlFor="message"
                  >
                    {t.project}
                  </label>

                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t.placeholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

              </div>

              {status === "success" && (
                <div className="alert alert-success mt-3" role="alert">
                  {t.success}
                </div>
              )}

              {status === "error" && (
                <div className="alert alert-danger mt-3" role="alert">
                  {t.error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary rounded-pill contact__submit"
                disabled={loading}
              >
                {loading ? t.sending : t.submit}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
