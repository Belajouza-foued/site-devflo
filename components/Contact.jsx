"use client";

import { siteConfig } from "../lib/site-config";
import "./css/Contact.css";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { language } = useLanguage();

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
    },
  };

  const t = content[language];

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
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="row g-3">

                <div className="col-sm-6">
                  <label
                    className="form-label"
                    htmlFor="nom"
                  >
                    {t.name}
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    name="nom"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label
                    className="form-label"
                    htmlFor="telephone"
                  >
                    {t.phone}
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    id="telephone"
                    name="telephone"
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
                    required
                  ></textarea>
                </div>

              </div>

              <button
                type="submit"
                className="btn btn-primary rounded-pill contact__submit"
              >
                {t.submit}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;