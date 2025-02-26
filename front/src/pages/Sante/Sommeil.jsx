import "../../App.css";
import Quote from "../../components/Citation"; 
import ExternalLinkBlock from "../../components/Liens-ext";
import React from "react";
const resources = [
  {
    link: "https://www.nightline.fr/lyon",
    //imageSrc: "/src/assets/nightline_logo.png",
    label: "Nightline",
    description: "Un service d'écoute nocturne tous les soirs de 21h à 2h30",
  },
  {
    mail: "catherine@",//à voir
    label: "Infirmerie",
    description: "Ateliers de sophrologie/détente/relaxation et écoute",
  },
  {
    link: "",
    label: "",
    description: "",
  },
];

const Sommeil = () => {
    return (
      <div className="page"> 
        <h1 className="titre-page"> Sommeil</h1>
        <Quote 
        text="Le sommeil c'est la moitié de la santé" 
        author="MOI"
      />
       <div id = "Ressources_utiles">
      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites utiles à visiter"
        resources={resources}
      />
      </div>
        <p>Voici la page Sommeil</p>
      </div>
    );
  };
  
  export default Sommeil;