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
    link: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165298/#LEGISCTA000006165298",
    imageSrc: "/assets/min.png",
    label: "Articles 225-1 à 225-4",
    description: "définissant ce qui constitue une discrimination",
  }
];

const resources_pénale2 = [
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
    emoji : "??",
    label: "Harcèlement",
    description: "Comment agir face au harcèlement ?"
  },
  {
    link: "/isolement",
    emoji : "??",
    label: "Isolement",
    description: "Que puis-je faire si je me sens à l'écart ?"
  },
  {
    link: "/anxiete",
    emoji : "??",
    label: "Anxiété",
    description: "Que puis-je faire si je me sens anxieux ?",
  }
];

const autres_pages_sexisme = [
  {
    link: "/vss",
    emoji : "??",
    label: "Violences sexistes et sexeulles",
    description: "Comment réagir face à une VSS ?"
  }
];

const autres_pages_lgbtphobie = [
  {
    link: "/cyber_harcel",
    emoji : "??",
    label: "Cyberharcèlement",
    description: "Comment réagir face à du cyberharcèlement ?"
  }
];

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




/* Provisoire : page non faite */
import Workinprogress from "../../components/WorkInProgress";

const resources_sites = [

  {
    link: "https://www.etudiant.gouv.fr/fr",
    imageSrc: "/assets/etudiant_gouv.jpg",
    label: "Etudiant.gouv.fr",
    description: "Le site officiel du gouvernement pour les étudiants",
  },
  {
    link: "https://www.lyoncampus.com/",
    imageSrc: "/assets/logo_lyon_campus.png",
    label: "Lyon Campus",
    description: "Etudier, vivre, sortir et s'impliquer comme étudiant à Lyon"
  },
  {
    link: "https://www.universite-lyon.fr/vie-des-campus/vie-etudiante/nos-portails-sante-et-aides-etudiantes/",
    imageSrc: "/assets/logo_UDL.png",
    label: "Portails Santé et Aides de l'UDL",
    description : "Toutes les informations, dispositifs et procédures"

  },
  {
    link: "https://commentonsaime.fr/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s'aime ?",
    description: "Pour se renseigner sur les relations amoureuses, amicales, familliales...",
  },

  {
    link: "https://www.crous-lyon.fr ",
    imageSrc: "/assets/logo_crous.png",
    label: "Crous de Lyon",
    description: "Aides, accompagnement, logements, restauration, international...",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Pour parler santé, sexualité, amour, mal être...",
  },
];



