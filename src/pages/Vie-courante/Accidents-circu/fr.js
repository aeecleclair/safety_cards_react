const fr = {
  title: "Accidents de la route",

  navLinks: [
    { label: "Le problème", target: "probleme" },
    { label: "Prévention", target: "prevention" },
    { label: "Stages", target: "stages" },
  ],

  carte_ri_trefle: {
    image: "/assets/cartes/roi_trefle.png",
    title: "La carte R♣",
    shortText: "Accidents de la route : les jeunes en première ligne",
    longText: "Sur la route, tout peut basculer en une seconde. L’accident n’est pas seulement une question de vitesse ou d’inattention : c’est souvent une succession de petits relâchements, de décisions banales qui deviennent tragiques. Cette carte illustre ce moment fragile où la vie tient à un fil — un message lu, un regard détourné, un verre de trop. Elle rappelle que conduire, c’est porter sa vie et celle des autres entre ses mains. Derrière chaque statistique, il y a une histoire, un visage, une famille.",
    textButton: "⤢ Voir la carte",
    suit: "trefle"
  },

  jeunes: "Les jeunes de 18 à 24 ans ne représentent que 8 % de la population française, mais comptent pour 17 % des tués sur la route. Le pic d'accidents mortels intervient entre 6 et 18 mois après l'obtention du permis, avec un pic critique au 3e trimestre. La combinaison vitesse, alcool, drogue et fatigue multiplie les risques.",

  facteurs: "D'autres facteurs aggravants entrent en jeu : pression sociale entre amis, inexpérience, téléphone au volant ou conduite de nuit. À noter : les deux-roues représentent aussi une part importante des victimes chez les jeunes.",

  causesAccidents: [
    "<b>Vitesse excessive</b> (1ère cause d'accident chez les jeunes)",
    "<b>Conduite sous alcool ou stupéfiants</b>",
    "<b>Fatigue et somnolence</b> (surtout la nuit et sur autoroute)",
    "<b>Utilisation du téléphone au volant</b>",
    "<b>Manque d'expérience ou surestimation de ses capacités</b>",
    "<b>Refus de priorité, non-respect du Code de la route</b>",
    "<b>Conditions météorologiques</b> (pluie, verglas)",
    "<b>Mauvais état des routes secondaires</b>",
    "<b>Défaut d'équipement ou absence de ceinture de sécurité</b>",
    "<b>Conduite de deux-roues sans protection adaptée</b>"
  ],

  chiffresCirculation: [
    { number: "531", title: "jeunes tués", description: "sur la route en 2024 (18-24 ans)" },
    { number: "44%", title: "des accidents mortels", description: "chez les jeunes sont dus à la vitesse" },
    { number: "29%", title: "ont failli s'endormir", description: "au volant avant 24 ans" },
    { number: "3 431", title: "morts sur les routes", description: "en 2024 tous âges confondus (France entière)" },
    { number: "12%", title: "des conducteurs impliqués", description: "dans un accident mortel ont pris des stupéfiants" }
  ],

  ressourcesUtilestitle: "Pour aller plus loin",
  ressourcesUtilessubtitle: "Des contenus pour mieux comprendre et sensibiliser",
  ressourcesUtiles: [
    {
      link: "https://www.securite-routiere.gouv.fr/",
      label: "Sécurité routière",
      imageSrc: "/assets/gouv.png",
      description: "Informations officielles sur le code de la route, le permis et la sécurité routière"
    },
    {
      link: "https://www.securite-routiere.gouv.fr/les-medias/nos-campagnes-de-communication",
      label: "Campagnes de prévention",
      imageSrc: "/assets/min.png",
      description: "Les vidéos et affiches officielles de la sécurité routière"
    },
    {
      link: "https://www.facebook.com/SamLeConducteurEngage",
      label: "Sam, le conducteur désigné",
      imageSrc: "/assets/Sam_conducteur.jpg",
      description: "Suivez-le sur Facebook pour ses conseils pratiques"
    },
    {
      link: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2025-01/2025%2001%2030_ONISR_Accidentalit%C3%A9_Bilan_provisoire_2024_v8ter.pdf",
      label: "Chiffres 2024 – Sécurité routière",
      imageSrc: "/assets/observatoire_secu_routiere.png",
      description: "Bilan complet des accidents en France"
    }
  ],

  ressources_alcool: [
    {
      link: "/alcool",
      emoji: "🍺",
      label: "Consommation d'alcool",
      description: "Tu te questionnes quant à ta consommation d'alcool ?"
    }
  ],

  videoalcool: "Pour voir les conséquences de la consommation d'alcool au volant, tu peux regarder cette vidéo, une campagne choc faite par la sécurité routière :",

  resources_drogue: [
    {
        link: "/stup",
        emoji: "🎆",
        label: "Consommation de stupéfiants",
        description: "Pour connaître les conséquences de la prise de stupéfiants."
    }
    ],

    resources_sommeil: [
    {
        link: "/sommeil",
        emoji: "💤",
        label: "Sommeil",
        description: "Pour mieux comprendre les enjeux derrière un bon sommeil."
    }
    ],

    resources_groupe: [
    {
        link: "/groupe",
        emoji: "🙅",
        label: "Effet de groupe",
        description: "Qu'est-ce que l'effet de groupe ?"
    }
    ],

    prevention_txt1: "Adopter les bons réflexes peut sauver des vies. Conduire, c'est anticiper, s'adapter et renoncer au moindre doute. Être raisonnable, c'est être responsable pour soi et pour les autres.",
    
    conseilsPreventiontitle: "Conseils de sécurité routière",
    conseilsPreventionsubtitle: "À appliquer à chaque trajet",

    conseilsPreventionAlc: [
    {
        title: "Ne jamais conduire sous l'emprise d'alcool ou de drogues",
        subtitle: "Conduire sous l'emprise de l'alcool ou de drogues est extrêmement dangereux : cela altère les réflexes, la perception du danger et ralentit le temps de réaction.",
        details: [
        "En France, la limite légale d’alcool dans le sang dépend de l’expérience du conducteur. Pour les jeunes conducteurs en permis probatoire (moins de 3 ans de permis, ou 2 ans en cas de conduite accompagnée), le seuil est fixé à 0,2 g/L — soit l’équivalent d’un seul verre. Pour les conducteurs expérimentés, la limite est de 0,5 g/L, soit environ deux verres standards. Au-delà de ces seuils, les réflexes diminuent, la vision se trouble et le risque d’accident est multiplié par 8. Les sanctions sont sévères : retrait de 6 points, amende pouvant atteindre 4 500 €, suspension ou annulation du permis, et dans les cas les plus graves, peine de prison en cas d’accident corporel. L’alcool reste l’un des premiers facteurs d’accidents mortels, particulièrement chez les jeunes."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038954545/2023-05-01",
            imageSrc: "/assets/min.png",
            label: "Article R234-1 du Code de la route"
        }
        ]
    }],

    conseilsPreventionDodo: [
    {
        title: "Limiter les trajets de nuit ou longs trajets sans pause",
        subtitle: "La fatigue est une cause majeure d'accidents, en particulier lors des trajets de nuit ou prolongés sans pause. La vigilance diminue fortement, augmentant le risque d'endormissement au volant. Elle augmente ainsi le temps de réaction. 29 % des jeunes conducteurs ont déjà failli s'endormir.",
        details: [
        "Risques légaux : En cas d'accident dû à une somnolence avérée, la responsabilité du conducteur peut être engagée, pouvant entraîner sanctions pénales et civiles.",
        "Conseil pratique : faites une pause toutes les 2 heures au minimum."
        ]
    }],

    conseilsPreventionTel : [
    {
        title: "Ne touchez jamais votre téléphone",
        subtitle: "Utiliser un téléphone en conduisant multiplie par 3 le risque d'accident, car cela détourne l'attention et réduit la capacité de réaction.",
        details: [
        "Risques légaux : L'utilisation du téléphone au volant est interdite et sanctionnée par une amende de 135 € et un retrait de 3 points."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041910422",
            imageSrc: "/assets/min.png",
            label: "Article R412-6-1 du Code de la route"
        }
        ]
    }],

    conseilsPreventionVit : [
    {
        title: "Respecter toutes les limitations de vitesse",
        subtitle: "Le respect des limitations de vitesse est crucial car la vitesse excessive est la première cause de mortalité routière, notamment chez les jeunes conducteurs.",
        details: [
        "Risques légaux : Dépasser la vitesse autorisée expose à des amendes, retraits de points, voire suspension du permis en cas de dépassement important."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048533039",
            imageSrc: "/assets/min.png",
            label: "Article R413-14 du Code de la route"
        }
        ]
    }],

    conseilsPreventionGroup : [
    {
        title: "Éviter les effets de groupe",
        subtitle: "En situation de groupe, les comportements à risque se multiplient souvent par mimétisme. Il est important de garder son jugement et savoir dire non aux excès.",
        details: [
        "Risques légaux : Les infractions commises sous pression peuvent toujours entraîner des sanctions pénales et civiles."
        ]
    }],
    
    conseilsPreventionCeinture : [
    {
        title: "Portez toujours la ceinture",
        subtitle: "Le port de la ceinture de sécurité réduit fortement le risque de blessures graves en cas d'accident.",
        details: [
        "Risques légaux : Ne pas porter sa ceinture est sanctionné par une amende de 135 € et un retrait de 3 points."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037411287",
            imageSrc: "/assets/min.png",
            label: "Article R412-1 du Code de la route"
        }
        ]
    }
    ],


    stagesUtilestitle: "Formations externes disponibles",
    stagesUtilessubtitle: "Pour améliorer vos compétences et votre sécurité",
    stagesUtiles: [
    {
        link: "https://www.permisapoints.fr/stage-recuperation-points/",
        label: "Stage de récupération de points",
        imageSrc: "/assets/Permis_a_point.jpg",
        description:
        "Permet de récupérer jusqu'à 4 points sur le permis de conduire. Durée de 2 jours, accessible une fois par an."
    },
    {
        link: "https://www.service-public.fr/particuliers/vosdroits/F14208",
        label: "Stage obligatoire de sensibilisation à la sécurité routière",
        imageSrc: "/assets/min.png",
        description:
        "Imposé dans certains cas (décision judiciaire, composition pénale). Ne permet pas de récupérer de points."
    },
    {
        link: "https://gsformation.fr/parcours-alcool-au-volant-avec-karting/#",
        label: "Atelier de sensibilisation à l'alcool au volant",
        imageSrc: "/assets/Gs_formation.png",
        description:
        "Expérience pratique pour comprendre les efets de l'alcool sur la conduite."
    }
    ],

    stagesTitle: "Stages de sensibilisation et perfectionnement",

    stagesIntro1: "Participer à un stage peut sauver des points, améliorer ses réflexes et renforcer sa conscience des risques. Il existe plusieurs types de stages, adaptés à chaque besoin, qu'on soit jeune conducteur, contrevenant ou simplement soucieux de mieux maîtriser sa conduite.",

    stagesIntro2: "Les <b>stages de récupération de points</b> permettent de regagner jusqu'à 4 points sur le permis, en deux jours, sous certaines conditions. Ils sont accessibles une fois par an. Ces stages abordent la perception des risques, la vitesse, l'alcool, les drogues et les limites physiques du conducteur.",

    stagesIntro3: "Les <b>stages de sensibilisation à la sécurité routière</b>, eux, sont parfois <b>obligatoires</b> (sur décision judiciaire ou préfectorale) lorsqu'une infraction grave a été commise. Ils ne permettent pas de récupérer de points mais visent à éviter la récidive.",

    stagesIntro4: "Il existe aussi des <b>formations spécifiques</b> pour apprendre à conduire dans des conditions extrêmes (neige, verglas) ou pour simuler les effets de l'alcool sur la perception et les réflexes. Ces ateliers sont souvent proposés par des centres de formation ou des auto-écoles spécialisées.",

    stagesIntro5: "➜ Pour s'inscrire, il suffit de consulter un centre agréé ou de passer par des plateformes spécialisées. Certains stages sont pris en charge partiellement par les assurances ou la justice.",


  sourcesPrefix: "Sources :",
  sources: "ONISR (Rapport 2024), sécurité-routière.gouv.fr, Légifrance, Matmut, Direct Assurance, TF1 Info, France Info, DSR"
};

export default fr;
