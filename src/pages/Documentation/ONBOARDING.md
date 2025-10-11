# Guide de prise en main — safety_cards_react

> Ce document aide toute nouvelle personne à comprendre, lancer, maintenir et faire évoluer ce site web.

## 1) Installation & prérequis (pas-à-pas)

Technos utilisées:
- React 19 + Vite 6
- React Router DOM 7
- ESLint 9 (règles React/Hooks)
- Docker + Nginx (optionnel pour la prod)

Préparez votre poste (Windows, macOS ou Linux):
- Installer Node.js (version LTS recommandée) depuis nodejs.org
- Installer Git depuis git-scm.com
- Installer un éditeur de code (VS Code recommandé)

Récupérer le code du projet:
- Option 1 (recommandé): Cloner le dépôt avec Git dans un dossier simple (ex: Documents)
  - Ouvrir un terminal (PowerShell sous Windows)
  - Exécuter: `git clone <URL_DU_DEPOT>` puis `cd safety_cards_react`
- Option 2: Télécharger l'archive .zip du dépôt, l'extraire, puis ouvrir le dossier dans VS Code

Installer les dépendances:
- Ouvrir le dossier du projet dans VS Code
- Ouvrir le terminal intégré (Terminal > New Terminal)
- Lancer: `npm install`
  - Cela télécharge les bibliothèques nécessaires (React, Vite, etc.)
  - En cas d'erreur: vérifier que Node.js est bien installé (commande `node -v`) et que votre réseau ne bloque pas npm

