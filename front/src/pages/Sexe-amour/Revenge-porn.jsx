import React from "react";
import "../../App.css";

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
  { label: "Qu'est-ce que le revenge porn ?", target: "revenge" },
  { label: "Je suis victime", target: "victime" },
  { label: "Je suis témoin ou proche de la victime", target: "aidant" },
  { label: "J'organise une soirée", target: "organiser" }
];


const items_agressions = [
  { title: "Déposer plainte", subtitle:"Vous pouvez déposer plainte dans tout commissariat/gendarmerie (voir lien 1 ci-dessous). "},
  { title: "Faire une consultation médicolégale", subtitle: "Le rendez-vous est donné à la suite du dépôt de plainte. Cette consultation permet d’accéder à des prises en charges médicales (traitement de prévention infectieux et contraception d’urgence) et de conduire la recherche d’éventuels éléments de preuve (constat des lésions, recherche d’ADN étranger et de spermatozoïdes, prélèvements à visée toxicologique…). Tu peux aussi te faire dépister gratuitement (VIH et IST) dans un centre CeGIDD (lien 2 ci-dessous) " },
  { title: "Se faire accompagner par une association d'aide aux victimes", subtitle: "Les associations d’aides aux victimes vous propose un accompagnement gratuit, pluridisciplinaire (juridique, psychologique, social) et confidentiel. (Annuaire en suivant le lien 3 ci-dessous)" },

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
    link: "https://e-enfance.org/informer/cyber-harcelement/le-revenge-porn/",
    imageSrc: "/assets/e_enfance.webp",
    label: "Association e-enfance",
    description: "Pour connaître un peu plus les mécanismes du revenge porn",
  },
  {
    link: "https://violences-sexuelles.info/comprendre-definitions-loi/revenge-porn/",
    imageSrc:"/assets/info_violences_sexuelles.png",
    label: "Aspect juridique",
    description: "Que dit exactement la loi ?",
  },

];

const resources_victime = [
  {
    link: "https://www.murielle-cahen.com/publications/revengeporn.asp",
    label: "Aspect juridique",
    description: "Comment porter plainte ?",
  },
  {
    link: "https://stopfisha.org/",
    imageSrc:"/assets/StopFisha.png",
    label:"Stop Fisha",
    description: "Tout ce qui peut être fait en cas de revenge porn "
  }
];



const data = [
  { number: "44%", title: "des moins de 25 ans", description: "se sont déjà livrés à des pratiques d'excitation virtuelle (SMS, photos, vidéos)" },
  { number: "4%", title: "des Français", description: "admettent avoir déjà diffusé des contenus à caractère sexuel sans consentement" },
  { number: "50%", title: "des moins de 25 ans", description: "disent avoir peur d'être victime un jour de revenge porn"},
];






const resources4 = [
  {
    link: "/couple",
    emoji: "💑",
    label: "Relations de couple",
    description: "Mon/ma partenaire insiste pour que je lui envoie des nudes, que faire ?",}
    ,
    {
      link:"cyberharcelement",
      emoji: "📵",
      label: "Cyberharcèlement",
      description: "Je suis victime d'une campagne de cyberharcèlement, que faire ?",
    }
  ];


  const resources_orga = [
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
    {
      link: "https://www.cpas1option.com/",
      label: "Cpas1option.com",
      description: "Le guide pratique avec des outils de prévention et de réduction des risques",
    }
  ];


const resources_NCII = [
  {
    imageSrc: "/assets/Stop-NCII.png",
    link: "https://stopncii.org/fr",
    label: "StopNCII.org",
    description: "Organisme britannique à portée internationale retirant des contenus intimes non consensuelles"
  },
  {
    imageSrc: "/assets/Disrupt.jpg",
    link: "https://www.pointdecontact.net/disrupt/",
    label: "Disrupt",
    description: "Signaler une personne qui menace de divulguer vos contenus intimes afin d'en empêcher la diffusion",
  }]


