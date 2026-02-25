const fr = {

  title: "Risques Domestiques",

  navLinks: [
    { label: "Conseils clés", target: "resume-conseils" },
    { label: "Comprendre", target: "definition" },
    { label: "Prévenir", target: "prevention" },
    { label: "Agir en urgence", target: "urgence" }
  ],

  resumeTitle: "Conseils clés",

  conseilsUrgence: [
    "En cas d'intoxication, conservez l'emballage du produit en cause pour le montrer aux secours. Appelez le Centre Antipoison au 04 72 11 69 11.",
    "En cas de brûlure, refroidissez la zone avec de l'eau froide pendant au moins 10 minutes. Si nécessaire, appelez les pompiers au 18 ou le SAMU au 15.",
    "En cas d'étouffement, alternez entre 5 tapes dans le dos entre les ompoplates et 5 compressions abdominales (manœuvre de Heimlich) si vous savez effectuer ce geste. Si la situation ne s'améliore pas, appelez le SAMU au 15.",
    "En cas d'électrocution, coupez immédiatement le courant sans toucher la victime. Appelez les secours au 18 (pompiers) ou 112 (numéro d'urgence européen)."
  ],

  definitionTitle: "Comprendre les risques domestiques",

  popup: {
    image: "/assets/cartes/4_trefle.png",
    title: "La carte 4♣",
    shortText: "Risques d'incendie et accidents domestiques",
    longText:
      "Chaque geste peut comporter un risque : chuter dans les escaliers, se brûler avec un liquide chaud, s'intoxiquer avec un produit ménager, ou être victime d'une électrocution. L'image illustre en particulier le danger des incendies domestiques. Prévenir, sécuriser et réagir rapidement peut faire toute la différence en cas d'incident domestique.",
    textButton: "⤢ Agrandir la carte"
  },

  definitionText:
    "Les accidents domestiques représentent une cause majeure de blessures et de décès en France. Ils touchent particulièrement les enfants et les personnes âgées. Les principaux risques incluent les chutes, les brûlures, les intoxications, les étouffements, les noyades, les électrocutions et les incendies. Une vigilance constante et des mesures de prévention adaptées peuvent significativement réduire ces dangers.",

  typesRisques: [
    "Incendies domestiques",
    "Intoxications (produits ménagers, monoxyde de carbone)",
    "Brûlures (liquides chauds, appareils électriques)",
    "Chutes (escaliers, sols glissants)",
    "Électrocutions",
    "Étouffements (aliments, petits objets)",
    "Noyades (baignoire, piscine)",
    "Défenestrations (fenêtres non sécurisées)"
  ],

  chiffres: [
    { number: "20 000", title: "décès par an", description: "dus aux accidents de la vie courante en France" },
    { number: "75%", title: "des accidents domestiques", description: "sont des chutes, touchant majoritairement les personnes âgées" },
    { number: "600", title: "intoxications mortelles", description: "par médicaments chaque année" }
  ],

  preventionTitle: "Prévenir les accidents domestiques",

  preventionIntro:
    "Adopter des gestes simples au quotidien permet de sécuriser son domicile et de protéger ses proches. Voici quelques conseils pratiques :",

  preventionListTitle: "Conseils de prévention",
  preventionListSubtitle: "Mesures à mettre en place chez soi",

  conseilsPrevention: [
    {
      title: "Installer des détecteurs de fumée",
      subtitle: "Obligatoires dans tous les logements, ils permettent une alerte précoce en cas d'incendie."
    },
    {
      title: "Ne jamais laisser un plat sur le feu sans surveillance",
      subtitle: "La cuisine est la première cause d'incendies domestiques."
    },
    {
      title: "Ventiler régulièrement",
      subtitle: "Une bonne aération réduit les risques d'intoxication au monoxyde de carbone, surtout avec des appareils à combustion."
    },
    {
      title: "Éviter les surcharges de multiprises",
      subtitle: "Trop d'appareils branchés sur une seule prise peuvent provoquer une surchauffe et un incendie. Préférez des multiprises avec interrupteur et protection contre les surtensions."
    },
    {
      title: "Débrancher les appareils inutilisés",
      subtitle: "Chargeurs, bouilloires, plaques électriques... débranchez-les quand vous ne les utilisez pas pour éviter tout risque de court-circuit ou de chauffe."
    },
    {
      title: "Ne jamais bloquer les sorties",
      subtitle: "Gardez les portes d'entrée et les fenêtres dégagées. En cas d'incendie ou d'évacuation, chaque seconde compte."
    },
    {
      title: "Stocker les produits ménagers séparément des aliments",
      subtitle: "Évitez les intoxications accidentelles en ne mettant jamais de produits d'entretien près de la nourriture ou dans des contenants alimentaires."
    },
    {
      title: "Utiliser des rallonges en bon état",
      subtitle: "Ne les faites pas passer sous les tapis ou les meubles lourds, et évitez les rallonges endommagées ou trop longues."
    }
  ],

  ressourcesTitle: "Ressources complémentaires",
  ressourcesSubtitle: "Sites officiels pour en savoir plus",

ressourcesUtiles : [
  {
    link: "https://www.pompiers.fr/grand-public/prevention-des-risques",
    label: "Pompiers de France",
    description: "Conseils pour prévenir les accidents domestiques",
    imageSrc: "/assets/logo-sp.jpg"

  },
  {
    link: "https://www.sdis38.fr/61-les-accidents-domestiques.htm",
    label: "SDIS 38",
    description: "Informations sur les principaux risques à domicile"
  },
  {
    link: "https://www.rhone.gouv.fr/Politiques-publiques/Securite-et-protection-de-la-population/La-securite-civile/Les-risques-domestiques",
    label: "Préfecture du Rhône",
    description: "Recommandations de la sécurité civile",
    imageSrc: "/assets/rep-logo.png"
  }
],

  urgenceTitle: "Agir en cas d'urgence",
  
  evacuationTitle: "Procédures en cas d'évacuation",
  evacuationSubtitle: "Consignes propres aux élèves et personnels de Centrale Lyon",
ressourcesFeu : [
  {
    link: "https://campus.ec-lyon.fr/securite-incendie-et-batiment-4613.kjsp?RH=1460472206937",
    label: "Centrale Lyon - Sécurité Incendie",
    description: "Consignes spécifiques aux élèves et personnels de l'école",
    imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
  },
],
  urgenceIntro:
    "En cas d'accident domestique, il est crucial de réagir rapidement et efficacement. Voici les numéros d'urgence à connaître :",

  cardPompier: {
    title: "Pompiers",
    subtitle: "Incendie, accident, secours",
    phone: "18",
    textButton: "Voir le site",
    link: "https://www.pompiers.fr",
    bgColor:"#ffffff",
    textColor:"#f5871f"
  },

  
  cardSAMU: {
    title: "SAMU",
    subtitle: "Urgence médicale",
    phone: "15",
    textButton: "Voir le site",
    link: "https://www.samu-urgences-de-france.fr/fr/",
    bgColor:"#ffffff",
    textColor:"#ee3624"
  },

  
  cardPoliceSecours: {
    title: "Police Secours",
    subtitle: "Trouble à l'ordre public",
    phone: "17",
    textButton: "Voir le site",
    link: "https://www.police-nationale.interieur.gouv.fr",
    bgColor:"#ffffff",
    textColor:"#126782"
  },


  cardNumeroEuropeen: {
    title: "Numéro européen",
    subtitle: "Urgences en Europe",
    phone: "112",
    textButton: "Voir le site",
    link: "https://digital-strategy.ec.europa.eu/fr/policies/112",
    bgColor:"#ffffff",
    textColor:"#587b37"
  },


  cardSourdMalentendant: {
    title: "Urgence pour sourds et malentendants",
    subtitle: "SMS, fax, tchat, visiophonie",
    phone: "114",
    textButton: "Voir le site",
    link: "https://www.info.urgence114.fr/prehome/",
    bgColor:"#ffffff",
    textColor:"#737057"
  },
  cardAntipoison: {
    title: "Centre Antipoison",
    subtitle: "Intoxications",
    phone: "04 72 11 69 11",
    textButton: "Voir le site",
    link: "https://www.centres-antipoison.net",
    bgColor:"#ffffff",
    textColor:"#000000"
  },



  sourcesPrefix: "Sources :",
  sources:
    "Pompiers de France, SDIS 38, Préfecture du Rhône, Santé publique France"
};

export default fr;