const Discriminations = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Discriminations</h1>





        <Workinprogress/>

        <h1 className = "titre">Les ressources globales</h1>
      <ExternalLinkBlock
        subtitle="Voici quelques sites regoupant un grand nombre d'informations sur diverses thématiques"
        resources={resources_sites}



      />




      {/* Provisoire : page non faite 


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
          <li>Origine</li>
          <li>Sexe</li>
          <li>Situation de famille</li>
          <li>Grossesse</li>
          <li>Apparence physique</li>
          <li>Particulière vulnérabilité résultant de la situation économique</li>
          <li>Patronyme</li>
          <li>Lieu de résidence</li>
          <li>Etat de santé</li>
          <li>Perte d'autonomie</li>
          <li>Handicape</li>
          <li>Caractéristiques génétiques</li>
          <li>Moeurs</li>
          <li>Orientation sexuelle </li>
          <li>Identité de genre</li>
          <li>Age</li>
          <li>Opinions politiques</li>
          <li>Activités syndicales</li>
          <li>Qualité de lanceur d'alerte, de facilitateur ou de personne en lien avec un lanceur d'alerte</li>
          <li>Capacité à s'exprimer dans une langue autre que le français</li>
          <li>Appartenance ou non-appartenance, vraie ou supposée, à une ethnie, Nation, prétendue race ou religion déterminée</li>
        </ul>

        <p className="texte">
          En France, la discrimination est un délit.  
          Selon l'article 225-2 du Code pénal, elle est punie de 3 ans d'emprisonnement et de 45 000 € d'amende (portés à 5 ans et 75 000 € si la discrimination a lieu dans un établissement recevant du public ou par une personne dépositaire de l'autorité publique).  
        </p>

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
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={resources_pénale2}
        />

        <h2 className="sous-titre-2">Quelques chiffres récents sur le campus</h2>

        <ChiffresGroup chiffres={dataGeneral} />
        <p className="texte">
          Beaucoup de personnes discriminées n'en parlent pas ou ne savent pas vers qui se tourner : 87,7% des personnes discriminées ne demandent pas d'aide (92,3% des femmes et 87,0% des hommes). Il existe des dispositifs de signalement, des soutiens psychologiques, juridiques et associatifs, sur le campus, à Lyon ou en ligne.
        </p>

        <ContactCard
          image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
          title="Infirmerie"
          subtitle="Infirmerie de Centrale Lyon : un lieu d'écoute"
          phone="Voir les informations"
          email="Voir les informations"
          hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
          textButton="Voir les informations"
          link="https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990"

          bgColor="#ffffff"    //informations facultatives
          textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

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

          bgColor="#ffffffff"    //informations facultatives
          textColor="#7f096bff"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

        />

        <ContactCard
          image="/assets/universite_de_lyon_bis.jpg" 
          title="Ma santé - Université de Lyon"
          subtitle="Signalement : pour signaler des faits de violences, de discrimination ou de harcèlement à Centrale Lyon"
          phone=""
          email="harcelement@listes.ec-lyon.fr"
          hours=""
          textButton="Voir le site"
          link="https://masante.universite-lyon.fr/stop-violences/comment-se-deroule-un-signalement-nbsp-/ecole-centrale-de-lyon-275717.kjsp"

          bgColor="#ffffffff"    //informations facultatives
          textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

        />
      </div>
      <p className="texte">
        Tu subis du <b>harcèlement</b> ? Tu te sens <b>isolé</b> ? Tu es <b>anxieux</b> ? N'hésite pas à visiter d'autres pages pour continuer à te renseigner :
      </p>
        <ExternalLinkBlock
        title=""
        subtitle=""
        resources={autres_pages_global}
      />

      <Separateur />


      <div id="sexistes">
        <h1 className="titre">Discriminations sexistes</h1>
        <p>
          Les discriminations sexistes concernent toute inégalité ou violence basée sur le sexe ou le genre : harcèlement, remarques, violences sexuelles, inégalités dans les opportunités. Le sexisme peut comprendre la croyance qu'un sexe ou qu'un genre serait intrinsèquement supérieur à l'autre. Les femmes, les personnes non-binaires ou les personnes trans peuvent être particulièrement exposées.
        </p>
        <p>
          Discriminations ou conséquences des discriminations sexistes fréquentes :
        </p>
        <BulletList items={[
          "Violences verbales ou sexuelles, harcèlement de rue ou dans les études",
          "Inégalités de traitement ou d'accès selon le genre",
          "Pression sociale sur le “rôle de genre” attendu",
          "Modifications de comportement pour éviter les agressions (se taire, éviter certains lieux, etc.)"
        ]} />
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
              link: "https://www.service-public.fr/particuliers/actualites/A16929",
              imageSrc: "/assets/3919.png",
              label: "3919 -",
              description: "numéro national de référence pour l'écoute et l'orientation des femmes victimes de violences"
            },
            {
              link: "https://www.service-public.fr/particuliers/vosdroits/F34550",
              imageSrc: "/assets/service_public.png",
              label: "Service public -",
              description: "pour définir, prouver et signaler un outrage sexiste"
            }
          ]}
        />

        <ContactCard
          image="/assets/filactions.png" 
          title="Filaction"
          subtitle="Une association luttant contre le sexisme à Lyon"
          phone=""
          email=""
          hours=""
          textButton="Voir le site"
          link="https://www.filactions.org/association-filactions-lyon-qui-sommes-nous/"

          bgColor="#ffffffff"    //informations facultatives
          textColor="#930480ff"  //elles seront chosies en fonction de la couleur du logo si non spécifiées
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

        <p>
          Les discriminations sexistes peuvent être accompagnées de violences sexistes et sexuelles :
          Qu'est-ce qu'une VSS ? Comment réagir ? Si tu te poses ces questions, n'hésite pas à t'informer juste ici : 
        </p>
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={autres_pages_sexisme}
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
        <p className="texte">
          Discriminations ou conséquences des discriminations racistes fréquentes :
        </p>
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
              link: "https://www.licra.org/signaler",
              imageSrc: "/assets/licra.png",
              label: "LICRA : Ligue Internationale Contre le Racisme et l'Antisémitisme -",
              description: "Pour signaler des actes racistes"
            },
            {
              link: "https://egalitecontreracisme.fr/ce-que-dit-la-loi",
              imageSrc: "/assets/egalite_contre_racisme.png",
              label: "Egalité contre le racisme -",
              description: "Pour en apprendre plus sur la loi, les propos racistes et les discriminations racistes"
            }
          ]}
        />

        <ContactCard
          image="/assets/egalite_contre_racisme.png"
          title="SOS Racisme Lyon"
          subtitle="Contact local pour les discriminations racistes"
          phone="04 78 95 01 38"
          email="contact@sosracismerhone.org"
          hours="Permanences & accueil selon disponibilité"
          textButton="Voir le site"
          link="https://egalitecontreracisme.fr/sos-racisme-lyon"
          
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
          Les discriminations LGBT-phobes regroupent entre autre l'homophobie, la lesbophobie, la biphobie et la transphobie. 
          Elles sont souvent fondées sur des préjugés ou stéréotypes liés à l'orientation sexuelle ou à l'identité de genre. 
          Ces discriminations portent atteinte aux droits fondamentaux et à la dignité des personnes concernées.
        </p>

        <p className="texte">
          Discriminations ou conséquences des discriminations LGBT-phobes fréquentes :
        </p>
        <BulletList items={[
          "Propos ou gestes insultants, humiliants ou stéréotypés",
          "Rejet ou isolement dans les sphères personnelles, scolaires ou professionnelles",
          "Violences physiques, menaces ou harcèlement",
          "Discriminations dans l'accès au logement, aux soins, aux stages ou à l'emploi",
          "Cyber-harcèlement, outing forcé ou contenus haineux en ligne",
          "Invisibilisation des identités ou refus de reconnaissance (ex. prénom d'usage)"
        ]} />

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
              label: "SOS Homophobie -",
              description: "Ligne d'écoute, d'aide et de signalement"
            },
            {
              link: "https://questionsexualite.fr/lutter-contre-les-violences-et-discriminations/la-violence-dans-la-societe/que-sont-les-lgbtphobies",
              imageSrc: "/assets/question_sexualite.png",
              label: "Question sexualité -",
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

        <p>
          Tu subis du cyberharcèlement et tu ne sais pas comment réagir ? Tu n'es pas seul·e :
        </p>
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={autres_pages_lgbtphobie}
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
          <b>Sources :</b> Crous, 
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
          Centre LGBTI+ Lyon
      </p>



      */}

      
    </div>
  );
};

export default Discriminations;