const Revenge_porn = () => {
    return (
      <div className = "page">

        <h1 className = "titre-page">Revenge porn</h1>


      <Navbar links={navLinks} />

      <div id = "revenge">
        <h1 className="titre">Qu'est-ce que le revenge porn ?</h1>
      </div>
      <h2 className="sous-titre-2">De quoi parle-t-on ?</h2>

      <p className="texte">Le <i>revenge porn</i> (ou <i>pornodivulgation</i>) désigne le fait de <b>partager, montrer ou diffuser</b> des images ou vidéos intimes d’une personne sans son accord. Cette forme de violence numérique est malheureusement de plus en plus courante, notamment après une <b>rupture conflictuelle</b>, avec pour but de <b>salir la réputation</b>, blesser ou atteindre psychologiquement la personne visée.<br/>
Le revenge porn peut aussi servir de <b>moyen de chantage</b> (<i>sextorsion</i>), par exemple pour obtenir d'autres nudes (photos ou vidéos dénudées), ou simplement pour humilier la victime.  
      </p>

      <Quote 
        text="Le fait de porter à la connaissance du public ou d’un tiers tout enregistrement ou document contenant des paroles ou des images à caractère sexuel, obtenus avec le consentement de la personne, mais diffusés sans son accord, est puni de deux ans d’emprisonnement et de 60 000 euros d’amende." 
        author="Code pénal, article 226-2-1"
      />


      <ChiffresGroup chiffres={data} />

    <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites à visiter pour continuer à se renseigner sur le revenge porn"
        resources={resources_infos}
      />

      <h2 className="sous-titre-2">Qui peut avoir accès à mon contenu intime ?</h2>
     
      <p>
        Une fois envoyé, tout contenu à caractère sexuel n'est plus sous le contrôle de son auteur. Il peut être partagé, diffusé, commenté, déformé, utilisé à des fins de chantage ou de harcèlement. Il peut finir, entre autres : 
      </p>

      <BulletList
        items={[
          "Dans les mains d'amis du/de la diffuseur·euse",
          "Sur des groupes de discussion",
          "Sur des sites pornographiques",
          "Sur les réseaux sociaux",
          "Sur des forums",
          "Dans des applications de rencontre",
          "Dans des salles de chat",
          "Dans des espaces de stockage en ligne",
        ]}
      />

      <p>
        Dès lors que la victime est informée de la diffusion de son contenu, elle doit agir rapidement. En effet, plus le temps passe, plus il sera difficile de faire retirer ces contenus. Il est donc important de <b>réagir vite</b> et de <b>ne pas rester seul·e</b>. Découvrir que son contenu intime a été diffusé reste un <b>véritable choc</b> pour la victime, c'est pourquoi il est important de <b>se faire aider</b>. Il existe des associations pour être accompagné·e dans ces démarches.
      </p>

      <ContactCard
        image="/assets/crafs.png" 
        title="Le CRAFS"
        subtitle="Centre de Référence sur les Agressions Facilitées par les Substances"
        phone="01 40 05 42 70"
        hours="Lundi à vendredi : 9h - 13h et 14h - 18h "
        textButton="Contacter le CRAFS"
        link="https://lecrafs.com/contact/"

        bgColor="#ffffff"    //informations facultatives
        textColor="#c7000b"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

      />

      <h2 className="sous-titre-2">Quelques conseils pour minimiser l'impact du revenge porn</h2>

      <p className="texte">Nul n'est à l'abri d'être victime un jour de revenge porn. En effet, les contenus à caractère explicite qui peuvent être diffusés, ont dans la grande majorité des cas été <b>envoyés dans un cadre de confiance, d'intimité</b> et de <b>respect mutuel</b>. Nul ne peut se douter de la réaction qu'aurait son/sa partenaire lors d'une rupture.</p>

      <BulletList
        items={["Y réfléchir à deux fois avant de partager une photo/vidéo intime : suis-je reconnaissable sur ce contenu ?",
"Eviter à tout prix les signes distinctifs sur les contenus intimes (tatouages, piercings, vêtements, lieux reconnaissables...)",
"Ne pas partager de contenu intime avec des personnes que l'on ne connaît pas bien, même si elles sont de confiance",
"En as-tu vraiment envie ou est-ce uniquement pour faire plaisir à ton/ta partenaire ? Est-ce qu'il ou elle a beaucoup insisté pour cela ?",
        ]}
        />

<ImageTextPopup
        image="./assets/RP.jpeg"
        title="La carte R&hearts;"
        shortText="Revenge porn : informations et conseils"
        longText="Revenge porn : informations et conseils"
        textButton="⤢ Agrandir la carte"
      />

        <p className="texte">N'oublions pas non plus que la <b>personne qui reçoit</b> un <i>nude</i> doit y <b>avoir consenti</b> au préalable. L'envoi d'un contenu à caractère sexuel non désiré peut s'apparenter à de l'<b>exhibition sexuelle</b>. Plus connu sous le nom de <i>dick pic</i> ou <i>cyberflashing</i>, cela consiste généralement à envoyer une photographie de son pénis en érection à quelqu'un sans son consentement.</p>

      <YouTubeVideo url="https://www.youtube.com/watch?v=IFAq5uXM7Qo" />



      <Separateur />
      
  export default Revenge_porn;