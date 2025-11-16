import React from "react";
import "../../App.css";

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que le revenge porn ?", target: "revenge" },
  { label: "Je suis victime", target: "victime" },
  { label: "Je suis témoin ou proche de la victime", target: "aidant" }
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
  { number: "44%", title: "des moins de 25 ans", description: "ont déjà envoyé des SMS, photos, vidéos à caractère sexuel" },
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

  const resource_pharos = [
  {
    link: "https://www.internet-signalement.gouv.fr",
    imageSrc: "/assets/pharos.jpg",
    label: "Pharos",
    description: "Plateforme gouvernementale pour signaler des contenus illicites sur internet"
  },
]


const Revenge_porn = () => {
    return (
      <div className = "page">

        <h1 className = "titre-page">Revenge porn</h1>
    

      <Sommaire links={navLinks} />

      <div id = "revenge">
        <h1 className="titre">Qu'est-ce que le revenge porn ?</h1>
      </div>

      <div id="resume-conseils">
      <p className="mise-avant">Le revenge porn désigne la <b>diffusion d'images intimes sans consentement</b>, souvent après une rupture ou pour faire du chantage, et constitue un <b>délit puni de 2 ans de prison et 60 000 € d'amende</b>. Cela touche particulièrement les jeunes, avec des risques de diffusion massive en ligne, d'humiliation et de chantage, d'où l'importance de <b>réagir vite</b>, <b>se protéger</b> et <b>demander de l'aide</b>.  </p>
      </div>

      <ImageTextPopup
        image="./assets/cartes/roi_coeur.png"
        title="La carte R&hearts;"
        shortText="Revenge porn : informations et conseils"
        longText="On ne peut pas empêcher l'envoi de nudes. En couple ou dans une relation de confiance, il paraît impensable que l'autre puisse conserver ou diffuser nos photos et vidéos intimes à des fins de vengeance. Pourtant, le risque existe. Si tu choisis d'en envoyer, essaie de réduire au maximum les signes distinctifs : éviter d'y montrer ton visage, tes tatouages, tes piercings, des vêtements reconnaissables ou encore des lieux identifiables. L'idée est de limiter les éléments qui permettraient de prouver qu'il s'agit bien de toi, afin de mieux te protéger en cas de diffusion non consentie."
        textButton="⤢ Agrandir la carte"
      />
      <h2 className="sous-titre-2">De quoi parle-t-on ?</h2>

      <p className="texte">Le <i>revenge porn</i> (ou <i>pornodivulgation</i>) désigne le fait de <b>partager, montrer ou diffuser</b> des images ou vidéos intimes d'une personne sans son accord. Cette forme de violence numérique est malheureusement de plus en plus courante, notamment après une <b>rupture conflictuelle</b>, avec pour but de <b>salir la réputation</b>, blesser ou atteindre psychologiquement la personne visée.<br/>
Le revenge porn peut aussi servir de <b>moyen de chantage</b> (<i>sextorsion</i>), par exemple pour obtenir d'autres nudes (photos ou vidéos dénudées), ou simplement pour humilier la victime.  
      </p>


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

      <p className="texte">
        Dès lors que la victime est informée de la diffusion de son contenu, elle doit agir rapidement. En effet, plus le temps passe, plus il sera difficile de faire retirer ces contenus. Il est donc important de <b>réagir vite</b> et de <b>ne pas rester seul·e</b>. Découvrir que son contenu intime a été diffusé reste un <b>véritable choc</b> pour la victime, c'est pourquoi il est important de <b>se faire aider</b>. Il existe des associations pour être accompagné·e dans ces démarches.
      </p>

      <h2 className="sous-titre-2">Quelques conseils pour minimiser l'impact du revenge porn</h2>

      <p className="texte">Nul n'est à l'abri d'être victime un jour de revenge porn. En effet, les contenus à caractère explicite qui peuvent être diffusés, ont dans la grande majorité des cas été <b>envoyés dans un cadre de confiance, d'intimité</b> et de <b>respect mutuel</b>. Nul ne peut se douter de la réaction qu'aurait son/sa partenaire lors d'une rupture.</p>

      <BulletList
        items={["Y réfléchir à deux fois avant de partager une photo/vidéo intime : suis-je reconnaissable sur ce contenu ?",
"Eviter à tout prix les signes distinctifs sur les contenus intimes (tatouages, piercings, vêtements, lieux reconnaissables...)",
"Ne pas partager de contenu intime avec des personnes que l'on ne connaît pas bien, même si elles sont de confiance",
"En as-tu vraiment envie ou est-ce uniquement pour faire plaisir à ton/ta partenaire ? Est-ce qu'il ou elle a beaucoup insisté pour cela ?",
        ]}
        />



        <p className="texte">N'oublions pas non plus que la <b>personne qui reçoit</b> un <i>nude</i> doit y <b>avoir consenti</b> au préalable. L'envoi d'un contenu à caractère sexuel non désiré peut s'apparenter à de l'<b>exhibition sexuelle</b>. Plus connu sous le nom de <i>dick pic</i> ou <i>cyberflashing</i>, cela consiste généralement à envoyer une photographie de son pénis en érection à quelqu'un sans son consentement.</p>

      <YouTubeVideo url="https://www.youtube.com/watch?v=t2b3Id8nSM0" />



      <Separateur />
      

      <div id = "victime">
        <h1 className="titre">Je suis victime</h1>
      </div>

        <div id="resume-conseils">
          <p className="mise-avant">En cas de revenge porn : <b>parle à des proches ou à des pros</b>, <b>garde les preuves</b>, <b>signale et demande le retrait des contenus</b>, et n'oublie pas que tu peux <b>porte plainte</b> pour atteinte à la vie privée. Il existe des <b>plateformes et des associations</b> pouvant t'aider à <b>faire supprimer des réseaux sociaux les contenus</b> qui ont été diffusés à ton insu.</p>
           </div>

      <h2 className="sous-titre-2">Comment réagir ?</h2>
      
      <p className="texte">Parles-en à des personnes de confiance pour qu'elles te soutiennent et t'accompagnent dans cette épreuve. N'hésite pas non plus à faire appel à des <b>associations</b> ou à prendre <b>rendez-vous avec un·e psychologue</b> car le revenge porn peut avoir de grosses conséquences sur ta santé mentale et ton estime de toi.</p>
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

          <ContactCard
            image="/assets/france-victimes.webp" 
            title="France Victimes"
            subtitle="Aide et redirection vers des associations concernant tout fait vous ayant porté préjudice"
            hours="24h/24h, 7j/7"
            phone="116 006"
            textButton="Voir le site web"
            link="https://www.france-victimes.fr/index.php/informations-pratiques/52-appeler-le-08-victimes"

            bgColor="#ffffff"    //informations facultatives
            textColor="#ef9322"
          />


      <p className="texte">Si tu es victime de revenge porn, voici les étapes à suivre pour <b>garder des preuves</b> :</p>
      <BulletList
        items={[
          "Faire des captures d'écran des contenus (photos, vidéos, messages) et les sauvegarder sur un support sécurisé.",
          "Conserver les messages et les noms d'utilisateur de la personne qui a diffusé le contenu.",
          "Conserver les URL des pages où les images et les vidéos ont été publiées pour prouver leur diffusion sur des sites spécifiques",
          "Noter la date et l'heure à laquelle les contenus ont été publiés",
          
        ]} />

        <p className="texte"> En effet, il est important de <b>ne pas supprimer les preuves</b> des contenus diffusés, même si cela peut être difficile. Toutes ces preuves te seront utiles si tu souhaites porter plainte ou faire retirer ces contenus d'internet.</p>


      <h2 className="sous-titre-2">Comment faire retirer des images publiées sans consentement ? </h2>
      <TextImageRight
        text={
          <>
            Pour faire retirer les contenus publiés sans votre accord, vous pouvez dans un premier temps <b>contacter directement l'auteur</b> (si vous le connaissez) pour lui demander de supprimer les contenus. Vous pouvez lui <b>rappeler que ses actes sont punis par la loi</b>, et qu'il risque jusqu'à 2 ans de prison et 60 000 € d'amende.</>
        }
        imageSrc="/assets/justice.png"
      />
      
      <p className="texte">Si tes <i>nudes</i> ou messages privés intimes sont publiés sur des réseaux sociaux tels que Snapchat, Instagram, Facebook, Twitter, etc., commence par signaler ces contenus comme <i><b>inappropriés</b></i> ou <i><b>violents</b></i> auprès de ces plateformes et précise que tu apparais contre ton gré sur ces contenus. </p>
      
      <p className="texte">Certaines <b>associations</b> peuvent t'aider à faire supprimer les images et vidéos de toi qui ont été publiées sur internet. Celles-ci ont besoin des <b>images ou vidéos concernées</b> ainsi que des preuves de diffusion afin de cibler ces publications et les effacer d'internet. Voici deux outils qui te permettront d'entamer cette démarche :</p>

          <ContactCard
          image="/assets/3018.png" 
          title="3018"
          subtitle="Cyberharcèlement,  harcèlement scolaire, revenge porn, chantage à la webcam, usurpation d'identité, VSS, exposition à des contenus violents. "
          phone="3018"
          email=""
          hours="7j/7, de 9h à 23h"
          textButton="Voir le site web"
          link="https://e-enfance.org/besoin-daide/"
          bgColor="#2736f0"
          textColor="#ffffff"
        />

      <ExternalLinkBlock
        resources={resources_NCII}
      />


    

      <h2 className="sous-titre-2">Tu souhaites porter plainte ?</h2>

      <Quote 
        text="Le fait de porter à la connaissance du public ou d'un tiers tout enregistrement ou document contenant des paroles ou des images à caractère sexuel, obtenus avec le consentement de la personne, mais diffusés sans son accord, est puni de deux ans d'emprisonnement et de 60 000 euros d'amende." 
        author="Code pénal, article 226-2-1"
      />

      <p className="texte">La diffusion d'images ou de vidéos intimes sans votre consentement constitue une <b>infraction pénale</b>. En tant que victime, vous avez le droit de porter plainte contre la personne responsable.
La plainte peut être déposée dans n'importe quel <b>commissariat de police</b> ou <b>brigade de gendarmerie</b>.</p>

<p className="texte">Même si vous ne connaissez pas l'identité de la personne à l'origine de la diffusion, vous pouvez <b>porter plainte contre X.</b></p>
      

      <ExternalLinkBlock
        resources={resources_victime}
      />

      

      <Separateur />
      
      <div id = "aidant">
        <h1 className="titre">Je suis témoin ou proche de la victime</h1>
      </div>

      <div id="resume-conseils">
      <p className="mise-avant">Si tu es témoin de revenge porn, <b>ne partage jamais les contenus</b>, <b>signale-les</b> (réseaux sociaux ou Pharos) et soutiens la victime en l'écoutant et en l'<b>aidant à chercher du soutien</b>.</p>
      </div>

      <p className="texte">
  Si tu es témoin de revenge porn, ta réaction peut faire une vraie différence. <b>Ne partage jamais</b> les contenus, même pour « prévenir » quelqu'un : cela te rend <b>complice</b> de leur diffusion, ce qui est illégal.
  Tu peux signaler les publications directement sur les réseaux sociaux concernés ou via la plateforme gouvernementale Pharos.
</p>
<ExternalLinkBlock 
    resources={resource_pharos} />
<p className="texte">
  <b>Soutiens la victime</b> si tu la connais : propose ton aide, écoute-la sans jugement, et encourage-la à ne pas rester seule. Tu peux aussi l'aider à réunir des preuves ou à contacter des <b>structures de soutien</b>. En parler, c'est déjà commencer à agir.
</p>


    <ExternalLinkBlock 
    title="Sujets associés"
    resources={resources4} />



      <Separateur />

      <p className="texte"><em> <b>Sources :</b> e-enfance, Association CVM, violences-sexuelles.info, Stop Fisha</em>
         </p>
      </div>
    );
  };
  
  export default Revenge_porn;