"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { image } from "framer-motion/client";
import { Video } from "lucide-react";

/** Navigation */
const navLinks = [
  { label: "Comprendre la précarité", target: "constat" },
  { label: "Je suis en difficulté", target: "difficulte" },
  { label: "Les aides en détail", target: "détails" },
  { label: "Je suis témoin/proche", target: "temoin" },
];

/** Chiffres clés (constat local fourni) */
const chiffresPrecarite = [
  { number: "20,5%", title: "des étudiants", description: "bénéficient d'une bourse à Centrale Lyon" },
  { number: "9,7%", title: "des centralien•ne•s", description: "rencontrent des difficultés financières pour subvenir à leurs besoins essentiels" },
  { number: "31,0%", title: "des étudiants étrangers", description: "sont touchés par la précarité (vs 8,4% Français)" },
];

/** Étapes d'accompagnement (parcours) */
const items_parcours = [
  {
    title: "Rencontrer l'assistante sociale",
    subtitle:
      "Présente chaque lundi à l'infirmerie : écoute, évaluation, ouverture des droits et accompagnement dans les démarches (aides d'urgence, exonérations, logement, santé).",
  },
  {
    title: "Activer les aides du Crous",
    subtitle:
      "Constituer ou mettre à jour le Dossier Social Étudiant (DSE) pour la bourse sur critères sociaux. En cas de coup dur, solliciter une aide spécifique (ponctuelle ou annuelle).",
  },
  {
    title: "Logement : réduire le coût",
    subtitle:
      "Demander l'aide au logement (APL/ALF/ALS) et utiliser la garantie Visale (caution gratuite) pour sécuriser la location.",
  },
  {
    title: "Accéder à l'épicerie solidaire",
    subtitle:
      "Depuis avril 2024, l'association Solidari'terre propose des produits à moindre coût.",
  },
  {
    title: "Prêt de matériel numérique",
    subtitle:
      "Se renseigner sur le prêt d'ordinateurs et d'équipements via l'association Eclair. Des solutions existent en cas de panne ou d'absence d'équipement.",
  },
  {
    title: "Emplois étudiants & aides internes",
    subtitle:
      "Consulter l'intranet pour les jobs étudiants et les dispositifs d'exonération partielle des frais de scolarité (selon critères sociaux).",
  },


];



const bourse_crous = [
  {
    link: "https://www.etudiant.gouv.fr/fr/bourses-sur-criteres-sociaux-1897",
    label: "CROUS - Bourses et aides financières",
    description:"Demandes, dates, aides spécifiques... ",
    imageSrc : "/assets/logo_crous.png"
  },
  {
    link: "https://campus.ec-lyon.fr/aides-financieres-4460.kjsp?RF=1460639982370",
    label: "Intranet Centrale Lyon",
    description:
      "En savoir plus sur les bourses du CROUS",
    imageSrc : "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
  },
]


const aides_logement = [
  {
    link: "https://www.caf.fr/allocataires/aides-et-demarches/droits-et-prestations/logement/les-aides-personnelles-au-logement",
    label: "CAF - APL",
    description:
      "Tout savoir sur les aides personnelles au logement",
    imageSrc : "/assets/caf.png"
  },
  {
    link: "https://www.visale.fr/",
    label: "Garantie Visale (Action Logement)",
    description:
      "Caution locative 100% gratuite pour étudiants et alternants.",
    imageSrc : "/assets/visale.png"
  },
]

const aides_centrale=[
  {
    link: "https://campus.ec-lyon.fr/aides-financieres-4460.kjsp?RF=1460639982370",
    label: "Aides économiques – Centrale Lyon",
    description:
      "Modalités et documents pour les commissions sociale et d'exonération",
    imageSrc : "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
  }]

  const epicerie = [
  {
    link: "https://www.instagram.com/solidariterreecl/",
    label: "Solidari'terre",
    description:
      "Compte instagram pour suivre les informations et les contacter.",
    imageSrc : "/assets/soli.jpg"
  }
  ]


  const eclair = [
  {
    link: "https://www.instagram.com/eclair_eclyon/",
    label: "Eclair",
    description:
      "Compte instagram pour suivre les informations et les contacter.",
    imageSrc : "/assets/eclair.jpg"
  }
  ]


  const jobs = [
  {
    link: "https://campus.ec-lyon.fr/offres-d-emplois-etudiants-4300.kjsp?RH=ACCUEIL",
    label: "Intranet Centrale Lyon",
    description:
      "Offres d'emplois pour les étudiants de l'école",
    imageSrc : "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
  },
  {
    link: "https://www.lyoncampus.com/etudier/job-etudiant",
    label: "Lyon Campus",
    description:
      "Jobs étudiants à Lyon ou ailleurs",
    imageSrc : "/assets/logo_lyon_campus.png"
  }
  ];


  const mobilite = [
  {
    link: "https://campus.ec-lyon.fr/financer-sa-mobilite-a-l-international-3941.kjsp?RH=1460639982370",
    label: "Intranet Centrale Lyon",
    description:"Financer sa mobilité à l'international",
    imageSrc : "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
  }
];

