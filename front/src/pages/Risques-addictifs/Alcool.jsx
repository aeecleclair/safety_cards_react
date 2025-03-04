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

const { BulletList, NumberedList, TextImageRight, ImageCenter, Navbar, YouTubeVideo} = Components;

const navLinks = [
  { label: "L'alcool, moi et les autres", target: "soirees" },
  { label: "Je suis consommateur", target: "conso" },
  { label: "Je suis témoin", target: "temoin" },
  { label: "J'organise une soirée", target: "organiser" }];

const items = [
  { title: "Evaluer", subtitle: "Vérifier son état : consciente ? Respiration normale ? Réactive ?" },
  { title: "Sécuriser", subtitle: "L'éloigner du danger, l'installer sur le côté (PLS)" },
  { title: "Surveiller", subtitle: "La garder au chaud, éveillée, rester et parler avec elle" },
  { title: "Eviter les erreurs", subtitle: "Ne pas lui donner de café, ni la forcer à vomir (risque d'étouffement)" },
  { title: "Alerter", subtitle: "Si perte de conscience ou respiration anormale : appeler le 112 ou le 15" },
  {title : "📢 Attention", subtitle : "En cas de soirée sur le campus, s'adresser au personnel Peer'Care pour la prise en charge et l'appel au numéro d'astreinte"}
];

const items2 = [
  { subtitle: "Limiter la consommation à un maximum de 10 verres par semaine"},
  { subtitle: "Ne pas consommer plus de 2 verres par jour"},
  { subtitle: "Prévoir au moins deux jours sans alcool par semaine"}];

const data = [
  { number: "8/10", title: "étudiants de l'école", description: "consomment de l'alcool" },
  { number: "21.8%", title: "considèrent leur scolarité impactée", description: "par une consommation excessive" }
];

const data2 = [
  { number: "6 mois de prison", title: "et 7500€ d'amende", description: "pour quiconque pousse autrui à consommer de l'alcool de manière excessive" }
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
];

const resources2 = [
  {
    link: "https://www.alcool-info-service.fr/",
    imageSrc: "/src/assets/alcoolinfoservice.jpg",
    label: "Alcool info service",
    description: "Un site pour s'informer sur l'alcool et ses conséquences",
  },
  {
    link: "https://www.addictaide.fr/",
    imageSrc: "/src/assets/addictaide.jpg",
    label: "Addict'aide",
    description: "Trouve des outils et des ressources pour ne plus être seul·e face à l’addiction",
  },
  {
    link: "https://addictions-france.org/etablissements/",
    imageSrc: "/src/assets/cjc.png",
    label: "Consultations jeunes consommateurs",
    description: "Trouve une CJC pour t'accompagner près de chez toi",
  }
];

const resources3 = [
  {
    link: "/groupe",
    emoji: "🙅",
    label: "Vie de groupe",
    description: "Comment dire non à la pression du groupe ?",
  },
  {
    link: "/inte",
    emoji: "🍾",
    label: "Pratiques d'intégration",
    description: "Ce qui est interdit et puni",}
];

const resources4 = [
  {
    link: "/soumission",
    emoji: "💊",
    label: "Soumission chimique",
    description: "Comment réagir si je pense avoir été drogué·e à mon insu ?",}
  ];

