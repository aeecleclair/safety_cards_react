import React from "react";
import "../App.css";

import Quote from "../components/Citation"; 
import ImageTextPopup from "../components/Cartes"; 
import ListeNumerotee from "../components/Listes";
import ExternalLinkBlock from "../components/Liens-ext";
import Components from "../components/Common";
import ContactCard from "../components/Contact";
import Separateur from "../components/Separateur";
import { Chiffre, ChiffresGroup } from "../components/Chiffres";
import RandomPageSelector from "../components/Randompage";


const { BulletList, NumberedList, TextImageRight, Navbar, YouTubeVideo, ImageCenter} = Components;




const NotFound = () => {
  return (
    <div className = "page">


      <h1 className="titre-page">Page non trouvée</h1>
 

      <TextImageRight
        text="Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            Veuillez vérifier l'URL ou retourner à la page d'accueil."
        imageSrc="/assets/404.png"></TextImageRight>
        



      
    </div>
  );
};

export default NotFound;