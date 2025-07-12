import React from "react";
import "../App.css";

import Quote from "../components/Citation"; 
import ImageTextPopup from "../components/Cartes"; 
import ListeNumerotee from "../components/Listes";
import ExternalLinkBlock from "../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../components/Common";
import ContactCard from "../components/Contact";
import Separateur from "../components/Separateur";
import { Chiffre, ChiffresGroup } from "../components/Chiffres";
import RandomPageSelector from "../components/Randompage";



const resources_contacts = [
  {
    link: "/astreinte",
    emoji: "🌙",
    label: "Astreinte"
  },
  {
    link: "/cellule-ecoute",
    emoji: "📞",
    label: "Cellule d'écoute",

  },
  {
    link: "/infirmerie",
    emoji: "🏥",
    label: "Infirmerie",
  },
  {
    link: "/pole-handicap",
    emoji: "♿",
    label: "Pôle handicap",
  },
  {
    link: "/service-social",
    emoji: "🤝",
    label: "Service social",
  },
  {
    link: "/vie-etudiante",
    emoji: "🎓",
    label: "Vie étudiante",
  },
];


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


const Home = () => {
  return (
    <div className = "page">


      <h1 className="titre-page">Bienvenue sur Safety Cards</h1>

      <p className="texte">Tu trouveras sur ce site des informations et ressources concernant une liste non exhaustive de thématiques relatives aux risques de la vie étudiante. <br/> Si tu es à la recherche d'une information précise, accèdes-y en naviguant via le menu. Si tu as ton jeu Safety Cards en main, tu peux commencer à le parcourir et flasher le code QR présent en haut à droite de la carte lorsque la thématique t'intéresse. Si tu ne sais pas ce que tu cherches, tu peux lancer une recherche aléatoire ci-dessous !
      <br/> <em>Seulement l'essentiel des informations est donné pour chaque thématique. N'hésite pas à accéder aux sites spécialisés via les liens présents sur chaque page !  </em></p>

      
      <h1 className = "titre">Découvre une thématique aléatoire</h1>
      <RandomPageSelector />

      <h1 className = "titre">Contacts de Centrale Lyon</h1>
      <ExternalLinkBlock
        subtitle="Voici tous les contacts utiles pour les étudiants"
        resources={resources_contacts}
      />

      <h1 className = "titre">Les ressources globales</h1>
      <ExternalLinkBlock
        subtitle="Voici quelques sites regoupant un grand nombre d'informations sur diverses thématiques"
        resources={resources_sites}
      />
    
      

    </div>
  );
};

export default Home;