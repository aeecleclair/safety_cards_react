import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";


const navLinks = [
  { label: "L'alcool, moi et les autres", target: "soirees" },
  { label: "Je consomme", target: "conso" },
  { label: "Je suis témoin", target: "temoin" },
  { label: "J'organise une soirée", target: "organiser" }];

const items = [
  { title: "Evaluer", subtitle: "Vérifier son état : consciente ? Respiration normale ? Réactive ?" },
  { title: "Sécuriser", subtitle: "L'éloigner du danger, l'installer sur le côté (PLS)" },
  { title: "Surveiller", subtitle: "La garder au chaud, éveillée, rester et parler avec elle" },
  { title: "Eviter les erreurs", subtitle: "Ne pas lui donner de café, ni la forcer à vomir (risque d'étouffement)" },
  { title: "Alerter", subtitle: "Si perte de conscience ou respiration anormale : appeler le 112 ou le 15" },
  {title : "📢 Attention", subtitle : "En cas de soirée sur le campus, s'adresser aux membres de Peer Care pour la prise en charge et l'appel au numéro d'astreinte"}
];

const items2 = [
  { subtitle: "Limiter la consommation à un maximum de 10 verres par semaine"},
  { subtitle: "Ne pas consommer plus de 2 verres par jour"},
  { subtitle: "Prévoir au moins deux jours sans alcool par semaine"}];

const items3 = [
  { title: "Parler", subtitle: "Aborder le sujet avec bienveillance, sans jugement ni reproche" },
  { title: "Ecouter", subtitle: "Laisser la personne s'exprimer sur les raisons qui la poussent à boire et ses difficultés" },
  { title: "Informer", subtitle: "Partager des informations sur les risques liés à l'alcool et les ressources disponibles" },
  { title: "Soutenir", subtitle: "Proposer son aide pour réduire ou arrêter la consommation, sans pression" },
  { title: "Encourager", subtitle: "Valoriser les efforts et les progrès, même petits" },
  { title: "Consulter", subtitle: "Suggérer de parler à un·e professionnel·le de santé ou à une association spécialisée si besoin" }
];

const data = [
  { number: "8/10", title: "étudiants de l'école", description: "consomment de l'alcool" },
  { number: "21.8%", title: "considèrent leur scolarité impactée", description: "par une consommation excessive" }
];

const data2 = [
  { number: "6 ", title: "mois de prison", description: "pour quiconque pousse autrui à consommer de l'alcool de manière excessive" },
  { number: "7500€ ", title: "d'amende", description: "pour quiconque pousse autrui à consommer de l'alcool de manière excessive" }
];

const resources = [
  {
    link: "https://montetasoiree.com/",
    imageSrc: "/assets/monte-ta-soiree.png",
    label: "Monte ta soirée",
    description: "Un 1er outil pour organiser des soirées plus responsables",
  },
  {
    link: "https://pimp-my-party.fr/",
    imageSrc: "/assets/pimp-my-party.png",
    label: "Pimp my party",
    description: "Un 2ème outil pour organiser des soirées en toute sécurité",
  },
];

