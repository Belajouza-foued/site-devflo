"use client";

import Link from "next/link";
import "./css/Cta.css";
import { useLanguage } from "../context/LanguageContext";

export default function CTA() {
  const { language } = useLanguage();

  const content = {
    fr: {
      label: "Travaillons ensemble",
      title: "Vous avez un projet web en tête ?",
      text: (
        <>
          Présentez-moi votre projet et discutons ensemble de la meilleure
          solution pour créer un site moderne, professionnel et adapté à
          votre activité.
        </>
      ),
      button: "Demander un devis",
    },

    en: {
      label: "Let's work together",
      title: "Do you have a web project in mind?",
      text: (
        <>
          Tell me about your project and let's discuss the best solution
          to create a modern, professional website adapted to your business.
        </>
      ),
      button: "Request a quote",
    },
  };

  const t = content[language];

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">

          <div className="cta-content">
            <span className="section-label">
              {t.label}
            </span>

            <h2>
              {t.title}
            </h2>

            <p>
              {t.text}
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-white-custom"
          >
            {t.button}

            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>
      </div>
    </section>
  );
}