import React from "react";
import "../../App.css";

// --- Composants maison ---
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  NumberedList,
  TextImageRight,
  ImageCenter,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Workinprogress from "../../components/WorkInProgress";

/* -------------------------------------------------------------------------- */
/*                                DONNÉES                                    */
/* -------------------------------------------------------------------------- */

// Liens d'ancrage internes pour la barre de navigation de la page
const navLinks = [
  { label: "Comprendre la solitude", target: "comprendre" },
  { label: "Rompre l’isolement", target: "rompre" },
  { label: "Besoin d’aide", target: "aide" },
];

// Quelques chiffres clés issus de l’enquête IFOP & données Centrale Lyon (État de l’art)
const chiffresIsolement = [
  {
    number: "28%",
    title: "étudiants français",
    description:
      "déclarent se sentir souvent ou toujours seuls (IFOP, 2024)",
  },
  {
    number: "55,8%",
    title: "étudiants internationaux",
    description:
      "fréquentent les soirées du campus moins d’une fois par trimestre",
  },
];

// Plan d’action pour se (re)connecter
const actionsRompre = [
  {
    title: "Identifier",
    subtitle: "Reconnais les situations où tu te sens isolé (repas seul, soirées évitées…) et note-les sur une semaine",
  },
  {
    title: "Fixer un micro-objectif",
    subtitle: "Par ex. : déjeuner une fois cette semaine avec un camarade ou participer à un after-work associatif",
  },
  {
    title: "T’exposer progressivement",
    subtitle: "Choisis des environnements bienveillants : permanences associatives, bibli Calm Zone, tiers-lieux AFEV…",
  },
  {
    title: "Demander du renfort",
    subtitle: "Un·e buddy international, tuteur·rice de promo, infirmière ou assistant·e social·e peuvent t’épauler",
  },
  {
    title: "Entretenir le lien",
    subtitle: "Bloque 1 créneau hebdo “social” dans ton agenda (sport collectif, bénévolat, jeu de société…) afin que l’habitude prenne racine",
  },
];

// Ressources web généralistes (déjà fournies par l’utilisateur)
const resources_sites = [
  {
    link: "https://www.etudiant.gouv.fr/fr",
    imageSrc: "/assets/etudiant_gouv.jpg",
    label: "Etudiant.gouv.fr",
    description: "Le site officiel du gouvernement pour les étudiants",
  },
  {
    link: "https://www.lyoncampus.com/",
    imageSrc: "/assets/logo_lyon_campus.png",
    label: "Lyon Campus",
    description: "Étudier, vivre, sortir et s’impliquer comme étudiant à Lyon",
  },
  {
    link: "https://www.universite-lyon.fr/vie-des-campus/vie-etudiante/nos-portails-sante-et-aides-etudiantes/",
    imageSrc: "/assets/logo_UDL.png",
    label: "Portails Santé et Aides de l’UDL",
    description: "Toutes les informations, dispositifs et procédures",
  },
  {
    link: "https://commentonsaime.fr/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s’aime ?",
    description: "Relations amicales, familiales, amoureuses : conseils et tchat anonyme",
  },
  {
    link: "https://www.crous-lyon.fr ",
    imageSrc: "/assets/logo_crous.png",
    label: "Crous de Lyon",
    description: "Aides, accompagnement, logements, restauration, international…",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Parler santé, sexualité, amour, mal-être (12-25 ans)",
  },
];

// Ressources externes dédiées à la vie sociale & aux tiers-lieux
const resources_social = [
  {
    link: "https://afev.org/actions/tiers-lieux",
    imageSrc: "/assets/afev.svg",
    label: "Carte des tiers-lieux étudiants",
    description: "Espaces de rencontre et coworking partout en France",
  },
  {
    link: "https://www.instagram.com/culturel_lyon/",
    imageSrc: "/assets/culture_lyon.webp",
    label: "Culturel Lyon (IG)",
    description: "Idées de sorties chaque week-end dans la métropole",
  },
];

/* -------------------------------------------------------------------------- */
/*                               COMPONENT                                    */
/* -------------------------------------------------------------------------- */

const Isolement = () => {
  return (
    <div className="page">
      {/* En-tête */}
      <h1 className="titre-page">Isolement</h1>
      <Navbar links={navLinks} />

      {/* SECTION : Comprendre */}
      <div id="comprendre">
        <h1 className="titre">Comprendre la solitude étudiante</h1>
        <Quote text="On peut être entouré·e et pourtant se sentir terriblement seul·e." />

        <h2 className="sous-titre-2">Pourquoi est-ce si fréquent&nbsp;?</h2>
        <BulletList
          items={[
            "Nouveau cadre de vie et éloignement du cercle familial",
            "Charge de travail intensive limitant les temps sociaux",
            "Langue & culture différentes pour les étudiant·e·s internationaux",
            "Usage excessif des écrans et sédentarité",
          ]}
        />

        <p className="texte">
          L’étude IFOP 2024 révèle que <b>plus d’un quart des étudiants</b> se déclarent
          toujours ou souvent isolés. Les données internes confirment cette tendance,
          en particulier chez les élèves internationaux et en <i>gap year</i>.
        </p>
        <ChiffresGroup chiffres={chiffresIsolement} />
      </div>

      <Separateur />

      {/* SECTION : Rompre l’isolement */}
      <div id="rompre">
        <h1 className="titre">Rompre l’isolement</h1>
        <TextImageRight
          imageSrc="/assets/friends.webp"
          text={
            <>
              Se reconnecter ne signifie pas devenir extraverti·e&nbsp;: il s’agit
              d’<b>introduire de petites interactions régulières</b> dans ton planning.
              Voici un plan d’action progressif&nbsp;:
            </>
          }
        />

        <ListeNumerotee title="5 étapes pour briser la solitude" items={actionsRompre} />

        <ExternalLinkBlock
          title="Sortir, rencontrer, partager"
          subtitle="Utilise ces plateformes pour trouver des événements ou des lieux conviviaux près de toi :"
          resources={resources_social}
        />
      </div>

      <Separateur />

      {/* SECTION : Besoin d’aide */}
      <div id="aide">
        <h1 className="titre">Besoin d’en parler&nbsp;?</h1>
        <p className="texte">
          Parler de ton ressenti est souvent le premier pas pour aller mieux. Ces
          services sont gratuits, anonymes et à l’écoute 7j/7 :
        </p>

        <ContactCard
          image="/assets/nightline_logo.png"
          title="Nightline Lyon"
          subtitle="Service d’écoute nocturne par et pour les étudiant·e·s"
          phone="04 85 30 00 10"
          hours="Tous les soirs de 21h à 2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />

        <ContactCard
          image="/assets/fsj.png"
          title="Fil Santé Jeunes"
          subtitle="Écoute anonyme & gratuite (12-25 ans)"
          phone="0 800 235 236"
          hours="Tous les jours de 9h à 23h"
          textButton="Voir le site web"
          link="https://www.filsantejeunes.com/"
        />

        <ExternalLinkBlock
          title="Ressources globales"
          subtitle="Ces sites regroupent infos et aides sur de nombreuses thématiques :"
          resources={resources_sites}
        />
      </div>

      <Separateur />

      {/* Crédit & sources */}
      <p className="texte">
        <em>
          <b>Sources&nbsp;:</b> IFOP 2024, enquête vie étudiante Centrale Lyon, Portail
          Santé UDL, AFEV, Nightline
        </em>
      </p>
    </div>
  );
};

export default Isolement;
