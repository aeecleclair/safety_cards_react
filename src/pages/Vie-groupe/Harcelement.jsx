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
  TextImageRight,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Comprendre le harcèlement", target: "definition" },
  { label: "Je suis victime ou témoin", target: "victime" },
  { label: "Le harcèlement de rue", target: "rue" },
  { label: "Ressources & outils de prévention", target: "ressources" },
];

const chiffresHarcelement = [
  {
    number: "3,7%",
    title: "des étudiant·es",
    description: "ont déclaré avoir été victimes de harcèlement dans une enquête locale (Écully, 2023).",
  },
  {
    number: "8/10",
    title: "Femmes",
    description: "craignent de sortir seules le soir à cause du harcèlement de rue.",
  },
  {
    number: "50%",
    title: "Étudiant·es",
    description: "connaissent l’existence des dispositifs de signalement dans leur établissement.",
  },
];

const lois = [
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F32079",
    label: "Code pénal – Harcèlement moral et sexuel",
    description:
      "Articles 222-33 et suivants : le harcèlement sexuel est puni jusqu’à 3 ans d’emprisonnement et 45 000 € d’amende.",
    imageSrc: "/assets/rep-logo.png",
  },
  {
    link: "https://www.vie-publique.fr/loi/285465-loi-du-2-mars-2022-creant-le-delit-de-harcelement-scolaire",
    label: "Loi du 2 mars 2022",
    description:
      "Création du délit de harcèlement scolaire et universitaire, jusqu’à 10 ans de prison en cas de suicide de la victime.",
    imageSrc: "/assets/rep-logo.png",
  },
];

const dispositifsExternes = [
  {
    link: "https://www.etudiant.gouv.fr/fr/cnae",
    label: "CNAÉ",
    description:
      "Écoute et accompagnement des étudiant·es victimes de violences, discriminations ou harcèlement. Gratuit au 0 800 737 800.",
    imageSrc: "/assets/cnae.png",
  },
  {
    link: "https://3018.fr/",
    label: "3018",
    description:
      "Numéro et application pour lutter contre le harcèlement scolaire et le cyberharcèlement. Ouvert 7j/7, 9h-23h.",
    imageSrc: "/assets/3018.png",
  },

];

const cinqD = [

  { title: "Distraire", subtitle: "Fais semblant de connaître la victime ou la personne qui agresse, demande lui l’heure, pose lui une question, propose lui d’aller ailleurs ou s’asseoir – toute interaction qui serait en mesure de stopper la situation de violence ou de harcèlement" },
  { title: "Déléguer", subtitle: "Tu peux demander de l’aide à une figure d’autorité (Vigiles, BDE, Peer Care, Bar en soirée, personnels, professeurs ailleurs)" },
  { title: "Documenter", subtitle: "Tu peux tenter de renseigner un maximum d’indices en cas de témoignage, filmer la scène, en rassemblant le plus d’éléments possibles (date, lieu, heure, etc.), faire des enregistrements audio, des photos, etc. et les donner à la victime par la suite. Ce sera à elle de choisir quoi faire de ces preuves" },
  { title: "Diriger", subtitle: "Tu peux donner un ordre à la personne qui agresse pour qu’elle stoppe les violences, et utiliser des mots directifs, clairs, nets et précis. Par exemple “Arrête d’insister et éloigne-toi”" },
  { title: "Dialoguer", subtitle: "Même si tu n’arrive pas à réagir pendant la situation, il est possible de le faire après, en discutant avec la victime, en la rassurant, en lui proposant de l’aide, tout en respectant son espace personnel et sa temporalité." },

];

const applis = [
    {
    link: "https://www.app-elles.fr/",
    label: "App-Elles",
    description:
      "Alerte tes proches et enregistre les preuves",
    imageSrc: "/assets/app_elles.svg",
  },
  {
    link: "https://umay.fr/",
    label: "UMAY",
    description:
      "Déplace-toi et voyage en toute sécurité",
    imageSrc: "/assets/umay.png",
  },
];

const angela = [
  {
    link: "https://pro.lyon-france.com/actualites-onlylyon-tourisme-et-congres/accueil/prevention-securite-demandez-angela",
    label: "Demandez Angela",
    description:
      "Dispositif permettant aux victimes de harcèlement de trouver refuge dans des lieux partenaires (bars, commerces, etc.). ",
    imageSrc: "/assets/angela.png",
  },
];

const ressourcesPedagogiques = [
  {
    link: "https://commentonsaime.fr/",
    label: "CommentOnSAime.fr",
    description:
      "Site de prévention avec conseils sur les relations, les études, le couple et un tchat anonyme gratuit.",
    imageSrc: "/assets/commentonsaime.png",
  },
  {
    link: "https://consentis.info/",
    label: "Consentis",
    description:
      "Association qui propose des outils pédagogiques et des formations pour prévenir les violences sexistes et sexuelles.",
    imageSrc: "/assets/consentis.png",
  },
];

