import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  YouTubeVideo,
  TextImageRight,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Comprendre le consentement", target: "definition" },
  { label: "Je suis victime ou témoin", target: "victime" },
  { label: "Ressources & outils de prévention", target: "ressources" },
];

const principes = [
  { title: "Volontaire", subtitle: "Céder face à l'insistance, la pression, le chantage affectif n'est pas consentir." },
  { title: "Clair", subtitle: "L'absence de refus ne vaut pas consentement. En cas de doute, il faut demander !" },
  { title: "Lucide", subtitle: "La personne doit être en capacité de consentir : si elle est très alcoolisée, endormie, inconsciente ou droguée, elle n'est pas consentante." },
  { title: "Spécifique", subtitle: "Il est donné à chaque étape et à chaque fois." },
  { title: "Révocable", subtitle: "On peut changer d'avis à n'importe quel moment d'une activité sexuelle." },
];

const salopettes = [
  {
    link: "https://lessalopettes.wordpress.com",
    label: "Les Salopettes",
    description: "Collectif étudiant de  l'ENS Lyon engagé sur les questions de consentement et de VSS.",
  },
];

const chiffresConsentement = [
  {
    number: "210 000",
    title: "viols ou tentatives",
    description: "chaque année en France",
  },
  {
    number: "32%",
    title: "des femmes ",
    description: "ont déjà été victimes de harcèlement sexuel au travail",
  },
  {
    number: "9/10",
    title: "Victimes",
    description: "connaissaient l'agresseur dans les cas de viol ou d'agression sexuelle",
  },
];

const ressourcesConsentement = [
  {
    link: "https://www.consentis.info/",
    label: "Consentis",
    description:"Monter des dispositifs en milieu festifs et sensibiliser au consentement.",
      imageSrc : "/assets/consentis.png",
  }
];

const proposition_loi = [
  {
    link: "https://www.vie-publique.fr/loi/297985-loi-consentement-definition-penale-du-viol",
    label: "La proposition de loi",
    description: "visant à modifier la définition pénale du viol et des agressions sexuelles ",
    imageSrc : "/assets/rep-logo.png",
  }
];

const couple = [
  {
    link: "https://www.pourquoidocteur.fr/Articles/Question-d-actu/25071-Sexualite-Dans-un-couple-le-consentement-est-indispensable",
    label: "Relations de couple",
    description: "Car le consentement ne doit pas être oublié dans une relation longue.",
    emoji: "💑",
  },
];


const consentometre = [
  {
    link:"assets/Consentometre.pdf",
    emoji: "📄",
    label: "Consentomètre",
    description: "un outil permettant aux étudiant·es de situer leur niveau de consentement dans toutes les situations de leur vie ",
  },
];

const vss = [
  {
    link: "/vss",
    label: "VSS",
    description: "Réagir face aux violences sexistes et sexuelles",
    emoji: "🫂",
  },
]

const Consentement = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Consentement</h1>
      <Navbar links={navLinks} />

      {/* 1. Comprendre le consentement */}
      <div id="definition">
        <h1 className="titre">Comprendre le consentement</h1>
      </div>

      <ImageTextPopup
        image="./assets/cartes/4_coeur.png"
        title="La carte 4♥"
        shortText="La notion de consentement"
        longText=""
        textButton="⤢ Agrandir la carte"
        suit="coeur"
      />

      <h2 className="sous-titre-2">Chiffres clés</h2>
      <ChiffresGroup chiffres={chiffresConsentement} />


      <h2 className="sous-titre-2">Les 5 principes essentiels du consentement</h2>

      <ListeNumerotee 
      items={principes} 
      title={"Les principes du consentement"}
      subtitle={"Le consentement doit être..."}/>

      <ExternalLinkBlock resources={salopettes} />

      <h2 className="sous-titre-2">Le consentement et la loi</h2>
      <p className="texte">
        Légalement, les actes sexuels avec un·e <b>mineur·e de moins de 15 ans</b> constituent une infraction, quel que soit le « consentement » allégué
        (seuil porté à <b>18 ans</b> en cas d’<b>inceste</b>).
      </p>
      <p className="texte"> Au moment où nous écrivons ces lignes, la loi française ne définit pas précisément le consentement au-delà de ce cadre. Une proposition de loi a été déposée le 21 janvier 2025 afin de préciser la notion de consentement et la manière de l'apprécier. Cela devrait à terme permettre de mieux protéger les victimes. <b>Le Sénat et l'Assemblée nationale devraient bientôt s'accorder sur une version finale du texte.</b></p>
      <ExternalLinkBlock resources={proposition_loi} />




      <h2 className="sous-titre-2">Le faux « oui » à éviter</h2>
      <BulletList
        items={[
          "Dire oui par peur, pour éviter un conflit ou « faire plaisir ».",
          "Dire oui alors qu'on est alcoolisé·e, drogué·e, fatigué·e...",
          "Ne pas dire non par crainte : le silence n’est PAS un consentement.",
          "Les gestes, la tenue ou le flirt ne valent JAMAIS consentement.",
        ]}
      />

      <Quote
        text="Sans un OUI clair, lucide, révocable et enthousiaste, c’est NON."
      />

      <p className="texte"> Même dans une <b>relation de couple</b>, le consentement est indispensable. Il n’y a pas de droit au corps de l’autre, ni de « devoir » conjugal. Si tu sens que ton consentement n’est pas respecté, il est important d’en parler.</p>

      <ExternalLinkBlock resources={couple} />

      <h2 className="sous-titre-2">Le consentomètre</h2>
      <p className="texte">
        Le consentomètre est un outil interactif qui t’aide à évaluer si une
        situation est saine. Il repose sur des scénarios concrets et te montre
        comment reconnaître un vrai OUI.
      </p>
      <ExternalLinkBlock resources={consentometre} />



      <YouTubeVideo url="https://www.youtube.com/watch?v=fGoWLWS4-kU" />

      <Separateur />

      {/* 3. Je suis victime ou témoin */}
      <div id="victime">
        <h1 className="titre">Je suis victime ou témoin</h1>
      </div>

      <p className="texte">
        Si tu subis ou es témoin d’une situation où le consentement n’est pas
        respecté, il est essentiel d’en parler. Tu peux te tourner vers un·e
        ami·e, un·e référent·e, une association ou directement les secours (17 pour la police).
      </p>

      <ContactCard
          image="/assets/arretons_violence.svg"
          title="Arrêtons les violences"
          subtitle="Aide au téléphone, en ligne, ou via une association"
          hours="24h/24, 7j/7"
          phone="3919"
          textButton="J'ai besoin d'aide"
          link="https://arretonslesviolences.gouv.fr/besoin-d-aide"
          bgColor="#ffffff"
          textColor="#CC3C32"
        />

        <ExternalLinkBlock resources={vss} />


      <Separateur />

      {/* 4. Ressources et outils */}
      <div id="ressources">
        <h1 className="titre">Ressources & outils de prévention</h1>
      </div>

      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Pour faire de la prévention sur le consentement"
        resources={ressourcesConsentement}
      />


      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> Portail santé UDL, Consentis, Ministère
          de l’Enseignement Supérieur, Arrêtons les violences, Observatoire VSS,
          Les Salopettes.
        </em>
      </p>
    </div>
  );
};

export default Consentement;
