import React from "react";
import "../../App.css";

import ListeNumerotee from "../../components/Listes";
import ImageTextPopup from "../../components/Cartes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Pourquoi et où faire du sport ?", target: "importance" },
  { label: "Facteurs & obstacles", target: "obstacles" },
  { label: "Bien-être & prévention", target: "prevention" }
];

const sport_lyon = [
  {
    link: "https://www.oslyon.com/pratique-libre/",
    imageSrc: "/assets/min.png",
    label: "Lyon",
    description: "Sites de running, balades à vélo, fitness en extérieur, skate-parks extérieurs",
  }
];

const items_calories = [
  { 
    title: "Marche", 
    subtitle: "Parcourir 5 km en 1h ou 2h brûle environ la même quantité de calories. La marche rapide augmente l'effort : des marcheurs expérimentés ou entraînés dépensent plus d'énergie que lors d'une marche tranquille." 
  },
  { 
    title: "Jogging et course", 
    subtitle: "Pour un adulte, courir 10 km peut brûler environ 600 à 800 calories selon le poids, le sexe et l'intensité. Allonger la foulée permet de dépenser jusqu'à 15 % d'énergie supplémentaire." 
  },
  { 
    title: "Natation", 
    subtitle: "Pour la même distance, la natation brûle environ 4 fois plus de calories que la course. La brasse est plus énergivore que le crawl. Comme le muscle est plus dense que la graisse, la perte de poids peut ne pas apparaître immédiatement sur la balance." 
  },
  { 
    title: "Vélo", 
    subtitle: "Rouler à intensité modérée (ex. 20 km/h) permet de brûler environ 400–600 calories par heure pour un adulte. En montée ou à haute intensité, cette dépense peut dépasser 800 calories. Le vélo sollicite surtout les jambes tout en ménageant les articulations." 
  }
];

const itemsFreins = [
  {
    title: "Emplois du temps chargés",
    subtitle: "Cours, projets, stages et examens réduisent fortement les créneaux disponibles pour une activité régulière."
  },
  {
    title: "Coût",
    subtitle: "Les frais d'adhésion, le matériel et le transport peuvent être un frein pour certain·e·s étudiant·e·s."
  },
  {
    title: "Manque de repères",
    subtitle: "Difficulté à choisir une activité adaptée, peur de se blesser ou de mal faire."
  },
  {
    title: "Timidité / peur du regard",
    subtitle: "Hésitation à rejoindre des groupes ou cours collectifs par crainte du jugement."
  },
  {
    title: "Contraintes de santé",
    subtitle: "Blessures, douleurs chroniques ou conditions médicales qui limitent la pratique sans adaptation."
  },
  {
    title: "Violences et discriminations dans le sport",
    subtitle: "Certain·e·s étudiant·e·s peuvent subir ou craindre des violences sexuelles, psychologiques, du harcèlement ou des discriminations dans le cadre de la pratique sportive."
  }
];


const itemsSolutions = [
  {
    title: "Organisation (micro-séances)",
    subtitle: "Intégrer des séances courtes (10–20 min) : marche active, escaliers, renforcement rapide entre deux cours, le midi, le soir ou le week-end."
  },
  {
    title: "Aides financières & subventions",
    subtitle: "Les étudiant·e·s boursier·e·s peuvent demander prise en charge partielle (BDS / scolarité) ; rechercher tarifs réduits municipaux."
  },
  {
    title: "Accompagnement & information",
    subtitle: "Le service sport et le Bureau des Sports (BDS) peuvent aider à trouver une activité, des créneaux et des parrainages pour débuter."
  },
  {
    title: "Cours pour débutant·e·s",
    subtitle: "S'orienter vers des cours en petits groupes ou sessions ‘découverte' pour gagner en confiance."
  },
  {
    title: "Reprise progressive et prévention",
    subtitle: "Ateliers de renforcement doux, stretching, évaluation santé par l'infirmière avant reprise intense."
  },
  {
    title: "Accessibilité et sport adapté",
    subtitle: "Proposer des activités spécifiques (yoga assis, sport adapté) et contacter l'infirmerie pour un accompagnement personnalisé."
  },
    {
    title: "Faire face aux violences dans le sport",
    subtitle: "Si tu es victime ou témoin de violences (sexuelles, harcèlement, discriminations), tu peux en parler à l'infirmerie, au Bureau des Sports (BDS) ou directement via le service national de signalement « Signal-Sports » (Ministère des Sports). Des associations comme Colosse aux pieds d'argile accompagnent également les étudiant·e·s concerné·e·s."
  }
];


const resources_prevention = [
  {
    link: "/sommeil",
    emoji : "??",
    label: "Sommeil",
    description: "Interrogations sur le sommeil ? Difficultés pour l'endormissement ?",
  },
  {
    link: "/anxiete",
    emoji : "??",
    label: "Anxiété",
    description: "",
  },
  {
    link: "/sédentarité",
    emoji : "??",
    label: "Sédentarité",
    description: "",
  }
]

