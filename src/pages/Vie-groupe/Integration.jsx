import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import { em, i, image, link } from "framer-motion/client";
import ImageTextPopup from "../../components/Cartes";

const navLinks = [
  { label: "Integration ou bizutage ?", target: "definition" },
  { label: "Pourquoi c’est grave ?", target: "risques" },
  { label: "Comment réagir", target: "agir" },
  { label: "J'organise l'intégration", target: "assos" },
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

const data = [
  { number: "70.3%", title: "des étudiant·e·s", description: "estiment les pratiques d'intégration centralienne acceptables" },
  { number: "9.5%", title: "des étudiant·e·s", description: "pensent que ces pratiques peuvent mettre mal à l'aise dans certaines situations" },
  { number: "7.2%", title: "des étudiant·e·s", description: "se disent victime de bizutage sur le campus" },
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
    subtitle: "La répétition d’une pratique nocive ne la rend pas légitime. Une tradition peut être toxique, il faut alors la remettre en question"
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

const resources = [
  {
    link: "https://montetasoiree.com/",
    imageSrc: "/assets/monte-ta-soiree.png",
    label: "Monte ta soirée",
    description: "Un 1er outil pour organiser des soirées plus responsables",
  },
  {
    link: "https://pimp-my-party.fr/",
    imageSrc: "/assets/pimp-my-party.png",
    label: "Pimp my party",
    description: "Un 2ème outil pour organiser des soirées en toute sécurité",
  },
  {
    link: "https://www.contrelebizutage.fr/ressources/chartes-et-guides/",
    imageSrc: "/assets/cncb.jpg",
    label: "Comité national contre le bizutage",
    description: "Chartes et guides pour organiser des soirées étudiantes",
  },
];

const effet_groupe = [
  {
    label: "Effet de groupe",
    description: "Comment y faire face ?",
    emoji: "🙅",
    link: "/groupe"
  },
  
];

const Bizutage = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Pratiques d’intégration</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h2 className="titre">Intégration ou Bizutage ?</h2>

        <ImageTextPopup
        image="./assets/cartes/dame_trefle.png"
        title="La carte D♣"
        shortText="Intégration et bizutage : les différencier"
        longText="Intégration et bizutage : les différencier"
        textButton="⤢ Agrandir la carte"
        suit="trefle"
      />

        <p className="texte">
          L’<strong>intégration</strong> désigne l’ensemble des actions organisées pour accueillir les nouveaux arrivants dans un groupe (étudiants, élèves, collègues…). Elle vise à créer du lien social, à transmettre les codes de l’établissement ou de la promo, et à favoriser une bonne ambiance. Elle peut prendre la forme de jeux, de soirées, de parrainages, de repas partagés ou d’activités collectives (exemple : la QI). <strong>L’objectif est l’inclusion, le respect et le volontariat.</strong>
        </p>

        <p className="texte">
          Le <strong>bizutage</strong>, lui, correspond à des <strong>pratiques imposées</strong> à une personne nouvellement arrivée dans un groupe, dans le but de « tester », « marquer » ou « soumettre » cette personne. Il peut s’agir de défis humiliants, de pressions pour boire, de mises à l’écart, de violences physiques ou psychologiques, de tenues dégradantes, etc. Même si cela est présenté comme une tradition ou un rite d’entrée, <strong>le bizutage est interdit par la loi française</strong>.
        </p>

        <h3 className="sous-titre-2">Les différences clé</h3>
        <div className="tableau-container">
          <table className="tableau">
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
                <td><strong>Interdit par la loi (article 225-16-1 du Code pénal, 7500€ d'amende et 6 mois d'emprisonnement)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mise-avant">
          <strong>À retenir :</strong><br />
          Ce n’est pas parce que “tout le monde l’a fait” que c’est acceptable. <br />
          Une activité ne devient pas moins grave parce qu’on “rit après”. <br />
          Une bonne intégration n’a jamais besoin d’humilier.
        </p>
      </div>

        <h2 className="sous-titre-2">Quels actes relèvent du bizutage ?</h2>
        <p className="texte">
          Le Code pénal considère comme bizutage tout acte humiliant ou dégradant, même avec consentement, 
          subi dans un cadre scolaire ou associatif. Voici quelques exemples de pratiques interdites :
        </p>

        <BulletList items={pratiquesBizutage} />

        <ChiffresGroup chiffres={data} />



        <h2 className="sous-titre-2">Sanctions légales</h2>

        <p className="texte">
          Le bizutage est strictement interdit par la loi française. Peu importe que l’acte soit présenté comme « symbolique », « traditionnel » ou « sans gravité » : dès lors qu’il porte atteinte à la dignité, à l’intégrité physique ou psychologique d’une personne, il peut être sanctionné.
        </p>

        <BulletList items={sanctionsLegales} />


        <ExternalLinkBlock
          title="Pour aller + loin"
          subtitle="Informations officielles sur la loi contre le bizutage"
          resources={[
                        {
              link: "https://www.contrelebizutage.fr",
              label: "Contre le bizutage",
              description: "Association de lutte contre le bizutage, avec ressources et témoignages.",
              imageSrc: "/assets/cncb-logo.jpg"
            },
            {
              link: "https://www.service-public.fr/particuliers/vosdroits/F2275",
              label: "Service Public – Bizutage",
              description: "Définition, sanctions prévues, et recours possibles pour les victimes.",
              imageSrc: "/assets/rep-logo.png"
            }
          ]}
        />


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
          Ces pratiques ne sont ni anodines, ni sans impact :
        </p>

        <BulletList items={consequencesBizutage} />


      </div>

      <Separateur />



      <div id="agir">
        <h2 className="titre">Comment réagir ?</h2>

        <p className="texte">
          Que tu sois témoin ou victime, il existe des moyens concrets d’agir contre le bizutage. Il ne s’agit pas de « casser l’ambiance » ou « d’exagérer », mais de refuser que des pratiques humiliantes soient banalisées. Tu n’es pas seul·e, des structures existent pour t’écouter et t’accompagner.
        </p>

        <ListeNumerotee
          title="Victime ou témoin : tu peux agir"
          subtitle="Des réflexes simples pour protéger et alerter"
          items={conseilsAction}
        />

        <h2 className="sous-titre-2">Je suis victime de bizutage</h2>


          <p className="texte">
            <strong>Il n’y a aucune honte à avoir si tu en as été victime.</strong> Ce n’est pas toi le problème, 
            c’est la pratique qui est illégale et violente. Tu as le droit de te sentir en colère, blessé·e ou trahi·e, et c'est en en parlant et en mettant des mots dessus que tu pourras parvenir à vivre avec.
          </p>

          <p className="texte">
            <strong>Tu peux en parler à quelqu’un de confiance</strong> : un·e ami·e, un·e membre de ta famille, un·e enseignant·e, un·e référent·e au sein de ton établissement (CPE, infirmier·ère, assistant·e social·e, etc.). Tu peux par exemple contacter le service vie étudiante de Centrale Lyon.</p>

        <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
        title="Service vie étudiante"
        subtitle="Service vie étudiante de Centrale Lyon"
        email="Voir les informations"
        textButton="Voir les informations"
        link="/vie-etudiante"

        bgColor="#ffffff"    //informations facultatives
        textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

      />

      

          <p className="texte">
                  Si tu ne te sens pas à l’aise d’en parler autour de toi, <strong>des structures d’écoute existent</strong>, comme Comment on s'aime ? ou Nightline, qui proposent une écoute anonyme et bienveillante.
          </p>


            <ContactCard
            image="/assets/logo-cosa.svg" 
            title="Comment on s'aime ?"
            subtitle="Écoute et réponse à tes questions par des professionnels"
            hours="Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h"
            textButton="Voir le site web"
            link="https://commentonsaime.fr/"

            bgColor="#f6a21e"    //informations facultatives
            textColor="#ffffff"
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




        <h2 className="sous-titre-2">Je suis témoin de bizutage</h2>

        <p className="texte">
          Si tu es témoin d’un bizutage, <strong>ne reste pas passif·ve</strong>. Ton silence peut être perçu comme une approbation tacite. Même si tu n’es pas directement concerné·e, tu peux faire une différence en agissant. Applique les conseils donnés dans l'encart précédent.
        </p>

        <ExternalLinkBlock
          resources={[
            {
              link: "https://commentonsaime.fr/mes-etudes/comment-reagir-quand-je-vois-une-situation-malaisante-en-soiree/",
              label: "Comment réagir quand je vois une situation malaisante en soirée ?",
              description: "Mieux repérer les comportements problématiques et apprendre à intervenir",
              imageSrc: "/assets/logo-cosa.svg"
            }
          ]}
        />

        <h2 className="sous-titre-2">Je ne veux pas devenir bizuteur·ze</h2>

      <ImageTextPopup
        image="./assets/cartes/8_trefle.png"
        title="La carte 8♣"
        shortText="Intégration : ne pas forcer les autres"
        longText="Intégration : ne pas forcer les autres"
        textButton="⤢ Agrandir la carte"
        suit="trefle"
      />

        <p className="texte">
        Nous sommes tous vulnérables à la manipulation. Il est très facile de se faire embarquer là où l’on n’aurait pas voulu aller.
        Lors de l'accueil des 0As, fais preuve d'empathie et de respect envers les nouveaux arrivants. Si tu sens que la situation dérape, n'hésite pas à le signaler au groupe : ta parole peut-être décisive.
        </p>

        <ExternalLinkBlock resources={effet_groupe} />

        <ListeNumerotee
          title="Le bizutage reste un bizutage, même s’il est accepté"
          subtitle="Déconstruire les fausses excuses"
          items={temoignagesMythes}
        />
      </div>

      <Separateur />
      <div id="assos">
        <h2 className="titre">J'organise l'intégration</h2>

        <TextImageRight  
                text={
        <>
        <b> L’effet de groupe peut amplifier la pression à consommer ou réaliser des actes dégradants</b>, même inconsciemment.
        Pour que chacun se sente à l’aise, il est important de <b>favoriser un climat de respect et d’écoute</b>, où les choix de chacun sont acceptés sans jugement.
        Tu peux trouver des outils pour organiser des <b>soirées plus responsables et sécurisées</b> sur les sites suivants :
        </>
                }
                imageSrc="/assets/cartes/dame_trefle.png"
              />


      <ExternalLinkBlock

        resources={resources}
      />


      </div>
      <Separateur />

      <p className="texte">
        <em><b>Sources :</b> Service Public, Code pénal, Nightline, Comment on s'aime ?, Comité National Contre le Bizutage, Ministère de l’Enseignement Supérieur, PAI 22 : Qualité de vie en études à l'ECL</em>
      </p>
    </div>
  );
};

export default Bizutage;
