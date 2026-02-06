const fr = {
  pageTitle: "Sommeil",

  navLinks: [
    { label: "Comprendre le sommeil", target: "definition" },
    { label: "J'ai des troubles du sommeil", target: "troubles" },
    { label: "Les mauvais réflexes", target: "mauvais-reflexes" },
    { label: "Comment mieux dormir ?", target: "solutions" },
  ],

  /* ===================== COMPRENDRE LE SOMMEIL ===================== */

  sectionDefinitionTitle: "Comprendre le sommeil",

  definitionIntro:
    "Le sommeil se déroule en <b>cycles</b> (léger, profond, paradoxal). Chaque cycle est essentiel pour une bonne récupération. Le moindre déséquilibre peut entraîner <b>fatigue chronique</b>, <b>troubles de la concentration</b> ou encore <b>irritabilité</b>.",

  phasesIntro: "Les différentes phases du sommeil sont les suivantes :",

  phasesList: [
    "Sommeil léger : transition entre l'éveil et le sommeil, facile à interrompre",
    "Sommeil profond : phase de récupération physique, difficile à réveiller",
    "Sommeil paradoxal : phase de rêves, importante pour la mémoire et la régulation émotionnelle",
  ],

  phasesText: [
    "Respecter ces cycles permet au cerveau de <b>nettoyer les toxines et consolider la mémoire</b>, garantissant ainsi une clarté mentale et une concentration optimales au réveil."
  ],

  chiffres: [
    {
      number: "1/3",
      title: "des adultes",
      description: "souffrent de troubles du sommeil de façon ponctuelle",
    },
    {
      number: "10 à 15%",
      title: "de la population",
      description: "souffre d'insomnie chronique",
    },
    {
      number: "20 min",
      title: "c'est le temps moyen",
      description: "nécessaire pour s'endormir dans de bonnes conditions",
    },
  ],

  importanceTitle: "Pourquoi est-il important de bien dormir ?",

  importanceText:
    "En moyenne, les jeunes entre 18 et 25 ans dorment moins de 7 heures par nuit, ce qui est en dessous des recommandations (7 à 9 heures). <b>Dormir moins de 7 heures par nuit</b> peut avoir des <b>conséquences sur ta santé</b> :",

  consequencesList: [
    "Diminution de la concentration et de la mémoire",
    "Augmentation du stress et de l'anxiété",
    "Affaiblissement du système immunitaire",
    "Prise de poids et troubles de l'appétit",
    "Altération de l'humeur et risque de dépression",
  ],

  importanceOutro:
    "En effet, dormir permet à ton corps de <b>récupérer</b> et de <b>se régénérer</b>. Un sommeil de qualité est crucial pour maintenir un bon <b>équilibre physique et mental</b>.",

  ressources1: [
    {
      link: "https://www.inserm.fr/dossier/sommeil/",
      imageSrc: "/assets/inserm.jpg",
      label: "Inserm – Dossier Sommeil",
      description: "Explications scientifiques sur le sommeil et ses troubles",
    },
  ],

  badSleepTitle: "Reconnaître un mauvais sommeil",

  badSleepText:
    "Un mauvais sommeil ne se limite pas à des difficultés d'endormissement. Il peut aussi se traduire par une <b>fatigue persistante</b> tout au long de la journée, une <b>difficulté à sortir du lit le matin</b>, ou encore une <b>impression de n'avoir jamais récupéré malgré plusieurs heures de sommeil</b>. Ces signes doivent alerter, car ils témoignent d'un sommeil non réparateur.",

  /* ===================== TROUBLES DU SOMMEIL ===================== */

  sectionTroublesTitle: "J'ai des troubles du sommeil",

  troublesIntro:
    "Le sommeil est essentiel à notre santé physique et mentale. <b> Difficultés à s'endormir, réveils fréquents, anxiété nocturne ou insomnies chroniques </b> ne doivent pas être ignorés : ils peuvent altérer la qualité de vie au quotidien.",

  carteSommeil: {
    image: "/assets/cartes/9_pique.png",
    title: "La carte 9♠",
    shortText: "Prévention et gestion des troubles du sommeil",
    longText:
      "Avoir du mal à s'endormir ou à rester endormi n'est pas qu'une question de fatigue. Cela peut être lié au stress, à l'anxiété, à une hygiène de vie inadaptée ou à des troubles médicaux. Ne banalise pas un mauvais sommeil répété : il peut avoir de lourdes conséquences sur la santé physique et mentale.",
    textButton: "⤢ Agrandir la carte",
    suit: "pique",
  },

  fallAsleepTitle: "Pourquoi ai-je du mal à m'endormir ?",

  fallAsleepText1:
    "Il est parfois difficile de s'endormir car la phase de <b>sommeil léger</b> est souvent <b>interrompue par des pensées incessantes ou des stimuli extérieurs</b> (bruits ambiants, lumière). Une utilisation excessive des <b>écrans</b> avant le coucher peut également <b>perturber le sommeil</b> car les écrans émettent de la lumière bleue, qui inhibe la production de mélatonine, l'hormone du sommeil. Pour cette raison, si tu as des difficultés fréquentes à t'endormir, il est important de te créer un environnement propice au sommeil ou d'adopter des techniques de relaxation.",

  fallAsleepText2:
    "Un mauvais sommeil ou une difficulté à s'endormir peut aussi être lié à des facteurs tels que le <b>stress</b>, l'<b>anxiété</b>, une <b>mauvaise hygiène de vie</b> ou des <b>problèmes de santé</b> sous-jacents. Si ces difficultés persistent, il peut être utile de consulter un·e professionnel·le de santé.",

  relatedLinks: [
    {
      link: "/anxiete",
      emoji: "😶‍🌫️",
      label: "Anxiété",
      description: "Je suis trop anxieux·se pour trouver le sommeil. Que faire ?",
    },
    {
      link: "/add_reseaux",
      emoji: "📱",
      label: "Écrans",
      description: "Je passe trop de temps devant les écrans et cela affecte mon sommeil.",
    },
  ],

  troublesListTitle: "Les troubles du sommeil",

  troublesListIntro:
    "Les troubles du sommeil peuvent avoir différentes origines, parmi lesquelles :",

  troublesList: [
    "Insomnie : difficulté à s'endormir ou réveils fréquents",
    "Apnées du sommeil : pauses respiratoires nocturnes entraînant une fatigue diurne",
    "Syndrome des jambes sans repos : besoin irrépressible de bouger les jambes la nuit",
    "Somnambulisme et parasomnies : comportements anormaux durant le sommeil",
  ],

  drivingWarning:
    "De manière générale, si tu passes une mauvaise nuit ou que tu te sens très fatigué·e, <b>évite à tout prix de prendre la route</b>. S'endormir au volant peut avoir des conséquences très graves, sur toi et sur les autres.",

  accidentLink: [
    {
      link: "/accident",
      emoji: "🚗",
      label: "Accident",
      description: "Je suis trop fatigué·e pour conduire. Que faire ?",
    },
  ],

  insomniaTypesTitle: "Les différents types d'insomnie",

  insomniaIntro:
    "<b>Attention, l'insomnie ne désigne pas une simple mauvaise nuit.</b> Elle se manifeste généralement par une difficulté à s'endormir, des réveils multiples pendant la nuit ou un sommeil non réparateur, au moins 3 nuits par semaine pendant 3 mois ou plus. On en distingue 3 types :",

  insomniaTypes: [
    "Insomnie d'endormissement : difficulté à s'endormir au début de la nuit",
    "Insomnie de maintien du sommeil : réveils fréquents durant la nuit",
    "Insomnie de fin de sommeil : réveil précoce et impossibilité de se rendormir",
  ],

  consultText:
    "Si tu constates que tes nuits sont régulièrement perturbées et que cela impacte ton quotidien, <b>parles-en à un·e professionnel·le de santé</b>. Il ou elle pourra t'aider à identifier les causes de tes troubles du sommeil et te proposer des solutions adaptées, comme par exemple la thérapie comportementale, l'hypnose voire un traitement médicamenteux.",

  needTalkTitle: "Besoin d'en parler ?",

  contactInfirmary: {
    image: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    title: "Infirmerie",
    subtitle: "Infirmerie de Centrale Lyon",
    phone: "Voir les informations",
    email: "Voir les informations",
    hours: "Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 ",
    textButton: "Voir les informations",
    link:
      "https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990",
    bgColor: "#ffffff",
    textColor: "#b22133",
  },

  contactNightline: {
    image: "/assets/nightline_logo.png",
    title: "Nightline Lyon",
    subtitle: "Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s",
    phone: "04 85 30 00 10",
    email: "",
    hours: "Tous les soirs de 21h à 2h30",
    textButton: "Voir le site web",
    link: "https://www.nightline.fr/lyon",
  },

  /* ===================== MAUVAIS RÉFLEXES ===================== */

  badHabitsTitle: "Les mauvais réflexes",

  badHabitsIntro:
    "Si <b>tu n'arrives pas à t'endormir</b>, lève-toi et <b>fais une activité calme</b> plutôt que de t'obstiner au lit, cela aide à réduire l'anxiété liée au sommeil. Évite également l'alcool, la caféine ou les siestes trop longues, et n'utilise les <b>somnifères qu'en dernier recours, sous suivi médical</b>.",

  badHabitsSections: [
    {
      title: "S'obstiner à s'endormir",
      text:
        "Si tu n'arrives pas à t'endormir après 20-30 minutes, il est conseillé de <b>te lever</b> et de <b>faire une activité calme</b> dans une autre pièce (lire, écouter de la musique douce, méditer). <b>Rester au lit en se tournant et se retournant peut augmenter l'anxiété</b> liée au sommeil et rendre l'endormissement encore plus difficile. Une fois que tu te sens fatigué·e, retourne au lit.",
    },
    {
      title: "Boire de l'alcool ou des boissons caféinées",
      text:
        "L'alcool peut sembler aider à s'endormir, mais il <b>perturbe en réalité les cycles de sommeil</b> et peut entraîner des réveils nocturnes. De même, la <b>caféine (présente dans le café, le thé, les sodas et certaines boissons énergisantes)</b> est un stimulant qui peut <b>retarder l'endormissement</b> et <b>réduire la qualité du sommeil</b>. Il est donc préférable d'éviter ces substances plusieurs heures avant le coucher.",
    },
    {
      title: "« Je ferai une grosse sieste dans l'après-midi »",
      text:
        "Faire une sieste peut être bénéfique pour récupérer de la fatigue accumulée, mais elle doit être courte (20-30 minutes maximum) et pas trop tardive dans la journée (idéalement avant 15h). <b>Une sieste trop longue ou trop tardive peut perturber le sommeil nocturne.</b>",
    },
    {
      title: "Les somnifères",
      text:
        "Les somnifères (hypnotiques, benzodiazépines, etc.) peuvent être utiles en cas d'insomnie sévère et ponctuelle. Cependant, ils ne traitent pas la cause du trouble et comportent des <b>risques de dépendance et de tolérance</b>. Leur usage doit rester <b>exceptionnel et encadré par un médecin</b>. Les approches non-médicamenteuses (thérapie comportementale, hygiène du sommeil) sont recommandées en première intention.",
    },
  ],

  /* ===================== SOLUTIONS ===================== */

  solutionsTitle: "Comment mieux dormir ?",

  solutionsIntro:
    "Adopte un <b>rythme de sommeil régulier</b> en dormant 7 à 9 heures par nuit et en te couchant à des heures fixes, même le week-end. Prends aussi le temps de te détendre avant de dormir grâce à des <b>techniques de relaxation</b> comme la respiration, la méditation ou l'étirement doux.",

  tipsTitle: "Conseils pour mieux dormir",

  actionPlanTitle: "Plan d'action pour favoriser un bon sommeil",

  actionPlanItems: [
    { subtitle: "Instaurer une routine de coucher (heure régulière, rituel calme)" },
    { subtitle: "Éviter les écrans au moins 1h avant de dormir" },
    { subtitle: "Favoriser une chambre fraîche, sombre et silencieuse" },
    { subtitle: "Limiter caféine, alcool et repas trop lourds le soir" },
    { subtitle: "Pratiquer la relaxation ou la respiration avant de se coucher" },
    { subtitle: "Faire de petites siestes (20 min maximum) en journée si besoin" },
  ],

  regularityText:
    "Essaie de garder un <b>rythme de sommeil régulier</b>, avec 7 à 9 heures par nuit pour un adulte. L'idéal est de te coucher et de te lever à des horaires fixes, y compris le week-end. <b>Respecter ton horloge biologique</b> permet d'<b>éviter les déséquilibres</b> (comme enchaîner une nuit blanche puis une grasse matinée de 10 heures), qui rendent souvent l'endormissement plus difficile la nuit suivante.",

  resourcesIntro:
    "Pour plus de conseils sur l'hygiène du sommeil, consulte les ressources suivantes :",

  ressources: [
    {
      link: "https://www.ameli.fr/assure/sante/themes/insomnie-adulte/vivre-insomnie",
      imageSrc: "/assets/ameli.png",
      label: "Ameli.fr – Troubles du sommeil",
      description: "Conseils pratiques et explications de l'Assurance Maladie",
    },
    {
      link: "https://reseau-morphee.fr/",
      imageSrc: "/assets/reseau_morphee.png",
      label: "Réseau Morphée",
      description: "Réseau spécialisé dans les troubles du sommeil et leur accompagnement",
    },
  ],

  relaxTitle: "Se détendre et se relaxer",

  relaxIntro:
    "Si tu as du mal à t'endormir, des techniques de relaxation peuvent t'aider à calmer ton esprit et à préparer ton corps au sommeil. Voici quelques méthodes efficaces :",

  relaxItems: [
    {
      title: "Respiration profonde",
      subtitle:
        "Inspire lentement par le nez, retiens ta respiration quelques secondes, puis expire lentement par la bouche. Répète plusieurs fois.",
    },
    {
      title: "Méditation guidée",
      subtitle:
        "Utilise des applications ou des vidéos en ligne pour te guider dans une méditation relaxante à appliquer avant de dormir.",
    },
    {
      title: "Relaxation musculaire progressive",
      subtitle:
        "Contracte puis relâche chaque groupe musculaire de ton corps, en commençant par les pieds et en remontant jusqu'à la tête.",
    },
    {
      title: "Visualisation positive",
      subtitle:
        "Imagine un lieu ou une situation apaisante, en te concentrant sur les détails sensoriels (sons, odeurs, sensations).",
    },
  ],

  relaxLink: [
    {
      link: "/detente",
      emoji: "🧘",
      label: "Détente et relaxation",
      description: "Pour en savoir plus sur les techniques de relaxation",
    },
  ],

  sources:
    "<em><b>Sources :</b> Inserm, Ministère de la Santé, HAS, Réseau Morphée, Ameli.fr</em>",
};

export default fr;
