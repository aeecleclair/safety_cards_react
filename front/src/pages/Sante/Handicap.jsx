import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import { image, img } from "framer-motion/client";


const navLinks = [
  { label: "Le constat", target: "constat" },
  { label: "Les aides à Centrale", target: "internes" },
  { label: "Les ressources externes", target: "externes" },
  { label: "Les droits", target: "droits" },
  { label: "Tu es jeune aidant·e ?", target: "aidants" },
  { label: "S'adapter en tant qu'association", target: "association" }
];

const data = [
  {
    number: "8,9%",
    title: "des personnes",
    description:
      "ont au moins un handicap parmi les catégories suivantes : troubles moteurs, sensoriels, du langage, psychiques, viscéraux, cognitifs et autistiques"
  },
  {
    number: "12%",
    title: "des étudiants",
    description:
      "déclarent avoir un trouble de santé durable ayant un impact sur leurs études (source : OVE, 2020)"
  }
];



const ressourcesUtiles = [

  {
    link: "https://monparcourshandicap.gouv.fr",
    label: "Mon parcours handicap",
    description: "Accompagnement personnalisé en ligne",
    imageSrc: "/assets/rep-logo.png"
  },
  {
    link: "https://www.agefiph.fr",
    label: "AGEFIPH",
    description: "Aide à l'insertion professionnelle des personnes handicapées"
  },
  {
    link: "https://www.handicap-job.com",
    label: "Handicap Job",
    description: "Plateforme d’emploi dédiée aux personnes en situation de handicap",
    imageSrc: "/assets/logo-handicap-job.png"
  }
];


const ressourceUtile_droitausavoir = [
  {
    link: "https://droitausavoir.asso.fr",
    label: "Droit au savoir",
    description: "Comprendre les différents types de handicap"
  }
];

const dispositifsLiens = [
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F12242",
    label: "AAH – Allocation aux Adultes Handicapés",
    imageSrc:"/assets/rep-logo.png",
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F14809",
    label: "RQTH – Reconnaissance Travailleur Handicapé",
    imageSrc:"/assets/rep-logo.png",
  },
  {
    link: "https://monparcourshandicap.gouv.fr/",
    label: "Mon Parcours Handicap",
    imageSrc:"/assets/rep-logo.png",
  }
];

const lienPauseBrindille = [
  {
    link: "https://lapausebrindille.org/",
    label: "La Pause Brindille",
    description: "Plateforme dédiée aux jeunes aidants",
    imageSrc: "/assets/pause-brindille.png"
  }
];

const guideAccessibilite = [
  {
    link: "https://lecollectifdesfestivals.org/collectif/2015/10/guide-pratique-de-laccessibilite-evenementielle",
    label: "Guide accessibilité événementielle",
    description: "Ressource à destination des associations et organisateurs d'événements",
    imageSrc: "/assets/collectif-festivals.png"
  }
];



const droits = [
  {
    title: "AEEH – Allocation d’éducation de l’enfant handicapé",
    subtitle: "Aide financière mensuelle pour les parents d’enfants en situation de handicap, destinée à compenser les dépenses liées au handicap."
  },
  {
    title: "AAH – Allocation aux Adultes Handicapés",
    subtitle: "Revenu minimum pour les personnes en situation de handicap ne pouvant pas ou plus travailler, sous conditions de ressources."
  },
  {
    title: "Carte d’invalidité / priorité / stationnement",
    subtitle: "Cartes permettant des avantages spécifiques : accès prioritaire, stationnement facilité ou reconnaissance administrative du handicap."
  },
  {
    title: "PCH – Prestation de Compensation du Handicap",
    subtitle: "Aide personnalisée couvrant les besoins liés à une perte d’autonomie (aide humaine, aménagement du logement, matériel, etc.)."
  },
  {
    title: "RQTH – Reconnaissance de la Qualité de Travailleur Handicapé",
    subtitle: "Statut facilitant l'accès et le maintien dans l’emploi, permettant des aménagements spécifiques et un accompagnement personnalisé."
  },
  {
    title: "Projet Personnalisé de Scolarisation",
    subtitle: "Document mis en place par l’Éducation nationale pour organiser les aides et aménagements nécessaires à la scolarité de l’élève."
  },
  {
    title: "Aménagements d’examens – tiers temps, locaux adaptés, etc.",
    subtitle: "Dispositifs accordés aux étudiants en situation de handicap pour garantir l’équité lors des examens ou concours."
  },
  {
    title: "Soutien des maisons départementales des personnes handicapées (MDPH)",
    subtitle: "Guichet unique pour l’information, l’orientation et la gestion des droits liés au handicap (aides financières, orientations, etc.)."
  }
];


const jeunesAidants = [
  {
    title: "Brind’Écoute",
    subtitle:
      "Service d’écoute (chat/sms/téléphone) pour jeunes aidants"
  },
  {
    title: "Brind’Partage",
    subtitle: "Rencontres mensuelles pour jeunes aidants sur Lyon"
  },
  {
    title: "Tribu Brindille",
    subtitle: "Journée d’amusement et de répis pour les jeunes aidants"
  },
  {
    title: "Plateforme Jeunes Aidants",
    subtitle: "Informations et accompagnement dédiés aux moins de 25 ans aidants"
  }
];