const sport_VSS = [
    {
    link: "https://colosse.fr/",
    imageSrc: "/assets/colosse.png",
    label: "Colosse aux pieds d'argile",
    description: "Association qui lutte contre les violences sexuelles, le harcèlement et le bizutage dans le sport",
  }
]

const barometres = [
  {
    link: "/assets/reglo_sport_reglette.pdf",
    label: "Les VSS dans le sport",
    description: "",
    emoji: "⚽",
  }
];

const data = [
  { number: "79%", title: "Élèves de Centrale Lyon", description: "se disent satisfaits de la fréquence de leur pratique sportive" },
  { number: "2h30–4h", title: "Recommandation OMS", description: "d'activité physique par semaine" },
  { number: "16%", title: "Étudiants", description: "ne rentrent pas dans ce cadre minimum" },
];





/* Provisoire : page non faite */
import Workinprogress from "../../components/WorkInProgress";

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
    description: "Etudier, vivre, sortir et s'impliquer comme étudiant à Lyon"
  },
  {
    link: "https://www.universite-lyon.fr/vie-des-campus/vie-etudiante/nos-portails-sante-et-aides-etudiantes/",
    imageSrc: "/assets/logo_UDL.png",
    label: "Portails Santé et Aides de l'UDL",
    description : "Toutes les informations, dispositifs et procédures"

  },
  {
    link: "https://commentonsaime.fr/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s'aime ?",
    description: "Pour se renseigner sur les relations amoureuses, amicales, familliales...",
  },

  {
    link: "https://www.crous-lyon.fr ",
    imageSrc: "/assets/logo_crous.png",
    label: "Crous de Lyon",
    description: "Aides, accompagnement, logements, restauration, international...",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Pour parler santé, sexualité, amour, mal être...",
  },
];




