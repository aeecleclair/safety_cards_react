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
  { title: "Fixer des horaires", subtitle: "Limiter le temps accordé devant les écrans chaque jour" },
  { title: "Désactiver les notifications", subtitle: "Réduire les distractions en coupant les alertes" },
  { title: "Faire des pauses", subtitle: "Prendre 10-15 minutes sans écran toutes les heures" },
  { title: "Privilégier le réel", subtitle: "Opter pour des activités sans écran (sport, lecture, sorties...)" },
  { title: "Créer des zones sans écran", subtitle: "Réserver certaines pièces pour des moments sans technologie" },
];

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
          image="./src/assets/Sommeil 1.jpg"
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


      <p className="titre">Addiction aux réseaux sociaux</p>



    <TextImageRight  text="Les réseaux sociaux, c’est comme une sorte de boucle sans fin où on se retrouve souvent piégé. Au départ, ça paraît anodin : on veut juste voir ce qui se passe, discuter avec des amis ou se détendre un peu. Mais petit à petit, on finit par passer des heures à scroller, à attendre des notifications, et à comparer nos vies à celles des autres. Le problème, c’est que ça affecte notre confiance en nous et notre bien-être mental. On se met à chercher la validation à travers les likes et les commentaires, ce qui peut créer de l’anxiété et du stress. En plus, on oublie qu’on ne voit que les « bonnes » facettes de la vie des autres, et pas la réalité derrière l'écran. Pour éviter ça, il faut vraiment apprendre à prendre du recul : se fixer des limites sur le temps passé en ligne, couper les notifications, et surtout profiter de moments sans écran. C’est à nous de reprendre le contrôle et de ne pas laisser les réseaux sociaux définir notre quotidien." 
      imageSrc="../src/assets/Reseaux.png" />

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
