import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Qu'est-ce que c'est ?", target: "quoi" },
  { label: "Solutions & stratégies", target: "solutions" },
];

const chiffres = [
  { number: "~ 10%", title: "des 14-24 ans", description: "regardent du porno chaque jour voire plusieurs fois par jour" },
  { number: "15-20%", title: "des utilisateurs réguliers", description: "peuvent développer un usage problématique ou addictif" },
  { number: "90%", title: "des contenus pornographiques", description: "contiennent de la violence physique et verbale, souvent envers les femmes" }];

const resources = [
  { link: "https://www.filsantejeunes.com/addiction-au-porno-20922", 
    imageSrc: "/assets/fsj.png", 
    label: "Fil Santé Jeunes", 
    description: "Écoute et informations pour 12–25 ans" },
  { link: "https://www.sante.fr/", 
    imageSrc: "/assets/sante_fr.png", 
    label: "Sante.fr", 
    description: "Infos santé et orientations" },
  { link: "https://www.psychologies.com/", imageSrc: "/assets/psychologies.png", label: "Psychologies", description: "Articles pratiques et ressources sur addiction, sexualité et relations" }
];

const isolement = [
  { link: "/isolement",
    emoji: "🧍‍♂️",
    label: "Isolement",
    description: "Comprendre et combattre l'isolement social" }
];

const depression = [
  { link: "/depression",
    emoji: "😞",
    label: "Dépression",
    description: "Reconnaître et gérer la dépression" }
];

const couple = [
  { link: "/couple",
    emoji: "💑",
    label: "Couple & sexualité",
    description: "Améliorer la communication et l'intimité" }
];


const cliches = [
  { link: "/consentement",
    emoji: "✅",
    label: "Consentement",
    description: "Apprendre à respecter le consentement" },
  { link: "/sexualite",
    emoji: "😘",
    label: "Sexualité & contraception",
    description: "Construire une sexualité saine et satisfaisante" }
];

const resources1 = [
  { link: "https://www.federationaddiction.fr/thematiques/addictions-sans-substance/laddiction-a-la-pornographie-cest-laddiction-de-la-solitude-par-excellence/",
    imageSrc: "/assets/federationaddiction.png", 
    label: "Fédération Addiction", 
    description: "Informations sur l'addiction à la pornographie et son traitement" },
  { link: "https://www.addictaide.fr/pornographie-comprendre-et-soigner-cette-addiction/", 
    imageSrc: "/assets/addictaide.jpg", 
    label: "Addict'Aide", 
    description: "Comprendre et soigner cette addiction" }
];


const strategies = [
  {
    title: "Auto-observation",
    items: [
      "Tenir un journal de consommation : quand, pourquoi, durée, émotions associées",
      "Repérer les déclencheurs (solitude, ennui, stress)"
    ]
  },
  {
    title: "Limiter l'accès",
    items: [
      "Installer des bloqueurs / filtres sur les appareils",
      "Supprimer / rendre l'accès moins immédiat (déconnexion, suppression d'applications)"
    ]
  },
  {
    title: "Remplacer par des activités",
    items: [
      "Planifier des activités alternatives agréables (sport, sortie, loisir créatif)",
      "Créer une routine de soirées favorisant le sommeil plutôt que l'écran"
    ]
  },
  {
    title: "Stratégies cognitives",
    items: [
      "Identifier et recadrer les pensées automatiques (ex. « j’ai besoin de ça pour me sentir mieux »)",
      "Différer l’acte (attendre 10 min) et observer si l'envie s'estompe"
    ]
  },
  {
    title: "Aide professionnelle",
    items: [
      "Thérapie individuelle (TCC, thérapies centrées sur les compulsions)",
      "Thérapie de couple si la relation est affectée",
      "Groupes de parole ou d'entraide"
    ]
  }
];