Lancer le site en mode développement:
- Exécuter: `npm run dev`
- Le terminal affiche une URL locale (ex: http://localhost:5173)
- Ouvrir cette URL dans votre navigateur

Construire une version prête à déployer:
- Exécuter: `npm run build`
- Prévisualiser: `npm run preview` (ouvre un serveur local sur le build)

Option Docker (tout-en-un):
- Assurez-vous d'avoir Docker Desktop installé et démarré
- À la racine du projet: `docker compose up --build`
- Ouvrir http://localhost:3000

Conseils en cas de blocage:
- Redémarrer le terminal/VS Code après installation de Node/Git
- Si `npm install` échoue: réessayer sur un autre réseau (proxy/antivirus peuvent bloquer)
- Vérifier l'espace disque et les droits d'écriture du dossier

## 2) Structure du projet

Racine (extrait utile):
- `src/`
  - `App.jsx` — Router, layout global (Header/Footer/ThemeProvider)
  - `main.jsx` — Bootstrap React
  - `index.css` — styles globaux (font Poppins, rendering)
  - `App.css` — styles de page, titres, dark mode global, encarts
  - `ThemeProvider.jsx` — gestion du thème (clair/sombre)
  - `components/` — composants réutilisables (Navbar, listes, cartes, etc.)
    - `Common.jsx` + `common.css` — listes, navbar, images, YouTube, AnchorButton, etc.
    - `Liens-ext.jsx` + `liens-ext.css` — cartes de liens externes
    - `ScrollTop.jsx` + `scrolltop.css` — bouton retour haut avec anneau de progression
    - `Header.jsx`, `Footer.jsx`, `Separateur.jsx`, etc.
  - `pages/` — pages organisées par thématiques (Sante, Vie-groupe, etc.)
    - Chaque page est une route déclarée dans `App.jsx`
- `public/` — assets statiques (images, logos…)
- `vite.config.js` — config Vite
- `package.json` — scripts, dépendances
- `Dockerfile` + `docker-compose.yml` — build/serveur Nginx
- `vercel.json` — rewrites SPA et build statique

## 3) Charte graphique & DA

### Couleurs
- Primaire rouge (accents, bordures, hover)
  - Clair: `#b22133`
  - Sombre: `#b00000`
  - Dégradés d'accent: `#b22133 → #ff4d5d` (clair), `#B00000 → #ea4c61` (sombre)
- Arrière-plans
  - Blanc `#ffffff` (surfaces claires)
  - Sombre global `#212121` (body.dark-mode)
  - Header sombre `#131313`
  - Encarts neutres `#ebebeb` (`.mise-avant`)
- Texte
  - Clair `#000000`, sombre `#ffffff`

### Typographies
- Police: Poppins, sans-serif (défini dans `:root`)
- Titres: `.titre-page` 3em (800), `.titre` 2.2em (700), `.sous-titre-2` 1.5em (600)
- Texte: `.texte` 1em, line-height 2

### Icônes & visuels
- Emojis (classe `.link-emoji` 30px)
- Images/icônes: `.link-image` 40px, radius 8px
- Pas de bibliothèque d'icônes imposée; privilégier SVG simple, monocolore, contrasté

### Layout, espacements, arrondis
- Page: largeur 60%, max 800px (90% sous 1200px)
- Gaps fréquents: 10px
- Boutons (nav/anchor): padding 5px 10px, radius 10px
- Cartes/images: radius 14px
- `scroll-margin-top: 40px` sur éléments titres/texte

### Styles globaux
- Dark mode via `body.dark-mode` avec overrides dédiés (textes, fonds, bordures)
- Responsive: points de rupture 1200px, 1000px, 680/600px
- Micro-interactions: transitions 0.2–0.3s, progress bar navbar `scaleX`

## 4) Composants réutilisables

### Header (src/components/Header.jsx)
- Rôle: barre haute du site, navigation par catégories avec sous-menus, bascule du thème, bouton « Mode soirée », bouton « Quitter le site » et accès rapide au sommaire (mobile) quand une navbar de page est présente.
- Données du menu: constante `menuItems` (catégories et sous-entrées). Chaque entrée peut être marquée `inactive: true` pour l'afficher grisée et non cliquable.
- Intégrations clés:
  - Détection du sommaire de page via `window.__hasSommaire` (si présent, affiche l'icône ⋮ sur mobile pour ouvrir/fermer le sommaire local)
  - Synchronisation « Mode soirée » en fonction de la route (`/mode-soiree`, `/contacts-urgence`, `/plan-soiree`)
  - Thème clair/sombre via `ThemeProvider`
- Points d'attention DA:
  - Menu desktop: dropdowns au survol; liens inactifs affichés avec un pictogramme 🚧
  - Menu mobile (burger): navigation hiérarchique avec retour, actions thème/quit site/mode soirée
  - Logos partenaires affichés dans le Header et Footer (voir assets/public)
- Pour ajouter un item:
  - Ajouter une entrée dans `menuItems` (catégorie) et/ou son `submenu` avec `{ title, link, inactive? }`

### Footer (src/components/Footer.jsx)
- Rôle: navigation récapitulative par thématique, logos, mention alphabétique des thèmes, copyright.
- Structure: 5 colonnes thématiques, liens internes via `react-router-dom`, bloc logos à la fin.
- Bonnes pratiques:
  - Garder l'ordre alphabétique des liens par catégorie
  - Vérifier la présence des routes dans `App.jsx`

### Common (src/components/Common.jsx, common.css)
- `BulletList({ items })`
  - items: array d'éléments (string ou JSX). Affiche des puces, marges verticales gérées par `common.css`.
- `NumberedList({ items })`
  - items: array d'éléments pour une liste numérotée simple.
- `ImageCenter({ imageSrc })`
  - imageSrc: chemin d'image (public/assets). Image centrée, radius 14px, responsive.
- `TextImageRight({ text, imageSrc })`
  - text: contenu texte (string/JSX)
  - imageSrc: image à droite, responsive (stack sous 1000px)
- `YouTubeVideo({ url })`
  - url: lien YouTube (le composant extrait l'ID et génère un embed). Conteneur responsive.
- `Navbar({ links })`
  - links: array d'objets `{ label, target }`.
  - Rôle: sommaire sticky avec progression de lecture (calcul mid-to-mid). Clique = scroll lissé avec offset.
- `AnchorButton({ target, offsetDesktop=100, offsetMobile=140, className })`
  - target: id de la section DOM visée
  - offsetDesktop/offsetMobile: compensation de la navbar (px)
  - className: classes additionnelles facultatives

Bon usage Navbar
```jsx
const links = [
  { label: "Comprendre", target: "comprendre" },
  { label: "Je suis en souffrance", target: "souffrance" },
];
<Navbar links={links} />
```

Bon usage AnchorButton
```jsx
<AnchorButton target="plan_securite">Plan de sécurité ↓</AnchorButton>
```

À éviter
```jsx
// target qui n'existe pas
<AnchorButton target="nope">Aller</AnchorButton>
```

### Liens externes (src/components/Liens-ext)
- `ExternalLinkBlock({ title?, subtitle?, resources })`
  - title/subtitle: en-têtes optionnels du bloc
  - resources: tableau d'objets cartes
    - Attributs carte:
      - link: URL externe (http) ou chemin interne; ouvre dans un nouvel onglet si externe
      - label (ou title): titre affiché
      - description: texte complémentaire
      - imageSrc: petite image (40px, radius 8px) OU emoji: rendu 30px

Exemple
```jsx
<ExternalLinkBlock
  resources={[{
    link: "https://3114.fr/",
    label: "3114",
    description: "Numéro national prévention suicide",
    imageSrc: "/assets/3114.jpg"
  }]}
/> 
```

Notes DA:
- `.link-block` carte à fond blanc (ou #343434 en dark) avec ombres; hover sombre en clair, hover atténué en sombre
- `.link-image` (40px, radius 8px) ou `.link-emoji` (30px)

### Cartes de contact (ContactCard)
- `ContactCard({ image, title, subtitle?, phone?, email?, hours?, textButton, link, bgColor?, textColor?, variant? })`
  - image: URL/chemin d'image (logo)
  - title: nom du service
  - subtitle: sous-titre (ex: rôle)
  - phone/email/hours: métadonnées affichées
  - textButton: libellé du bouton (ex: "Voir le site web")
  - link: URL/chemin du bouton
  - bgColor/textColor: couleurs manuelles; sinon auto-déduites du logo (échantillon pixel [0,0])
  - Dark mode: couleurs adaptées via `body.dark-mode` et logique interne pour préserver le contraste

### Scroll to top (ScrollTop)
- `ScrollToTopButton({ threshold=300, showProgress=true, size=56, arrowSize?, arrowStrokeWidth? })`
  - threshold: distance de scroll avant d'afficher le bouton
  - showProgress: afficher un anneau de progression autour
  - size: taille du bouton et du cercle
  - arrowSize: taille explicite de la flèche (auto-calculée par défaut)
  - arrowStrokeWidth: épaisseur du trait de la flèche (auto par défaut)
  - Accessibilité: aria-label, focus-visible. Respecte `prefers-reduced-motion`.

### Chiffres (src/components/Chiffres.jsx)
- `Chiffre({ number, title, description })`
  - Affiche un chiffre clé avec titre et description dans un bloc
- `ChiffresGroup({ chiffres })`
  - `chiffres`: array d'objets `{ number, title, description }`
  - Rendu en grille flexible via `chiffres.css`

### Listes numérotées avancées (src/components/Listes.jsx)
- `ListeNumerotee({ title, subtitle, items })`
  - `title`: titre du bloc
  - `subtitle`: sous-titre explicatif
  - `items`: array de `{ title, subtitle?, subitems? }`
    - `subitems`: array de `{ title, subtitle? }` (liste imbriquée type a),b),c))
  - Styles: conteneur + pastilles numérotées, hiérarchie de titres/subtitres

## 5) Routage & pages

- Les routes sont définies dans `src/App.jsx` via `<Routes>` et `<Route>`
- Chaque page se trouve sous `src/pages/...` et doit exporter un composant React par défaut
- Pour ajouter une page:
  1. Créer `src/pages/Chemin/MaPage.jsx`
  2. Importer et ajouter `<Route path="/mon-url" element={<MaPage />} />` dans `App.jsx`
  3. Optionnel: ajouter un sommaire local via `Navbar`

Exemple minimal de page (random page)
```jsx
// src/pages/Random.jsx
import React from "react";
import { Navbar } from "../components/Common";
import Separateur from "../components/Separateur";

const navLinks = [
  { label: "Introduction", target: "intro" },
  { label: "Contenu", target: "contenu" },
];

export default function Random() {
  return (
    <div className="page">
      <h1 className="titre-page">Ma page aléatoire</h1>
      <Navbar links={navLinks} />

      <div id="intro">
        <h2 className="titre">Introduction</h2>
        <p className="texte">Texte d'introduction…</p>
      </div>

      <Separateur />

      <div id="contenu">
        <h2 className="sous-titre-2">Contenu</h2>
        <p className="mise-avant">Encart d'information important.</p>
      </div>
    </div>
  );
}
```

## 6) Styles CSS principaux (classes à connaître)

Styles globaux (src/App.css):
- `.page`: largeur 60%, max 800px (90% sous 1200px), centrée
- `.titre-page`: grand titre de page (3em, gras 800)
- `.titre`: titre de section (2.2em, 700)
- `.sous-titre-2`: sous-titre (1.5em, 600)
- `.texte`: paragraphe (1em, line-height 2)
- `.mise-avant`: encart gris clair avec bord rouge à gauche (radius 10px, padding 10px 20px)
- `body.dark-mode …`: overrides sombres (fonds #212121, textes #fff, encarts #343434)

Styles communs (src/components/common.css):
- Listes `.bullet-list`, `.numbered-list`: marges internes gérées
- Navbar: `.navbar`, `.lien-navbar` (boutons rouge/blanc avec progression interne)
- Image utils: `.image-content`, `.image-content-center`

Styles liens externes (src/components/liens-ext.css):
- `.link-block`: carte blanche avec ombres; hover sombre
- `.link-image` (40px), `.link-emoji` (30px)

## 7) Dark mode

## 7) Qualité & accessibilité

- Le thème s'appuie sur `body.dark-mode`
- Chaque composant critique propose des règles `body.dark-mode .classe { … }`
- Pour un nouveau composant: prévoir la déclinaison sombre au minimum sur fond, texte et hover

## 8) Déploiement

- ESLint: exécuter régulièrement `npm run lint`
- Focus-visible: assurer des styles focus pour éléments interactifs
- Contrastes: privilégier rouge/blanc, blanc/rouge
- Performances: éviter les re-renders coûteux; la navbar utilise `requestAnimationFrame` et seuils de delta

## 9) Créer un nouveau composant conforme à la DA

### Option Vercel (SPA statique)
- `vercel.json` gère la réécriture des routes SPA vers `index.html`
- Build via `@vercel/static-build` (dist = `dist`)

### Option Docker + Nginx
Build image et run via compose:
```bash
docker compose up --build
# App servie sur http://localhost:3000
```
CI/CD: publier l'image puis déployer derrière un Nginx/ingress en prod

## 10) FAQ rapide

Checklist:
- Police Poppins, tailles cohérentes (1em texte, 1.5em sous-titre)
- Couleurs: #b22133 / #b00000 pour l'accent; fonds #fff / #343434
- Radius 10–14px, ombres douces multi-couches
- Dark mode: règles `body.dark-mode …`
- Responsive: tester <1200px et mobile
- Accessibilité: aria-labels, focus-visible
- API: props claires, `className` acceptée

Exemple squelette
```jsx
// src/components/MonComposant.jsx
import React from "react";
import "./mon-composant.css";

export default function MonComposant({ title, children, className = "" }) {
  return (
    <section className={`mc-card ${className}`}>
      {title && <h2 className="sous-titre-2">{title}</h2>}
      <div className="mc-body texte">{children}</div>
    </section>
  );
}
```

```css
/* src/components/mon-composant.css */
.mc-card {
  background: #fff;
  border-radius: 14px;
  padding: 12px 16px;
  transition: box-shadow .25s ease, background-color .2s ease, color .2s ease;
}
body.dark-mode .mc-card { background: #343434; color: #fff; }
.mc-card:hover { box-shadow: 0 14px 28px rgba(0,0,0,.20), 0 10px 10px rgba(0,0,0,.12); }
```

## 11) FAQ rapide

- Le sommaire progresse comment ? Milieu de l'écran vers milieu des sections (mid-to-mid)
- Où sont les styles dark mode ? Dans `App.css`, `common.css`, `liens-ext.css`, etc. via `body.dark-mode`
- Où poser des assets ? `public/assets/...`
- Comment scroll à une section ? `AnchorButton` ou logique interne de `Navbar`
