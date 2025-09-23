import React from "react";
import "../../App.css";

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import { image } from "framer-motion/m";

const navLinks = [
  { label: "Qu'est-ce que la soumission chimique ?", target: "soumission" },
  { label: "Je suis victime", target: "victime" },
  { label: "Je suis témoin ou proche de la victime", target: "aidant" },
  { label: "J'organise une soirée", target: "organiser" }
];


const items_agressions = [
  { title: "Déposer plainte", subtitle:"Vous pouvez déposer plainte dans tout commissariat/gendarmerie (voir lien 1 ci-dessous). "},
  { title: "Faire une consultation médicolégale", subtitle: "Le rendez-vous est donné à la suite du dépôt de plainte. Cette consultation permet d’accéder à des prises en charges médicales (traitement de prévention infectieux et contraception d’urgence) et de conduire la recherche d’éventuels éléments de preuve (constat des lésions, recherche d’ADN étranger et de spermatozoïdes, prélèvements à visée toxicologique…). Tu peux aussi te faire dépister gratuitement (VIH et IST) dans un centre CeGIDD (lien 2 ci-dessous) " },
  { title: "Se faire accompagner par une association d'aide aux victimes", subtitle: "Les associations d’aides aux victimes vous propose un accompagnement gratuit, pluridisciplinaire (juridique, psychologique, social) et confidentiel. (Annuaire en suivant le lien 3 ci-dessous)" },

];


const resources_infos = [

  {
    link: "https://lecrafs.com/",
    imageSrc: "/assets/crafs.png",
    label: "Le CRAFS",
    description: "Plateforme de référence qui informe sur la soumission chimique ",
  },
  {
    link: "https://arretonslesviolences.gouv.fr/besoin-d-aide/soumission-chimique-et-vulnerabilite-chimique",
    imageSrc:"/assets/arretons_violence.svg",
    label: "Arrêtons les violences",
    description: "Plateforme gouvernementale (informations, conseils, contacts)",
  },
  {
    link: "https://mendorspas.org/#soumission",
    label: "#Mendorspas",
    description: "Association de lutte, de prévention et d'information ",
  }
];

const resources_victime = [

  {
    link: "/docs/depot_plainte_vss.pdf",
    label: "Comment se passe le dépôt de plainte en cas de VSS ?",
    description: "Explications claires et complètes",
    imageSrc:"/assets/rep-logo.png",
  },

  {
    link: "https://www.masecurite.interieur.gouv.fr/fr/trouver-un-commissariat-une-gendarmerie",
    label: "Porter plainte",
    description: "Trouve un commissariat ou une gendarmerie près de chez toi",
    imageSrc:"/assets/rep-logo.png",
  },

  {
    link: "https://vih.org/cegidd/",
    imageSrc:"/assets/cegidd.png",
    label: "Trouver un CeGIDD",
    description: "Trouve un centre de dépistage gratuit près de chez toi",
  },
  {
    link: "https://lecrafs.com/contacts-pour-vos-demarches/",
    imageSrc:"/assets/crafs.png",
    label: "Annuaire",
    description: "des moyens d'accompagnement et d'aide aux victimes",
  }
];



const data = [
  { number: "17", title: "Numéro de la police", description: "à contacter en cas d'urgence, si victime ou témoin" },
  { number: "114", title: "Numéro d'urgence en cas de difficultés à entendre ou parler"},
  { number: "3919", title: "Violences Femmes Infos", description: "Numéro d'écoute et d'orientation, anonyme, gratuit, 7j/7, 24h/24" },
];