const Pornographie = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Addiction à la pornographie</h1>
      <Sommaire links={navLinks} />

      <div id="quoi">
        <h1 className="titre">Qu'est-ce que c'est ?</h1>
      </div>
      <ImageTextPopup
        image="./assets/cartes/6_coeur.png"
        title="La carte 6♥"
        shortText="Comprendre l'usage problématique"
        longText="Un usage fréquent ou régulier de la pornographie n'est pas obligatoirement pathologique. On parle d'usage problématique ou addictif quand il y a perte de contrôle, impacts sur le quotidien ou poursuite malgré les conséquences négatives. L'évaluation par un professionnel aide à déterminer la nature du problème et les aides possibles."
        textButton="⤢ Agrandir la carte"
        suit="coeur"
      />

      <p className="texte">Parler d’« <b>addiction à la pornographie</b> » renvoie à des usages problématiques de contenus sexuels explicites : quand le <b>visionnage devient compulsif, difficile à contrôler</b> et <b>provoque un retentissement négatif</b> dans la vie personnelle, sociale, scolaire ou professionnelle.</p>

      <ChiffresGroup chiffres={chiffres} />

      <p className="texte">La pornographie en ligne est largement accessible et consommée, notamment chez les jeunes. Si la majorité des usages restent contrôlés, une minorité peut développer des <b>comportements problématiques</b>.</p>

      <h2 className="sous-titre-2">Quels sont les risques ?</h2>

      <p className="texte">Visionner de la pornographie n'est pas problématique en soi tant que ce visionnage n'altère pas ta vision de la réalité des relations sexuelles. La pornographie sert à la stimulation sexuelle et au plaisir <b>sans chercher à représenter fidèlement la complexité des relations humaines</b> et sexuelles dans la vie réelle, c'est pourquoi son visionnage doit se faire avec un certain recul.</p>
      <p className="texte">En effet, certains <b>clichés</b> véhiculés par la pornographie <em>mainstream</em> peuvent devenir problématiques :</p>
      <BulletList items={[
        "Représentation irréaliste des corps et des performances sexuelles (ex. endurance, taille, actes extrêmes)",
        "Consentement parfois ambigu ou absent (ex. scènes forcées)",
        "Stéréotypes de genre et dynamiques de pouvoir (ex. domination, soumission)",
        "Objectification des personnes (ex. femmes réduites à des objets sexuels)",
        "Renforcement de comportements à risque (ex. rapports non protégés)"
      ]} />

      <ExternalLinkBlock resources={cliches} />

      <h2 className="sous-titre-2">Comment fonctionne l'addiction à la pornographie ?</h2>
      <p className="texte">L'addiction à la pornographie partage des <b>mécanismes communs</b> avec d'autres addictions comportementales :</p>
      <BulletList items={[
        "Activation du système de récompense cérébral via la dopamine",
        "Renforcement positif (plaisir) et négatif (évasion du stress et des émotions désagréables)",
        "Tolérance et besoin d'intensification, dérive vers des contenus plus extrêmes voire illégaux",
        "Craving (envies intenses)",
        "Impact sur les circuits de contrôle exécutif"
      ]} />

      <ExternalLinkBlock resources={resources1} />

      <h2 className="sous-titre-2">Signes d'un usage problématique :</h2>
      <BulletList items={[
        "Perte de contrôle : impossibilité de réduire ou d’arrêter malgré l’envie",
        "Tolérance : besoin de plus de contenus ou de temps pour la même stimulation",
        "Régulation émotionnelle : usage pour gérer ennui, anxiété ou tristesse",
        ]} />

        <h2 className="sous-titre-2">Conséquences possibles</h2>
        <p className="texte">Les conséquences d'un usage problématique de la pornographie peuvent être variées et affecter plusieurs aspects de la vie.</p>
        <p className="texte"><b>Impact sur la sexualité réelle :</b></p>
        <p className="texte">La consommation excessive de pornographie peut entraîner des attentes irréalistes concernant les relations sexuelles, ce qui peut conduire à des difficultés d’érection ou d’excitation avec un partenaire réel.</p>

        <p className="texte"><b>Retentissement relationnel :</b></p>
        <p className="texte">Le visionnage problématique de pornographie peut provoquer des tensions dans les relations amoureuses ou familiales, en raison du secret entourant sa consommation. Des mensonges peuvent être nécessaires pour cacher cette consommation, ce qui peut entraîner une perte d’intimité.</p>
        <ExternalLinkBlock resources={couple} />

        <p className="texte"><b>Baisse de motivation et de concentration :</b></p>
        <p className="texte">Difficultés à se concentrer sur des tâches, baisse de l'intérêt pour des activités auparavant appréciées. Cette spirale de désengagement peut aggraver les problèmes émotionnels ou entraîner des problèmes de santé mentale comme la dépression.</p>
        <ExternalLinkBlock resources={depression} />

        <p className="texte"><b>Sentiments de honte et de culpabilité :</b></p>
        <p className="texte">Ces sentiments peuvent entraîner un isolement social, pouvant aggraver l'état émotionnel et mental.</p>
        <ExternalLinkBlock resources={isolement} />

        <p className="texte"><b>Risque d’escalade :</b></p>
        <p className="texte">Besoin croissant de consommer des contenus plus extrêmes ou déviants pour atteindre le même niveau de stimulation, ce qui peut mener à des comportements illégaux ou dangereux.</p>
      
      <p className="mise-avant">Ces effets ne sont pas systématiques : beaucoup de personnes consomment de la pornographie sans développer d'usage problématique. L'important est le degré d'impact sur la vie.</p>
      

      <Separateur />

      <div id="solutions">
        <h1 className="titre">Quelles solutions ?</h1>
      </div>

      <h2 className="sous-titre-2">Une addiction encore taboue</h2>
      <p className="texte">L'addiction à la pornographie reste un sujet tabou, souvent entouré de honte et de culpabilité. Pourtant, il est important de reconnaître que c'est un problème réel qui peut affecter la santé mentale et les relations. Parler ouvertement avec des professionnels ou des groupes de soutien peut aider à briser ce tabou et à trouver des solutions adaptées.</p>


      <ExternalLinkBlock resources={resources} />

      <h2 className="sous-titre-2">Solutions & stratégies (court et long terme)</h2>

      <p className="texte">Des stratégies progressives peuvent aider à retrouver un usage contrôlé ou à arrêter si tu le souhaites. Voici des actions concrètes, classées du plus simple au plus impliquant :</p>

      {strategies.map((s, idx) => (
        <div key={idx} className="carte-technique">
          <h3 className="sous-titre-3">{s.title}</h3>
          <BulletList items={s.items} />
        </div>
      ))}

      <h3 className="sous-titre-3">Plan pratique en 7 jours</h3>
      <ListeNumerotee
        title="Exemple de mini-plan (7 jours)"
        items={[
          { title: "Jour 1 — Observateur", subtitle: "Note quand et pourquoi tu visionnes (journal simple)" },
          { title: "Jour 2 — Réduction d'accès", subtitle: "Installe un filtre / active le mode 'screen time' le soir" },
          { title: "Jour 3 — Remplacement", subtitle: "Planifie 30 minutes d'activité alternative à la place" },
          { title: "Jour 4 — Délai", subtitle: "Si l'envie revient, attends 10 minutes et évalue" },
          { title: "Jour 5 — Partage", subtitle: "Parle à une personne de confiance ou un professionnel (anonymement si besoin)" },
          { title: "Jour 6 — Habitudes de soirée", subtitle: "Routines sans écran avant le coucher" },
          { title: "Jour 7 — Bilan", subtitle: "Regarde les progrès et ajuste le plan" },
        ]}
      />

      <Separateur />

      <div id="aide">
        <h1 className="titre">Aide et ressources</h1>
      </div>

      <p className="texte">Si l'usage a un impact important sur ta vie, n'hésite pas à demander de l'aide. Voici des options possibles :</p>

      <BulletList items={[
        "Contacte un professionnel de santé (médecin traitant, infirmier·e) pour une orientation",
        "Consulte un psychologue spécialisé dans les comportements répétitifs ou les addictions",
        "Pour les questions liées à la sexualité, un·e sexologue peut aider à restaurer le désir et la confiance",
        "Groupes d'entraide et consultations en addictologie si besoin"
      ]} />


