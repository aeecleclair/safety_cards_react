import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import ImageTextPopup from "../../components/Cartes";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import { image } from "framer-motion/client";


const navLinks = [
  { label: "Définition et constat", target: "definition" },
  { label: "Formes fréquentes et signes d'alerte", target: "formes" },
  { label: "Que faire ?", target: "agir" },
  { label: "Aides et ressources", target: "aide" },
];

const chiffresCyberharcelement = [
  { number: "3,7%", title: "des étudiants", description: "ont déclaré avoir été victimes de harcèlement (échantillon de 378 étudiants)" },
  { number: "3018", title: "Numéro d'aide", description: "pour les victimes de cyberharcèlement (anonyme et gratuit)" },
  { number: "24h/24", title: "Réseaux sociaux", description: "Les attaques peuvent arriver à tout moment, y compris la nuit" }
];


const formesFrequentes = [
  "Messages insultants ou humiliants à répétition",
  "Montages ou mèmes moqueurs partagés sans consentement",
  "Création de faux comptes nuisibles ou usurpation d'identité",
  "Diffusion de captures d'écran privées",
  "Propagation de rumeurs ou fausses informations",
  "Flood sur les réseaux ou plateformes étudiantes",
  "Commentaires malveillants sur l’apparence, l’orientation, l’origine, le handicap…",
  "Sondages trolls ou moqueurs",
  "Exclusion volontaire de groupes ou événements numériques"
];

const signesAlerte = [
  "Messages malveillants reçus régulièrement",
  "Moqueries ou insultes dans un groupe de discussion",
  "Exclusion inexpliquée d’un groupe ou d’un événement",
  "Découverte de contenus moqueurs à son sujet (mèmes, sondages…)",
  "Stress ou anxiété à l’idée de consulter ses messages",
  "Modification de son comportement : retrait, silence, évitement",
  "Troubles du sommeil, de l’alimentation ou de la concentration"
];

const comportementsMinimises = [
  "« C’est juste un mème, détends-toi ! »",
  "« C’était une blague, t’as pas d’humour ? »",
  "« C’est pas grave, tout le monde se fait tailler ici. »"
];


const reconnaitrePoints = [
  "Messages insultants, moqueries, menaces répétées via réseaux sociaux ou messageries.",
  "Diffusion de photos ou vidéos humiliantes sans consentement.",
  "Création de faux profils pour nuire à quelqu'un.",
  "Exclusion volontaire et répétée d’un groupe en ligne.",
  "Partage de rumeurs, calomnies ou informations personnelles (doxing)."
];

const conseilsAction = [
  {
    title: "Ne restez pas isolé.e",
    subtitle: "Parlez à une personne de confiance. Le silence entretient le harcèlement."
  },
  {
    title: "Collectez les preuves",
    subtitle: "Captures d'écran, messages, identifiants... nécessaires pour agir."
  },
  {
    title: "Signalez les contenus",
    subtitle: "Utilisez les outils de signalement pour bloquer ou supprimer les contenus."
  },
  {
    title: "Contactez une structure d’aide",
    subtitle: "Des dispositifs gratuits et anonymes existent pour vous accompagner."
  },
  {
    title: "Portez plainte si nécessaire",
    subtitle: "Le cyberharcèlement est puni par la loi, même sans connaître l’identité du harceleur."
  }
];

const droitsVictimes = [
  "Déposer plainte, même sans connaître le harceleur.",
  "Demander le retrait d’un contenu à une plateforme.",
  "Contacter la CNIL en cas d’atteinte à la vie privée.",
  "Être accompagné par un service d’aide ou un référent."
];

const preuvesConserver = [
  "Captures d’écran avec date et heure.",
  "Messages, e-mails, commentaires conservés.",
  "Identifiants de comptes harceleurs (pseudo, lien, URL).",
  "Témoignages de personnes ayant assisté aux faits."
];

const responsabilites = [
  "Les plateformes doivent proposer un moyen simple de signalement et modérer les contenus.",
  "Les établissements ont une obligation de prévention et de réaction (charte, référents, procédures internes).",
  "Le non-respect de ces obligations peut être sanctionné."
];

