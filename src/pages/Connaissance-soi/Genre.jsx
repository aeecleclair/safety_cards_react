import React from "react";
import "../../App.css";
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
  YouTubeVideo,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que l'identité de genre ?", target: "definition" },
  { label: "Comment accompagner un·e proche trans ?", target: "accompagner" },
  { label: "Démarches administratives & médicales", target: "demarches" },
  { label: "Ressources & entraide", target: "ressources" },
];

const chiffresIdentite = [
  {
    number: "1-2",
    title: "étudiant·es par promo",
    description: "commencent une transition à Centrale Lyon",
  },
  {
    number: "8,8%",
    title: "ont subi des discriminations",
    description: "liées au genre ou à l'orientation sexuelle sur le campus",
  },
];

const ressourcesNationales = [
  {
    link: "https://wikitrans.co/",
    imageSrc: "/assets/wiki_trans.png",
    label: "WikiTrans",
    description: "Base pratique : hormones, coming-out, démarches",
  },
  {
    link: "https://outrans.org",
    imageSrc: "/assets/outrans.png",
    label: "OUTrans",
    description: "Autosupport trans & formations inclusives",
  },
  {
    link: "https://www.le-refuge.org/",
    imageSrc: "/assets/refuge_logo.png",
    label: "Le Refuge",
    description: "Hébergement d'urgence pour jeunes LGBT+",
  },
];

const ressourcesLocales = [
  {
    link: "https://www.centrelgbtilyon.org/",
    imageSrc: "/assets/centre_lgbti_lyon.png",
    label: "Centre LGBTI+ Lyon",
    description: "Groupes de parole, permanences juridiques & santé",
  },
  {
    link: "https://chrysalide-asso.fr/",
    imageSrc: "/assets/chrysalide.png",
    label: "Chrysalide",
    description: "Groupes de discussion entre personnes trans à Lyon",
  },
  {
    link: "https://www.instagram.com/ost_lyon/",
    imageSrc: "/assets/ost.png",
    label: "OST Lyon",
    description: "Organisation de Solidarité Trans (autosupport)",
  },
];

const étapesAccompagnement = [
  {
    title: "Écouter et croire",
    subtitle: "Prendre au sérieux son ressenti sans chercher à interpréter ou minimiser.",
  },
  {
    title: "Utiliser le bon prénom & pronom",
    subtitle: "S'excuser puis corriger en cas d'erreur (misgendering).",
  },
  {
    title: "Respecter le rythme",
    subtitle: "Certaines démarches prennent du temps ; évitez les questions intrusives.",
  },
  {
    title: "Éduquer son entourage",
    subtitle: "Partager des ressources pour éviter que la personne ait à tout expliquer.",
  },
  {
    title: "Être un allié visible",
    subtitle: "Agir face aux propos transphobes, proposer son soutien lors des RDV.",
  },
];

const étapesDemarches = [
  "Prendre RDV avec un·e médecin ou endocrinologue sensibilisé·e au parcours trans (cf. cartes WikiTrans / Fransgenre).",
  "Obtenir un certificat médical de transition (optionnel depuis 2022 pour le changement d'état civil, mais utile pour la prise en charge hormonale).",
  "Déposer une demande de changement de prénom auprès de la mairie ou du tribunal judiciaire (procédure gratuite).",
  "Pour le changement de la mention de sexe, constituer un dossier au tribunal judiciaire : deux attestations (identité sociale + caractère durable), acte de naissance, etc.",
  "Mettre à jour les dossiers étudiants et cartes (Moodle, intranet, carte étudiante) – à Centrale : simple mail à la scolarité.",
];

const Genre = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Identité de genre</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Qu'est-ce que l'identité de genre&nbsp;?</h1>
        <TextImageRight
          imageSrc="/assets/identite_genre.svg"
          text={
            <>
              L'<b>identité de genre</b> est le sentiment intime, profond et durable d'être un homme, une femme, les deux ou ni l'un ni l'autre.
              Elle se distingue de :
              <BulletList
                items={[
                  "L'expression de genre : style vestimentaire, coiffure, voix…",
                  "L'orientation sexuelle : attirance romantique ou sexuelle",
                ]}
              />
            </>
          }
        />
        <Quote text="Le genre n'est pas ce qu'on voit, mais ce qu'on ressent." />
        <ChiffresGroup chiffres={chiffresIdentite} />
      </div>

      <Separateur />

      <div id="accompagner">
        <h1 className="titre">Comment accompagner un·e proche trans&nbsp;?</h1>
        <ListeNumerotee title="5 réflexes de base" items={étapesAccompagnement} />
        <YouTubeVideo url="https://www.youtube.com/watch?v=ma7B0tZ3q4I" />
      </div>

      <Separateur />

      <div id="demarches">
        <h1 className="titre">Démarches administratives & médicales</h1>
        <NumberedList items={étapesDemarches} />
        <TextImageRight
          imageSrc="/assets/planning_demarche.png"
          text="À Centrale Lyon, un simple mail à la scolarité suffit pour mettre à jour prénom & civilité sur Moodle, Scol, carte étudiante… sans attendre le changement à l'état-civil."
        />
      </div>

      <Separateur />

      <div id="ressources">
        <h1 className="titre">Ressources & entraide</h1>
        <ExternalLinkBlock title="Associations nationales" subtitle="Guides pratiques, groupes de parole, aide juridique" resources={ressourcesNationales} />
        <ExternalLinkBlock title="À Lyon & alentours" subtitle="Permanences, soutien psychologique, événements communautaires" resources={ressourcesLocales} />

        <ContactCard
          image="/assets/nightline_logo.png"
          title="Nightline Lyon"
          subtitle="Écoute nocturne anonyme pour les étudiant·es"
          phone="04 85 30 00 10"
          hours="Tous les soirs 21h-2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />

        <ContactCard
          image="/assets/refuge_logo.png"
          title="Le Refuge – Ligne d'écoute 24/7"
          subtitle="Soutien & hébergement d'urgence pour jeunes LGBT+"
          phone="06 31 59 69 50"
          hours="24h/24 – 7j/7"
          textButton="Faire un don"
          link="https://www.le-refuge.org/"
        />
      </div>

      <Separateur />

      <Quote text="Ça ne vous dérange pas d’apprendre un surnom, alors pourquoi refuser un pronom ?" />

      <p className="texte sources">
        <em>
          Sources : État de l'art Centrale Lyon 2025, WikiTrans, Chrysalide, OUTrans, Ministère de l'Intérieur – chiffres 2024.
        </em>
      </p>
    </div>
  );
};

export default Genre;