<ContactCard
        image="/assets/fsj.png" 
        title="Fil santé jeunes"
        subtitle="Service d'écoute anonyme et gratuit pour les 12-25 ans"
        phone="0 800 235 236"
        email=""
        hours="Tous les jours de 9h à 23h"
        textButton="Voir le site web"
        link="https://www.filsantejeunes.com/"
      />
      <h2 className="sous-titre-2">Accompagner un proche</h2>
      <p className="texte">Si tu veux aider quelqu'un qui a un usage problématique :</p>

      <ListeNumerotee
        title="Conseils pour aider"
        items={[
          { title: "Écoute sans jugement", subtitle: "La personne a souvent honte, privilégie une attitude compréhensive" },
          { title: "Propose un accompagnement concret", subtitle: "Aide à trouver un professionnel, accompagne aux rendez-vous si souhaité" },
          { title: "Évite les reproches", subtitle: "Ils provoquent fermeture et secret ; privilégie la coopération" },
          { title: "Fixe des limites", subtitle: "Si l'usage affecte directement ta vie (couple, travail), fixe des règles claires et protège-toi" }
        ]}
      />

      <Separateur />

      <h2 className="sous-titre-2">Quand consulter en urgence ?</h2>
      <p className="texte">Consulte rapidement si :</p>
      <BulletList items={[
        "Tu as des pensées de mort ou des idées suicidaires",
        "L'usage est lié à des situations à risque (ex. comportement illégal, partage non consenti d'images)",
        "Il y a une détérioration marquée de la santé mentale ou physique"
      ]} />

      <Separateur />

      <p className="texte"><em><b>Sources & repères :</b> recommandations générales en santé mentale et sexologie. Cette page vise l'information et l'orientation — elle ne remplace pas une évaluation professionnelle.</em></p>
    </div>
  );
};

export default Pornographie;
