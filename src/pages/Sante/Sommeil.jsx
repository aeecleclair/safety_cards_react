import React from "react";
import "../../App.css";

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ListeNumerotee from "../../components/Listes";

const navLinks = [
  { label: "Comprendre le sommeil", target: "definition" },
  { label: "J'ai des troubles du sommeil", target: "troubles" },
  { label: "Comment mieux dormir ?", target: "solutions" },
];

const chiffres = [
  { number: "1/3", title: "des adultes", description: "souffrent de troubles du sommeil de façon ponctuelle" },
  { number: "10 à 15%", title: "de la population", description: "souffre d’insomnie chronique" },
  { number: "20 min", title: "c’est le temps moyen", description: "nécessaire pour s’endormir dans de bonnes conditions" },
];

const ressources = [
  {
    link: "https://www.inserm.fr/dossier/sommeil/",
    imageSrc: "/assets/inserm.jpg",
    label: "Inserm – Dossier Sommeil",
    description: "Explications scientifiques sur le sommeil et ses troubles",
  },
  {
    link: "https://sante.gouv.fr/",
    imageSrc: "/assets/sante-france.png",
    label: "Ministère de la Santé",
    description: "Informations officielles sur les troubles du sommeil et leur prise en charge",
  },
];

const items3 = [
  { title: "Sois bienveillant·e", subtitle: "Évite de minimiser les difficultés d’endormissement, elles sont souvent très épuisantes" },
  { title: "Écoute sans juger", subtitle: "Un sommeil perturbé est source d’anxiété, propose ton soutien avec patience" },
  { title: "Encourage les bonnes pratiques", subtitle: "Limiter les écrans, créer un rituel calme avant le coucher" },
  { title: "Accompagne si besoin", subtitle: "Propose de consulter un·e professionnel·le de santé si le problème devient chronique" },
];

