// Structure similaire à la page alcool, adaptée aux drogues
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
  { label: "La drogue, moi et les autres", target: "ensemble" },
  { label: "Je consomme", target: "conso" },
  { label: "Je suis témoin", target: "temoin" },
];

const conseils = [
  { subtitle: "Évite de consommer seul·e ou dans un endroit inconnu" },
  { subtitle: "Informe un proche de ta situation si tu consommes" },
  { subtitle: "Hydrate-toi régulièrement et mange avant de consommer" },
  { subtitle: "Ne mélange pas substances, médicaments et alcool" },
];


const data2 = [
  { number: "12,8%", title: "des élèves", description: "consomment du cannabis" },
  { number: "4,7%", title: "des élèves", description: "consomment d'autres stupéfiants" }
];

const risques = [
  "Addiction et perte de contrôle",
  "Troubles mentaux : anxiété, paranoïa, dépression",
  "Dommages physiques : cœur, foie, système nerveux",
  "Accidents graves ou comportements à risque",
  "Problèmes judiciaires (possession, usage, revente)"
];

const resources2 = [
  {
    link: "https://www.drogues-info-service.fr/",
    imageSrc: "/assets/droguesinfoservice.png",
    label: "Drogues info service",
    description: "Un site pour s'informer sur les drogues et leurs conséquences",
  },
  {
    link: "https://www.addictaide.fr/",
    imageSrc: "/assets/addictaide.jpg",
    label: "Addict'aide",
    description: "Trouve des outils et des ressources pour ne plus être seul·e face à l’addiction",
  },
  {
    link: "https://addictions-france.org/etablissements/",
    imageSrc: "/assets/cjc.png",
    label: "Consultations jeunes consommateurs",
    description: "Trouve une CJC pour t'accompagner près de chez toi",
  }
];

const resources4 = [
  {
    link: "/soumission",
    emoji: "💊",
    label: "Soumission chimique",
    description: "Comment réagir si je pense avoir été drogué·e à mon insu ?",}
  ];

  const items = [
  { title: "Rester calme", subtitle: "Lui parler doucement et calmement, ne pas faire de gestes brusques" },
  { title: "Sécuriser", subtitle: "L'éloigner du danger et s'installer dans un endroit calme" },
  { title: "Surveiller", subtitle: "Assure-toi qu'il/elle respire normalement et ne le/la laisse pas seul·e" },
  { title: "Alerter", subtitle: "Si mise en danger grave : appeler le 112 ou le 15" },
  {title : "📢 Attention", subtitle : "En cas de soirée sur le campus, s'adresser au personnel Peer'Care pour la prise en charge et l'appel au numéro d'astreinte"}
];


const resources5 = [
  {
    link: "/detente",
    emoji: "🧘‍♀️",
    label: "Détente & relaxation",
    description: "Des alternatives à la drogue pour se détendre et gérer le stress",
  }];

  const resources6 = [
  {
    link: "/sommeil",
    emoji: "",
    label: "Sommeil",
    description: "Des conseils pour améliorer la qualité de ton sommeil",
  },
  {
    link: "/depression",
    emoji: "",
    label: "Dépression",
    description: "Des ressources pour comprendre et gérer la dépression sans l'aggraver",
  }];


const Stupefiants = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Consommation de stupéfiants</h1>
      <Navbar links={navLinks} />

      <div id="ensemble">
        <h1 className="titre">La drogue, moi et les autres</h1>
      </div>
    
      <div id="resume-conseils">
        <p className="mise-avant">Les stupéfiants altèrent la perception, la mémoire et le comportement, avec des <b>risques de dépendance</b>, de troubles mentaux et de dommages physiques. Leur consommation, interdite par la loi, peut avoir de <b>graves conséquences</b> sur la santé, la vie sociale, les études et l’avenir.</p>
      </div>

      <h2 className="sous-titre-2">Quels sont les effets des stupéfiants ?</h2>

      <p className="texte">Consommer des stupéfiants peut faire apparaître <b>plusieurs de ces symptômes</b>, quasi systématiquement et <b>pendant plusieurs heures après consommation</b> :</p>
      <BulletList items={[
    "Perte de contrôle et confusion",
    "Hallucinations et perception altérée",
    "Troubles de la mémoire et de l’attention",
    "Anxiété, paranoïa ou agitation",
    "Risque de dépendance",
    "Fatigue, troubles du sommeil et malaises"
]} />

