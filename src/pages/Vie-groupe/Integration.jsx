import React from "react";
import "../../App.css";
import "./Integration.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";

const navLinks = [
  { label: "Integration ou bizutage ?", target: "definition" },
  { label: "Pourquoi c’est grave ?", target: "risques" },
  { label: "Sanctions légales", target: "loi" },
  { label: "Comment réagir", target: "agir" },
  { label: "Aides et ressources", target: "ressources" },
];

const pratiquesBizutage = [
  "Faire boire de l’alcool en grande quantité ou sous pression",
  "Rituels humiliants (se déshabiller, simuler des actes sexuels, etc.)",
  "Obligation de ramper, nettoyer ou porter des tenues dégradantes",
  "Privation de sommeil pendant un week-end d’intégration",
  "Contraintes physiques : pompes, sauts, coups légers mais répétés",
  "Rituels secrets interdits de révélation",
  "Pressions psychologiques : menaces d’exclusion du groupe",
];

const consequencesBizutage = [
  "Humiliation et perte d’estime de soi",
  "Blessures physiques accidentelles (voire hospitalisations)",
  "Stress post-traumatique ou anxiété",
  "Abandon d’études ou isolement",
  "Normalisation de la violence dès l’entrée dans l’enseignement supérieur",
  "Risque juridique lourd pour les organisateurs",
];

const sanctionsLegales = [
  "Le bizutage est un délit (article 225-16-1 du Code pénal)",
  "Peine pouvant aller jusqu’à 6 mois de prison et 7 500 € d’amende",
  "Sanctions aggravées en cas de violence, menace, ou actes discriminants",
  "Les établissements peuvent engager des procédures disciplinaires",
  "Aucune nécessité d’intention de nuire pour que le délit soit constitué",
];

const temoignagesMythes = [
  {
    title: "« C’est juste pour rire »",
    subtitle: "Ce qui est drôle pour certains peut être humiliant pour d’autres. L’humour ne doit jamais être imposé."
  },
  {
    title: "« J’ai accepté, donc ce n’est pas du bizutage »",
    subtitle: "Le consentement sous pression n’est pas un vrai consentement. Ce n’est pas parce qu’on ne dit rien qu’on est d’accord."
  },
  {
    title: "« Tout le monde est passé par là »",
    subtitle: "La répétition d’une pratique nocive ne la rend pas légitime. Une tradition peut être toxique."
  },
  {
    title: "« Ce n’est pas grave, c’est juste une blague entre potes »",
    subtitle: "Les conséquences psychologiques peuvent être graves et durables, même si l’intention n’était pas méchante."
  }
];

const conseilsAction = [
  {
    title: "N’aie pas honte de parler",
    subtitle: "Tu n’as rien fait de mal. Ce sont les auteurs du bizutage qui sont en tort, pas toi."
  },
  {
    title: "Garde des preuves",
    subtitle: "Photos, messages, témoignages peuvent être utiles si tu veux signaler."
  },
  {
    title: "Préviens un référent ou une personne de confiance",
    subtitle: "Même anonymement, tu peux alerter ton établissement ou une structure extérieure."
  },
  {
    title: "Signale les faits à ton établissement ou au rectorat",
    subtitle: "Ils ont l’obligation de te protéger et d’agir."
  },
  {
    title: "Tu peux porter plainte",
    subtitle: "Même des pratiques dites “bon enfant” peuvent être sanctionnées si elles causent un trouble."
  }
];

const ressourcesExterne = [
  {
    link: "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006165305",
    label: "Code pénal - Article 225-16-1 à 225-16-3",
    description: "Textes de loi interdisant le bizutage en France"
  },
  {
    link: "https://www.etudiant.gouv.fr/fr/soirees-etudiantes-1684",
    label: "Portail officiel de l'État français dédié aux étudiants",
    description: "Guide d'organisation d'une soirée étudiante"
  },
  {
    link: "https://www.nightline.fr/",
    label: "Nightline",
    description: "Écoute étudiante gratuite et anonyme, tous les soirs"
  },
  {
    link: "https://commentonsaime.fr/mes-etudes/on-ma-demande-de-faire-des-trucs-bizarres-en-soiree/",
    label: "Comment on s'aime - En avant toute(s)",
    description: "Témoignage, ligne d'écoute et conseils"
  }
];

