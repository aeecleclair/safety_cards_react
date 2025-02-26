import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import "../../App.css";

const { BulletList, NumberedList, TextImageRight, Navbar, YouTubeVideo} = Components;

const navLinks = [
  { label: "Plan d'action", target: "Plan_action" },
  { label: "Contacts utiles", target: "Contacts" },
  { label: "Ressources utiles", target: "Ressources_utiles" }
];

const items = [
  { title: "Approcher", subtitle: "Approcher la personne, évaluer et assister" },
  { title: "Écouter", subtitle: "Écouter, activement et sans jugement" },
  { title: "Réconforter", subtitle: "Réconforter et informer" },
  { title: "Encourager", subtitle: "Encourager à aller vers des professionnels" },
  { title: "Renseigner", subtitle: "Renseigner sur les autres ressources disponibles" },
];



const resources = [
  {
    link: "https://montetasoiree.com/",
    imageSrc: "/src/assets/monte-ta-soiree.png",
    label: "Monte ta soirée",
    description: "Un 1er outil pour organiser des soirées plus responsables",
  },
  {
    link: "https://pimp-my-party.fr/",
    
    label: "Pimp my party",
    description: "Un 2ème outil pour organiser des soirées en toute sécurité",
  },
  {
    link: "https://www.wikipedia.org",
    label: "Wikipedia",
    description: "Encyclopédie en ligne gratuite",
  },
];

const Alcool = () => {
    return (
      <div className="page">
        <h1 className="titre-page">Alcool</h1>
        <Navbar links={navLinks} />
        <p className="text-classic">Bienvenue sur la page traitant de la thématique de l'alcool, sa banalisation et sa consommation.
      </p>
      
      <Quote 
        text="Il ne faut pas que j'oublie de modifier cette citation." 
        author="Loraline"
      />
      
      
      <ImageTextPopup
        image="./src/assets/bouteilles.jpg"
        title="La carte 3♣"
        shortText="Prévention sur la consommation excessive d'alcool"
        longText="Que dire ?"
        textButton="⤢ Agrandir la carte"
      />
      
      <div id = "Plan_action">
      <ListeNumerotee 
          
          title="Plan d'action pour aider une personne fortement alcoolisée" 
          subtitle="Comment agir face à une personne en détresse ?" 
          items={items} //on fait appelle à des constantes de début de la page
          
      />

      
      <ImageTextPopup
        image="./src/assets/alcool.jpg"
        title="La carte 6♣"
        shortText="Prévention sur la banalisation de l'alcool en soirée"
        longText="1 verre, 2 verres, 3 verres... En soirée, on perd vite le compte.
        Au début, c’est juste pour se détendre, suivre le mouvement. Puis, sans s’en rendre compte, les verres s’enchaînent et les limites disparaissent. On rigole, on danse, on se sent invincible… jusqu’au moment où ça bascule : trou noir, accident, malaise, regrets.
        On a tellement l’habitude de voir l’alcool partout en soirée qu’on ne se pose même plus la question. Mais est-ce que s’amuser, c’est forcément finir à l’envers ? Pas besoin d’être bourré pour profiter d’une bonne soirée. Chacun gère comme il veut, sans pression. L’essentiel, c’est de s'amuser et de rentrer entier."
        textButton="⤢ Agrandir la carte"
      />



    <TextImageRight  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula 
      ullamcorper metus, id facilisis felis tincidunt id. Nam tristique sapien 
      sit amet mauris fermentum, vel placerat lacus blandit. Integer dapibus, 
      lacus non rhoncus aliquet, lorem risus maximus ligula, id vehicula arcu 
      ligula eu nisl. Phasellus at tristique odio, eget hendrerit lacus. 
      Pellentesque non sagittis libero, sed dictum justo. Sed fermentum, 
      risus ut gravida fermentum, augue est facilisis mi, id fringilla 
      quam purus at libero. Nulla facilisi. In hac habitasse platea dictumst. 
      Donec sed tortor vel purus gravida convallis nec sit amet justo. 
      Vestibulum euismod tincidunt risus, id laoreet ligula sagittis et." 
      imageSrc="/src/assets/sexo.webp" />



      <div id = "Contacts">
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
      </div>


      </div>
      <div id = "Ressources_utiles">
      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites utiles à visiter"
        resources={resources}
      />
      </div>
      </div>

    );
  };
  
  export default Alcool;