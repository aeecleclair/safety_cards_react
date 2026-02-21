// en.js — English text constants for the Sedentarité page
// Keys match perfectly with fr.js

const en = {
  // Navigation / summary
  navLinks: [
    { label: "What is sedentary behavior?", target: "sedentarite" },
    { label: "I want to be more active", target: "etudiant" }
  ],

  // Main titles
  titrePageSedentarite: "Sedentary Behavior",
  sommaireSedentarite1: "What is sedentary behavior?",
  sommaireSedentarite2: "I want to be more active",

  // Popup card
  carte8piqueTitle: "8♠ card",
  carte8piqueShort: "Fighting sedentary habits",
  carte8piqueLong:
    "Screens are the main cause of sedentary behavior among young people. Try not to stay passive scrolling through Instagram or TikTok. Go outside for some fresh air, take a walk alone or with friends, or practice a regular physical activity.",
  carte8piqueButton: "⤢ Enlarge the card",

  // Definition
  textDefinitionSedentarite:
    "Sedentary behavior refers to the time spent sitting or lying down outside of sleeping hours. It differs from physical inactivity: you can do sports and still be sedentary if you spend long hours sitting at your desk. It is characterized by low energy expenditure (e.g., desk work, screen time, passive transportation).",

  // Risks (BulletList)
  risquesTitre: "What are the risks?",
  risquesList: [
    "Cardiovascular diseases (hypertension, heart attack), type 2 diabetes",
    "Cancers (colon, breast…) linked to long periods spent sitting",
    "Overweight and obesity, independently of diet",
    "Musculoskeletal disorders (back pain, joint pain)",
    "Impact on mental health: anxiety, low mood, fatigue",
    "Cardiac alterations observed in very sedentary young adults"
  ],

  // Key figures
  chiffresIntro: "Some key figures:",
  chiffresSedentarite: [
    {
      number: "7h+",
      title: "Average daily sitting time",
      description: "Among students and young adults in France"
    },
    {
      number: "30%",
      title: "of young people",
      description: "Do not meet minimum physical activity recommendations"
    },
    {
      number: "150 min",
      title: "of moderate physical activity",
      description: "per week to stay healthy (WHO recommendation)"
    }
  ],

  // Information resources (ExternalLinkBlock)
  ressourcesInfos: [
    {
      link: "https://www.anses.fr/fr/content/inactivite-physique-et-sedentarite-chez-les-jeunes-lanses-alerte-les-pouvoirs-publics",
      imageSrc: "/assets/ANSES.png",
      label: "ANSES",
      description: "Reports and recommendations on youth physical activity"
    },
    {
      link: "/sport",
      emoji: "⛹️",
      label: "Physical health & sport",
      description: "Learn more about sports and health"
    }
  ],

  // “I want to be more active” — screens
  deconnexionTitre: "Disconnecting from screens and social media",
  deconnexionTexte:
    "Time spent on screens (computer, smartphone, TV) is a major factor of sedentary behavior. On average, young people aged 16–24 spend more than 7 hours per day in front of a screen, much of it for leisure (social media, streaming, video games).",

  // Screen-use resources
  ecrans: [
    {
      link: "/add_reseaux",
      emoji: "📱",
      label: "Want to reduce your screen time?",
      description: "Tips and resources to help you"
    }
  ],

  // Advice / numbered list
  conseilsTitle: "Simple tips to reduce sedentary behavior",
  conseilsSubtitle: "Inspired by WHO and ANSES recommendations",
  conseilsBouger: [
    {
      title: "Reduce sitting time",
      subtitle:
        "Take an active break every 30 to 60 minutes: stand up, walk, stretch."
    },
    {
      title: "Add movement into your daily routine",
      subtitle:
        "Take the stairs, walk or bike for short trips, suggest active outings with friends."
    },
    {
      title: "Stay active while working",
      subtitle:
        "Study standing from time to time, use an adjustable desk if possible, or do quick exercises between chapters."
    },
    {
      title: "Set progressive goals",
      subtitle:
        "Start with 10 minutes of activity a day and gradually aim for 150 minutes per week, as recommended by the WHO."
    },
    {
      title: "Limit leisure screen time",
      subtitle:
        "Reduce the time you spend sitting in front of screens, especially before bedtime."
    }
  ],

  // WHO recommendations
  recommandationOMSTexte:
    "The WHO recommends 150–300 minutes of moderate activity per week (brisk walking, easy cycling, dancing) or 75–150 minutes of intense activity (running, team sports). For young people aged 11–17, at least 60 minutes of daily physical activity is recommended, along with limiting prolonged sitting time.",

  // Activity ideas
  ideesActivitesTitre: "Some activity ideas",
  ideesActivitesTexte:
    "If you are at Centrale, you can take advantage of the campus sports facilities (tennis and padel courts, gym, etc.) outside mandatory PE hours. Near the campus, you can walk through the Bois de Serre to enjoy some nature. In Lyon, many events are organized regularly. You can find the main ones through the first two resources below. If you need inspiration, explore activity ideas on the Manger Bouger website.",

  // External resources
  resources_sortir: [
    {
      link: "https://www.lyoncampus.com/",
      imageSrc: "/assets/logo_lyon_campus.png",
      label: "Lyon Campus",
      description: "Ideas for going out and getting involved as a student in Lyon"
    },
    {
      link: "https://www.instagram.com/culturel_lyon/",
      imageSrc: "/assets/culturel_lyon.jpg",
      label: "Culturel Lyon",
      description: "Weekend event suggestions across the Lyon metro area"
    },
    {
      link: "https://www.mangerbouger.fr/",
      imageSrc: "/assets/MangerBouger.png",
      label: "Manger Bouger",
      description: "Activity ideas to explore"
    }
  ],

  // Sources
  sourcesSedentarite:
    "Sources: WHO (2020), Santé publique France (2024), ANSES (2022), Observatoire Prévention (Montréal), Université Laval, Le Monde (2024)."
};

export default en;