const Bizutage = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Pratiques d’intégration</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h2 className="titre">Intégration ou Bizutage ?</h2>

        <p className="texte">
          L’<strong>intégration</strong> désigne l’ensemble des actions organisées pour accueillir les nouveaux arrivants dans un groupe (étudiants, élèves, collègues…). Elle vise à créer du lien social, à transmettre les codes de l’établissement ou de la promo, et à favoriser une bonne ambiance. Elle peut prendre la forme de jeux, de soirées, de parrainages, de repas partagés ou d’activités collectives (exemple : la QI). <strong>L’objectif est l’inclusion, le respect et le volontariat.</strong>
        </p>

        <p className="texte">
          Le <strong>bizutage</strong>, lui, correspond à des <strong>pratiques imposées</strong> à une personne nouvellement arrivée dans un groupe, dans le but de « tester », « marquer » ou « soumettre » cette personne. Il peut s’agir de défis humiliants, de pressions pour boire, de mises à l’écart, de violences physiques ou psychologiques, de tenues dégradantes, etc. Même si cela est présenté comme une tradition ou un rite d’entrée, <strong>le bizutage est interdit par la loi française</strong>.
        </p>

        <h3 className="soustitre">Les différences clés</h3>
        <div className="tableau-container">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th>Intégration</th>
                <th>Bizutage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Activité proposée librement</td>
                <td>Activité imposée ou subie</td>
              </tr>
              <tr>
                <td>Respect des limites et du consentement</td>
                <td>Pression sociale ou contrainte</td>
              </tr>
              <tr>
                <td>Objectif : accueillir et inclure</td>
                <td>Objectif : tester, soumettre ou humilier</td>
              </tr>
              <tr>
                <td>Climat bienveillant et festif</td>
                <td>Risque de violence, d’humiliation ou de mise en danger</td>
              </tr>
              <tr>
                <td>Légal</td>
                <td><strong>Interdit par la loi (article 225-16-1 du Code pénal)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="texte">
          <strong>À retenir :</strong><br />
          Ce n’est pas parce que “tout le monde l’a fait” que c’est acceptable. <br />
          Une activité ne devient pas moins grave parce qu’on “rit après”. <br />
          Une bonne intégration n’a jamais besoin d’humilier.
        </p>
      </div>

      <Separateur />

      <div id="risques">
        <h2 className="titre">Pourquoi c’est grave ?</h2>

        <p className="texte">
          Le bizutage, même déguisé en « tradition » ou en « rite d’intégration », peut avoir de lourdes conséquences. 
          Humiliation, pression psychologique, atteinte à la dignité… Ces actes laissent des marques, parfois durables.
        </p>

        <p className="texte">
          Derrière l’argument du « fun » ou de « l’ambiance », on retrouve souvent des situations où des personnes sont forcées, 
          mises mal à l’aise, ou contraintes à des comportements qu’elles n’auraient jamais acceptés autrement. 
          Ces pratiques ne sont ni anodines, ni sans impact.
        </p>

        <BulletList items={consequencesBizutage} />

        <div className="encart">
          <p className="texte">
            👉 <strong>Il n’y a aucune honte à avoir si tu en as été victime.</strong> Ce n’est pas toi le problème, 
            c’est la pratique qui est illégale et violente. L’intégration n’a pas à passer par l’humiliation.
          </p>
          <p className="texte">
            On peut créer des liens, partager des souvenirs et accueillir les nouveaux étudiants sans jamais franchir la ligne.
          </p>
        </div>

        <h3 className="soustitre">Quels actes relèvent du bizutage ?</h3>
        <p className="texte">
          Le Code pénal considère comme bizutage tout acte humiliant ou dégradant, même avec consentement, 
          subi dans un cadre scolaire ou associatif. Voici quelques exemples de pratiques interdites :
        </p>

        <BulletList items={pratiquesBizutage} />
      </div>

      <Separateur />

      <div id="loi">
        <h2 className="titre">Sanctions légales</h2>
        
        <p className="texte">
          Le bizutage est strictement interdit par la loi française. Peu importe que l’acte soit présenté comme « symbolique », « traditionnel » ou « sans gravité » : dès lors qu’il porte atteinte à la dignité, à l’intégrité physique ou psychologique d’une personne, il peut être sanctionné.
        </p>

        <BulletList items={sanctionsLegales} />

        <p className="texte">
          En vertu de l'article 225-16-1 du Code pénal, le bizutage est passible d’une peine pouvant aller jusqu’à 1 an d’emprisonnement et 15 000 € d’amende. Ces sanctions peuvent être aggravées en cas de blessures ou de violences répétées.
        </p>

        <ExternalLinkBlock
          title="Pour aller plus loin"
          subtitle="Informations officielles sur la loi contre le bizutage"
          resources={[
            {
              link: "https://www.service-public.fr/particuliers/vosdroits/F2275",
              label: "Service Public – Bizutage",
              description: "Définition, sanctions prévues, et recours possibles pour les victimes."
            }
          ]}
        />
      </div>

      <Separateur />

      <div id="agir">
        <h2 className="titre">Comment réagir ?</h2>

        <p className="texte">
          Que tu sois témoin ou victime, il existe des moyens concrets d’agir contre le bizutage. Il ne s’agit pas de « casser l’ambiance » ou « d’exagérer », mais de refuser que des pratiques humiliantes soient banalisées. Tu n’es pas seul·e, des structures existent pour t’écouter et t’accompagner.
        </p>

        <ExternalLinkBlock
          resources={[
            {
              link: "https://commentonsaime.fr/mes-etudes/comment-reagir-quand-je-vois-une-situation-malaisante-en-soiree/",
              label: "Comment réagir quand je vois une situation malaisante en soirée ?",
              description: "Un guide utile pour mieux repérer les comportements problématiques et apprendre à intervenir sans se mettre en danger."
            }
          ]}
        />

        <ListeNumerotee
          title="Victime ou témoin : tu peux agir"
          subtitle="Des réflexes simples pour protéger et alerter"
          items={conseilsAction}
        />
        <h2>Casser les idées reçues</h2>
        <p className="texte">
          Certaines croyances persistent autour du bizutage, souvent pour le minimiser ou le faire passer pour un « rite de passage ». Mais il est essentiel de rappeler qu’une pratique nocive reste problématique, même si elle est « acceptée » ou « attendue ».
        </p>

        <ListeNumerotee
          title="Le bizutage reste un bizutage, même s’il est accepté"
          subtitle="Déconstruire les fausses excuses"
          items={temoignagesMythes}
        />
      </div>


      <Separateur />

      <div id="ressources">
        <h2 className="titre">Aides et ressources</h2>
        <ExternalLinkBlock
          title="Structures disponibles pour les étudiants"
          subtitle="Des dispositifs gratuits, anonymes et bienveillants"
          resources={ressourcesExterne}
        />
      </div>

      <p className="texte">
        <em><b>Sources :</b> Service Public, Code pénal, Nightline, ANEF, Ministère de l’Enseignement Supérieur, témoignages étudiants</em>
      </p>
    </div>
  );
};

export default Bizutage;
