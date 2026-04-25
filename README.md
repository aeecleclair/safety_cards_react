# Safety Cards

Site de prevention etudiante (Next.js) deploye sur GitHub Pages.

## Scripts

- `npm run dev` : lance le serveur de dev Next.js
- `npm run build` : build statique (`output: export`)
- `npm run start` : sert le build Next.js

## Deploiement GitHub Pages

Le deploiement est gere par le workflow GitHub Actions `Deploy Next.js site to Pages`.

Pre-requis cote GitHub :

- Dans `Settings > Pages`, choisir `Source: GitHub Actions`
- Verifier que le workflow `Deploy Next.js site to Pages` est vert

## Domaine personnalise

Le fichier `CNAME` contient : `prevention.myecl.fr`.
