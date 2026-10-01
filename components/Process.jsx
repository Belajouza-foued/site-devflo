"use client";

import { useLanguage } from "../context/LanguageContext";
import "./css/Process.css";

const STEPS = {
  fr: [
    {
      n: "01",
      title: "Échange",
      text: "Vous me présentez votre activité et votre idée.",
    },
    {
      n: "02",
      title: "Proposition",
      text: "Je vous propose une solution adaptée à vos besoins et à votre budget.",
    },
    {
      n: "03",
      title: "Création",
      text: "Je conçois votre site avec un design adapté à votre activité.",
    },
    {
      n: "04",
      title: "Validation",
      text: "Nous vérifions ensemble le contenu et les différentes pages.",
    },
    {
      n: "05",
      title: "Mise en ligne",
      text: "Votre site est publié sur votre domaine et accessible à vos clients.",
    },
  ],

  en: [
    {
      n: "01",
      title: "Discussion",
      text: "You tell me about your business and your idea.",
    },
    {
      n: "02",
      title: "Proposal",
      text: "I propose a solution adapted to your needs and budget.",
    },
    {
      n: "03",
      title: "Development",
      text: "I create your website with a design adapted to your business.",
    },
    {
      n: "04",
      title: "Approval",
      text: "We review the content and the different pages together.",
    },
    {
      n: "05",
      title: "Launch",
      text: "Your website is published on your domain and accessible to your customers.",
    },
  ],
};

function Process() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Comment ça fonctionne",
    },

    en: {
      title: "How it works",
    },
  };

  const t = content[language];
  const steps = STEPS[language];

  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title">
          {t.title}
        </h2>

        <ol className="process__list list-unstyled">
          {steps.map((s) => (
            <li className="process__step" key={s.n}>
              <span className="process__dot"></span>

              <span className="process__number">
                {s.n}
              </span>

              <h3 className="process__title">
                {s.title}
              </h3>

              <p className="process__text">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;