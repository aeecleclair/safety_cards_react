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
import { label } from "framer-motion/client";


// Liens d'ancrage internes pour la barre de navigation de la page
const navLinks = [
  { label: "Comprendre la solitude", target: "comprendre" },
  { label: "Rompre l’isolement", target: "rompre" },
  { label: "Besoin d’aide", target: "aide" },
  { label: "Aider une personne isolée", target: "aider" },
];

// Quelques chiffres clés issus de l’enquête IFOP & données Centrale Lyon (État de l’art)
const chiffresIsolement = [
  {
    number: "28%",
    title: "des étudiant·e·s françai·e·s",
    description:"déclarent se sentir souvent ou toujours seuls (IFOP, 2024)",
  },
  {
    number: "74.2%",
    title: "des étudiant·e·s",
    description: "travaillent en groupe au moins une fois par mois",
  },
  {
    number: "55,8%",
    title: "des étudiant·e·s internationaux",
    description: "fréquentent les soirées centraliennes moins d’une fois par trimestre",
  },
];

const depression = [
  {
    link: "/depression",
    label: "Dépression",
    description: "Tu ressens perte d’intérêt, tristesse, fatigue, troubles du sommeil ou de l’appétit ?",
    emoji: "🥺",
  },
  {
    link: "/anxiete",
    label: "Anxiété",
    description: "Tu es tendu·e, inquiet·e, tu as des difficultés à te concentrer ou à dormir ?",
    emoji: "😶‍🌫️",
  },
];

const resources_conf = [
  {
    link: "/conf",
    label: "Confiance & Estime de soi",
    description: "Des pistes pour prendre confiance en soi et s'affirmer",
    emoji: "💛",
  },
];

// Plan d’action pour se (re)connecter
const actionsRompre = [
  {
    title: "Identifier",
    subtitle: "Reconnais les situations où tu te sens isolé·e (repas seul·e, soirées évitées…) et note-les sur une semaine",
  },
  {
    title: "Fixer un micro-objectif",
    subtitle: "Par exemple : déjeuner une fois cette semaine avec un·e camarade ou participer à un événement associatif",
  },
  {
    title: "T’exposer progressivement",
    subtitle: "Choisis des environnements bienveillants : permanences associatives, bibliothèque, Skylab, etc.",
  },
  {
    title: "Demander du renfort",
    subtitle: "Ton parrain ou ta marraine, des ami·e·s que tu as déjà, l'infirmière ou l'assistant·e social·e peuvent t’épauler",
  },
  {
    title: "Entretenir le lien",
    subtitle: "Le sport obligatoire, le brassage associatif ou les événements (Bouffes d'étage, Souk du Bazar...) organisés régulièrement sont un bon moyen d'entretenir le lien",
  },
];


const resources_social = [
  {
    link: "https://afev.org/auvergne-rhone-alpes/grand-lyon",
    imageSrc: "/assets/logo-afev.svg",
    label: "Carte des tiers-lieux étudiants",
    description: "Espaces de rencontre partout en France",
  },
  {
    link: "https://www.instagram.com/culturel_lyon/",
    imageSrc: "/assets/culturel_lyon.jpg",
    label: "Culturel Lyon",
    description: "Idées de sorties chaque week-end dans la métropole",
  },
];


const Isolement = () => {
  return (
    <div className="page">
      {/* En-tête */}
      <h1 className="titre-page">Isolement</h1>
      <Navbar links={navLinks} />

      {/* SECTION : Comprendre */}
      <div id="comprendre">
        <h1 className="titre">Comprendre la solitude étudiante</h1>

        <ImageTextPopup
          image="/assets/cartes/2_carreau.png"
          title="La carte 2♦"
          shortText="L'isolement étudiant"
          longText="Ce sentiment d'isolement peut découler de divers facteurs tels que le changement d'environnement, la pression académique, ou encore la difficulté à établir de nouvelles relations sociales. Comprendre les causes et les manifestations de l'isolement est essentiel pour y faire face efficacement. En tant qu'étudiant·e, n'hésite pas à aller vers les autres si tu remarques qu'ils sont isolés, un simple geste, une simple question peuvent faire la différence."
          textButton="⤢ Agrandir la carte"
          suit="carreau"
        />


        <h2 className="sous-titre-2">Pourquoi est-ce si fréquent ?</h2>
        <BulletList
          items={[
            "Nouveau cadre de vie et éloignement du cercle familial",
            "Charge de travail intensive à certaines périodes, limitant les temps sociaux",
            "Langue & culture différentes pour les étudiant·e·s internationaux",
            "Usage excessif des écrans et sédentarité",
            "Manque de confiance en soi ou timidité",
          ]}
        />

        <ExternalLinkBlock
          resources={resources_conf}
        />

        <p className="texte">
          L’étude IFOP 2024 révèle que <b>plus d’un quart des étudiants</b> se déclarent
          toujours ou souvent isolés. Les données internes confirment cette tendance,
          en particulier chez les élèves internationaux et en année de césure.
        </p>
        <ChiffresGroup chiffres={chiffresIsolement} />
      </div>

      <h2 className="sous-titre-2">Tu te sens seul·e sans raison apparente ?</h2>
      <p className="texte">La solitude peut être un <b>symptôme de mal-être plus profond</b> (stress, anxiété, dépression). Si tu ressens d’autres signes (tristesse, fatigue, irritabilité, troubles du sommeil ou de l’appétit…), n’hésite pas à consulter un·e professionnel·le de santé.
      </p>

      <ExternalLinkBlock resources={depression} />


      <Separateur />

      <div id="rompre">
        <h1 className="titre">Rompre l’isolement</h1>
<p className="texte">
          Se reconnecter ne signifie pas devenir extraverti·e. Il s’agit d’<b>introduire de petites interactions régulières</b> dans ton planning.
          Voici un plan d’action progressif :
        </p>

        <ListeNumerotee title="5 étapes pour briser la solitude" items={actionsRompre} />

        <ExternalLinkBlock
          title="Sortir, rencontrer, partager"
          subtitle="Utilise ces plateformes pour trouver des événements ou des lieux conviviaux près de toi :"
          resources={resources_social}
        />
      </div>

      <Separateur />

      <div id="aide">
        <h1 className="titre">Besoin d’en parler ?</h1>
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
      </div>
      <Separateur />

        <div id="aider">
      <h1 className="titre">Aider une personne isolée</h1>
      </div>
      <p className="texte">
        Tu connais une personne qui semble isolée ? Voici quelques conseils pour l’aider à se (re)connecter :
      </p>

      <BulletList
        items={[
          "Prends des nouvelles régulièrement, même un simple message peut faire la différence.",
          "Propose des activités ensemble : une sortie, un café, ou même une visio.",
          "Sois à l’écoute sans juger, laisse-la exprimer ses ressentis.",
          "Encourage-la à participer à des événements ou à rejoindre des groupes.",
          "Sois patient·e, le processus d'intégration sociale peut prendre du temps, et chacun avance à son rythme.",
          ]}
      />

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> IFOP 2024, Qualité de Vie en étude à l'ECL, Portail
          Santé UDL, AFEV, Nightline Lyon, Fil Santé Jeunes.
        </em>
      </p>
    </div>
  );
};

export default Isolement;
