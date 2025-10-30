// Structure similaire à la page drogues, adaptée au tabac et au vapotage
import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";


const navLinks = [
  { label: "Le tabac, moi et les autres", target: "ensemble" },
  { label: "Je fume", target: "conso" },
  { label: "Je suis témoin", target: "temoin" },
];

const conseils = [
  { subtitle: "Fixe-toi des limites et note tes consommations" },
  { subtitle: "Évite de fumer au réveil : c'est le moment le plus addictif" },
  { subtitle: "Hydrate-toi régulièrement et fais du sport pour réduire l'envie" },
  { subtitle: "Ne compense pas par le vapotage excessif : la nicotine reste addictive" },
];


const data2 = [
  { number: "32%", title: "des lycéens", description: "ont déjà fumé une cigarette" },
  { number: "22%", title: "des jeunes", description: "ont déjà expérimenté la cigarette électronique" }
];

const risques = [
  "Forte dépendance à la nicotine",
  "Maladies respiratoires et cardiovasculaires",
  "Augmentation du risque de cancer (poumons, gorge, bouche)",
  "Vieillissement prématuré de la peau et jaunissement des dents",
  "Coût financier important sur le long terme"
];

const principes = [
  "Ne fume pas en présence de non-fumeurs, particulièrement d'enfants.",
  "Respecte les zones fumeurs et non-fumeurs quand tu es dans un lieu public.",
  "Aie le réflexe de sortir quand tu es dans un endroit qui ne prévoit pas de lieux fumeurs."
]

const resources2 = [
  {
    link: "https://www.tabac-info-service.fr/",
    imageSrc: "/assets/tabacinfoservice.png",
    label: "Tabac info service",
    description: "Des conseils et un accompagnement pour arrêter de fumer",
  },
  {
    link: "https://www.addictaide.fr/",
    imageSrc: "/assets/addictaide.jpg",
    label: "Addict'aide",
    description: "Outils et soutien pour réduire ou arrêter la consommation de tabac",
  },
  {
    link: "https://mois-sans-tabac.tabac-info-service.fr/",
    imageSrc: "/assets/mois_sans_tabac.png",
    label: "Mois sans tabac",
    description: "Une campagne annuelle pour arrêter de fumer en novembre",
  },
];

const resources5 = [
  {
    link: "/detente",
    emoji: "🧘‍♀️",
    label: "Détente & relaxation",
    description: "Des alternatives pour gérer le stress sans tabac ni vape",
  }];

