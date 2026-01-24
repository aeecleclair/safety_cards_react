// fr.js — Textes en français pour la page Pratiques d'intégration / Bizutage

const fr = {
  title: "Pratiques d'intégration",

  navLinks: [
    { label: "Integration ou bizutage ?", target: "definition" },
    { label: "Pourquoi c'est grave ?", target: "risques" },
    { label: "Comment réagir", target: "agir" },
    { label: "J'organise l'intégration", target: "assos" }
  ],

  /** Popup carte D♣ (définition) */
  carteD_trefle: {
    image: "/assets/cartes/dame_trefle.png",
    title: "La carte D♣",
    shortText: "Intégration et bizutage : ce n’est pas parce qu’on rit ensemble que tout est bienveillant",
    longText:
      "L’intégration, c’est accueillir; le bizutage, c’est soumettre, en faisant le plus souvent semblant d'accueillir. L’un crée du lien, l’autre impose une hiérarchie. Sous couvert d’humour ou de tradition, l’humiliation s’installe parfois sans qu’on ose la nommer. Une vraie intégration ne demande jamais de se taire, d’avoir honte ou de dépasser ses limites : l’amusement ne doit jamais se faire au détriment de la dignité.",
    buttonText: "⤢ Agrandir la carte",
    suit: "trefle"
  },

  definitionTitle: "Intégration ou Bizutage ?",
  definitionIntro1:
    "L'<strong>intégration</strong> désigne l'ensemble des actions organisées pour accueillir les nouveaux arrivants dans un groupe (étudiants, élèves, collègues…). Elle vise à créer du lien social, à transmettre les codes de l'établissement ou de la promo, et à favoriser une bonne ambiance. Elle peut prendre la forme de jeux, de soirées, de parrainages, de repas partagés ou d'activités collectives (exemple : la QI). <strong>L'objectif est l'inclusion, le respect et le volontariat.</strong>",

  definitionIntro2:
    "Le <strong>bizutage</strong>, lui, correspond à des <strong>pratiques imposées</strong> à une personne nouvellement arrivée dans un groupe, dans le but de « tester », « marquer » ou « soumettre » cette personne. Il peut s'agir de défis humiliants, de pressions pour boire, de mises à l'écart, de violences physiques ou psychologiques, de tenues dégradantes, etc. Même si cela est présenté comme une tradition ou un rite d'entrée, <strong>le bizutage est interdit par la loi française</strong>.",

  titleTable:
    "Les différences clé",

  differencesTable: {
    headers: ["Intégration", "Bizutage"],
    rows: [
      ["Activité proposée librement", "Activité imposée ou subie"],
      ["Respect des limites et du consentement", "Pression sociale ou contrainte"],
      ["Objectif : accueillir et inclure", "Objectif : tester, soumettre ou humilier"],
      ["Climat bienveillant et festif", "Risque de violence, d'humiliation ou de mise en danger"],
      ["Légal", "<strong>Interdit par la loi (article 225-16-1 du Code pénal, 7 500€ d'amende et 6 mois d'emprisonnement)</strong>"]
    ]
  },

  rappelAretir: {
    title: "À retenir :",
    bullets: [
      "Ce n'est pas parce que “tout le monde l'a fait” que c'est acceptable.",
      "Une activité ne devient pas moins grave parce qu'on “rit après”.",
      "Une bonne intégration n'a jamais besoin d'humilier."
    ]
  },

  actesBizutageTitle: "Quels actes relèvent du bizutage ?",
  actesBizutageIntro:
    "Le Code pénal considère comme bizutage tout acte humiliant ou dégradant, même avec consentement, subi dans un cadre scolaire ou associatif. Voici quelques exemples de pratiques interdites :",

  pratiquesBizutage: [
    "Faire boire de l'alcool en grande quantité ou sous pression",
    "Rituels humiliants (se déshabiller, simuler des actes sexuels, etc.)",
    "Obligation de ramper, nettoyer ou porter des tenues dégradantes",
    "Privation de sommeil pendant un week-end d'intégration",
    "Contraintes physiques : pompes, sauts, coups légers mais répétés",
    "Rituels secrets interdits de révélation",
    "Pressions psychologiques : menaces d'exclusion du groupe"
  ],

  chiffres: [
    { number: "70.3%", title: "des étudiant·e·s", description: "estiment les pratiques d'intégration centralienne acceptables" },
    { number: "9.5%", title: "des étudiant·e·s", description: "pensent que ces pratiques peuvent mettre mal à l'aise dans certaines situations" },
    { number: "7.2%", title: "des étudiant·e·s", description: "se disent victime de bizutage sur le campus" }
  ],

  consequencesTitle: "Conséquences possibles",
  consequencesList: [
    "Humiliation et perte d'estime de soi",
    "Blessures physiques accidentelles (voire hospitalisations)",
    "Stress post-traumatique ou anxiété",
    "Abandon d'études ou isolement",
    "Normalisation de la violence dès l'entrée dans l'enseignement supérieur",
    "Risque juridique lourd pour les organisateurs"
  ],

  sanctionsTitle: "Sanctions légales",
  sanctionsIntro:
    "Le bizutage est strictement interdit par la loi française. Peu importe que l'acte soit présenté comme « symbolique », « traditionnel » ou « sans gravité » : dès lors qu'il porte atteinte à la dignité, à l'intégrité physique ou psychologique d'une personne, il peut être sanctionné.",
  sanctionsList: [
    "Le bizutage est un délit (article 225-16-1 du Code pénal)",
    "Peine pouvant aller jusqu'à 6 mois de prison et 7 500 € d'amende",
    "Sanctions aggravées en cas de violence, menace, ou actes discriminants",
    "Les établissements peuvent engager des procédures disciplinaires",
    "Aucune nécessité d'intention de nuire pour que le délit soit constitué"
  ],

  ressourcesTitle: "Pour aller + loin",
  ressourcesSubtitle: "Informations officielles sur la loi contre le bizutage",
  ressourcesExternes: [
    {
      link: "https://www.contrelebizutage.fr",
      label: "Contre le bizutage",
      description: "Association de lutte contre le bizutage, avec ressources et témoignages.",
      imageSrc: "/assets/cncb-logo.jpg"
    },
    {
      link: "https://www.service-public.fr/particuliers/vosdroits/F2275",
      label: "Service Public – Bizutage",
      description: "Définition, sanctions prévues, et recours possibles pour les victimes.",
      imageSrc: "/assets/rep-logo.png"
    }
  ],

  risquesTitle: "Pourquoi c'est grave ?",
  risquesIntro1:
    "Le bizutage, même déguisé en « tradition » ou en « rite d'intégration », peut avoir de lourdes conséquences. Humiliation, pression psychologique, atteinte à la dignité… Ces actes laissent des marques, parfois durables.",
  risquesIntro2:
    "Derrière l'argument du « fun » ou de « l'ambiance », on retrouve souvent des situations où des personnes sont forcées, mises mal à l'aise, ou contraintes à des comportements qu'elles n'auraient jamais acceptés autrement. Ces pratiques ne sont ni anodines, ni sans impact :",

  risquesList: [
    "Humiliation et perte d'estime de soi",
    "Blessures physiques accidentelles (voire hospitalisations)",
    "Stress post-traumatique ou anxiété",
    "Abandon d'études ou isolement",
    "Normalisation de la violence dès l'entrée dans l'enseignement supérieur",
    "Risque juridique lourd pour les organisateurs"
  ],

  agirTitle: "Comment réagir ?",
  agirIntro:
    "Que tu sois témoin ou victime, il existe des moyens concrets d'agir contre le bizutage. Il ne s'agit pas de « casser l'ambiance » ou « d'exagérer », mais de refuser que des pratiques humiliantes soient banalisées. Tu n'es pas seul·e, des structures existent pour t'écouter et t'accompagner.",

  actionsPossibleTitle: "Victime ou témoin : tu peux agir",
  actionsPossibleSubtitle: "Des réflexes simples pour protéger et alerter",
  actionsPossibleList: [
    { title: "N'aie pas honte de parler", subtitle: "Tu n'as rien fait de mal. Ce sont les auteurs du bizutage qui sont en tort, pas toi." },
    { title: "Garde des preuves", subtitle: "Photos, messages, témoignages peuvent être utiles si tu veux signaler." },
    { title: "Préviens un référent ou une personne de confiance", subtitle: "Même anonymement, tu peux alerter ton établissement ou une structure extérieure." },
    { title: "Signale les faits à ton établissement ou au rectorat", subtitle: "Ils ont l'obligation de te protéger et d'agir." },
    { title: "Tu peux porter plainte", subtitle: "Même des pratiques dites “bon enfant” peuvent être sanctionnées si elles causent un trouble." }
  ],

  victimesIntro1:
    "<strong>Il n'y a aucune honte à avoir si tu en as été victime.</strong> Ce n'est pas toi le problème, c'est la pratique qui est illégale et violente. Tu as le droit de te sentir en colère, blessé·e ou trahi·e, et c'est en en parlant et en mettant des mots dessus que tu pourras parvenir à vivre avec.",

  victimesIntro2:
    "<strong>Tu peux en parler à quelqu'un de confiance</strong> : un·e ami·e, un·e membre de ta famille, un·e enseignant·e, un·e référent·e au sein de ton établissement (infirmier·ère, assistant·e social·e, etc.). Tu peux par exemple contacter le service vie étudiante de Centrale Lyon.",

  cardServiceVie: {
    image: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    title: "Service vie étudiante",
    subtitle: "Service vie étudiante de Centrale Lyon",
    email: "Voir les informations",
    textButton: "Voir les informations",
    link: "/vie-etudiante",
    bgColor: "#ffffff",
    textColor: "#b22133"
  },

  ecouteIntro:
    "Si tu ne te sens pas à l'aise d'en parler autour de toi, <strong>des structures d'écoute existent</strong>, comme Comment on s'aime ? ou Nightline, qui proposent une écoute anonyme et bienveillante.",

  cardCommentOnSaime: {
    image: "/assets/logo-cosa.svg",
    title: "Comment on s'aime ?",
    subtitle: "Écoute et réponse à tes questions par des professionnels",
    hours: "Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h",
    textButton: "Voir le site web",
    link: "https://commentonsaime.fr/",
    bgColor: "#f6a21e",
    textColor: "#ffffff"
  },

  cardNightline: {
    image: "/assets/nightline_logo.png",
    title: "Nightline Lyon",
    subtitle: "Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s",
    phone: "04 85 30 00 10",
    hours: "Tous les soirs, de 21h à 2h30",
    textButton: "Voir le site web",
    link: "https://www.nightline.fr/lyon"
  },

  temoinsTitle: "Je suis témoin de bizutage",
  temoinsIntro:
    "Si tu es témoin d'un bizutage, <strong>ne reste pas passif·ve</strong>. Ton silence peut être perçu comme une approbation tacite. Même si tu n'es pas directement concerné·e, tu peux faire une différence en agissant. Applique les conseils donnés dans l'encart précédent.",

  temoinsResource: [
    {
      link: "https://commentonsaime.fr/mes-etudes/comment-reagir-quand-je-vois-une-situation-malaisante-en-soiree/",
      label: "Comment réagir quand je vois une situation malaisante en soirée ?",
      description: "Mieux repérer les comportements problématiques et apprendre à intervenir",
      imageSrc: "/assets/logo-cosa.svg"
    }
  ],
  bizutTitle: "Je ne veux pas devenir bizuteur·ze",
  bizutText: "Nous sommes tous vulnérables à la manipulation. Il est très facile de se faire embarquer là où l'on n'aurait pas voulu aller. Lors de l'accueil des 0As, fais preuve d'empathie et de respect envers les nouveaux arrivants. Si tu sens que la situation dérape, n'hésite pas à le signaler au groupe : ta parole peut-être décisive.",
  carte8_trefle: {
    image: "/assets/cartes/8_trefle.png",
    title: "La carte 8♣",
    shortText: "Intégration : ne pas forcer les autres",
    longText: "Accueillir quelqu’un, ce n’est jamais le pousser à faire ce qu’il ne veut pas. Chacun arrive avec son histoire, ses limites, son énergie du moment. Forcer, insister ou se moquer pour obtenir quelque chose n’a rien d’intégrateur : c’est une pression qui peut isoler ou blesser. L’intégration authentique laisse le choix, respecte le « non » et permet à chacun de participer à son rythme. On peut créer du lien sans dépassement imposé : la sécurité et la liberté de chacun doivent toujours passer avant le jeu ou l’ambiance.",
    buttonText: "⤢ Agrandir la carte",
    suit: "trefle"
  },

  effetGroupeResources: [
    {
      label: "Effet de groupe",
      description: "Comment y faire face ?",
      emoji: "🙅",
      link: "/groupe"
    }
  ],

  mythesTitle: "Le bizutage reste un bizutage, même s'il est accepté",
  mythesSubtitle: "Déconstruire les fausses excuses",
  mythesList: [
    { title: "« C'est juste pour rire »", subtitle: "Ce qui est drôle pour certains peut être humiliant pour d'autres. L'humour ne doit jamais être imposé." },
    { title: "« J'ai accepté, donc ce n'est pas du bizutage »", subtitle: "Le consentement sous pression n'est pas un vrai consentement. Ce n'est pas parce qu'on ne dit rien qu'on est d'accord." },
    { title: "« Tout le monde est passé par là »", subtitle: "La répétition d'une pratique nocive ne la rend pas légitime. Une tradition peut être toxique, il faut alors la remettre en question" },
    { title: "« Ce n'est pas grave, c'est juste une blague entre potes »", subtitle: "Les conséquences psychologiques peuvent être graves et durables, même si l'intention n'était pas méchante." }
  ],

  assosTitle: "J'organise l'intégration",
  assosText:
    "<strong>L'effet de groupe peut amplifier la pression à consommer ou réaliser des actes dégradants</strong>, même inconsciemment. Pour que chacun se sente à l'aise, il est important de <strong>favoriser un climat de respect et d'écoute</strong>, où les choix de chacun sont acceptés sans jugement. Tu peux trouver des outils pour organiser des <strong>soirées plus responsables et sécurisées</strong> sur les sites suivants :",

  ressourcesList: [
    {
      link: "https://montetasoiree.com/",
      imageSrc: "/assets/monte-ta-soiree.png",
      label: "Monte ta soirée",
      description: "Un 1er outil pour organiser des soirées plus responsables"
    },
    {
      link: "https://pimp-my-party.fr/",
      imageSrc: "/assets/pimp-my-party.png",
      label: "Pimp my party",
      description: "Un 2ème outil pour organiser des soirées en toute sécurité"
    },
    {
      link: "https://www.contrelebizutage.fr/ressources/chartes-et-guides/",
      imageSrc: "/assets/cncb.jpg",
      label: "Comité national contre le bizutage",
      description: "Chartes et guides pour organiser des soirées étudiantes"
    }
  ],

  sourcesPrefix: "Sources :",
  sources:
    "Service Public, Code pénal, Nightline, Comment on s'aime ?, Comité National Contre le Bizutage, Ministère de l'Enseignement Supérieur, PAI 22 : Qualité de vie en études à l'ECL"
};

export default fr;
