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
import { image } from "framer-motion/m";

const navLinks = [
  { label: "Comprendre", target: "definition" },
  { label: "Je suis concerné·e", target: "personne-concernee" },
  { label: "J’accompagne ou je suis témoin", target: "accompagnant" }
];

const ressourcesTroubles = [
  {
    link: "/depression",
    label: "Dépression",
    description: "Comprendre et agir",
    emoji: "🥺"
  },
  {
    link: "/alcool",
    label: "Consommation d'alcool",
    description: "Consommation d'alcool et addictions éventuelles",
    emoji: "🍺"
  },
  {
    link: "/stup",
    label: "Consommation de stupéfiants",
    description: "Effets, risques et ressources",
    emoji: "🎆"
  }
];

const chiffresAnxiete = [
  { number: "6.8%", title: "des étudiant·e·s", description: "signalent une anxiété régulière (Centrale Lyon)" },
  { number: "15%", title: "des français", description: "âgés de 15 à 85 ans sont touchés par les troubles anxieux" },
  { number: "21.6%", title: "des françaises", description: "âgées de 15 à 85 ans sont touchées par les troubles anxieux" },
];

const ressourcesInfos = [
  {
    link: "https://santepsy.etudiant.gouv.fr/",
    imageSrc: "/assets/Sante_psy_etudiant.png",
    label: "Santé Psy Étudiant",
    description: "Consultations psychologiques gratuites pour les étudiants (infos & annuaire)."
  },

];


const items_aerer = [
  { title: "Approcher la personne, évaluer et assister", 
    subitems: [ 
      { title : "Approche la victime", subtitle: "Trouve le moment et le lieu où vous vous sentez tous les deux à l'aise pour discuter. Si la personne n'est pas disposée à parler, ne la force pas à parler, elle peut avoir besoin de temps pour se confier : signale-lui simplement que tu restes à sa disposition." },
      {title : "Si tu perçois des signes de crise", subtitle: "Si tu crains que la victime soit en train de faire une crise de panique, tu peux appliquer le plan plus bas. Si il est fait mention pendant la conversation d'idées suicidaires ou d'automutilation non suicidaire, la victime peut être en crise. Il est alors nécessaire de l'assister. Référe-toi aux pages Suicide et Automutilation." }
      ] },

  { title: "Écouter activement et sans jugement", subtitle: "Pose des questions, reformule ses propos pour bien comprendre, n'interromps pas la personne, regarde-la quand elle te parle, n'exprime pas de jugement et évite la confrontation." },
  { title: "Réconforter et informer", subtitle: "Rassure le·la quant au fait qu'il·elle peut se rétablir, rappelle qu'il·elle n'est pas seul·e à faire face à ce type de situation, propose ton aide en prenant garde à ne pas tout assumer à sa place, réfléchissez à des solutions ensemble. " },
  { title: "Encourager à aller vers des professionnels", subtitle: "On ne sait pas forcement qu'il est possible d'être pris en charge lorsqu'on souffre de troubles anxieux. Il est par exemple possible de consulter l'infirmière de Centrale, un médecin généraliste ou un psychologue. Si la victime ne souhaite pas voir de professionnels, discutez de ce refus. Quoiqu'il en soit, signale-lui que tu restes à sa disposition." },
  { title: "Renseigner sur les autres ressources disponibles", subtitle: "Encourage-le·la à communiquer avec d'autres ami·e·s ou avec des membres de leur famille. Il est aussi possbile de mettre en place une stratégie d'auto-aide. Vous pouvez aussi les orienter vers des ressources en ligne, présentes sur cette page par exemple." },
];

const aerer = [
  {
    link: "/suicide",
    label: "La victime a des idées suicidaires",
    description: "Comment réagir et l'aider ?",
    emoji: "🗣️"
  },
  {
    link: "/automutilation",
    label: "La victime s'automutile",
    description: "Comment réagir et l'aider ?",
    emoji: "🦓"
  }
];

const crise_panique = [
  {
    link: "https://www.pssmfrance.fr/actualites/comment-gerer-une-attaque-de-panique/",
    label: "Comment gérer une crise de panique ?",
    description: "Pour aller + loin",
    imageSrc: "/assets/logo-pssm.svg"
  }
];