const Tabac = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Tabac et vapotage</h1>
      <Sommaire links={navLinks} />

      <div id="ensemble">
        <h1 className="titre">Le tabac, moi et les autres</h1>
      </div>
    
      <div id="resume-conseils">
        <p className="mise-avant">La cigarette entraîne une <b>dépendance à la nicotine</b>. Si le vapotage semble moins nocif que le tabac, il n'est pas sans risque, surtout pour les cigarettes électroniques contenant de la nicotine. Le tabagisme reste la première cause de <b>maladies évitables</b> en France et impacte aussi la vie sociale, les études et l'avenir.</p>
      </div>

      <h2 className="sous-titre-2">Quels sont les effets et risques du tabac ?</h2>

      <ImageTextPopup
        image="/assets/cartes/as_trefle.png"
        title="La carte A♣"
        shortText="Prévention sur la consommation de tabac"
        longText="Une consommation régulière de tabac ou de nicotine mène très souvent à une dépendance. Elle se traduit par un besoin impérieux de fumer ou de vapoter, une difficulté à arrêter et des symptômes de manque (irritabilité, anxiété, troubles du sommeil). Plus tôt tu agis, plus il est facile de réduire ou d'arrêter."
        textButton="⤢ Agrandir la carte"
      />

      <p className="texte">Le tabac contient <b>plus de 4000 substances chimiques</b>, dont au moins 70 sont cancérigènes. Fumer une cigarette libère environ 10 mg de nicotine, une substance très addictive qui agit rapidement sur le cerveau. Voici les principaux risques liés à la consommation de tabac :</p>
      <BulletList items={[
    "Dépendance rapide à la nicotine",
    "Essoufflement, toux et baisse des performances sportives",
    "Irritations de la gorge, mauvaise haleine, vieillissement prématuré de la peau",
    "Jaunissement des dents et odeur persistante",
    "Maladies respiratoires, cardiovasculaires et cancers",
    "Coût financier régulier",
]} />

      <h2 className="sous-titre-2">Quels sont les effets de la cigarette électronique ?</h2>
      <p className="texte">La <b>cigarette électronique (ou vapoteuse)</b> chauffe un liquide mélangé à des arômes et du propylène glycol pour produire une vapeur inhalée imitant la fumée d'une cigarette. Les <b>SEDEN</b> (système de délivrance de la nicotine) sont des vapoteuses contenant un peu de <b>nicotine</b> tandis que les <b>SEDESN</b> (systèmes de délivrance sans nicotine) <b>n'en contiennent pas.</b></p>

      <p className="texte">Les SEDEN contiennent moins de nicotine que dans la cigarette classique : elles servent souvent de <b>transition aux fumeurs</b> pour réduire leur consommation de tabac. Ces deux formes de cigarettes électroniques sont composées de substances chimiques dont les effets à long terme sont encore mal connus. Les risques suivants sont néanmoins à prendre en compte :</p>
      <BulletList items={[
    "Dépendance à la nicotine (sauf e-liquide sans nicotine)",
    "Irritations de la gorge et de la bouche",
    "Toux et essoufflement",
    "Inconnu : effets à long terme encore mal étudiés"
]} />


      <ChiffresGroup chiffres={data2} />

      <h2 className="sous-titre-2">Le tabagisme passif</h2>
      <p className="texte">Fumer ou vapoter à proximité d'autres personnes <b>les expose aux substances toxiques</b>. Le tabagisme passif est responsable de nombreux problèmes de santé, notamment chez les enfants et les personnes vulnérables :</p>
      <BulletList items={[
    "Irritations des yeux, du nez et de la gorge",
    "Toux, essoufflement et risque accru d'infections respiratoires",
    "Effets néfastes sur le développement des enfants (prématurité, faible poids à la naissance)",
    "Augmentation du risque de maladies cardiovasculaires"
]} />

      <p className="texte">Il est important de <b>respecter les espaces non-fumeurs</b> et de <b>ne pas vapoter dans les lieux publics fermés</b> pour protéger la santé des autres. De plus, si quelqu'un est exposé à la fumée ou à la vapeur de ta cigarette, essaye de prendre en compte son bien-être en lui demandant si cela le dérange ou bien éloigne-toi si tu sens que cela le gêne.</p>


      <Separateur />
      <div id="conso">
        <h1 className="titre">Je fume</h1>
      </div>

      <div id='resume-conseils'>
        <p className="mise-avant">La consommation de tabac ou l'usage de la cigarette électronique peuvent être motivés par la curiosité, la gestion du stress, l'habitude sociale ou la dépendance. Mais <b>réfléchir à ses raisons</b> et <b>se fixer des objectifs</b> est essentiel pour reprendre le contrôle et protéger sa santé.</p>
      </div>



      <h2 className="sous-titre-2">Pourquoi je fume ou je vape ?</h2>
      <BulletList items={[
    "Curiosité ou influence des pairs",
    "Gestion du stress ou de l'anxiété",
    "Habitude sociale (pause clope, soirées)",
    "Dépendance physique à la nicotine",
    "Fausse impression que la vape n'est pas nocive"
]} />

      <ExternalLinkBlock resources={resources5} />

      <Quote
        text="« J'arrêterai quand je veux, pour l'instant ce n'est pas grave. »"
      />

      <p className="texte">Il est courant de sous-estimer la dépendance. Mais plus on commence tôt, plus il est difficile d'arrêter. La nicotine agit sur le cerveau et <b>renforce rapidement l'envie de fumer ou de vapoter</b>. Les effets négatifs se voient parfois après plusieurs années, mais la dépendance s'installe dès les premières semaines.</p>

      <h2 className="sous-titre-2">Je fume régulièrement (tabac ou vapotage) </h2>

      <ImageTextPopup
        image="/assets/cartes/2_trefle.png"
        title="La carte 2♣"
        shortText="Prévention sur le vapotage"
        longText="Vapoter est souvent considéré comme moins nocif que fumer, mais cela ne signifie pas qu'il est sans risque. La cigarette électronique contient des milliers de substances chimiques, dont des dizaines sont cancérigènes. Vapoter réduit certes certains risques mais maintient la dépendance : au geste, à l'habitude d'achat et à la consommation d'une substance chimique pouvant se révéler nocive pour la santé."
        textButton="⤢ Agrandir la carte"
      />

      <p className="texte">Voici quelques signes d'une dépendance installée :</p>
      <BulletList items={[
    "Besoin de fumer/vapoter dès le matin",
    "Difficulté à passer une journée sans nicotine",
    "Envie irrépressible en situation de stress",
    "Symptômes de manque quand tu arrêtes (irritabilité, nervosité)",
    "Échec répété des tentatives d'arrêt"
]} />

      
      <h2 className="sous-titre-2">Je souhaite réduire ma consommation</h2>
      <p className="texte">Réduire sa consommation de tabac ou de vapotage est un premier pas important. Voici quelques conseils pour t'aider dans cette démarche :</p>
      <ListeNumerotee title="Réduire les risques liés au tabac et au vapotage" items={conseils} />

      <p className="texte"><b>Arrêter seul·e est difficile</b>, mais des ressources existent pour accompagner ta démarche. Tu n'as pas à avoir honte d'en parler : chaque tentative compte et augmente tes chances de succès.</p>

      <p className="texte">Si tu souhaites arrêter de fumer, ne pas te sentir seul·e est important. Le <b>Mois sans tabac</b> est une campagne nationale qui a lieu chaque année en novembre. Elle vise à encourager les fumeurs à arrêter de fumer en leur proposant des ressources et un accompagnement. C'est l'occasion pour rencontrer et participer à des activités de soutien avec des personnes dans la même situation. </p>

     <ExternalLinkBlock resources={resources2} />

      <h1 className="sous-titre-2">Besoin d'en parler ?</h1>

      <ContactCard
        image="assets/tabacinfoservice.png"
        title="Tabac Info Service"
        subtitle="Un accompagnement personnalisé et gratuit pour arrêter de fumer"
        phone="39 89"
        email=""
        hours="7j/7 de 8h à 20h"
        textButton="Voir le site web"
        link="https://www.tabac-info-service.fr/"
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

      <h2 className="sous-titre-2">Je ne souhaite pas arrêter de fumer</h2>
      <p className="texte">Si tu n'envisages pas d'arrêter de fumer pour le moment, essaye tout de même de <b>respecter ces principes</b> :</p>
      <BulletList items={principes} />


      <Separateur />

      <div id="temoin">
        <h1 className="titre">Je suis témoin</h1>
      </div>

      <div id='resume-conseils'>
        <p className="mise-avant">Si tu vois un·e proche fumer ou vapoter de plus en plus, parle-lui <b>avec bienveillance</b> et encourage-le/la à chercher du soutien, <b>sans jugement</b>. Ton écoute et ton aide peuvent être décisives.</p>
      </div>
      <p className="texte">Parler de consommation de tabac ou de vape peut être délicat. L'important est de <b>montrer que tu te soucies de son bien-être</b> et de l'accompagner dans sa démarche s'il/elle souhaite réduire ou arrêter.</p>

      <p className="texte">Si un·e ami·e se confie à toi sur sa consommation et son envie d'arrêter, apporte-lui ton soutien. L'encourager, le/la féliciter et lui rappeler que chaque petit pas compte <b>est essentiel</b>. Tu peux aussi l'encourager à chercher des ressources ou à en parler à un·e professionnel·le, ou à participer à des groupes de parole ou des opérations comme le Mois sans Tabac.</p>


      <Separateur />

      <p className="texte"><em><b>Sources :</b> Tabac Info Service, Addict'Aide, Santé Publique France, Cancer Environnement</em></p>
    </div>
  );
};

export default Tabac;