import React from "react";
import "../../App.css";
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  NumberedList,
  TextImageRight,
  ImageCenter,
  YouTubeVideo,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";

const navLinks = [
  { label: "Reconnaître une relation saine", target: "saine" },
  { label: "Repérer les signaux d’alerte", target: "alerte" },
  { label: "Soutien & ressources", target: "ressources" },
];

const resources_sites = [
  {
    link: "https://commentonsaime.fr/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s'aime ?",
    description: "Relations amoureuses, amicales, familiales : conseils & témoignages",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Parler anonymement de ses relations et de ses émotions",
  },
  {
    link: "https://www.etudiant.gouv.fr/fr",
    imageSrc: "/assets/etudiant_gouv.jpg",
    label: "Etudiant.gouv.fr",
    description: "Le portail officiel des aides, droits et dispositifs étudiants",
  },
];

const Couple = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Relations de couple</h1>
      <Navbar links={navLinks} />

      <div id="saine">
        <h1 className="titre">Reconnaître une relation saine</h1>
        <BulletList
          items={[
            "Confiance mutuelle et respect de l’intimité",
            "Communication ouverte, sans peur du jugement",
            "Consentement dans les relations physiques et émotionnelles",
            "Soutien réciproque dans les projets et les difficultés",
          ]}
        />

        <Quote text="L’amour ne devrait jamais faire peur." />
      </div>

      <Separateur />

      <div id="alerte">
        <h1 className="titre">Repérer les signaux d’alerte</h1>
        <BulletList
          items={[
            "Jalousie excessive, isolement de l’entourage",
            "Contrôle sur les vêtements, les sorties, les fréquentations",
            "Chantage affectif ou culpabilisation",
            "Violences verbales, physiques ou sexuelles",
          ]}
        />

        <p className="texte">
          Si tu ressens de la peur, de la pression ou de la perte d’autonomie dans ta relation, parle-en à quelqu’un en qui tu as confiance ou contacte un professionnel. Tu n’es pas seul·e.
        </p>

        <YouTubeVideo url="https://www.youtube.com/watch?v=1NO6h60fflc" />
      </div>

      <Separateur />

      <div id="ressources">
        <ExternalLinkBlock
          title="Sites d'écoute et d'information"
          subtitle="Pour mieux comprendre ou demander de l’aide en cas de doute"
          resources={resources_sites}
        />

        <ContactCard
          image="/assets/nightline_logo.png"
          title="Nightline Lyon"
          subtitle="Service d’écoute nocturne pour les étudiant·es"
          phone="04 85 30 00 10"
          email=""
          hours="Tous les soirs de 21h à 2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />

        <ContactCard
          image="/assets/fsj.png"
          title="Fil Santé Jeunes"
          subtitle="Écoute anonyme et gratuite pour les 12–25 ans"
          phone="0 800 235 236"
          email=""
          hours="Tous les jours de 9h à 23h"
          textButton="Voir le site web"
          link="https://www.filsantejeunes.com/"
        />
      </div>

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> Commentonsaime.fr, Fil Santé Jeunes, Nightline, CIDFF, État de l’art Centrale Lyon
        </em>
      </p>
    </div>
  );
};

export default Couple;