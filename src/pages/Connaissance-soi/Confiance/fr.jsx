import React from "react";

const fr = {
  pageTitle: "Confiance et Estime de soi",
  navLinks: [
    { label: "Qu'est-ce que l'estime de soi ?", target: "definition" },
    { label: "Comment renforcer sa confiance ?", target: "renforcer" },
    { label: "Comment aider quelqu'un ?", target: "aider" },
  ],

  chiffres: [
    { number: "78%", title: "des jeunes", description: "affirment avoir confiance en eux, mais..." },
    { number: "81%", title: "des jeunes", description: "renoncent parfois à leurs aspirations faute de confiance" },
    { number: "55%", title: "des jeunes", description: "souhaiteraient participer à des ateliers de gestion du stress et des émotions" },
  ],

  card: {
    image: "./assets/cartes/as_carreau.png",
    title: "La carte A♦",
    shortText: "Confiance en soi : renforcer et accompagner",
    longText:
      "Lorsqu'on se regarde dans le miroir, on voit souvent nos défauts avant nos qualités. La confiance en soi se construit en apprenant à reconnaître et valoriser ces qualités, tout en acceptant ses limites. C'est un processus qui demande du temps et de la patience, mais qui est essentiel pour se sentir bien dans sa peau.",
    textButton: "⤢ Agrandir la carte",
    suit: "carreau",
  },

  subtitleDefine: "Définir confiance en soi et estime de soi",
  definitionIntro:
    "On confond souvent confiance en soi et estime de soi, mais ces notions sont différentes :",
  bulletsDefinition: [
    <><b>La confiance en soi</b> est la <b>croyance en sa capacité à réussir dans une tâche spécifique</b>. Elle se construit avec l'expérience, l'entraînement et les réussites.</>,
    <><b>L'estime de soi</b> est <b>l'évaluation globale et affective que l'on porte sur soi-même</b> : ce que je ressens pour moi-même.</>,
  ],
  estimePillarsText:
    <>L'estime de soi repose sur trois piliers principaux : <b>l'amour de soi</b> (s'accepter tel qu'on est), <b>la vision de soi</b> (se voir de façon réaliste) et <b>la confiance en ses capacités</b>. Elle évolue tout au long de la vie, et peut être fragilisée par des épreuves, des échecs, des jugements extérieurs.</>,
  estimePillarsImage: "/assets/miroir.png",

  whyTitle: "Pourquoi la confiance et l'estime de soi sont importantes ?",
  whyText:
    "La confiance en soi et l'estime de soi jouent un rôle majeur dans la vie d'un étudiant. Elles influencent la motivation, la participation en classe, la capacité à relever des défis et le bien-être psychologique. Une estime de soi solide aide à mieux gérer le stress, les échecs passagers et les relations sociales.",

  resources: [
    {
      link: "/anxiete",
      emoji: "😶‍🌫️",
      label: "Anxiété",
      description: "Tu te sens souvent stressé·e ou anxieux·se ? Des solutions existent.",
    },
    {
      link: "/isolement",
      emoji: "🧍",
      label: "Isolement",
      description: "Comment aider des personnes isolées et qui manquent de confiance en elles ?",
    },
  ],
  resourcesInfos: [
    {
      link:
        "https://www.filsantejeunes.com/je-nai-pas-confiance-en-moi-7065#:~:text=Le%20propre%20du%20complexe%20est,et%20la%20confiance%20en%20soi",
      label: "Fil Santé Jeunes",
      description: "Un article pour mieux comprendre la confiance en soi",
      imageSrc: "/assets/fsj.png",
    },
    {
      link: "https://www.psychologies.com/Moi/Se-connaitre/Estime-de-soi",
      label: "Psychologies - Estime de soi",
      description: "Articles pour mieux se connaître et s'aimer",
      imageSrc: "/assets/psychologies.jpg",
    },
  ],
  resourcesInfosTitle: "Ressources utiles",
  resourcesInfosSubtitle: "Sites pour mieux comprendre et avancer",
  resourcesAide: [
    {
      link: "https://monsoutienpsy.ameli.fr/recherche-psychologue",
      label: "Mon soutien psy",
      description: "12 séances gratuites avec un psychologue",
    },
  ],

  sectionReinforceTitle: "Comment renforcer sa confiance en soi ?",

  actionsSubtitle: "Petites actions pour progresser",
  actionsIntro: "Améliorer sa confiance prend du temps. Voici quelques leviers :",
  actionsBullets: [
    <><b>Fixe-toi des objectifs réalistes et félicite-toi quand tu les atteins</b>, même s'ils sont petits.</>,
    <><b>Parle-toi comme tu parlerais à un·e ami·e</b> : avec bienveillance, encouragement et patience.</>,
    <><b>Pratique une activité physique régulière</b>. Faire du sport ou simplement marcher stimule la production de dopamine (une hormone qui peut aider au bien-être) et améliore l'image que l'on a de soi.</>,
    <><b>Prends soin de toi</b>. Un bon sommeil, une alimentation équilibrée et une hygiène de vie saine aident à se sentir bien dans son corps et dans sa tête. Bien dormir et manger sainement augmente l'énergie et la clarté mentale, ce qui facilite la confiance au quotidien.</>,
    <><b>Autorise-toi à faire des erreurs</b>. Personne n'est parfait : faire des fautes ou échouer ponctuellement ne signifie pas qu'on est « nul ». Au contraire, chaque erreur est l'occasion d'apprendre. Même si tu as une mauvaise note, rappelle-toi que tu n'es pas ta note.</>,
    <><b>Apprends à gérer ton stress et tes émotions</b>. Des techniques simples de respiration ou de relaxation peuvent aider à calmer l'anxiété (par exemple, inspirer lentement pendant 4 secondes, bloquer 4 secondes, expirer 4 secondes). Comprendre et nommer ses émotions (colère, tristesse, etc.) permet de les réguler.</>,
    <><b>Sors de ta zone de confort avec des petits défis</b>. Chaque fois que tu oses faire quelque chose qui te fait peur (dire ce que tu penses, changer de look, participer à un club), tu gagnes en assurance. Par exemple, n'hésite pas à exprimer ton avis en petit comité ou à dire non quand tu n'es pas d'accord.</>,
  ],

  helpIntro:
    "Tu n'es pas obligé·e de traverser seul·e cette démarche. Des aides existent, confidentielles et gratuites :",
  helpContacts: [
    {
      image: "/assets/nightline_logo.png",
      title: "Nightline Lyon",
      subtitle: "Service d'écoute nocturne gratuit pour les étudiant·e·s",
      phone: "04 85 30 00 10",
      email: "",
      hours: "Tous les soirs, de 21h à 2h30",
      textButton: "Voir le site web",
      link: "https://www.nightline.fr/lyon",
    },
    {
      image: "/assets/logo-cosa.svg",
      title: "Comment on s'aime ?",
      subtitle: "Professionnels pour t'écouter et t'accompagner",
      hours: "Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h",
      textButton: "Voir le site web",
      link: "https://commentonsaime.fr/",
      bgColor: "#f6a21e",
      textColor: "#ffffff",
    },
  ],

  videoUrl: "https://www.youtube.com/watch?v=EQUffQNqDQo&ab_channel=LouieMedia",

  helpListTitle: "Soutenir une personne en manque de confiance",
  helpListSubtitle: "Comment accompagner sans brusquer ?",
  helpListItems: [
    {
      title: "Écoute sans juger",
      subtitle:
        "Donne-lui l'occasion de parler de ce qu'il/elle ressent. Parfois, simplement laisser la personne s'exprimer (peurs, complexes, doutes) est très aidant. Montre-lui que tu prends ses sentiments au sérieux et que tu es là pour lui/elle.",
    },
    {
      title: "Valorise ses qualités",
      subtitle:
        "Soulignez ses forces et réussites, même petites. Cela peut aider à rééquilibrer son image d'elle-même.",
    },
    {
      title: "Suggère des activités",
      subtitle:
        "Propose de faire ensemble quelque chose qui peut améliorer son moral : faire du sport, aller au cinéma, se lancer dans un nouveau projet créatif, etc. Participer à des activités de groupe encourage l'estime de soi.",
    },
    {
      title: "Encourage dans la démarche d'aide",
      subtitle:
        "Si tu vois que la personne souffre (isolement, tristesse, baisse de motivation…), encourage-la à demander de l'aide extérieure. Par exemple, l'infirmière ou un psychologue peuvent conseiller. Tu peux aussi l'orienter vers le numéro d'écoute Fil Santé Jeunes ou la Nightline.",
    },
  ],

  fsjContact: {
    image: "/assets/fsj.png",
    title: "Fil Santé Jeunes",
    subtitle: "Service d'écoute anonyme et gratuit pour les 12-25 ans",
    phone: "0 800 235 236",
    email: "",
    hours: "Tous les jours de 9h à 23h",
    textButton: "Voir le site web",
    link: "https://www.filsantejeunes.com/",
  },

  avoidTitle: "Ce qu'il vaut mieux éviter",
  avoidBullets: [
    "Ne pas minimiser ou se moquer de ses peurs ou doutes.",
    "Éviter les injonctions du type « il faut », « tu dois » qui peuvent renforcer la pression.",
    "Ne pas se substituer à la personne : l'encourager à trouver ses propres solutions.",
    "Ne pas donner de conseils non sollicités : écouter est souvent plus précieux que conseiller.",
  ],

  sourcesText:
    "Sources : UNICEF, Psychologies Magazine, Portail Santé Université de Lyon, American Psychological Association.",
};

export default fr;
