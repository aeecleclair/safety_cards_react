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
      
      <ImageTextPopup
        image="./src/assets/feu.jpg"
        title="La carte 6♠"
        shortText="Prévention sur la banalisation de l'alcool en soirée"
        longText="Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration.
        Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration."
        textButton="⤢ Agrandir la carte"
      />

      </div>

    );
  };
  
  export default Alcool;