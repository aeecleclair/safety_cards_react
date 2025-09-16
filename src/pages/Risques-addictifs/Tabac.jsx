// Structure similaire à la page drogues, adaptée au tabac et au vapotage
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
  { label: "Le tabac, moi et les autres", target: "ensemble" },
  { label: "Je fume", target: "conso" },
  { label: "Je suis témoin", target: "temoin" },
];

const conseils = [
  { subtitle: "Fixe-toi des limites et note tes consommations" },
  { subtitle: "Évite de fumer au réveil : c’est le moment le plus addictif" },
  { subtitle: "Hydrate-toi régulièrement et fais du sport pour réduire l’envie" },
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
  }
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
      <Navbar links={navLinks} />

      <div id="ensemble">
        <h1 className="titre">Le tabac, moi et les autres</h1>
      </div>
    
      <div id="resume-conseils">
        <p className="mise-avant">La cigarette entraîne une <b>dépendance à la nicotine</b>. Si le vapotage semble moins nocif que le tabac, il n’est pas sans risque, surtout pour les cigarettes électroniques contenant de la nicotine. Le tabagisme reste la première cause de <b>maladies évitables</b> en France et impacte aussi la vie sociale, les études et l’avenir.</p>
      </div>

      <h2 className="sous-titre-2">Quels sont les effets et risques du tabac ?</h2>

      <BulletList items={[
    "Dépendance rapide à la nicotine",
    "Essoufflement, toux et baisse des performances sportives",
    "Irritations de la gorge, mauvaise haleine, vieillissement prématuré de la peau",
    "Jaunissement des dents et odeur persistante",
    "Maladies respiratoires, cardiovasculaires et cancers",
    "Coût financier régulier",
]} />

      <h2 className="sous-titre-2">Quels sont les effets de la cigarette électronique ?</h2>
      <p className="texte">La cigarette électronique (ou vapoteuse) chauffe un liquide mélangé à des arômes et du propylène glycol pour produire une vapeur inhalée imitant la fumée d'une cigarette. Les SEDEN (système de délivrance de la nicotine) sont des vapoteuses contenant un peu de nicotine tandis que les SEDESN (systèmes de délivrance sans nicotine) n'en contiennent pas.</p>

      <p className="texte">Les SEDEN contenant moins de nicotine que dans la cigarette classique, elles servent souvent de transition aux fumeurs pour réduire leur consommation de tabac. Ces deux formes de cigarettes électroniques sont composées de substances chimiques dont les effets à long terme sont encore mal connus. Les risques suivants sont néanmoins à prendre en compte :</p>
      <BulletList items={[
    "Dépendance à la nicotine (sauf e-liquide sans nicotine)",
    "Irritations de la gorge et de la bouche",
    "Toux et essoufflement",
    "Inconnu : effets à long terme encore mal étudiés"
]} />


      <ChiffresGroup chiffres={data2} />

      <h2 className="sous-titre-2">Le tabagisme passif</h2>
      <p className="texte">Fumer ou vapoter à proximité d’autres personnes les expose aux substances toxiques. Le tabagisme passif est responsable de nombreux problèmes de santé, notamment chez les enfants et les personnes vulnérables.</p>
      <BulletList items={[
    "Irritations des yeux, du nez et de la gorge",
    "Toux, essoufflement et risque accru d'infections respiratoires",
    "Effets néfastes sur le développement des enfants (prématurité, faible poids à la naissance)",
    "Augmentation du risque de maladies cardiovasculaires"
]} />

      <p className="texte">Il est important de respecter les espaces non-fumeurs et de ne pas vapoter dans les lieux publics fermés pour protéger la santé des autres. De plus, si quelqu'un est exposé à la fumée ou à la vapeur de ta cigarette, essaye de prendre en compte son bien-être en lui demandant si cela le dérange ou bien éloigne-toi si tu sens que cela le gêne.</p>


      <Separateur />
      <div id="conso">
        <h1 className="titre">Je fume</h1>
      </div>

      <div id='resume-conseils'>
        <p className="mise-avant">La consommation de tabac ou l’usage de la cigarette électronique peuvent être motivés par la curiosité, la gestion du stress, l’habitude sociale ou la dépendance. Mais <b>réfléchir à ses raisons</b> et <b>se fixer des objectifs</b> est essentiel pour reprendre le contrôle et protéger sa santé.</p>
      </div>



      <h2 className="sous-titre-2">Pourquoi je fume ou je vape ?</h2>
      <BulletList items={[
    "Curiosité ou influence des pairs",
    "Gestion du stress ou de l’anxiété",
    "Habitude sociale (pause clope, soirées)",
    "Dépendance physique à la nicotine",
    "Fausse impression que la vape n’est pas nocive"
]} />

      <ExternalLinkBlock resources={resources5} />

      <Quote
        text="« J’arrêterai quand je veux, pour l’instant ce n’est pas grave. »"
      />

      <p className="texte">Il est courant de sous-estimer la dépendance. Mais plus on commence tôt, plus il est difficile d’arrêter. La nicotine agit sur le cerveau et <b>renforce rapidement l’envie de fumer ou de vapoter</b>. Les effets négatifs se voient parfois après plusieurs années, mais la dépendance s’installe dès les premières semaines.</p>

      <ImageTextPopup
        image="/assets/cartes/as_trefle.png"
        title="La carte A♣"
        shortText="Prévention sur la consommation de tabac"
        longText="Une consommation régulière de tabac ou de nicotine mène très souvent à une dépendance. Elle se traduit par un besoin impérieux de fumer ou de vapoter, une difficulté à arrêter et des symptômes de manque (irritabilité, anxiété, troubles du sommeil). Plus tôt tu agis, plus il est facile de réduire ou d’arrêter."
        textButton="⤢ Agrandir la carte"
      />

      <h2 className="sous-titre-2">Réduire les risques</h2>

      <ListeNumerotee title="Réduire les risques liés au tabac et au vapotage" items={conseils} />

      <h2 className="sous-titre-2">Je fume régulièrement</h2>

      <ImageTextPopup
        image="/assets/cartes/2_trefle.png"
        title="La carte 2♣"
        shortText="Prévention sur le vapotage"
        longText="Vapoter est souvent considéré comme moins nocif que fumer, mais cela ne signifie pas qu'il est sans risque. La cigarette électronique contient des milliers de substances chimiques, dont des dizaines sont cancérigènes. Vapoter réduit certes certains risques mais maintient la dépendance, au geste et à l'habitude d'achat et de consommation d'une substance chimique pouvant se révéler nocive pour la santé."
        textButton="⤢ Agrandir la carte"
      />

      <p className="texte">Voici quelques signes d’une dépendance installée :</p>
      <BulletList items={[
    "Besoin de fumer/vapoter dès le matin",
    "Difficulté à passer une journée sans nicotine",
    "Envie irrépressible en situation de stress",
    "Symptômes de manque quand tu arrêtes (irritabilité, nervosité)",
    "Échec répété des tentatives d’arrêt"
]} />

      <h2 className="sous-titre-2">Je m’informe et je me fais aider</h2>
      <p className="texte"><b>Arrêter seul·e est difficile</b>, mais des ressources existent pour accompagner ta démarche. Tu n’as pas à avoir honte d’en parler : chaque tentative compte et augmente tes chances de succès.</p>

     <ExternalLinkBlock resources={resources2} />

      <h1 className="sous-titre-2">Besoin d’en parler ?</h1>

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
        <p className="mise-avant">Si tu vois un proche fumer ou vapoter de plus en plus, parle-lui <b>avec bienveillance</b> et encourage-le à chercher du soutien, <b>sans jugement</b>. Ton écoute et ton aide peuvent être décisives.</p>
      </div>
      <p className="texte">Parler de consommation de tabac ou de vape peut être délicat. L’important est de <b>montrer que tu te soucies de son bien-être</b> et de l’accompagner dans sa démarche s’il/elle souhaite réduire ou arrêter.</p>

      <Separateur />

      <p className="texte"><em><b>Sources :</b> Tabac Info Service, Addict’Aide, Santé Publique France, Cancer Environnement</em></p>
    </div>
  );
};

export default Tabac;