import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";

const navLinks = [
  { label: "Les essentiels", target: "resume-conseils" },
  { label: "Comprendre", target: "definition" },
  { label: "Agir & prévenir", target: "prevention" },
  { label: "Ressources", target: "ressources" }
];

const chiffresMenstruels = [
  { number: "3,25%", title: "des étudiantes", description: "ont déjà eu des difficultés à acheter des protections" },
  { number: "1,3%", title: "des étudiants", description: "rencontrent des difficultés à accéder à la contraception" },
];

const infosPratiques = [
  "Des protections hygiéniques sont disponibles gratuitement à l’infirmerie (bâtiment U).",
  "La précarité menstruelle peut impacter la santé, le confort, la réussite académique.",
  "Une écoute et un accompagnement sont proposés par l’assistante sociale sur RDV."
];

const conseils = [
  {
    title: "S’informer sur ses droits",
    subtitle: "Des aides existent. La précarité menstruelle est une question de dignité, pas un tabou."
  },
  {
    title: "Ne pas hésiter à demander de l’aide",
    subtitle: "Infirmière, assistante sociale, associations étudiantes : les interlocuteurs sont là pour vous."
  },
  {
    title: "Profiter des distributions gratuites",
    subtitle: "Des serviettes, tampons ou culottes menstruelles sont accessibles dans certains lieux du campus."
  }
];

const ressourcesUtiles = [
  {
    link: "https://www.regleselementaires.com/",
    label: "Règles Élémentaires",
    description: "Première association française de lutte contre la précarité menstruelle",
    imageSrc: "/assets/logo-regles-elementaires.jpg"
  },
  {
    link: "https://www.wenabi.com/ressources/precarite-menstruelle",
    label: "Wenabi",
    description: "Fiches pratiques et actions solidaires",
    imageSrc: "/assets/logo-wenabi.png"
  },
  {
    link: "https://www.etudiant.gouv.fr/fr",
    label: "Etudiant.gouv.fr",
    description: "Portail national pour les aides étudiantes",
    imageSrc: "/assets/etudiant_gouv.jpg"
  }
];

const PrecariteMens = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Précarité menstruelle</h1>
      <Navbar links={navLinks} />

      <div id="resume-conseils">
        <h2 className="titre">Les essentiels</h2>
        <p className="mise-avant"><b>Vous n’êtes pas seule.</b> À Centrale Lyon, des protections sont disponibles gratuitement et confidentiellement.</p>
        <p className="mise-avant">Besoin d’écoute ? Contactez l’infirmerie au <b>06 72 15 74 78</b> ou l’assistante sociale.</p>
      </div>

      <div id="definition">
        <h1 className="titre">Comprendre la précarité menstruelle</h1>
        <p className="texte">
          La précarité menstruelle désigne le manque d’accès à des protections hygiéniques pour des raisons économiques. Elle a des conséquences sur la santé physique, mentale, la scolarité et l’insertion sociale.
        </p>
        <BulletList items={infosPratiques} />
        <ChiffresGroup chiffres={chiffresMenstruels} />
      </div>

      <ImageTextPopup
        image="/assets/carte_regles.jpg"
        title="Carte 5♥"
        shortText="Plus jamais dans le rouge"
        longText="Cette carte propose à Léo d’intervenir pour aider une amie à se fournir en protections hygiéniques sans honte ni gêne. Une manière de normaliser la précarité menstruelle sur le campus."
        textButton="⤢ Voir la carte"
      />

      <Separateur />

      <div id="prevention">
        <h1 className="titre">Agir & prévenir</h1>
        <p className="texte">
          Des solutions simples et concrètes existent pour lutter contre cette injustice silencieuse.
        </p>

        <ListeNumerotee
          title="Que faire en tant qu’étudiante ?"
          subtitle="Des gestes simples pour ne pas subir"
          items={conseils}
        />
      </div>

      <Separateur />

      <div id="ressources">
        <h1 className="titre">Ressources utiles</h1>
        <ExternalLinkBlock
          title="Aller plus loin"
          subtitle="Sites, aides, informations complémentaires"
          resources={ressourcesUtiles}
        />
      </div>

      <Quote
        texte="Plus jamais dans le rouge."
        auteur="Carte 5♥ – Safety Cards"
      />

      <p className="texte"><em><b>Sources :</b> État de l’art PE5 – Centrale Lyon, Règles Élémentaires, Wenabi, Ministère de l’Enseignement Supérieur</em></p>
    </div>
  );
};

export default PrecariteMens;
