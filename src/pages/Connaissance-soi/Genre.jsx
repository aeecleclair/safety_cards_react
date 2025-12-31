"use client";

import React from "react";
import "@/src/App.css";
import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que l'identité de genre ?", target: "definition" },
  { label: "Pour les personnes concernées", target: "concernes" },
  { label: "Comment accompagner un·e proche ?", target: "accompagner" },
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



const étapesAccompagnement = [
  {
    title: "Utilisez les bons pronoms et prénoms",
    subtitle:
      "Employer le nouveau prénom et les pronoms choisis est un vrai soutien ; si vous vous trompez, excusez‑vous et corrigez‑vous.",
  },
  {
    title: "La transition est rétro‑active",
    subtitle:
      "Parlez du passé avec les pronoms actuels ; privilégiez des tournures neutres si besoin.",
  },
  {
    title: "Manifestez votre soutien activement",
    subtitle:
      "Exprimez clairement votre appui et, si vous êtes cis, utilisez votre position pour relayer sa voix face aux hostilités.",
  },
  {
    title: "Connaissez vos limites",
    subtitle:
      "Mieux vaut admettre un manque d’information que dire des inexactitudes qui blessent ou induisent en erreur.",
  },
  {
    title: "Votre proche n’est pas QUE trans",
    subtitle:
      "Il/elle reste la même personne, avec ses centres d’intérêt, ses projets et ses qualités.",
  },
  {
    title: "Soyez digne de confiance",
    subtitle:
      "Ne révélez jamais la transidentité sans consentement ; gardez l’info pour vous si vous n’êtes pas sûr·e.",
  },
  {
    title: "Trouvez une manière de relâcher la pression",
    subtitle:
      "Parlez de vos émotions avec un·e pro ou un·e ami·e de confiance plutôt que de les faire peser sur votre proche en transition.",
  },
  {
    title: "Évitez les sujets sensibles",
    subtitle:
      "Les questions intimes (ex. opérations) ne vous regardent pas ; si vous savez quelque chose, gardez‑le pour vous.",
  },
];


const resources_Autres_pages = [
  {
    link: "/discri",
    emoji : "🟰",
    label: "Discriminations",
    description: "Comment réagir et soutenir face aux discriminations ?",
  },
  {
    link: "https://chrysalide-asso.fr/nos-documents/reagir-face-a-la-transphobie/",
    label: "Brochure",
    description: "Réagir face à la transphobie : conseils à l'usage des personnes trans",
    imageSrc: "/assets/chrysalide.png"
  },
];


