# Atelier Web — Next.js + TypeScript + Bootstrap

Le même site, en projet Next.js complet (App Router, `app/page.tsx`,
`app/globals.css`) avec Bootstrap 5 pour la grille et les composants, et
un fichier CSS séparé par section dans `components/css/`. Testé avec
`npm run build` : compile sans erreur.

## Lancer le projet

Prérequis : Node.js 18.18 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrez http://localhost:3000. Pour la production :

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx     — Bootstrap CSS, polices Google, Font Awesome, JS Bootstrap
  page.tsx        — page d'accueil (rend LandingPage)
  globals.css     — police du corps, ancrage du défilement
components/
  LandingPage.tsx — assemble toutes les sections
  SiteHeader.tsx / css/SiteHeader.css   — navbar (client, useState)
  Hero.tsx       / css/Hero.css         — maquette de site en CSS pur
  Intro.tsx      / css/Intro.css
  Services.tsx   / css/Services.css
  Activities.tsx / css/Activities.css
  Pricing.tsx    / css/Pricing.css
  Portfolio.tsx  / css/Portfolio.css    — carrousel Bootstrap natif
  WhyUs.tsx      / css/WhyUs.css
  Process.tsx    / css/Process.css
  Contact.tsx    / css/Contact.css      — formulaire (envoi via mailto)
  SiteFooter.tsx / css/SiteFooter.css
  BootstrapClient.tsx — charge le JS de Bootstrap côté client uniquement
lib/site-config.ts — nom, téléphone, WhatsApp, email, ville, menu
```

## Personnaliser en premier

`lib/site-config.ts` — c'est le seul fichier à modifier pour adapter le
site à un premier client (nom, téléphone, WhatsApp, email, ville).

## Pourquoi un composant `BootstrapClient` ?

Le carrousel des réalisations utilise le JavaScript natif de Bootstrap
(`bootstrap.bundle.min.js`), qui manipule directement le DOM et n'est
donc pas compatible avec le rendu serveur de Next.js. `BootstrapClient`
le charge après le montage, uniquement dans le navigateur — c'est la
seule pièce de JavaScript non lié à React dans le projet.

## Couleurs

Chaque fichier `components/css/*.css` définit ses propres couleurs en
haut du fichier (`--primary`, `--ink`, etc.), pour rester autonome.
Changer une couleur partout demande de remplacer la même valeur dans
chaque fichier concerné (recherche globale, par ex. `#2563EB`).

| Élément | Couleur | Code |
|---|---|---|
| Fond principal | Blanc légèrement bleuté | `#F8FAFC` |
| Fond secondaire | Bleu très clair | `#EFF6FF` |
| Couleur principale | Bleu moderne | `#2563EB` |
| Bleu foncé (titres) | | `#0F172A` |
| Texte | Gris foncé | `#334155` |
| Texte secondaire | Gris | `#64748B` |
| Accent | Cyan | `#06B6D4` |
| Accent secondaire | Violet | `#7C3AED` |
| Bordures | Gris clair | `#E2E8F0` |

## Remplacer les vignettes de réalisations par de vraies images

Dans `components/Portfolio.tsx`, chaque `<div className="portfolio__cover ...">`
peut être remplacé par une balise `<Image>` de `next/image` pointant vers
une capture d'écran placée dans `public/`.

## Le formulaire de contact

Envoie actuellement via `mailto:` (ouvre la messagerie du visiteur, sans
backend). Pour recevoir les messages directement, remplacez l'attribut
`action` du `<form>` dans `components/Contact.tsx` par un service comme
Formspree, Resend, ou une route API Next.js (`app/api/contact/route.ts`).

## Déployer

Le plus simple est [Vercel](https://vercel.com) : connectez le dépôt,
aucune configuration supplémentaire n'est nécessaire.
