import QuoteCard from "../components/Citation"; 
import ImageTextPopup from "../components/Cartes"; 
import ListeNumerotee from "../components/Listes";
import ExternalLinkBlock from "../components/Liens-ext";
import ContactCard from "../components/Contact";
import React from "react";
import "../App.css";



const items = [
  { title: "Approcher", subtitle: "Approcher la personne, évaluer et assister" },
  { title: "Écouter", subtitle: "Écouter, activement et sans jugement" },
  { title: "Réconforter", subtitle: "Réconforter et informer" },
  { title: "Encourager", subtitle: "Encourager à aller vers des professionnels" },
  { title: "Renseigner", subtitle: "Renseigner sur les autres ressources disponibles" },
];



const quotes = [
  { text: "Le succès, c'est tomber sept fois et se relever huit.", author: "Proverbe japonais" },
  { text: "La meilleure façon de prédire l’avenir, c’est de le créer.", author: "Peter Drucker" },
  { text: "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.", author: "Antoine de Saint-Exupéry" },
];

const resources = [
  {
    link: "https://www.nightline.fr/lyon",
    imageSrc: "/src/assets/nightline_logo.png",
    label: "Nightline",
    description: "Un service d'écoute nocturne tous les soirs de 21h à 2h30",
  },
  {
    link: "https://www.github.com",
    
    label: "GitHub",
    description: "Plateforme de gestion de code source",
  },
  {
    link: "https://www.wikipedia.org",
    label: "Wikipedia",
    description: "Encyclopédie en ligne gratuite",
  },
];

const Home = () => {
  return (
    <div className = "page">
      <h1 className="titre-page">Bienvenue sur Safety Cards</h1>
      <h2 className="sous-titre-page">Des cartes pour apprendre à se protéger</h2>
      <p className="text-classic">Bienvenue sur Safety Cards, un site pour apprendre à se protéger et à protéger les autres. Vous trouverez ici des cartes sur différents sujets, des citations inspirantes et des listes numérotées pour vous aider à mieux comprendre les risques et les enjeux de la vie quotidienne.
        <em> Généré par IA.</em>
      </p>
      <QuoteCard quotes={quotes} />
      <ImageTextPopup
        image="./src/assets/feu.jpg"
        title="La carte 3♠"
        shortText="Prévention sur les risques d'incendie"
        longText="Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration.
        Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration."
        textButton="⤢ Agrandir la carte"
      />
    

      <ListeNumerotee 
         title="Plan d'action pour les Premiers Secours en Santé Mentale" 
          subtitle="Comment agir face à une personne en détresse ?" 
          items={items} 
      />

      <ContactCard
        image="/src/assets/nightline_logo.png" 
        title="Nightline Lyon"
        subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
        phone="04 85 30 00 10"
        email=""
        hours="Tous les soirs de 21h à 2h30"
        textButton="Voir le site web"
        link="https://www.nightline.fr/lyon"
      />

      <ContactCard
        image="/src/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
        title="Infirmerie"
        subtitle="Infirmerie de Centrale Lyon"
        phone="Voir les informations"
        email="Voir les informations"
        hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
        textButton="Voir les informations"
        link="https://www.nightline.fr/lyon"

        bgColor="#ffffff"    //informations facultatives
        textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées


      />

      <ContactCard
        image="/src/assets/3114.jpg" 
        title="3114"
        subtitle="Numéro national de prévention du suicide"
        phone="3114"
        email=""
        hours="24h/24 et 7j/7"
        textButton="Voir le site web"
        link="https://3114.fr/"

      />


      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites utiles à visiter"
        resources={resources}
      />

    </div>
  );
};

export default Home;