const Anxiete = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Anxiété et troubles anxieux</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Comprendre l'anxiété et les troubles anxieux</h1>

        <ImageTextPopup
        image="./assets/cartes/2_pique.png"
        title="La carte 2♠"
        shortText="L'anxiété et les troubles anxieux"
        longText="L'anxiété et les troubles anxieux peuvent se manifester de différentes manières, affectant à la fois le mental et le corps. Ils sont souvent caractérisés par une inquiétude excessive, des pensées intrusives, et des réactions physiques telles que l'accélération du rythme cardiaque, la transpiration, et la tension musculaire. Comprendre ces symptômes est crucial pour reconnaître et gérer l'anxiété de manière efficace."
        textButton="⤢ Agrandir la carte"
        suit="pique"
      />
        <p className="texte">
          L'<b>anxiété</b> est liée à des peurs ressenties dans l'environnement. Elle peut se manifester par de l'inquiétude, une attention extrême portée au regard des autres, à des intéractions sociales ou à des erreurs. Elle peut aussi s'accompagner d'une activation corporelle (cœur qui bat plus vite, tension musculaire, etc.), mais chacun est susceptible de réagir de manière différente.
          </p>
        <p className="texte">
          Les <b>troubles anxieux</b> correspondent à une inquiétude plus importante et plus persistante, qui altère le fonctionnement quotidien (activités, travail, relations sociales, etc.). Les troubles anxieux sont les troubles de santé mentale les plus courants dans le monde.
        </p>
        <p className="texte">
        On distingue l’anxiété de l’<b>angoisse</b> : l’anxiété est diffuse et anticipatoire, souvent liée à la peur qu’un problème survienne, tandis que l’angoisse correspond à une crise aiguë, brutale, avec des symptômes physiques intenses comme une sensation d’étouffer, des palpitations ou l’impression de perdre le contrôle.
        </p>
        <h2 className="sous-titre-2">Signes et symptômes fréquents</h2>
        <BulletList items={[
          "Pensées perssistantes et agitées, confusion, baisse de la concentration...",
          "Peur et inquiétude excessives, nervosité et impatience...",
          "Evitement de la situation crainte, compulsivité, troubles du sommeil, hausse de la consommation d'alcool...",
          "Fatigue physique importante, accélération du rythme cardiaque, respiration rapide, vertiges, transpiration, douleurs d'estomac ou musculaire...",
        ]} />

        <h2 className="sous-titre-2">Les différents types de troubles anxieux</h2>
        <p className="texte">
          Il existe de nombreux troubles anxieux. Ils sont ici rangés par fréquence décroissante.
        </p>

        <BulletList items={[
          <><b>Phobies spécifiques :</b> peur intense et irrationnelle d'objets ou de situations spécifiques (animaux, hauteurs, vol en avion, etc.). Tu peux ressentir une anxiété extrême à la simple pensée ou exposition à l'objet ou la situation phobique.</>,
          <><b>Trouble anxieux généralisé (TAG) :</b> anxiété excessive et persistante. Tu peux penser systématiquement que les choses vont mal se passer et que tu ne pourras pas y faire face. Tu peux mal supporter l'incertitude et penser que l'inquiétude est un moyen de régler tes problèmes.</>,
          <><b>Anxiété sociale :</b> peur intense des situations sociales. Par exemple, tu peux craindre de prendre la parole en public, de te rendre à un rendez-vous ou à des événements sociaux. Tu as ainsi peur d'être mal considéré·e ou jugé·e par les autres.</>,
          <><b>Trouble panique :</b> crises de panique récurrentes et imprévisibles, avec des symptômes physiques intenses (palpitations, sensation d'étouffer, vertiges, etc.). Tu peux aussi craindre d'avoir de nouvelles crises et éviter les situations où elles pourraient survenir.</>,
          <><b>Trouble du stress post-traumatique (TSPT) :</b> anxiété et reviviscence (à travers des pensées, des rêves ou des flashbacks) d'un événement traumatique (accident, agression, catastrophe naturelle, etc.) en tant que victime ou témoin. Tu peux avoir des flashbacks, des cauchemars, une hypervigilance et éviter les situations qui te rappellent le traumatisme.</>,
          <><b>Agoraphobie :</b> peur intense des situations où il pourrait être difficile de s'échapper ou d'obtenir de l'aide en cas de crise de panique. Tu peux être amené·e à éviter les lieux publics, les transports en commun, ou même sortir de chez toi.</>,
          <><b>Trouble obsessionnel-compulsif (TOC) :</b> obsessions (pensées intrusives et récurrentes) et compulsions (comportements répétitifs) qui interfèrent avec ta vie quotidienne. Tu peux ressentir le besoin de vérifier constamment des choses, de suivre des rituels ou d'éviter certaines situations.</>,
        ]} />

        <p className="texte">Dans les faits, il est fréquent de cumuler plusieurs troubles anxieux. Si le degré d'anxiété devient trop élevé, cela peut mener à une dépression, et encourager la personne à consommer davantage d'alcool ou de drogues, ce qui a pour effet d'accroitre les troubles anxieux.</p>

        <ExternalLinkBlock
        resources={ressourcesTroubles}
      />

        <ChiffresGroup chiffres={chiffresAnxiete} />
      </div>

      <Separateur />

      <div id="personne-concernee">
        <h1 className="titre">Je suis concerné·e</h1>



        <p className="texte">Il existe de nombreux moyens de traiter l'anxiété et les troubles anxieux. Tu pourras trouver de l'aide auprès de <b>l'infirmière de l'école</b> (qui pourra aussi te rediriger vers le ou la professionnel·le adapté·e), de ton ou ta <b>médecin généraliste</b> ou d'un·e <b>psychologue</b>. De nombreuses thérapies permettent de prendre en charge les différents troubles (thérapie cognitivo-comportementale par exemple).</p>

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
      <ExternalLinkBlock resources={ressourcesInfos}/>

      <p className="texte">
        Si tu as besoin d'autres ressources d'aide, de parler ou d'être écouté·e, tu peux aussi t'orienter vers les services suivants :
      </p>

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


        <h2 className="sous-titre-2">En cas de crise de panique</h2>

        <p className="texte">
          Une crise de panique (ou attaque de panique) est une montée soudaine d'une peur intense ou d'un inconfort intense, accompagnée de symptômes physiques et cognitifs. Elle atteint son pic en quelques minutes et peut durer de quelques minutes à une heure. Les symptômes peuvent inclure des palpitations, une sensation d'étouffer, des douleurs thoraciques, des vertiges, des sueurs, des tremblements, des nausées, des engourdissements ou des sensations de déréalisation ou de dépersonnalisation.
        </p>

        <p className="texte">
          <b> Si tu penses faire une crise de panique, voici quelques conseils pour t'aider à la gérer : </b>
        </p>

        <BulletList items={[
          "Essaie de rester calme et rappelle-toi que la crise de panique n'est pas dangereuse.",
          "Si tu en ressens le besoin, concentre-toi sur ta respiration : inspire profondément par le nez, puis expire lentement par la bouche.",
          "Si possible, trouve un endroit calme où tu peux te détendre.",
          "Parle à quelqu'un en qui tu as confiance de ce que tu ressens. Signale-lui que tu fais une crise de panique afin qu'il puisse t'aider de manière appropriée.",
        ]} />


      </div>

      <Separateur />


      <div id="accompagnant">
        <h1 className="titre">J’accompagne ou je suis témoin</h1>


        <ListeNumerotee
          title="Plan d'action pour les Premiers Secours en Santé Mentale (Plan AÉRER)" 
          subtitle="Comment aider un personne victime de troubles anxieux ?" 
          items={items_aerer}
        />

        <p className="mise-avant">
          Pour se rétablir des troubles anxieux, il faut faire face aux situations sources d'anxiété, et non les éviter. 
          </p>
        <p className="mise-avant">
          Ne minimise pas les peurs de la personne, avec des phrases comme « Ce n’est pas grave » ou « Il n’y a pas de quoi avoir peur ». Ne lui dis pas de « s'endurcir » ou de « relativiser ».
        </p>

        <ExternalLinkBlock resources={aerer} />

        <h2 className="sous-titre-2">Assister en cas d'attaque de panique</h2>

        <BulletList items={[
          "Les symptômes d'une crise de panique sont similaires à ceux d'un infarctus ou d'une autre urgence médicale. Si tu n'es pas sûr·e que la personne fait une crise de panique, applique les premiers secours physiques et appelle les urgences (15 ou 112).",
          "Dans le cas d'une attaque de panique, reste calme et rassure la personne en indiquant que tu es là pour l'aider. Si elle accepte ton aide, applique les étapes suivantes.",
          "Invite-la à se diriger vers un endroit calme et fais-la s'asseoir.",
          "Utilise des phrases courtes. Demande ce qui pourrait l'aider à se sentir mieux, ou s'il a un contact à appeler.",
          "Ne minimise pas ses sensations. Explique lui que même si la crise est effrayante, elle n'est ni dangereuse, ni mortelle. "
        ]} />

        <ExternalLinkBlock resources={crise_panique} />

     <h2 className="sous-titre-2">Pour aller + loin : la formation PSSM</h2>
      
            <TextImageRight  text="Les PSSM (Premiers Secours en Santé Mentale) constituent l’aide qui est apportée à une personne touchée par un trouble ou une crise de santé mentale. Les premiers secours sont donnés jusqu’à ce qu’une aide professionnelle puisse être apportée ou jusqu’à ce que la crise soit résolue. Ils sont l’équivalent en santé mentale des gestes de premiers secours qui, eux, apportent une aide physique à la personne en difficulté.
            Ouverte à toutes et tous, et sans pré-requis, la formation PSSM vise à apprendre à savoir réagir face à une détresse psychique : entrer en contact, soutenir et orienter.
            La formation est dispensée à Centrale par l'infirmière : si tu es intéressé·e, tu peux la contacter ou voir avec l'association Peer Care." 
            imageSrc="/assets/logo-pssm.svg" />
      </div>
      
      <Separateur />

<p className="texte">
  <em>
    <b>Sources :</b> Méta-analyses sur l’anxiété chez les étudiant·e·s, Santé Psy Étudiant, Fil Santé Jeunes, Nightline Lyon, 3114 — prévention suicide, Manuel PSSM
  </em>
</p>

    </div>
  );
};

export default Anxiete;
