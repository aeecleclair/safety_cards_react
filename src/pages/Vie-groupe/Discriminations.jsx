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
  { label: "Qu’est-ce que la discrimination ?", target: "definitions" },
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
    subtitle: "Harcèlement, propos, refus d’accès, violences physiques ou psychologiques sont punissables selon les lois (Code pénal, Code de l’éducation, etc.)."
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

      {/* Partie 1 : Définitions & généralités */}
      <div id="definitions">
        <h1 className="titre">Qu’est-ce que la discrimination ?</h1>
        <ImageTextPopup
          image="./assets/cartes/valet_coeur.png"
          title="La carte V♥"
          shortText="TEXTE A FAIRE"
          longText="TEXTE A FAIRE"
          textButton="⤢ Agrandir la carte"
          suit="coeur"
        />

        {/* Définition simple */}
        <p className="texte">
          La discrimination désigne toute distinction, exclusion ou préférence fondée sur un motif interdit par la loi, qui a pour effet de porter atteinte à l’égalité de traitement. Les motifs prohibés par la loi sont les suivants :
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

        {/* Rappel légal des sanctions */}
        <p className="texte">
          En France, la discrimination est un délit.  
          Selon l’article 225-2 du Code pénal, elle est punie de 3 ans d’emprisonnement et de 45 000 € d’amende (portés à 5 ans et 75 000 € si la discrimination a lieu dans un établissement recevant du public ou par une personne dépositaire de l’autorité publique).  
        </p>

        <p className="texte">
          En France, la loi protège de nombreux motifs discriminatoires. Tu as des droits. Ce n’est jamais ta faute si quelqu’un te discrimine.
        </p>

        <p className="texte">
          La loi s’applique aussi aux réseaux sociaux : publier, commenter, repartager ou même retweeter des propos discriminatoires est passible des mêmes sanctions pénales. Être derrière un écran ne donne pas le droit d’insulter ou de propager des contenus discriminatoires.
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
          Beaucoup de personnes discriminées n’en parlent pas ou ne savent pas vers qui se tourner : 87,7% des personnes discriminées ne demandent pas d’aide (92,3% des femmes et 87,0% des hommes). Il existe des dispositifs de signalement, des soutiens psychologiques, juridiques et associatifs, sur le campus, à Lyon ou en ligne.
        </p>

        <ContactCard
          image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
          title="Infirmerie"
          subtitle="Infirmerie de Centrale Lyon : un lieu d'écoute"
          phone="Voir les informations"
          email="Voir les informations"
          hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
          textButton="Voir les informations"
          link="/infirmerie"

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

      <Separateur />


      {/* Partie 2 : Discriminations sexistes */}
      <div id="sexistes">
        <h1 className="titre">Discriminations sexistes</h1>
        <TextImageRight
          imageSrc="/assets/sexisme.jpg"
          text="Les discriminations sexistes concernent toute inégalité ou violence basée sur le sexe ou le genre : harcèlement, remarques, violences sexuelles, inégalités dans les opportunités. Les femmes, les personnes non-binaires ou trans peuvent être particulièrement exposées."
        />
        <BulletList items={[
          "Violences verbales ou sexuelles, harcèlement de rue ou dans les études",
          "Inégalités de traitement ou d’accès selon le genre",
          "Pression sociale sur le “rôle de genre” attendu"
        ]} />
        <p className="texte">
          Les établissements comme le CROUS ou les universités doivent proposer des cellules d’écoute, des services sociaux ou des référent·es égalité pour accompagner les victimes.
        </p>
      </div>

      <Separateur />

      {/* Partie 3 : Discriminations racistes */}
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
        <TextImageRight
          imageSrc="/assets/racisme.jpg"
          text="Les discriminations racistes sont fondées sur l’origine, la nationalité, la couleur de peau, ou des attributs culturels ou religieux. Elles se manifestent parfois par des propos, des exclusions sociales, des violences ou des inégalités d’accès."
        />
        <BulletList items={[
          "Refus de logement ou hébergement",
          "Propos ou stéréotypes dans les cours ou au sein du campus",
          "Discriminations dans les échanges sociaux ou dans l’évaluation"
        ]} />
        <p className="texte">
          Pour les étudiants racisés ou issus de l’immigration, ces discriminations peuvent s’additionner à d’autres formes — genre, orientation sexuelle — et avoir de graves conséquences psychologiques/scolaires.  
        </p>
      </div>

      <Separateur />

      {/* Partie 4 : Discriminations LGBT-phobes */}
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
        <TextImageRight
          imageSrc="/assets/lgbtphobia.jpg"
          text="Les discriminations LGBT-phobes concernent toute personne en raison de son orientation sexuelle ou identité de genre. Elles se manifestent par des propos, des refus, harcèlement, violences, exclusion sociale."
        />
        <BulletList items={[
          "Propos ou gestes insultants, humiliants ou stéréotypes",
          "Rejet ou isolement dans les sphères personnelles ou scolaires",
          "Violences physiques ou menaces",
          "Discriminations dans l'accès au logement, services, ou stages/emploi"
        ]} />
        <p className="texte">
          En France, les actes LGBT-phobes sont de plus en plus signalés. Par exemple, le CROUS de Lyon dispose d’un dispositif de signalement des violences, discriminations et propos discriminatoires à caractère sexiste, sexuel ou discriminatoire.  
        </p>
        <ExternalLinkBlock
          title="Associations & plateformes LGBT+ utiles"
          subtitle="Pour soutien, signalement ou information"
          resources={[
            {
              link: "https://sos-homophobie.org/",
              imageSrc: "/assets/logo_sos_homophobie.png",
              label: "SOS Homophobie",
              description: "Écoute, soutien & accompagnement pour les victimes LGBT-phobes"
            },
            {
              link: "https://outrans.org/",
              imageSrc: "/assets/logo_outrans.png",
              label: "OUTrans",
              description: "Lutte contre la transphobie & espaces ressources trans"
            }
          ]}
        />
      </div>

      <Separateur />

      {/* Appel à l’aide / réaction */}
      <div id="temoin">
        <h1 className="titre">Que faire en tant que témoin ?</h1>
        <ListeNumerotee
          title="Actions possibles"
          subtitle=" étapes pour réagir face à une discrimination"
          items={[
            { title: "Parler", subtitle: "Tu n’es pas seul·e — confier ce que tu vis ou ce que tu vois à une personne de confiance" },
            { title: "Collecter des preuves", subtitle: "messages, photos, témoignages, dates et lieux, même anonymes si possible" },
            { title: "Utiliser les dispositifs internes", subtitle: "infirmier·e, référent·e égalité, cellule de signalement du CROUS ou de l’établissement" },
            { title: "Se tourner vers des services externes", subtitle: "Défenseur des droits, associations spécialisées (SOS Homophobie, LICRA, etc.)" },
          ]}
        />
      </div>

      <Separateur />

      <p className="texte"><em><b>Sources :</b> Crous (Lyon signalement VSS & discriminations), Ministere de l’Enseignement supérieur et de la recherche, SOS Homophobie, Dépêche & enquêtes nationales, FRA, Plan LGBT+ France</em></p>
    </div>
  );
};

export default Discriminations;
