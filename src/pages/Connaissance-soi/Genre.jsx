import React from "react";
import "../../App.css";
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  NumberedList,
  TextImageRight,
  ImageCenter,
  YouTubeVideo,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import { image } from "framer-motion/m";

const navLinks = [
  { label: "Qu'est-ce que l'identité de genre ?", target: "definition" },
  { label: "Pour les personnes concernées", target: "concernes" },
  { label: "Comment accompagner un·e proche ?", target: "accompagner" },
  { label: "Démarches & ressources", target: "demarches" },
];

const chiffresIdentite = [
  {
    number: "1–2",
    title: "étudiant·es par promo",
    description: "commencent une transition à Centrale Lyon (estimation locale)",
  },
  {
    number: "8,8%",
    title: "ont subi des discriminations",
    description: "liées au genre ou à l'orientation sexuelle sur le campus",
  },
];

const ressourcesNationales = [
  {
    link: "https://wikitrans.co/",
    imageSrc: "/assets/wiki_trans.png",
    label: "WikiTrans",
    description: "Base pratique : hormones, coming-out, démarches",
  },
  {
    link: "https://outrans.org",
    imageSrc: "/assets/outrans.png",
    label: "OUTrans",
    description: "Autosupport trans & formations inclusives",
  },
  {
    link: "https://www.le-refuge.org/",
    imageSrc: "/assets/refuge_logo.png",
    label: "Le Refuge",
    description: "Hébergement d'urgence pour jeunes LGBT+",
  },
  {
    link: "https://www.fransgenre.org/",
    imageSrc: "/assets/fransgenre.png",
    label: "Fransgenre",
    description: "Répertoire de professionnel·les sensibilisé·es et guides pratiques",
  },
  {
    link: "https://www.planning-familial.org/",
    imageSrc: "/assets/planning.png",
    label: "Planning Familial",
    description: "Informations et accompagnement santé/sexualité",
  },
];

const ressourcesLocales = [
  {
    link: "https://www.centrelgbtilyon.org/",
    imageSrc: "/assets/centre_lgbti_lyon.png",
    label: "Centre LGBTI+ Lyon",
    description: "Groupes de parole, permanences juridiques & santé",
  },
  {
    link: "https://chrysalide-asso.fr/",
    imageSrc: "/assets/chrysalide.png",
    label: "Chrysalide",
    description: "Groupes de discussion entre personnes trans à Lyon",
  },
  {
    link: "https://www.instagram.com/ost_lyon/",
    imageSrc: "/assets/ost.png",
    label: "OST Lyon",
    description: "Organisation de Solidarité Trans (autosupport)",
  },
];

const étapesAccompagnement = [
  {
    title: "Écouter et croire",
    subtitle: "Prendre au sérieux son ressenti sans interpréter ni minimiser.",
  },
  {
    title: "Utiliser le bon prénom & pronom",
    subtitle: "S'excuser puis corriger en cas d'erreur (éviter le misgendering).",
  },
  {
    title: "Respecter le rythme",
    subtitle: "Éviter les questions intrusives ; la personne choisit son tempo.",
  },
  {
    title: "Éduquer son entourage",
    subtitle: "Partager des ressources pour éviter de faire porter toute l'explication à la personne concernée.",
  },
  {
    title: "Être un·e allié·e visible",
    subtitle: "Intervenir face aux propos transphobes et proposer un soutien concret.",
  },
];

const étapesDemarches = [
  "Prendre RDV avec un·e médecin / endocrinologue sensibilisé·e (cf. annuaires Fransgenre / WikiTrans).",
  "Rassembler des informations : parcours social, administratif et médical possibles — il n'existe pas de parcours unique.",
  "Changer le prénom d'usage dans l'université (souvent via un simple mail à la scolarité).",
  "Pour changement officiel (état civil) : suivre la procédure judiciaire/mairie (se renseigner sur la marche à suivre locale).",
  "Si souhaité : démarches pour l'accès aux soins (hormonothérapie, chirurgies) avec équipes et structures spécialisées.",
];

