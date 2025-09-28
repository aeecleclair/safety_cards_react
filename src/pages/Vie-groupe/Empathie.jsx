import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  YouTubeVideo,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que l'empathie ?", target: "definition" },
  { label: "Développer son empathie", target: "developpement" },
];


const ressources_philo = [
  {
    link: "https://plato.stanford.edu/entries/empathy/",
    label: "Stanford Encyclopedia of Philosophy – Empathy",
    description: "Article de référence philosophique sur l’empathie",
  },
];

const ressources_neuro = [
  {
    link: "https://www.clevelandclinic.org/podcasts/studies-in-empathy",
    label: "Podcast Cleveland Clinic – Neurosciences de l’empathie",
    description: "Entretiens avec Dr Helen Riess et chercheurs en psychologie",
  },
];

const ressources_livres = [
  {
    link: "https://www.actes-sud.fr/catalogue/savoir/lage-de-lempathie",
    label: "Frans de Waal – L’âge de l’empathie",
    description: "Ouvrage accessible sur la biologie et la société",
  },
];


const Empathie = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Empathie</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Qu'est-ce que l'empathie ?</h1>

      <ImageTextPopup
        image="./assets/cartes/7_carreau.png"
        title="La carte 7♦"
        shortText="L'empathie en milieu étudiant"
        longText=""
        textButton="⤢ Agrandir la carte"
        suit="carreau"
      />


      </div>
      <p className="texte">
        L’empathie désigne la capacité à percevoir le point de vue d’autrui et à
        comprendre, voire partager ses émotions. On distingue souvent
        l’<b>empathie cognitive</b> (comprendre les pensées) et l’<b>empathie affective</b>
        (partager les émotions). Elle se différencie de la simple contagion
        émotionnelle ou de la sympathie.
      </p>


        <h2 className="sous-titre-2">Mécanismes psychologiques et biologiques</h2>
      <p className="texte">
        Les neurosciences montrent que l’observation d’un état émotionnel active
        dans notre cerveau des zones similaires à celles de l’expérience vécue.
        Le système des neurones miroirs, l’insula ou le cortex préfrontal
        participent à ce processus. L’empathie combine une voie « ascendante »
        (résonance émotionnelle) et une voie « descendante » (régulation
        cognitive).
      </p>

      <h2 className="sous-titre-2">L'importance de l'empathie</h2>
      <BulletList
        items={[
          "L’empathie est essentielle à un bon équilibre mental et physique. Elle inspire à prendre soin des autres et permet des relations sociales et professionnelles saines.",
          "L’empathie apprend aux enfants à prendre des décisions responsables et à tenir compte de la famille, des amis, de leur communauté et du reste du monde. Les jeunes empathiques ont plus de conscience de soi et sont plus à l’écoute, ce qui peut les protéger contre l’abus de substances et d’autres comportements à risque.",
          "L’empathie contribue à la conscience sociale et fait obstacle au harcèlement, aux préjugés et au racisme. Elle jette les bases d’une société juste, bienveillante et en paix.",
          "L’empathie nous permet de capter l’état d’esprit des autres et de mieux s’entraider – y compris entre personnes de différentes communautés."
        ]}
      />

      <ExternalLinkBlock
        resources={[
          {
            link: "https://www.unodc.org/unodc/fr/listen-first/super-skills/empathy.html",
            label: "Nations Unies",
            description: "Pour en apprendre davantage sur l'empathie et son importance",
            imageSrc: "/assets/un-logo.svg"
          }
        ]}
      />


        <h2 className="sous-titre-2">Le lien avec la santé mentale</h2>
      <p className="texte">
        L’empathie joue un rôle clé dans la santé mentale et les relations sociales. Comprendre et ressentir la souffrance d’autrui permet de créer un climat de soutien émotionnel et de résilience. Sur le plan personnel, développer son empathie tend à diminuer les sentiments de solitude et d’anxiété, car elle renforce les liens sociaux et l’estime de soi. Une bonne capacité empathique est un facteur de protection psychologique : elle facilite l’écoute mutuelle et la résolution pacifique des conflits, éléments clés d’un bon équilibre mental collectif.
      </p>

      <Separateur />

      <div id="developpement">
        <h1 className="titre">Développer son empathie</h1>
      </div>
      <ListeNumerotee
        title="Quelques idées..."
        subtitle="... pour développer son empathie"
        items={[
          { title: "Écoute active", subtitle: "Pratique une écoute sans jugement, reformule et valide les émotions." },
          { title: "Se mettre à la place de l’autre", subtitle: "Essaye de ressentir ce que l’autre ressent lorsqu'il ou elle te raconte quelque chose." },
          { title: "Lecture et récits", subtitle: "Immerge-toi dans des histoires pour prendre des perspectives variées." },
          { title: "Jeux de rôle et théâtre", subtitle: "Mets-toi dans la peau d’un autre pour développer la perspective." },
          { title: "Méditation et pleine conscience", subtitle: "Cultive la conscience de soi et des émotions d’autrui." },
          { title: "Engagement associatif et projets de groupe", subtitle: "Bénévolat ou projets collectifs favorisant l’entraide." },
        ]}
      />

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> Stanford Encyclopedia of Philosophy, Ashoka, études en neurosciences, Nations Unies.
        </em>
      </p>
    </div>
  );
};

export default Empathie;
