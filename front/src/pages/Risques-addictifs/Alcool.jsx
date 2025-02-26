import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import "../../App.css";


const Alcool = () => {
    return (
      <div className="page">
        <h1 className="titre-page">Alcool</h1>
        <p>Voici la page Alcool</p>
        
      <Quote 
        text="Il ne faut pas que j'oublie de modifier cette citation." 
        author="Loraline"
      />
      </div>
      
    );
  };
  
  export default Alcool;