"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  fr: {
    nav: {
      services: "Services",
      activites: "Activités",
      tarifs: "Tarifs",
      realisations: "Réalisations",
      contact: "Contact",
    },

    quote: "Demander un devis",
  },

  en: {
    nav: {
      services: "Services",
      activites: "Activities",
      tarifs: "Pricing",
      realisations: "Projects",
      contact: "Contact",
    },

    quote: "Request a quote",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "fr" ? "en" : "fr"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
