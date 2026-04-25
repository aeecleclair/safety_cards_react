"use client";

import RandomTopicPreview from "./components/RandomTopicPreview";
import CategoryCarousels from "./components/CategoryCarousels";
import { pagesDataByLang } from "./components/pagesData";
import { useLanguage } from "./providers/LanguageProvider";
import "./home.css";
import Separateur from "./components/Separateur";

const fr = {
  titleWelcomePrefix: "Bienvenue sur",
  titleBrand: "safety cards",
  heroKicker: <>Retrouve ici toutes les informations et ressources concernant plus de 40 thématiques relatives aux risques de ta vie étudiante ! Tu peux découvrir une thématique aléatoire dans l'encadré à droite 👉 </>,
  statsTopics: "thématiques de prévention",
  statsFamilies: "grandes familles de risques",
  randomSectionTitle: "Découvre une nouvelle page !",
  randomReadMore: "Lire plus",
  randomAnotherTopic: "Découvrir une autre thématique",
  randomFallbackPreview:
    "Cette fiche te donne les points cles, les signaux d'alerte et les ressources utiles sur {topic}.",
  categoriesTitle: "Découvre toutes les thématiques abordées",
  categoriesPrev: "←",
  categoriesNext: "→",
  categoriesReadMore: "Lire plus",
  categoriesContactAction: "Contacter",
  categoriesExternalAction: "Découvrir",
  categoriesFallbackExcerpt:
    "Les essentiels sur {topic} : repères, conseils et ressources utiles.",
  categoriesResourceFallbackExcerpt:
    "Infos utiles, points de contact et orientation rapide vers les bons interlocuteurs.",
  supportSectionTitle: "Contacts et ressources externes",
  contactsTitle: "Contacts de Centrale Lyon",
  contactsSubtitle: "Aide, écoute et accompagnement au quotidien.",
  resourcesTitle: "Ressources externes complètes",
  resourcesSubtitle:
    "Des sites de confiance pour aller plus loin sur chaque sujet.",

  contacts: [
    { link: "/astreinte", emoji: "🌙", label: "Astreinte" },
    {
      link: "https://campus.ec-lyon.fr/mission-egalite-femmes-hommes-12949.kjsp?RH=1460128042806",
      emoji: "📞",
      label: "Cellule d'écoute",
      description: "Pour signaler à l'école un fait de VSS",
    },
    {
      link: "https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990",
      emoji: "🏥",
      label: "Infirmerie",
      description: "Pour un soutien médical ou psychologique",
    },
    { link: "/pole-handicap", emoji: "♿", label: "Pôle handicap", description: "Pour un accompagnement lié à une situation de handicap" },
    { link: "/service-social", emoji: "🤝", label: "Service social", description: "Pour un accompagnement social" },
    { link: "/vie-etudiante", emoji: "🎓", label: "Vie étudiante", description: "Pour un accompagnement dans ta vie étudiante" },
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
  heroKicker: <>Find all the information and resources you need here for over 40 topics related to student life risks! You can also discover a random topic in the box on the right 👉</>,
  statsTopics: "prevention topics",
  statsFamilies: "risk categories",
  randomSectionTitle: "Discover a new page!",
  randomReadMore: "Read more",
  randomAnotherTopic: "Show another page",
  randomFallbackPreview:
    "This page gives you key points, warning signs, and useful resources about {topic}.",
  categoriesTitle: "Explore the 6 main categories",
  categoriesPrev: "←",
  categoriesNext: "→",
  categoriesReadMore: "Read more",
  categoriesContactAction: "Contact",
  categoriesExternalAction: "Discover",
  categoriesFallbackExcerpt:
    "Key points on {topic}: warning signs, practical advice and useful resources.",
  categoriesResourceFallbackExcerpt:
    "Useful support information and direct access to trusted contacts and websites.",
  supportSectionTitle: "Contacts and external resources",
  contactsTitle: "Centrale Lyon contacts",
  contactsSubtitle: "Support, listening and guidance for daily student life.",
  resourcesTitle: "Top external resources",
  resourcesSubtitle: "Reliable websites to explore each topic in depth.",

  contacts: [
    { link: "/astreinte", emoji: "🌙", label: "On-call support" },
    {
      link: "https://campus.ec-lyon.fr/mission-egalite-femmes-hommes-12949.kjsp?RH=1460128042806",
      emoji: "📞",
      label: "Listening unit",
      description: "To report a VSS incident to the school",
    },
    {
      link: "https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990",
      emoji: "🏥",
      label: "Medical office",
      description: "For medical or psychological support",
    },
    { link: "/pole-handicap", emoji: "♿", label: "Disability support", description: "For support related to disability" },
    { link: "/service-social", emoji: "🤝", label: "Social service", description: "For social accompaniment" },
    { link: "/vie-etudiante", emoji: "🎓", label: "Student life", description: "For accompaniment in student life" },
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

  const currentData = pagesDataByLang[lang] || pagesDataByLang.fr;
  const topicCount = currentData.reduce((total, category) => total + category.items.length, 0);
  const familyCount = currentData.length;

  const categorySections = currentData.map((category) => ({
    title: category.category,
    items: category.items.map((item) => ({
      id: item.path,
      type: "topic",
      path: item.path,
      title: item.name,
    })),
  }));

  const supportSections = [
    {
      title: t.contactsTitle,
      gradientVariant: "support-contacts",
      items: t.contacts.map((item, index) => ({
        id: `contact-${index}`,
        type: "resource",
        title: item.label,
        link: item.link,
        imageSrc: item.imageSrc,
        emoji: item.emoji,
        excerpt: item.description || t.contactsSubtitle,
        buttonLabel: t.categoriesContactAction,
      })),
    },
    {
      title: t.resourcesTitle,
      gradientVariant: "support-resources",
      items: t.sites.map((item, index) => ({
        id: `resource-${index}`,
        type: "resource",
        title: item.label,
        link: (item.link || "").trim(),
        imageSrc: item.imageSrc,
        excerpt: item.description || t.resourcesSubtitle,
        buttonLabel: t.categoriesExternalAction,
      })),
    },
  ];

  const stats = [
    { value: `${topicCount}+`, label: t.statsTopics },
    { value: `${familyCount}`, label: t.statsFamilies },

  ];

  return (
    <div className="page home-modern-page">

      <section className="home-hero" >

          <h1 id="home-hero-title" className="home-hero-title">
            {t.titleWelcomePrefix} <span>{t.titleBrand}</span>
          </h1>


      <div className="home-hero-main">
        <div className="home-hero-left">
          <p className="home-hero-description">{t.heroKicker}</p>
          <div className="home-hero-stats" >

            {stats.map((stat) => (
              <article key={stat.label} className="home-hero-stat-card">
                <p className="home-hero-stat-value">{stat.value}</p>
                <p className="home-hero-stat-label">{stat.label}</p>
              </article>
          
          ))}

          </div>



        </div>

        <div className="home-hero-stats" >

          <RandomTopicPreview
              lang={lang}
              labels={{
                readMoreCta: t.randomReadMore,
                anotherTopicCta: t.randomAnotherTopic,
                fallbackPreview: t.randomFallbackPreview,
              }}
            />

        </div>
      </div>
    </section>

    <Separateur />






      <h1 className="titre">{t.categoriesTitle}</h1>
      <CategoryCarousels
        lang={lang}
        sections={categorySections}
        labels={{
          prevLabel: t.categoriesPrev,
          nextLabel: t.categoriesNext,
          readMoreLabel: t.categoriesReadMore,
          fallbackExcerpt: t.categoriesFallbackExcerpt,
          resourceFallbackExcerpt: t.categoriesResourceFallbackExcerpt,
        }}
      />

          <Separateur />


      <h1 className="titre">{t.supportSectionTitle}</h1>
      <CategoryCarousels
        lang={lang}
        sections={supportSections}
        labels={{
          prevLabel: t.categoriesPrev,
          nextLabel: t.categoriesNext,
          readMoreLabel: t.categoriesReadMore,
          fallbackExcerpt: t.categoriesFallbackExcerpt,
          resourceFallbackExcerpt: t.categoriesResourceFallbackExcerpt,
        }}
      />
    </div>
  );
}