<p className="texte">Tu ressens ces symptômes, alors que tu n'as pas consommé de stupéfiants ? Tu as peut-être été <b>drogué·e à ton insu</b>.</p>
<ExternalLinkBlock resources={resources4} />

      <p className="texte">La consommation de stupéfiants à l'école est une réalité souvent minimisée. Elle n'est pas anodine : elle peut avoir des conséquences graves, tant pour soi que pour les autres. Légalement, elle est interdite, mais aussi <b>risquée</b> pour la santé, les relations sociales et les études.</p>

      <ChiffresGroup chiffres={data2} />



      <h2 className="sous-titre-2">Quels sont les risques ?</h2>
      <BulletList items={risques} />


      <ExternalLinkBlock resources={resources6} />

      <Separateur />
      <div id="conso">
        <h1 className="titre">Je consomme</h1>
      </div>

      <div id='resume-conseils'>
        <p className="mise-avant">La consommation de stupéfiants peut être motivée par la curiosité, la recherche de plaisir, le stress ou la pression sociale, mais elle comporte toujours des risques. <b>Réfléchir à ses raisons</b>, <b>réduire les dangers</b> et <b>demander de l’aide</b> en cas de dépendance sont essentiels pour protéger sa santé et son avenir.</p>
      </div>

      <h2 className="sous-titre-2">Pourquoi je consomme ?</h2>
      <p className="texte">Les raisons de consommer des stupéfiants sont variées et personnelles. Voici quelques motivations courantes :</p>
      <BulletList items={[
    "Curiosité et envie d'expérimenter",
    "Pression sociale ou désir d'appartenance",
    "Recherche de plaisir ou d'évasion",
    "Gestion du stress, de l'anxiété ou des émotions",
    "Influence de l'entourage ou des pairs"
]} />

