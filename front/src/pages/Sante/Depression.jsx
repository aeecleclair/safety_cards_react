import React from "react";
import "../../App.css";
import "./depression.css"

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
const { BulletList, NumberedList, TextImageRight, Navbar, YouTubeVideo} = Components;

const navLinks = [
  { label: "Qu'est-ce que la dépression ?", target: "depression" },
  { label: "Je suis en souffrance", target: "victime" },
  { label: "Je m'inquiète pour quelqu'un", target: "aidant" }
];


const items_aerer = [
  { title: "Approcher la personne, évaluer et assister", 
    subitems: [ 
      { title : "Approchez la victime", subtitle: "Trouvez le moment et le lieu où vous vous sentez tous les deux à l'aise pour discuter. Si la personne n'est pas disposée à parler, ne la forcez pas à parler, elle peut avoir besoin de temps pour se confier : signalez-lui simplement que vous restez à sa disposition." },
      {title : "Si vous percevez des signes de crise", subtitle: "Si il est fait mention pendant la conversation d'idées suicidaires ou d'automutilation non suicidaire, la victime peut être en crise. Il est alors nécessaire de l'assister. Référez-vous aux pages Suicide et Automutilation." }
      ] },

  { title: "Écouter activement et sans jugement", subtitle: "Posez des questions, reformulez ses propos pour bien comprendre, n'interrompez pas la personne, regardez-la quand elle vous parle, n'exprimez pas de jugement et évitez la confontation." },
  { title: "Réconforter et informer", subtitle: "Rassurez le·la quant au fait qu'il·elle peut se rétablir, rappelez qu'il·elle n'est pas seul·e à faire face à ce type de situation, proposez votre aide en prenant garde à ne pas tout assumer à sa place, réfléchissez à des solutions ensemble. " },
  { title: "Encourager à aller vers des professionnels", subtitle: "Par exemple l'infirmière de Centrale, un médecin généraliste ou un psychologue. Si la victime ne souhaite pas voir de professionnels, discutez de ce refus. Quoiqu'il en soit, signalez-lui que vous restez à sa disposition." },
  { title: "Renseigner sur les autres ressources disponibles", subtitle: "Encouragez-le·la à communiquer avec d'autres ami·e·s ou avec des membres de leur famille. Vous pouvez aussi les orienter vers des ressources en ligne, présentes sur cette page par exemple." },
];

const resources_aerer = [

  {
    link: "/suicide",
    emoji : "🗣️",
    label: "Suicide",
    description: "Comment réagir face à quelqu'un qui évoque des idées suicidaires ?",
  },

  {
    link: "/automutil",
    emoji : "🦓",
    label: "Automutilation non suicidaire",
    description: "Comment réagir face à quelqu'un qui s'automutile ?",
  }
];


const resources_infos = [

  {
    link: "https://masante.universite-lyon.fr/sante-mentale/",
    imageSrc: "/assets/logo_UDL.png",
    label: "Portail Santé mentale",
    description: "de l'Université de Lyon : Conseils, explications et ressources ",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc:"/assets/fsj.png",
    label: "Fil santé Jeunes",
    description: "Des conseils et des articles sur la dépression",
  },
  {
    link: "https://commentonsaime.fr/",
    imageSrc:"/assets/logo-cosa.svg",
    label: "Comment on s'aime ?",
    description: "Un site internet pour répondre à toutes vos questions",
  }
];

const resources_aide = [

  {
    link: "https://monsoutienpsy.ameli.fr/recherche-psychologue",
    
    label: "Mon soutien psy ",
    description: "12 séances gratuites avec un psychologue",
  },
  {
    link: "https://masante.universite-lyon.fr/sante-mentale/annuaire-sante-mentale/",
    imageSrc:"/assets/logo_UDL.png",
    label: "Annuaire",
    description: "de l'Université de Lyon : accompagnement, suivi, urgences...",
  },
  {
    link: "https://www.nightline.fr/soutien-etudiant",
    imageSrc:"/assets/nightline_logo.png",
    label: "Annuaire",
    description: "de la Nigtline : les aides gratuites autour de toi",
  }
];

const data = [
  { number: "1/5", title: "Nombre de français", description: "Qui ont vécu ou vivront une dépression au cours de leur vie" },
  { number: "200", title: "Élèves de Centrale Lyon", description: "Consultent l'infirmière à propos de leur santé mentale chaque année" },
  { number: "80%", title: "Des élèves de Centrale Lyon", description: "Évaluent leur santé mentale comme bonne" },
];



