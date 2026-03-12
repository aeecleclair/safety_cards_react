const fr = {

  title: "Home hazards",

  navLinks: [
    { label: "Key Advice", target: "resume-conseils" },
    { label: "Understanding", target: "definition" },
    { label: "Prevention", target: "prevention" },
    { label: "Act in an Emergency", target: "urgence" }
  ],

  resumeTitle: "Key Advice",

  conseilsUrgence: [
    "In case of <b>poisoning</b>, keep the product packaging involved to show to emergency services. Call the <b>Poison Control Center at +33 4 72 11 69 11</b>.",
    "In case of <b>burns</b>, cool the area with cold water for at least 10 minutes. If necessary, call the <b>fire brigade at 18</b> or <b>emergency medical services at 15</b>.",
    "In case of <b>choking</b>, alternate between 5 back blows between the shoulder blades and 5 abdominal thrusts (Heimlich maneuver) if you know how to perform it. If the situation does not improve, call <b>emergency medical services at 15</b>.",
    "In case of <b>electrocution</b>, immediately cut off the power without touching the victim. Call emergency services at <b>18 (fire brigade)</b> or <b>112 (European emergency number)</b>."
  ],

  definitionTitle: "Understanding home hazards",

  popup: {
    image: "/assets/cartes/4_trefle.png",
    title: "Card 4♣",
    shortText: "Fire hazards and domestic accidents",
    longText:
      "Every action can involve a risk: falling down the stairs, getting burned by hot liquid, being poisoned by a household product, or suffering electrocution. The image particularly illustrates the danger of domestic fires. Preventing, securing, and reacting quickly can make all the difference in the event of a household incident.",
    textButton: "⤢ Enlarge the card"
  },

  definitionText:
    "Domestic accidents are a major cause of injuries and deaths in France. They particularly affect children and the elderly. The main risks include falls, burns, poisonings, choking, drownings, electrocutions, and fires. Constant vigilance and appropriate preventive measures can significantly reduce these dangers.",

  typesRisques: [
    "Domestic fires",
    "Poisoning (household products, carbon monoxide)",
    "Burns (hot liquids, electrical appliances)",
    "Falls (stairs, slippery floors)",
    "Electrocutions",
    "Choking (food, small objects)",
    "Drownings (bathtub, swimming pool)",
    "Falls from windows (unsecured windows)"
  ],

  chiffres: [
    { number: "20,000", title: "deaths per year", description: "due to everyday life accidents in France" },
    { number: "75%", title: "of domestic accidents", description: "are falls, mainly affecting elderly people" },
    { number: "600", title: "fatal poisonings", description: "from medication each year" }
  ],

  preventionTitle: "Preventing domestic accidents",

  preventionIntro:
    "Adopting simple daily habits helps make your home safer and protect your loved ones. Here are some practical tips:",

  preventionListTitle: "Prevention Tips",
  preventionListSubtitle: "Measures to implement at home",

  conseilsPrevention: [
    {
      title: "Install smoke detectors",
      subtitle: "Mandatory in all homes, they provide early warning in case of fire."
    },
    {
      title: "Never leave cooking unattended",
      subtitle: "The kitchen is the leading cause of domestic fires."
    },
    {
      title: "Ventilate regularly",
      subtitle: "Proper ventilation reduces the risk of carbon monoxide poisoning, especially with combustion appliances."
    },
    {
      title: "Avoid overloading power strips",
      subtitle: "Too many devices plugged into a single outlet can cause overheating and fire. Use power strips with switches and surge protection."
    },
    {
      title: "Unplug unused appliances",
      subtitle: "Chargers, kettles, electric cooktops... unplug them when not in use to avoid any risk of short circuits or overheating."
    },
    {
      title: "Never block exits",
      subtitle: "Keep entrance doors and windows clear. In case of fire or evacuation, every second counts."
    },
    {
      title: "Store household products separately from food",
      subtitle: "Prevent accidental poisoning by never placing cleaning products near food or in food containers."
    },
    {
      title: "Use extension cords in good condition",
      subtitle: "Do not run them under carpets or heavy furniture, and avoid damaged or excessively long extension cords."
    }
  ],

  ressourcesTitle: "Additional Resources",
  ressourcesSubtitle: "Official websites to learn more",

  ressourcesUtiles : [
    {
      link: "https://www.pompiers.fr/grand-public/prevention-des-risques",
      label: "French Firefighters",
      description: "Advice on preventing domestic accidents",
      imageSrc: "/assets/logo-sp.jpg"
    },
    {
      link: "https://www.sdis38.fr/61-les-accidents-domestiques.htm",
      label: "SDIS 38",
      description: "Information on the main household risks"
    },
    {
      link: "https://www.rhone.gouv.fr/Politiques-publiques/Securite-et-protection-de-la-population/La-securite-civile/Les-risques-domestiques",
      label: "Rhône Prefecture",
      description: "Civil security recommendations",
      imageSrc: "/assets/rep-logo.png"
    }
  ],

  urgenceTitle: "What to Do in an Emergency",
  
  evacuationTitle: "Evacuation Procedures",
  evacuationSubtitle: "Instructions specific to students and staff of Centrale Lyon",

  ressourcesFeu : [
    {
      link: "https://campus.ec-lyon.fr/securite-incendie-et-batiment-4613.kjsp?RH=1460472206937",
      label: "Centrale Lyon - Fire Safety",
      description: "Specific instructions for students and staff of the school",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
    },
  ],

  urgenceIntro:
    "In case of a domestic accident, it is crucial to react quickly and effectively. Here are the emergency numbers you should know:",

  cardPompier: {
    title: "Firefighters",
    subtitle: "Fire, accident, rescue",
    phone: "18",
    textButton: "Visit website",
    link: "https://www.pompiers.fr",
    bgColor:"#ffffff",
    textColor:"#f5871f"
  },

  cardSAMU: {
    title: "Emergency medical services",
    subtitle: "Medical emergency",
    phone: "15",
    textButton: "Visit website",
    link: "https://www.samu-urgences-de-france.fr/fr/",
    bgColor:"#ffffff",
    textColor:"#ee3624"
  },

  cardPoliceSecours: {
    title: "Police",
    subtitle: "Public order disturbance",
    phone: "17",
    textButton: "Visit website",
    link: "https://www.police-nationale.interieur.gouv.fr",
    bgColor:"#ffffff",
    textColor:"#126782"
  },

  cardNumeroEuropeen: {
    title: "European emergency number",
    subtitle: "Emergencies in Europe",
    phone: "112",
    textButton: "Visit website",
    link: "https://digital-strategy.ec.europa.eu/fr/policies/112",
    bgColor:"#ffffff",
    textColor:"#587b37"
  },

  cardSourdMalentendant: {
    title: "Emergency for deaf and hard of hearing",
    subtitle: "SMS, fax, chat, video call",
    phone: "114",
    textButton: "Visit website",
    link: "https://www.info.urgence114.fr/prehome/",
    bgColor:"#ffffff",
    textColor:"#737057"
  },

  cardAntipoison: {
    title: "Poison control center",
    subtitle: "Poisoning",
    phone: "04 72 11 69 11",
    textButton: "Visit website",
    link: "https://www.centres-antipoison.net",
    bgColor:"#ffffff",
    textColor:"#000000"
  },

  sourcesPrefix: "Sources:",
  sources:
    "French Firefighters, SDIS 38, Rhône Prefecture, Santé Publique France"
};

export default fr;