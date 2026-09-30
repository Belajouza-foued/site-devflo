import { siteConfig } from "../lib/site-config";
import "./css/SiteFooter.css";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-5 site-footer__top">
          {/* Marque */}
          <div className="col-lg-4">
            <a href="#top" className="site-footer__brand">
              <img src="/images/logo-devflo.png" className="site-footer__logo" alt=""
              
              />
              <span>
                <span className="site-footer__brand-name">{siteConfig.brand}</span>
                <span className="site-footer__tagline">{siteConfig.tagline}</span>
              </span>
            </a>

            <p className="site-footer__about">
              Des sites vitrines et e-commerce modernes, rapides et
              responsive, pensés pour donner à votre activité une image
              professionnelle en ligne.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-6 col-lg-3">
            <h3 className="site-footer__heading">Navigation</h3>
            <ul className="list-unstyled site-footer__links">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-lg-3">
            <h3 className="site-footer__heading">Contact</h3>
            <ul className="list-unstyled site-footer__links site-footer__contact">
              <li>
                <a href={siteConfig.phoneHref}>
                  <i className="fa-solid fa-phone"></i>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>
                  <i className="fa-solid fa-envelope"></i>
                  {siteConfig.email}
                </a>
              </li>
              <li className="site-footer__static">
                <i className="fa-solid fa-location-dot"></i>
                {siteConfig.location}
              </li>
            </ul>
          </div>

          {/* Appel à l'action */}
          <div className="col-lg-2">
            <a href="#contact" className="btn site-footer__cta">
              Demander un devis
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {siteConfig.brand}. Tous droits réservés.
          </p>
          <p className="site-footer__copy">Tunisie</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;