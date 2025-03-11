import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import "../../App.css";



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
    link: "https://montetasoiree.com/",
    imageSrc: "/public/assets/monte-ta-soiree.png",
    label: "Monte ta soirée",
    description: "Un 1er outil pour organiser des soirées plus responsables",
  },
  {
    link: "https://pimp-my-party.fr/",
    imageSrc: "/public/assets/pimp-my-party.png",
    label: "Pimp my party",
    description: "Un 2ème outil pour organiser des soirées en toute sécurité",
  },
  {
    link: "https://www.alcool-info-service.fr/",
    label: "Alcool info service",
    description: "Un site pour s'informer sur l'alcool et ses conséquences",
  },
];

const data = [
  { number: "1/2", title: "élève considère que son temps d'écran", description: "impacte négativement son sommeil" }
];



const Stupefiants = () => {
  return (
    <div className="page">
      <h1 className="titre">Consommation de stupéfiants</h1>
      <Navbar links={navLinks} />
      <p className="sous-titre-page">Sujets traités sur cette page : 
      </p>
      
      <BulletList items={["Addiction aux stupéfiants", "Consommation occasionnelle"]} />
        
        <Quote 
          text="L’illusion du contrôle disparaît dès la première dose." 
        />

        <p className="titre">Addiction aux stupéfiants</p>

        <NumberedList items={["Drogues stimulantes : amphétamines, cocaïne, ecstasy", "Drogues dépresseurs :", "Drogues dépresseurs : héroïne, morphine, opium", "Drogues hallucinogènes : LSD, champignons hallucinogènes", " Drogues dissociatives : kétamine"]}
        />

        <ImageTextPopup
          image="./public/assets/accro-reseaux.jpg"
          title="La carte 10♣"
          shortText="Prévention sur l'addiction aux stupéfiants"
          longText="Que dire ?"
          textButton="⤢ Agrandir la carte"
        />
        
        <div id="Plan_action"></div>

      <p className="sous-titre-1"> Trop d’écrans, pas assez de vraie vie !</p>
      <p className="texte"> Les écrans captent ton attention, souvent sans que tu t’en rendes compte. Scroll infini, notifications constantes, vidéos en boucle… Résultat : fatigue, troubles du sommeil, baisse de concentration et isolement. Prends le contrôle : fixe-toi des limites, fais des pauses, privilégie le réel. Les meilleurs moments ne se vivent pas à travers un écran !</p>

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
        image="/public/assets/nightline_logo.png" 
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

      <ImageTextPopup
          image="./public/assets/accro-reseaux.jpg"
          title="La carte Valet♣"
          shortText="Prévention sur la consommation occasionnelle de stupéfiants"
          longText="Que dire ?"
          textButton="⤢ Agrandir la carte"
        />

    <TextImageRight  text="Les réseaux sociaux, c’est comme une sorte de boucle sans fin où on se retrouve souvent piégé. Au départ, ça paraît anodin : on veut juste voir ce qui se passe, discuter avec des amis ou se détendre un peu. Mais petit à petit, on finit par passer des heures à scroller, à attendre des notifications, et à comparer nos vies à celles des autres. Le problème, c’est que ça affecte notre confiance en nous et notre bien-être mental. On se met à chercher la validation à travers les likes et les commentaires, ce qui peut créer de l’anxiété et du stress. En plus, on oublie qu’on ne voit que les « bonnes » facettes de la vie des autres, et pas la réalité derrière l'écran. Pour éviter ça, il faut vraiment apprendre à prendre du recul : se fixer des limites sur le temps passé en ligne, couper les notifications, et surtout profiter de moments sans écran. C’est à nous de reprendre le contrôle et de ne pas laisser les réseaux sociaux définir notre quotidien." 
      imageSrc="../public/assets/Reseaux.png" />

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
  
  export default Stupefiants;