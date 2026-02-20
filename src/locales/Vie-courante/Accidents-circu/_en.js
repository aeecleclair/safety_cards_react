const fr = {
  title: "Road Accidents",

  navLinks: [
    { label: "The Problem", target: "probleme" },
    { label: "Prevention", target: "prevention" },
    { label: "Courses", target: "stages" },
  ],

  carte_ri_trefle: {
    image: "/assets/cartes/roi_trefle.png",
    title: "Card R♣",
    shortText: "Road accidents: young people on the front line",
    longText: "On the road, everything can change in a second. Accidents aren’t just about speed or inattention: they often result from a series of small lapses, ordinary decisions that turn tragic. This card represents that fragile moment when life hangs by a thread : a message read, a glance away, one drink too many. It’s a reminder that driving means putting your life and others' lives in your hands. Behind every statistic is a story, a face, a family.",
    textButton: "⤢ View the card",
    suit: "trefle"
  },

  jeunes: "Young people aged 18 to 24 make up only 8% of the French population, but account for 17% of road deaths. The peak in fatal accidents occurs between 6 and 18 months after obtaining a license, with a critical peak in the third quarter. The combination of speed, alcohol, drugs, and fatigue significantly increases risk.",

  facteurs: "Other aggravating factors also play a role: social pressure among friends, inexperience, using a phone while driving, or night driving. Note: two-wheelers also represent a significant portion of young victims.",

  causesAccidents: [
    "<b>Excessive speed</b> (the leading cause of accidents among young drivers)",
    "<b>Driving under the influence of alcohol or drugs</b>",
    "<b>Fatigue and drowsiness</b> (especially at night and on highways)",
    "<b>Using a phone while driving</b>",
    "<b>Lack of experience or overestimating one’s abilities</b>",
    "<b>Ignoring right-of-way rules or traffic laws</b>",
    "<b>Weather conditions</b> (rain, ice)",
    "<b>Poor condition of secondary roads</b>",
    "<b>Improper equipment or not wearing a seatbelt</b>",
    "<b>Riding two-wheelers without proper protection</b>"
  ],

  chiffresCirculation: [
    { number: "531", title: "young people killed", description: "on the roads in 2024 (ages 18-24)" },
    { number: "44%", title: "of fatal accidents", description: "among young drivers are caused by speed" },
    { number: "29%", title: "almost fell asleep", description: "at the wheel before age 24" },
    { number: "3,431", title: "road deaths", description: "in 2024, all ages included (France)" },
    { number: "12%", title: "drivers involved", description: "in fatal accidents tested positive for drugs" }
  ],

  ressourcesUtilestitle: "Learn More",
  ressourcesUtilessubtitle: "Resources to better understand and raise awareness",
  ressourcesUtiles: [
    {
      link: "https://www.securite-routiere.gouv.fr/",
      label: "Road Safety",
      imageSrc: "/assets/gouv.png",
      description: "Official information on traffic laws, licenses, and road safety"
    },
    {
      link: "https://www.securite-routiere.gouv.fr/les-medias/nos-campagnes-de-communication",
      label: "Prevention Campaigns",
      imageSrc: "/assets/min.png",
      description: "Official road safety videos and posters"
    },
    {
      link: "https://www.facebook.com/SamLeConducteurEngage",
      label: "Sam, the Designated Driver",
      imageSrc: "/assets/Sam_conducteur.jpg",
      description: "Follow him on Facebook for practical tips"
    },
    {
      link: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2025-01/2025%2001%2030_ONISR_Accidentalit%C3%A9_Bilan_provisoire_2024_v8ter.pdf",
      label: "2024 Road Safety Statistics",
      imageSrc: "/assets/observatoire_secu_routiere.png",
      description: "Comprehensive report on accidents in France"
    }
  ],

  ressources_alcool: [
    {
      link: "/alcool",
      emoji: "🍺",
      label: "Alcohol Consumption",
      description: "Wondering about your alcohol consumption?"
    }
  ],

  videoalcool: "To see the consequences of drinking and driving, watch this shocking road safety campaign video:",

  resources_drogue: [
    {
        link: "/stup",
        emoji: "🎆",
        label: "Drug Use",
        description: "Learn about the consequences of using drugs."
    }
  ],

  resources_sommeil: [
    {
        link: "/sommeil",
        emoji: "💤",
        label: "Sleep",
        description: "Understand the importance of good sleep."
    }
  ],

  resources_groupe: [
    {
        link: "/groupe",
        emoji: "🙅",
        label: "Peer Pressure",
        description: "What is the peer effect?"
    }
  ],

  prevention_txt1: "Adopting the right habits can save lives. Driving is about anticipating, adapting, and avoiding any doubt. Being reasonable means being responsible for yourself and others.",
    
  conseilsPreventiontitle: "Road Safety Tips",
  conseilsPreventionsubtitle: "To apply on every journey",

  conseilsPreventionAlc: [
    {
        title: "Never drive under the influence of alcohol or drugs",
        subtitle: "Driving under the influence is extremely dangerous: it impairs reflexes, perception of danger, and reaction time.",
        details: [
        "In France, the legal blood alcohol limit depends on driving experience. For new drivers (less than 3 years of license, or 2 years in accompanied driving), the limit is 0.2 g/L (roughly one drink). For experienced drivers, the limit is 0.5 g/L (about two standard drinks). Beyond these limits, reflexes slow, vision blurs, and accident risk multiplies by 8. Penalties are severe: 6 points lost, fines up to €4,500, license suspension or revocation, and in serious cases, imprisonment for accidents causing injury. Alcohol remains one of the main factors in fatal accidents, especially among young drivers."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038954545/2023-05-01",
            imageSrc: "/assets/min.png",
            label: "Article R234-1 of the Traffic Code"
        }
        ]
    }
  ],

  conseilsPreventionDodo: [
    {
        title: "Limit night trips or long drives without breaks",
        subtitle: "Fatigue is a major cause of accidents, especially on long or night trips. Alertness drops, increasing the risk of falling asleep at the wheel and slowing reaction times. 29% of young drivers have nearly fallen asleep while driving.",
        details: [
        "Legal risk: Responsibility can be engaged in case of an accident due to drowsiness, leading to civil and criminal penalties.",
        "Practical tip: take a break at least every 2 hours."
        ]
    }
  ],

  conseilsPreventionTel: [
    {
        title: "Never touch your phone while driving",
        subtitle: "Using a phone while driving triples the risk of an accident because it distracts attention and reduces reaction ability.",
        details: [
        "Legal risk: Using a phone while driving is prohibited and punished with a €135 fine and 3 points off your license."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041910422",
            imageSrc: "/assets/min.png",
            label: "Article R412-6-1 of the Traffic Code"
        }
        ]
    }
  ],

  conseilsPreventionVit: [
    {
        title: "Respect all speed limits",
        subtitle: "Respecting speed limits is crucial, as excessive speed is the leading cause of road deaths, especially among young drivers.",
        details: [
        "Legal risk: Exceeding speed limits can result in fines, point deductions, and even license suspension for major violations."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048533039",
            imageSrc: "/assets/min.png",
            label: "Article R413-14 of the Traffic Code"
        }
        ]
    }
  ],

  conseilsPreventionGroup: [
    {
        title: "Avoid peer pressure effects",
        subtitle: "In group situations, risky behaviors often multiply through mimicry. It's important to stay aware and be able to say no to excess.",
        details: [
        "Legal risk: Infractions committed under pressure can still result in civil or criminal penalties."
        ]
    }
  ],
    
  conseilsPreventionCeinture: [
    {
        title: "Always wear your seatbelt",
        subtitle: "Wearing a seatbelt greatly reduces the risk of serious injury in an accident.",
        details: [
        "Legal risk: Not wearing a seatbelt is punished with a €135 fine and 3 points off your license."
        ],
        externalLinks: [
        {
            link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037411287",
            imageSrc: "/assets/min.png",
            label: "Article R412-1 of the Traffic Code"
        }
        ]
    }
  ],

  stagesUtilestitle: "Available External Courses",
  stagesUtilessubtitle: "To improve your skills and safety",
  stagesUtiles: [
    {
        link: "https://www.permisapoints.fr/stage-recuperation-points/",
        label: "Points Recovery Course",
        imageSrc: "/assets/Permis_a_point.jpg",
        description:
        "Recover up to 4 points on your driving license. Two-day course, available once per year."
    },
    {
        link: "https://www.service-public.fr/particuliers/vosdroits/F14208",
        label: "Mandatory Road Safety Awareness Course",
        imageSrc: "/assets/min.png",
        description:
        "Required in some cases (court decision, penalty composition). Does not recover points."
    },
    {
        link: "https://gsformation.fr/parcours-alcool-au-volant-avec-karting/#",
        label: "Alcohol Awareness Workshop",
        imageSrc: "/assets/Gs_formation.png",
        description:
        "Hands-on experience to understand the effects of alcohol on driving."
    }
  ],

  stagesTitle: "Awareness and Advanced Training Courses",

  stagesIntro1: "Participating in a course can save points, improve reflexes, and increase risk awareness. There are different types of courses tailored to your needs, whether you are a young driver, offender, or simply want to improve your driving skills.",

  stagesIntro2: "<b>Points recovery courses</b> allow you to regain up to 4 points on your license over two days under certain conditions. They are available once a year. These courses cover risk perception, speed, alcohol, drugs, and the physical limits of drivers.",

  stagesIntro3: "<b>Road safety awareness courses</b> are sometimes <b>mandatory</b> (by court or prefecture) after serious infractions. They do not recover points but aim to prevent recidivism.",

  stagesIntro4: "There are also <b>specific training sessions</b> to learn how to drive in extreme conditions (snow, ice) or simulate the effects of alcohol on perception and reflexes. These workshops are usually offered by training centers or specialized driving schools.",

  stagesIntro5: "➜ To register, simply consult an accredited center or use specialized platforms. Some courses are partially covered by insurance or the courts.",

  sourcesPrefix: "Sources:",
  sources: "ONISR (2024 Report), securite-routiere.gouv.fr, Legifrance, Matmut, Direct Assurance, TF1 Info, France Info, DSR"
};

export default fr;
