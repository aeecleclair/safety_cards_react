import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  TextImageRight,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

/** Navigation */
const navLinks = [
  { label: "Comprendre la précarité", target: "constat" },
  { label: "Je suis en difficulté", target: "difficulte" },
  { label: "Je suis témoin/proche", target: "temoin" },
  { label: "Agir & ressources", target: "ressources" },
];

/** Chiffres clés (constat local fourni) */
const chiffresPrecarite = [
  { number: "20,5%", title: "Boursiers", description: "des étudiants bénéficient d’une bourse" },
  { number: "20,4%", title: "Emprunt étudiant", description: "ont eu recours à un prêt pour financer leurs études" },
  { number: "9,7%", title: "Difficultés essentielles", description: "alimentation, loyer, électricité (18,5% boursiers ; 7,4% non-boursiers)" },
  { number: "31,0%", title: "Étudiants étrangers", description: "touchés par la précarité (vs 8,4% Français)" },
  { number: "3,2%", title: "Matériel insuffisant", description: "pour suivre correctement les cours" },
  { number: "61,1%", title: "Manque d’info", description: "sur les prêts de matériel disponibles" },
  { number: "42,8%", title: "Activité rémunérée", description: "ont travaillé depuis le début de l’année universitaire" },
];

/** Étapes d'accompagnement (parcours) */
const items_parcours = [
  {
    title: "Rencontrer l’assistante sociale",
    subtitle:
      "Présente chaque lundi à l’infirmerie : écoute, évaluation, ouverture des droits et accompagnement dans les démarches (aides d’urgence, exonérations, logement, santé).",
  },
  {
    title: "Activer les aides du Crous",
    subtitle:
      "Constituer ou mettre à jour le Dossier Social Étudiant (DSE) pour la bourse sur critères sociaux. En cas de coup dur, solliciter une aide spécifique (ponctuelle ou annuelle).",
  },
  {
    title: "Logement : réduire le coût",
    subtitle:
      "Demander l’aide au logement (APL/ALF/ALS) et utiliser la garantie Visale (caution gratuite) pour sécuriser la location.",
  },
  {
    title: "Accéder à l’épicerie solidaire",
    subtitle:
      "Depuis avril 2024 : produits à moindre coût, orientation sociale, ateliers (budget, alimentation).",
  },
  {
    title: "Prêt de matériel & précarité numérique",
    subtitle:
      "Se renseigner sur le prêt d’ordinateurs et d’équipements via l’établissement. Des solutions existent en cas de panne ou d’absence d’équipement.",
  },
  {
    title: "Emplois étudiants & aides internes",
    subtitle:
      "Consulter l’intranet pour les jobs étudiants et les dispositifs d’exonération partielle des frais de scolarité (selon critères sociaux).",
  },
];

/** Liens – informations officielles et droits */
const ressourcesInfos = [
  {
    link: "https://www.etudiant.gouv.fr/fr/bourses-sur-criteres-sociaux-1897",
    label: "Bourses sur critères sociaux (Crous)",
    description:
      "Dossier Social Étudiant (DSE), échelons, montants, calendrier.",
  },
  {
    link: "https://www.etudiant.gouv.fr/fr/solliciter-une-aide-d-urgence-361",
    label: "Aides spécifiques d’urgence",
    description:
      "Aide ponctuelle (ASAP) ou annuelle (ASA) via le service social du Crous.",
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F12214",
    label: "Fiche Service-Public – Bourse étudiante",
    description:
      "Conditions, barèmes, démarches officielles.",
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F12006",
    label: "APL / Aides au logement",
    description:
      "Aide personnalisée au logement (APL) : conditions, demande et versements.",
  },
  {
    link: "https://www.visale.fr/",
    label: "Garantie Visale (Action Logement)",
    description:
      "Caution locative 100% gratuite pour étudiants et alternants.",
  },
  {
    link: "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage.htm",
    label: "Réseau AGORAé (FAGE)",
    description:
      "Épiceries sociales & solidaires étudiantes et lieux de vie.",
  },
];

/** Liens – ressources internes établissement */
const ressourcesCampus = [
  {
    link: "https://campus.ec-lyon.fr/aides-financieres-4460.kjsp?RF=1460639982370",
    label: "Aides économiques – ECL",
    description:
      "Bourses (CROUS/AMOPA), mobilité, commissions sociale/exonération, logement, emplois étudiants.",
  },
];

/** Numéros / contacts utiles (cartes chiffres) */
const numerosUtiles = [
  {
    number: "Assistant·e sociale",
    title: "Campus Ecully",
    description: "Présence le lundi à l’infirmerie – prends RDV / passe à l’infirmerie.",
  },
  {
    number: "Crous",
    title: "Service social",
    description: "Accompagnement pour aides d’urgence et DSE (via etudiant.gouv.fr).",
  },
  {
    number: "CAF",
    title: "Aides logement",
    description: "Demande d’APL/ALF/ALS et simulation en ligne.",
  },
];

/** Ressources “agir” (prévention & solutions concrètes) */
const ressourcesAgir = [
  {
    link: "https://www.lescrous.fr/dse/",
    label: "Constituer son DSE (Crous)",
    description: "Étapes et calendrier pour les bourses & logement.",
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F34073",
    label: "Aide spécifique ponctuelle",
    description: "Demande d’aide financière en cas de coup dur.",
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F33453",
    label: "Garantie Visale – fiche officielle",
    description: "Infos légales : fonctionnement, conditions, remboursement.",
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/R1332",
    label: "Demande d’aide au logement (en ligne)",
    description: "Démarche en ligne APL/ALF/ALS (FranceConnect).",
  },
];

