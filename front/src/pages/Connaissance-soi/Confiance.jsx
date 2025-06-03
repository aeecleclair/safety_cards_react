import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";


const navLinks = [
  { label: "Qu'est-ce que l'estime de soi ?", target: "definition" },
  { label: "Comment renforcer sa confiance ?", target: "renforcer" },
  { label: "Comment aider quelqu'un ?", target: "aider" }
];

const chiffres_confiance = [
  { number: "78%", title: "des jeunes", description: "affirment avoir confiance en eux, mais..." },
  { number: "81%", title: "des jeunes", description: "renoncent parfois à leurs aspirations faute de confiance​" },
  { number: "55%", title: "des jeunes", description: "souhaiteraient  participer à des ateliers de gestion du stress et des émotions" }
];

const resources_infos = [
  {
    link: "https://www.filsantejeunes.com/je-nai-pas-confiance-en-moi-7065#:~:text=Le%20propre%20du%20complexe%20est,et%20la%20confiance%20en%20soi",
    label: "Fil Santé Jeunes",
    description: "Un article pour mieux comprendre la confiance en soi",
    imageSrc : "/assets/fsj.png",
  },
  {
    link: "https://www.psychologies.com/Moi/Se-connaitre/Estime-de-soi",
    label: "Psychologies - Estime de soi",
    description: "Articles pour mieux se connaître et s'aimer",
  },
];

const resources_aide = [
  {
    link: "https://monsoutienpsy.ameli.fr/recherche-psychologue",
    label: "Mon soutien psy",
    description: "12 séances gratuites avec un psychologue",
  },
]

const conseils_aider = [
  { title: "Écoute sans juger", subtitle: "Donne-lui l’occasion de parler de ce qu’il/elle ressent. Parfois, simplement laisser la personne s’exprimer (peurs, complexes, doutes) est très aidant. Montre-lui que tu prends ses sentiments au sérieux et que tu es là pour lui/elle." },
  { title: "Valorise ses qualités", subtitle: "Soulignez ses forces et réussites, même petites. Cela peut aider à rééquilibrer son image d’elle-même." },
  { title: "Suggère des activités", subtitle: "Propose de faire ensemble quelque chose qui peut améliorer son moral : faire du sport, aller au cinéma, se lancer dans un nouveau projet créatif, etc. Participer à des activités de groupe encourage l’estime de soi." },
  { title: "Encourage dans la démarche d'aide", subtitle: "Si tu vois que la personne souffre (isolement, tristesse, baisse de motivation…), encourage-la à demander de l’aide extérieure. Par exemple, l'infirmière ou un psychologue peuvent conseiller. Tu peux aussi l'orienter vers le numéro d'écoute Fil Santé Jeunes ou la Nightline." }
];

