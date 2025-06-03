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




const resources_ea = [

  {
    link: "/docs/ETAT DE L'ART_11_05.pdf",
    emoji: "📄",
    label: "Etat de l'art",
  },
 
];

const resources_rvp = [

  {
    link: "/docs/RGP_final_PE5.pdf",
    emoji: "1️⃣",
    label: "Notre RVP1",
  },

    {
    link: "/docs/RVP2.pdf",
    emoji: "2️⃣",
    label: "Notre RVP2",
  },
 
 
];


const PE5 = () => {
  return (
    <div className = "page">


      <h1 className="titre-page">Le PE5</h1>



      <h1 className = "titre">L'état de l'art</h1>
      <ExternalLinkBlock
        subtitle="L'Etat de l'art ayant servi à l'élaboration du projet Safety Cards"
        resources={resources_ea}
      />
    
      <h1 className = "titre">Les RVP</h1>
      <ExternalLinkBlock
        subtitle="Nos 2 RVP"
        resources={resources_rvp}
      />
      

    </div>
  );
};

export default PE5;