const complementaires = [
  {
    link: "https://www.santepubliquefrance.fr/",
    imageSrc: "/assets/sante_publique.png",
    label: "Santé Publique France",
    description: "Informations de santé publique, prévention et études",
  },
  {
    link: "https://www.sos-homophobie.org/",
    imageSrc: "/assets/sos_homophobie.png",
    label: "SOS Homophobie",
    description: "Ligne d'écoute, signalement et ressources anti-discrimination",
  },
  {
    link: "https://www.cidj.fr/",
    imageSrc: "/assets/cidj.png",
    label: "CIDJ",
    description: "Conseils pratiques pour les jeunes (droit, santé, études)",
  },
];

const resources_Autres_pages = [
  {
    link: "/discri",
    emoji : "🟰",
    label: "Discriminations",
    description: "Comment réagir et soutenir face aux discriminations ?",
  }
];


const Genre = () => {
  return (
    <div className="page">
  <h1 className="titre-page gradient-title">Identité de genre</h1>

      <Navbar links={navLinks} />

      <div id="definition" className="section">
        <h2 className="titre">Qu'est-ce que l'identité de genre ?</h2>

        <TextImageRight
          imageSrc="/assets/personne-gingenre.jpg"
          text={
            <>
              <p className="texte">
                L'<strong>identité de genre</strong> est la conviction intime, profonde et durable d'être un homme, une femme,
                les deux, ni l'un ni l'autre, ou de changer au fil du temps. Elle est distincte du <strong>sexe assigné à la naissance</strong> (basé sur les caractéristiques anatomiques), de
                l'<strong>expression de genre</strong> (comment une personne se présente : vêtements, voix, comportement)
                et de l'<strong>orientation sexuelle</strong> (vers qui on se sent attiré·e). Afin de mieux comprendre la distinction, tu peux te ramener au schéma de la personne gingenre.
              </p>

            </>
          }
        />

              <BulletList
                items={[
                  <><b>Cisgenre :</b> identité en accord avec le sexe assigné à la naissance.</>,
                  <><b>Transgenre (ou trans) :</b> identité différente du sexe assigné à la naissance.</>,
                  <><b>Non-binaire :</b> ne se reconnaît pas uniquement dans les catégories « homme » ou « femme ». Elles peuvent fluctuer entre genres (genderfluid) ou ressentir une identité « au-delà » du masculin/féminin.</>,
                  <><b>Agenre :</b> ne ressent aucune affiliation à un genre.</>,
                  <>D'autres termes existent (androgyne, queer, etc.) pour décrire des expériences de genre variées. Toutes ces identités ont toujours existé et reflètent la pluralité des vécus humains.</>,
                ]}
              />

              <ExternalLinkBlock
                resources={[
                  {
                    link: "/sex_orient",
                    label: "Orientation sexuelle",
                    description: "Pour comprendre davantage l'orientation sexuelle et ses nuances.",
                    emoji: "🏳️‍🌈 ",
                  },
                ]}
              />

              <p className="texte">
                La <strong>dysphorie de genre</strong> désigne le malaise ou la souffrance qu'une personne peut ressentir quand
                son identité n'est pas reconnue ou quand son corps ne correspond pas à ce qu'elle ressent. Ce terme est généralement utilisé dans le milieu médical pour désigner le tourment psychologique que l'on peut ressentir, avec des symptômes proches de l'anxiété ou de la dépression. Toutes les personnes trans ou non-binaires ne vivent pas de dysphorie de genre.
              </p>

              <ExternalLinkBlock
                resources={[
                  {
                    link: "/depression",
                    label: "Dépression",
                    description: "Pour comprendre davantage la dépression et ses symptômes.",
                    emoji: "🥺",
                  },
                  {
                    link: "/anxiete",
                    label: "Anxiété",
                    description: "Pour comprendre davantage l'anxiété et ses symptômes.",
                    emoji: "😶‍🌫️",
                  },
                ]}
              />

              <Quote text="Le genre n'est pas ce qu'on voit, mais ce qu'on ressent." />


        <ChiffresGroup chiffres={chiffresIdentite} />

        <ExternalLinkBlock
          title="Pour en savoir plus"
          subtitle="Quelques ressources pour approfondir"
          resources={[
            {
              link: "https://wikitrans.co/",
              imageSrc: "/assets/wikitrans.svg",
              label: "WikiTrans",
              description: "Nombreux articles et témoignages pour en apprendre davantage",
            },
            {
              link: "https://www.outrans.org/ressources/brochures-doutrans/",
              imageSrc: "/assets/outrans.png",
              label: "OUTrans",
              description: "Brochures et guides d'autosupport (hormones, parcours, opérations...)",
            },
            {
              link: "https://questionsexualite.fr/connaitre-son-corps-et-sa-sexualite/la-diversite-de-genre/qu-est-ce-que-l-identite-de-genre",
              imageSrc: "/assets/question_sexualite.png",
              label: "Question Sexualite",
              description: "Pour en apprendre davantage sur l'identité de genre",
            }
          ]}
        />
      </div>

      <Separateur />

      <div id="concernes" className="section">
        <h2 className="titre">Pour les personnes concernées</h2>

        <p className="texte">
          Si tu te questionnes sur ton genre : d'abord, prends le temps. Il n'existe pas de test unique et ton ressenti est la
          meilleure boussole.
        </p>

        <ExternalLinkBlock resources={
          [
            { link: "https://wikitrans.co/2019/01/01/comment-savoir-si-je-suis-trans/", label: "Comment savoir si je suis trans ?", description: "Pour t'aider à réfléchir sur ton genre", imageSrc: "/assets/wikitrans.svg"},
          ]
        } />



        <h3 className="sous-titre-2">Se connaître et expérimenter</h3>
        <BulletList
          items={[
            <><b>Apprendre à se connaitre :</b> lis des témoignages, guides pratiques et FAQ. </>,
            <><b>Essayer :</b> des changements progressifs (prénom d'usage auprès d'amis, modifications vestimentaires, pronoms). </>,
            <><b>S'écouter :</b> note ce qui te procure du bien-être (euphorie de genre : sentiment de bien-être quand tu es perçu·e comme tu te sens) et ce qui te met mal à l'aise.</>,
          ]}
        />


        <h3 className="sous-titre-2">S'informer</h3>

        <p className="texte">Pour alimenter ta réflexion et peut-être découvrir de nouvelles pistes, tu peux te renseigner sur :  </p>

          <BulletList
            items={[
              <>La manière de réaliser ton <b>coming out</b></>,
              <><b>les moyens d'exprimer ton genre :</b> il existe de nombreux moyens médicaux ou non pour changer ou dissimuler certains attributs physiques </>,
              <><b>les Traitements Hormonaux de Substitution (THS) : </b>les différents types de traitements, les médecins et moyens de se faire accompagner</>,
              <><b>les différentes opérations masculinisantes ou féminisantes</b></>,
              <><b>l'Affectation de Longue Durée (ALD)</b> qui permet une meilleure prise en charge de la transition par la sécurité sociale</>,
              <><b>les différentes démarches administratives</b> (changement de prénom, de mention de genre...)</>,
            ]}
          />

          <p className="texte">Il existe de nombreuses brochures et FAQ en ligne (WikiTrans, Fransgenre, OUTrans, Chrysalide) qui répondent aux questions les plus fréquentes.</p>

          <ExternalLinkBlock
            resources = {[
              {
                link: "https://wikitrans.co/2019/01/19/quest-ce-quune-transition/",
                imageSrc: "/assets/wikitrans.svg",
                label: "Wikitrans",
                description: "Réponses aux questions fréquentes sur la transition",
              },
              {
                link: "https://www.fransgenre.fr/brochures",
                imageSrc: "/assets/fransgenre.webp",
                label: "Fransgenre",
                description: "Brochures sur les hormones, opérations, démarches, carte des médecins...",
              },
              {
                link: "https://outrans.org",
                imageSrc: "/assets/outrans.png",
                label: "OUTrans",
                description: "Brochures et guides d'autosupport (hormones, parcours, opérations...)",
              },

            ]
            }
          />

       


        <h3 className="sous-titre-2">Associations de soutien</h3>
        <p className="texte">
          Les groupes d'autosupport sont précieux : rencontrer d'autres personnes trans/non-binaires permet d'échanger sur le
          quotidien, les médecins, et les démarches administratives. Tu trouveras des groupes en ligne et locaux. Sur le campus de Centrale Lyon, n'hésite pas à contacter Rainbow.
        </p>

        <ContactCard
          title="Chrysalide"
          subtitle="Groupe d'échange à Lyon pour les personnes trans et leur entourage"
          image="/assets/chrysalide.png"
          hours="Le 3ème samedi de chaque mois (hors juillet/août) de 15h à 18h"
          textButton="En savoir plus"
          link="https://chrysalide-asso.fr/contact/"

          bgColor="#7A1DA9"
          textColor="#ffffff"
        />

        <ContactCard
          image="/assets/centre_lgbti_lyon.png"
          title="Centre LGBTI+ Lyon"
          subtitle="Espace associatif et ressource locale"
          phone=""
          email="contact@centrelgbtilyon.org"
          hours="Accueil & permanences : mardi et mercredi de 17h30 à 19h30, vendredi de 14h à 19h"
          textButton="Voir le site"
          link="https://www.centrelgbtilyon.org/"
          bgColor="#ffffff"
          textColor="#ec62f1ff"
        />


        <ExternalLinkBlock
          resources={[
            {
              link: "https://wikitrans.co/carte/",
              imageSrc: "/assets/wikitrans.svg",
              label: "Carte des associations françaises",
              description: "Pour trouver un groupe près de chez toi",
            },
            {
              link: "https://www.fransgenre.fr/associations",
              imageSrc: "/assets/ost_lyon.jpg",
              label: "OST Lyon",
              description: "Organisation de Solidarité Trans, d'autosupport et de lutte",
            },
            {
              link: "https://www.instagram.com/rainbow.ecl/?hl=fr",
              imageSrc: "/assets/rainbow.jpg",
              label: "Rainbow - Compte Instagram",
              description: "Club LGBTQIA+ de l'école Centrale de Lyon"
            }
          ]}
        />

        <h3 className="sous-titre-2">Les démarches administratives à Centrale Lyon</h3>

        <p className="texte">
          Pour changer ton prénom d'usage ou ton titre de civilité (Monsieur/Madame) dans les services de l'école (Moodle, listes d'appel, carte étudiante), il te suffit
          généralement d'envoyer un mail à la scolarité. Le changement de prénom sur le diplôme nécessaite par contre une démarche auprès de l'état civil. 
          
        </p>

        <ExternalLinkBlock 
          resources = {[
            {
              link: "https://wikitrans.co/2019/11/26/changement-de-prenoms-en-mairie/",
              imageSrc: "/assets/wikitrans.svg",
              label: "Changement de prénom",
              description: "en mairie ou au tribunal judiciaire",
            },
            {
              link: "https://wikitrans.co/2019/11/26/changement-de-sexe-a-letat-civil-tgi/",
              imageSrc: "/assets/wikitrans.svg",
              label: "Changement de sexe",
              description: "au tribunal judiciaire",
            },
          ]}
        />

      </div>
      

      <h2 className="sous-titre-2">Tu subis des discriminations ?</h2>
        <p className="texte">Si tu es victime de discriminations en raison de ton identité de genre, sache qu'il existe des ressources et des personnes prêtes à t'aider.</p>
        <ExternalLinkBlock
          resources={resources_Autres_pages}
        />

      <Separateur />

      <div id="accompagner" className="section">
        <h2 className="titre">Comment accompagner un·e proche ?</h2>

        <p className="texte">
          Accompagner une personne trans ou non-binaire repose sur l'écoute, le respect et la volonté d'apprendre. Voici des
          conseils concrets, faciles à mettre en œuvre.
        </p>

        <ListeNumerotee title="5 réflexes de base" items={étapesAccompagnement} />

        <h3 className="sous-titre">Langage & comportement</h3>
        <BulletList
          items={[
            "Utilisez le prénom et les pronoms choisis — si vous vous trompez, corrigez-vous naturellement et passez à autre chose.",
            "Ne posez pas de questions invasives (opérations, sexualité) sauf si la personne en parle d'elle-même.",
            "Ne dites pas que « c'est une phase » ou que la personne est influencée : ces propos minimisent l'expérience vécue.",
          ]}
        />

        <h3 className="sous-titre">Se former pour mieux aider</h3>
        <p className="texte">
          Lire des guides simples (ex. « Identité de genre : 10 questions pour vous aider à avancer ») ou participer à des groupes
          pour proches (certaines associations en proposent) aide à sortir des préjugés et à proposer un accompagnement durable.
        </p>

      <Quote text="Ça ne vous dérange pas d'apprendre un surnom, alors pourquoi pas un pronom ?" />


        <ExternalLinkBlock
          title="Ressources pour proches"
          subtitle="Guides, FAQ et points d'appui"
          resources={[
            {
              link: "https://chrysalide-asso.fr/",
              imageSrc: "/assets/chrysalide.png",
              label: "Chrysalide – pour proches",
              description: "Groupes de parole et guide pour le personnel/les proches.",
            },
            {
              link: "https://www.planning-familial.org/",
              imageSrc: "/assets/planning.png",
              label: "Planning Familial",
              description: "Informations santé et accompagnement familial.",
            },
            {
              link: "https://www.sos-homophobie.org/",
              imageSrc: "/assets/sos_homophobie.png",
              label: "SOS Homophobie",
              description: "Ligne d'écoute et conseils pratiques pour agir face aux discriminations.",
            },
          ]}
        />

        <YouTubeVideo url="https://www.youtube.com/watch?v=ma7B0tZ3q4I" />
      </div>

      <Separateur />

      {/* DEMARCHES & RESSOURCES */}
      <div id="demarches" className="section">
        <h2 className="titre">Démarches administratives & médicales</h2>

        <p className="texte">
          Il n'y a pas de parcours obligatoire : chaque personne choisit ce qui lui convient (social, administratif, médical).
          Voici des étapes fréquentes et des informations utiles.
        </p>

        <NumberedList items={étapesDemarches} />

        <TextImageRight
          imageSrc="/assets/planning_demarche.png"
          text={
            <>
              <p className="texte">
                Conseil pratique : conserve des copies de tous les échanges administratifs et demande confirmation écrite
                lors du changement de prénom d'usage dans les services de ton établissement. Pour des démarches juridiques
                (état civil), renseigne-toi auprès d'un·e avocat·e ou d'associations qui accompagnent ces procédures.
              </p>
            </>
          }
        />

        <ExternalLinkBlock
          title="Annuaire & aides pratiques"
          subtitle="Adresses pour trouver un·e professionnel·le, ligne d'écoute et aide juridique"
          resources={[
            ...ressourcesNationales,
            ...complementaires,
          ]}
        />

        <div className="contacts-grid">
          <ContactCard
            image="/assets/nightline_logo.png"
            title="Nightline Lyon"
            subtitle="Écoute nocturne anonyme pour les étudiant·es"
            phone="04 85 30 00 10"
            hours="Tous les soirs 21h-2h30"
            textButton="Voir le site web"
            link="https://www.nightline.fr/lyon"
          />

          <ContactCard
            image="/assets/refuge_logo.png"
            title="Le Refuge – Ligne d'écoute"
            subtitle="Soutien & hébergement d'urgence pour jeunes LGBT+"
            phone="06 31 59 69 50"
            hours="24h/24 – 7j/7"
            textButton="Contacter"
            link="https://www.le-refuge.org/"
          />
        </div>
      </div>

      <Separateur />

      <p className="texte sources small">
        <em>
          Ressources et inspiration : brochures OUTrans (hormones, DTC), Guide Chrysalide, WikiTrans, Fransgenre, Planning
          Familial, Centre LGBTI+ Lyon, SOS Homophobie, Santé Publique France. Si tu veux des copies des guides cités, contacte
          le service vie étudiante ou les associations listées ci-dessous.
        </em>
      </p>
    </div>
  );
};

export default Genre;
