import Link from "next/link";
import "./css/Cta.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <span className="section-label">
              Travaillons ensemble
            </span>

            <h2>
              Vous avez un projet web en tête ?
            </h2>

            <p>
              Présentez-moi votre projet et discutons ensemble de la
              meilleure solution pour créer un site moderne, professionnel
              et adapté à votre activité.
            </p>
          </div>

          <Link href="/contact" className="btn-white-custom">
            Demander un devis
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}