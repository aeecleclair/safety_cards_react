import React from "react";
import "../App.css";

import Quote from "../components/Citation"; 
import ImageTextPopup from "../components/Cartes"; 
import ListeNumerotee from "../components/Listes";
import ExternalLinkBlock from "../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../components/Common";
import Separateur from "../components/Separateur";
import { Chiffre, ChiffresGroup } from "../components/Chiffres";
import RandomPageSelector from "../components/Randompage";
import Workinprogress from "../components/WorkInProgress";
import ContactCard from "../components/Contact";





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

const items2 = [
  {  subtitle: "Approcher la personne, évaluer et assister" },
  { subtitle: "Écouter, activement et sans jugement" },
  {  subtitle: "Réconforter et informer" },
  { subtitle: " Encourager à aller vers des professionnels" ,
    subitems: [ 
      {title : "Titre", subtitle: "Description du sous-élément 1" },
      { subtitle: "Description du sous-élément 2" },
    ],
  },
  {  subtitle: "Renseigner sur les autres ressources disponibles" },
];

const resources = [
  {
    link: "https://www.nightline.fr/lyon",
    imageSrc: "/assets/nightline_logo.png",
    label: "Nightline",
    description: "Un service d'écoute nocturne tous les soirs de 21h à 2h30",
  },
  {
    link: "/docs/flyer-dispositif-d-ecoute-2023-2024-etrangers.pdf",
    label: "PDF",
    description: "Test de fonctionnement du lien",
  },
  {
    link: "https://www.wikipedia.org",
    label: "Wikipedia",
    description: "Encyclopédie en ligne gratuite",
  },
];



const resources_contacts = [
  {
    link: "/astreinte",
    emoji: "🌙",
    label: "Astreinte"
  },
  {
    link: "/cellule-ecoute",
    emoji: "📞",
    label: "Cellule d'écoute",

  },
  {
    link: "/infirmerie",
    emoji: "🏥",
    label: "Infirmerie",
  },
  {
    link: "/pole-handicap",
    emoji: "♿",
    label: "Pôle handicap",
  },
  {
    link: "/service-social",
    emoji: "🤝",
    label: "Service social",
  },
  {
    link: "/vie-etudiante",
    emoji: "🎓",
    label: "Vie étudiante",
  },
];


const resources_sites = [

  {
    link: "https://www.etudiant.gouv.fr/fr",
    imageSrc: "/assets/etudiant_gouv.jpg",
    label: "Etudiant.gouv.fr",
    description: "Le site officiel du gouvernement pour les étudiants",
  },
  {
    link: "https://www.lyoncampus.com/",
    imageSrc: "/assets/logo_lyon_campus.png",
    label: "Lyon Campus",
    description: "Etudier, vivre, sortir et s'impliquer comme étudiant à Lyon"
  },
  {
    link: "https://www.universite-lyon.fr/vie-des-campus/vie-etudiante/nos-portails-sante-et-aides-etudiantes/",
    imageSrc: "/assets/logo_UDL.png",
    label: "Portails Santé et Aides de l'UDL",
    description : "Toutes les iInformations, dispositifs et procédures"

  },
  {
    link: "https://commentonsaime.fr/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s'aime ?",
    description: "Pour se renseigner sur les relations amoureuses, amicales, familliales...",
  },

  {
    link: "https://www.crous-lyon.fr ",
    imageSrc: "/assets/logo_crous.png",
    label: "Crous de Lyon",
    description: "Aides, accompagnement, logements, restauration, international...",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Pour parler santé, sexualité, amour, mal être...",
  },
];

const data = [
  { number: "22%", title: "Accidents fatals", description: "Causés par l'alcool" },
  { number: "71.5%", title: "Fréquentation du RU", description: "Par les étudiants" },
  { number: 210000, title: "Viols ou tentatives", description: "Chaque année" },
  { number: "9/10", title: "Femmes", description: "Connaissent leur agresseur" }
];

const Exemple = () => {
  return (
    <div className = "page">


      <h1 className="titre-page">Bienvenue sur Safety Cards</h1>

      <Navbar links={navLinks} />
      
      <h1 className = "titre">Découvre une thématique aléatoire</h1>
      <RandomPageSelector />

      <h1 className = "titre">Contacts de Centrale Lyon</h1>
      <ExternalLinkBlock
        subtitle="Voici tous les contacts utiles pour les étudiants"
        resources={resources_contacts}
      />

      <h1 className = "titre">Les ressources globales</h1>
      <ExternalLinkBlock
        subtitle="Voici quelques sites regoupant un grand nombre d'informations sur diverses thématiques"
        resources={resources_sites}
      />
      

      <Quote 
        text="La seule façon de faire du bon travail est d’aimer ce que vous faites. Enfin pas sûr en vrai mais bon à voir quoi." 
        author="Steve Jobs"
      />
      <Quote 
        text="Nul n'est censé ignorer la loi." 
      />


      <ImageTextPopup
        image="./assets/work_in_progress.jpg"
        title="La carte 3♠"
        shortText="Prévention sur les risques d'incendie"
        longText="Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration.
        Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration."
        textButton="⤢ Agrandir la carte"
      />
      
    


    <div id = "Plan_action">
      <ListeNumerotee 
          
          title="Plan d'action pour les Premiers Secours en Santé Mentale" 
          subtitle="Comment agir face à une personne en détresse ?" 
          items={items} //on fait appel à des constantes de début de la page
          
      />

<ListeNumerotee 
          
          title="Plan d'action pour les Premiers Secours en Santé Mentale" 
          subtitle="Comment agir face à une personne en détresse ?" 
          items={items2} //on fait appel à des constantes de début de la page
          
      />
      </div>


      <div id = "Contacts">
      <ContactCard
        image="/assets/nightline_logo.png" 
        title="Nightline Lyon"
        subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
        phone="04 85 30 00 10"
        email=""
        hours="Tous les soirs de 21h à 2h30"
        textButton="Voir le site web"
        link="https://www.nightline.fr/lyon"
      />

      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
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
        image="/assets/3114.jpg" 
        title="3114"
        subtitle="Numéro national de prévention du suicide"
        phone="3114"
        email=""
        hours="24h/24 et 7j/7"
        textButton="Voir le site web"
        link="https://3114.fr/"

      />

    </div>

      <div id = "Ressources_utiles">
      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites utiles à visiter"
        resources={resources}
      />
      </div>

      <BulletList items={["Élément 1", "Élément 2", "Élément 3"]} />
      <NumberedList items={["Premier", "Deuxième", "Troisième"]} />
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
      imageSrc="/assets/sexo.webp" />


      <YouTubeVideo url="https://www.youtube.com/watch?v=HUngLgGRJpo" />
      <Separateur />


      <h1 className="titre">Chiffres clés</h1>
      <ChiffresGroup chiffres={data} />

      <Workinprogress />


      

    </div>
  );
};

export default Exemple;