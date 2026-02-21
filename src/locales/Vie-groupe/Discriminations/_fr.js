// fr.js — Textes en français pour la page Discriminations

const fr = {
  title: "Discriminations",

  navLinks: [
    { label: "Qu’est-ce que la discrimination ?", target: "definitions" },
    { label: "Discriminations sexistes", target: "sexistes" },
    { label: "Discriminations racistes", target: "racistes" },
    { label: "Discriminations LGBT-phobes", target: "lgbtphobes" },
    { label: "Je suis témoin", target: "temoin" }
  ],

  /** Définitions et carte V♥ */
  definitionTitle: "Qu’est-ce que la discrimination ?",
  carteVcoeur: {
    image: "/assets/cartes/valet_coeur.png",
    title: "La carte V♥",
    shortText: "Discrimination : briser l’injustice ordinaire",
    longText:
      "Être victime de discrimination, c’est sentir qu’on ne regarde plus la personne, mais ce qu’elle représente. L'image porte sur le genre, mais l'origine ou encore l'apparence suffisent à changer un regard, à fermer une porte, à effacer une voix. C’est une violence subtile, souvent silencieuse, mais qui use à force de se répéter. Reconnaître la discrimination, c’est déjà commencer à la faire reculer.",
    buttonText: "⤢ Agrandir la carte",
    suit: "coeur"
  },

  definitionParagraph:
    "La <b>discrimination</b> désigne toute distinction, exclusion ou préférence fondée sur un motif <b>interdit par la loi</b>, qui a pour effet de porter atteinte à <b>l’égalité de traitement</b>. Les <b>motifs prohibés par la loi</b> sont les suivants :",

  motifsList: [
    "Origine et lieu de résidence",
    "Sexe, orientation sexuelle, identité de genre",
    "Situation de famille ou patronyme",
    "Grossesse",
    "Caractéristiques génétiques ou apparence physique, appartenance ou non-appartenance, vraie ou supposée, à une ethnie, nation, prétendue race ou religion déterminée",
    "Particulière vulnérabilité résultant de la situation économique",
    "État de santé, handicap ou perte d'autonomie",
    "Moeurs",
    "Âge",
    "Opinions politiques ou activités syndicales",
    "Qualité de lanceur d'alerte, de facilitateur ou de personne en lien avec un lanceur d'alerte",
    "Capacité à s'exprimer dans une langue autre que le français"
  ],

  legalStatusParagraph:
    "En France, la discrimination est <b>un délit</b>. Selon <b>l’article 225-2 du Code pénal</b>, elle est punie de <b>3 ans d’emprisonnement</b> et de <b>45 000 € d’amende</b> (portés à 5 ans et 75 000 € si la discrimination a lieu dans un établissement recevant du public ou par une personne dépositaire de l’autorité publique).",

  discrimetreResources: [
    {
      link: "/assets/Discriminomètre.pdf",
      label: "Discriminomètre ",
      description: "pour avoir des exemples de situations dangereuses",
      emoji: "📏"
    }
  ],

  rightsParagraph1:
    "En France, la loi protège de nombreux motifs discriminatoires. <b>Tu as des droits</b>. Ce n’est <b>jamais ta faute</b> si quelqu’un te discrimine.",

  socialNetworksParagraph:
    "La loi s’applique aussi <b>aux réseaux sociaux</b> : publier, commenter, repartager ou même retweeter des propos discriminatoires est passible <b>des mêmes sanctions pénales</b>. Être derrière un écran ne donne pas le droit d’insulter ou de propager des contenus discriminatoires.",

  resourcesPenale1: [
    {
      link: "https://www.service-public.fr/particuliers/vosdroits/F38175",
      imageSrc: "/assets/min.png",
      label: "Définition officielle",
      description: "de ce qui constitue une discrimination"
    },
    {
      link: "https://www.service-public.fr/particuliers/vosdroits/F32075",
      imageSrc: "/assets/min.png",
      label: "Responsabilité des contenus publiés sur internet",
      description: "et les règles associées"
    }
  ],

  chiffresTitle: "Quelques chiffres récents sur le campus de Centrale Lyon",
  chiffresIntro:
    "Beaucoup de personnes discriminées n’en parlent pas ou ne savent pas vers qui se tourner : 87,7% des personnes discriminées ne demandent pas d’aide (92,3% des femmes et 87,0% des hommes). Il existe des dispositifs de signalement, des soutiens psychologiques, juridiques et associatifs, sur le campus, à Lyon ou en ligne.",

  dataGeneral: [
    {
      number: "8,8%",
      title: "des étudiant·es",
      description: "déclarent avoir subi une discrimination sur le campus (genre, origine, orientation sexuelle)"
    },
    {
      number: "17,2%",
      title: "des étudiants internationaux",
      description: "sont victimes de discrimination liée à leur origine"
    },
    {
      number: "11,1% et 6,6%",
      title: "des femmes et des hommes",
      description: "déclarent être victimes de discrimination"
    }
  ],

  contactsDiscriminationTitle: "Contacts en cas de discrimination",

  celluleCard: {
    image: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    title: "Cellule d'écoute",
    subtitle: "Dispositif d'écoute et d'accompagnement de Centrale Lyon",
    email: "Voir les informations",
    textButton: "Voir les informations",
    link: "/cellule-ecoute",
    bgColor: "#ffffff",
    textColor: "#b22133"
  },

  arbreDiscriphrase: "Si tu fais face à une situation de discrimination, n'hésite pas à en parler à quelqu'un de confiance ou à contacter les services compétents. Tu peux suivre l'arbre de décision suivant :",
  arbreDiscriResources: [
    {
      link: "/docs/arbre-discrimination-centrale-lyon.pdf",
      label: "Arbre de décision",
      description: "Je suis victime ou témoin de discrimination (étudiants et personnels de Centrale Lyon)",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
    }
  ],

  antiDiscriminationsCard: {
    image: "/assets/defenseur_droits.png",
    title: "AntiDiscriminations",
    subtitle: "AntiDiscriminations : site pour les victimes et les témoins",
    phone: "3928",
    email: "",
    hours: "Lundi à vendredi : 9h30 - 19h",
    textButton: "Voir le site",
    link: "https://www.antidiscriminations.fr/",
    bgColor: "#ffffffff",
    textColor: "#091d7fff"
  },

  autresPagesIntro:
    "Tu subis du <b>harcèlement</b> ? Tu es victime d'<b>effet de groupe</b> ou tu as été témoin de discriminations au cours de l'<b>intégration</b> ? N'hésite pas à visiter d'autres pages pour continuer à te renseigner :",

  autres_pages_global: [
    {
      link: "/harcel",
      emoji: "😠",
      label: "Harcèlement",
      description: "Comment agir face au harcèlement ?"
    },
    {
      link: "/groupe",
      emoji: "🙅",
      label: "Effet de groupe",
      description: "Comment agir face à l'effet de groupe ?"
    },
    {
      link: "/inte",
      emoji: "🍾",
      label: "Pratiques d'intégration",
      description: "Que faire face au bizutage ?"
    }
  ],

  /** Sexisme */
  sexistesTitle: "Discriminations sexistes",
  sexismes_paragraph1:
    "<b>Le sexisme</b> désigne toute inégalité ou violence fondée sur le sexe ou le genre : harcèlement, remarques, violences sexuelles, inégalités d’accès ou de traitement. Il repose sur l’idée qu’un sexe serait supérieur à un autre, ce qui légitime depuis longtemps une hiérarchie entre hommes et femmes. Dès l’enfance, <b>les stéréotypes genrés</b> sont transmis par les jouets, l’école, les médias ou le langage, influençant les comportements, les attentes et les rôles sociaux assignés à chacun·e. Ces représentations peuvent ensuite s’exprimer à travers des discriminations, des micro-agressions ou <b>des violences sexistes</b>. Le sexisme structurel se manifeste aussi dans l’emploi, la politique, la culture ou le sport, par des inégalités de traitement, une invisibilisation des voix féminines ou des discours paternalistes « bienveillants » qui perpétuent les rapports de pouvoir.",

  sexistesFrequentTitle: "Les discriminations sexistes fréquentes et leurs conséquences",
  sexistesFrequentList: [
    "Violences verbales ou sexuelles, harcèlement de rue ou dans les études",
    "Inégalités de traitement ou d’accès selon le genre",
    "Pression sociale sur le “rôle de genre” attendu",
    "Modifications de comportement pour éviter les agressions (se taire, éviter certains lieux, etc.)"
  ],

  sexistesStat:
    "Selon le rapport 2024 du Haut Conseil à l’Égalité, 9 femmes sur 10 ont déjà renoncé à certaines actions ou modifié leur comportement pour éviter le sexisme.",

  sexistesVSSIntro:
    "Les discriminations sexistes peuvent être accompagnées de violences sexistes et sexuelles : Qu'est-ce qu'une VSS ? Comment réagir ? Si tu te poses ces questions, n'hésite pas à t'informer juste ici :",

  autres_pages_sexisme: [
    {
      link: "/vss",
      emoji: "🫂",
      label: "Violences sexistes et sexuelles",
      description: "Comment réagir face à une VSS ?"
    }
  ],

  violentometresIntro: "Tu peux évaluer ta situation avec les différents violentomètres suivants :",

  barometres: [
    {
      link: "/assets/Violentomètre_relations_profs_eleves.pdf",
      label: "Les discriminations et VSS dans les relations professeurs-élèves",
      description: "",
      emoji: "🎓"
    },
    {
      link: "/assets/Violentometre_VSS_travail.pdf",
      label: "Les discriminations et VSS dans le milieu professionnel",
      description: "",
      emoji: "💼"
    },
    {
      link: "/assets/violentometre_depliant_monde_scientifique.pdf",
      label: "Les discriminations et VSS dans le monde scientifique",
      description: "",
      emoji: "🔬"
    },
    {
      link: "/assets/reglo_sport_reglette.pdf",
      label: "Les discriminations et VSS dans le sport",
      description: "",
      emoji: "⚽"
    },
    {
      link: "/assets/barometre_violences_gyneco.pdf",
      label: "Les discriminations et VSS chez le ou la gynécologue",
      description: "",
      emoji: "🚺"
    }
  ],

  contactsSexistesTitle: "Contacts en cas de discrimination sexiste",

  arretonsViolencesCard: {
    image: "/assets/arretons_violence.svg",
    title: "Arrêtons les violences",
    subtitle: "Aide au téléphone, en ligne, ou via une association",
    hours: "24h/24, 7j/7",
    phone: "3919",
    textButton: "Accéder au site et au chat",
    link: "https://arretonslesviolences.gouv.fr/besoin-d-aide",
    bgColor: "#ffffff",
    textColor: "#CC3C32"
  },
  sexistesAssociationsIntro : "Il existe des associations directement à Lyon si tu veux entrer en contact avec des personnes luttant contre les VSS, pour demander des conseils, partager tes expériences ou même pour t'engager !",
  sexistesAssociationsResources: [
    {
      link: "https://www.filactions.org/association-filactions-lyon-qui-sommes-nous/",
      imageSrc: "/assets/filactions.png",
      label: "Filaction",
      description: "Une association luttant contre le sexisme à Lyon"
    },
    {
      link: "https://www.instagram.com/le_mouv_ecl?igsh=bzV0YWF2ZXNxczRh",
      imageSrc: "/assets/le_mouv.jpg",
      label: "Le Mouv'",
      description: "Association féministe de Centrale Lyon"
    }
  ],

  sexistesTalk:
    "Tu ne sais pas à qui en parler ? Un·e amie·e, proche, professeur·e : tu peux en parler à une personne en qui tu as confiance. Tu peux aussi aller voir un professionnel. Des ressources à Centrale Lyon ou à l'extérieur sont également disponibles.",

  sexistesArbreResources: [
    {
      link: "/docs/arbre-vss-centrale-lyon.pdf",
      label: "Arbre de décision",
      description: "Je suis victime ou témoin de VSS (étudiants et personnels de Centrale Lyon)",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
    }
  ],

  sexistesMoreTitle: "Quelques ressources pour aller plus loin",
  sexistesMoreSubtitle: "Informations, droits, signalements",
  sexistesMoreResources: [
    {
      link: "https://questionsexualite.fr/lutter-contre-les-violences-et-discriminations/la-violence-dans-la-societe/qu-est-ce-que-le-sexisme-dans-la-societe",
      imageSrc: "/assets/question_sexualite.png",
      label: "Question sexualité -",
      description: "pour plus d'informations sur le sexisme dans la société"
    },
    {
      link: "https://www.service-public.fr/particuliers/vosdroits/F34550",
      imageSrc: "/assets/service_public.png",
      label: "Service public -",
      description: "pour définir, prouver et signaler un outrage sexiste"
    }
  ],

  sexismeDayText:
    "Depuis 2023, le 25 janvier marque la Journée nationale contre le sexisme. Instituée par le Haut Conseil à l’Égalité, elle vise à sensibiliser aux comportements sexistes et à mobiliser la société contre toutes les formes d’inégalités.",

  sexismeDayResources: [
    {
      link: "https://www.egalite-femmes-hommes.gouv.fr/25-janvier-toutes-et-tous-mobilises-contre-le-sexisme",
      imageSrc: "/assets/min_egalite.png",
      label:
        "Ministère chargé de l'égalité entre les femmes et les hommes et de la lutte contre les discriminations -",
      description: "pour en découvrir plus sur le 25 janvier"
    }
  ],

  /** Racisme */
  racistesTitle: "Discriminations racistes",
  carte8carreau: {
    image: "/assets/cartes/8_carreau.png",
    title: "La carte 8♦",
    shortText: "Racisme : la couleur n’est pas une frontière",
    longText:
      "Le racisme installe une distance là où il devrait y avoir rencontre. Par des mots qui se font passer pour de l'humour, par des gestes ou des exclusions, il réduit la richesse d’une identité à un préjugé. Pour la victime, chaque remarque rappelle que sa différence est perçue comme un défaut. Pourtant, aucune couleur, aucune origine n’enlève la valeur d’une personne.",
    buttonText: "⤢ Agrandir la carte",
    suit: "carreau"
  },

  racistesParagraph1:
    "Les discriminations racistes sont fondées sur <b>l’origine</b>, <b>la nationalité</b>, <b>la couleur de peau</b>, ou des attributs culturels ou religieux. Elles se manifestent parfois par <b>des propos</b>, <b>des exclusions sociales</b>, ou <b>des violences</b>, ou encore des stéréotypes dans les cours, le logement ou même les stages et emplois.",

  racistesFrequentTitle: "Les discriminations racistes fréquentes et leurs conséquences",
  racistesFrequentList: [
    "Refus de logement ou hébergement",
    "Propos ou stéréotypes dans les cours ou au sein du campus",
    "Discriminations dans l’évaluation ou accès aux stages, emplois",
    "Isolement ou rejet des pairs, micro-agressions quotidiennes"
  ],

  racistesStat:
    "En France, environ 18 % des personnes de 18-49 ans déclarent avoir subi des traitements inégalitaires ou discriminatoires selon les dernières enquêtes. Ce taux est en hausse par rapport aux années précédentes, surtout parmi les personnes d’origine immigrée.",

  contactsRacistesTitle: "Contacts en cas de discrimination raciste",

  sosRacismeCard: {
    image: "/assets/egalite_contre_racisme.png",
    title: "SOS racisme - pôle juridique",
    subtitle: "Contact local pour les discriminations racistes",
    phone: "01 40 35 36 55",
    email: "",
    hours: "Permanences téléphoniques du lundi au vendredi de 10h00 à 13h00 et le mercredi de 10h00 à 18h00",
    textButton: "Voir le site",
    link:
      "https://egalitecontreracisme.fr/dispositifs/numero-de-telephone-du-pole-juridique-pour-les-victimes",
    bgColor: "#ffffffff",
    textColor: "#e90202ff"
  },

  racistesResources: [
    {
      link: "https://egalitecontreracisme.fr/ce-que-dit-la-loi",
      imageSrc: "/assets/egalite_contre_racisme.png",
      label: "Egalité contre le racisme -",
      description: "Pour en apprendre plus sur la loi, les propos racistes et les discriminations racistes"
    },
    {
      link: "https://www.licra.org/signaler",
      imageSrc: "/assets/licra.png",
      label: "LICRA : Ligue Internationale Contre le Racisme et l'Antisémitisme -",
      description: "Pour signaler des actes racistes"
    }
  ],

  racistesMoreTitle: "Pour aller plus loin",
  racistesMoreText:
    "Chaque année, courant mars, a lieu la semaine d’éducation et d’actions contre le racisme et l’antisémitisme, organisée autour du 21 mars, qui est la journée internationale de lutte contre le racisme. De nombreuses initiatives éducatives, associatives et institutionnelles sont proposées à cette occasion partout en France.",

  racistesMoreResources: [
    {
      link: "https://www.education.gouv.fr/la-semaine-d-education-et-d-actions-contre-le-racisme-et-l-antisemitisme-5204",
      imageSrc: "/assets/min_ed.png",
      label: "Ministère de l'éducation nationale -",
      description:
        "Pour en apprendre plus sur la semaine d'éducation et d'actions contre le racisme et l'antisémitisme"
    }
  ],

  /** LGBT-phobies */
  lgbtTitle: "Discriminations LGBT-phobes",
  carte9carreau: {
    image: "/assets/cartes/9_carreau.png",
    title: "La carte 9♦",
    shortText: "LGBTphobies : aimer ou être soi ne devrait jamais blesser",
    longText:
      "Les discriminations LGBT-phobes enferment celles et ceux qui veulent simplement être eux-mêmes. Des mots banalisés qui sont en fait des insultes, des regards et des jugements peuvent suffire à faire douter de sa place dans le monde. Pourtant, chaque identité, chaque amour mérite d’exister sans peur ni honte. Respecter les différences, c’est reconnaître la liberté d’exister pleinement.",
    buttonText: "⤢ Agrandir la carte",
    suit: "carreau"
  },

  lgbtParagraph1:
    "Les LGBTphobies regroupent plusieurs formes de rejet ou de haine envers les personnes en raison de leur orientation sexuelle ou de leur identité de genre. <b>L’homophobie</b> vise les personnes attirées par des individus du même genre ; <b>la lesbophobie</b> désigne les formes spécifiques de rejet ou de sexualisation subies par les femmes lesbiennes ; <b>la biphobie</b> renvoie aux préjugés envers les personnes bisexuelles, souvent accusées d’indécision ou d’infidélité ; <b>la transphobie</b> cible les personnes transgenres ou en questionnement sur leur identité de genre, à travers le refus du prénom d’usage, des moqueries ou des violences. Ces attitudes peuvent s’exprimer dans les milieux scolaire, professionnel, familial, sportif et avoir des conséquences graves sur la santé mentale et le sentiment de sécurité des personnes concernées.",

  lgbtFrequentTitle: "Les discriminations LGBT-phobes fréquentes et leurs conséquences",
  lgbtFrequentList: [
    "Propos ou gestes insultants, humiliants ou stéréotypés",
    "Rejet ou isolement dans les sphères personnelles, scolaires ou professionnelles",
    "Violences physiques, menaces ou harcèlement",
    "Discriminations dans l'accès au logement, aux soins, aux stages ou à l'emploi",
    "Cyber-harcèlement, outing forcé ou contenus haineux en ligne",
    "Invisibilisation des identités ou refus de reconnaissance (ex. prénom d’usage, mégenrage)"
  ],

  autres_pages_lgbtphobie: [
    {
      link: "https://www.cestcommeca.net/",
      imageSrc: "/assets/cestcommeca.jpg",
      label: "C'est comme ça",
      description: "Faire face aux discriminations LGBT-phobes"
    },
    {
      link: "/cyber_harcel",
      emoji: "📵",
      label: "Cyberharcèlement",
      description: "Comment réagir face à du cyberharcèlement ?"
    },
    {
      link: "/genre",
      emoji: "💛",
      label: "Identité de genre",
      description: "Pour en apprendre davantage sur les questions de genre"
    },
    {
      link: "/sex_orient",
      emoji: "🏳️‍🌈",
      label: "Orientation sexuelle",
      description: "Pour en apprendre davantage sur les questions d'orientation sexuelle"
    }
  ],

  lgbtStatParagraph:
    "En France, les enquêtes récentes montrent que les personnes LGBT+ sont encore très exposées aux discriminations, en particulier les jeunes et les personnes transgenres. Les conséquences peuvent être graves : isolement, anxiété, dépression ou difficultés d’accès aux droits.",

  lgbtRelatedResources: [
    {
      link: "/isolement",
      emoji: "🧍",
      label: "Isolement",
      description: "Quelles sont les causes de l'isolement et comment aider des personnes qui en souffrent ?"
    },
    {
      link: "/anxiete",
      emoji: "😶‍🌫️",
      label: "Anxiété",
      description: "Tu te sens souvent stressé·e ou anxieux·se ? Des solutions existent."
    },
    {
      link: "/depression",
      label: "Dépression",
      description: "Pour comprendre davantage la dépression et ses symptômes.",
      emoji: "🥺"
    }
  ],

  contactsLgbtTitle: "Contacts en cas de discrimination LGBT-phobe",

  centreLgbtiCard: {
    image: "/assets/centre_lgbti_lyon.png",
    title: "Centre LGBTI+ Lyon",
    subtitle: "Espace associatif et ressource locale",
    phone: "",
    email: "contact@centrelgbtilyon.org",
    hours: "Accueil & permanences : mardi et mercredi de 17h30 à 19h30, vendredi de 14h à 19h",
    textButton: "Voir le site",
    link: "https://www.centrelgbtilyon.org/",
    bgColor: "#ffffff",
    textColor: "#ec62f1ff"
  },

  lgbtExternalResources: [
    {
      link: "https://www.sos-homophobie.org/",
      imageSrc: "/assets/SOS_homophobie.jpg",
      label: "SOS Homophobie -",
      description: "Ligne d’écoute, d'aide et de signalement"
    },
    {
      link: "https://questionsexualite.fr/lutter-contre-les-violences-et-discriminations/la-violence-dans-la-societe/que-sont-les-lgbtphobies",
      imageSrc: "/assets/question_sexualite.png",
      label: "Question sexualité -",
      description: "pour s'informer sur les LGBTphobies"
    },
    {
      link: "https://www.instagram.com/rainbow.ecl?igsh=MWwzd2N5bXk3NGxscQ==",
      imageSrc: "/assets/rainbow.jpg",
      label: "Centrale Rainbow",
      description: "Club LGBTQIA+ de Centrale Lyon"
    }
  ],

  lgbtMoreTitle: "Pour aller plus loin",
  lgbtMoreText:
    "Chaque année, le 17 mai est la Journée internationale de lutte contre l’homophobie, la transphobie et la biphobie. De nombreuses initiatives associatives, universitaires et institutionnelles sont organisées pour sensibiliser et promouvoir l’égalité des droits.",

  lgbtMoreResources: [
    {
      link: "https://www.fondationemergence.org/nouvelles/lhistoire-du-17-mai-origines-et-evolution-de-la-journee-internationale-contre-lhomophobie-et-la-transphobie",
      imageSrc: "/assets/fondation_emergence.png",
      label: "Fondation émergence",
      description: "Histoire et importance de la Journée internationale contre l’homophobie et la transphobie"
    }
  ],

  /** Témoin / victime */
  temoinTitle: "Que faire en tant que victime/témoin de discrimination ?",
  temoinIntro:
    "Être confronté·e à une discrimination, que l’on en soit directement victime ou témoin, n’est jamais simple. On peut se sentir choqué·e, impuissant·e ou craindre de mal réagir. Pourtant, <b>il existe toujours des façons d’agir ou de chercher du soutien</b>. Même de petits gestes comptent : <b>parler de ce qui s’est passé</b>, <b>tendre une oreille attentive</b>, ou simplement <b>ne pas laisser la situation dans le silence</b>.",

  actionsPossibleTitle: "Actions possibles",
  actionsPossibleSubtitle: "Quelques étapes pour réagir face à une discrimination",
  actionsPossibleList: [
    {
      title: "Soutenir la personne",
      subtitle: "Ne laisse pas la victime isolée : même une parole bienveillante ou une écoute attentive peut briser le sentiment de solitude."
    },
    {
      title: "Collecter des preuves",
      subtitle: "Messages, photos, témoignages, dates et lieux : ces éléments sont utiles si la personne souhaite signaler les faits, même anonymement."
    },
    {
      title: "Utiliser les dispositifs internes",
      subtitle: "Infirmier·e, référent·e égalité, cellule de signalement du CROUS ou de l’établissement : ces relais existent pour accompagner les victimes et les témoins."
    },
    {
      title: "Se tourner vers des services externes",
      subtitle: "Défenseur des droits, associations spécialisées (SOS Homophobie, LICRA, etc.), lignes d’écoute : tu n’as pas à porter ça seul·e."
    },
    {
      title: "Agir si c’est possible",
      subtitle: "Quand tu te sens en sécurité, tu peux intervenir directement (ex. dire que ce n’est pas acceptable, détourner l’attention). Si tu ne peux pas, ton soutien en privé est déjà précieux."
    }
  ],

  temoinConclusion:
    "Rappelle-toi : <b>tu n’es jamais obligé·e de tout faire seul·e</b>. Le simple fait de ne pas fermer les yeux est déjà un premier pas important. Chacun·e peut agir à son échelle, et ensemble, ces petites actions construisent un environnement plus sûr et respectueux.",

  /** Sources */
  sourcesPrefix: "Sources:",
  sources: "CROUS, Ministry of Higher Education and Research, SOS Homophobie, national surveys, High Council for Equality (2024 report), Service-public.fr, Question Sexualité, Ministry of Education, Fondation Émergence, LICRA, Égalité contre le Racisme, LGBTI+ Centre Lyon"
};

export default fr;
