import React from "react";
import "../../App.css";
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";

const navLinks = [
  { label: "Comprendre", target: "definition" },
  { label: "Je suis concerné·e", target: "personne-concernee" },
  { label: "J’accompagne", target: "accompagnant" }
];

const chiffresAnxiete = [
  { number: "≈1/3", title: "Étudiant·e·s", description: "présentent des symptômes d’anxiété selon méta-analyses récentes." },
  { number: "4.4%", title: "Population mondiale (2019)", description: "prévalence estimée des troubles anxieux (ordre mondial avant la pandémie)." },
  { number: "936 000", title: "12–25 ans (France, 2023)", description: "jeunes ayant eu au moins un remboursement pour un psychotrope en 2023 (augmentation marquée depuis 2019)." }
];

const ressourcesInfos = [
  {
    link: "https://santepsy.etudiant.gouv.fr/",
    imageSrc: "/assets/Sante_psy_etudiant.png",
    label: "Santé Psy Étudiant",
    description: "Dispositif national : consultations psychologiques prises en charge pour les étudiants (infos & annuaire)."
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Écoute, chat et informations pour les 12–25 ans (ligne gratuite et anonyme)."
  }
];

const ressourcesAide = [
  {
    link: "https://santepsy.etudiant.gouv.fr/",
    imageSrc: "/assets/santepsy.png",
    label: "Santé Psy Étudiant",
    description: "12 séances prises en charge chez un·e psychologue partenaire (dispositif national pour étudiants)."
  },
  {
    link: "https://www.ameli.fr/mon-soutien-psy",
    imageSrc: "/assets/ameli.png",
    label: "Mon soutien psy (Assurance Maladie)",
    description: "Remboursement/prise en charge partielle de séances de soutien psychologique."
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Écoute et information (0800 235 236)."
  },
  {
    link: "https://www.nightline.fr/lyon",
    imageSrc: "/assets/nightline_logo.png",
    label: "Nightline Lyon",
    description: "Écoute par des étudiants pour les étudiants — téléphone & chat (soir)."
  },
  {
    link: "https://3114.fr/",
    imageSrc: "/assets/3114.jpg",
    label: "3114 — Prévention suicide",
    description: "Numéro national (si idées suicidaires / détresse aiguë)."
  }
];

const items_accompagnant = [
  {
    title: "Écouter, sans minimiser ni dramatiser",
    subtitle: "Laisser la personne parler, poser des questions ouvertes, valider ses émotions."
  },
  {
    title: "Proposer des ressources concrètes",
    subtitle: "Suggérer un rendez-vous au service de santé étudiant (SSE), Santé Psy Étudiant, Fil Santé Jeunes ou Nightline selon l'urgence."
  },
  {
    title: "Encourager des petits pas",
    subtitle: "Ex. essayer une technique de respiration, une courte marche, ou prendre un RDV médical."
  },
  {
    title: "Si détresse aiguë ou idées suicidaires",
    subtitle: "Contacter les services d'urgence/3114 et ne pas rester seul·e."
  }
];

