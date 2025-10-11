import React from "react";
import "../../App.css";

import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, TextImageRight, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que la discrimination ?", target: "definitions" },
  { label: "Discriminations sexistes", target: "sexistes" },
  { label: "Discriminations racistes", target: "racistes" },
  { label: "Discriminations LGBT-phobes", target: "lgbtphobes" },
  { label: "Je suis témoin", target: "temoin"}
];

const dataGeneral = [
  { number: "8,8%", title: "des étudiant·es", description: "déclarent avoir subi une discrimination sur le campus (genre, origine, orientation sexuelle)" },
  { number: "17,2%", title: "des étudiants internationaux", description: "sont victimes de discrimination liée à leur origine" },
  { number: "11,1% et 6,6%", title: "des femmes et des hommes", description: "déclarent être victimes de discrimination" },
];

const definitions = [
  {
    title: "Discrimination",
    subtitle: "Toute distinction, exclusion, restriction ou préférence fondée sur un motif prohibé par la loi (sexe, orientation sexuelle, identité de genre, origine, apparence, handicap, etc.)."
  },
  {
    title: "Délits possibles",
    subtitle: "Harcèlement, propos, refus d'accès, violences physiques ou psychologiques sont punissables selon les lois (Code pénal, Code de l'éducation, etc.)."
  }
];

// Ressources externes utiles
const resources_pénale1 = [
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F38175",
    imageSrc: "/assets/min.png",
    label: "Définition officielle",
    description: "de ce qui constitue une discrimination",
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F32075",
    imageSrc: "/assets/min.png",
    label: "Responsabilité des contenus publiés sur internet",
    description: "et les règles associées",
  }
];


const autres_pages_global = [
  {
    link: "/harcel",
    emoji : "😠",
    label: "Harcèlement",
    description: "Comment agir face au harcèlement ?"
  },
  {
    link: "/groupe",
    emoji : "🙅",
    label: "Effet de groupe",
    description: "Comment agir face à l'effet de groupe ?"
  },
  {
    link: "/inte",
    emoji : "🍾",
    label: "Pratiques d'intégration",
    description: "Que faire face au bizutage ?",
  }
];

const autres_pages_sexisme = [
  {
    link: "/vss",
    emoji : "🫂",
    label: "Violences sexistes et sexuelles",
    description: "Comment réagir face à une VSS ?"
  }
];

const autres_pages_lgbtphobie = [
  {
    link: "/cyber_harcel",
    emoji : "📵",
    label: "Cyberharcèlement",
    description: "Comment réagir face à du cyberharcèlement ?"
  },
  {
    link: "/genre",
    emoji : "🏳️‍⚧️",
    label: "Identité de genre",
    description: "Tu te questionnes sur ton identité ?"
  }
];

const arbre = [
  {
    link: "/docs/arbre-vss-centrale-lyon.pdf",
    label: "Arbre de décision",
    description: "Je suis victime ou témoin de VSS (étudiants et personnels de Centrale Lyon)",
    imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
  }
];

const barometres = [

  {
    link: "/assets/Violentomètre_relations_profs_eleves.pdf",
    label: "Les VSS dans les relations professeurs-élèves",
    description: "",
    emoji: "🎓",
  },
  {
    link: "/assets/Violentometre_VSS_travail.pdf",
    label: "Les VSS dans le milieu professionnel",
    description: "",
    emoji: "💼",
  },
  {
    link: "/assets/violentometre_depliant_monde_scientifique.pdf",
    label: "Les VSS dans le monde scientifique",
    description: "",
    emoji: "🔬",
  },
  {
    link: "/assets/reglo_sport_reglette.pdf",
    label: "Les VSS dans le sport",
    description: "",
    emoji: "⚽",
  },
  {
    link: "/assets/barometre_violences_gyneco.pdf",
    label: "Les VSS chez le ou la gynécologue",
    description: "",
    emoji: "🚺",
  },
];

const discrimetre = [
  {
    link: "/assets/Discriminomètre.pdf",
    label: "Discriminomètre ",
    description: "pour avoir des exemples de situations dangereuses",
  }
]