const Alcool = () => {
    return (
      <div className="page">
        <h1 className="titre-page">REVOIR LA PAGE !!!!! Consommation d'alcool</h1>
        <Navbar links={navLinks} />
        
        <div id = "soirees">
          <h1 className="titre">L'alcool, moi et les autres</h1>
        </div>

        <h2 className="sous-titre-2">Quels sont les effets de l'alcool ?</h2>

      <p className="texte">On considère qu’une personne est sous l’effet de l’alcool si elle ressent <b>plusieurs de ces symptômes</b>, quasi systématiquement et <b>pendant plusieurs heures après consommation</b>:</p>
      <BulletList items={[
    "Troubles de la coordination",
    "Altération du jugement et risques",
    "Difficultés de concentration",
    "Modification de l’humeur (euphorie, agressivité)",
    "Ralentissement des réflexes",
    "Fatigue, nausées et vertiges"
]} />

<p className="texte">Tu ressens ces symptômes, alors que tu n'as (presque) pas bu ? Tu as peut-être été drogué·e à ton insu.</p>
<ExternalLinkBlock resources={resources4} />

      <ImageTextPopup
        image="./src/assets/Alcool.webp"
        title="La carte 6♣"
        shortText="Prévention sur la banalisation de l'alcool en soirée"
        longText="1 verre, 2 verres, 3 verres... En soirée, on perd vite le compte.
        Au début, c’est juste pour se détendre, suivre le mouvement. Puis, sans s’en rendre compte, les verres s’enchaînent et les limites disparaissent. On rigole, on danse, on se sent invincible… jusqu’au moment où ça bascule : trou noir, accident, malaise, regrets.
        On a tellement l’habitude de voir l’alcool partout en soirée qu’on ne se pose même plus la question. Mais est-ce que s’amuser, c’est forcément finir à l’envers ? Pas besoin d’être bourré pour profiter d’une bonne soirée. Chacun gère comme il veut, sans pression. L’essentiel, c’est de s'amuser et de rentrer entier."
        textButton="⤢ Agrandir la carte"
      />
<p className="texte">A l'école, l'alcool n'est pas un sujet anodin et sa consommation y est bien souvent <b>banalisée</b>, comme le montrent les chiffres suivants :</p>
      <ChiffresGroup chiffres={data} />


      <h2 className="sous-titre-2">Quels sont les risques ?</h2>
     <p className="texte">Ce que je risque sur <b>moi</b> :</p>
      <BulletList items={[
        
    "Accidents et blessures physiques",
    "Dégâts au foie et aux organes, troubles cardiaques",
    "Dépendance et addiction",
    "Problèmes de mémoire et de cognition, AVC",
    "Troubles mentaux (dépression, anxiété)"
]} />

<Quote text="Bourré·e ou pas, c'était bien moi." />
      
      <p className="texte">Ce que je risque sur <b>les autres</b> :</p>
      <BulletList items={[
    "Accidents de la route et du travail",
    "Décisions et comportements à risque",
    "Violences et agressions (VSS, conjugales, etc.)"
]} />

<TextImageRight
  text={
    <>
      Choisir de consommer au-delà de ses limites, ce n'est pas seulement assumer ce qu'on se fait à soi-même, c'est aussi assumer <b>sa responsabilité envers les autres</b>. L’alcool ne doit pas être une excuse et ne justifie en aucun cas des comportements inappropriés ou dangereux. Aux yeux de la loi, la consommation d'alcool est un facteur <b>aggravant</b>.
    </>
  }
  imageSrc="/src/assets/justice.png"
/>


        <Separateur />


        <div id = "conso">
      <h1 className="titre">Je suis consommateur</h1>
    </div>
      <Quote 
        text="Les meilleures soirées sont celles dont tu te souviens." 
      />


      <h1 className="sous-titre-1">Le binge drinking</h1>
      
      <p className="texte"> 
      Boire, c'est bien... Savoir s'arrêter, c'est mieux ! Le binge drinking désigne une <b>consommation excessive et rapide</b> d'alcool dans le but d’<b>atteindre l'ivresse</b> en un minimum de temps. Ce phénomène, particulièrement répandu en soirée et présent sous forme de <b>jeux et défis</b>, expose à de nombreux risques : perte de contrôle, comportements dangereux, coma éthylique, voire des conséquences graves sur la santé à long terme. En plus des dangers physiques, il peut aussi entraîner des troubles du comportement et des accidents. Même une <b>grosse cuite occasionnelle</b> peut abîmer ton coeur et provoquer un AVC.</p>
      
      <p className="texte">La vraie bonne soirée, c’est celle dont tu te souviens et où tu restes maître de tes choix. Bois à ton rythme, écoute-toi, et pense à demain !</p>


      <ImageTextPopup
        image="./src/assets/bouteilles.jpg"
        title="La carte 3♣"
        shortText="Prévention sur la consommation excessive d'alcool"
        longText="Que dire ?"
        textButton="⤢ Agrandir la carte"
      />

      <p>N'oublie pas que tu ne devrais jamais te sentir <b>forcé·e à boire</b>, encore moins de manière excessive. Cela est même <b>puni par la loi</b>.</p>

      <ChiffresGroup chiffres={data2} />

      <ExternalLinkBlock
        resources={resources3}
      />

            
      <p className="text">N'oublie pas non plus que toutes les boissons ne contiennent pas la même quantité d'alcool. <b>Attention</b>, à la maison ou chez des amis, on a tendance à se servir de plus grands verres !</p>
        

      <ImageCenter
        imageSrc="/src/assets/doses-alcool.png"
      />


      <h1 className="sous-titre-1">Comment savoir si je bois trop (souvent) ?</h1>
      
      <p className="texte">Pour savoir si ta consommation d'alcool est raisonnable, tu peux te référer à ces indicateurs :</p>
      <ListeNumerotee 
          title="Repères de consommation"
          items={items2}
      />

     <YouTubeVideo url="https://www.youtube.com/watch?v=Xo0x_85pERo" />

     <ExternalLinkBlock
        title="Ta consommation ne respecte pas l'un ou plusieurs de ces critères ?"
        subtitle="Fais le point avec des tests de dépistage et informe-toi à ces adresses :"
        resources={resources2}></ExternalLinkBlock>

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

<ContactCard
        image="/src/assets/fsj.png" 
        title="Fil santé jeunes"
        subtitle="Service d'écoute anonyme et gratuit pour les 12-25 ans"
        phone="0 800 235 236"
        email=""
        hours="Tous les jours de 9h à 23h"
        textButton="Voir le site web"
        link="https://www.filsantejeunes.com/"
      />
      
      <Separateur />

      <div id = "temoin">
        <h1 className="titre">Je suis témoin</h1>
      </div>

      <p>Si tu es témoin d'un comportement dangereux ou irresponsable d'une personne en état d'ivresse, garde <b>un oeil sur elle</b> en veillant à <b>ne pas te mettre en danger</b>.</p>
      <h1 className="sous-titre-1">Comment agir face à une personne très alcoolisée ?</h1>
      <ListeNumerotee 
          
          title="Plan d'action pour aider une personne ivre et en danger"
          items={items}
          
      />


      <Separateur />

      <div id = "organiser">
        <h1 className="titre">J'organise une soirée</h1>
      </div>

      <TextImageRight  
        text={
          <>
            Boire un coup entre amis doit rester un <b>moment de convivialité</b> où chacun doit se sentir à l'aise avec sa consommation. 
            Pour faire attention à chacun, tu peux trouver des outils pour organiser des <b>soirées plus responsables et sécurisées</b> sur les sites suivants :
          </>
        }
        imageSrc="/src/assets/alcool.jpg"
      />

    
      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites utiles à visiter"
        resources={resources}
      />





      <Separateur />

      
  
      
      </div>

    );
  };
  
  export default Alcool;