const Genre = () => {
  return (
    <div className="page">
  <h1 className="titre-page gradient-title">Identité de genre</h1>

      <Sommaire links={navLinks} />

      <div id="definition" className="section">
        <h2 className="titre">Qu'est-ce que l'identité de genre ?</h2>

      <ImageTextPopup
        image="./assets/cartes/8_coeur.png"
        title="La carte 8♠"
        shortText="Sensibilisation au mégenrage"
        longText="A Centrale, le surnom est le moyen le plus courant de s'adresser à quelqu'un·e. Chacun fait donc généralement l'effort de retenir le prénom et le surnom de chacun, et d'utiliser l'un ou l'autre en fonction du contexte. Cette carte vise à poser la question suivante : si l'effort est fait pour retenir le prénom/surnom, pourquoi ne pas faire l'effort de retenir les pronoms et le prénom choisis par une personne trans ou non-binaire ? Le mégenrage désigne le fait de s'adresser à une personne avec des pronoms ou un prénom qui ne correspondent pas à son identité de genre. Cela peut être involontaire (oubli, erreur) ou intentionnel (manque de respect, discrimination). Le mégenrage peut causer un profond malaise et renforcer le sentiment d'isolement. En faisant l'effort de respecter les pronoms et le prénom choisis, on contribue à créer un environnement inclusif et bienveillant pour tou·tes."
        textButton="⤢ Agrandir la carte"
      />

        <TextImageRight
          imageSrc="/assets/personne-gingenre.jpg"
          enlargeOnClick
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

        <h3 className="sous-titre-2">Des exemples d'identité de genre</h3>

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

              <ChiffresGroup chiffres={chiffresIdentite} />


              <h3 className="sous-titre-2">La disphorie de genre</h3>

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
            { link: "https://www.la-clinique-e-sante.com/blog/sexualite/identite-genre-questions", label: "Identité de genre", description: "10 questions pour t'aider à avancer"},
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
              <><b>Les moyens d'exprimer ton genre :</b> il existe de nombreux moyens médicaux ou non pour changer ou dissimuler certains attributs physiques </>,
              <><b>Les Traitements Hormonaux de Substitution (THS) : </b>les différents types de traitements, les médecins et moyens de se faire accompagner</>,
              <><b>Les différentes opérations masculinisantes ou féminisantes</b></>,
              <><b>L'Affectation de Longue Durée (ALD)</b> qui permet une meilleure prise en charge de la transition par la sécurité sociale</>,
              <><b>Les différentes démarches administratives</b> (changement de prénom, de mention de genre...)</>,
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
          Les <b>groupes d'autosupport</b> sont précieux : rencontrer d'autres personnes trans/non-binaires permet d'échanger sur le
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
              link: "https://www.instagram.com/ost_lyon/",
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
          Pour <b>changer ton prénom d'usage ou ton titre de civilité (Monsieur/Madame)</b> dans les services de l'école (Moodle, listes d'appel, carte étudiante), il te suffit
          généralement d'envoyer un mail à la scolarité. Le changement de prénom sur le diplôme nécessite par contre une démarche auprès de l'état civil. 
          
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
        <p className="texte">Si tu es <b>victime de discriminations</b> en raison de ton identité de genre, sache qu'il existe des ressources et des personnes prêtes à t'aider.</p>
        <ExternalLinkBlock
          resources={resources_Autres_pages}
        />

        <p className="texte">Les formes de discriminations sont multiples. Elles peuvent se matérialiser par une <b>injure homophobe ou transphobe</b>, orale ou écrite, qui est punie d'un <b>an d'emprisonnement et de 45 000 € d'amende</b>. Le <b>mégenrage</b> (le fait de s'adresser à une personne avec des pronoms ou un prénom qui ne correspondent pas à son identité de genre) intentionnel est aussi une forme de discrimination.</p>

        <Quote text="Ça ne vous dérange pas d'apprendre un surnom, alors pourquoi pas un pronom ?" />

          <h2 className="sous-titre-2">Tu es en détresse ?</h2>

          <p className="texte">Reconnue d'Utilité Publique, la Fondation Le Refuge <b>héberge et accompagne les jeunes LGBT+ victimes de violences intrafamiliales</b>, rejetés par leurs parents, chassés du domicile en raison de leur orientation sexuelle ou de leur identité de genre. Tu peux contacter leur ligne d'écoute afin d'obtenir une solution d'urgence.</p>


          <ContactCard
          image="/assets/le_refuge.png"
          title="Le Refuge"
          subtitle="Association d'aide aux jeunes LGBTQ+"
          phone="06 31 59 69 50 - Appel ou SMS"
          hours="Tous les jours, de 8h à minuit"
          textButton="Voir le site"
          link="https://le-refuge.org/"

          bgColor="#ffffff"
          textColor="#4834F6"
        />




      <Separateur />

      <div id="accompagner" className="section">
        <h2 className="titre">Comment accompagner un·e proche ?</h2>

        <p className="texte">
          Accompagner une personne trans ou non-binaire repose sur <b>l'écoute, le respect et la volonté d'apprendre</b>. Voici des
          conseils concrets, faciles à mettre en œuvre.
        </p>

        <ListeNumerotee title="Conseils pour être un meilleur soutien" items={étapesAccompagnement} />





        <ExternalLinkBlock
          title="Ressources pour les proches"
          subtitle="Guides, FAQ et points d'appui"
          resources={[
            {
              link: "https://chrysalide-asso.fr/nos-documents/etre-un-e-proche-de-personne-trans/",
              imageSrc: "/assets/chrysalide.png",
              label: "Chrysalide",
              description: "Brochure à destination des proches",
            },
            {
              link: "https://wikitrans.co/2018/02/10/mon-proche-est-trans-comment-laider-au-mieux/",
              imageSrc: "/assets/wikitrans.svg",
              label: "Brochure",
              description: "Un·e de mes proches est trans, comment l'aider au mieux ?",
            },
          ]}
        />

      </div>
    


      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> brochures OUTrans (hormones, DTC), Guide Chrysalide, WikiTrans, Fransgenre, Planning
          Familial, Centre LGBTI+ Lyon, SOS Homophobie, Santé Publique France, témoignages d'étudiant·e·s, Rapport Vie étudiante à Centrale Lyon 2024
        </em>
      </p>
    </div>
  );
};

export default Genre;
