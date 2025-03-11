import "../../App.css";
import Quote from "../../components/Citation"; 
import ExternalLinkBlock from "../../components/Liens-ext";
import React from "react";
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";

const { BulletList, NumberedList, TextImageRight, Navbar, YouTubeVideo} = Components;

const navLinks = [
  { label: "Plan d'action", target: "Plan_action" },
  { label: "Contacts utiles", target: "Contacts" },
  { label: "Ressources utiles", target: "Ressources_utiles" }
];

const items = [
  { title: "Fixer des horaires", subtitle: "Limiter le temps accordé devant les écrans avant d'aller se coucher, en moyenne 1 heure" },
  { title: "Mettre son portable en mode avion", subtitle: "Réduire les dérangements en coupant les notifications" },
  { title: "Faire de la relaxation", subtitle: "Faire des exercices de repiration, de visualisation avant de s'endormir peut aider" },
  { title: "Se fixer des couvres feu", subtitle: "Se fixer une heure limite sur se coucher et pourquoi pas se donner une sorte de punition en cas de non respect (pompes...)" },
  { title: "Penser à son confort", subtitle: "Le confort est essentiel, par exemple il faut s'assurer que son oreiller est de bonne qualité, d'utiliser un masque pour les yeux, des boules quies..." },
];

const resources = [
  {
    link: "https://www.nightline.fr/lyon",
    //imageSrc: "/assets/nightline_logo.png",
    label: "Nightline",
    description: "Un service d'écoute nocturne tous les soirs de 21h à 2h30",
  },
  {
    mail: "catherine@",//à voir
    label: "Infirmerie",
    description: "Ateliers de sophrologie/détente/relaxation et écoute",
  },
  {
    link: "", //chaine youtube de relaxation à trouver
    label: "",
    description: "",
  },
];

const data = [
  { number: "1/2", title: "élève considère que son temps d'écran", description: "impacte négativement son sommeil" }
];


const Sommeil = () => {
  return (
    <div className="page">
      <h1 className="titre">Sommeil</h1>
      <Navbar links={navLinks} />
      <p className="sous-titre-page">Sujets traités sur cette page : 
      </p>

      <BulletList items={["Le rythme de sommeil", "Les insomnies", "Les solutions envisageables" ]} />
        
        <Quote 
          text="Dormir comme un bébé 👶." 
        />

        <p className="titre">Un "bon" rythme de sommeil</p>

        <ImageTextPopup
          image="./assets/Sommeil 1.jpg"
          title="La carte 9♠"
          shortText="Prévention quant au sommeil des étudiants"
          longText="Tout le monde expérimente des nuits plus ou moins calme au cours de sa scolarité..."
          textButton="⤢ Agrandir la carte"
        />
        
        <div id="Plan_action"></div>

      <p className="sous-titre-1"> Ton sommeil n'est pas négligeable !</p>
      <p className="texte"> Les troubles du sommeil sont du à plusieurs facteurs, dont certains que tu peux maîtriser. Par exemple ton temps d'écran avant d'aller te coucher, ta night routine en générale, ton niveau de stress...Prends le contrôle : fixe-toi des limites, privilégie des. Les meilleurs moments ne se vivent pas à travers un écran !</p>

      <h1 className="">Comment agir ?</h1>
      <ListeNumerotee 
          
          title="Plan d'action pour réduire son exposition aux écrans"
          items={items} //on fait appel à des constantes de début de la page
          
      />
      <h1 className="">Chiffres clés</h1>
      <ChiffresGroup chiffres={data} />


      <h1 className="">Besoin d'en parler ?</h1>
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
      </div>


      <p className="titre">Les insomnies</p>



    <TextImageRight  text="" 
      imageSrc="../assets/Reseaux.png" />

    <YouTubeVideo url="https://www.youtube.com/watch?v=9qLREeJs__A" />


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

export default Sommeil;