const ressourceDiagnostic = [
  {
    link: "https://www.cybermalveillance.gouv.fr/diagnostic",
    label: "Diagnostiquer une situation",
    description: "Un outil en ligne pour savoir si ce que tu vis relève de cybermalveillance."
  }
];

const ressourcesExterne = [

  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F32239",
    label: "Service public",
    description: "Étapes de la démarche à suivre.",
    imageSrc: "/assets/rep-logo.png"
  }
];

const mythesCyberharcelement = [
  {
    title: "« Ce n’est qu’une blague »",
    subtitle: "L’humour ne doit pas blesser. Le ressenti de la victime est central."
  },
  {
    title: "« C’était privé »",
    subtitle: "Même en privé, des propos humiliants peuvent constituer un délit."
  },
  {
    title: "« Je n’ai reçu qu’un message »",
    subtitle: "Même un message isolé peut être puni par la loi (injure, menace, atteinte à la vie privée…), même s’il ne s’agit pas encore de cyberharcèlement."
  },
  {
    title: "« Ce n’est pas grave, ça va passer »",
    subtitle: "Le cyberharcèlement a des conséquences graves."
  }
];

const Cyberharcelement = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Cyberharcèlement</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h2 className="titre">Définition</h2>
        <p className="texte">
          Le cyberharcèlement consiste en des agissements malveillants répétés, dans un cadre public ou restreint, qui peuvent prendre différentes formes : intimidations, insultes, menaces, rumeurs, publication de photos ou vidéos compromettantes, etc. Ils peuvent être le fait d’une seule personne ou de plusieurs individus et se dérouler sur les réseaux sociaux, messageries, forums, blogs, etc. Les conséquences du cyberharcèlement peuvent être dramatiques pour les victimes : dépression, décrochage scolaire ou professionnel, troubles psychologiques ou émotionnels, violence, suicide, etc. Le cyberharcèlement est puni par la loi qui prévoit de lourdes sanctions contre ses auteurs.
        </p>
      </div>
      <div id="constat">
        <h2 className="titre">Constat</h2>
        <p className="texte">
          Le cyberharcèlement touche une partie importante de la population étudiante. Des dispositifs comme la charte « Cpas1OPTION » ou le programme PEER CARE existent. Le cyberharcèlement est une forme de harcèlement exercée via des outils numériques : réseaux sociaux, messageries, forums, e-mails, etc. Il s'agit d'attaques répétées visant à humilier, intimider, isoler ou nuire psychologiquement. Reconnu par la loi française (article 222-33-2-2 du Code pénal), il est aggravé en cas de harcèlement en groupe, sur un mineur ou une personne vulnérable, ou s’il pousse la victime à se suicider.
        </p>
        <ChiffresGroup chiffres={chiffresCyberharcelement} />

        <p className="texte">
            Tout le monde peut être concerné par le cyberharcèlement, pas seulement les ados ou influenceurs. Étudiants, membres de BDE ou victimes silencieuses peuvent l’être. Il y a cependant des groupes plus exposés que les autres : personnes LGBTQIA+, racisées, non francophones, femmes, personnes en situation de handicap.
        </p>
        

      </div>

      <ImageTextPopup
        image="./assets/work_in_progress.jpg"
        title="La carte 5&diams;"
        shortText="Cyberharcèlement : Comprendre et agir"
        longText="Cyberharcèlement : Comprendre et agir"
        textButton="⤢ Agrandir la carte"
      />

      <Separateur />

      <div id="formes">
        <h2 className="titre">Formes fréquentes</h2>
        <p className="texte">
          Le cyberharcèlement peut prendre différentes formes, parfois discrètes, mais toujours nuisibles. Voici les situations les plus souvent rencontrées en milieu étudiant.
        </p>
        <BulletList items={formesFrequentes}/>

        <h2 className = "sous-titre-2">Tu penses être victime de cyberharcèlement ?</h2>
        <p className="texte">Tu peux vérifier si ce que tu vis correspond à de la cybermalveillance grâce à cet outil du gouvernement.</p>
        <ExternalLinkBlock
          resources={ressourceDiagnostic}
        />

        <div id="mythes">
         <h2 className = "sous-titre-2">Idées reçues sur le cyberharcèlement</h2>
          <ListeNumerotee title="Ce n’est pas une excuse" subtitle="Déconstruire les croyances" items={mythesCyberharcelement} />
        </div>
      </div>

      <div id="signes">
        <h2 className="titre">Signes d’alerte</h2>
        <p className="texte">
          Certains comportements ou ressentis peuvent indiquer qu’on est victime de cyberharcèlement. Être attentif à ces signes permet de réagir à temps.
        </p>
        <BulletList items={signesAlerte} />

        <p className="texte">
          De plus, certaines paroles ou actions sont parfois perçues comme « normales » ou banales, mais peuvent pourtant relever du harcèlement. Il est essentiel de ne pas sous-estimer leur impact.
        </p>
        <BulletList items={comportementsMinimises} />
        <p className="texte">  
          Même si l’intention semble légère, ce qui compte, c’est l’effet ressenti par la victime.
        </p>

      </div>


      <Separateur />

      <div id="agir">
        <h2 className="titre">Que faire ?</h2>
        <ListeNumerotee title="Réagir face au cyberharcèlement" subtitle="Étapes essentielles pour se protéger" items={conseilsAction} />

        <ExternalLinkBlock resources={ressourcesExterne} />

                  <ContactCard
          image="/assets/3018.png" 
          title="3018"
          subtitle="Cyberharcèlement,  harcèlement scolaire, revenge porn, chantage à la webcam, usurpation d’identité, VSS, exposition à des contenus violents. "
          phone="3018"
          email=""
          hours="7j/7, de 9h à 23h"
          textButton="Voir le site web"
          link="https://e-enfance.org/besoin-daide/"
          bgColor="#2736f0"
          textColor="#ffffff"
        />



      

          <h2 className = "sous-titre-2">Comment signaler sur les réseaux sociaux ?</h2>
          <ul className="bullet-points">
            <li><b>Instagram :</b> options → signaler.</li>
            <li><b>Snapchat :</b> appui long → signaler.</li>
            <li><b>Facebook :</b> options → signaler.</li>
            <li><b>Twitter/X :</b> icône … → signaler.</li>
            <li><b>Discord :</b> clic droit + mode développeur → signaler.</li>
          </ul>
          <p className="texte">Les plateformes peuvent suspendre ou bannir les comptes nuisibles.</p>

          <h2 className = "sous-titre-2">Les preuves à conserver</h2>
          <BulletList items={preuvesConserver} />

      </div>

      <h2 className = "sous-titre-2">Tes droits en tant que victime</h2>

        <BulletList items={droitsVictimes} />

        <h2 className = "sous-titre-2">Les responsabilités des plateformes </h2>
        <BulletList items={responsabilites} />


      <Separateur />

    

      <div id="aide">
        <h2 className="titre">Autres aides et ressources</h2>
        
      </div>

      <ContactCard
          image="/assets/etudiant_gouv.jpg"
          title="CNAÉ"
          subtitle="Ecoute, accompagnement et signalement pour les étudiants"
          hours="Lundi à vendredi : 10h à 21h, Samedi : 10h à 14h"
          email="cnae@enseignementsup.gouv.fr"
          phone="0800 737 800"
          textButton="Voir le site"
          link="https://www.etudiant.gouv.fr/fr/cnae"
          bgColor="#ffffff"
          textColor="#000000"
        />

                  <ContactCard
          image="/assets/nightline_logo.png" 
          title="Nightline Lyon"
          subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
          phone="04 85 30 00 10"
          email=""
          hours="Tous les soirs, de 21h à 2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />



      <Separateur />

      <p className="texte">
        <em><b>Sources :</b> CNAÉ, e-Enfance, Nightline, Ministère de l’Enseignement supérieur, ONPV, Santé publique France</em>
      </p>
    </div>
  );
};

export default Cyberharcelement;
