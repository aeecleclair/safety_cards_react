const fr = {

  title: "Interruption Volontaire de Grossesse",

  navLinks: [
    { label: "Qu'est-ce que l'IVG ?", target: "ivg" },
    { label: "Comment se déroule une IVG ?", target: "deroulement" },
    { label: "Où et qui contacter à Écully / Lyon ?", target: "contacts" },
    { label: "Aide, droits & urgences", target: "aide" },
  ],

  introTitle: "Qu'est-ce que l'IVG ?",

  popup: {
    image: "/assets/cartes/5_coeur.png",
    title: "La carte 5♥",
    shortText: "IVG : comprendre, choisir et se faire accompagner",
    longText:
      "L’IVG est un acte médical légal, confidentiel, et accessible à toute personne enceinte. Ce choix est personnel, protégé par la loi, et s’accompagne d’un suivi bienveillant et d’une totale discrétion médicale.",
    textButton: "⤢ Agrandir la carte"
  },

  introText:
    "L'IVG est un acte médical accessible en France. Il existe plusieurs façons d'y accéder (consultations d'information, entretien psycho-social si proposé, méthode adaptée selon le terme). Le choix de la méthode se fait avec l'équipe soignante en tenant compte de l'état de santé et du terme de la grossesse.",

  quote: {
    text: "Le droit à avorter, et à pratiquer l'avortement, est garanti par la loi et permet aux femmes qui souhaitent interrompre leur grossesse de le faire sans risque d'être sanctionnées.",
    author: "Source : Site officiel du gouvernement"
  },

  chiffres: [
    { number: "14", title: "semaines : délai légal", description: "maximum pour réaliser une IVG en France" },
    { number: "7e", title: "semaine : IVG médicamenteuse", description: "possible jusqu'à la fin de la 7ᵉ semaine de grossesse." },
    { number: "251 270", title: "IVG en France en 2024", description: "soit 7000 de plus qu'en 2023." }
  ],

  contraceptionText:
    "Il existe aujourd’hui de nombreuses méthodes de <b>contraception</b> : pilule, préservatif, implant, DIU (stérilet), patch, et bien d’autres. Chacune a ses avantages et ses spécificités, et le choix dépend de ton mode de vie, de ta santé et de tes préférences. Si tu souhaites en savoir plus sur la contraception ou la sexualité, tu peux consulter notre page dédiée :",

  contraception : [
    {
        link: "/sex",
        label: "Sexualité et contraception",
        description: "Quels sont les différents moyens contraceptifs ?",
        emoji : "😘",
    }
  ],
  questionSexText:
    "Tu peux aussi consulter le site de Question Sexualité qui regroupe un grand nombre d'informations en tout genre sur l'IVG, mais sur lequel il y a également des contacts :",

  resources_questionsex : [
  {
    link: "https://questionsexualite.fr/choisir-sa-contraception/l-interruption-volontaire-de-grossesse",
    imageSrc: "/assets/question_sexualite.png",
    label: "Question Sexualité -",
    description: "IVG médicamenteuse, IVG instrumentale, effets indésirables, suivi ..."
  }
  ],

  deroulementTitle: "Comment se déroule une IVG ?",
  methodesTitle: "Les deux grandes méthodes",

  methodes: [
    "<b>IVG médicamenteuse</b> : prise de médicaments sous contrôle médical. Possible en ville (médecin, sage-femme) ou à l'hôpital selon le cas, et jusqu'à la fin de la 7ᵉ semaine de grossesse.",
    "<b>IVG instrumentale</b> (ou chirurgicale) : intervention réalisée en milieu hospitalier ou clinique, utilisée après la 7ᵉ semaine et jusqu'au délai légal."
  ],

  mineursTitle: "Qu'en est-il des mineur·e·s ?",
  mineursText:
    "Les mineur·e·s peuvent demander une IVG sans avoir besoin d'une autorisation parentale : dans ce cas, il faut cependant être accompagnées d'une personne majeure de leur choix (accompagnement obligatoire), et la confidentialité est protégée par la loi. Les professionnels doivent proposer une information adaptée et l'accès aux soins se fait gratuitement via l'Assurance maladie.",

  partenaireTitle: "Accompagner l’IVG : la place du partenaire",
  partenaireText1: "Une grossesse ne concerne pas uniquement la personne enceinte. L'IVG reste bien sûr un <b>droit individuel</b> et la personne enceinte est <b>la seule</b> à pouvoir en décider, mais il est essentiel de rappeler que <b>le soutien du ou de la partenaire</b> peut être précieux.",
  partenaireText2: "Être présent, écouter sans juger, accompagner aux rendez-vous si c’est souhaité, partager les démarches ou simplement manifester de la bienveillance peut <b>aider la personne à se sentir soutenue</b> dans un moment souvent complexe émotionnellement. La responsabilité de la contraception, de la prévention et de l’écoute <b>incombe aux deux partenaires</b> : une approche partagée favorise un climat de confiance et de respect mutuel.",
  partenaireText3: "Dans certains centres (notamment les CPEF et les centres IVG hospitaliers), <b>des entretiens de couple ou de soutien psychologique</b> peuvent être proposés, afin d’aider à traverser cette période ensemble, sereinement et sans culpabilité.",

  parcoursTitle: "Le parcours concret d’une IVG",
  parcoursIntro:
    "Le parcours d’une IVG se déroule en plusieurs étapes encadrées par la loi, afin d’assurer un accompagnement médical, psychologique et administratif adapté à chaque personne.",

  parcoursSubtitle: "Voici les principales étapes :",

  parcoursSteps: [
    { title: "1. Prendre rendez-vous", subtitle: "Avec un médecin, une sage-femme, un centre IVG ou un centre de planification (CPEF). Le rendez-vous permet de confirmer la grossesse, d’évaluer le terme et de présenter les différentes méthodes possibles." },
    { title: "2. Première consultation médicale", subtitle: "Le ou la professionnelle de santé informe sur les deux méthodes (médicamenteuse ou instrumentale), leurs effets, leurs contraintes et répond à toutes les questions. Un entretien psychosocial est proposé, obligatoire pour les mineur·e·s." },
    { title: "3. Délai de réflexion (facultatif)", subtitle: "Aucune obligation d’attente n’est imposée, mais la personne peut demander un temps de réflexion avant de confirmer sa décision." },
    { title: "4. Réalisation de l’IVG", subtitle: "L’IVG se pratique selon la méthode choisie, en ville (médecin, sage-femme) ou à l’hôpital. Elle est encadrée médicalement et peut être accompagnée d’un suivi psychologique si souhaité." },
    { title: "5. Consultation de suivi", subtitle: "Un rendez-vous de contrôle est proposé après l’intervention pour s’assurer que tout va bien, échanger sur la contraception et le bien-être physique et émotionnel." }
  ],

  parcoursLinkText : "Tu peux aussi retrouver ces étapes avec plus de détails sur le site officiel du gouvernement dédié à ce sujet :",

  resources_etapes : [
      {
    link: "https://ivg.gouv.fr/ivg-etape-par-etape",
    imageSrc: "/assets/gouv.png",
    label: "Site officiel sur l'IVG -",
    description: "l'IVG, étape par étape"
  }
  ],

  aideTitle: "Aide, droits & urgences",
  aideIntro: "Si tu as besoin d'information, du soutien pour te déplacer, d'un hébergement ou d'une aide financière, plusieurs dispositifs peuvent t'aider. Voici les points essentiels :",
  aideList1: [
    "Numéro vert national — 0 800 08 11 11 : information anonyme et gratuite (sexualités, contraception, IVG), du lundi au samedi de 9h à 20h.",
    "Site officiel d'aide et d'information (chat, numéros et informations utiles) :"
  ],
  resources_infos : [

  {
    link: "https://ivg.gouv.fr/",
    imageSrc: "/assets/gouv.png",
    label: "Site officiel du gouvernement",
    description: "pour répondre aux questions en lien avec l'IVG."
  }
],
  aideList2: [
    "Les consultations sont prises en charge à 100 % par l'Assurance maladie dans le cadre d'une IVG (se renseigner avec la structure).",
    "En cas d'urgence (complication, saignement important, douleur intolérable), rends-toi au service des urgences ou appelle le 15."
  ],

  suiviTitle: "Aide psychologique et suivi",
  suiviText: "Les équipes qui réalisent des IVG proposent aussi un accompagnement médical et psychosocial. Si tu ressens le besoin de parler avant ou après l'IVG, demande un rendez-vous de suivi (infirmière, sage-femme, psychologue, assistante sociale).",

  adminTitle: "Déroulement administratif et gratuité",
  adminText: "L'IVG est prise en charge par l'Assurance maladie (avec le cas échéant le dispositif d'autorisation pour mineures souhaitant garder le secret). Les centres hospitaliers et CPEF (Centres de planification et d'éducation familiale) peuvent informer et orienter gratuitement.",

  contactsTitle: "Où se faire accompagner & qui contacter ?",
  contactsIntro: "Si tu es à Écully ou à Lyon, il y a des lieux et des contacts locaux qui pratiquent ou orientent vers l'IVG. En cas d'urgence, contacte le numéro national ou rends-toi au service des urgences le plus proche.",
  hospitauxTitle: "Centres hospitaliers et planning familial",

  cardEdouartHerriot: {
    title: "Hôpital Édouard Herriot (Centre d’orthogénie / IVG)",
    subtitle: "5 place d’Arsonval - 69003 Lyon",
    phone: "04 72 11 03 96",
    textButton: "Prendre RDV / Infos",
    link: "https://myhcl.sante-ra.fr/Espacepublic/rendezvous.aspx?CR=21520",
    bgColor:"#ffffff",
    textColor:"#0da8e8"
  },
  cardCroixRousse: {
    title: "Hôpital de la Croix-Rousse (Centre d’orthogénie / IVG)",
    subtitle: "103 grande rue de la Croix-Rousse - 69004 Lyon",
    phone: "04 72 07 16 63",
    textButton: "Prendre RDV / Infos",
    link: "https://myhcl.sante-ra.fr/Espacepublic/rendezvous.aspx?CR=24026",
    bgColor:"#ffffff",
    textColor:"#0da8e8"
  },
  cardLyonSud: {
    title: "Hôpital Lyon Sud (Centre IVG)",
    subtitle: "165 chemin du Grand Revoyet - 69310 Pierre-Bénite",
    phone: "04 78 86 65 70",
    textButton: "Prendre RDV / Infos",
    link: "https://myhcl.sante-ra.fr/Espacepublic/rendezvous.aspx?CR=36118",
    bgColor:"#ffffff",
    textColor:"#0da8e8"
  },


  hospitaux: [
    {
      image: "/assets/EdouardHerriot.jpg",
      title: "Hôpital Édouard Herriot (Centre d’orthogénie / IVG)",
      subtitle: "5 place d’Arsonval - 69003 Lyon",
      phone: "04 72 11 03 96",
      textButton: "Prendre RDV / Infos",
      link: "https://myhcl.sante-ra.fr/Espacepublic/rendezvous.aspx?CR=21520",
      bgColor: "#ffffff",
      textColor: "#0da8e8"
    }
  ],

  ecullyText:
    "À Écully plusieurs sages-femmes et cliniques proposent des consultations d'information et des IVG médicamenteuses selon les cas (prendre RDV et vérifier la disponibilité). Des praticiens locaux apparaissent sur Doctolib (ex. sages-femmes proposant IVG médicamenteuse à Écully). En cas de doute, appelle le numéro vert national pour être orienté·e.",

  localResources : [

  {
    link: "https://www.planning-familial.org/fr/le-numero-vert-national-sexualites-contraception-ivg-0800-08-11-11-261",
    imageSrc: "/assets/planning-familial.jpg",
    label: "Numéro vert national (Planning Familial)",
    description: "0 800 08 11 11 — information gratuite, anonyme : sexualités, contraception, IVG."
  },
  {
    link: "https://ivg.gouv.fr/",
    imageSrc: "/assets/min.png",
    label: "Service public IVG",
    description: "Informations officielles et aide pour trouver des lieux de prise en charge."
  }
],
  sourcesPrefix: "Sources principales :",
  sources:
    "ivg.gouv.fr — Ministère de la Santé ; Info.gouv / loi (délai 14 semaines) ; Ameli (délais IVG médicamenteuse) ; Hospices Civils de Lyon (centres d'orthogénie) ; Planning Familial (numéro vert 0 800 08 11 11)."
};

export default fr;