const Depression = () => {
    return (
      <div className = "page">

        <h1 className = "titre-page">Dépression</h1>


      <Navbar links={navLinks} />

      <div id = "depression">
        <h1 className="titre">Qu'est-ce que la dépression ?</h1>
      </div>
      <h2 className="sous-titre-2">Quels sont les symptômes de la dépression ?</h2>

      <p className="texte">On considère la personne dans un état dépressif si elle ressent <b>au moins 5 de ces symptômes</b>, quasi quotidiennement et <b>pendant plus de 15 jours</b> :
         
      </p>

      <BulletList items={["Humeur dépressive ou irritable",
         "Perte de plaisir et d'intérêt pour les activités appréciées habituellement", 
         "Perte d'énergie, fatigue",
         "Baisse de l'estime de soi, culpabilité injustifiée",
         "Idées suicidaires ou morbides",
         "Difficultés à se concentrer ou à prendre des décisions",
         "Ralentissement des mouvements ou agitaion et incapacité à se poser",
         "Troubles du sommeil (perte comme augmentation)",
         "Troubles de l'appétit (perte ou excès)"]} />

      <p className="texte">Les dépressions font parties des troubles psychiques les plus fréquents chez les jeunes adultes et les adolescents. En témoignent les chiffres suivants : </p>
      <ChiffresGroup chiffres={data} />

      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites à visiter pour continuer à se renseigner sur la dépression"
        resources={resources_infos}
      />

      <ImageTextPopup
        image="./assets/feu.jpg"
        title="La carte 4♠"
        shortText="Santé mentale et dépression : agir en tant que victime"
        longText="Santé mentale et dépression : agir en tant que victime"
        textButton="⤢ Agrandir la carte"
      />



      <Separateur />
      
      <div id = "victime">
        <h1 className="titre">Je suis en souffrance</h1>
      </div>

      <h2 className="sous-titre-2">Comment se faire aider ?</h2>
      
      <p className="texte"><b>Tu n'es pas seul·e</b> et de nombreuses initiatives sont mises en place pour t'écouter et t'aider. Si tu le souhaites, tu peux en parler à des membres de ta famille ou à des amis. Tu peux aussi prendre rendez-vous avec <b>l'infirmière de l'Ecole</b>, et ce même si tu as juste besoin de parler.</p>

      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
        title="Infirmerie"
        subtitle="Infirmerie de Centrale Lyon"
        phone="Voir les informations"
        email="Voir les informations"
        hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
        textButton="Voir les informations"
        link=""

        bgColor="#ffffff"    //informations facultatives
        textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

      />

      <p className="texte">Il existe aussi des services en ligne. Tu peux contacter la <b>Nightline</b>, service qui te mettra en contact avec des <b>étudiants bénévoles</b> de manière gratuite et anonyme, que tu aies besoin d'aide ou simplement besoin de vider ton sac. Si tu préfères parler à des <b>professionnels</b>, toujours de manière gratuite et anonyme, alors tu peux contacter <b>Comment on s'aime ?</b>.</p>
      
      <div className="two-column-container">
        <div className="column">
          <ContactCard
          image="/assets/nightline_logo.png" 
          title="Nightline Lyon"
          subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
          phone="04 85 30 00 10"
          email=""
          hours="Tous les soirs, de 21h à 2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />
        </div>
        <div className="column">
          <ContactCard
            image="/assets/logo-cosa.svg" 
            title="Comment on s'aime ?"
            subtitle="Écoute et réponse à tes questions par des professionnels"
            hours="Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h"
            textButton="Voir le site web"
            link="https://commentonsaime.fr/"

            bgColor="#f6a21e"    //informations facultatives
            textColor="#ffffff"
          />
        </div>
      </div>
    

      <ExternalLinkBlock
        title="Tu cherches un soutien psy sur le long terme ? "
        subtitle="Il existe différentes solutions pour t'aider à suivre ta santé mentale dans la durée."
        resources={resources_aide}
      />



      <h2 className="sous-titre-2">Tu es en détresse ou tu as des pensées suicidaires ?</h2>
      
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

      

      <Separateur />
      
      <div id = "aidant">
        <h1 className="titre">Je m'inquiète pour quelqu'un</h1>
      </div>

      <p className="texte">Si vous êtes en présence d’une personne en dépression, votre <b>soutien</b> peut faire toute la différence.  
      En tant que secouriste, <b>il est normal que certaines journées soient plus éprouvantes que d’autres. </b> 
      Avant d’intervenir pour aider les autres, prenez donc un moment pour vous assurer que vous êtes en mesure d’écouter avec <b>bienveillance</b> et <b>sans jugement</b>.
         
      </p>

      <ListeNumerotee 
          
          title="Plan d'action pour les Premiers Secours en Santé Mentale (Plan AÉRER)" 
          subtitle="Comment aider un personne qui fait face à des troubles dépressifs ?" 
          items={items_aerer} //on fait appel à des constantes de début de la page
          
      />
        <ExternalLinkBlock
        title=""
        subtitle=""
        resources={resources_aerer}
      />

      <ImageTextPopup
        image="./assets/feu.jpg"
        title="La carte 6&diams;"
        shortText="Santé mentale et dépression : agir en tant que témoin"
        longText="Santé mentale et dépression : agir en tant que témoin"
        textButton="⤢ Agrandir la carte"
      />

      <h2 className="sous-titre-2">Pour aller + loin : la formation PSSM</h2>

      <TextImageRight  text="Les PSSM (Premiers Secours en Santé Mentale) constituent l’aide qui est apportée à une personne touchée par un trouble ou une crise de santé mentale. Les premiers secours sont donnés jusqu’à ce qu’une aide professionnelle puisse être apportée ou jusqu’à ce que la crise soit résolue. Ils sont l’équivalent en santé mentale des gestes de premiers secours qui, eux, apportent une aide physique à la personne en difficulté.
      Ouverte à toutes et tous, et sans pré-requis, la formation PSSM vise à apprendre à savoir réagir face à une détresse psychique : entrer en contact, soutenir et orienter.
      La formation est dispensée à Centrale par l'infirmière : si tu es intéressé·e, tu peux la contacter ou voir avec l'association Peer Care." 
      imageSrc="/assets/logo-pssm.svg" />

      <Separateur />

      <p className="texte"><em> <b>Sources :</b> Manuel des Premiers Secours en Santé Mentale pour les jeunes , Portail Santé de l'Université de Lyon, PAI 22 : Qualité de vie en études à l'ECL, Comment on s'aime ?, CNAE </em>
         </p>
      </div>
    );
  };
  
  export default Depression;