const Sommeil = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Sommeil</h1>

      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Comprendre le sommeil</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant">
          Le sommeil se déroule en <b>cycles</b> (léger, profond, paradoxal). Chaque cycle est essentiel pour une bonne récupération. Le moindre déséquilibre peut entraîner <b>fatigue chronique</b>, <b>troubles de la concentration</b> ou encore <b>irritabilité</b>.
        </p>
      </div>

      <p className="texte">Les différentes phases du sommeil sont les suivantes : </p>
      <BulletList
        items={[
          "Sommeil léger : transition entre l’éveil et le sommeil, facile à interrompre",
          "Sommeil profond : phase de récupération physique, difficile à réveiller",
          "Sommeil paradoxal : phase de rêves, importante pour la mémoire et la régulation émotionnelle",
        ]}
      />  
     <ChiffresGroup chiffres={chiffres} />

      <h2 className="sous-titre-2">Pourquoi est-il important de bien dormir ?</h2>
      <p className="texte">En moyenne, les jeunes entre 18 et 25 ans dorment moins de 7 heures par nuit, ce qui est en dessous des recommandations (7 à 9 heures). Dormir moins de 7 heures par nuit peut avoir des conséquences sur ta santé :</p>
      <BulletList
        items={[
          "Diminution de la concentration et de la mémoire",
          "Augmentation du stress et de l’anxiété",
          "Affaiblissement du système immunitaire",
          "Prise de poids et troubles de l’appétit",
          "Altération de l’humeur et risque de dépression",
        ]}
      />

      <p className="texte">En effet, dormir permet à ton corps de récupérer et de se régénérer. Un sommeil de qualité est crucial pour maintenir un bon équilibre physique et mental.</p>
      
      <Separateur />

      <div id="troubles">
        <h1 className="titre">J'ai des troubles du sommeil</h1>
      </div>

      <div id="resume-details">
        <p className="mise-avant">
          Le sommeil est essentiel à notre santé physique et mentale. <b> Difficultés à s’endormir, réveils fréquents, anxiété nocturne ou insomnies chroniques </b> ne doivent pas être ignorés : ils peuvent altérer la qualité de vie au quotidien.
        </p>
      </div>

      <ImageTextPopup
        image="./assets/cartes/9_pique.png"
        title="La carte 9♠"
        shortText="Prévention et gestion des troubles du sommeil"
        longText="Avoir du mal à s’endormir ou à rester endormi n’est pas qu’une question de fatigue. Cela peut être lié au stress, à l’anxiété, à une hygiène de vie inadaptée ou à des troubles médicaux. Ne banalise pas un mauvais sommeil répété : il peut avoir de lourdes conséquences sur la santé physique et mentale."
        textButton="⤢ Agrandir la carte"
      />

      
      <h2 className="sous-titre-2">Pourquoi ai-je du mal à m'endormir ?</h2>
      <p className="texte">Il est parfois difficile de s'endormir car la phase de sommeil léger est souvent interrompue par des pensées incessantes ou des stimuli extérieurs (bruits ambiants, lumière). Une utilisation excessive des écrans avant le coucher peut également perturber le sommeil car les écrans émettent de la lumière bleue, qui inhibe la production de mélatonine, l'hormone du sommeil. Pour cette raison, si tu as des difficultés fréquentes à t'endormir, il est important de te créer un environnement propice au sommeil ou d'adopter des techniques de relaxation.</p>
      <p className="texte">Un mauvais sommeil ou une difficulté à s'endormir peut aussi être lié à des facteurs tels que le stress, l'anxiété, une mauvaise hygiène de vie ou des problèmes de santé sous-jacents. Si ces difficultés persistent, il peut être utile de consulter un·e professionnel·le de santé.</p>

      
      <ExternalLinkBlock
        resources={[
          {
            link: "/anxiete",
            emoji: "😟",
            label: "Anxiété",
            description: "Je suis trop anxieux·se pour trouver le sommeil. Que faire ?",
          },
          {
            link: "/ecrans",
            emoji: "📱",
            label: "Écrans",
            description: "Je passe trop de temps devant les écrans et cela affecte mon sommeil.",
          },
        ]}
      />

      <h2 className="sous-titre-2">Les troubles du sommeil</h2>

      <p className="texte">
        Les troubles du sommeil peuvent avoir différentes origines, parmi lesquelles :
      </p>

      <BulletList
        items={[
          "Insomnie : difficulté à s’endormir ou réveils fréquents",
          "Apnées du sommeil : pauses respiratoires nocturnes entraînant une fatigue diurne",
          "Syndrome des jambes sans repos : besoin irrépressible de bouger les jambes la nuit",
          "Somnambulisme et parasomnies : comportements anormaux durant le sommeil",
        ]}
      />

      <h2 className="sous-titre-2">Les différents types d'insomnie</h2>
      <p className="texte">Attention, l'insomnie ne désigne pas une simple mauvaise nuit. Elle se manifeste généralement par une difficulté à s'endormir, des réveils multiples pendant la nuit ou un sommeil non réparateur, au moins 3 nuits par semaine pendant 3 mois ou plus. On en distingue 3 types :</p>

      <BulletList
        items={[
          "Insomnie d'endormissement : difficulté à s'endormir au début de la nuit",
          "Insomnie de maintien du sommeil : réveils fréquents durant la nuit",
          "Insomnie de fin de sommeil : réveil précoce et impossibilité de se rendormir",
        ]}
      />

      <p className="texte">
        Si tu constates que tes nuits sont régulièrement perturbées et que cela impacte ton quotidien, <b>parles-en à un·e professionnel·le de santé</b>. 
        Des solutions existent pour retrouver un sommeil réparateur.
      </p>

      <Separateur />

      <div id="solutions">
        <h1 className="titre">Comment mieux dormir ?</h1>
      </div>

      <h2 className="sous-titre-2">Conseils pour mieux dormir</h2>

      <NumberedList
        items={[
          "Instaurer une routine de coucher (heure régulière, rituel calme)",
          "Éviter les écrans au moins 1h avant de dormir",
          "Favoriser une chambre fraîche, sombre et silencieuse",
          "Limiter caféine, alcool et repas trop lourds le soir",
          "Pratiquer la relaxation ou la respiration avant de se coucher",
          "Faire de petites siestes (20 min maximum) en journée si besoin",
        ]}
      />
      <p className="texte">
        Si tu souffres de troubles du sommeil persistants, n’hésite pas à consulter ton médecin. 
        Des solutions comme la thérapie comportementale, l’hypnose ou parfois un traitement médicamenteux peuvent être proposées. 
        Tu n’es pas seul·e à vivre ces difficultés.
      </p>


      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Pour mieux comprendre et gérer les troubles du sommeil"
        resources={ressources}
      />

      <Separateur />


      <p className="texte"><em><b>Sources :</b> Inserm, Ministère de la Santé, HAS, Réseau Morphée</em></p>
    </div>
  );
};

export default Sommeil;