const Anxiete = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Anxiété</h1>
      <Navbar links={navLinks} />

      {/* --- Comprendre --- */}
      <div id="definition">
        <h1 className="titre">Qu'est-ce que l'anxiété ?</h1>

        <ImageTextPopup
        image="./assets/cartes/2_pique.png"
        title="La carte 2♠"
        shortText="TEXTE A FAIRE"
        longText="TEXTE A FAIRE"
        textButton="⤢ Agrandir la carte"
        suit="pique"
      />
        <p className="texte">
          L'anxiété est une réaction normale face au stress : elle se manifeste par de l'inquiétude, de la vigilance et une activation corporelle (cœur qui bat plus vite, tension musculaire, etc.). Les troubles anxieux correspondent à une inquiétude excessive, persistante et qui altère le fonctionnement quotidien.
        </p>
        <p className="texte">
        On distingue l’anxiété de l’angoisse : l’anxiété est diffuse et anticipatoire, souvent liée à la peur qu’un problème survienne, tandis que l’angoisse correspond à une crise aiguë, brutale, avec des symptômes physiques intenses comme une sensation d’étouffer, des palpitations ou l’impression de perdre le contrôle.
        </p>
        <h2 className="sous-titre-2">Signes et symptômes fréquents</h2>
        <BulletList items={[
          "Inquiétude persistante et difficile à contrôler",
          "Tension, agitation, nervosité",
          "Troubles du sommeil (difficultés d’endormissement, réveils fréquents)",
          "Troubles de concentration ou esprit qui s'embrouille",
          "Symptômes physiques : palpitations, sueurs, tremblements, nausées"
        ]} />

        <h2 className="sous-titre-2">Quand devient-ce un trouble ?</h2>
        <p className="texte">
          On parle de trouble anxieux quand l'inquiétude est disproportionnée par rapport à la situation, dure depuis plusieurs semaines/mois et affecte la vie sociale, scolaire/professionnelle ou la santé. Les formes principales incluent le trouble d'anxiété généralisée, les attaques de panique, les phobies, le trouble anxieux social, et le trouble obsessif-compulsif.
        </p>

        <ChiffresGroup chiffres={chiffresAnxiete} />
      </div>

      <Separateur />

      {/* --- Je suis concerné·e --- */}
      <div id="personne-concernee">
        <h1 className="titre">Je suis concerné·e</h1>

        {/* Le constat */}
        <h2 className="sous-titre-2">Le constat</h2>
        <BulletList items={[
          "Différence homme-femme : 54,3% des femmes sondées sont assez voire très souvent stressées et 35,2% se sentent anxieuses, tandis que le stress régulier et l’anxiété touchent respectivement 24,2% et 14,6% des hommes.",
          "10,8% des étudiants signalent un stress régulier et 6,8% signalent une anxiété régulière."
        ]} />

        {/* Autres problèmes */}
        <h2 className="sous-titre-2">Autres problèmes</h2>
        <BulletList items={[
          "Cocaïne : sentiment de puissance intellectuelle et physique, suivi d’une phase de descente violente avec état dépressif et anxiété.",
          "La consommation de cocaïne multiplie par 24 le risque de syndrome coronarien (réduction de l’apport sanguin dans le cœur) une heure après la prise."
        ]} />

        {/* Réponses internes */}
        <h2 className="sous-titre-2">Les réponses internes</h2>
        <BulletList items={[
          "Ateliers de détente animés par l’infirmière pour favoriser la relaxation et la gestion du stress.",
          "Espace « calme » à la bibliothèque avec des fatboy (poufs géants)."
        ]} />

        {/* Conseils pratiques rapides */}
        <h2 className="sous-titre-2">Conseils rapides</h2>
        <ListeNumerotee
          title="Actions simples à tester tout de suite"
          subtitle="Pour diminuer le stress et l’anxiété"
          items={[
            { title: "Respire calmement", subtitle: "Inspire 4 s, retiens 4 s, expire 6–8 s ; répète 4 fois." },
            { title: "Ancrage 5-4-3-2-1", subtitle: "Regarde / nomme 5 choses, écoute 4 sons, etc. pour revenir au présent." },
            { title: "Bouge un peu", subtitle: "Marche 5–10 minutes, étirements — l’activité physique baisse l’activation." },
            { title: "Parle à quelqu’un", subtitle: "Un ami·e ou un service d’écoute (Fil Santé Jeunes, Nightline) peut t’aider à tenir jusqu’à ce que ça passe." }
          ]}
        />

        <p className="texte">Si tu veux un suivi :</p>

      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
        title="Infirmerie"
        subtitle="Infirmerie de Centrale Lyon"
        phone="Voir les informations"
        email="Voir les informations"
        hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
        textButton="Voir les informations"
        link="/infirmerie"

        bgColor="#ffffff"    //informations facultatives
        textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

      />

        <ContactCard
          image="/assets/fsj.png"
          title="Fil Santé Jeunes"
          subtitle="Écoute et infos pour 12–25 ans"
          phone="0800 235 236"
          hours="Tous les jours, 9h–23h"
          textButton="Voir le site"
          link="https://www.filsantejeunes.com/"
        />

        <ContactCard
          image="/assets/nightline_logo.png"
          title="Nightline Lyon"
          subtitle="Ligne d’écoute, de soutien et d’information, tenue par et pour des étudiants"
          phone="04 85 30 00 10"
          hours="Tous les jours, de 21h à 2h30 du matin"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />

        <ExternalLinkBlock
          title="Ressources utiles"
          subtitle="Liens pour compléter votre compréhension"
          resources={[
            ...ressourcesInfos,
            { link: "https://www.youtube.com/watch?v=k1ympFJR4WU",
              imageSrc: "/assets/Youtube.jpg",
              label: "Vidéo : Comprendre le stress ", 
              description: "Une approche ludique pour comprendre le stress et ses mécanismes." }
          ]}
        />
      </div>

      <Separateur />

      {/* --- J’accompagne --- */}
      <div id="accompagnant">
        <h1 className="titre">J’accompagne ou je suis témoin</h1>

        <p className="texte">
          Si un·e proche te confie son anxiété, ton soutien compte : écoute, assure-toi qu’il·elle est en sécurité, propose des ressources concrètes et encourage la consultation d’un professionnel si besoin.
        </p>

        <ListeNumerotee
          title="Comment aider ?"
          subtitle="Repères pour accompagner sans nuire"
          items={items_accompagnant}
        />

        <TextImageRight
          text="La formation PSSM (Premiers Secours en Santé Mentale) et d'autres modules d'écoute/d'orientation peuvent aider les témoins et les intervenants à mieux repérer et accompagner une personne en détresse."
          imageSrc="/assets/logo-pssm.svg"
        />
      </div>
      
      <Separateur />

<p className="texte">
  <em>
    <b>Sources :</b> Méta-analyses sur l’anxiété chez les étudiant·e·s, Santé Psy Étudiant, Fil Santé Jeunes, Nightline Lyon, 3114 — prévention suicide
  </em>
</p>

    </div>
  );
};

export default Anxiete;
