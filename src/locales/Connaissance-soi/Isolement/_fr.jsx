import React from "react";

const fr = {
  pageTitle: "Isolement",
  navLinks: [
    { label: "Comprendre la solitude", target: "comprendre" },
    { label: "Rompre l'isolement", target: "rompre" },
    { label: "Besoin d'aide", target: "aide" },
    { label: "Aider une personne isolée", target: "aider" },
  ],

  chiffres: [
    { number: "28%", title: "des étudiant·e·s françai·e·s", description: "déclarent se sentir souvent ou toujours seuls (IFOP, 2024)" },
    { number: "74.2%", title: "des étudiant·e·s", description: "travaillent en groupe au moins une fois par mois" },
    { number: "55,8%", title: "des étudiant·e·s internationaux", description: "fréquentent les soirées centraliennes moins d'une fois par trimestre" },
  ],

  card: {
    image: "/assets/cartes/2_carreau.png",
    title: "La carte 2♦",
    shortText: "L'isolement étudiant",
    longText:
      "Ce sentiment d'isolement peut découler de divers facteurs tels que le changement d'environnement, la pression académique, ou encore la difficulté à établir de nouvelles relations sociales. Comprendre les causes et les manifestations de l'isolement est essentiel pour y faire face efficacement. En tant qu'étudiant·e, n'hésite pas à aller vers les autres si tu remarques qu'ils sont isolés, un simple geste, une simple question peuvent faire la différence.",
    textButton: "⤢ Agrandir la carte",
    suit: "carreau",
  },

  understandTitle: "Comprendre la solitude étudiante",
  whyTitle: "Pourquoi est-ce si fréquent ?",
  whyBullets: [
    <><b>Nouveau cadre de vie et éloignement du cercle familial</b></>,
    <><b>Charge de travail intensive</b> à certaines périodes, limitant les temps sociaux</>,
    <><b>Langue & culture différentes</b> pour les étudiant·e·s internationaux</>,
    <><b>Usage excessif des écrans et sédentarité</b></>,
    <><b>Manque de confiance en soi ou timidité</b></>,
  ],
  confResources: [
    {
      link: "/conf",
      label: "Confiance & Estime de soi",
      description: "Des pistes pour prendre confiance en soi et s'affirmer",
      emoji: "💛",
    },
  ],
  studyNote:
    "L'étude IFOP 2024 révèle que plus d'un quart des étudiants se déclarent toujours ou souvent isolés. Les données internes confirment cette tendance, en particulier chez les élèves internationaux et en année de césure.",

  feelAloneTitle: "Tu te sens seul·e sans raison apparente ?",
  feelAloneText:
    "La solitude peut être un symptôme de mal-être plus profond (stress, anxiété, dépression). Si tu ressens d'autres signes (tristesse, fatigue, irritabilité, troubles du sommeil ou de l'appétit…), n'hésite pas à consulter un·e professionnel·le de santé.",
  depressionResources: [
    {
      link: "/depression",
      label: "Dépression",
      description:
        "Tu ressens perte d'intérêt, tristesse, fatigue, troubles du sommeil ou de l'appétit ?",
      emoji: "🥺",
    },
    {
      link: "/anxiete",
      label: "Anxiété",
      description:
        "Tu es tendu·e, inquiet·e, tu as des difficultés à te concentrer ou à dormir ?",
      emoji: "😶‍🌫️",
    },
  ],

  breakTitle: "Rompre l'isolement",
  breakIntro:
    "Se reconnecter ne signifie pas devenir extraverti·e. Il s'agit d'introduire de petites interactions régulières dans ton planning. Voici un plan d'action progressif :",
  breakStepsTitle: "5 étapes pour briser la solitude",
  breakSteps: [
    { title: "Identifier", subtitle: "Reconnais les situations où tu te sens isolé·e (repas seul·e, soirées évitées…) et note-les sur une semaine" },
    { title: "Fixer un micro-objectif", subtitle: "Par exemple : déjeuner une fois cette semaine avec un·e camarade ou participer à un événement associatif" },
    { title: "T'exposer progressivement", subtitle: "Choisis des environnements bienveillants : permanences associatives, bibliothèque, Skylab, etc." },
    { title: "Demander du renfort", subtitle: "Ton parrain ou ta marraine, des ami·e·s que tu as déjà, l'infirmière ou l'assistant·e social·e peuvent t'épauler" },
    { title: "Entretenir le lien", subtitle: "Le sport obligatoire, le brassage associatif ou les événements (Bouffes d'étage, Souk du Bazar...) organisés régulièrement sont un bon moyen d'entretenir le lien" },
  ],
  socialTitle: "Sortir, rencontrer, partager",
  socialSubtitle:
    "Utilise ces plateformes pour trouver des événements ou des lieux conviviaux près de toi :",
  socialResources: [
    {
      link: "https://afev.org/auvergne-rhone-alpes/grand-lyon",
      imageSrc: "/assets/logo-afev.svg",
      label: "Carte des tiers-lieux étudiants",
      description: "Espaces de rencontre partout en France",
    },
    {
      link: "https://www.instagram.com/culturel_lyon/",
      imageSrc: "/assets/culturel_lyon.jpg",
      label: "Culturel Lyon",
      description: "Idées de sorties chaque week-end dans la métropole",
    },
  ],

  helpTitle: "Besoin d'en parler ?",
  helpIntro:
    "Parler de ton ressenti est souvent le premier pas pour aller mieux. Ces services sont gratuits, anonymes et à l'écoute 7j/7 :",
  helpContacts: [
    {
      image: "/assets/nightline_logo.png",
      title: "Nightline Lyon",
      subtitle: "Service d'écoute nocturne par et pour les étudiant·e·s",
      phone: "04 85 30 00 10",
      hours: "Tous les soirs de 21h à 2h30",
      textButton: "Voir le site web",
      link: "https://www.nightline.fr/lyon",
    },
    {
      image: "/assets/fsj.png",
      title: "Fil Santé Jeunes",
      subtitle: "Écoute anonyme & gratuite (12-25 ans)",
      phone: "0 800 235 236",
      hours: "Tous les jours de 9h à 23h",
      textButton: "Voir le site web",
      link: "https://www.filsantejeunes.com/",
    },
  ],

  helpOthersTitle: "Aider une personne isolée",
  helpOthersIntro:
    "Tu connais une personne qui semble isolée ? Voici quelques conseils pour l'aider à se (re)connecter :",
  helpOthersBullets: [
    <><b>Prends des nouvelles régulièrement</b>, même un simple message peut faire la différence.</>,
    <><b>Propose des activités ensemble</b> : une sortie, un café, ou même une visio.</>,
    <><b>Sois à l'écoute sans juger</b>, laisse-la exprimer ses ressentis.</>,
    <><b>Encourage-la à participer à des événements ou à rejoindre des groupes</b>.</>,
    <><b>Sois patient·e</b>, le processus d'intégration sociale peut prendre du temps, et chacun avance à son rythme.</>,
  ],

  sourcesLabel: "Sources :",
  sourcesList:
    "IFOP 2024, Qualité de Vie en étude à l'ECL, Portail Santé UDL, AFEV, Nightline Lyon, Fil Santé Jeunes.",
};

export default fr;