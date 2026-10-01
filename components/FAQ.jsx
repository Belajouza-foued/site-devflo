"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "../components/css/FAQ.css";

const faqs = {
  fr: [
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
  ],

  en: [
    {
      question: "Why have a professional website?",
      answer:
        "A website allows you to present your business, services or products 24/7. It also helps your customers discover your business, find your contact details and get in touch with you easily.",
    },
    {
      question: "What type of website can you create?",
      answer:
        "I can create business websites, professional websites, landing pages, and websites for shops, restaurants, hotels, companies and freelancers. E-commerce websites can also be developed according to your needs.",
    },
    {
      question: "Will the website be adapted to smartphones?",
      answer:
        "Yes. Every website is designed with responsive design to work properly on computers, tablets and smartphones.",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "Depending on the project, I mainly use React, Next.js, Bootstrap, Tailwind CSS and Node.js. The technology is selected according to the project's needs and features.",
    },
    {
      question: "How much does it cost to create a website?",
      answer:
        "The price depends on the type of website, number of pages, design and requested features. After defining your needs, I can provide a quote adapted to your project.",
    },
    {
      question: "How long does it take to create a website?",
      answer:
        "The duration depends on the size and complexity of the project. A simple business website can be completed faster than an e-commerce website or a project with specific features.",
    },
    {
      question: "Can you put my website online?",
      answer:
        "Yes. I can help you with the domain, hosting, deployment and launch so that your website is accessible to your customers.",
    },
    {
      question: "What types of businesses do you create websites for?",
      answer:
        "I can create websites for companies, shops, restaurants, hotels, artisans, freelancers and various professional businesses.",
    },
  ],
};

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const content = {
    fr: {
      imageTitle: "DEVFLO — CRÉATION WEB",
      imageAlt: "Création de site internet professionnel",
      imageBadge: "DEVFLO — WEB DESIGN",
      imageText: "Votre activité, votre image, votre site.",

      eyebrow: "CRÉATION DE SITE WEB",

      titleLine1: "Des questions",
      titleLine2: "sur votre projet ?",

      intro:
        "Voici les réponses aux questions les plus fréquentes concernant la création d'un site web professionnel.",

      quote: "Demander un devis",
    },

    en: {
      imageTitle: "DEVFLO — WEB DESIGN",
      imageAlt: "Professional website creation",
      imageBadge: "DEVFLO — WEB DESIGN",
      imageText: "Your business, your image, your website.",

      eyebrow: "WEB DESIGN",

      titleLine1: "Questions",
      titleLine2: "about your project?",

      intro:
        "Here are the answers to the most frequently asked questions about creating a professional website.",

      quote: "Request a quote",
    },
  };

  const t = content[language];
  const currentFaqs = faqs[language];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container container">
        <div className="faq-grid">

          {/* IMAGE */}
          <div className="faq-image">

            <div className="faq-image-title">
              <h2>{t.imageTitle}</h2>
            </div>

            <img
              src="/images/site-2.avif"
              alt={t.imageAlt}
            />

            <div className="faq-image-overlay">
              <div className="faq-image-badge">
                <i className="fa-solid fa-code"></i>

                <div>
                  <strong className="img-icon">
                    {t.imageBadge}
                  </strong>

                  <span className="img-icon">
                    {t.imageText}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* QUESTIONS */}
          <div className="faq-content">

            <span className="faq-eyebrow">
              {t.eyebrow}
            </span>

            <h2 className="faq-title">
              {t.titleLine1}
              <br />
              {t.titleLine2}
            </h2>

            <p className="faq-intro">
              {t.intro}
            </p>

            <div className="faq-accordion">
              {currentFaqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    className={`faq-item ${
                      isOpen ? "open" : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        setOpenIndex(
                          isOpen ? null : index
                        )
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
              {t.quote}
              <span>→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}