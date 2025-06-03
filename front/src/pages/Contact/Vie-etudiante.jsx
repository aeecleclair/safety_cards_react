import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";

 

const Vie_etudiante = () => {
    return (
      <div className="page">
        <h1 className="titre-page">Vie étudiante</h1>
        
          <h1 className="sous-titre-2">Contact</h1>

          <p className="texte"> Mail :</p>

      </div>
    );
  };
  
  export default Vie_etudiante;

