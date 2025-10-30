import React from "react";
import "../../App.css";

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ListeNumerotee from "../../components/Listes";

const navLinks = [
  { label: "Les douleurs menstruelles", target: "douleurs" },
  { label: "Comprendre l'endométriose", target: "definition" },
  { label: "Je suis concerné·e", target: "temoignages" },
  { label: "Je veux aider", target: "aidant" },
];

const chiffres = [
  { number: "10%", title: "des femmes", description: "sont atteintes d'endométriose. Ce chiffre ne concerne que les cas recensés." },
  { number: "7 ans", title: "c'est le délai moyen", description: "pour obtenir un diagnostic en France actuellement" },
  { number: "2 à 3 jours", title: "de la vie active", description: "perdus par mois à cause des douleurs menstruelles sévères" },
];

const ressources = [
  {
    link: "https://www.endometriose.fr/",
    imageSrc: "/assets/endo.jpg",
    label: "EndoFrance",
    description: "Association de soutien, d'information et de sensibilisation autour de l'endométriose",
  },
  {
    link: "https://sante.gouv.fr/soins-et-maladies/prises-en-charge-specialisees/endometriose/article/orientation-et-parcours-des-femmes-presentant-des-symptomes-d-endometriose",
    imageSrc: "/assets/sante-france.png",
    label: "Ministère de la Santé",
    description: "Informations officielles sur l'endométriose, ses symptômes, les traitements et le parcours de soin",
  },
];


const items3 = [
  { title: "Crois-la", subtitle: "La douleur est réelle même si elle ne se voit pas" },
  { title: "Sois patient·e", subtitle: "Écoute sans minimiser ce que la personne ressent et propose ton aide concrète" },
  { title: "Informe-toi", subtitle: "Fais tes recherches sur la maladie pour mieux comprendre ce qu'elle traverse et l'accompagner" },
  { title: "Ne minimise jamais sa douleur ou sa fatigue", subtitle: "Propose ton aide pour les tâches quotidiennes, les rendez-vous médicaux si elle le souhaite" },
];

const Endometriose = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Endométriose & Douleurs menstruelles</h1>

      <Sommaire links={navLinks} />


      < div id="douleurs">
        <h1 className="titre">Les douleurs menstruelles</h1>
      </div>


      <div id="resume-details">
          <p className="mise-avant">Les douleurs menstruelles sont fréquentes et peuvent parfois être très intenses. <b>Si elles deviennent invalidantes, elles peuvent révéler un problème comme l'endométriose.</b> Il ne faut pas les minimiser et consulter un·e professionnel·le de santé.</p>
      </div>
      <ImageTextPopup
        image="./assets/cartes/3_coeur.png"
        title="La carte 3♥"
        shortText="Une carte pour mieux comprendre cette maladie invisible"
        longText="Une fois par mois, on esquisse un sourire pour garder la face devant les autres, alors qu'à l'intérieur, c'est la tempête. Tout peut sembler aller bien en apparence mais les douleurs menstruelles, souvent épuisantes voire invalidantes, ne sont jamais anodines. Ne les minimise pas : écoute ton corps, fais attention et n'hésite pas à consulter un·e professionnel·le de santé si la douleur te paraît inhabituelle."
        textButton="⤢ Agrandir la carte"
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
        <h1 className="titre">Comprendre l'endométriose</h1>
      </div>

        <div id="resume-conseils">
          <p className="mise-avant">L'endométriose est une <b>maladie chronique</b> qui touche environ 1 femme sur 10 et provoque des douleurs souvent intenses et invalidantes. Les signes à surveiller : <b>règles très douloureuses</b>, <b>douleurs pendant les rapports</b>, <b>fatigue chronique</b>, <b>troubles digestifs ou urinaires</b>, etc.</p>
        </div>
      

      <p className="texte">
      L'<b>endométriose</b> est une maladie gynécologique chronique qui reste encore mal connue. Elle se caractérise par la présence de tissu similaire à celui de l'endomètre (la muqueuse utérine) en dehors de l'utérus. Ce tissu réagit aux hormones de la même manière que l'endomètre, ce qui peut entraîner des <b>douleurs fortes</b>, particulièrement pendant les <b>règles</b>, mais aussi lors des <b>rapports sexuels</b>, en urinant, en allant à la selle, voire même en dehors des périodes de règles.
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
        Si tu te reconnais dans les symptômes de l'endométriose, n'hésite pas à <b>en parler avec un·e professionnel·le de santé</b>. Il est important de ne pas minimiser ta douleur : tu n'es pas seule. Il existe des structures pour t'écouter, t'accompagner dans ton diagnostic ou dans ta prise en charge.
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

        <p className="texte">Si tu manques de moyens pour te fournir des protections menstruelles, n'hésite pas à te rendre sur la page dédiée de ce site web, qui <b>répertorie</b> des associations ou des structures qui peuvent t'aider.</p>

      <ExternalLinkBlock
        resources={[
          {
            link: "/prec_mens",
            emoji: "🩸",
            label: "Précarité menstruelle",
            description: "Quelles solutions pour les personnes en situation de précarité ?",
          },
        ]}
      />


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
        Tu connais une personne qui souffre de douleurs menstruelles intenses ou d'endométriose ? Ton soutien peut faire une vraie différence.</p>
        
        <ListeNumerotee 
          title="Plan d'action pour aider une personne qui souffre de douleurs menstruelles"
          items={items3}
          
      />
      



      <p className="texte">
        L'endométriose, c'est aussi une maladie qui peut avoir un <b>impact fort sur la santé mentale</b>. Accompagner, c'est aussi parfois aider à trouver un·e thérapeute, ou simplement être présent·e.
      </p>

      <Separateur />

      <p className="texte"><em><b>Sources :</b> EndoFrance, INSERM, Ministère de la Santé, HAS</em></p>
    </div>
  );
};

export default Endometriose;