const ressourcesUtiles = [
  {
    link: "https://www.defenseurdesdroits.fr/fr",
    imageSrc: "/assets/logo_defenseur_des_droits.png",
    label: "Défenseur des droits",
    description: "Plateforme nationale pour signaler discriminations, alertes & conseils juridiques",
  },
  {
    link: "https://www.sos-homophobie.org/",
    imageSrc: "/assets/logo_sos_homophobie.png",
    label: "SOS Homophobie",
    description: "Lutte contre les discriminations LGBT, soutien aux victimes, témoignages, écoute",
  },
  {
    link: "https://www.crous-lyon.fr/social-et-accompagnement/soutien-et-ecoute/signalement-des-violences-sexistes-sexuelles-et-discriminatoires/",
    imageSrc: "/assets/logo_crous_lyon.png",
    label: "Crous Lyon – Signalement VSS & discriminations",
    description: "Procédure confidentielle pour signaler violences sexistes, sexuelles, discriminations dans le campus",
  },
  {
    link: "https://etudiant.gouv.fr/discriminations-et-violences",
    imageSrc: "/assets/logo_etudiant_gouv.png",
    label: "Étudiant.gouv.fr",
    description: "Infos officielles sur vos droits en cas de discrimination ou violence",
  },
];

const Discriminations = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Discriminations</h1>
      <Navbar links={navLinks} />

      <div id="definitions">
        <h1 className="titre">Qu'est-ce que la discrimination ?</h1>
        <ImageTextPopup
          image="./assets/cartes/valet_coeur.png"
          title="La carte V♥"
          shortText="TEXTE A FAIRE"
          longText="TEXTE A FAIRE"
          textButton="⤢ Agrandir la carte"
          suit="coeur"
        />

       <p className="texte">
          La discrimination désigne toute distinction, exclusion ou préférence fondée sur un motif interdit par la loi, qui a pour effet de porter atteinte à l'égalité de traitement. Les motifs prohibés par la loi sont les suivants :
        </p>
        <ul>
          <li>Origine ; Lieu de résidence</li>
          <li>Sexe ; Orientation sexuelle ; Identité de genre</li>
          <li>Situation de famille ; Patronyme</li>
          <li>Grossesse</li>
          <li>Caractéristiques génétiques ; Apparence physique</li>
          <li>Particulière vulnérabilité résultant de la situation économique</li>
          <li>Etat de santé ; Handicap ; Perte d'autonomie</li>
          <li>Moeurs</li>
          <li>Age</li>
          <li>Opinions politiques ; Activités syndicales</li>
          <li>Qualité de lanceur d'alerte, de facilitateur ou de personne en lien avec un lanceur d'alerte</li>
          <li>Capacité à s'exprimer dans une langue autre que le français</li>
          <li>Appartenance ou non-appartenance, vraie ou supposée, à une ethnie, Nation, prétendue race ou religion déterminée</li>
        </ul>

        <p className="texte">
          En France, la discrimination est un délit.  
          Selon l'article 225-2 du Code pénal, elle est punie de 3 ans d'emprisonnement et de 45 000 € d'amende (portés à 5 ans et 75 000 € si la discrimination a lieu dans un établissement recevant du public ou par une personne dépositaire de l'autorité publique).  
        </p>

        <ExternalLinkBlock
          resources={discrimetre}
        />  

        <p className="texte">
          En France, la loi protège de nombreux motifs discriminatoires. Tu as des droits. Ce n'est jamais ta faute si quelqu'un te discrimine.
        </p>

        <p className="texte">
          La loi s'applique aussi aux réseaux sociaux : publier, commenter, repartager ou même retweeter des propos discriminatoires est passible des mêmes sanctions pénales. Être derrière un écran ne donne pas le droit d'insulter ou de propager des contenus discriminatoires.
        </p>

        <ExternalLinkBlock
          title="Textes officiels"
          subtitle=""
          resources={resources_pénale1}
        />

        <h2 className="sous-titre-2">Quelques chiffres récents sur le campus</h2>

        <ChiffresGroup chiffres={dataGeneral} />
        <p className="texte">
          Beaucoup de personnes discriminées n'en parlent pas ou ne savent pas vers qui se tourner : 87,7% des personnes discriminées ne demandent pas d'aide (92,3% des femmes et 87,0% des hommes). Il existe des dispositifs de signalement, des soutiens psychologiques, juridiques et associatifs, sur le campus, à Lyon ou en ligne.
        </p>

        <ContactCard
          image="assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
          title="Cellule d'écoute"
          subtitle="Dispositif d'écoute et d'accompagnement de Centrale Lyon"
          email="Voir les informations"
          textButton="Voir les informations"
          link="/cellule-ecoute"
          bgColor="#ffffff"  
          textColor="#b22133"
        />


        <ContactCard
          image="/assets/defenseur_droits.png" 
          title="AntiDiscriminations"
          subtitle="AntiDiscriminations : site pour les victimes et les témoins"
          phone="3928"
          email=""
          hours="Lundi à vendredi : 9h30 - 19h"
          textButton="Voir le site"
          link="https://www.antidiscriminations.fr/"

          textColor="#091d7fff"  //elles seront chosies en fonction de la couleur du logo si non spécifiées


        />


      </div>
      <p className="texte">
        Tu subis du <b>harcèlement</b> ? Tu te sens <b>isolé·e</b> ? Tu es <b>anxieux·se</b> ? N'hésite pas à visiter d'autres pages pour continuer à te renseigner :
      </p>
        <ExternalLinkBlock
        title=""
        subtitle=""
        resources={autres_pages_global}
      />

      <Separateur />


      <div id="sexistes">
        <h1 className="titre">Discriminations sexistes</h1>
        <p className="texte">
          Le sexisme désigne toute inégalité ou violence fondée sur le sexe ou le genre : harcèlement, remarques, violences sexuelles, inégalités d'accès ou de traitement. Il repose sur l'idée qu'un sexe serait supérieur à un autre, ce qui légitime depuis longtemps une hiérarchie entre hommes et femmes. Dès l'enfance, les stéréotypes genrés sont transmis dans les jouets, l'école, les médias ou le langage, influençant les comportements, les attentes et les rôles sociaux assignés à chacun·e. Ces représentations s'expriment à travers des discriminations, des micro-agressions ou des violences sexistes, et le sexisme structurel se manifeste aussi dans l'emploi, la politique, la culture ou le sport, par des inégalités de traitement, une invisibilisation des voix féminines ou des discours paternalistes « bienveillants » qui perpétuent les rapports de pouvoir.
        </p>

        <h2 className="sous-titre-2">
          Discriminations ou conséquences des discriminations sexistes fréquentes :
        </h2>
        <BulletList items={[
          "Violences verbales ou sexuelles, harcèlement de rue ou dans les études",
          "Inégalités de traitement ou d'accès selon le genre",
          "Pression sociale sur le “rôle de genre” attendu",
          "Modifications de comportement pour éviter les agressions (se taire, éviter certains lieux, etc.)"
        ]} />
        
        <ContactCard
          image="/assets/3919.png"
          title="3919"
          subtitle="Ligne ouverte à toutes les femmes victimes de violences"
          phone="3919"
          email="contact@solidaritefemmes.org"
          hours=""
          textButton="Voir le site"
          link="https://www.service-public.fr/particuliers/actualites/A16929"
          
          bgColor="#ffffffff"    //informations facultatives
          textColor="#e90202ff"  //elles seront chosies en fonction de la couleur du logo si non spécifiées
        />
        

        <p className="texte">
          Les discriminations sexistes peuvent être accompagnées de violences sexistes et sexuelles :
          Qu'est-ce qu'une VSS ? Comment réagir ? Si tu te poses ces questions, n'hésite pas à t'informer juste ici : 
        </p>
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={autres_pages_sexisme}
        />

        <p className="texte">
          Selon le rapport 2024 du Haut Conseil à l'Égalité, 9 femmes sur 10 ont déjà renoncé à certaines actions ou modifié leur comportement pour éviter le sexisme.
        </p>
        <ExternalLinkBlock
          title="Quelques ressources pour aller plus loin"
          subtitle="Informations, droits, signalements"
          resources={[
            {
              link: "https://questionsexualite.fr/lutter-contre-les-violences-et-discriminations/la-violence-dans-la-societe/qu-est-ce-que-le-sexisme-dans-la-societe",
              imageSrc: "/assets/question_sexualite.png",
              label: "Question sexualité -",
              description: "pour plus d'informations sur le sexisme dans la société"
            },
            {
              link: "https://www.service-public.fr/particuliers/vosdroits/F34550",
              imageSrc: "/assets/service_public.png",
              label: "Service public -",
              description: "pour définir, prouver et signaler un outrage sexiste"
            }
          ]}
        />




        <p className="texte">
          Depuis 2023, le 25 janvier marque la Journée nationale contre le sexisme. 
          Instituée par le Haut Conseil à l'Égalité, elle vise à sensibiliser aux comportements sexistes et à mobiliser la société contre toutes les formes d'inégalités. 
        </p>
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={[
            {
              link: "https://www.egalite-femmes-hommes.gouv.fr/25-janvier-toutes-et-tous-mobilises-contre-le-sexisme",
              imageSrc: "/assets/min_egalite.png",
              label: "Ministère chargé de l'égalité entre les femmes et les hommes et de la lutte contre les discriminations -",
              description: "pour en découvrir plus sur le 25 janvier"
            }
          ]}
        />

        <ExternalLinkBlock
          title=""
          subtitle="Il existe des associations directement à Lyon si tu veux entrer en contact avec des personnes luttant contre les VSS, pour demander des conseils, partager tes expériences ou même pour t'engager !"
          resources={[
            {
              link :"https://www.filactions.org/association-filactions-lyon-qui-sommes-nous/",
              imageSrc :"/assets/filactions.png",
              label : "Filaction",
              description :"Une association luttant contre le sexisme à Lyon"
            }
          ]}
        />


        <p className="texte">
          Tu ne sais pas à qui en parler ? Un·e amie·e, proche, professeur·e : tu peux en parler à une personne en qui tu as confiance. Tu peux aussi aller voir un professionnel. Des ressources à Centrale Lyon ou à l'extérieur sont également disponibles.
        </p>
        
        <ExternalLinkBlock
          resources={arbre}
        />  

        <p className="texte">
          Tu peux également évaluer ta situation avec les différents violentomètres suivants :
        </p>

        <ExternalLinkBlock
          resources={barometres}
        />
      </div>

      <Separateur />

      <div id="racistes">
        <h1 className="titre">Discriminations racistes</h1>
        <ImageTextPopup
          image="./assets/cartes/8_carreau.png"
          title="La carte 8♦"
          shortText="TEXTE A FAIRE"
          longText="TEXTE A FAIRE"
          textButton="⤢ Agrandir la carte"
          suit="carreau"
        />
        <p className="texte">
          Les discriminations racistes sont fondées sur l'origine, la nationalité, la couleur de peau, ou des attributs culturels ou religieux. Elles se manifestent parfois par des propos, des exclusions sociales, ou des violences, ou encore des stéréotypes dans les cours, le logement ou même stages et emplois.
        </p>
        <h2 className="sous-titre-2">
          Discriminations ou conséquences des discriminations racistes fréquentes :
        </h2>
        <BulletList items={[
          "Refus de logement ou hébergement",
          "Propos ou stéréotypes dans les cours ou au sein du campus",
          "Discriminations dans l'évaluation ou accès aux stages, emplois",
          "Isolement ou rejet des pairs, micro-agressions quotidiennes"
        ]} />
        <p className="texte">
          En France, environ 18 % des personnes de 18-49 ans déclarent avoir subi des traitements inégalitaires ou discriminatoires selon les dernières enquêtes. Ce taux est en hausse par rapport aux années précédentes, surtout parmi les personnes d'origine immigrée.
        </p>


        <ExternalLinkBlock
          title="Associations spécialisées"
          subtitle="Ressources locales et nationales pour signaler ou s'informer"
          resources={[
            {
              link: "https://egalitecontreracisme.fr/ce-que-dit-la-loi",
              imageSrc: "/assets/egalite_contre_racisme.png",
              label: "Egalité contre le racisme -",
              description: "Pour en apprendre plus sur la loi, les propos racistes et les discriminations racistes"
            },
            {
              link: "https://www.licra.org/signaler",
              imageSrc: "/assets/licra.png",
              label: "LICRA : Ligue Internationale Contre le Racisme et l'Antisémitisme -",
              description: "Pour signaler des actes racistes"
            }
          ]}
        />

        <ContactCard
          image="/assets/egalite_contre_racisme.png"
          title="SOS racisme - pôle juridique"
          subtitle="Contact local pour les discriminations racistes"
          phone="01 40 35 36 55"
          email=""
          hours="Permanences téléphoniques du lundi au vendredi de 10h00 à 13h00 et le mercredi de 10h00 à 18h00"
          textButton="Voir le site"
          link="https://egalitecontreracisme.fr/dispositifs/numero-de-telephone-du-pole-juridique-pour-les-victimes"
          
          bgColor="#ffffffff"    //informations facultatives
          textColor="#e90202ff"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

        />


        <p className="texte">
          Chaque année, courant mars, a lieu la semaine d'éducation et d'actions contre le racisme et l'antisémitisme, organisée autour du 21 mars, qui est la journée internationale de lutte contre le racisme. De nombreuses initiatives éducatives, associatives et institutionnelles sont proposées à cette occasion partout en France.
        </p>
                <ExternalLinkBlock
          title=""
          subtitle=""
          resources={[
            {
              link: "https://www.education.gouv.fr/la-semaine-d-education-et-d-actions-contre-le-racisme-et-l-antisemitisme-5204",
              imageSrc: "/assets/min_ed.png",
              label: "Ministère de l'éducation nationale -",
              description: "Pour en apprendre plus sur la semaine d'éducation et d'actions contre le racisme et l'antisémitisme"
            }
          ]}
        />
      </div>

      <Separateur />

      <div id="lgbtphobes">
        <h1 className="titre">Discriminations LGBT-phobes</h1>
        <ImageTextPopup
          image="./assets/cartes/9_carreau.png"
          title="La carte 9♦"
          shortText="TEXTE A FAIRE"
          longText="TEXTE A FAIRE"
          textButton="⤢ Agrandir la carte"
          suit="carreau"
        />

        <p className="texte">
          Les LGBTphobies regroupent plusieurs formes de rejet ou de haine envers les personnes en raison de leur orientation sexuelle ou de leur identité de genre.  
          L'<b>homophobie</b> vise les personnes attirées par des individus du même genre ; la <b>lesbophobie</b> désigne les formes spécifiques de rejet ou de sexualisation subies par les femmes lesbiennes ; la <b>biphobie</b> renvoie aux préjugés envers les personnes bisexuelles, souvent accusées d'indécision ou d'infidélité ; la <b>transphobie</b> cible les personnes transgenres ou en questionnement sur leur identité de genre, à travers le refus du prénom d'usage, des moqueries ou des violences.  
          Ces attitudes peuvent s'exprimer dans tous les milieux — scolaire, professionnel, familial, sportif — et avoir des conséquences graves sur la santé mentale et le sentiment de sécurité des personnes concernées.
        </p>

        <h2 className="sous-titre-2">
          Discriminations ou conséquences des discriminations LGBT-phobes fréquentes :
        </h2>
        <BulletList items={[
          "Propos ou gestes insultants, humiliants ou stéréotypés",
          "Rejet ou isolement dans les sphères personnelles, scolaires ou professionnelles",
          "Violences physiques, menaces ou harcèlement",
          "Discriminations dans l'accès au logement, aux soins, aux stages ou à l'emploi",
          "Cyber-harcèlement, outing forcé ou contenus haineux en ligne",
          "Invisibilisation des identités ou refus de reconnaissance (ex. prénom d'usage)"
        ]} />

        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={autres_pages_lgbtphobie}
        />

        <p className="texte">
          En France, les enquêtes récentes montrent que les personnes LGBT+ sont encore très exposées aux discriminations, en particulier les jeunes et les personnes transgenres. 
          Les conséquences peuvent être graves : isolement, anxiété, dépression ou difficultés d'accès aux droits.
        </p>

        <ExternalLinkBlock
          title="Associations spécialisées"
          subtitle="Soutien, signalement et informations"
          resources={[
            {
              link: "https://www.sos-homophobie.org/",
              imageSrc: "/assets/SOS_homophobie.jpg",
              label: "SOS Homophobie",
              description: "Ligne d'écoute, d'aide et de signalement"
            },
            {
              link: "https://questionsexualite.fr/lutter-contre-les-violences-et-discriminations/la-violence-dans-la-societe/que-sont-les-lgbtphobies",
              imageSrc: "/assets/question_sexualite.png",
              label: "Question sexualité",
              description: "pour s'informer sur les LGBTphobies"
            }
          ]}
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

        <p className="texte">
          Chaque année, le 17 mai est la Journée internationale de lutte contre l'homophobie, la transphobie et la biphobie. 
          De nombreuses initiatives associatives, universitaires et institutionnelles sont organisées pour sensibiliser et promouvoir l'égalité des droits.
        </p>

        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={[
            {
              link: "https://www.fondationemergence.org/nouvelles/lhistoire-du-17-mai-origines-et-evolution-de-la-journee-internationale-contre-lhomophobie-et-la-transphobie",
              imageSrc: "/assets/fondation_emergence.png",
              label: "Fondation émergence",
              description: "Histoire et importance de la Journée internationale contre l'homophobie et la transphobie"
            }
          ]}
        />
        <ExternalLinkBlock
          title="Pour en apprendre plus"
          subtitle=""
          resources={[
            {
              link: "https://www.cestcommeca.net/",
              imageSrc: "/assets/cestcommeca.png",
              label: "C'est comme ça",
              description: "Comprendre, découvrir la culture et savoir comment faire face aux discriminations"
            }
          ]}
        />

      </div>

      <Separateur />

      <div id="temoin">
        <h1 className="titre">Que faire en tant que victime/témoin de discrimination ?</h1>
        <p className="texte">
          Être confronté·e à une discrimination, que l'on en soit directement victime ou témoin, n'est jamais simple. 
          On peut se sentir choqué·e, impuissant·e ou craindre de mal réagir. Pourtant, il existe toujours des façons d'agir ou de chercher du soutien. 
          Même de petits gestes comptent : parler de ce qui s'est passé, tendre une oreille attentive, ou simplement ne pas laisser la situation dans le silence. 
          L'important est de ne pas rester isolé·e : tu n'as pas à porter cela seul·e, des personnes et des dispositifs existent pour t'accompagner.
        </p>


        <ListeNumerotee
          title="Actions possibles"
          subtitle="Quelques étapes pour réagir face à une discrimination"
          items={[
            { title: "Parler", subtitle: "Tu n'es pas seul·e — confie ce que tu vis ou ce que tu vois à une personne de confiance (ami·e, enseignant·e, personnel de santé, association)." },
            { title: "Soutenir la personne", subtitle: "Ne laisse pas la victime isolée : même une parole bienveillante ou une écoute attentive peut briser le sentiment de solitude." },
            { title: "Collecter des preuves", subtitle: "Messages, photos, témoignages, dates et lieux : ces éléments sont utiles si la personne souhaite signaler les faits, même anonymement." },
            { title: "Utiliser les dispositifs internes", subtitle: "Infirmier·e, référent·e égalité, cellule de signalement du CROUS ou de l'établissement : ces relais existent pour accompagner les victimes et les témoins." },
            { title: "Se tourner vers des services externes", subtitle: "Défenseur des droits, associations spécialisées (SOS Homophobie, LICRA, etc.), lignes d'écoute : tu n'as pas à porter ça seul·e." },
            { title: "Agir si c'est possible", subtitle: "Quand tu te sens en sécurité, tu peux intervenir directement (ex. dire que ce n'est pas acceptable, détourner l'attention). Si tu ne peux pas, ton soutien en privé est déjà précieux." }
          ]}
        />

        <p className="texte">
          Rappelle-toi : tu n'es jamais obligé·e de tout faire seul·e. Le simple fait de ne pas fermer les yeux est déjà un premier pas important. Chacun·e peut agir à son échelle, et ensemble, ces petites actions construisent un environnement plus sûr et respectueux.
        </p>
      </div>
      <Separateur />

      <p className="texte">
          <em><b>Sources :</b> Crous, 
          Ministère de l'Enseignement supérieur et de la Recherche, 
          SOS Homophobie, 
          Dépêche & enquêtes nationales,
          Haut Conseil à l'Égalité (rapport 2024), 
          Service-public.fr, 
          Question Sexualité, 
          Ministère de l'Éducation nationale, 
          Fondation Émergence, 
          LICRA, 
          Égalité contre le racisme, 
          Centre LGBTI+ Lyon </em>
      </p>
    </div>
  );
};

export default Discriminations;