const Confiance = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Confiance et Estime de soi</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Qu'est-ce que l'estime de soi ?</h1>
      </div>

      <h2 className="sous-titre-2">Définir confiance en soi et estime de soi</h2>
      <p className="texte">On confond souvent confiance en soi et estime de soi, mais ces notions sont différentes :</p>
      
      <BulletList items={[
        "La confiance en soi est la croyance en sa capacité à réussir dans une tâche spécifique. La confiance en soi n’est pas innée : elle se construit avec l’expérience, l’entraînement et les réussites. Une personne peut avoir confiance dans un domaine (par exemple, dans ses talents au Coin-Coin) sans pour autant avoir une estime de soi globale élevée.",
        "L'estime de soi est l’évaluation globale et affective que l’on porte sur soi-même : ce que je ressens pour moi-même. Une bonne estime de soi se manifeste généralement par un discours intérieur positif et une capacité à s’affirmer​. À l’inverse, une estime de soi faible s’accompagne souvent de pensées négatives sur soi-même, de peur du jugement des autres et d’une difficulté à s’affirmer​",
      ]} />

      <TextImageRight
        text="L'estime de soi repose sur trois piliers principaux : l'amour de soi (s'accepter tel qu'on est), la vision de soi (se voir de façon réaliste) et la confiance en ses capacités. Elle évolue tout au long de la vie, et peut être fragilisée par des épreuves, des échecs, des jugements extérieurs."
        imageSrc="/assets/miroir.png"
      />

      <ChiffresGroup chiffres={chiffres_confiance} />

      <h2 className="sous-titre-2">Pourquoi la confiance et l'estime de soi sont importantes ?</h2>
      <p className="texte">La confiance en soi et l’estime de soi jouent un rôle majeur dans la vie d’un étudiant. Elles influencent la motivation, la participation en classe, la capacité à relever des défis et le bien-être psychologique. Par exemple, un manque de confiance peut conduire à l’auto-censure : de jeunes femmes en formation avouent souvent renoncer à parler en public ou à poursuivre certains projets par manque d’assurance​.
      <br/>Une estime de soi solide est aussi un facteur de résilience : elle aide à mieux gérer le stress, les échecs passagers et les relations sociales. À l’inverse, une estime de soi faible s’accompagne souvent d’anxiété et peut contribuer à un mal-être plus profond​. Concrètement, cela veut dire qu’un étudiant avec une bonne confiance en soi osera plus souvent prendre la parole en classe, demander de l’aide s’il ne comprend pas quelque chose, participer à des projets collectifs, et persévérer malgré les difficultés. Au contraire, sans confiance, on peut avoir tendance à se dire « je ne suis pas à la hauteur » et à abandonner plus vite. Travailler sa confiance et son estime de soi est donc important pour réussir ses études et pour préserver sa santé mentale.</p>


      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Sites pour mieux comprendre et développer l'estime de soi"
        resources={resources_infos}
      />

      <ImageTextPopup
        image="./assets/selflove.jpg"
        title="La carte 4♣"
        shortText="Confiance en soi : renforcer et accompagner"
        longText="Confiance en soi : renforcer et accompagner"
        textButton="⤢ Agrandir la carte"
      />

      <Separateur />
      <div id="renforcer">
        <h1 className="titre">Comment renforcer sa confiance en soi ?</h1>
      </div>

      <h2 className="sous-titre-2">Petites actions pour progresser</h2>
      <p className="texte">Améliorer sa confiance prend du temps. Voici quelques leviers :</p>

      <BulletList items={[
        "Fixe-toi des objectifs réalistes et félicite-toi quand tu les atteins, même s'ils sont petits.",
        "Parle-toi comme tu parlerais à un·e ami·e : avec bienveillance, encouragement et patience.",
        "Pratique une activité physique régulière. Faire du sport ou simplement marcher stimule la production de dopamine (l’hormone du bien-être) et améliore l’image que l’on a de soi​. Par exemple, une séance de sport après les cours ou une promenade chaque jour peuvent aider à se sentir plus fort et plus sûr de soi.",
        "Prends soin de toi. Un bon sommeil, une alimentation équilibrée et une hygiène de vie saine aident à se sentir bien dans son corps et dans sa tête​. Bien dormir et manger sainement augmente l’énergie et la clarté mentale, ce qui facilite la confiance au quotidien.",
        "Autorise-toi à faire des erreurs. Personne n’est parfait : faire des fautes ou échouer ponctuellement ne signifie pas qu’on est « nul ». Au contraire, chaque erreur est l’occasion d’apprendre. Même si tu as une mauvaise note, rappelle-toi que tu n’es pas ta note​.",
        "Apprends à gérer ton stress et tes émotions. Des techniques simples de respiration ou de relaxation peuvent aider à calmer l’anxiété (par exemple, inspirer lentement pendant 4 secondes, bloquer 4 secondes, expirer 4 secondes). Comprendre et nommer ses émotions (colère, tristesse, etc.) permet de les réguler.",
        "Sors de ta zone de confort avec des petits défis. Chaque fois que tu oses faire quelque chose qui te fait peur (dire ce que tu penses, changer de look, participer à un club), tu gagnes en assurance. Par exemple, n’hésite pas à exprimer ton avis en petit comité ou à dire non quand tu n’es pas d’accord. ",
      ]} />

      <p className="texte">Tu n'es pas obligé·e de traverser seul·e cette démarche. Des aides existent, confidentielles et gratuites :</p>

          <ContactCard
            image="/assets/nightline_logo.png"
            title="Nightline Lyon"
            subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s"
            phone="04 85 30 00 10"
            email=""
            hours="Tous les soirs, de 21h à 2h30"
            textButton="Voir le site web"
            link="https://www.nightline.fr/lyon"
          />

          <ContactCard
            image="/assets/logo-cosa.svg"
            title="Comment on s'aime ?"
            subtitle="Professionnels pour t'écouter et t'accompagner"
            hours="Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h"
            textButton="Voir le site web"
            link="https://commentonsaime.fr/"
            bgColor="#f6a21e"
            textColor="#ffffff"
          />

      <ExternalLinkBlock resources={resources_aide} />

      <YouTubeVideo url="https://www.youtube.com/watch?v=EQUffQNqDQo&ab_channel=LouieMedia" />

      <Separateur />
      <div id="aider">
        <h1 className="titre">Comment aider quelqu'un qui manque de confiance en soi ?</h1>
      </div>

      <p className="texte">Le soutien de l'entourage est précieux pour reconstruire l'estime de soi. Voici quelques pistes :</p>

      <ListeNumerotee
        title="Soutenir une personne en manque de confiance"
        subtitle="Comment accompagner sans brusquer ?"
        items={conseils_aider}
      />

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

      <h2 className="sous-titre-2">Ce qu’il vaut mieux éviter</h2>

      <BulletList items={[
        "Ne pas minimiser ou se moquer de ses peurs ou doutes.",
        "Éviter les injonctions du type « il faut », « tu dois » qui peuvent renforcer la pression.",
        "Ne pas se substituer à la personne : l'encourager à trouver ses propres solutions.",
        "Ne pas donner de conseils non sollicités : écouter est souvent plus précieux que conseiller.",
      ]} />

      <Separateur />

      <p className="texte"><em><b>Sources :</b> UNICEF, Psychologies Magazine, Portail Santé Université de Lyon, American Psychological Association.</em></p>

    </div>
  );
};

export default Confiance;
