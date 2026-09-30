"use client";

import { useState } from "react";
import { siteConfig } from "../lib/site-config";
import "./css/SiteHeader.css";

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#top">
           <img
  src="/images/log-sum.png"
  className="site-header__logo"
  alt="DevFlo"
/>
  
            <span className="site-header__brand-name ps-2">{siteConfig.brand}</span>
                    </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              {siteConfig.nav.map((item) => (
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
              <li className="nav-item mt-2 mt-lg-0">
                <a
                  href="#contact"
                  className="btn btn-primary rounded-pill site-header__cta"
                  onClick={() => setOpen(false)}
                >
                  Demander un devis
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
