import React from "react";

const en = {
  pageTitle: "Isolation",
  navLinks: [
    { label: "Understand loneliness", target: "comprendre" },
    { label: "Break isolation", target: "rompre" },
    { label: "Need help", target: "aide" },
    { label: "Help an isolated person", target: "aider" },
  ],

  chiffres: [
    { number: "28%", title: "of French students", description: "say they often or always feel alone (IFOP, 2024)" },
    { number: "74.2%", title: "of students", description: "work in groups at least once a month" },
    { number: "55.8%", title: "of international students", description: "attend Centrale parties less than once per quarter" },
  ],

  card: {
    image: "/assets/cartes/2_carreau.png",
    title: "Card 2♦",
    shortText: "Student isolation",
    longText:
      "This feeling of isolation can stem from various factors such as a change of environment, academic pressure, or difficulty forming new social ties. Understanding the causes and manifestations of isolation is essential to address it effectively. As a student, don't hesitate to approach others if you notice they are isolated : a simple gesture, a simple question can make a difference.",
    textButton: "⤢ Enlarge the card",
    suit: "carreau",
  },

  understandTitle: "Understand student loneliness",
  whyTitle: "Why is it so common?",
  whyBullets: [
    <><b>New living environment and distance from family</b></>,
    <><b>Intense workload</b> at certain times reduces social time</>,
    <><b>Different language & culture</b> for international students</>,
    <><b>Excessive screen use and sedentary habits</b></>,
    <><b>Lack of self-confidence or shyness</b></>,
  ],
  confResources: [
    {
      link: "/conf",
      label: "Confidence & Self-esteem",
      description: "Ideas to build confidence and assert yourself",
      emoji: "💛",
    },
  ],
  studyNote:
    "The 2024 IFOP study shows that more than a quarter of students report feeling always or often isolated. Internal data confirm this trend, especially among international students and during gap years.",

  feelAloneTitle: "Do you feel alone for no apparent reason?",
  feelAloneText:
    "Loneliness can be a symptom of deeper distress (stress, anxiety, depression). If you feel other signs (sadness, fatigue, irritability, sleep or appetite disturbances), don't hesitate to consult a health professional.",
  depressionResources: [
    {
      link: "/depression",
      label: "Depression",
      description:
        "Loss of interest, sadness, fatigue, sleep or appetite troubles?",
      emoji: "🥺",
    },
    {
      link: "/anxiete",
      label: "Anxiety",
      description:
        "Feeling tense, worried, difficulty concentrating or sleeping?",
      emoji: "😶‍🌫️",
    },
  ],

  breakTitle: "Break isolation",
  breakIntro:
    "Reconnecting doesn't mean becoming extroverted. It means introducing small, regular interactions into your schedule. Here's a gradual action plan:",
  breakStepsTitle: "5 steps to break loneliness",
  breakSteps: [
    { title: "Identify", subtitle: "Recognize situations where you feel isolated (eating alone, avoiding parties...) and note them over a week" },
    { title: "Set a micro-goal", subtitle: "For example: have lunch once this week with a classmate or attend an association event" },
    { title: "Gradually expose yourself", subtitle: "Choose supportive environments: association drop-ins, library, Skylab, etc." },
    { title: "Ask for backup", subtitle: "Your mentor, existing friends, the nurse or social worker can support you" },
    { title: "Maintain the connection", subtitle: "Mandatory sports, association mixers or regularly organized events (floor dinners, Bazar Souk...) are good ways to maintain connections" },
  ],
  socialTitle: "Go out, meet, share",
  socialSubtitle:
    "Use these platforms to find events or welcoming places near you:",
  socialResources: [
    {
      link: "https://afev.org/en",
      imageSrc: "/assets/logo-afev.svg",
      label: "Map of student third places",
      description: "Meeting spaces across France (EN)",
    },
    {
      link: "https://www.instagram.com/culturel_lyon/",
      imageSrc: "/assets/culturel_lyon.jpg",
      label: "Culturel Lyon",
      description: "Weekend outing ideas in the metropolitan area (FR)",
    },
  ],

  helpTitle: "Need to talk?",
  helpIntro:
    "Talking about how you feel is often the first step to feeling better. These services are free, anonymous, and available 7 days a week:",
  helpContacts: [
    {
      image: "/assets/nightline_logo.png",
      title: "Nightline Lyon (EN)",
      subtitle: "Night listening service by and for students",
      phone: "04 85 30 00 10",
      hours: "Every night from 9:00pm to 2:30am",
      textButton: "Visit website",
      link: "https://www.nightline.fr/en/lyon",
    },
    {
      image: "/assets/fsj.png",
      title: "Fil Santé Jeunes (FR)",
      subtitle: "Anonymous & free listening (ages 12–25)",
      phone: "0 800 235 236",
      hours: "Every day from 9am to 11pm",
      textButton: "Visit website",
      link: "https://www.filsantejeunes.com/",
    },
  ],

  helpOthersTitle: "Help an isolated person",
  helpOthersIntro:
    "Do you know someone who seems isolated? Here are some tips to help them (re)connect:",
  helpOthersBullets: [
    <><b>Check in regularly</b> : even a simple message can make a difference.</>,
    <><b>Suggest activities together</b>: an outing, a coffee, or even a video call.</>,
    <><b>Listen without judging</b> : let them express their feelings.</>,
    <><b>Encourage participation in events or joining groups</b>.</>,
    <><b>Be patient</b> : social integration can take time, and everyone moves at their own pace.</>,
  ],

  sourcesText:
    "Sources: IFOP 2024, Student Life Quality at ECL, UDL Health Portal, AFEV, Nightline Lyon, Fil Santé Jeunes.",
};

export default en;