const SportSante = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Santé physique & pratique du sport</h1>



        <Workinprogress/>

        <h1 className = "titre">Les ressources globales</h1>
      <ExternalLinkBlock
        subtitle="Voici quelques sites regoupant un grand nombre d'informations sur diverses thématiques"
        resources={resources_sites}
      />





      <Sommaire links={navLinks} />

      <div id="importance">
        <h1 className="titre">Pourquoi et où faire du sport ?</h1>
      </div>

      <ImageTextPopup
        image="./assets/cartes/5_pique.png"
        title="Activité physique"
        shortText="TEXTE A FAIRE"
        longText="TEXTE A FAIRE"
        textButton="⤢ Agrandir la carte"
        suit="pique"
      />

      <p className="texte">
        L'activité physique inclut tout mouvement du corps produit par les muscles, allant de la marche quotidienne aux sports collectifs, natation, danse, yoga ou fitness.
      </p>

      <p className="texte">
        Ses bénéfices sont multiples :
      </p>
      <BulletList items={[
        "Physiques : amélioration cardiovasculaire, renforcement musculaire et osseux, maintien d'un poids équilibré",
        "Mentaux : réduction du stress et de l'anxiété, meilleure concentration, qualité de sommeil améliorée",
        "Sociaux : intégration à la vie de campus, développement de l'esprit d'équipe, moments conviviaux via les associations étudiantes"
      ]} />

      <p className="texte">
        À Centrale Lyon, les infrastructures permettent de pratiquer facilement : gymnase, terrains extérieurs, nouveaux terrains de padel, associations étudiantes comme le <b>Bureau des Sports (BDS)</b>, mais aussi piscines, pistes d'athlétisme et salles municipales de la ville de Lyon.
      </p>

      <p className="sous-titre-2">Le sport : une question d'équilibre et d'écoute de soi</p>
      <p className="texte">
        Attention cependant : <b>trop de sport</b> n’est pas forcément bénéfique. Comme pour tout, l’équilibre est essentiel. 
        Une pratique excessive ou mal adaptée peut entraîner des blessures, une fatigue chronique, ou une baisse des performances scolaires et mentales. 
      </p>

      <p className="texte">
        Le sport est censé être un <b>plaisir</b> et un <b>moment de détente</b> : il aide à réduire le stress, à vider l’esprit et à retrouver de l’énergie, 
        mais il ne doit pas devenir une source supplémentaire de pression. Si tu ressens une grande fatigue, des douleurs persistantes ou une perte de motivation, 
        il est recommandé de diminuer l’intensité, de varier les activités ou de demander conseil à un professionnel de santé.
      </p>

      <p className="texte">
        Le plus important dans la pratique d'une activité physique reste la <b>régularité</b> et l’<b>écoute de soi</b> : quelques séances modérées chaque semaine suffisent pour ressentir les bénéfices 
        physiques et psychologiques, sans épuisement.
      </p>


      <ChiffresGroup chiffres={data} />

      <ExternalLinkBlock
        title="Infrastructures sportives centraliennes et lyonnaises"
        subtitle="Retrouvez les lieux pour pratiquer selon vos envies."
        resources={sport_lyon}
      />

      <p className="texte">
        Même au quotidien, des gestes simples comptent : marcher 5 km, privilégier le vélo, courir ou nager régulièrement.
      </p>

      <ListeNumerotee 
        title="Comparatif des activités physiques" 
        subtitle="Quelques exemples concrets de dépenses énergétiques selon l'activité choisie" 
        items={items_calories}
      />

      <Separateur />

      <div id="obstacles">
        <h1 className="titre">Facteurs & obstacles</h1>
      </div>

      <p className="texte">
        Malgré une réelle motivation, plusieurs obstacles peuvent limiter une pratique régulière : emploi du temps, coût, manque d'information, timidité ou contraintes de santé. 
        Voici les freins les plus fréquents rencontrés par les étudiant·es :
      </p>

      <ListeNumerotee
        title="Les freins principaux"
        subtitle="Obstacles rencontrés par les étudiant·e·s"
        items={itemsFreins}
      />
  
      <ExternalLinkBlock
        resources={barometres}
      />

      <p className="texte">
        Heureusement, des solutions existent pour aider à surmonter ces obstacles :
      </p>

      <ListeNumerotee
        title="Des solutions adaptées"
        subtitle="Ce qui peut aider à reprendre ou maintenir une pratique"
        items={itemsSolutions}
      />

      <ExternalLinkBlock
        title=""
        subtitle=""
        resources={sport_VSS}
      />

      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
        title="Infirmerie"
        subtitle="Infirmerie de Centrale Lyon : un lieu de conseil"
        phone="Voir les informations"
        email="Voir les informations"
        hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00"
        textButton="Voir les informations"
        link="https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990"
        bgColor="#ffffff"
        textColor="#b22133"
      />

      <Separateur />

      <div id="prevention">
        <h1 className="titre">Bien-être & prévention au quotidien</h1>
      </div>

      <p className="texte">
        Pour être en bonne santé, le sport ne suffit pas à lui seul : une hygiène de vie adaptée renforce ses effets et aide à prévenir les blessures. Voici quelques pratiques clés à intégrer dans votre quotidien :
      </p>

      <p className="texte">
        <b>Sommeil et récupération :</b> un repos suffisant est essentiel pour favoriser la performance physique et mentale, et limiter les risques de blessures.
      </p>

      <p className="texte">
        <b>Nutrition et activité physique :</b> combiner une alimentation équilibrée avec des activités comme la marche rapide, le vélo, le jogging ou la natation permet de brûler des calories et d'entretenir la forme.
      </p>

      <p className="texte">
        <b>Soins dentaires :</b> le dispositif <b>M'T Dents</b> permet aux jeunes adultes de bénéficier d'un rendez-vous bucco-dentaire gratuit à 18, 21 et 24 ans. Les notifications sont envoyées par courrier ou via le compte Ameli environ un mois avant votre anniversaire.
      </p>

      <p className="texte">
        <b>Prévention des blessures :</b> grâce au partenariat avec la clinique <b>Isosteo</b>, les étudiant·e·s de Centrale Lyon peuvent accéder à des consultations ostéopathiques à conditions préférentielles pour prévenir ou soulager les tensions et blessures liées à l'activité physique.
      </p>

      <p className="texte">
        <b>Mobilité douce :</b> privilégier des modes de déplacement actifs comme la marche, le vélo ou la course permet d'allier santé, respect de l'environnement et économie de temps. Ces gestes simples, intégrés à votre routine quotidienne, ont un impact significatif sur la forme physique globale.
      </p>

      <p className="texte">
        <b>Relaxation et gestion du stress :</b> les ateliers de détente proposés par l'infirmière du campus aident à gérer le stress et la fatigue, et complètent efficacement votre pratique sportive pour un équilibre mental et physique optimal.
      </p>
            
      <ExternalLinkBlock
        title=""
        subtitle=""
        resources={resources_prevention}
      />

      <ContactCard
        image="/assets/isosteo.png"
        title="Clinique ostéopathique ISOsteo"
        subtitle="Consultations préférentielles pour les étudiant·e·s de Centrale Lyon"
        phone="04 72 89 06 07"
        email="contact@isosteo.fr"
        hours="Sur rendez-vous, à Écully"
        textButton="Voir le site"
        link="https://www.isosteo.fr/rdv-ecully"

        bgColor="#ffffff"
        textColor="#2f805fff"
      />

      <p className="texte">
        En combinant ces bonnes pratiques à une activité physique régulière, vous favorisez un meilleur équilibre physique, mental et social, tout en améliorant votre qualité de vie sur le campus.
      </p>

      <Separateur />

      <p className="texte"><em><b>Sources :</b> OMS, PAI Centrale Lyon 2024, Université de Lyon, Ville de Lyon, ISOSTEO, Assurance Maladie</em></p>
    

    
    
      </div>
  );
};

export default SportSante;
