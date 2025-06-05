import React from "react";
import "../../App.css";
import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
 

const navLinks = [
  { label: "Qu'est-ce que l'identité de genre ?", target: "definition" },
  { label: "Comment bien accompagner un·e proche trans ?", target: "aider" },
  { label: "Quelles sont les démarches à suivre pour changer de sexe ?", target: "aider" }
  ];

import Workinprogress from "../../components/WorkInProgress";

const resources_sites = [

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
    description: "Etudier, vivre, sortir et s'impliquer comme étudiant à Lyon"
  },
  {
    link: "https://www.universite-lyon.fr/vie-des-campus/vie-etudiante/nos-portails-sante-et-aides-etudiantes/",
    imageSrc: "/assets/logo_UDL.png",
    label: "Portails Santé et Aides de l'UDL",
    description : "Toutes les informations, dispositifs et procédures"

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
];

const Genre = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Identité de genre</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Qu'est-ce que l'identité de genre ?</h1>
      </div>

      <h2 className="sous-titre-2">Définir l'identité de genre</h2>
      <p className="texte">On confond souvent identité de genre et expression de genre, mais ces notions sont différentes :</p>

      <BulletList items={[
        "L'identité de genre est la perception qu'une personne a d'elle-même en tant qu'homme, femme, ou autre genre. C'est une expérience personnelle et intime.",
        "L'expression de genre, en revanche, est la manière dont une personne manifeste son genre à travers son apparence, son comportement et ses interactions sociales.",
      ]} />

      <TextImageRight
        text="L'estime de soi repose sur trois piliers principaux : l'amour de soi (s'accepter tel qu'on est), la vision de soi (se voir de façon réaliste) et la confiance en ses capacités..."
        imageSrc="/assets/1-personne-gingenre.jpg"
      />

      <Workinprogress/>

      <h1 className="titre">Les ressources globales</h1>
      <ExternalLinkBlock
        subtitle="Voici quelques sites regoupant un grand nombre d'informations sur diverses thématiques"
        resources={resources_sites}
      />

      <Separateur />
      <div id="aider">
        <h1 className="titre">Comment bien accompagner un·e proche trans ?</h1>
      </div>

      <h2 className="sous-titre-2">Utiliser les bons termes</h2>
      <p className="texte">Il est essentiel d'utiliser les termes appropriés pour parler d'identité de genre. Voici quelques exemples de termes à privilégier et d'autres à éviter :</p>

      <BulletList items={[
        "Transidentités :  il permet de mettre l’accent sur l’identité sociale plutôt que sur la sexualité. Aussi, on préfèrera parler des personnes trans plutôt que de transsexuel·e·s/transgenres/transidentitaires, ce qui permet d’être le plus inclusif possible",
        "Homme trans : Personne assignée au regard des sciences biomédicales comme appartenant à la catégorie femelle et pour l’état civil au genre féminin, qui transitionne vers un genre masculin et/ou fluide.",
        "Femme trans : Personne assignée au regard des sciences biomédicales comme appartenant à la catégorie mâle et pour l’état civil au genre masculin, qui transitionne vers un genre féminin et/ou fluide.",
      ]} />
    </div> 
  );
};

export default Genre;
