// Structure similaire à la page alcool, adaptée aux drogues
import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";


const navLinks = [
  { label: "La drogue, moi et les autres", target: "ensemble" },
  { label: "Je consomme", target: "conso" },
  { label: "Je suis témoin", target: "temoin" },
  { label: "Je m'informe", target: "infos" }
];

const conseils = [
  { subtitle: "Évite de consommer seul·e ou dans un endroit inconnu" },
  { subtitle: "Informe un proche de ta situation si tu consommes" },
  { subtitle: "Hydrate-toi régulièrement et mange avant de consommer" },
  { subtitle: "Ne mélange pas substances, médicaments et alcool" },
];


const data2 = [
  { number: "12,8%", title: "des élèves", description: "consomment du cannabis" },
  { number: "4,7%", title: "des élèves", description: "consomment d'autres stupéfiants" }
];

const risques = [
  "Addiction et perte de contrôle",
  "Troubles mentaux : anxiété, paranoïa, dépression",
  "Dommages physiques : cœur, foie, système nerveux",
  "Accidents graves ou comportements à risque",
  "Problèmes judiciaires (possession, usage, revente)"
];

const resources2 = [
  {
    link: "https://www.drogues-info-service.fr/",
    imageSrc: "/assets/droguesinfoservice.png",
    label: "Drogues info service",
    description: "Un site pour s'informer sur les drogues et leurs conséquences",
  },
  {
    link: "https://www.addictaide.fr/",
    imageSrc: "/assets/addictaide.jpg",
    label: "Addict'aide",
    description: "Trouve des outils et des ressources pour ne plus être seul·e face à l’addiction",
  },
  {
    link: "https://addictions-france.org/etablissements/",
    imageSrc: "/assets/cjc.png",
    label: "Consultations jeunes consommateurs",
    description: "Trouve une CJC pour t'accompagner près de chez toi",
  }
];

const resources4 = [
  {
    link: "/soumission",
    emoji: "💊",
    label: "Soumission chimique",
    description: "Comment réagir si je pense avoir été drogué·e à mon insu ?",}
  ];

const Stupefiants = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Consommation de stupéfiants</h1>
      <Navbar links={navLinks} />

      <div id="ensemble">
        <h1 className="titre">La drogue, moi et les autres</h1>
      </div>
    
      <h2 className="sous-titre-2">Quels sont les effets des stupéfiants ?</h2>

      <p className="texte">On considère qu’une personne est sous l’effet de stupéfiants si elle ressent <b>plusieurs de ces symptômes</b>, quasi systématiquement et <b>pendant plusieurs heures après consommation</b> :</p>
      <BulletList items={[
    "Perte de contrôle et confusion",
    "Hallucinations et perception altérée",
    "Troubles de la mémoire et de l’attention",
    "Anxiété, paranoïa ou agitation",
    "Risque de dépendance",
    "Fatigue, troubles du sommeil et malaises"
]} />

<p className="texte">Tu ressens ces symptômes, alors que tu n'as pas consommé de stupéfiants ? Tu as peut-être été <b>drogué·e à ton insu</b>.</p>
<ExternalLinkBlock resources={resources4} />

      <ImageTextPopup
        image="/assets/drogue1.jpg"
        title="La carte V♣"
        shortText="Sur la consommation occasionnelle"
        longText="Consommer une substance psychoactive, ce n’est pas anodin. Elle agit sur ton cerveau, modifie tes sensations, ta perception, ton comportement. Cela peut créer une illusion de contrôle, mais chaque prise comporte des risques – immédiats ou différés."
        textButton="⤢ Agrandir la carte"
      />


      <p className="texte">La consommation de stupéfiants à l'école est une réalité souvent minimisée. Elle n'est pas anodine : elle peut avoir des conséquences graves, tant pour soi que pour les autres. Légalement, elle est interdite, mais aussi <b>risquée</b> pour la santé, les relations sociales et les études.</p>

      <ChiffresGroup chiffres={data2} />



      <h2 className="sous-titre-2">Quels sont les risques ?</h2>
      <BulletList items={risques} />



      <Separateur />
      <div id="conso">
        <h1 className="titre">Je consomme</h1>
      </div>

      <Quote text="Ce n’est pas juste un joint. C’est un choix, et parfois une spirale." />

      <p className="texte">Si tu consommes, il est important de le faire en ayant conscience des risques, et en prenant des précautions. Voici quelques conseils pour réduire les risques liés à l’usage :</p>
      <ListeNumerotee title="Conseils de réduction des risques" items={conseils} />

      <p className="texte">Tu te poses des questions sur ta consommation ? Tu peux en parler à un·e professionnel·le, sans jugement.</p>

      <ImageTextPopup
        image="/assets/drogue1.jpg"
        title="La carte 10♣"
        shortText="Sur l'addiction aux stupéfiants"
        longText=""
        textButton="⤢ Agrandir la carte"
      />

      
     <ExternalLinkBlock
        title="Ta consommation t'inquiète et commence à peser sur ton quotidien ?"
        subtitle="Fais le point avec des tests de dépistage et informe-toi à ces adresses :"
        resources={resources2}></ExternalLinkBlock>


      <h1 className="sous-titre-2">Besoin d’en parler ?</h1>

      <ContactCard
        image="/assets/cjc.png"
        title="Consultations Jeunes Consommateurs"
        subtitle="Gratuit, confidentiel, sans jugement pour les jeunes consommateurs"
        phone=""
        email=""
        hours="Sur RDV en CJC"
        textButton="Trouver une CJC"
        link="https://addictions-france.org/etablissements/"
      />

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

      <Separateur />

      <div id="temoin">
        <h1 className="titre">Je suis témoin</h1>
      </div>
      <p className="texte">Tu vois quelqu’un consommer ou se mettre en danger sous l’effet de drogues ? Ne reste pas seul·e face à cette situation. Informe un adulte ou contacte un service compétent. Mieux vaut prévenir que regretter.</p>

      <Separateur />

      <div id="infos">
        <h1 className="titre">Je m’informe</h1>
      </div>
      <p className="texte"><em><b>Sources :</b> Drogues Info Service, Addict’Aide, OFDT, Santé Publique France</em></p>
    </div>
  );
};

export default Stupefiants;