<ExternalLinkBlock resources={resources5} />

      <Quote
        text="« C'est qu'une fois de temps en temps, ça va pas me faire de mal. »"
      />

      <p className="texte">Il est important de réfléchir aux <b>raisons qui te poussent à consommer</b> et d'évaluer si cela correspond à ce que toi, tu veux. En soirée, la <b>pression sociale</b> peut être forte et t'inciter à prendre un joint, mais <b>consommer de la drogue ne te rend pas plus fort·e ou plus intéressant·e</b>. Les effets ne durent pas que le temps d'une soirée et peuvent avoir des conséquences sur le long terme, surtout si tu développes une dépendance.</p>

      <ImageTextPopup
        image="/assets/cartes/valet_trefle.png"
        title="La carte V♣"
        shortText="Prévention sur la consommation occasionnelle"
        longText="Consommer une substance psychoactive, ce n’est pas anodin. Elle agit sur ton cerveau, modifie tes sensations, ta perception, ton comportement. Cela peut créer une illusion de contrôle, mais chaque prise comporte des risques – immédiats ou différés, et peut aggraver des problèmes de santé déjà existants."
        textButton="⤢ Agrandir la carte"
      />

      <h2 className="sous-titre-2">Réduire les risques</h2>

      <p className="texte">Si tu consommes, il est important de le faire en ayant conscience des risques, et en prenant des <b>précautions</b>. Voici quelques conseils pour réduire les risques liés à l’usage :</p>
      <ListeNumerotee title="Réduire les risques liés à la consommation de stupéfiants" items={conseils} />


      <h2 className="sous-titre-2">Je consomme régulièrement</h2>
      

      <ImageTextPopup
        image="/assets/cartes/10_trefle.png"
        title="La carte 10♣"
        shortText="Prévention sur l'addiction aux stupéfiants"
        longText="Une consommation régulière de stupéfiants peut facilement mener à une dépendance, qui se manifeste par un besoin impérieux de consommer, des difficultés à contrôler sa consommation, et des symptômes de sevrage en cas d'arrêt. Tu peux aussi développer une tolérance, nécessitant des doses plus élevées pour obtenir les mêmes effets. La dépendance peut avoir des conséquences graves sur ta santé physique et mentale, ainsi que sur ta vie sociale et scolaire."
        textButton="⤢ Agrandir la carte"
      />

      <p className="texte">Si tu consommes régulièrement des stupéfiants et que tu observes des <b>changements dans ton comportement</b>, notamment lorsque tu n'es plus sous l'influence, il est important de te demander si tu n'es pas en train de <b>développer une dépendance</b>.</p>
      <p className='texte'>Voici quelques signes qui peuvent indiquer une consommation qui devient problématique :</p>
      <BulletList items={[
    "Tu ressens un besoin impérieux de consommer",
    "Tu as du mal à contrôler ou réduire ta consommation",
    "Tu négliges tes responsabilités scolaires, sociales ou familiales",
    "Tu continues à consommer malgré les problèmes que cela engendre",
    "Tu ressens des symptômes de sevrage lorsque tu ne consommes pas"
]} />


      <h2 className="sous-titre-2">Je m'informe et je me fais aider</h2>
      <p className="texte"><b>Arrêter n'est pas facile, surtout seul·e</b> alors n'aies pas honte de demander de l'aide. Des associations existent pour t'accompagner dans cette démarche et tu peux en parler à un·e professionnel·le, sans jugement.</p>

      
     <ExternalLinkBlock
        resources={resources2}></ExternalLinkBlock>


      <h1 className="sous-titre-2">Besoin d’en parler ?</h1>

      <ContactCard
        image="/assets/cjc.png"
        title="Consultations Jeunes Consommateurs"
        subtitle="Gratuit, confidentiel, sans jugement pour les jeunes consommateurs"
        phone=""
        email=""
        hours="Sur RDV en CJC"
        textButton="Trouver une CJC"
        link="https://addictions-france.org/etablissements/"
      />

      <ContactCard
        image="/assets/nightline_logo.png"
        title="Nightline Lyon"
        subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
        phone="04 85 30 00 10"
        email=""
        hours="Tous les soirs de 21h à 2h30"
        textButton="Voir le site web"
        link="https://www.nightline.fr/lyon"
      />

      <Separateur />

      <div id="temoin">
        <h1 className="titre">Je suis témoin</h1>
      </div>

      <div id='resume-conseils'>
        <p className="mise-avant">Si tu remarques qu’une personne consomme de plus en plus, parle-lui <b>avec bienveillance</b> et encourage-la à demander de l’aide, <b>sans jugement</b>. En cas de danger immédiat, reste calme, sécurise l’environnement, surveille son état et appelle les secours si nécessaire.</p>
      </div>
      <p className="texte">Tu remarques qu'une personne consomme de plus en plus régulièrement ?N'hésite pas à lui parler et à l'encourager à demander de l'aide. Mais surtout, <b>reste à l'écoute et sans jugement</b>. L'important est de <b>montrer que tu te soucies de son bien-être</b> et de l'accompagner dans sa démarche, s'il/elle décide d'agir pour réduire sa consommation.</p>

      <p className="texte">Tu vois quelqu’un se mettre en danger sous l’effet de drogues et tu veux l'aider ? Voici quelques conseils :</p>
      
            <ListeNumerotee 
          
          title="Plan d'action pour aider une personne sous l'emprise de drogues"
          items={items}
      />
      
      <Separateur />

      <p className="texte"><em><b>Sources :</b> Drogues Info Service, Addict’Aide, OFDT, Santé Publique France</em></p>
    </div>
  );
};

export default Stupefiants;