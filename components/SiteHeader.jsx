"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import { siteConfig } from "../lib/site-config";
import "./css/SiteHeader.css";

function SiteHeader() {
   const [open, setOpen] = useState(false);
   const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* LOGO */}
          <a className="navbar-brand" href="#top">
            <img
              src="/images/log-sum.png"
              className="site-header__logo"
              alt="DevFlo"
            />

            <span className="site-header__brand-name ps-2">
              {siteConfig.brand}
            </span>
          </a>

         
          {/* MENU MOBILE */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i
              className={`fa-solid ${
                open ? "fa-xmark" : "fa-bars"
              }`}
            ></i>
          </button>

          {/* NAVIGATION */}
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

             {[
  { label: t.nav.services, href: "#services" },
  { label: t.nav.activites, href: "#activites" },
  { label: t.nav.tarifs, href: "#tarifs" },
  { label: t.nav.realisations, href: "#realisations" },
  { label: t.nav.contact, href: "#contact" },
].map((item) => (
                <li className="nav-item" key={item.href}>
                  <a
                    className="nav-link"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
 {/* BOUTON LANGUE */}
         <button
  type="button"
  className="language-toggle"
  onClick={toggleLanguage}
  aria-label="Changer de langue"
>
  <span>{language === "fr" ? "FR" : "EN"}</span>
  <i className="fa-solid fa-chevron-down"></i>
</button>

              {/* CTA */}
              <li className="nav-item mt-2 mt-lg-0">
                <a
                  href="#contact"
                  className="btn btn-primary rounded-pill site-header__cta"
                  onClick={() => setOpen(false)}
                >
                 {t.quote}
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;