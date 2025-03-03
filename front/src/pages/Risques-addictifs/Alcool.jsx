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
  { label: "L'alcool, moi et les autres", target: "soirees" },
  { label: "Je suis consommateur", target: "conso" },
  { label: "Je suis témoin", target: "temoin" }];

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
        
        <div id = "soirees">
          <h1 className="titre">L'alcool, moi et les autres</h1>
        </div>

        <h2 className="sous-titre-2">Quels sont les effets de l'alcool ?</h2>

      <p className="texte">REV!!!!!! On considère qu’une personne est sous l’effet de l’alcool si elle ressent <b>plusieurs de ces symptômes</b>, quasi systématiquement et <b>pendant plusieurs heures après consommation</b>:</p>
      <BulletList items={[
    "Troubles de la coordination",
    "Altération du jugement et risques",
    "Difficultés de concentration",
    "Modification de l’humeur (euphorie, agressivité)",
    "Ralentissement des réflexes",
    "Fatigue, nausées et vertiges"
]} />

<p className="texte">A l'école, l'alcool n'est pas un sujet anodin et sa consommation y est bien souvent <b>banalisée</b>, comme le montrent les chiffres suivants :</p>
      <ChiffresGroup chiffres={data} />


      <h2 className="sous-titre-2">Quels sont les risques ?</h2>
     <p className="texte">Ce que je risque sur <b>moi</b> :</p>
      <BulletList items={[
    "Dépendance et addiction",
    "Dégâts au foie et aux organes",
    "Troubles mentaux (dépression, anxiété)",
    "Problèmes de mémoire et de cognition",
    "Troubles du sommeil",
    "Accidents et blessures physiques"
]} />

<Quote text="Quand je consomme, je reste responsable de mes actes.//Bourré.e ou pas, c'était bien moi." />
      
      <p className="texte">Ce que je risque sur <b>les autres</b> :</p>
      <BulletList items={[
    "Accidents de la route et du travail",
    "Violences et agressions (VSS, conjugales, etc.)",
    "Décisions et comportements à risque",
    "Sanctions légales (amendes, prison, retrait de permis)",
    "Impact sur les relations et la santé"
]} />

      <p className="texte">L’alcool ne doit pas être une excuse et ne justifie en aucun cas des comportements inappropriés ou dangereux. Aux yeux de la loi, la consommation d'alcool est un facteur <b>aggravant</b>.</p>

        <Separateur />






        <div id = "conso">
      <h1 className="titre">Je suis consommateur</h1>
    </div>

      <Separateur />

      <div id = "temoin">
        <h1 className="titre">Je suis témoin</h1>
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

      
      
      <Quote 
        text="Les meilleures soirées sont celles dont tu te souviens." 
      />

      
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