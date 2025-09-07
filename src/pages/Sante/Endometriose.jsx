import React from "react";
import "../../App.css";

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";

const navLinks = [
  { label: "Douleurs menstruelles", target: "douleurs" },
  { label: "Comprendre l'endométriose", target: "definition" },
  { label: "Je suis concernée", target: "temoignages" },
  { label: "Je veux aider", target: "aidant" },
];

const chiffres = [
  { number: "10%", title: "des femmes", description: "sont atteintes d'endométriose" },
  { number: "7 ans", title: "c'est le délai moyen", description: "pour obtenir un diagnostic en France" },
  { number: "2 à 3 jours", title: "de la vie active", description: "perdus par mois à cause des douleurs menstruelles sévères" },
];

const ressources = [
  {
    link: "https://www.endometriose.fr/",
    imageSrc: "/assets/endo.jpg",
    label: "EndoFrance",
    description: "Association de soutien, d'information et de sensibilisation autour de l’endométriose",
  },
  {
    link: "https://www.solidarites-sante.gouv.fr/soins-et-maladies/maladies/maladies-chroniques/article/l-endometriose",
    imageSrc: "/assets/sante-france.png",
    label: "Ministère de la Santé",
    description: "Informations officielles sur l’endométriose, ses symptômes, les traitements et le parcours de soin",
  },
];

const Endometriose = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Endométriose & Douleurs menstruelles</h1>

      <Navbar links={navLinks} />


      < div id="douleurs">
        <h1 className="titre">Douleurs menstruelles</h1>
      </div>

      <ImageTextPopup
        image="./assets/cartes/3_coeur.png"
        title="La carte 3♥"
        shortText="Une carte pour mieux comprendre cette maladie invisible"
        longText=""
        textButton="⤢ Agrandir la carte"
      />

      <p className="texte">
        Les douleurs menstruelles sont fréquentes et peuvent être très intenses. Elles sont souvent considérées comme normales, mais elles peuvent être le signe d’un problème de santé sous-jacent, comme l’endométriose. Il est important de ne pas minimiser ces douleurs et de consulter un·e professionnel·le de santé si elles deviennent invalidantes.
      </p>

      <Quote 
        text="Les règles douloureuses ne sont pas normales. Elles doivent être prises au sérieux, écoutées et investiguées."
        author="Haute Autorité de Santé"
      />
    
    <p className="texte">
      Des douleurs menstruelles anormalement fortes voire paralysantes ne sont <b>pas anodines</b>. Elles peuvent par exemple être le signe d'une de ces pathologies :
    </p>

      <BulletList
        items={[
          "Endométriose : tissu utérin hors de l'utérus provoquant des douleurs pelviennes intenses",
          "Adénomyose : infiltration de l'endomètre dans le muscle utérin causant règles abondantes et douloureuses",
          "Fibromes utérins : tumeurs bénignes pouvant entraîner crampes et saignements excessifs",
          "Dysménorrhée primaire : douleurs liées à des contractions utérines excessives",
        ]}
      />

        <p className="texte">
          Si tu as le <b>moindre doute</b> concernant la cause de douleurs trop intenses, parles-en à ton médecin ou <b>prends rendez-vous</b> chez un gynécologue ou une sage-femme habilitée à réaliser des actes de suivi gynécologique. Ces derniers pourront te faire passer des examens complémentaires pour déterminer ou non si tu souffres d'une de ces pathologies.
        </p>
    
      <Separateur/>

      <div id="definition">
        <h1 className="titre">Comprendre l’endométriose</h1>
      </div>

      

      <p className="texte">
      L’<b>endométriose</b> est une maladie gynécologique chronique qui reste encore mal connue. Elle se caractérise par la présence de tissu similaire à celui de l'endomètre (la muqueuse utérine) en dehors de l’utérus. Ce tissu réagit aux hormones de la même manière que l'endomètre, ce qui peut entraîner des <b>douleurs fortes</b>, particulièrement pendant les <b>règles</b>, mais aussi lors des <b>rapports sexuels</b>, en urinant, en allant à la selle, voire même en dehors des périodes de règles.
      </p>



      <ChiffresGroup chiffres={chiffres} />

      <h2 className="sous-titre-2">Les signes à surveiller</h2>

      <BulletList
        items={[
          "Règles très douloureuses et invalidantes",
          "Douleurs pendant ou après les rapports sexuels",
          "Fatigue chronique",
          "Troubles digestifs ou urinaires cycliques",
          "Infertilité ou difficultés à concevoir",
        ]}
      />

      <YouTubeVideo url="https://www.youtube.com/watch?v=7fbxDcv3eLo" />

      <Separateur />

      <div id="temoignages">
        <h1 className="titre">Je suis concerné·e</h1>
      </div>

      <p className="texte">
        Si tu te reconnais dans les symptômes de l’endométriose, n’hésite pas à <b>en parler avec un·e professionnel·le de santé</b>. Il est important de ne pas minimiser ta douleur : tu n’es pas seule. Il existe des structures pour t’écouter, t’accompagner dans ton diagnostic ou dans ta prise en charge.
      </p>


        <div className="column">
          <ContactCard
            image="/assets/planning-familial.jpg"
            title="Planning Familial"
            subtitle="Accompagnement, écoute, information sur la santé sexuelle"
            phone="0 800 08 11 11"
            hours="Lundi au samedi : 9h - 20h"
            textButton="En savoir plus"
            link="https://www.planning-familial.org/"

            bgColor="#ffffff"    //informations facultatives
            textColor="#d20b1d"
          />
        </div>



      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Pour mieux comprendre la maladie, ses impacts et les accompagnements possibles"
        resources={ressources}
      />

      <Separateur />

      <div id="aidant">
        <h1 className="titre">Je veux aider</h1>
      </div>

      <p className="texte">
        Tu connais une personne qui souffre de douleurs menstruelles intenses ou d’endométriose ? Ton soutien peut faire une vraie différence. Écoute-la, valide sa douleur, propose ton aide pour ses rendez-vous médicaux ou ses tâches quotidiennes quand elle est en crise.
      </p>

      <BulletList
        items={[
          "Crois-la : la douleur est réelle même si elle ne se voit pas",
          "Sois patient·e et propose ton aide concrète",
          "Informe-toi sur la maladie pour mieux comprendre ce qu’elle traverse",
          "Ne minimise jamais sa douleur ou sa fatigue",
        ]}
      />

      <p className="texte">
        L’endométriose, c’est aussi une maladie qui peut avoir un <b>impact fort sur la santé mentale</b>. Accompagner, c’est aussi parfois aider à trouver un·e thérapeute, ou simplement être présent·e.
      </p>

      <ExternalLinkBlock
        title="Autres sujets à explorer"
        resources={[
          {
            link: "/prec_mens",
            emoji: "🩸",
            label: "Précarité menstruelle",
            description: "Quelles solutions pour les personnes en situation de précarité ?",
          },
        ]}
      />

      <Separateur />

      <p className="texte"><em><b>Sources :</b> EndoFrance, INSERM, Ministère de la Santé, HAS</em></p>
    </div>
  );
};

export default Endometriose;
