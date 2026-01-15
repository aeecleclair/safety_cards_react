"use client";

import ExternalLinkBlock from "./components/Liens-ext";
import RandomPageSelector from "./components/Randompage";
import { useLanguage } from "./providers/LanguageProvider";

const fr = {
  titleWelcomePrefix: "Bienvenue sur",
  titleBrand: "safety cards",
  introLine1:
    "Tu trouveras sur ce site des informations et ressources concernant une liste non exhaustive de thématiques relatives aux risques de la vie étudiante.",
  introLine2:
    "Si tu es à la recherche d'une information précise, accèdes-y en naviguant via le menu. Si tu as ton jeu Safety Cards en main, tu peux commencer à le parcourir et flasher le code QR présent en haut à droite de la carte lorsque la thématique t'intéresse. Si tu ne sais pas ce que tu cherches, tu peux lancer une recherche aléatoire ci-dessous !",
  introEmphasis:
    "Seulement l'essentiel des informations est donné pour chaque thématique. N'hésite pas à accéder aux sites spécialisés via les liens présents sur chaque page !",
  randomTitle: "Découvre une thématique aléatoire",
  contactsTitle: "Contacts de Centrale Lyon",
  contactsSubtitle: "Voici tous les contacts utiles pour les étudiants",
  resourcesTitle: "Les ressources globales",
  resourcesSubtitle:
    "Voici quelques sites regoupant un grand nombre d'informations sur diverses thématiques",

  contacts: [
    { link: "/astreinte", emoji: "🌙", label: "Astreinte" },
    {
      link: "https://campus.ec-lyon.fr/mission-egalite-femmes-hommes-12949.kjsp?RH=1460128042806",
      emoji: "📞",
      label: "Cellule d'écoute",
    },
    {
      link: "https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990",
      emoji: "🏥",
      label: "Infirmerie",
    },
    { link: "/pole-handicap", emoji: "♿", label: "Pôle handicap" },
    { link: "/service-social", emoji: "🤝", label: "Service social" },
    { link: "/vie-etudiante", emoji: "🎓", label: "Vie étudiante" },
  ],

  sites: [
    {
      link: "https://www.etudiant.gouv.fr/fr",
      imageSrc: "/assets/etudiant_gouv.jpg",
      label: "Etudiant.gouv.fr",
      description: "Le site officiel du gouvernement pour les étudiants",
    },
    {
      link: "https://www.lyoncampus.com/",
      imageSrc: "/assets/logo_lyon_campus.png",
      label: "Lyon Campus",
      description: "Etudier, vivre, sortir et s'impliquer comme étudiant à Lyon",
    },
    {
      link: "https://www.universite-lyon.fr/vie-des-campus/vie-etudiante/nos-portails-sante-et-aides-etudiantes/",
      imageSrc: "/assets/logo_UDL.png",
      label: "Portails Santé et Aides de l'UDL",
      description: "Toutes les informations, dispositifs et procédures",
    },
    {
      link: "https://commentonsaime.fr/",
      imageSrc: "/assets/logo-cosa.svg",
      label: "Comment on s'aime ?",
      description: "Pour se renseigner sur les relations amoureuses, amicales, familliales...",
    },
    {
      link: "https://www.crous-lyon.fr ",
      imageSrc: "/assets/logo_crous.png",
      label: "Crous de Lyon",
      description: "Aides, accompagnement, logements, restauration, international...",
    },
    {
      link: "https://www.filsantejeunes.com/",
      imageSrc: "/assets/fsj.png",
      label: "Fil Santé Jeunes",
      description: "Pour parler santé, sexualité, amour, mal être...",
    },
  ],
};

const en = {
  titleWelcomePrefix: "Welcome to",
  titleBrand: "safety cards",
  introLine1:
    "On this site you'll find information and resources about a non-exhaustive set of topics related to student life risks.",
  introLine2:
    "If you're looking for something specific, navigate via the menu. If you have your Safety Cards deck, start browsing it and scan the QR code at the top right of a card when the topic interests you. If you don't know what you need, try a random topic below!",
  introEmphasis:
    "Only the essentials are given for each topic. Feel free to open specialized sites using the links on each page!",
  randomTitle: "Discover a random topic",
  contactsTitle: "Centrale Lyon contacts",
  contactsSubtitle: "All useful contacts for students",
  resourcesTitle: "Global resources",
  resourcesSubtitle: "Some sites that gather a large amount of information on diverse topics",

  contacts: [
    { link: "/astreinte", emoji: "🌙", label: "On-call support" },
    {
      link: "https://campus.ec-lyon.fr/mission-egalite-femmes-hommes-12949.kjsp?RH=1460128042806",
      emoji: "📞",
      label: "Listening unit",
    },
    {
      link: "https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990",
      emoji: "🏥",
      label: "Medical office",
    },
    { link: "/pole-handicap", emoji: "♿", label: "Disability support" },
    { link: "/service-social", emoji: "🤝", label: "Social service" },
    { link: "/vie-etudiante", emoji: "🎓", label: "Student life" },
  ],

  sites: [
    {
      link: "https://www.etudiant.gouv.fr/en/welcome-france-2063",
      imageSrc: "/assets/etudiant_gouv.jpg",
      label: "Etudiant.gouv.fr",
      description: "Official government site for students (EN)",
    },
    {
      link: "https://www.lyoncampus.com/en/",
      imageSrc: "/assets/logo_lyon_campus.png",
      label: "Lyon Campus",
      description: "Study, live, go out and get involved in Lyon (EN)",
    },
    {
      link: "https://www.universite-lyon.fr/campus-life/live-well-on-our-campuses/health/",
      imageSrc: "/assets/logo_UDL.png",
      label: "UDL health and support portals",
      description: "All information, schemes and procedures (EN)",
    },
    {
      link: "https://commentonsaime.fr/",
      imageSrc: "/assets/logo-cosa.svg",
      label: "Comment on s'aime?",
      description: "Learn about romantic, friendly and family relationships (FR)",
    },
    {
      link: "https://www.crous-lyon.fr ",
      imageSrc: "/assets/logo_crous.png",
      label: "Crous Lyon",
      description: "Support, housing, catering, international... (FR)",
    },
    {
      link: "https://www.filsantejeunes.com/",
      imageSrc: "/assets/fsj.png",
      label: "Fil Santé Jeunes",
      description: "Talk about health, sexuality, love, distress... (FR)",
    },
  ],
};

export default function Home() {
  const { lang } = useLanguage() || { lang: 'fr' };
  const dict = { fr, en };
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">
        {t.titleWelcomePrefix} <span style={{ color: "#b22133" }}>{t.titleBrand}</span>
      </h1>

      <p className="texte">
        {t.introLine1} <br /> {t.introLine2}
        <br /> <em>{t.introEmphasis}</em>
      </p>

      <h1 className="titre">{t.randomTitle}</h1>
      <RandomPageSelector />

      <h1 className="titre">{t.contactsTitle}</h1>
      <ExternalLinkBlock
        subtitle={t.contactsSubtitle}
        resources={t.contacts}
      />

      <h1 className="titre">{t.resourcesTitle}</h1>
      <ExternalLinkBlock
        subtitle={t.resourcesSubtitle}
        resources={t.sites}
      />
    </div>
  );
}
