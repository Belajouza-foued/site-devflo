"use client";

import { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./ProjectsCarousel.css";

const projects = [
  {
    title: "RIMAG Export",
    description: {
      fr: "Site web professionnel pour une entreprise tunisienne spécialisée dans l’exportation de produits alimentaires.",
      en: "Professional website for a Tunisian company specialized in food product exports.",
    },
    image: "/images/projet-rimag.png",
    technologies: ["Next.js", "React", "TypeScript"],
    url: "https://rimag.tn",
  },
  {
    title: "Farjallah Auto",
    description: {
      fr: "Plateforme web pour la vente de pièces automobiles, avec catalogue et recherche de produits.",
      en: "Web platform for selling auto parts, with a product catalog and search functionality.",
    },
    image: "/images/projet-farjalah.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    url: "https://farjallah-react-4ffg.vercel.app",
  },
  {
    title: "Seafield",
    description: {
      fr: "Site web moderne pour un hôtel proposant un hébergement confortable, une expérience gastronomique et des moments de détente.",
      en: "Modern website for a hotel offering comfortable accommodation, dining, and leisure experiences.",
    },
    image: "/images/projet-seafield.png",
    technologies: ["React", "JavaScript", "Next"],
    url: "https://test-seafield.vercel.app/",
  },

  {
    title: "SPA",
    description: {
      fr: "Site web élégant pour un espace de bien-être et de soins, avec une présentation claire des services proposés.",
      en: "Elegant website for a wellness and care space, with a clear presentation of its services.",
    },
    image: "/images/site-spa-1.png",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://spa-massage-steel.vercel.app/",
  },

  
  {
    title: "Gym Store",
    description: {
      fr: "Boutique en ligne dédiée aux équipements et accessoires de fitness, avec une interface pensée pour faciliter la navigation.",
      en: "Online store dedicated to fitness equipment and accessories, with an interface designed for easy navigation.",
    },
    image: "/images/projet-gym-store.png",
    technologies: ["React", "Next", "JavaScript", "Bootstrap"],
    url: "https://gym-sport-nine.vercel.app/",
  },
  {
    title: "Projet Guide",
    description: {
      fr: "Site web moderne conçu pour présenter les destinations, les activités et les expériences touristiques proposées par le guide.",
      en: "Modern website designed to showcase destinations, activities and travel experiences offered by the tour guide.",
    },
    image: "/images/projet-firas.png",
    technologies: ["HTML", "JavaScript", "CSS"],
    url: "https://site-firas.vercel.app/index.html",
  },

  
  {
    title: "Printpakia",
    description: {
      fr: "Site web professionnel pour une entreprise spécialisée dans l’impression et la personnalisation de différents produits.",
      en: "Professional website for a company specialized in printing and customizing various products.",
    },
    image: "/images/projet-printpakia.png",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://printakia-offset.vercel.app/",
  },
];

function ProjectsCarousel() {
  const { language } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);

  const content = {
    fr: {
      eyebrow: "Mes réalisations",
      title: "Des sites pensés pour être vus",
      intro:
        "Découvrez quelques-uns de mes projets web réalisés avec une attention particulière au design, à l’expérience utilisateur et au responsive.",
      previous: "Projet précédent",
      next: "Projet suivant",
      viewProject: "Voir le projet",
      screenshot: "Capture d'écran du projet",
      showProject: "Afficher",
    },

    en: {
      eyebrow: "My projects",
      title: "Websites designed to be seen",
      intro:
        "Discover some of my web projects, created with particular attention to design, user experience and responsive design.",
      previous: "Previous project",
      next: "Next project",
      viewProject: "View project",
      screenshot: "Screenshot of the project",
      showProject: "Show",
    },
  };

  const t = content[language];

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goToProject = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart.current - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextProject();
      } else {
        previousProject();
      }
    }

    touchStart.current = null;
  };

  const project = projects[activeIndex];

  return (
    <section id="realisations" className="projects-carousel">
      <div className="projects-carousel__container">

        {/* HEADER */}
        <div className="projects-carousel__header">
          <span className="projects-carousel__eyebrow">
            {t.eyebrow}
          </span>

          <h2 className="projects-carousel__title">
            {t.title}
          </h2>

          <p className="projects-carousel__intro">
            {t.intro}
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="projects-carousel__wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* PREVIOUS */}
          <button
            type="button"
            className="projects-carousel__arrow projects-carousel__arrow--prev"
            onClick={previousProject}
            aria-label={t.previous}
          >
            ‹
          </button>

          {/* CARD */}
          <article className="project-card">

            {/* BROWSER */}
            <div className="project-card__browser">

              <div className="project-card__browser-top">

                <div className="project-card__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="project-card__address">
                  {project.url.replace("https://", "")}
                </div>

              </div>

              <div className="project-card__screen">
                <img
                  src={project.image}
                  alt={`${t.screenshot} ${project.title}`}
                  className="img-cap"
                />
              </div>

            </div>

            {/* CONTENT */}
            <div className="project-card__content">

              <div className="project-card__number">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>

              <h3 className="project-card__title">
                {project.title}
              </h3>

              <p className="project-card__description">
                {project.description[language]}
              </p>

              <div className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                {t.viewProject}
                <span>→</span>
              </a>

            </div>

          </article>

          {/* NEXT */}
          <button
            type="button"
            className="projects-carousel__arrow projects-carousel__arrow--next"
            onClick={nextProject}
            aria-label={t.next}
          >
            ›
          </button>

        </div>

        {/* DOTS */}
        <div className="projects-carousel__dots">
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={`projects-carousel__dot ${
                activeIndex === index
                  ? "projects-carousel__dot--active"
                  : ""
              }`}
              onClick={() => goToProject(index)}
              aria-label={`${t.showProject} ${item.title}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsCarousel;