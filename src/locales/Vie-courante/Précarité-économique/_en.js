const en = {
  pageTitle: "Economic Precarity",
  navLinks: [
    { label: "Understanding precarity", target: "constat" },
    { label: "I'm struggling", target: "difficulte" },
    { label: "Support in detail", target: "détails" },
    { label: "I'm a witness / close friend", target: "temoin" },
  ],

  // --- Key figures ---
  chiffresPrecarite: [
    { number: "20.5%", title: "of students", description: "receive a scholarship at Centrale Lyon" },
    { number: "9.7%", title: "of Centrale students", description: "face financial difficulties covering their basic needs" },
    { number: "31.0%", title: "of international students", description: "are affected by precarity (vs. 8.4% of French students)" },
  ],

  // --- Section 1: Understanding ---
  comprendreTitle: "Understanding economic precarity",
  carteValetCarreau: {
    image: "/assets/cartes/anglais/valet_carreau.png",
    title: "Card V♦",
    shortText: "Student economic precarity and existing solutions",
    longText: "Here you can find a concise overview of all the solutions in place to support students facing financial difficulties, both within the school and externally. Feel free to explore the different sections of the page to learn more about the available aid and the steps to take.",
    textButton: "⤢ Enlarge card",
    suit: "carreau",
  },
  comprendreIntro:
    "<b>Economic precarity</b> refers to a situation of persistent financial instability affecting many students, including at École Centrale de Lyon. It manifests as <b>difficulties covering basic needs</b> (housing, food, equipment, healthcare) and can have a significant impact on well-being and academic success. Several factors can contribute to this precarity: limited family resources, high costs of student life, loss of income (student job, scholarship), unexpected expenses, etc. On this page you will find various internal and external support systems to help you.",
  chiffresTitle: "Key figures",

  // --- Section 2: I'm struggling ---
  difficulteTitle: "I'm struggling",
  difficulteIntro:
    "You are not alone. At the first signs of difficulty (late rent, insufficient food, faulty equipment, etc.), <b>speak up quickly</b>: the social service will help you activate the right levers (Centrale and CROUS financial aid, housing, healthcare, exemptions, student jobs).",
  contactServiceSocial: {
    image: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    title: "Social service",
    subtitle: "Support for students in financial difficulty",
    textButton: "See information",
    phone: "See information",
    email: "See information",
    link: "/service-social",
    bgColor: "#ffffff",
    textColor: "#b22133",
  },
  crousIntro:
    "You can also contact the CROUS social service in Lyon (for requests other than the allocation of housing in CROUS residences, management of scholarship files and catering).",
  contactCrous: {
    image: "/assets/logo_crous.png",
    title: "CROUS Social Service – Lyon (FR)",
    subtitle: "Social support and specific financial aid",
    textButton: "Book an appointment",
    link: "https://www.crous-lyon.fr/contacts/social-et-accompagnement/",
    bgColor: "#ffffff",
    textColor: "#e30613",
  },
  parcoursTitle: "Recommended support pathway",
  parcoursListTitle: "Key steps",
  parcoursListSubtitle: "Who to contact and what to activate first",
  items_parcours: [
    {
      title: "Meet the social worker",
      subtitle:
        "Present every Monday at the infirmary: listening, assessment, opening of rights and guidance through procedures (emergency aid, exemptions, housing, healthcare).",
    },
    {
      title: "Activate CROUS support",
      subtitle:
        "Complete or update the Student Social File (DSE) to apply for a means-tested scholarship. In case of a sudden hardship, apply for specific aid (one-time or annual).",
    },
    {
      title: "Housing: reduce costs",
      subtitle:
        "Apply for housing allowance (APL/ALF/ALS) and use the Visale guarantee (free deposit) to secure your rental.",
    },
    {
      title: "Access the solidarity grocery store",
      subtitle:
        "Since April 2024, the Solidari'terre association offers products at reduced prices.",
    },
    {
      title: "Borrow digital equipment",
      subtitle:
        "Enquire about laptop and equipment loans through the Eclair association. Solutions exist in case of breakdown or lack of equipment.",
    },
    {
      title: "Student jobs & internal financial aid",
      subtitle:
        "Check the intranet for student jobs and partial tuition fee exemption schemes (based on social criteria).",
    },
  ],

  // --- Section 3: Support in detail ---
  aidesTitle: "Support in detail",

  bourseCrousTitle: "CROUS means-tested scholarships",
  bourseCrousText:
    "To apply for a scholarship, you must complete a <b>Student Social File (DSE)</b> each year. The scholarship amount depends on several criteria (family income, distance between the family home and the institution, number of dependent siblings, etc.) and is divided into 7 levels. The aid can range from an <b>exemption from registration fees at public institutions and payment of the student social security contribution, up to an annually set maximum.</b> You may potentially be eligible regardless of whether you are French, European, or of another nationality.",
  bourse_crous: [
    {
      link: "https://www.etudiant.gouv.fr/fr/bourses-sur-criteres-sociaux-1897",
      label: "CROUS – Scholarships and financial aid",
      description: "Applications, deadlines, specific aid... (FR)",
      imageSrc: "/assets/logo_crous.png",
    },
    {
      link: "https://campus.ec-lyon.fr/aides-financieres-4460.kjsp?RF=1460639982370",
      label: "Centrale Lyon Intranet",
      description: "Learn more about CROUS scholarships (FR)",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    },
  ],

  aideUrgenceTitle: "Emergency aid",
  aideUrgenceText:
    "In case of sudden hardship (loss of income, unexpected expenses, etc.), you can apply for emergency aid from the CROUS social service. It is accessible to scholarship and non-scholarship students, of French or foreign nationality.",
  contactAideUrgence: {
    image: "/assets/etudiant_gouv.jpg",
    title: "Emergency aid (EN)",
    subtitle: "For information on the aid and steps to take",
    phone: "09 72 59 65 65",
    textButton: "Visit the website",
    link: "https://www.etudiant.gouv.fr/en/financial-support-and-grants-1663",
    bgColor: "#ffffff",
    textColor: "#000000",
  },

  aideLogementTitle: "Housing allowances",
  aideLogementText:
    "As a student at École Centrale de Lyon, you may be entitled to housing allowances (generally the APL).",
  visaleText:
    "You can also apply for the Visale guarantee. Action Logement then acts as guarantor to cover unpaid rent and rental damage.",
  aides_logement: [
    {
      link: "https://www.caf.fr/allocataires/aides-et-demarches/droits-et-prestations/logement/les-aides-personnelles-au-logement",
      label: "CAF – APL",
      description: "Everything you need to know about personal housing allowances (FR)",
      imageSrc: "/assets/caf.png",
    },
    {
      link: "https://www.visale.fr/",
      label: "Visale guarantee (Action Logement)",
      description: "100% free rental deposit guarantee for students and apprentices. (FR)",
      imageSrc: "/assets/visale.png",
    },
  ],

  aidesCentraleTitle: "Internal financial aid at Centrale",
  aidesCentraleList: [
    "Exemption committee: allows students meeting social criteria (excluding those already on a scholarship or dual-degree programme) to be exempted from tuition fees. A file must be submitted, usually before the end of January. More information via the link below.",
    "Social committee: aims to provide financial support to students facing everyday difficulties (rent, food, etc.). A file must also be submitted, usually before the end of January. More information via the link below.",
    "Endowment fund: financial support may be obtained. Contact the social service for more information.",
  ],
  aides_centrale: [
    {
      link: "https://campus.ec-lyon.fr/aides-financieres-4460.kjsp?RF=1460639982370",
      label: "Financial aid – Centrale Lyon (FR)",
      description: "Procedures and documents for the social and exemption committees",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    },
  ],

  epicerieTitle: "Solidarity grocery store",
  epicerieText1:
    "Since April 2024, the Solidari'terre association has offered a solidarity grocery store to students of École Centrale de Lyon. It provides access to food and hygiene products at reduced prices (maximum 6 products, at 25% of the market price). To access it, you must be a scholarship student, have a €1 CROUS meal, or be authorised by the social worker.",
  epicerieText2:
    "The grocery store is open every <b>Monday and Wednesday from 12:25 to 13:45, at the bottom of building X</b>, opposite Adoma.",
  epicerie: [
    {
      link: "https://www.instagram.com/solidariterreecl/",
      label: "Solidari'terre",
      description: "Instagram account to follow updates and get in touch.",
      imageSrc: "/assets/soli.jpg",
    },
  ],

  materielTitle: "Digital equipment loan",
  materielText:
    "If you do not have a laptop or yours is broken, the Eclair association offers a digital equipment loan service (laptops, hardware, etc.) to students of École Centrale de Lyon. The loan is free and can last several weeks depending on needs. To benefit, you can contact them or visit the association offices at lunchtime.",
  eclair: [
    {
      link: "https://www.instagram.com/eclair_eclyon/",
      label: "Eclair",
      description: "Instagram account to follow updates and get in touch.",
      imageSrc: "/assets/eclair.jpg",
    },
  ],

  jobsTitle: "Student jobs",
  jobsText:
    "The school intranet regularly lists student job offers (part-time jobs, one-off assignments, etc.). You can also find jobs through metropolitan or national employment services.",
  jobs: [
    {
      link: "https://campus.ec-lyon.fr/offres-d-emplois-etudiants-4300.kjsp?RH=ACCUEIL",
      label: "Centrale Lyon Intranet",
      description: "Student job offers at the school (FR)",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    },
    {
      link: "https://www.lyoncampus.com/en/study/student-jobs",
      label: "Lyon Campus",
      description: "Student jobs in Lyon or elsewhere (EN)",
      imageSrc: "/assets/logo_lyon_campus.png",
    },
  ],

  mobiliteTitle: "International mobility grants",
  mobiliteText:
    "If you are planning to study or intern abroad, several grants exist to help finance your project.",
  mobiliteList: [
    "Erasmus+ grant: participation in the Erasmus+ exchange programme provides a monthly contribution towards living and travel costs (amount varies by destination country).",
    "Auvergne-Rhône-Alpes Region international student mobility grant: this grant amounts to €95 per week over a number of weeks defined according to the budget allocated at the start of the year. More information on the intranet.",
    "And other schemes for scholarship and non-scholarship students alike — discover them on the Intranet.",
  ],
  mobilite: [
    {
      link: "https://campus.ec-lyon.fr/financer-sa-mobilite-a-l-international-3941.kjsp?RH=1460639982370",
      label: "Centrale Lyon Intranet",
      description: "Financing international mobility (FR)",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    },
  ],

  // --- Section 4: Witness / close friend ---
  temoinTitle: "I'm a witness / close friend",
  temoinIntro:
    "Do you notice a classmate in difficulty (absences, fatigue, skipped meals, rent problems, broken equipment)? <b>Dare to open the conversation</b> without judgement and suggest they see the social worker or access available support systems. You can also accompany them to an appointment or to the solidarity grocery store.",
  temoinList: [
    "Listen without minimising or making them feel guilty.",
    "Suggest concrete solutions (social service appointment, DSE, APL, Visale).",
    "Inform a contact person in good faith (if there is a risk or critical unpaid bills).",
    "Share official and internal resources.",
  ],

  // --- Sources ---
  sources:
    "<em><b>Sources:</b> Centrale Lyon Financial Aid, CROUS Lyon, Service-Public.fr, CAF, Action Logement, Centrale Lyon Student Associations, Lyon Campus.</em>",
};

export default en;
