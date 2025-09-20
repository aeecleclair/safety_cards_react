import React from "react";
import "../../App.css";

import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, TextImageRight } from "../../components/Common";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que la sédentarité ?", target: "sedentarite" },
  { label: "Le constat & réponses", target: "constat" },
  { label: "Je veux bouger plus", target: "etudiant" }
];

const conseilsBouger = [
  { 
    title: "Réduire le temps assis", 
    subtitle: "Fais une pause toutes les 30 à 60 minutes : lève-toi, marche, fais quelques étirements." 
  },
  { 
    title: "Intégrer du mouvement au quotidien", 
    subtitle: "Prends les escaliers, marche ou pédale pour les petits trajets, propose une sortie active entre amis." 
  },
  { 
    title: "Bouger même en travaillant", 
    subtitle: "Étudie debout de temps en temps, utilise un bureau réglable si possible, ou fais quelques exercices rapides entre deux chapitres." 
  },
  { 
    title: "Fixer des objectifs progressifs", 
    subtitle: "Commence par 10 minutes d’activité par jour et vise progressivement 150 minutes par semaine, comme recommandé par l’OMS." 
  },
  { 
    title: "Limiter le temps écran loisir", 
    subtitle: "Réduis le temps passé assis devant les écrans, en particulier avant le coucher." 
  }
];



const ressourcesInfos = [
  {
    link: "https://www.mangerbouger.fr/",
    imageSrc: "/assets/MangerBouger.png",
    label: "Manger Bouger",
    description: "Conseils pratiques pour améliorer ton hygiène de vie au quotidien"
  },
  {
    link: "https://www.anses.fr/fr/content/inactivite-physique-et-sedentarite-chez-les-jeunes-lanses-alerte-les-pouvoirs-publics",
    imageSrc:"/assets/ANSES.png",
    label: "ANSES",
    description: "Rapports et recommandations sur l’activité physique des jeunes"
  }
];

const chiffresSedentarite = [
  { number: "7h+", title: "Temps moyen assis", description: "Chez les étudiant·e·s et jeunes adultes en France, chaque jour" },
  { number: "20%", title: "Adultes", description: "Passent plus de 7h/j assis selon Santé publique France" },
  { number: "30%", title: "Jeunes", description: "Ne respectent pas les recommandations minimales d’activité physique" },
  { number: "150 min", title: "Recommandations OMS", description: "D’activité physique modérée par semaine pour rester en bonne santé" }
];

const Sedentarite = () => {
  return (
    <div className="page">

      <h1 className="titre-page">Sédentarité</h1>

      <Navbar links={navLinks} />

      <div id="sedentarite">
        <h1 className="titre">Qu'est-ce que la sédentarité ?</h1>
      </div>

        <ImageTextPopup
        image="./assets/cartes/8_pique.png"
        title="La carte 8♠"
        shortText="TEXTE A FAIRE"
        longText="TEXTE A FAIRE"
        textButton="⤢ Agrandir la carte"
        suit="pique"
      />

      <p className="texte">
        La <b>sédentarité</b> correspond au temps passé assis ou allongé en dehors des heures de sommeil. 
        Elle se distingue de l’<b>inactivité physique</b> : on peut pratiquer du sport et rester sédentaire 
        si l’on passe de longues heures assis à son bureau. 
        Elle est définie par une dépense énergétique faible (par exemple : travail assis, temps écran, transport passif).
      </p>

      <h2 className="sous-titre-2">Quels sont les risques ?</h2>
      <BulletList 
        items={[
          "Maladies cardiovasculaires (hypertension, infarctus), diabète de type 2",
          "Cancers (côlon, sein…) associés à de longues périodes assises",
          "Surpoids et obésité, indépendamment de l’alimentation",
          "Troubles musculo-squelettiques (maux de dos, douleurs articulaires)",
          "Impact sur la santé mentale : anxiété, humeur dépressive, fatigue",
          "Altérations cardiaques détectées chez les jeunes adultes très sédentaires"
        ]} 
      />

      <p className="texte">Quelques chiffres clés :</p>
      <ChiffresGroup chiffres={chiffresSedentarite} />

      <Separateur />

      <div id="constat">
        <h1 className="titre">Sédentarité : le constat & les réponses</h1>
      </div>

      <h2 className="sous-titre-2">Le constat</h2>
      <p className="texte">
        Les étudiants passent une grande part de leur temps <b>sur les écrans</b>, ce qui peut les mener 
        à s’isoler et à rester enfermés sans activité physique pendant des heures, voire des jours.
      </p>

      <h2 className="sous-titre-2">Les réponses internes</h2>
      <BulletList 
        items={[
          "Promotion sport-santé et développement d’infrastructures sportives accessibles",
          "Subvention augmentée en 2024 pour soutenir les étudiants boursiers et favoriser leur participation aux tournois sportifs",
          "Installation de terrains de padel sur le campus pour diversifier l’offre",
          "Ateliers de détente animés par l’infirmière pour favoriser relaxation et gestion du stress",
          "Amélioration des lieux de vie étudiante : plus de mobilier extérieur, foyers et locaux associatifs équipés"
        ]} 
      />

      <h2 className="sous-titre-2">Les solutions externes</h2>
      <BulletList 
        items={[
          "Culturel Lyon : un compte Instagram qui informe sur les événements et activités du week-end",
          "Large offre sportive et culturelle dans la ville de Lyon accessible aux étudiants"
        ]} 
      />

      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Sites pour en savoir plus et trouver des conseils pratiques"
        resources={ressourcesInfos}
      />

      <Separateur />

      <div id="etudiant">
        <h1 className="titre">Je veux bouger plus</h1>
      </div>

      <h2 className="sous-titre-2">Comment intégrer l’activité dans ton quotidien ?</h2>

      <ListeNumerotee 
        title="Astuces simples pour réduire la sédentarité" 
        subtitle="Inspirées des recommandations de l’OMS et de l’ANSES" 
        items={conseilsBouger}
      />

      <ImageTextPopup
        image="/assets/PauseActive.png"
        title="Pause active"
        shortText="Des idées rapides pour casser la sédentarité"
        longText="Bouge toutes les 30 à 60 minutes : étirements, marche rapide, escaliers. Ces micro-pauses réduisent les effets nocifs du temps assis."
        textButton="⤢ Voir les astuces"
      />

      <p className="texte">  
        L’OMS recommande 150 à 300 minutes par semaine d’activité modérée (marche rapide, vélo tranquille, danse) ou 75 à 150 minutes d’activité intense (course, sport collectif). 
        Pour les jeunes (11-17 ans), il est recommandé au moins 60 minutes d’activité physique quotidienne, et de limiter le temps assis prolongé.
      </p>

      <Separateur />

      <p className="texte">
        <em><b>Sources :</b> OMS (2020), Santé publique France (2024), ANSES (2022), Observatoire Prévention (Montréal), 
        Université Laval, Le Monde (2024).</em>
      </p>
    </div>
  );
};

export default Sedentarite;
