import { siteConfig } from "../lib/site-config";
import "./css/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <h2 className="section-title">Vous avez un projet ?</h2>
            <p className="contact__lead">
              Entreprise, commerce, hôtel, restaurant ou indépendant : parlons
              de votre site et demandez votre devis gratuitement.
            </p>

            <ul className="list-unstyled contact__list">
              <li>
                <a href={siteConfig.phoneHref} className="contact__link">
                  <i className="fa-solid fa-phone"></i>
                  {siteConfig.phone} (WhatsApp disponible)
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="contact__link">
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
                  <label className="form-label" htmlFor="nom">Nom</label>
                  <input type="text" className="form-control" id="nom" name="nom" required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="telephone">Téléphone</label>
                  <input type="tel" className="form-control" id="telephone" name="telephone" />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="message">Votre projet</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Décrivez votre activité et ce que vous souhaitez pour votre site."
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary rounded-pill contact__submit">
                Envoyer la demande
              </button>

              <p className="contact__note">
                L&apos;envoi ouvre votre messagerie par défaut. Pour recevoir les
                messages directement, remplacez ce formulaire par un service
                comme Formspree ou une route API de votre backend.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
