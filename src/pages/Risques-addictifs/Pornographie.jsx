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
  { label: "Quelles solutions ?", target: "solutions" },
];

const chiffres = [
  { number: "~ 10%", title: "des 14-24 ans", description: "regardent du porno chaque jour voire plusieurs fois par jour" },
  { number: "15-20%", title: "des utilisateurs réguliers", description: "peuvent développer un usage problématique ou addictif" },
  { number: "90%", title: "des contenus pornographiques", description: "contiennent de la violence physique et verbale, souvent envers les femmes" }];


const isolement = [
  { link: "/isolement",
    emoji: "🧍",
    label: "Isolement",
    description: "Comprendre et combattre l'isolement social" }
];

const depression = [
  { link: "/depression",
    emoji: "🥺",
    label: "Dépression",
    description: "Reconnaître et gérer la dépression" }
];

const couple = [
  { link: "/couple",
    emoji: "💑",
    label: "Couple & sexualité",
    description: "Améliorer la communication et l'intimité" }
];

const detente = [
  { link: "/detente",
    emoji: "🧘‍♀️",
    label: "Détente & relaxation",
    description: "Techniques de relaxation et de gestion du stress" }
];

const ecrans = [
  { link: "/ecrans",
    emoji: "📵",
    label: "Addiction aux écrans & réseaux sociaux",
    description: "Gérer son temps d'écran et ses habitudes numériques" }
];

const test_addiction = [
  {
    link: "/assets/depistage_add_sexuelle.pdf",
    label: "Test de dépistage d'addiction sexuelle de Carnes", 
    description: "Auto-diagnostic pour évaluer votre relation à la pornographie",
  }
];

const aide = [
  { link: "https://dasafrance.fr/reunions-liens/reunions-en-province/",
    imageSrc: "/assets/DASA.JPG",
    label: "DASA France",
    description: "Association de groupes d'entraide pour les addictions sexuelles" },
  { link: "https://stopporn.fr/en-parler/#professionnels",
    imageSrc: "/assets/stopporn.JPG",
    label: "StopPorn.fr",
    description: "Ressources et soutien pour les addictions sexuelles" }
];

const centres_aide = [
  { link: "https://ifac-addictions.chu-nantes.fr/annuaire-des-centres-de-soins/region-sud-est",
    imageSrc: "/assets/ifac.jpg",
    label: "IFAC - Centres de soins",
    description: "Trouver un centre de soins en addictologie comportementale près de chez vous" }
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
        longText="Un usage fréquent ou régulier de la pornographie n'est pas obligatoirement pathologique. On parle d'usage problématique ou addictif quand il y a perte de contrôle, impacts sur le quotidien ou poursuite malgré les conséquences négatives."
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

        <p className="text">Voici un <b>auto-diagnostic</b> (test de dépistage d'addiction sexuelle de Carnes) pour évaluer votre relation à la pornographie :</p>
        <ExternalLinkBlock resources={test_addiction} />

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
      
      <p className="mise-avant">Ces effets ne sont <b>pas systématiques</b> : beaucoup de personnes consomment de la pornographie sans développer d'usage problématique. L'important est le degré d'impact sur la vie.</p>
      

      <Separateur />

      <div id="solutions">
        <h1 className="titre">Quelles solutions ?</h1>
      </div>

      <h2 className="sous-titre-2">Une addiction encore taboue</h2>
      <p className="texte">L'addiction à la pornographie reste un <b>sujet tabou</b>, souvent entouré de honte et de culpabilité. En France, elle n'est même <b>pas encore reconnue</b> comme telle et la recherche sur le sujet reste encore limitée. Pourtant, il est important de reconnaître que c'est un problème réel qui peut affecter la santé mentale et les relations. Des témoignages existent déjà et permettent de visibiliser cette addiction et de parler ouvertement lors de groupe de soutien.</p>





      <h2 className="sous-titre-2">Quelques pistes</h2>

      <p className="texte">Des <b>stratégies progressives</b> peuvent aider à retrouver un usage contrôlé ou à arrêter si tu le souhaites. Voici des actions concrètes :</p>
      <p className="texte"><b>Auto-observation :</b></p>
      <BulletList items={[
        "Tiens un journal de consommation : quand, pourquoi, durée, émotions associées. Cela t'aidera à mieux comprendre tes habitudes et à identifier les moments à risque.",
        "Repère les déclencheurs (solitude, ennui, stress) afin de les anticiper et de mettre en place des stratégies pour y faire face."
      ]} />

      <p className="texte"><b>Limiter l'accès :</b></p>
      <BulletList items={[
        "Installe des bloqueurs ou filtres sur les appareils pour restreindre l'accès à certains contenus.",
        "Supprime ou rends l'accès moins immédiat (déconnexion, suppression d'applications) car cela peut aider à réduire les tentations."
      ]} />
      <ExternalLinkBlock resources={ecrans} />

      <p className="texte"><b>Remplacer par des activités :</b></p>
      <BulletList items={[
        "Planifie des activités alternatives agréables (sport, sortie, loisir créatif) pour te distraire et occuper ton esprit.",
        "Crée une routine de soirées favorisant le sommeil plutôt que l'écran (ex. lecture, méditation)."
      ]} />
      <ExternalLinkBlock resources={detente} />

      <p className="texte"><b>Stratégies cognitives :</b></p>
      <BulletList items={[
        "Identifie et recadre les pensées automatiques (ex. « j’ai besoin de ça pour me sentir mieux ») pour les remplacer par des pensées plus saines (ex. « je peux trouver d'autres moyens de me sentir mieux »).",
        "Cela t'aidera à mieux gérer tes envies et à les comprendre. En effet, prendre du recul et analyser la situation peut permettre de désamorcer l'envie. Par exemple, différer l’acte (attendre 10 min) et observer si l'envie s'estompe peut être une stratégie efficace."
      ]} />

      <h2 className="sous-titre-2">En parler</h2>
      <p className="texte">Le meilleur pas vers la gestion de l'addiction est souvent d'<b>en parler</b>. Que ce soit avec un ami de confiance, un membre de la famille ou un professionnel de santé, partager son expérience peut aider à réduire la honte et à trouver du soutien.</p>
      <p className="texte">Des <b>professionnels spécialisés</b> en santé mentale, en sexologie ou en addictologie peuvent offrir un accompagnement adapté. Ils peuvent aider à comprendre les mécanismes de l'addiction, à développer des stratégies de gestion et à travailler sur les causes sous-jacentes.</p>
      <ExternalLinkBlock resources={centres_aide} />

      <p className="texte">Il existe également des <b>groupes de parole</b> et des lignes d'écoute qui peuvent offrir un espace sûr pour discuter de ces problèmes :</p>
      <ExternalLinkBlock resources={aide} />
      
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
      
      <Separateur />

      <p className="texte"><em><b>Sources :</b> DASA France, Addict'Aide, Fédération Addiction, Stopporn.fr, IFAC.</em></p>
    </div>
  );
};

export default Pornographie;
