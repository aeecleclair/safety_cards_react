const en = {
  pageTitle: "Depression",
  navLinks: [
    { label: "What is depression?", target: "depression" },
    { label: "I am suffering", target: "victime" },
    { label: "I am worried about someone", target: "aidant" }
  ],
  depressionTitle: "What is depression?",
  carte4Pique: {
    image: "/assets/cartes/4_pique.png",
    title: "Card 4♠",
    shortText: "Depression: reacting as a victim",
    longText: "When we suffer from depression, we become like prisoners of invisible glasses. The world may continue to be joyful, bright, and filled with beautiful things, but everything seems bland, distant, inaccessible. Through this image, we understand the painful disconnection between external reality and the internal experience of a depressed person. Even surrounded by love, nature, or pleasant moments, a victim may only feel a deep void, an absence of emotion, a sensation of isolation. Depression does not erase the beauty of the world, but it prevents it from reaching the person. It modifies the perception of the person affected; it is a real disorder.",
    textButton: "⤢ Enlarge card",
  },
  symptomesTitle: "What are the symptoms of depression?",
  symptomesIntro: "A person is considered to be in a depressive state if they experience <b>at least 5 of these symptoms</b>, almost daily and <b>for more than 15 days</b>:",
  symptomesList: [
    "Depressed or irritable mood",
    "Loss of pleasure and interest in usually enjoyed activities", 
    "Loss of energy, fatigue",
    "Decreased self-esteem, unjustified guilt",
    "Suicidal or morbid thoughts",
    "Difficulty concentrating or making decisions",
    "Slowing of movements or agitation and inability to rest",
    "Sleep disturbances (loss or increase)",
    "Appetite disturbances (loss or excess)"
  ],
  chiffresIntro: "Depression is among the most frequent mental health disorders in young adults and adolescents. The following figures testify to this:",
  chiffresData: [
    { number: "1/5", title: "Number of French people", description: "who have experienced or will experience depression during their lives" },
    { number: "200", title: "Centrale Lyon students", description: "consult the nurse regarding their mental health each year" },
    { number: "20%", title: "of Centrale Lyon students", description: "evaluate their mental health as poor" },
  ],
  ressourcesInfosTitle: "Useful resources",
  ressourcesInfosSubtitle: "A few sites to visit to continue learning about depression",
  resourcesInfos: [
    { link: "https://masante.universite-lyon.fr/sante-mentale/", imageSrc: "/assets/logo_UDL.png", label: "Mental Health Portal", description: "from the University of Lyon: Advice, explanations, and resources" },
    { link: "https://www.filsantejeunes.com/", imageSrc: "/assets/fsj.png", label: "Fil Santé Jeunes", description: "Advice and articles on depression" }
  ],
  victimeTitle: "I am suffering",
  seFaireAiderTitle: "How to get help?",
  seFaireAiderText: "<b>You are not alone</b> and many initiatives are in place to listen and help you. If you wish, you can talk to family members or friends. You can also make an appointment with the <b>school nurse</b>, even if you just need to talk.",
  incitationEntourage: "<b>Surrounding yourself with support is a key step toward recovery.</b> Depression can make you feel like you are a burden to others or that no one can understand, but this is a false perception caused by the illness. Taking the first step and daring to say <i>'I'm not okay'</i> is extremely courageous and is often what breaks the vicious cycle. Whether it's a close friend, a family member, or a professional, do not stay alone with your thoughts.",
  contactInfirmerie: {
    image: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    title: "Infirmary",
    subtitle: "Centrale Lyon Infirmary",
    phone: "See information",
    email: "See information",
    hours: "Monday to Thursday: 7:30 AM - 3:30 PM, Friday: 7:30 AM - 3:00 PM",
    textButton: "See information",
    link: "https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990"
  },
  nightlineIntro: "Online services are also available. You can contact <b>Nightline</b>, a service that will put you in touch with <b>student volunteers</b> for free and anonymously, whether you need help or just need to vent.",
  contactNightline: {
    image: "/assets/nightline_logo.png",
    title: "Nightline Lyon",
    subtitle: "Free night listening service for Lyon students",
    phone: "04 85 30 00 10",
    hours: "Every evening, from 9:00 PM to 2:30 AM",
    textButton: "Visit website",
    link: "https://www.nightline.fr/lyon"
  },
  aideLongTermeTitle: "Looking for long-term psychological support?",
  aideLongTermeSubtitle: "Different solutions exist to help you track your mental health over time.",
  resourcesAide: [
    { link: "https://monsoutienpsy.ameli.fr/recherche-psychologue", label: "Mon Soutien Psy", description: "12 free sessions with a psychologist" },
    { link: "https://masante.universite-lyon.fr/sante-mentale/annuaire-sante-mentale/", imageSrc: "/assets/logo_UDL.png", label: "Directory", description: "from the University of Lyon: support, follow-up, emergencies..." },
    { link: "https://www.nightline.fr/soutien-etudiant", imageSrc: "/assets/nightline_logo.png", label: "Directory", description: "from Nightline: free help near you" }
  ],
  detresseTitle: "Are you in distress or having suicidal thoughts?",
  contact3114: {
    image: "/assets/3114.jpg",
    title: "3114",
    subtitle: "National suicide prevention number",
    phone: "3114",
    hours: "24/7",
    textButton: "Visit website",
    link: "https://3114.fr/"
  },
  aidantTitle: "I am worried about someone",
  aidantIntro: "If you are with someone in depression, your <b>support</b> can make all the difference. As a first aider, <b>it is normal that some days are more taxing than others.</b> Before stepping in to help others, take a moment to ensure you are able to listen with <b>kindness</b> and <b>without judgment</b>.",
  pssmTitle: "Mental Health First Aid Action Plan (ALGEE Plan)",
  pssmSubtitle: "How to help someone facing depressive disorders?",
  pssmItems: [
    { 
      title: "Approach the person, assess and assist", 
      subitems: [ 
        { title : "Approach the victim", subtitle: "Find a time and place where you both feel comfortable discussing. If the person is not willing to talk, do not force them; they may need time to open up: simply let them know you are available." },
        { title : "If you perceive signs of crisis", subtitle: "If suicidal thoughts or non-suicidal self-injury are mentioned during the conversation, the victim may be in crisis. It is then necessary to assist them. Refer to the Suicide and Self-Harm pages." }
      ] 
    },
    { title: "Listen actively and without judgment", subtitle: "Ask questions, rephrase their statements to ensure understanding, do not interrupt, look at them when they speak, do not express judgment, and avoid confrontation." },
    { title: "Comfort and inform", subtitle: "Reassure them that they can recover, remind them they are not alone in facing this type of situation, offer your help while taking care not to take over everything for them, brainstorm solutions together." },
    { title: "Encourage professional help", subtitle: "For example, the school nurse, a general practitioner, or a psychologist. If the victim does not want to see professionals, discuss this refusal. Regardless, let them know you remain at their disposal." },
    { title: "Provide information on other available resources", subtitle: "Encourage them to communicate with other friends or family members. You can also refer them to online resources, such as those on this page." },
  ],
  resourcesAerer: [
    { link: "/suicide", emoji : "🗣️", label: "Suicide", description: "How to react to someone mentioning suicidal thoughts?" },
    { link: "/automutil", emoji : "🦓", label: "Self-Harm", description: "How to react to someone who self-harms?" }
  ],

  visibiliteTitle: "Is depression always visible?",
  visibiliteText: "No, depression is not always synonymous with tears or total withdrawal. Some people suffer from <b>smiling depression</b>: they maintain an active social life and decent academic results while experiencing immense distress once alone. The contrast between their public image and private feelings is exhausting.",
  signesAttentionIntro: "Rather than dramatic symptoms, it is <b>behavioral changes</b> that should alert you:",
  signesAttentionList: [
    "Gradual withdrawal (answering messages less often, declining invitations)",
    "Unusual irritability or disproportionate emotional reactions",
    "Persistent fatigue that rest doesn't seem to relieve",
    "A change in lifestyle (sleep, diet, alcohol consumption)",
    "Self-deprecating remarks about themselves, even if said jokingly"
  ],
    carte6Carreau: {
    image: "/assets/cartes/6_carreau.png",
    title: "Card 6♦",
    shortText: "Depression: helping as a witness",
    longText: "This image confronts us with an essential truth: depression is not always visible. One can laugh, talk, play... while being deeply unwell inside. As a helper or simple witness, it is important to change your perspective. Appearances are deceptive and some smiles can be masks. Whether you are a parent, friend, colleague, or teacher, it is vital not to wait for obvious signals to be concerned and to always be present for those around you.",
    textButton: "⤢ Enlarge card",
  },
  formationTitle: "Going further: MHFA training",
  formationText: "MHFA (Mental Health First Aid) is the help provided to a person affected by a mental health disorder or crisis. First aid is given until professional help can be provided or until the crisis is resolved. It is the mental health equivalent of physical first aid steps. Open to everyone with no prerequisites, MHFA training aims to learn how to react to psychological distress: initiating contact, supporting, and guiding. The training is provided at Centrale by the nurse: if you are interested, you can contact her or check with the Peer Care association.",
  sourcesLabel: "Sources:",
  sourcesList: "Mental Health First Aid Manual for Youth, University of Lyon Health Portal, PAI 22: Quality of life in studies at ECL, CNAE"
};

export default en;