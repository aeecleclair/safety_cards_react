// fr.js — Constantes textuelles corrigées pour la page Sédentarité
// Les clés correspondent maintenant exactement à celles utilisées par Sedentarite.jsx

const fr = {
  // Navigation / sommaire
  navLinks: [
    { label: "Qu'est-ce que la sédentarité ?", target: "sedentarite" },
    { label: "Je veux bouger plus", target: "etudiant" }
  ],

  // Titres principaux
  titrePageSedentarite: "Sédentarité",
  sommaireSedentarite1: "Qu'est-ce que la sédentarité ?",
  sommaireSedentarite2: "Je veux bouger plus",

  // Carte / popup
  carte8piqueTitle: "La carte 8♠",
  carte8piqueShort: "Lutter contre la sédentarité",
  carte8piqueLong:
    "Les écrans sont la cause principale de sédentarité chez les jeunes. Essaie au maximum de ne pas rester passif devant Insta ou Tik Tok, n'hésite pas à sortir prendre l'air et faire une promenade, seul·e ou avec des ami·e·s, ou à pratiquer une activité physique régulière.",
  carte8piqueButton: "⤢ Agrandir la carte",

  // Définition
  textDefinitionSedentarite:
    "La sédentarité correspond au temps passé assis ou allongé en dehors des heures de sommeil. Elle se distingue de l'inactivité physique : on peut pratiquer du sport et rester sédentaire si l'on passe de longues heures assis à son bureau. Elle est définie par une dépense énergétique faible (par exemple : travail assis, temps écran, transport passif).",

  // Risques (BulletList)
  risquesTitre: "Quels sont les risques ?",
  risquesList: [
    "Maladies cardiovasculaires (hypertension, infarctus), diabète de type 2",
    "Cancers (côlon, sein…) associés à de longues périodes assises",
    "Surpoids et obésité, indépendamment de l'alimentation",
    "Troubles musculo-squelettiques (maux de dos, douleurs articulaires)",
    "Impact sur la santé mentale : anxiété, humeur dépressive, fatigue",
    "Altérations cardiaques détectées chez les jeunes adultes très sédentaires"
  ],

  // Chiffres clés
  chiffresIntro: "Quelques chiffres clés :",
  chiffresSedentarite: [
    {
      number: "7h+",
      title: "Temps moyen assis",
      description: "Chez les étudiant·e·s et jeunes adultes en France, chaque jour"
    },
    {
      number: "30%",
      title: "des jeunes",
      description: "Ne respectent pas les recommandations minimales d'activité physique"
    },
    {
      number: "150 min",
      title: "d'activité physique modérée",
      description: "par semaine pour rester en bonne santé (recommandation OMS)"
    }
  ],

  // Ressources d'information (ExternalLinkBlock)
  ressourcesInfos: [
    {
      link: "https://www.anses.fr/fr/content/inactivite-physique-et-sedentarite-chez-les-jeunes-lanses-alerte-les-pouvoirs-publics",
      imageSrc: "/assets/ANSES.png",
      label: "ANSES",
      description: "Rapports et recommandations sur l'activité physique des jeunes"
    },
    {
      link: "/sport",
      emoji: "⛹️",
      label: "Santé physique et sport",
      description: "Pour en apprendre davantage sur le sport"
    }
  ],

  // Section "Je veux bouger plus" — écrans
  deconnexionTitre: "Se déconnecter des écrans et des réseaux",
  deconnexionTexte:
    "Le temps passé devant les écrans (ordinateur, smartphone, télévision) est un facteur majeur de sédentarité. En moyenne, les jeunes de 16-24 ans passent plus de 7 heures par jour devant un écran, dont une grande partie pour des activités de loisir (réseaux sociaux, streaming, jeux vidéo).",

  // Ressources pour les écrans (ExternalLinkBlock)
  ecrans: [
    {
      link: "/add_reseaux",
      emoji: "📱",
      label: "Tu veux réduire ton temps passé sur les écrans ?",
      description: "Des conseils et des ressources pour t'aider"
    }
  ],

  // Conseils / Liste numérotée
  conseilsTitle: "Astuces simples pour réduire la sédentarité",
  conseilsSubtitle: "Inspirées des recommandations de l'OMS et de l'ANSES",
  conseilsBouger: [
    {
      title: "Réduire le temps assis",
      subtitle:
        "Fais une pause active toutes les 30 à 60 minutes : lève-toi, marche, fais quelques étirements."
    },
    {
      title: "Intégrer du mouvement au quotidien",
      subtitle:
        "Prends les escaliers, marche ou pédale pour les petits trajets, propose une sortie active entre amis."
    },
    {
      title: "Bouger même en travaillant",
      subtitle:
        "Étudie debout de temps en temps, utilise un bureau réglable si possible, ou fais quelques exercices rapides entre deux chapitres."
    },
    {
      title: "Fixer des objectifs progressifs",
      subtitle:
        "Commence par 10 minutes d'activité par jour et vise progressivement 150 minutes par semaine, comme recommandé par l'OMS."
    },
    {
      title: "Limiter le temps écran loisir",
      subtitle:
        "Réduis le temps passé assis devant les écrans, en particulier avant le coucher."
    }
  ],

  // Recommandations OMS
  recommandationOMSTexte:
    "L'OMS recommande 150 à 300 minutes par semaine d'activité modérée (marche rapide, vélo tranquille, danse) ou 75 à 150 minutes d'activité intense (course, sport collectif). Pour les jeunes (11-17 ans), il est recommandé au moins 60 minutes d'activité physique quotidienne, et de limiter le temps assis prolongé.",

  // Idées d'activités / sorties
  ideesActivitesTitre: "Quelques idées d'activités",
  ideesActivitesTexte:
    "Si tu es à Centrale, tu peux profiter des installations sportives du campus (terrains de tennis et padel, salle de musculation, etc.) en dehors des créneaux d'EPS obligatoires. A côté du campus, tu peux te promener dans le bois de Serre pour profiter un peu de la nature. Sur Lyon, de nombreux événements sont organisés. Tu peux en retrouver l'essentiel en accédant aux 2 premières ressources ci-dessous. Si tu es en manque d'inspiration, découvre de nombreuses idées d'activités sur le site Manger Bouger.",

  // Ressources pour sortir (ExternalLinkBlock)
  resources_sortir: [
    {
      link: "https://www.lyoncampus.com/",
      imageSrc: "/assets/logo_lyon_campus.png",
      label: "Lyon Campus",
      description: "Des idées pour sortir et s'impliquer comme étudiant à Lyon"
    },
    {
      link: "https://www.instagram.com/culturel_lyon/",
      imageSrc: "/assets/culturel_lyon.jpg",
      label: "Culturel Lyon",
      description: "Idées de sorties chaque week-end dans la métropole"
    },
    {
      link: "https://www.mangerbouger.fr/",
      imageSrc: "/assets/MangerBouger.png",
      label: "Manger Bouger",
      description: "Des idées d'activités à découvrir"
    }
  ],

  // Sources affichées en bas de page
  sourcesSedentarite:
    "Sources : OMS (2020), Santé publique France (2024), ANSES (2022), Observatoire Prévention (Montréal), Université Laval, Le Monde (2024)."
};

export default fr;
