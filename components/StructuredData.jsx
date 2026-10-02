export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "DEVFLO",

    url: "https://devflo.pro",

    description:
      "DEVFLO accompagne les entreprises et professionnels dans la création de sites web modernes, professionnels et adaptés à leurs besoins.",

    serviceType: [
      "Création de sites web",
      "Web Design",
      "Développement web",
      "Développement Frontend",
      "Développement Full Stack",
    ],

    areaServed: {
      "@type": "Country",
      name: "Tunisia",
    },

    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "JavaScript",
      "Frontend Development",
      "Full Stack Development",
      "Web Design",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}