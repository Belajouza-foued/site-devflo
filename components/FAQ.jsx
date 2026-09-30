"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../components/css/FAQ.css";

const faqs = [
  {
    question: "Pourquoi avoir un site web professionnel ?",
    answer:
      "Un site web permet de présenter votre activité, vos services ou vos produits 24h/24. Il permet également à vos clients de découvrir votre entreprise, de trouver vos coordonnées et de vous contacter facilement.",
  },
  {
    question: "Quel type de site web pouvez-vous créer ?",
    answer:
      "Je peux créer des sites vitrines, sites professionnels, landing pages, sites pour commerces, restaurants, hôtels, entreprises et indépendants. Des sites e-commerce peuvent également être développés selon vos besoins.",
  },
  {
    question: "Le site sera-t-il adapté aux smartphones ?",
    answer:
      "Oui. Chaque site est conçu en responsive design afin de fonctionner correctement sur ordinateur, tablette et smartphone.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Selon le projet, j'utilise notamment React, Next.js, Bootstrap, Tailwind CSS et Node.js. La technologie est choisie en fonction des besoins et des fonctionnalités du projet.",
  },
  {
    question: "Combien coûte la création d'un site web ?",
    answer:
      "Le prix dépend du type de site, du nombre de pages, du design et des fonctionnalités souhaitées. Après avoir défini vos besoins, je peux vous proposer un devis adapté à votre projet.",
  },
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "La durée dépend de la taille et de la complexité du projet. Un site vitrine simple peut être réalisé plus rapidement qu'un site e-commerce ou qu'un projet avec des fonctionnalités spécifiques.",
  },
  {
    question: "Pouvez-vous mettre mon site en ligne ?",
    answer:
      "Oui. Je peux vous accompagner pour le domaine, l'hébergement, le déploiement et la mise en ligne afin que votre site soit accessible à vos clients.",
  },
  {
    question: "Pour quels types d'activités créez-vous des sites ?",
    answer:
      "Je peux créer des sites pour les entreprises, commerces, restaurants, hôtels, artisans, indépendants et différentes activités professionnelles.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container container">
        <div className="faq-grid">

          {/* IMAGE */}
          <div className="faq-image">
            <div className="faq-image-title">
                     <h2>
  DEVFLO — CRÉATION WEB
</h2>
            </div>

            <img
              src="/images/site-2.avif"
              alt="Création de site internet professionnel"
            />

            <div className="faq-image-overlay">
              <div className="faq-image-badge">
                <i className="fa-solid fa-code"></i>

                <div>
                  <strong className="img-icon">DEVFLO — WEB DESIGN</strong>
                  <span className="img-icon">
                    Votre activité, votre image, votre site.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* QUESTIONS */}
          <div className="faq-content">

            <span className="faq-eyebrow">
              CRÉATION DE SITE WEB
            </span>

            <h2 className="faq-title">
              Des questions
              <br />
              sur votre projet ?
            </h2>

            <p className="faq-intro">
              Voici les réponses aux questions les plus fréquentes
              concernant la création d'un site web professionnel.
            </p>

            <div className="faq-accordion">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <span className="faq-icon">
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    <div
                      className={`faq-answer ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      <div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="faq-button"
            >
              Demander un devis
              <span>→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}