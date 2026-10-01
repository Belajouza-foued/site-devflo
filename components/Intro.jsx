"use client";

import { useLanguage } from "../context/LanguageContext";
import "../components/css/Intro.css";

function Intro() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Votre projet web, pensé pour votre activité",

      text1:
        "Votre site web est souvent le premier contact entre votre entreprise et vos futurs clients. Je crée des sites modernes, rapides et responsive, conçus pour présenter votre activité avec une image professionnelle.",

      text2:
        "De la conception au développement et à la mise en ligne, chaque projet est pensé pour être clair, efficace et facile à utiliser, sur ordinateur comme sur smartphone.",
    },

    en: {
      title: "Your web project, designed for your business",

      text1:
        "Your website is often the first contact between your business and your future customers. I create modern, fast and responsive websites designed to present your business with a professional image.",

      text2:
        "From design and development to launch, each project is created to be clear, effective and easy to use, both on desktop and smartphone.",
    },
  };

  const t = content[language];

  return (
    <section className="intro">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-4">
            <h2 className="intro__title">
              {t.title}
            </h2>
          </div>

          <div className="col-lg-7 offset-lg-1">
            <p className="intro__text">
              {t.text1}
            </p>

            <p className="intro__text">
              {t.text2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Intro;