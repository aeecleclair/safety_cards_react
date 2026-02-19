// fr.js — English texts for the Disability Situation page

const en = {
  pageTitle: "Disability Situation",

  navLinks: [
    { label: "Overview", target: "constat" },
    { label: "Support at Centrale", target: "internes" },
    { label: "External Resources", target: "externes" },
    { label: "Rights", target: "droits" },
    { label: "Are you a young caregiver?", target: "aidants" },
    { label: "Adapting as an Association", target: "association" }
  ],

  chiffresData: [
    {
      number: "8.9%",
      title: "of people",
      description: "have at least one disability among the following categories: motor, sensory, speech, mental, visceral, cognitive, and autistic disorders"
    },
    {
      number: "12%",
      title: "of students",
      description: "report having a long-term health condition affecting their studies (source: OVE, 2020)"
    }
  ],

  ressourcesUtiles: [
    {
      link: "https://monparcourshandicap.gouv.fr",
      label: "My Disability Portal",
      description: "Personalized online support",
      imageSrc: "/assets/rep-logo.png"
    },
    {
      link: "https://www.agefiph.fr",
      label: "AGEFIPH",
      description: "Support for professional integration of people with disabilities"
    },
    {
      link: "https://www.handicap-job.com",
      label: "Handicap Job",
      description: "Job platform dedicated to people with disabilities",
      imageSrc: "/assets/logo-handicap-job.png"
    }
  ],

  dispositifsLiens: [
    {
      link: "https://www.service-public.fr/particuliers/vosdroits/F12242",
      label: "AAH – Adult Disability Allowance",
      imageSrc: "/assets/rep-logo.png"
    },
    {
      link: "https://www.service-public.fr/particuliers/vosdroits/F14809",
      label: "RQTH – Recognition as Disabled Worker",
      imageSrc: "/assets/rep-logo.png"
    },
    {
      link: "https://monparcourshandicap.gouv.fr/",
      label: "My Disability Portal",
      imageSrc: "/assets/rep-logo.png"
    }
  ],

  lienPauseBrindille: [
    {
      link: "https://lapausebrindille.org/",
      label: "La Pause Brindille",
      description: "Platform dedicated to young caregivers",
      imageSrc: "/assets/pause-brindille.png"
    }
  ],

  guideAccessibilite: [
    {
      link: "https://lecollectifdesfestivals.org/collectif/2015/10/guide-pratique-de-laccessibilite-evenementielle",
      label: "Event Accessibility Guide",
      description: "Resource for associations and event organizers",
      imageSrc: "/assets/collectif-festivals.png"
    }
  ],

  droits: [
    {
      title: "Allowance for Education of Disabled Child (AEEH)",
      subtitle: "Monthly financial support for parents of children with disabilities to offset related expenses."
    },
    {
      title: "Adult Disability Allowance (AAH)",
      subtitle: "Minimum income for people with disabilities unable to work or no longer working, subject to income conditions."
    },
    {
      title: "Disability / Priority / Parking Cards",
      subtitle: "Cards providing specific advantages: priority access, easier parking, or administrative recognition of disability."
    },
    {
      title: " Disability Compensation Benefit (PCH)",
      subtitle: "Personalized support covering needs related to loss of autonomy (human assistance, home adaptation, equipment, etc.)."
    },
    {
      title: "Recognition of Disabled Worker Status (RQTH)",
      subtitle: "Status facilitating access to and retention in employment, allowing specific accommodations and personalized support."
    },
    {
      title: "Personalized Schooling Project",
      subtitle: "Document implemented by the National Education system to organize necessary support and accommodations for the student's schooling."
    },
    {
      title: "Exam Accommodations – extra time, adapted rooms, etc.",
      subtitle: "Measures granted to students with disabilities to ensure fairness during exams or competitions."
    },
    {
      title: "Support from Departmental Disability Services (MDPH)",
      subtitle: "Single point of access for information, guidance, and management of disability-related rights (financial aid, orientation, etc.)."
    }
  ],

  jeunesAidants: [
    {
      title: "Brind'Écoute",
      subtitle: "Listening service (chat/SMS/phone) for young caregivers"
    },
    {
      title: "Brind'Partage",
      subtitle: "Monthly meetings for young caregivers in Lyon"
    },
    {
      title: "Tribu Brindille",
      subtitle: "Day of fun and respite for young caregivers"
    },
    {
      title: "Young Caregivers Platform",
      subtitle: "Information and support for caregivers under 25"
    }
  ],

  carteValet: {
    image: "/assets/cartes/valet_pique.png",
    title: "The V♠ Card",
    shortText: "Disability situation: understand and help",
    longText: "Disability can take many forms, visible or invisible. Some affect mobility, vision, or hearing; others concern concentration, memory, mental health, or chronic pain. These situations are not always visible at first glance but have a real impact on daily life and studies.",
    buttonText: "⤢ Enlarge card",
    suit: "pique"
  },

  constatIntro: "Disability encompasses a wide variety of realities, visible or invisible. It can be temporary or permanent and affect physical, mental, cognitive, or sensory functions. In a university context, it can impact mobility, communication, concentration, or access to information.",

  constatQuote: {
    author: "OVE Report 2020",
    text: "Students with disabilities face multiple, often invisible obstacles in their daily university life."
  },

  internesTitle: "Support at Centrale",
  internesIntro: "The school implements concrete measures to ensure equal opportunities. Awareness actions are regularly offered to the entire student and teaching community to promote inclusion. Individualized support can be provided according to expressed needs.",
  internesBulletList: [
    "LSF Training & Handimanagement Label",
    "Prevention actions (Day in the Dark, DYS Day)",
    "€6000 budget for sign language training",
    "Dedicated disability coordinator for personalized support",
    "Continuous improvement of physical accessibility in premises"
  ],

  externesTitle: "External Resources",
  externesIntro: "Many external organizations offer complementary support, whether medical, social, or educational. These resources are useful for both administrative procedures and psychological support.",

  contactCrous: {
    title: "Crous Lyon",
    subtitle: "Social support, housing, financial aid.",
    phone: "0800 73 08 15",
    email: "handicap@crous-lyon.fr",
    textButton: "Visit website",
    link: "https://www.crous-lyon.fr/social-et-accompagnement/",
    image: "/assets/logo_crous.png",
    bgColor: "#ffffff",
    textColor: "#e30613"
  },

  droitsTitle: "Rights of People with Disabilities",
  droitsIntro: "In France, there are many measures to offset the consequences of disability and support educational pathways. These rights may concern schooling, funding, accessibility, or employment. Their implementation often depends on administrative recognition.",
  listeTitre: "Main Programs",
  listeText: "Aid and Allowances",
  
  aidantsTitle: "Support for Young Caregivers",
  aidantsIntro: "Young caregivers are often invisible. They are people between 7 and 25 who daily assist a relative with a disability, illness, dependency, or addiction while continuing their studies. Over a million in France, these situations can generate fatigue, isolation, or academic difficulties. Organizations like La Pause Brindille aim to provide a space for listening, sharing, and respite.",

  associationTitle: "Adapting as an Association",
  associationIntro: "Resources exist to help associations consider disability in the organization of events or activities.",

  sourcesText: "Sources: Mon Parcours Handicap, Droit au Savoir, MDPH, Crous Lyon, Planning Familial ARA, La Pause Brindille, OVE 2020, AGEFIPH, Handicap Job"
};

export default en;
