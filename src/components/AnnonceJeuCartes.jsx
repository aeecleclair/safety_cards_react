import React from "react";
import "./annonce-jeu-cartes.css";

const AnnonceJeuCartes = () => {
  return (
    <div className="annonce-jeu-cartes">
      <div className="annonce-content">
        <h2 className="annonce-titre">Distribution gratuite du jeu de cartes</h2>
        <p className="annonce-date">Le <b>14 octobre</b> à la <b>HH de prévention</b> !</p>
        <p className="annonce-texte">
          Viens récupérer ton jeu de cartes Safety Cards !
          <br />
          <span className="annonce-highlight">HH sans alcool - Nourriture et boissons gratuites</span>
        </p>
      </div>
      <div className="annonce-image-wrapper">
        <img src="/assets/jeu_cartes.jpg" alt="Jeu de cartes Safety Cards" className="annonce-image" />
      </div>
    </div>
  );
};

export default AnnonceJeuCartes;
