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

const { BulletList, NumberedList, TextImageRight, Navbar, YouTubeVideo} = Components;

const navLinks = [
  { label: "Addiction à l'alcool", target: "addiction" },
  { label: "Banalisation de la consommation", target: "banalisation" },
  { label: "Consommation excessive ponctuelle", target: "consommation" }
];

const items = [
  { title: "Evaluer", subtitle: "Vérifier son état : consciente ? Respiration normale ? Réactive ?" },
  { title: "Sécuriser", subtitle: "L'éloigner du danger, l'installer sur le côté (PLS)" },
  { title: "Surveiller", subtitle: "La garder au chaud, éveillée, rester et parler avec elle" },
  { title: "Eviter les erreurs", subtitle: "Ne pas lui donner de café, ni la forcer à vomir" },
  { title: "Alerter", subtitle: "Si perte de conscience ou respiration anormale : appeler le 112 ou le 15" },
  {title : "📢 Attention", subtitle : "En cas de soirée sur le campus, s'adresser au personnel Peer'Care afin d'appeler le numéro d'astreinte"}
];

const data = [
  { number: "8/10", title: "étudiants de l'école", description: "consomment de l'alcool" },
  { number: "21.8%", title: "considèrent leur scolarité impactée", description: "par une consommation excessive" }
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
    imageSrc: "/src/assets/pimp-my-party.png",
    label: "Pimp my party",
    description: "Un 2ème outil pour organiser des soirées en toute sécurité",
  },
  {
    link: "https://www.alcool-info-service.fr/",
    label: "Alcool info service",
    description: "Un site pour s'informer sur l'alcool et ses conséquences",
  },
];

const Alcool = () => {
    return (
      <div className="page">
        <h1 className="titre-page">Consommation d'alcool</h1>
        <Navbar links={navLinks} />
        <p className="sous-titre-page">Sujets traités sur cette page : 
      </p>
      
      <BulletList items={["Consommation excessive d'alcool", "Banalisation de sa consommation"]} />
      
      <Quote 
        text="Les meilleures soirées sont celles dont tu te souviens." 
      />


    <div id = "addiction">
      <h1 className="titre">Addiction à l'alcool</h1>
    </div>

      <Separateur />

      <div id = "banalisation">
        <h1 className="titre">Banalisation de l'alcool en soirée</h1>
      </div>

      <ImageTextPopup
        image="./src/assets/Alcool.webp"
        title="La carte 6♣"
        shortText="Prévention sur la banalisation de l'alcool en soirée"
        longText="1 verre, 2 verres, 3 verres... En soirée, on perd vite le compte.
        Au début, c’est juste pour se détendre, suivre le mouvement. Puis, sans s’en rendre compte, les verres s’enchaînent et les limites disparaissent. On rigole, on danse, on se sent invincible… jusqu’au moment où ça bascule : trou noir, accident, malaise, regrets.
        On a tellement l’habitude de voir l’alcool partout en soirée qu’on ne se pose même plus la question. Mais est-ce que s’amuser, c’est forcément finir à l’envers ? Pas besoin d’être bourré pour profiter d’une bonne soirée. Chacun gère comme il veut, sans pression. L’essentiel, c’est de s'amuser et de rentrer entier."
        textButton="⤢ Agrandir la carte"
      />



    <TextImageRight  text="Boire un coup entre amis doit rester un moment de convivialité où chacun doit se sentir à l'aise avec sa consommation." 
      imageSrc="/src/assets/alcool.jpg" />

      <Separateur />
      
    <div id = "consommation">
      <h1 className="titre">Consommation excessive d'alcool</h1>
    </div>

      <ImageTextPopup
        image="./src/assets/bouteilles.jpg"
        title="La carte 3♣"
        shortText="Prévention sur la consommation excessive d'alcool"
        longText="Que dire ?"
        textButton="⤢ Agrandir la carte"
      />
      
     

      <h1 className="sous-titre-1">Boire, c'est bien... Savoir s'arrêter, c'est mieux !</h1>
      <p className="texte"> Une soirée, un verre, puis un autre… et parfois, ça dérape. L’alcool en excès, c’est pas juste une gueule de bois : ça peut mener à des accidents, des comportements à risque et des pertes de contrôle. Le binge drinking (boire beaucoup, très vite) fatigue ton corps et augmente le risque de dépendance. Même une grosse cuite occasionnelle peut abîmer ton cœur et provoquer un AVC. La vraie bonne soirée, c’est celle dont tu te souviens et où tu restes maître de tes choix. Bois à ton rythme, écoute-toi, et pense à demain !</p>

      <h1 className="sous-titre-1">Comment agir ?</h1>
      <ListeNumerotee 
          
          title="Plan d'action pour aider une personne fortement alcoolisée"
          items={items} //on fait appel à des constantes de début de la page
          
      />
      <h1 className="sous-titre-1">Chiffres clés</h1>
      <ChiffresGroup chiffres={data} />


      <h1 className="sous-titre-1">Besoin d'en parler ?</h1>
     
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
      
      <Separateur />
    
      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites utiles à visiter"
        resources={resources}
      />
      
      </div>

    );
  };
  
  export default Alcool;