/** Conseils pratiques pour limiter l’impact de la précarité */
const conseilsPratiques = [
  "Fais rapidement ton DSE (bourse/logement) même si tu doutes de ton éligibilité.",
  "Si tu es en difficulté, prends contact tôt avec l’assistante sociale (avant les impayés).",
  "Demande l’APL dès l’emménagement (droits ouverts à partir du mois suivant la demande).",
  "Utilise la garantie Visale pour rassurer ton bailleur et éviter une caution familiale.",
  "Repère les lieux de solidarité : épicerie solidaire, AGORAé, distributions alimentaires.",
  "Renseigne-toi sur le prêt d’ordinateurs/matériel et les espaces de travail connectés.",
  "Surveille ta charge de travail salariée : au-delà d’un mi-temps, le risque d’échec augmente.",
  "Parle-en : ne reste pas isolé·e. Des aides existent, même si tu n’es pas boursier·ère.",
];

const PrecariteEconomique = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Précarité économique</h1>
      <Navbar links={navLinks} />

      {/* 1. Comprendre la précarité */}
      <div id="constat">
        <h1 className="titre">Comprendre la précarité</h1>
      </div>

      <ImageTextPopup
        image="./assets/cartes/precarite.png"
        title="Précarité étudiante : de quoi parle-t-on ?"
        shortText="Difficultés financières qui affectent le logement, l’alimentation, la santé, l’équipement et la réussite."
        longText="La précarité économique étudiante recouvre les difficultés à couvrir les besoins essentiels (logement, alimentation, énergie), à disposer du matériel nécessaire aux études (précarité numérique), et à concilier études et emploi. Elle touche plus fortement certains publics (étudiant·es boursier·ères, internationaux·ales) et impacte la réussite académique, la santé mentale et le sentiment d’appartenance."
        textButton="⤢ Lire la synthèse"
        suit="carreau"
      />

      <h2 className="sous-titre-2">Chiffres clés (campus & public étudiant)</h2>
      <ChiffresGroup chiffres={chiffresPrecarite} />

      <Quote
        text="La précarité n’est pas une fatalité : des droits existent, et tu peux être accompagné·e pour y accéder."
        author="Service social étudiant & réseaux de solidarité"
      />

      <Separateur />

      {/* 2. Je suis en difficulté */}
      <div id="difficulte">
        <h1 className="titre">Je suis en difficulté</h1>
      </div>

      <TextImageRight
        imageSrc="/assets/entraide.jpg"
        text={
          <>
            Tu n’es pas seul·e. Dès les premiers signes (retards de loyer,
            alimentation insuffisante, matériel défaillant, surmenage lié au job),
            <b>parle-en rapidement</b> : l’assistante sociale t’aidera à activer
            les bons leviers (aides Crous, logement, santé, exonérations, jobs).
          </>
        }
      />

      <h2 className="sous-titre-2">Parcours d’aide recommandé</h2>
      <ListeNumerotee
        title="Étapes clefs"
        subtitle="Qui contacter et quoi activer en priorité"
        items={items_parcours}
      />

      <h2 className="sous-titre-2">Conseils pratiques</h2>
      <BulletList items={conseilsPratiques} />

      <ContactCard
        image="/assets/campus.png"
        title="Assistante sociale du campus"
        subtitle="Permanence le lundi à l’infirmerie – accompagnement confidentiel"
        textButton="Prendre contact"
        link="https://campus.ec-lyon.fr/aides-financieres-4460.kjsp?RF=1460639982370"
        bgColor="#ffffff"
        textColor="#0a5"
      />

      <Separateur />

      {/* 3. Je suis témoin / proche */}
      <div id="temoin">
        <h1 className="titre">Je suis témoin / proche</h1>
      </div>

      <p className="texte">
        Tu repères un·e camarade en difficulté (absences, fatigue, repas sautés,
        problèmes de loyer, matériel cassé) ? <b>Ose ouvrir la discussion</b> sans
        jugement et propose une orientation vers l’assistante sociale ou les
        dispositifs d’aide. Tu peux aussi l’accompagner à un rendez-vous ou vers
        l’épicerie solidaire.
      </p>

      <BulletList
        items={[
          "Écouter sans minimiser, ni culpabiliser.",
          "Proposer des solutions concrètes (RDV service social, DSE, APL, Visale).",
          "Signaler en toute bienveillance à un référent (si danger/impayés critiques).",
          "Partager les ressources officielles et internes (liens ci-dessous).",
        ]}
      />

      <Separateur />

      {/* 4. Agir & ressources */}
      <div id="ressources">
        <h1 className="titre">Agir & ressources</h1>
      </div>

      <h2 className="sous-titre-2">Ressources de l’établissement</h2>
      <ExternalLinkBlock resources={ressourcesCampus} />

      <h2 className="sous-titre-2">Droits & aides officielles</h2>
      <ExternalLinkBlock
        title="Informations officielles"
        subtitle="Bourses, aides d'urgence, logement et caution"
        resources={ressourcesInfos}
      />

      <h2 className="sous-titre-2">Numéros & contacts utiles</h2>
      <ChiffresGroup chiffres={numerosUtiles} />

      <Quote
        text="L’épicerie solidaire du campus (ouverte depuis avril 2024) te permet d’accéder à des produits à moindre coût et d’être orienté·e vers les aides adaptées."
        author="Dispositif interne – épicerie solidaire"
      />

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources & liens utiles :</b> Aides économiques ECL (commissions sociale & d’exonération, emplois étudiants, bourses AMOPA & mobilité) – Crous (DSE, aides spécifiques) – Service-Public.fr (bourses, APL, Visale) – FAGE/AGORAé (épiceries solidaires).
        </em>
      </p>
    </div>
  );
};

export default PrecariteEconomique;