const Harcelement = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Harcèlement</h1>
      <Navbar links={navLinks} />

      {/* 1. Comprendre le harcèlement */}
      <div id="definition">
        <h1 className="titre">Comprendre le harcèlement</h1>
      </div>

      <ImageTextPopup
        image="./assets/cartes/roi_carreau.png"
        title="La carte R♦"
        shortText="La notion de harcèlement"
        longText=""
        textButton="⤢ Agrandir la carte"
        suit="carreau"
      />

      <h2 className="sous-titre-2">Chiffres clés</h2>
      <ChiffresGroup chiffres={chiffresHarcelement} />

      <h2 className="sous-titre-2">Le cadre législatif</h2>
      <p className="texte">
        Le harcèlement est puni par la loi française, qu’il soit moral, sexuel ou scolaire.
        Depuis 2022, un délit spécifique de harcèlement scolaire et universitaire existe, avec des peines allant jusqu’à 10 ans en cas de conséquences graves.
      </p>
      <ExternalLinkBlock resources={lois} />

      <Separateur />

      {/* 2. Je suis victime ou témoin */}
      <div id="victime">
        <h1 className="titre">Je suis victime ou témoin</h1>
      </div>

      <p className="texte">
        Si tu es confronté·e à une situation de harcèlement, tu n’es pas seul·e. Tu peux en parler à une personne de confiance, contacter la cellule d’écoute de Centrale, ou utiliser les dispositifs externes ci-dessous. En cas de danger immédiat, appelle le <b>17</b> ou le <b>112</b>.
      </p>

      <ContactCard
        image="assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
        title="Cellule d'écoute"
        subtitle="Dispositif d'écoute et d'accompagnement de Centrale Lyon"
        email="Voir les informations"
        textButton="Voir les informations"
        link="/cellule-ecoute"
        bgColor="#ffffff"  
        textColor="#b22133"
      />

      <ContactCard
          image="/assets/etudiant_gouv.jpg"
          title="CNAÉ"
          subtitle="Ecoute, accompagnement et signalement pour les étudiants"
          hours="Lundi à vendredi : 10h à 21h, Samedi : 10h à 14h"
          email="cnae@enseignementsup.gouv.fr"
          phone="0800 737 800"
          textButton="Voir le site"
          link="https://www.etudiant.gouv.fr/fr/cnae"
          bgColor="#ffffff"
          textColor="#000000"
        />

      <h2 className="sous-titre-2">Réagir en tant que témoin</h2>
      <ListeNumerotee
        items={cinqD}
        title="La méthode des 5D"
        subtitle="Développée par l’ONG Right to Be, la méthode des 5D a été pensée pour aider les témoins à réagir au harcèlement sexiste et sexuel dans l’espace public, et elle peut servir dans plein de situations !" 
      />

      <Quote text="Tout geste compte : même un petit soutien peut faire une grande différence pour une victime." />

      <Separateur />

      <div id="rue">
      <h1 className="titre">Le harcèlement de rue</h1>
      </div>

      <p className="texte">
        Le harcèlement de rue est une forme de violence sexiste qui se manifeste dans l’espace public. Il peut prendre différentes formes : remarques déplacées, sifflements, gestes obscènes, etc. Ce phénomène touche particulièrement les femmes et les personnes LGBTQIA+.
      </p>

      <h2 className="sous-titre-2">Les applications utiles</h2>

      <p className="texte">Il existe des applications pour t’aider à te sentir plus en sécurité dans l’espace public :</p>

      <BulletList items={[
        "App-Elles : permet d'alerter tes proches, d'enregistrer des preuves, de contacter les secours et d'accéder rapidement aux ressources d'aides disponibles près de toi.",
        "UMAY : choisis des contacts de confiance qui pourront suivre ton trajet en temps réel et être alertés si tu ne te sens pas en sécurité, trouve une safe place à proximité.",
      ]} />

      <ExternalLinkBlock
        resources={applis}
      />

      <h2 className="sous-titre-2">Le dispositif Angela</h2>

      <TextImageRight
        imageSrc="/assets/angela.png"
        text="Dispositif permettant aux victimes de harcèlement ou d'insécurité dans l'espace public de trouver refuge dans des lieux partenaires (bars, commerces, etc.). Si tu te sens en danger, repère les stickers « Demandez Angela » à l'entrée des commerces et demande « Angela » au personnel du lieu, qui te mettra en sécurité. Il pourra appeler un proche, un taxi ou les forces de l'ordre selon la situation."
      />

      <ExternalLinkBlock
        resources={angela}
      />



      <Separateur />


      <div id="ressources">
        <h1 className="titre">Ressources & outils de prévention</h1>
      </div>

      <ExternalLinkBlock
        title="Dispositifs externes"
        subtitle="Applications et services pour t’aider ou aider un·e ami·e"
        resources={dispositifsExternes}
      />

      <ExternalLinkBlock
        title="Ressources pédagogiques"
        subtitle="Pour mieux comprendre et prévenir le harcèlement"
        resources={ressourcesPedagogiques}
      />

      <YouTubeVideo url="https://www.youtube.com/watch?v=Nclf7ELuQGM" />
      <YouTubeVideo url="https://www.youtube.com/watch?v=q9w-fJqSZpU" />

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> Ministère de l’Éducation nationale, Service Public, Vie Publique, Observatoire VSS, CNAÉ, 3018, App-Elles, UMAY, Demandez Angela, CommentOnSAime, Consentis.
        </em>
      </p>
    </div>
  );
};

export default Harcelement;
