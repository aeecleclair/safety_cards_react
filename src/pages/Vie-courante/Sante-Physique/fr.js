// fr.js — Textes en français pour la page Sport & Santé

const fr = {
  navLinks: [
    { label: "Pourquoi et où faire du sport ?", target: "importance" },
    { label: "Facteurs & obstacles", target: "obstacles" },
    { label: "Bien-être & prévention", target: "prevention" }
  ],

  carte5_pique: {
    image: "./assets/cartes/5_pique.png",
    title: "La carte 5♠",
    shortText: "Le sport et ses bienfaits sur le corps et l'esprit",
    longText:
      "Pratiquer une activité physique régulière ne se résume pas à brûler des calories ou à améliorer ses performances : c'est aussi nourrir son esprit, renforcer ses liens sociaux et mieux écouter son corps. Chaque pas, chaque mouvement, chaque effort modéré contribue à la santé globale et au plaisir de bouger. Tous les gestes du quotidien, même simples — marcher, monter les escaliers, pédaler — participent à ce chemin vers l'équilibre et le bien-être.",
    buttonText: "⤢ Agrandir la carte",
    suit: "pique"
  },

  Titlepage: "Santé physique & sport",
  importanceTitle: "Pourquoi et où faire du sport ?",
  importanceIntro:
    "L'activité physique inclut tout mouvement du corps produit par les muscles, allant de la marche quotidienne aux sports collectifs, natation, danse, yoga ou fitness.",

  importanceBeneficesIntro: "Ses bénéfices sont multiples :",

  importanceBeneficesList: [
    "<strong>Physiques</strong> : amélioration cardiovasculaire, renforcement musculaire et osseux, maintien d'un poids équilibré",
    "<strong>Mentaux</strong> : réduction du stress et de l'anxiété, meilleure concentration, qualité de sommeil améliorée",
    "<strong>Sociaux</strong> : intégration à la vie de campus, développement de l'esprit d'équipe, moments conviviaux via les associations étudiantes"
  ],

  importanceInfra:
    "À Centrale Lyon, les infrastructures permettent de pratiquer facilement : gymnase, terrains extérieurs, nouveaux terrains de padel, associations étudiantes comme le <strong>Bureau des Sports (BDS)</strong>, mais aussi piscines, pistes d'athlétisme et salles municipales de la ville de Lyon.",

  importanceEquilibreTitle: "Le sport : une question d'équilibre et d'écoute de soi",
  importanceEquilibre1:
    "Attention cependant : <strong>trop de sport</strong> n’est pas forcément bénéfique. Comme pour tout, l’équilibre est essentiel. Une pratique excessive ou mal adaptée peut entraîner des blessures, une fatigue chronique, ou une baisse des performances scolaires et mentales.",
  importanceEquilibre2:
    "Le sport est censé être un <strong>plaisir</strong> et un <strong>moment de détente</strong> : il aide à réduire le stress, à vider l’esprit et à retrouver de l’énergie, mais il ne doit pas devenir une source supplémentaire de pression. Si tu ressens une grande fatigue, des douleurs persistantes ou une perte de motivation, il est recommandé de diminuer l’intensité, de varier les activités ou de demander conseil à un professionnel de santé.",
  importanceEquilibre3:
    "Le plus important dans la pratique d'une activité physique reste la <strong>régularité</strong> et l’<strong>écoute de soi</strong> : quelques séances modérées chaque semaine suffisent pour ressentir les bénéfices physiques et psychologiques, sans épuisement.",

  chiffres: [
    { number: "79%", title: "Élèves de Centrale Lyon", description: "se disent satisfaits de la fréquence de leur pratique sportive" },
    { number: "2h30–4h", title: "Recommandation OMS", description: "d'activité physique par semaine" },
    { number: "16%", title: "Étudiants", description: "ne rentrent pas dans ce cadre minimum" }
  ],

  infrastructuresTitle: "Infrastructures sportives centraliennes et lyonnaises",
  infrastructuresSubtitle: "Retrouvez les lieux pour pratiquer selon vos envies.",

  infrastructuresLyon: [
    {
      link: "https://www.oslyon.com/pratique-libre/",
      imageSrc: "/assets/min.png",
      label: "Lyon",
      description: "Sites de running, balades à vélo, fitness en extérieur, skate-parks extérieurs"
    }
  ],

  gestesQuotidiens:
    "Même au quotidien, des gestes simples comptent : marcher 5 km, privilégier le vélo, courir ou nager régulièrement.",

  comparatifTitle: "Comparatif des activités physiques",
  comparatifSubtitle:
    "Quelques exemples concrets de dépenses énergétiques selon l'activité choisie",

  comparatifItems: [
    {
      title: "Marche",
      subtitle:
        "Parcourir 5 km en 1h ou 2h brûle environ la même quantité de calories. La marche rapide augmente l'effort : des marcheurs expérimentés ou entraînés dépensent plus d'énergie que lors d'une marche tranquille."
    },
    {
      title: "Jogging et course",
      subtitle:
        "Pour un adulte, courir 10 km peut brûler environ 600 à 800 calories selon le poids, le sexe et l'intensité. Allonger la foulée permet de dépenser jusqu'à 15 % d'énergie supplémentaire."
    },
    {
      title: "Natation",
      subtitle:
        "Pour la même distance, la natation brûle environ 4 fois plus de calories que la course. La brasse est plus énergivore que le crawl. Comme le muscle est plus dense que la graisse, la perte de poids peut ne pas apparaître immédiatement sur la balance."
    },
    {
      title: "Vélo",
      subtitle:
        "Rouler à intensité modérée (ex. 20 km/h) permet de brûler environ 400–600 calories par heure pour un adulte. En montée ou à haute intensité, cette dépense peut dépasser 800 calories. Le vélo sollicite surtout les jambes tout en ménageant les articulations."
    }
  ],

  obstaclesTitle: "Facteurs & obstacles",
  obstaclesIntro:
    "Malgré une réelle motivation, plusieurs obstacles peuvent limiter une pratique régulière : emploi du temps, coût, manque d'information, timidité ou contraintes de santé. Voici les freins les plus fréquents rencontrés par les étudiant·es :",

  obstaclesList: [
    {
      title: "Emplois du temps chargés",
      subtitle:
        "Cours, projets, stages et examens réduisent fortement les créneaux disponibles pour une activité régulière."
    },
    {
      title: "Coût",
      subtitle:
        "Les frais d'adhésion, le matériel et le transport peuvent être un frein pour certain·e·s étudiant·e·s."
    },
    {
      title: "Manque de repères",
      subtitle:
        "Difficulté à choisir une activité adaptée, peur de se blesser ou de mal faire."
    },
    {
      title: "Timidité / peur du regard",
      subtitle:
        "Hésitation à rejoindre des groupes ou cours collectifs par crainte du jugement."
    },
    {
      title: "Contraintes de santé",
      subtitle:
        "Blessures, douleurs chroniques ou conditions médicales qui limitent la pratique sans adaptation."
    },
    {
      title: "Violences et discriminations dans le sport",
      subtitle:
        "Certain·e·s étudiant·e·s peuvent subir ou craindre des violences sexuelles, psychologiques, du harcèlement ou des discriminations dans le cadre de la pratique sportive."
    }
  ],

  barometres: [
    {
      link: "/assets/reglo_sport_reglette.pdf",
      label: "Les VSS dans le sport",
      description: "",
      emoji: "⚽"
    }
  ],

  solutionsIntro:
    "Heureusement, des solutions existent pour aider à surmonter ces obstacles :",

  solutionsList: [
    {
      title: "Organisation (micro-séances)",
      subtitle:
        "Intégrer des séances courtes (10–20 min) : marche active, escaliers, renforcement rapide entre deux cours, le midi, le soir ou le week-end."
    },
    {
      title: "Aides financières & subventions",
      subtitle:
        "Les étudiant·e·s boursier·e·s peuvent demander prise en charge partielle (BDS / scolarité) ; rechercher tarifs réduits municipaux."
    },
    {
      title: "Accompagnement & information",
      subtitle:
        "Le service sport et le Bureau des Sports (BDS) peuvent aider à trouver une activité, des créneaux et des parrainages pour débuter."
    },
    {
      title: "Cours pour débutant·e·s",
      subtitle:
        "S'orienter vers des cours en petits groupes ou sessions ‘découverte' pour gagner en confiance."
    },
    {
      title: "Reprise progressive et prévention",
      subtitle:
        "Ateliers de renforcement doux, stretching, évaluation santé par l'infirmière avant reprise intense."
    },
    {
      title: "Accessibilité et sport adapté",
      subtitle:
        "Proposer des activités spécifiques (yoga assis, sport adapté) et contacter l'infirmerie pour un accompagnement personnalisé."
    },
    {
      title: "Faire face aux violences dans le sport",
      subtitle:
        "Si tu es victime ou témoin de violences (sexuelles, harcèlement, discriminations), tu peux en parler à l'infirmerie, au Bureau des Sports (BDS) ou directement via le service national de signalement « Signal-Sports » (Ministère des Sports). Des associations comme Colosse aux pieds d'argile accompagnent également les étudiant·e·s concerné·e·s."
    }
  ],

  vssResources: [
    {
      link: "https://colosse.fr/",
      imageSrc: "/assets/colosse.png",
      label: "Colosse aux pieds d'argile",
      description:
        "Association qui lutte contre les violences sexuelles, le harcèlement et le bizutage dans le sport"
    }
  ],

  cardInfirmerie: {
    image: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    title: "Infirmerie",
    subtitle: "Infirmerie de Centrale Lyon : un lieu de conseil",
    phone: "Voir les informations",
    email: "Voir les informations",
    hours: "Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00",
    textButton: "Voir les informations",
    link: "https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990",
    bgColor: "#ffffff",
    textColor: "#b22133"
  },

  preventionTitle: "Bien-être & prévention au quotidien",
  preventionIntro:
    "Pour être en bonne santé, le sport ne suffit pas à lui seul : une hygiène de vie adaptée renforce ses effets et aide à prévenir les blessures. Voici quelques pratiques clés à intégrer dans votre quotidien :",

  preventionSommeil:
    "<strong>Sommeil et récupération</strong> : un repos suffisant est essentiel pour favoriser la performance physique et mentale, et limiter les risques de blessures.",

  preventionNutrition:
    "<strong>Nutrition et activité physique</strong> : combiner une alimentation équilibrée avec des activités comme la marche rapide, le vélo, le jogging ou la natation permet de brûler des calories et d'entretenir la forme.",

  preventionDentaire:
    "<strong>Soins dentaires</strong> : le dispositif <strong>M'T Dents</strong> permet aux jeunes adultes de bénéficier d'un rendez-vous bucco-dentaire gratuit à 18, 21 et 24 ans. Les notifications sont envoyées par courrier ou via le compte Ameli environ un mois avant votre anniversaire.",

  preventionIsosteo:
    "<strong>Prévention des blessures</strong> : grâce au partenariat avec la clinique <strong>Isosteo</strong>, les étudiant·e·s de Centrale Lyon peuvent accéder à des consultations ostéopathiques à conditions préférentielles pour prévenir ou soulager les tensions et blessures liées à l'activité physique.",

  preventionMobilite:
    "<strong>Mobilité douce</strong> : privilégier des modes de déplacement actifs comme la marche, le vélo ou la course permet d'allier santé, respect de l'environnement et économie de temps. Ces gestes simples, intégrés à votre routine quotidienne, ont un impact significatif sur la forme physique globale.",

  preventionRelaxation:
    "<strong>Relaxation et gestion du stress</strong> : les ateliers de détente proposés par l'infirmière du campus aident à gérer le stress et la fatigue, et complètent efficacement votre pratique sportive pour un équilibre mental et physique optimal.",

  preventionResources: [
    {
      link: "/anxiete",
      emoji: "😶‍🌫️",
      label: "Anxiété",
      description: "Tu te sens anxieux même en pratiquant une activité physique ?"
    },
    {
      link: "/sédentarité",
      emoji: "🛋️",
      label: "Sédentarité",
      description: "Qu'est-il possible de faire face à la sédentarité ?"
    },
    {
      link: "/sommeil",
      emoji: "💤",
      label: "Sommeil",
      description:
        "Interrogations sur le sommeil ? Difficultés pour l'endormissement ?"
    }
  ],

  cardIsosteo: {
    image: "/assets/isosteo.png",
    title: "Clinique ostéopathique ISOsteo",
    subtitle:
      "Consultations préférentielles pour les étudiant·e·s de Centrale Lyon",
    phone: "04 72 89 06 07",
    email: "contact@isosteo.fr",
    hours: "Sur rendez-vous, à Écully",
    textButton: "Voir le site",
    link: "https://www.isosteo.fr/rdv-ecully",
    bgColor: "#ffffff",
    textColor: "#2f805fff"
  },

  preventionConclusion:
    "En combinant ces bonnes pratiques à une activité physique régulière, vous favorisez un meilleur équilibre physique, mental et social, tout en améliorant votre qualité de vie sur le campus.",

  sourcesPrefix: "Sources :",
  sources:
    "OMS, PAI Centrale Lyon 2024, Université de Lyon, Ville de Lyon, ISOSTEO, Assurance Maladie"
};

export default fr;