const PrecariteEconomique = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Précarité économique</h1>
      <Sommaire links={navLinks} />

      {/* 1. Comprendre la précarité */}
      <div id="constat">
        <h1 className="titre">Comprendre la précarité économique</h1>
      </div>

      <ImageTextPopup
        image="/assets/cartes/valet_carreau.png"
        title="La carte V♦"
        shortText="La précarité économique étudiante et les solutions existantes"
        longText=""
        textButton="⤢ Agrandir la carte"
        suit="carreau"
      />

      <p className="texte">La <b>précarité économique</b> désigne la situation d'instabilité financière persistante qui touche de nombreux étudiants, y compris à l'Ecole Centrale de Lyon. Elle se manifeste par des <b>difficultés à couvrir les besoins essentiels</b> (logement, alimentation, matériel, santé) et peut avoir un impact significatif sur le bien-être et la réussite scolaire. Plusieurs facteurs peuvent contribuer à cette précarité : ressources familiales limitées, coûts élevés de la vie étudiante, perte de revenus (job étudiant, bourse), dépenses imprévues, etc. Tu retrouveras sur cette page différents dispositifs d'aide internes et externes pour t'accompagner.</p>

      <h2 className="sous-titre-2">Chiffres clés </h2>
      <ChiffresGroup chiffres={chiffresPrecarite} />


      <Separateur />

      <div id="difficulte">
        <h1 className="titre">Je suis en difficulté</h1>
      </div>
      <p className="texte">
            Tu n'es pas seul·e. Dès les premiers signes (retards de loyer, alimentation insuffisante, matériel défaillant, etc.), <b>parles-en rapidement</b> : le service social t'aidera à activer les bons leviers (aides centraliennes et du Crous, logement, santé, exonérations, jobs étudiants).
        </p>
      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
        title="Service social"
        subtitle="Accompagnement pour les étudiants en difficulté financière"
        textButton="Voir les informations"
        phone="Voir les informations"
        email="Voir les informations"
        link="/service-social"
        bgColor="#ffffff"    
        textColor="#b22133" 
      />

      <p className="texte">Tu peux aussi contacter le service social du CROUS de Lyon (pour des demandes autres que l'attribution des logements en résidences Crous, la gestion des dossiers de bourse et la restauration).
      </p>
      <ContactCard
        image="/assets/logo_crous.png"
        title="Service social du CROUS de Lyon"
        subtitle="Soutien social et aides spécifiques"
        textButton="Prendre RDV"
        link ="https://www.crous-lyon.fr/contacts/social-et-accompagnement/"
        bgColor="#ffffff"
        textColor="#e30613"
      />

      <h2 className="sous-titre-2">Parcours d'aide recommandé</h2>
      <ListeNumerotee
        title="Étapes clés"
        subtitle="Qui contacter et quoi activer en priorité"
        items={items_parcours}
      />

      <Separateur />

       <div id="détails">
        <h1 className="titre">Les aides en détail</h1>
      </div>

      <h2 className="sous-titre-2">Bourses du CROUS sur critères sociaux</h2>

      <p className="texte"> Pour demander une bourse, il faut constituer un <b>Dossier Social Étudiant (DSE)</b> chaque année. Le montant de la bourse dépend de plusieurs critères (ressources familiales, distance entre le domicile familial et l'établissement, nombre de frères et sœurs à charge, etc.) et est réparti en 7 échelons. L'aide peut aller d'une <b>éxonération des frais d'inscription dans les établissements publics et du paiement de la cotisation de sécurité sociale étudiante à un plafond fixé annuellement.</b> Vous pouvez potentiellement en bénéficier que vous soyez de nationalité française, européen·ne ou autre.</p>
      <ExternalLinkBlock resources={bourse_crous} />

      <h2 className="sous-titre-2">Aide d'urgence</h2>
      <p className="texte">En cas de coup dur (perte de revenus, dépenses imprévues, etc.), tu peux solliciter une aide d'urgence auprès du service social du CROUS. Elle est accessible pour les étudiants boursiers et non boursiers, de nationalité française ou étrangère.</p>
      
      <ContactCard
        image="/assets/etudiant_gouv.jpg"
        title="Aide d'urgence"
        subtitle="Pour s'informer sur l'aide et les démarches à effectuer"
        phone="09 72 59 65 65"
        textButton="Voir le site"
        link ="https://www.etudiant.gouv.fr/fr/solliciter-une-aide-d-urgence-361"
        bgColor="#ffffff"
        textColor="#000000"
      />

      <h2 className="sous-titre-2">Aides au logement</h2>
      <p className="texte">En tant qu'étudiant de l'Ecole Centrale de Lyon, vous pouvez avoir le droit à des aides au logement (généralement l'APL).</p>

      <YouTubeVideo url="https://www.youtube.com/watch?v=zWKHqGwHw1c" />

      <p className="texte">Tu peux aussi faire une demande de garantie Visale. Action Logement se porte alors garant pour couvrir les loyers impayés et les dégradations locatives.</p>

      <ExternalLinkBlock resources={aides_logement} />

      <h2 className="sous-titre-2">Aides internes à Centrale</h2>

      <BulletList
        items={[
          "Comission d'exonération :  Elle permet d'exonérer des étudiants sur critères sociaux (hors boursiers et étudiants en double diplôme qui le sont déjà). Il faut composer un dossier et l'envoyer avant fin janvier généralement. Plus d'informations via le lien ci-dessous.",
          "Commission sociale : Elle a pour but d'apporter un soutien financier aux étudiants faisant face à des difficultés au quotidien (paiement du loyer, nourriture...). Il faut aussi composer un dossier et l'envoyer avant fin janvier généralement. Plus d'informations via le lien ci-dessous.",
          "Fonds de dotations : il est possible d'obtenir un soutien financier. Vous pouvez contacter le service social pour plus d'informations."
        ]}
      />

      <ExternalLinkBlock resources={aides_centrale} />


      <h2 className="sous-titre-2">Épicerie solidaire</h2>

      <p className="texte">Depuis avril 2024, l'association Solidari'terre propose une épicerie solidaire aux étudiants de l'Ecole Centrale de Lyon. Elle permet d'accéder à des produits alimentaires et d'hygiène à moindre coût (6 produits maximum, à 25% du prix du marché). Pour y accéder, tu dois être boursi·er·ère, avoir un repas à 1€ au CROUS ou être autorisé·e par l'assistance sociale.</p>
      <p className="texte">L'épicerie est ouverte tous les <b>lundis et mercredis de 12h25 à 13h45, en bas du bâtiment X</b>, face à Adoma.</p>

      <ExternalLinkBlock resources={epicerie} />

      <h2 className="sous-titre-2">Prêt de matériel numérique</h2>

      <p className="texte">Si tu n'as pas d'ordinateur ou que le tien est en panne, l'association Eclair propose un service de prêt de matériel informatique (ordinateurs portables, matériel, etc.) aux étudiant·e·s de l'Ecole Centrale de Lyon. Le prêt est gratuit et peut durer plusieurs semaines selon les besoins. Pour en bénéficier, tu peux les contacter ou passer dans les locaux associatifs le midi.</p>

        <ExternalLinkBlock resources={eclair} />


      <h2 className="sous-titre-2">Emplois étudiants</h2>

      <p className="texte">L'intranet de l'école recense régulièrement des offres d'emplois étudiants (jobs à temps partiel, missions ponctuelles, etc.). Tu peux aussi trouver des jobs via les services de la métropole ou de l'état.</p>

        <ExternalLinkBlock resources={jobs} />


      <h2 className="sous-titre-2">Aides pour une mobilité internationale</h2>

      <p className="texte">Si tu prévois de partir à l'étranger dans le cadre d'un échange universitaire ou d'un stage, plusieurs aides existent pour t'aider à financer ton projet.</p>
      <BulletList
        items={[
          "Bourse Erasmus+ : La participation au programme d'échange Erasmus+ permet le versement d'une aide mensuelle de participation aux frais de séjour et de voyage (montant variable selon le pays de destination).",
          "Bourse Région mobilité internationale étudiants : Cette aide octroyée par la Région Auvergne-Rhône-Alpes s'élève à 95€ par semaine sur un nombre de semaines défini selon le budget accordé en début d'année. Plus d'informations sur l'intranet.",
          "Et d'autres dispositifs pour boursiers ou non, à découvrir sur l'Intranet.",
        ]}
      />

      <ExternalLinkBlock resources={mobilite} />

      <Separateur />

      <div id="temoin">
        <h1 className="titre">Je suis témoin / proche</h1>
      </div>

      <p className="texte">
        Tu repères un·e camarade en difficulté (absences, fatigue, repas sautés,
        problèmes de loyer, matériel cassé) ? <b>Ose ouvrir la discussion</b> sans
        jugement et propose une orientation vers l'assistante sociale ou les
        dispositifs d'aide. Tu peux aussi l'accompagner à un rendez-vous ou vers
        l'épicerie solidaire.
      </p>

      <BulletList
        items={[
          "Écouter sans minimiser, ni culpabiliser.",
          "Proposer des solutions concrètes (RDV service social, DSE, APL, Visale).",
          "Signaler en toute bienveillance à un référent (si danger/impayés critiques).",
          "Partager les ressources officielles et internes.",
        ]}
      />

      <Separateur />

  

      <p className="texte">
        <em>
          <b>Sources :</b> Aides économiques Centrale Lyon, CROUS Lyon, Service-Public.fr, CAF, Action Logement, Associations centraliennes, Lyon Campus.
        </em>
      </p>
    </div>
  );
};

export default PrecariteEconomique;
