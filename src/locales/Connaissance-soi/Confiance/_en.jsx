import React from "react";

const en = {
  pageTitle: "Confidence and Self-esteem",
  navLinks: [
    { label: "What is self-esteem?", target: "definition" },
    { label: "How to build confidence?", target: "renforcer" },
    { label: "How to help someone?", target: "aider" },
  ],

  chiffres: [
    { number: "78%", title: "of young people", description: "say they have confidence, but..." },
    { number: "81%", title: "of young people", description: "sometimes give up ambitions for lack of confidence" },
    { number: "55%", title: "of young people", description: "would like workshops on stress and emotions" },
  ],

  card: {
    image: "/assets/cartes/as_carreau.png",
    title: "Card A♦",
    shortText: "Self-confidence: strengthen and support",
    longText:
      "When we look in the mirror, we often see our flaws before our strengths. Self-confidence is built by learning to recognize and value strengths while accepting limits. It takes time and patience, but it's essential to feel good in your own skin.",
    textButton: "⤢ Enlarge the card",
    suit: "carreau",
  },

  subtitleDefine: "Define self-confidence and self-esteem",
  definitionIntro:
    "People often confuse confidence and self-esteem, but these are different concepts:",
  bulletsDefinition: [
    <><b>Self-confidence</b> is the <b>belief in your ability to succeed at a specific task</b>. It is built through experience, practice and successes.</>,
    <><b>Self-esteem</b> is the <b>global, affective evaluation of oneself</b> — how I feel about myself.</>,
  ],
  estimePillarsText:
    <>Self-esteem rests on three pillars: <b>self-love</b> (accepting oneself), <b>self-vision</b> (seeing oneself realistically) and <b>confidence in one's abilities</b>. It evolves throughout life and can be weakened by hardships, failures and external judgments.</>,
  estimePillarsImage: "/assets/miroir.png",

  whyTitle: "Why confidence and self-esteem matter",
  whyText:
    "Confidence and self-esteem play a major role in student life. They influence motivation, class participation, the ability to take on challenges and psychological well-being. A solid self-esteem also helps manage stress, temporary failures and social relationships.",

  resources: [
    {
      link: "/anxiete",
      emoji: "😶‍🌫️",
      label: "Anxiety",
      description: "Do you often feel stressed or anxious? Solutions exist.",
    },
    {
      link: "/isolement",
      emoji: "🧍",
      label: "Isolation",
      description: "How to help isolated people who lack self-confidence?",
    },
  ],
  resourcesInfos: [
    {
      link:
        "https://www.filsantejeunes.com/je-nai-pas-confiance-en-moi-7065#:~:text=Le%20propre%20du%20complexe%20est,et%20la%20confiance%20en%20soi",
      label: "Fil Santé Jeunes",
      description: "An article to better understand self-confidence (FR)",
      imageSrc: "/assets/fsj.png",
    },
    {
      link: "https://www.psychologies.com/Moi/Se-connaitre/Estime-de-soi",
      label: "Psychologies - Self-esteem",
      description: "Articles to know yourself and self-love (FR)",
      imageSrc: "/assets/psychologies.jpg",
    },
  ],
  resourcesInfosTitle: "Useful resources",
  resourcesInfosSubtitle: "Sites to better understand and move forward",
  resourcesAide: [
    {
      link: "https://monsoutienpsy.ameli.fr/recherche-psychologue",
      label: "Mon soutien psy",
      description: "12 free sessions with a psychologist (FR website, EN sessions available)",
    },
  ],

  sectionReinforceTitle: "How to build self-confidence?",

  actionsSubtitle: "Small actions to progress",
  actionsIntro: "Improving confidence takes time. Here are a few levers:",
  actionsBullets: [
    <><b>Set realistic goals and congratulate yourself when you reach them, even small ones.</b></>,
    <><b>Talk to yourself as you would to a friend</b>: with kindness, encouragement and patience.</>,
    <><b>Do regular physical activity</b>. Sports or simply walking boost dopamine (hormone that can help well-being) and improve self-image.</>,
    <><b>Take care of yourself</b>. Good sleep, balanced diet and healthy habits help you feel good in body and mind. Sleeping well and eating healthy increase energy and mental clarity, making everyday confidence easier.</>,
    <><b>Allow yourself to make mistakes</b>. No one is perfect: making mistakes or failing occasionally does not mean you are ‘bad’. Each mistake is a chance to learn. Even with a bad grade, remember you are not your grade.</>,
    <><b>Learn to manage stress and emotions</b>. Simple breathing or relaxation techniques can calm anxiety (e.g., inhale slowly for 4 seconds, hold 4 seconds, exhale 4 seconds). Understanding and naming emotions (anger, sadness, etc.) helps regulate them.</>,
    <><b>Step out of your comfort zone with small challenges</b>. Each time you do something that scares you (say what you think, change your look, join a club), you gain confidence. For example, share your opinion in a small group or say no when you disagree.</>,
  ],

  helpIntro:
    "You don't have to go through this alone. Help exists, confidential and free:",
  helpContacts: [
    {
      image: "/assets/nightline_logo.png",
      title: "Nightline Lyon (EN)",
      subtitle: "Free night listening service for students",
      phone: "04 85 30 00 10",
      email: "",
      hours: "Every night, 9pm–2:30am",
      textButton: "Visit website",
      link: "https://www.nightline.fr/en/lyon",
    },
    {
      image: "/assets/logo-cosa.svg",
      title: "Comment on s'aime? (FR)",
      subtitle: "Professionals to listen and support you",
      hours: "Mon–Thu: 10am–12am, Fri–Sat: 10am–9pm",
      textButton: "Visit website",
      link: "https://commentonsaime.fr/",
      bgColor: "#f6a21e",
      textColor: "#ffffff",
    },
  ],

  videoUrl: "https://www.youtube.com/watch?v=EQUffQNqDQo&ab_channel=LouieMedia",

  helpListTitle: "Supporting someone with low confidence",
  helpListSubtitle: "How to accompany without pushing?",
  helpListItems: [
    {
      title: "Listen without judging",
      subtitle:
        "Give them the chance to talk about how they feel. Sometimes, simply letting the person express themselves (fears, complexes, doubts) is very helpful. Show you take their feelings seriously and that you are there for them.",
    },
    {
      title: "Highlight their strengths",
      subtitle:
        "Underline strengths and successes, even small ones. This can help rebalance their self-image.",
    },
    {
      title: "Suggest activities",
      subtitle:
        "Propose doing something together to improve morale: sports, cinema, a new creative project, etc. Group activities encourage self-esteem.",
    },
    {
      title: "Encourage seeking help",
      subtitle:
        "If you see they are suffering (isolation, sadness, low motivation…), encourage them to seek external help. For example, a nurse or a psychologist can advise. You can also refer them to Fil Santé Jeunes or Nightline.",
    },
  ],

  fsjContact: {
    image: "/assets/fsj.png",
    title: "Fil Santé Jeunes (FR)",
    subtitle: "Anonymous, free listening service for 12–25 year-olds",
    phone: "0 800 235 236",
    email: "",
    hours: "Every day, 9am–11pm",
    textButton: "Visit website",
    link: "https://www.filsantejeunes.com/",
  },

  avoidTitle: "What to avoid",
  avoidBullets: [
    "Do not minimize or mock fears or doubts.",
    "Avoid injunctions like ‘you must’, ‘you have to’, which increase pressure.",
    "Do not replace the person: encourage them to find their own solutions.",
    "Do not give unsolicited advice: listening is often more valuable than advising.",
  ],

  sourcesText:
    "Sources: UNICEF, Psychologies Magazine, Université de Lyon Health Portal, American Psychological Association.",
};

export default en;