const SituationHandicap = () => (
  <div className="page">
    <h1 className="titre-page">Situation de Handicap</h1>
    <Navbar links={navLinks} />

    <div id="constat">
      <h2 className="titre">Le constat</h2>
      <p className="texte">
        Le handicap recouvre une grande diversité de réalités, qu’il soit visible ou invisible. 
        Il peut être temporaire ou permanent, et concerner des fonctions physiques, mentales, 
        cognitives ou sensorielles. Dans le contexte universitaire, cela peut impacter la mobilité, 
        la communication, la concentration ou encore l'accès à l'information.
      </p>
      <ChiffresGroup chiffres={data} />
      <Quote
        author="Rapport OVE 2020"
        text="Les étudiants en situation de handicap font face à des obstacles multiples, souvent invisibles, dans leur quotidien universitaire."
      />
      <ExternalLinkBlock resources={ressourceUtile_droitausavoir} />
    </div>

      <ImageTextPopup
        image="./assets/work_in_progress.jpg"
        title="La carte V♠"
        shortText="Situation de handicap : comprendre et aider"
        longText="Situation de handicap : comprendre et aider"
        textButton="⤢ Agrandir la carte"
      />

    <Separateur />

    <div id="internes">
      <h2 className="titre">Les aides à Centrale</h2>
      <p className="texte">
        Centrale Lyon déploie une politique inclusive avec :
      </p>
      <p className="texte">
        L’école met en œuvre des mesures concrètes pour garantir l’égalité des chances. 
        Des actions de sensibilisation sont régulièrement proposées à l’ensemble de la communauté étudiante 
        et enseignante pour favoriser l’inclusion. Un accompagnement individualisé peut être mis en place 
        en fonction des besoins exprimés.
      </p>
      <BulletList
        items={[
          "Formation LSF & Label Handimanagement",
          "Actions de prévention (Day in the Dark, Journée des DYS)",
          "Budget de 6000 € pour la formation en Langue des Signes",
          "Référent handicap dédié à l’accompagnement personnalisé",
          "Accessibilité physique des locaux en amélioration continue"
        ]}
      />
    </div>

    <Separateur />

    <div id="externes">
      <h2 className="titre">Ressources externes</h2>
    </div>
      <p className="texte">
        De nombreuses structures extérieures proposent un accompagnement complémentaire, 
        que ce soit sur le plan médical, social ou éducatif. Ces ressources sont utiles à la fois pour 
        les démarches administratives et pour le soutien psychologique.
      </p>
      <ExternalLinkBlock resources={ressourcesUtiles} />
     


      <ContactCard
            title="Crous Lyon"
            subtitle="Soutien social, logement, aides financières."
            phone="0800 73 08 15"
            email="handicap@crous-lyon.fr"
            textButton="Visiter le site"
            link="https://www.crous-lyon.fr/social-et-accompagnement/"
            image="/assets/logo_crous.png"
            bgColor="#ffffff"
            textColor="#e30613"

          />


    <Separateur />

    <div id="droits">
      <h2 className="titre">Droits des personnes en situation de handicap</h2>
      <p className="texte">
        Il existe en France de nombreux dispositifs pour compenser les conséquences du handicap 
        et soutenir les parcours de formation. Ces droits peuvent concerner la scolarité, le financement, 
        l’accessibilité ou encore l’accès à l’emploi. Leur mise en œuvre dépend souvent d’une reconnaissance administrative.
      </p>
      <ListeNumerotee
        title="Principaux dispositifs"
        subtitle="Aides et allocations"
        items={droits}
      />
      <ExternalLinkBlock resources={dispositifsLiens} />
    </div>

    <Separateur />

    <div id="aidants">
      <h2 className="titre">Soutien aux jeunes aidants</h2>
      <p className="texte">
        Les jeunes aidants sont souvent invisibles. Ce sont des personnes entre 7 et 25 ans qui accompagnent au quotidien un proche en situation de 
        handicap, de maladie, de dépendance ou d'addiction, tout en poursuivant leurs études. Ils sont plus d'un million en France. Ces situations peuvent générer de la fatigue, de l’isolement 
        ou des difficultés scolaires. Des structures comme La pause Brindille visent à leur offrir un espace 
        d’écoute, de partage et de répit.
      </p>
      <ListeNumerotee
        title="La pause Brindille"
        subtitle="Services et événements"
        items={jeunesAidants}
      />
      <ExternalLinkBlock resources={lienPauseBrindille} />
    </div>

    <Separateur />

    <div id="association">
      <h2 className="titre">S'adapter en tant qu'association</h2>
      <p className="texte">
        Des ressources existent pour accompagner les associations dans la prise en compte du handicap dans l'organisation d'événements ou d'activités.
      </p>
      <ExternalLinkBlock resources={guideAccessibilite} />
    </div>

    <Separateur />

    <p className="texte">
      <em>
        <b>Sources :</b> Mon Parcours Handicap, Droit au Savoir, MDPH, Crous Lyon, Planning Familial ARA, La pause Brindille, OVE 2020, AGEFIPH, Handicap Job
      </em>
    </p>
  </div>
);

export default SituationHandicap;
