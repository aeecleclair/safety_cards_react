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
  { label: "Exprimer & reconnaître", target: "exprimer" },
  { label: "Je suis victime ou témoin", target: "victime" },
  { label: "Ressources & outils", target: "ressources" },
];

const chiffresConsentement = [
  {
    number: "210 000",
    title: "Viols ou tentatives",
    description: "Chaque année en France (source INSEE 2023)",
  },
  {
    number: "32%",
    title: "Harcèlement sexuel au travail",
    description: "des femmes ont déjà été victimes",
  },
  {
    number: "9/10",
    title: "Victimes connaissaient l'agresseur",
    description: "dans les cas de viol ou d'agression sexuelle",
  },
];

const ressourcesConsentement = [
  {
    link: "https://www.consenti.fr/",
    label: "Consentis",
    description:
      "Association dédiée à la prévention et à l’éducation autour du consentement.",
  },
  {
    link: "https://www.sexualite-et-consentement.fr/",
    label: "Sexe & Consentement",
    description:
      "Campagne officielle « Sans oui, c’est interdit » du MESR et de l’association Sexe et Consentement.",
  },
  {
    link: "https://www.icicestcool.fr/",
    label: "Ici c'est cool",
    description:
      "Outils pour la prévention des violences sexistes et sexuelles en contexte festif.",
  },
  {
    link: "https://arretonslesviolences.gouv.fr/",
    label: "Arrêtons les violences",
    description:
      "Plateforme gouvernementale : informations, conseils, numéros d’aide.",
  },
  {
    link: "https://lessalopettes.wordpress.com",
    label: "Les Salopettes",
    description:
      "Collectif étudiant lyonnais engagé sur les questions de consentement et de VSS.",
  },
];

const ressourcesUrgence = [
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F3050",
    label: "Porter plainte",
    description: "Procédure officielle pour signaler une agression sexuelle.",
  },
  {
    link: "https://www.france-victimes.fr/",
    label: "France Victimes",
    description:
      "Accompagnement psychologique, juridique et social pour les victimes.",
  },
  {
    link: "https://enavanttoutes.fr/",
    label: "En Avant Toutes",
    description: "Soutien aux victimes et accompagnement en ligne, anonyme et gratuit.",
  },
];

const numUrgence = [
  {
    number: "17",
    title: "Police / Gendarmerie",
    description: "À contacter en cas d'urgence ou de danger immédiat.",
  },
  {
    number: "0 800 05 95 95",
    title: "Viols Femmes Info",
    description: "Numéro gratuit, anonyme et confidentiel, 7j/7, 24h/24.",
  },
  {
    number: "3919",
    title: "Violences Femmes Info",
    description:
      "Écoute, orientation et accompagnement gratuit et anonyme.",
  },
];

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
        image="./assets/cartes/consentement.png"
        title="Consentement : les bases"
        shortText="Le consentement doit être libre, éclairé, explicite et révocable."
        longText="Le consentement, c’est donner son accord à une action de manière libre, claire et volontaire. Sans consentement, un acte sexuel constitue une agression ou un viol. Le consentement doit être donné par la personne concernée, être éclairé, et il peut être retiré à tout moment."
        textButton="⤢ Agrandir la carte"
        suit="coeur"
      />

      <h2 className="sous-titre-2">Chiffres clés</h2>
      <ChiffresGroup chiffres={chiffresConsentement} />

      <Quote
        text="Sans un OUI clair et enthousiaste, c’est NON."
        author="Campagne « Sans oui, c’est interdit »"
      />

      <Separateur />

      {/* 2. Exprimer et reconnaître */}
      <div id="exprimer">
        <h1 className="titre">Exprimer & reconnaître le consentement</h1>
      </div>

      <h2 className="sous-titre-2">Les 4 principes essentiels</h2>
      <BulletList
        items={[
          "Libre : donné sans pression, menace, manipulation ni contrainte.",
          "Éclairé : la personne comprend parfaitement la situation.",
          "Explicite : un vrai OUI clair, verbal ou non verbal.",
          "Révocable : on peut changer d’avis à tout moment.",
        ]}
      />

      <h2 className="sous-titre-2">Faux « oui » à éviter</h2>
      <BulletList
        items={[
          "Dire oui par peur, pour éviter un conflit ou « faire plaisir ».",
          "Dire oui sans comprendre la situation.",
          "Ne pas dire non par crainte : le silence n’est PAS un consentement.",
          "Les gestes, la tenue ou le flirt ne valent JAMAIS consentement.",
        ]}
      />

      <h2 className="sous-titre-2">Le consentomètre</h2>
      <p className="texte">
        Le consentomètre est un outil interactif qui t’aide à évaluer si une
        situation est saine. Il repose sur des scénarios concrets et te montre
        comment reconnaître un vrai OUI.
      </p>

      <YouTubeVideo url="https://www.youtube.com/watch?v=fGoWLWS4-kU" />

      <Separateur />

      {/* 3. Je suis victime ou témoin */}
      <div id="victime">
        <h1 className="titre">Je suis victime ou témoin</h1>
      </div>

      <p className="texte">
        Si tu subis ou es témoin d’une situation où le consentement n’est pas
        respecté, il est essentiel d’en parler. Tu peux te tourner vers un·e
        ami·e, un·e référent·e, une association ou directement les secours.
      </p>

      <h2 className="sous-titre-2">Numéros utiles</h2>
      <ChiffresGroup chiffres={numUrgence} />

      <h2 className="sous-titre-2">Associations & accompagnement</h2>
      <ExternalLinkBlock resources={ressourcesUrgence} />

      <Separateur />

      {/* 4. Ressources et outils */}
      <div id="ressources">
        <h1 className="titre">Ressources & outils</h1>
      </div>

      <ExternalLinkBlock
        title="Liens utiles"
        subtitle="Pour en savoir plus et obtenir de l'aide"
        resources={ressourcesConsentement}
      />

      <ContactCard
        image="/assets/consentis.png"
        title="Consentis"
        subtitle="Association de prévention autour du consentement"
        phone="07 68 44 80 32"
        textButton="Découvrir Consentis"
        link="https://www.consenti.fr/"
        bgColor="#ffffff"
        textColor="#c7000b"
      />

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> Portail santé UDL, Consentis, Ici c’est cool, Ministère
          de l’Enseignement Supérieur, Arrêtons les violences, Observatoire VSS,
          Les Salopettes.
        </em>
      </p>
    </div>
  );
};

export default Consentement;