const resources4 = [
  {
    link: "/vss",
    emoji: "🫂",
    label: "VSS",
    description: "Comment assister une personne victime de VSS ?",}
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



const Soumission_chimique = () => {
    return (
      <div className = "page">

        <h1 className = "titre-page">Soumission chimique</h1>


      <Navbar links={navLinks} />

      <div id = "soumission">
        <h1 className="titre">Qu'est-ce que la soumission chimique ?</h1>
      </div>

      <ImageTextPopup
        image="./assets/cartes/7_trefle.png"
        title="La carte 7&clubs;"
        shortText="Soumission chimique : informations et conseils"
        longText="Face à la soumission chimique, il existe différents moyens de prévenir. A l'extérieur, veille toujours sur tes ami·e·s et leurs verres, et accompagne-les si elles ou ils se sentent mal. En plus de ça, différents moyens sont mis en place à Centrale lors des soirées afin de réduire le risque de soumission chimique. Tu peux demander des protèges-verres gratuits à l'entrée de la soirée. Les rondes Peer-Care (gilets roses) sont aussi là pour veiller sur toi et tes ami·e·s. Enfin, n'hésite pas à te rendre en Zone Chill si tu ne te sens pas bien ou si tu as des doutes, un gilet rose sera là pour t'accompagner. Tu pourras aussi y retrouver du matériel de prévention."
        textButton="⤢ Agrandir la carte"
        suit="trefle"
      />



      <h2 className="sous-titre-2">De quoi parle-t-on ?</h2>

      <p className="texte">La soumission chimique consiste à <b>administrer une ou plusieurs substances psychoactives à des victimes à leur insu ou sous la menace, dans un but criminel ou délictueux.</b> Contrairement à une idée répandue, elle ne se limite pas à l'utilisation du GHB, souvent appelé « drogue du violeur ». Les substances employées sont principalement des médicaments tels que des <b>somnifères, des sédatifs, des anxiolytiques ou des antihistaminiques.</b><br/>

Ce phénomène n'est pas restreint aux environnements festifs. Selon la dernière enquête nationale sur la soumission chimique menée par l'ANSM, <b>dans la majorité des cas, ce sont les proches, qu'ils soient professionnels, amicaux ou familiaux, qui sont impliqués en premier lieu.</b> Les victimes sont souvent des personnes vulnérables, abusées ou maltraitées, parfois de manière répétée et sur le long terme.<br/>

Dans le cas de la soumission chimique, <b>l'absence de souvenirs clairs de l'agression ou de l'agresseur, ainsi que la difficulté à reconnaître les symptômes,</b> compliquent la prise de conscience de leur statut de victime.
         
      </p>


      <Quote 
        text="Le fait d'administrer à une personne, à son insu, une substance de nature à altérer son discernement ou le contrôle de ses actes afin de commettre à son égard un viol ou une agression sexuelle est puni de cinq ans d'emprisonnement et de 75 000 € d'amende." 
        author="Code pénal, article 222-30-1"
      />

    <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites à visiter pour continuer à se renseigner sur la soumission chimique"
        resources={resources_infos}
      />

      <h2 className="sous-titre-2">Quels sont les symptômes ?</h2>
     
      <p>
        Seules des analyses toxicologiques permettent de mettre en évidence l’administration d’un médicament ou d’une drogue par l’agresseur. Voici tout de même les symptômes récurrents d'une soumission chimique : 
      </p>

      <BulletList
        items={[
          "Amnésie totale (blackout) ou partielle (flashs)",
          "Comportement inhabituel",
          "Somnolence",
          "Vertiges",
          "Perte de l’équilibre",
          "Trouble de la vision",
          "Bouffées de chaleur",
          "Palpitations",
          "Nausées",
          "Vomissements",
        ]}
      />

      <p>
        Ces symptômes doivent alerter s’ils sont associés à des faits criminels ou délictuels possibles :
      </p>

      <BulletList
        items={[
          "Traces de violences physiques, douleurs",
          "Désordre vestimentaire",
          "Vol d’effets personnels...",

        ]}
      />

      <p className="texte">
        Quand elle opère dans la sphère conjugale ou intrafamiliale, la soumission chimique s’inscrit souvent dans une routine insidieuse. La survenue des symptômes précités peut alors intervenir à répétition et à toute heure de la journée voire au long cours.
        <br/>
        <b>Quelle que soit la situation, il est nécessaire d’écouter ses doutes. N'hésitez pas à contacter les conseillers du CRAFS.</b>
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

      <h2 className="sous-titre-2">Quelques conseils pour minimiser les risques en soirée</h2>

      <BulletList
        items={[
          "Dans la mesure du possible, rester en groupe, être accompagné·e par des amis qui veillent et peuvent réagir en cas de danger",
"Avoir un membre du groupe qui ne boit pas ou ne consomme pas de substances et pourra ramener ses amis et amies",
"Ne pas quitter son verre des yeux, ne pas accepter de verre de la part d’un inconnu ou d'une inconnue. Il est également possible d’utiliser des couvercles ou protèges verre anti-drogue, disponibles au bar ou à l'entrée des soirées à Centrale",
"Contrôler sa consommation d'alcool (en ayant à l’esprit que l'effet des médicaments augmente lorsqu'on consomme de l'alcool) ; en cas de doute ou d’agression, il est important de parler de ce qui est arrivé, à des personnes de confiance et à des professionnels et professionnelles de santé qui pourront écouter et accompagner chaque victime de soumission chimique ou de vulnérabilité chimique."

        ]}
        />

      <YouTubeVideo url="https://www.youtube.com/watch?v=hA7FrcTaTjo" />

      <Separateur />
      
      <div id = "victime">
        <h1 className="titre">Je suis victime</h1>
      </div>

      <h2 className="sous-titre-2">Comment réagir ?</h2>
      
      <p className="texte"> Parles-en à des personnes de confiance pour qu'elles te prennent en charge. En soirée, rapproche-toi de la <b>sécurité</b>, des <b>rondes Peer Care</b>, de la <b>Zone Chill</b> ou du <b>Bar</b>. En cas de doute ou d’agression, il est important de parler de ce qui est arrivé, à des <b>personnes de confiance</b> et à des <b>professionnels et professionnelles de santé</b> qui pourront écouter et accompagner chaque victime de soumission chimique ou de vulnérabilité chimique.</p>

    
      <h2 className="sous-titre-2">Numéros à contacter en cas d'urgence</h2>
      <ChiffresGroup chiffres={data} />

      <h2 className="sous-titre-2">Tu es victime d'agressions facilitées par les substances ?</h2>

      <p className="texte">La détection de ces substances dans le corps est souvent difficile, leur durée de présence est souvent courte (de quelques heures à quelques jours). C’est pourquoi le recours rapide aux services d’urgences est essentiel afin que des prélèvements soient effectués avant la disparition du produit dans l’organisme. La réaction doit aussi être rapide sur le plan sanitaire (évaluation médicale, contraception d'urgence en maximum 5 jours, suivi infectieux pour prévenir une contamination VIH/hépatite B en 48h maximum, accompganement psychologique...)</p>
      

      <ListeNumerotee 
          
          title="Parcours de prise en charge des agressions facilitées par les substances" 
          subtitle="Quelles sont les étapes à suivre en cas d'agression facilitée par les substances ?" 
          items={items_agressions} 
          
      />

      <ExternalLinkBlock
        resources={resources_victime}
      />

      

      <Separateur />
      
      <div id = "aidant">
        <h1 className="titre">Je suis témoin ou proche de la victime</h1>
      </div>

    <p><b>Si vous êtes en soirée,</b> rapprochez-vous de la <b>sécurité et des organisateurs</b> pour signaler le cas de soumission chimique.</p>
    <p>
      En tant que témoin ou proche, il est crucial de <b>soutenir la victime</b> en premier lieu. Rassurez-la, informez-la des démarches possibles et accompagnez-la si elle décide de les entreprendre. La bienveillance et l'écoute sont essentielles. 
    </p>

    <p>
      Accompagner une victime, c'est aussi <b>respecter ses choix</b>, même s'ils diffèrent des vôtres. Si elle ne souhaite pas porter plainte, respectez sa décision.
    </p>

    <p>
      Cependant, pour les personnes vulnérables (mineurs, personnes âgées, personnes en situation de handicap, sous protection juridique…), il est impératif d'agir.
    </p>

    <p>
    <b>Les conseils de cette page s'adressent également à vous</b>. Les dispositifs mentionnés dans les parties précédentes sont aussi à votre service en tant que témoins ou proches. Le soutien psychologique est important non seulement pour les victimes, mais aussi pour vous.
    </p>

    <ExternalLinkBlock resources={resources4} />


    <Separateur />

    <div id = "organiser">
        <h1 className="titre">J'organise une soirée</h1>
      </div>

      <TextImageRight  
        text={
          <>
            De nombreux outils sont disponibles pour réduire entre autres le risque de soumission chimique lors de soirées. En tant qu'organisateur, tu peux mettre en place des mesures de prévention et de sécurité pour protéger les participants. Voici quelques conseils :
          </>
        }
        imageSrc="/assets/alcool.jpg"
      />

    
      <ExternalLinkBlock
        resources={resources_orga}
      />



      <Separateur />

      <p className="texte"><em> <b>Sources :</b> Le CRAFS, Plateforme gouvernementale Arrêtons les Violences, #Mendorspas, le guide Cpas1option.com, Hospices Civils de Lyon </em>
         </p>
      </div>
    );
  };
  
  export default Soumission_chimique;