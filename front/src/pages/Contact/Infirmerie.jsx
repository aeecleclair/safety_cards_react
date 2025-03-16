import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";

const { BulletList, NumberedList, TextImageRight, ImageCenter, Navbar, YouTubeVideo} = Components;

 

const Infirmerie = () => {
    return (
      <div className="page">
        <h1 className="titre-page">Infirmerie</h1>
        
          <h1 className="sous-titre-2">Contact</h1>

          <p className="texte"> Mail :</p>
          <p className = "texte"> Téléphone : </p>

      </div>
    );
  };
  
  export default Infirmerie;

