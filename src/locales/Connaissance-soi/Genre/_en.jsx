import React from "react";

const en = {
  pageTitle: "Gender identity",
  navLinks: [
    { label: "What is gender identity?", target: "definition" },
    { label: "For concerned persons", target: "concernes" },
    { label: "How to support a loved one?", target: "accompagner" },
  ],

  chiffresIdentite: [
    {
      number: "1–2",
      title: "students per cohort",
      description: "start a transition at Centrale Lyon (local estimate)",
    },
    {
      number: "8.8%",
      title: "have faced discrimination",
      description: "related to gender or sexual orientation on campus",
    },
  ],

  card: {
    image: "/assets/cartes/8_coeur.png",
    title: "Card 8♠",
    shortText: "Raising awareness about misgendering",
    longText:
      "At Centrale, nicknames are commonly used to address people. Everyone makes the effort to remember first names and nicknames, and uses one or the other depending on context. This card asks: if we make the effort to remember names, why not also the chosen pronouns and names of trans or non-binary people? Misgendering means addressing someone with pronouns or a name that do not match their gender identity. It can be unintentional (forgetfulness, mistake) or intentional (disrespect, discrimination). Misgendering can cause deep discomfort and reinforce feelings of isolation. By respecting chosen pronouns and names, we help create an inclusive, caring environment for all.",
    textButton: "⤢ Enlarge the card",
  },

  definitionText:
    <><b>Gender identity</b> is the intimate, deep and lasting sense of being a man, a woman, both, neither, or changing over time. It is distinct from <strong>sex assigned at birth</strong> (based on anatomical characteristics), <strong>gender expression</strong> (how a person presents: clothing, voice, behavior), and <strong>sexual orientation</strong> (who you feel attracted to).</>,

  examplesBullets: [
    <><b>Cisgender:</b> identity aligns with sex assigned at birth.</>,
    <><b>Transgender (trans):</b> identity differs from sex assigned at birth.</>,
    <><b>Non-binary:</b> does not fit solely in "man" or "woman" categories. Identities may fluctuate (genderfluid) or feel "beyond" masculine/feminine.</>,
    <><b>Agender:</b> does not feel affiliation to any gender.</>,
    <>Other terms exist (androgynous, queer, etc.) to describe varied gender experiences. These identities have always existed and reflect the diversity of human lives.</>,
  ],
  examplesTitle: "Examples of gender identities",

  resourcesOrientation: [
    {
      link: "/sex_orient",
      label: "Sexual orientation",
      description: "Learn more about sexual orientation and its nuances.",
      emoji: "🏳️‍🌈 ",
    },
  ],

  dysphoriaTitle: "Gender dysphoria",
  dysphoriaText:
    "Gender dysphoria refers to the discomfort or distress felt when one's identity is not recognized or the body does not match how one feels. The term is generally used in medical contexts to describe psychological distress, with symptoms close to anxiety or depression. Not all trans or non-binary people experience gender dysphoria.",
  dysphoriaResources: [
    {
      link: "/depression",
      label: "Depression",
      description: "Understand depression and its symptoms.",
      emoji: "🥺",
    },
    {
      link: "/anxiete",
      label: "Anxiety",
      description: "Understand anxiety and its symptoms.",
      emoji: "😶‍🌫️",
    },
  ],

  quote1: "Gender is not what we see, but what we feel.",

  learnMoreTitle: "Learn more",
  learnMoreSubtitle: "Resources to go deeper",
  learnMoreResources: [
    {
      link: "https://wikitrans.co/",
      imageSrc: "/assets/wikitrans.svg",
      label: "WikiTrans",
      description: "Many articles and testimonies to learn more (FR)",
    },
    {
      link: "https://www.outrans.org/ressources/brochures-doutrans/",
      imageSrc: "/assets/outrans.png",
      label: "OUTrans",
      description: "Brochures and self-support guides (hormones, journeys, surgeries...) (FR)",
    },
    {
      link: "https://questionsexualite.fr/connaitre-son-corps-et-sa-sexualite/la-diversite-de-genre/qu-est-ce-que-l-identite-de-genre",
      imageSrc: "/assets/question_sexualite.png",
      label: "Question Sexualité",
      description: "Learn more about gender identity (FR)",
    },
  ],

  concernsIntro:
    "If you are questioning your gender: first, take your time. There is no single test and your feelings are the best compass.",
  concernsLinks: [
    { link: "https://wikitrans.co/2019/01/01/comment-savoir-si-je-suis-trans/", label: "How do I know if I am trans?", description: "To help you reflect on your gender (FR)", imageSrc: "/assets/wikitrans.svg" },
    { link: "https://www.la-clinique-e-sante.com/blog/sexualite/identite-genre-questions", label: "Gender identity", description: "10 questions to help you move forward (FR)" },
  ],

  knowExperimentBullets: [
    <><b>Get to know yourself:</b> read testimonies, practical guides and FAQs.</>,
    <><b>Try:</b> gradual changes (preferred name with friends, clothing changes, pronouns).</>,
    <><b>Listen to yourself:</b> note what brings you well-being (gender euphoria: well-being when perceived as you feel) and what makes you uncomfortable.</>,
  ],
  knowExperimentTitle: "Get to know yourself and experiment",

  informIntro: "To fuel your reflection and perhaps discover new paths, you can look into:",
  informBullets: [
    <>How to do your <b>coming out</b></>,
    <><b>Ways to express your gender:</b> many medical and non-medical means exist to change or hide some physical attributes</>,
    <><b>Hormone Replacement Therapy (HRT):</b> types of treatments, doctors and ways to get support</>,
    <><b>Different masculinizing or feminizing surgeries</b></>,
    <><b>Long-Term Illness (ALD)</b> which helps social security better cover transition costs (FR system)</>,
    <><b>Administrative steps</b> (changing given name, gender marker...)
    </>,
  ],
  informTitle: "Learn and inform yourself",
  informBrochuresNote:
    "There are many brochures and FAQs online (WikiTrans, Fransgenre, OUTrans, Chrysalide) that answer frequent questions.",

  infoResources: [
    {
      link: "https://wikitrans.co/2019/01/19/quest-ce-quune-transition/",
      imageSrc: "/assets/wikitrans.svg",
      label: "Wikitrans",
      description: "Answers to frequent questions about transition (FR)",
    },
    {
      link: "https://www.fransgenre.fr/brochures",
      imageSrc: "/assets/fransgenre.webp",
      label: "Fransgenre",
      description: "Brochures on hormones, surgeries, steps, doctor map (FR website, EN brochures available)",
    },
    {
      link: "https://outrans.org",
      imageSrc: "/assets/outrans.png",
      label: "OUTrans",
      description: "Brochures and self-support guides (FR)",
    },
  ],

  associationsTitle: "Support associations",
  associationsText:
    "Self-support groups are precious: meeting other trans/non-binary people helps share everyday life, doctors and admin procedures. You'll find online and local groups. On the Centrale Lyon campus, feel free to contact Rainbow.",
  associationsContacts: [
    {
      title: "Chrysalide (FR)",
      subtitle: "Peer group in Lyon for trans people and their relatives",
      image: "/assets/chrysalide.png",
      hours: "3rd Saturday each month (except Jul/Aug) 3–6pm",
      textButton: "Learn more",
      link: "https://chrysalide-asso.fr/contact/",
      bgColor: "#7A1DA9",
      textColor: "#ffffff",
    },
    {
      image: "/assets/centre_lgbti_lyon.png",
      title: "Centre LGBTI+ Lyon (FR)",
      subtitle: "Community space and local resource",
      email: "contact@centrelgbtilyon.org",
      hours: "Welcome & permanences: Tue & Wed 5:30–7:30pm, Fri 2–7pm",
      textButton: "Visit website",
      link: "https://www.centrelgbtilyon.org/",
      bgColor: "#ffffff",
      textColor: "#ec62f1ff",
    },
  ],
  associationsLinks: [
    {
      link: "https://wikitrans.co/carte/",
      imageSrc: "/assets/wikitrans.svg",
      label: "Map of French associations",
      description: "Find a group near you (FR)",
    },
    {
      link: "https://www.instagram.com/ost_lyon/",
      imageSrc: "/assets/ost_lyon.jpg",
      label: "OST Lyon",
      description: "Trans Solidarity Organization, self-support and activism (FR)",
    },
    {
      link: "https://www.instagram.com/rainbow.ecl/?hl=fr",
      imageSrc: "/assets/rainbow.jpg",
      label: "Rainbow - Instagram",
      description: "LGBTQIA+ club at École Centrale de Lyon (FR)",
    },
  ],

  adminText:
    "To change your preferred name or civility title (Mr/Mrs) in school services (Moodle, roll lists, student card), usually send an email to the registrar. Changing the name on the diploma requires a civil status procedure.",
  adminLinks: [
    {
      link: "https://wikitrans.co/2019/11/26/changement-de-prenoms-en-mairie/",
      imageSrc: "/assets/wikitrans.svg",
      label: "Change of given name",
      description: "at city hall or judicial court (FR)",
    },
    {
      link: "https://wikitrans.co/2019/11/26/changement-de-sexe-a-letat-civil-tgi/",
      imageSrc: "/assets/wikitrans.svg",
      label: "Change of gender marker",
      description: "at judicial court (FR)",
    },
  ],
  adminTitle: "Administrative steps at Centrale Lyon",

  discriTitle: "Facing discrimination?",
  discriIntro:
    "If you face discrimination due to your gender identity, resources and people are ready to help.",
  discriResources: [
    {
      link: "/discri",
      emoji: "🟰",
      label: "Discrimination",
      description: "How to react and support in the face of discrimination?",
    },
    {
      link: "https://chrysalide-asso.fr/nos-documents/reagir-face-a-la-transphobie/",
      label: "Brochure",
      description: "Reacting to transphobia: advice for trans people (FR)",
      imageSrc: "/assets/chrysalide.png",
    },
  ],
  discriLegalNote:
    "Discrimination takes many forms. It can include homophobic or transphobic insults, spoken or written, which are punishable in France by up to one year in prison and a €45,000 fine. Intentional misgendering (addressing someone with pronouns or a name that do not match their gender identity) is also a form of discrimination.",

  quote2: "You're fine learning a nickname — why not a pronoun?",

  distressTitle: "In distress?",
  distressIntro:
    "Recognized as a public-interest foundation, Le Refuge houses and supports LGBTQ+ youth victims of intrafamily violence, rejected by parents, expelled from home due to sexual orientation or gender identity. You can contact their helpline for an emergency solution.",
  distressContact: {
    image: "/assets/le_refuge.png",
    title: "Le Refuge (FR)",
    subtitle: "Support association for LGBTQ+ youth",
    phone: "06 31 59 69 50 - Call or SMS",
    hours: "Every day, 8am–midnight",
    textButton: "Visit website",
    link: "https://le-refuge.org/",
    bgColor: "#ffffff",
    textColor: "#4834F6",
  },

  supportTitle: "How to support a loved one?",
  supportIntro:
    "Supporting a trans or non-binary person is based on listening, respect and willingness to learn. Here are concrete, easy-to-apply tips.",
  supportSteps: [
    {
      title: "Use correct pronouns and names",
      subtitle:
        "Using the chosen name and pronouns is real support; if you make a mistake, apologize and correct yourself.",
    },
    {
      title: "Transition is retroactive",
      subtitle:
        "Speak about the past using current pronouns; favor neutral formulations if needed.",
    },
    {
      title: "Show active support",
      subtitle:
        "Express clear support and, if you are cis, use your position to amplify your loved one's voice against hostility.",
    },
    {
      title: "Know your limits",
      subtitle:
        "Better to admit a lack of information than say inaccuracies that hurt or mislead.",
    },
    {
      title: "Your loved one is not ONLY trans",
      subtitle:
        "They remain the same person, with interests, projects and qualities.",
    },
    {
      title: "Be trustworthy",
      subtitle:
        "Never disclose trans identity without consent; keep information to yourself if unsure.",
    },
    {
      title: "Find ways to ease pressure",
      subtitle:
        "Speak about your emotions with a professional or trusted friend rather than placing them on your loved one in transition.",
    },
    {
      title: "Avoid sensitive topics",
      subtitle:
        "Intimate questions (e.g., surgeries) are not your business; if you know something, keep it to yourself.",
    },
  ],

  supportResourcesTitle: "Resources for relatives",
  supportResourcesSubtitle: "Guides, FAQs and support points",
  supportResources: [
    {
      link: "https://chrysalide-asso.fr/nos-documents/etre-un-e-proche-de-personne-trans/",
      imageSrc: "/assets/chrysalide.png",
      label: "Chrysalide",
      description: "Brochure for relatives (FR)",
    },
    {
      link: "https://wikitrans.co/2018/02/10/mon-proche-est-trans-comment-laider-au-mieux/",
      imageSrc: "/assets/wikitrans.svg",
      label: "Brochure",
      description: "My loved one is trans — how to help best? (FR)",
    },
  ],

  sourcesText:
    "Sources: OUTrans brochures (hormones, DTC), Chrysalide Guide, WikiTrans, Fransgenre, Family Planning, Centre LGBTI+ Lyon, SOS Homophobie, Santé Publique France, student testimonies, 2024 Student Life Report at Centrale Lyon",
};

export default en;