const resources2 = [
  {
    link: "https://www.alcool-info-service.fr/",
    imageSrc: "/assets/alcoolinfoservice.jpg",
    label: "Alcool info service",
    description: "Un site pour s'informer sur l'alcool et ses conséquences",
  },
  {
    link: "https://www.addictaide.fr/",
    imageSrc: "/assets/addictaide.jpg",
    label: "Addict'aide",
    description: "Trouve des outils et des ressources pour ne plus être seul·e face à l'addiction",
  },
  {
    link: "https://addictions-france.org/etablissements/",
    imageSrc: "/assets/cjc.png",
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
        <h1 className="titre-page">Consommation d'alcool</h1>
        <Sommaire links={navLinks} />

        <div id = "soirees">
          <h1 className="titre">L'alcool, moi et les autres</h1>
        </div>

      <div id="resume-conseils">
      <p className="mise-avant"><b>Boire comporte des risques</b>, pour ta santé et celle des autres. </p>
      <p className="mise-avant">Légalement, tu restes <b>responsable</b> de tes actes, même sous l'influence de l'alcool.</p>
      </div>
        
      <ImageTextPopup
        image="./assets/cartes/6_trefle.jpg"
        title="La carte 6♣"
        shortText="Prévention sur la banalisation de l'alcool en soirée"
        textButton="⤢ Agrandir la carte"
        longText="Difficile de dire non face à la pression du groupe, surtout dans des situations aussi banalisées qu'en soirée, où l'alcool est omniprésent. On peut souvent se sentir poussé à boire pour s'intégrer ou parce que les autres trouvent ça cool, comme on peut le voir sur cette carte. Pourtant, beaucoup aimeraient ne pas boire, ou ne pas finir ivres mais n'osent pas le dire. Alors si tu aimes boire en soirée, ne force pas les autres à en faire autant et respecte leurs choix. Et si tu ne bois pas, n'hésite pas à le dire clairement et à proposer d'autres activités. Une vraie soirée entre amis ne se résume pas à votre consommation d'alcool."
        suit="trefle"
      />
        


        <h2 className="sous-titre-2">Quels sont les effets de l'alcool ?</h2>

      <p className="texte">On considère qu'une personne est sous l'effet de l'alcool si elle ressent <b>plusieurs de ces symptômes</b>, quasi systématiquement et <b>pendant plusieurs heures après consommation</b> :</p>
      <BulletList items={[
    "Troubles de la coordination",
    "Altération du jugement et risques",
    "Difficultés de concentration",
    "Modification de l'humeur (euphorie, agressivité)",
    "Ralentissement des réflexes",
    "Fatigue, nausées et vertiges"
]} />

<p className="texte">Tu ressens ces symptômes, alors que tu n'as (presque) pas bu ? Tu as peut-être été <b>drogué·e à ton insu</b>.</p>
<ExternalLinkBlock resources={resources4} />


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

<YouTubeVideo url="https://www.youtube.com/watch?v=Xo0x_85pERo" />

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
      Choisir de consommer au-delà de ses limites, ce n'est pas seulement assumer ce qu'on se fait à soi-même, c'est aussi assumer <b>sa responsabilité envers les autres</b>. L'alcool ne doit pas être une excuse et ne justifie en aucun cas des comportements inappropriés ou dangereux. <b>Aux yeux de la loi, la consommation d'alcool est un facteur aggravant</b>.
    </>
  }
  imageSrc="/assets/justice.png"
/>


  <Separateur />


        <div id = "conso">
      <h1 className="titre">Je consomme</h1>
    </div>

    
      <div id="resume-conseils2">
      <p className="mise-avant"><b>Ne pas oublier de boire de l'eau et s'alimenter</b> pour atténuer les effets de l'alcool. </p>
      <p className="mise-avant">Boire beaucoup d'alcool te met en danger et favorise les <b>comportements à risque</b>. </p>
      <p className="mise-avant">Si tu as le moindre doute sur ta consommation, n'hésite pas à en parler à un·e <b>professionnel·le de santé</b>.</p>
      </div>



      <h1 className="sous-titre-2">Comment consommer de façon responsable ?</h1>

      <p className="texte">Pour limiter les risques liés à la consommation d'alcool, voici <b>quelques conseils</b> à suivre :</p>
      <BulletList items={[
    <><b>Ne pas boire à jeun</b> : manger avant et pendant la consommation</>,
    <><b>Boire lentement et à son rythme</b> : alterner avec de l'eau et des boissons non alcoolisées.</>,
    <><b>Prendre en compte le délai avant le pic d'alcoolémie</b> : 30/45 minutes après le dernier verre si à jeun, 1h/1h30 si repas</>,
    <><b>Connaître ses limites et s'y tenir</b> : ne pas se laisser influencer par les autres.</>,
    <><b>Eviter les mélanges avec d'autres substances</b> : médicaments, drogues, etc.</>,
    <><b>Ne jamais boire en conduisant</b> ou en pratiquant une activité nécessitant de la concentration</>,
    <><b>Prévoir un moyen de rentrer en toute sécurité</b> : taxi, VTC, transport en commun, conducteur désigné, etc.</>
]} /> 
      <ImageTextPopup
        image="./assets/cartes/roi_trefle.png"
        title="La carte R♣"
        shortText="Prévention sur la conduite en état d'ivresse"
        textButton="⤢ Agrandir la carte"
        longText="En tant que jeune conducteur, le moindre verre d'alcool te fait dépasser la limite légale et peut avoir des conséquences graves si tu prends le volant. L'alcool diminue tes capacités de concentration, ralentit tes réflexes et altère ton jugement, ce qui augmente considérablement le risque d'accident. Et comme la tolérance à l'alcool varie d'une personne à l'autre en fonction de plusieurs facteurs (poids, sexe, âge et consommation alimentaire), difficile de déterminer une quantité sûre d'alcool avant de prendre le volant."
        suit="trefle"
      />

      <p className="texte">Pour ta sécurité et celle des autres, il est fortement recommandé de <b>ne pas consommer d'alcool du tout avant de conduire</b>. Si tu as bu, mange, bois de l'eau et repose-toi plusieurs heures avant de prendre la route ou utilise des alternatives comme les transports en commun, un taxi ou un conducteur désigné pour rentrer chez toi en toute sécurité.
        </p>
      <p className="texte">Enfin, si tu te rends compte que tu as trop bu, n'hésite pas à <b>demander de l'aide</b> ou à en parler <b>à quelqu'un en qui tu as confiance</b> afin qu'il/elle veille sur toi.</p>


      <h1 className="sous-titre-2">Le binge drinking</h1>
      
      <Quote 
        text="Les meilleures soirées sont celles dont tu te souviens." 
      />
      <p className="texte"> 
      Boire un verre entre amis, c'est bien... Savoir s'arrêter, c'est mieux ! Le binge drinking désigne une <b>consommation excessive et rapide</b> d'alcool dans le but d'<b>atteindre l'ivresse</b> en un minimum de temps. Ce phénomène, particulièrement répandu en soirée et présent sous forme de <b>jeux et défis</b>, expose à de nombreux risques : perte de contrôle, comportements dangereux, coma éthylique, voire des conséquences graves sur la santé à long terme. En plus des dangers physiques, il peut aussi entraîner des troubles du comportement et des accidents. Même une <b>grosse cuite occasionnelle</b> peut abîmer ton coeur et provoquer un AVC.</p>
      
      <p className="texte">La vraie bonne soirée, c'est celle dont tu te souviens et où tu restes maître de tes choix. Bois à ton rythme, écoute-toi, et pense à demain !</p>


      <p>Rappelle-toi que tu ne devrais jamais te sentir <b>forcé·e à boire</b>, encore moins de manière excessive. Cela est même <b>puni par la loi</b>.</p>

      <ChiffresGroup chiffres={data2} />

      <ExternalLinkBlock
        resources={resources3}
      />

            
      <p className="text">N'oublie pas non plus que toutes les boissons ne contiennent pas la même quantité d'alcool. <b>Attention</b>, à la maison ou chez des amis, on a tendance à se servir de plus grands verres !</p>
        

      <ImageCenter
        imageSrc="/assets/doses-alcool.png"
      />


      <h1 className="sous-titre-2">Comment savoir si je bois trop souvent ?</h1>

      <p className="texte">En arrivant à l'école, on se retrouve souvent dans un nouvel environnement social où l'alcool et les fêtes sont omniprésents. Il est facile de se laisser entraîner dans des habitudes de consommation qui peuvent devenir problématiques. Or, une consommation régulière peut entraîner une dépendance physique et psychologique, rendant difficile l'arrêt ou la réduction de la consommation. Il est important de rester vigilant·e quant à tes habitudes de consommation et de ne pas hésiter à demander de l'aide si tu sens que tu perds le contrôle.</p>
      
      <ImageTextPopup
        image="./assets/cartes/3_trefle.png"
        title="La carte 3♣"
        shortText="Prévention sur la consommation régulière d'alcool"
        longText="Tu ne te vois plus passer une soirée sans alcool ? Tu bois régulièrement, même seul·e ? A force d'habitude, même en petite quantité, tu peux développer une tolérance à l'alcool. Cela signifie que ton corps s'habitue à la présence d'alcool et que tu as besoin d'en consommer davantage pour ressentir les mêmes effets. Cette tolérance peut te pousser à boire plus souvent, même en dehors d'un cadre festif, et en plus grande quantité, augmentant ainsi les risques pour ta santé."
        textButton="⤢ Agrandir la carte"
        suit="trefle"
      />

      <p className="texte">Pour savoir si ta consommation d'alcool est raisonnable, tu peux te référer à ces indicateurs :</p>
      <ListeNumerotee 
          title="Repères de consommation"
          items={items2}
      />

     <ExternalLinkBlock
        title="Ta consommation ne respecte pas l'un ou plusieurs de ces critères ?"
        subtitle="Fais le point avec des tests de dépistage et informe-toi à ces adresses :"
        resources={resources2}></ExternalLinkBlock>

      <h1 className="sous-titre-2">Besoin d'en parler ?</h1>
     
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
        image="/assets/fsj.png" 
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

      <div id="resume-conseils3">
      <p className="mise-avant">Tu remarques que quelqu'un a du mal à se tenir debout, à parler clairement ou se met en danger ? <b>Reste avec lui/elle et appelle à l'aide si nécessaire.</b></p>
      <p className="mise-avant">Si tu as le moindre soupçon sur la consommation d'alcool d'un proche, ne lui tourne pas le dos et <b>propose-lui ton aide de manière bienveillante.</b></p>
      </div>

      <h1 className="sous-titre-2">Comment agir face à une personne très alcoolisée ?</h1>
      <p>Si tu es témoin d'un comportement dangereux ou irresponsable d'une personne en état d'ivresse, garde <b>un oeil sur elle</b> en veillant à <b>ne pas te mettre en danger</b>.</p>
      
      <ListeNumerotee 
          
          title="Plan d'action pour aider une personne ivre et en danger"
          items={items}
      />


      <h1 className="sous-titre-2">Comment aider quelqu'un qui boit trop (souvent) ?</h1>
      <p>Si tu remarques que quelqu'un s'est mis à boire de manière régulière et/ou excessive, il est important d'agir rapidement. Voici quelques étapes à suivre :</p>
      
      <ListeNumerotee 
          title="Plan d'action pour aider quelqu'un sur sa consommation d'alcool"
          items={items3}
          
      />


      <Separateur />

      <div id = "organiser">
        <h1 className="titre">J'organise une soirée</h1>
      </div>

      <TextImageRight  
        text={
          <>
            Boire un coup entre amis doit rester un <b>moment de convivialité</b> où chacun doit se sentir à l'aise avec sa consommation. Si tu héberges ou planifies une soirée, pense à <b>prévoir des alternatives à l'alcool</b> et à <b>limiter les risques</b> pour tes invité·e·s, notamment en leur rappelant de ne pas boire s'ils doivent conduire ensuite. 
            Pour faire attention à chacun, tu peux trouver des outils pour organiser des <b>soirées plus responsables et sécurisées</b> sur les sites suivants :
          </>
        }
        imageSrc="/assets/alcool.jpg"
      />

    
      <ExternalLinkBlock

        resources={resources}
      />





      <Separateur />

      <p className="texte"><em><b>Sources :</b> Addict'Aide, Alcool Info Service, Fil Santé Jeunes, Guide 2024 : Les événements festifs et d'intégration étudiants</em></p>
      
  
      
      </div>

    );
  };
  
  export default Alcool;