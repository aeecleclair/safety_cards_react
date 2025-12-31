"use client";

import React from "react";
import "@/src/App.css";
import ExternalLinkBlock from "@/components/Liens-ext";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import { BulletList, TextImageRight } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { img } from "framer-motion/m";

const navLinks = [
  { label: "Qu'est-ce que l'orientation sexuelle ?", target: "definitions" },
  { label: "Parler de son orientation", target: "comingout" },
  { label: "Accompagner et soutenir", target: "soutien" },
];

const data = [
  { number: "1/5", title: "Étudiant·es", description: "ne se définissent pas comme hétérosexuel·les (IFOP 2023)" },
  { number: "13,3%", title: "Des élèves", description: "ont subi des propos LGBTphobes sur leur campus" },
  { number: "+50%", title: "Des jeunes LGBT+", description: "rapportent avoir déjà souffert d'isolement ou d'anxiété liés à leur orientation" },
];

const genre = [
  {
    link: "/genre",
    label: "Identité de genre",
    description: "Au fait, c'est quoi le genre ?",
    emoji : "🏳️‍⚧️",
  }
];

const outing = [
  {
    link: "https://www.lgbt-colors.com/outing-definition/",
    label: "Outing : définition et impact social",
    description: "Concept et historique, débats éthiques, sensibilisation",
    imageSrc: "/assets/lgbt-colors.jpg"
  }
];

const ressources_sex = [
  {
    link: "https://www.questionsexualite.fr/",
    label: "QuestionSexualite -",
    description: "site d'information sur la sexualité et l'orientation sexuelle",
    imageSrc: "/assets/question_sexualite.png",
  },
  {
    link: "/sex",
    label: "Sexualité",
    description: "La page pour en apprendre davantage sur la contraception et le sexualité",
    emoji:"😘"
  },
  {
    link: "https://www.cestcommeca.net/",
    label: "C'est comme ça -",
    description: "pour des informations sur l'orientation amoureuse, sexuelle et d'identité de genre",
    imageSrc: "/assets/cestcommeca.png"
  }
];

const ressourcesGenerales = [
  {
    link: "https://www.mag-jeunes.org/permanence-lyon-lgbt",
    imageSrc: "/assets/MAG.png",
    label: "MAG - LGBT+ à Lyon",
    description: "Permanences, écoute, dépistage gratuit, santé sexuelle à Lyon"
  },
  {
    link: "https://masante.universite-lyon.fr/sante-mentale/annuaire-sante-mentale/lgbtq-rhone-309796.kjsp",
    imageSrc: "/assets/Universite_de_lyon.png",
    label: "Santé mentale & LGBTQI+ Rhône",
    description: "Ligne d'écoute, violence/discriminations, aide affective & sexuelle dans le Rhône"
  },
  {
    link: "https://le-refuge.org/la-ligne-decoute/",
    imageSrc: "/assets/le_refuge.png",
    label: "Le Refuge – Ligne d'écoute",
    description: "Jeunes LGBT+ en détresse — appel ou SMS"
  },
  {
    link: "https://www.instagram.com/rainbow.ecl/?hl=fr",
    imageSrc: "/assets/rainbow.jpg",
    label: "Rainbow - Compte Instagram",
    description: "Club LGBTQIA+ de l'école Centrale de Lyon"
  }
];

const resources_Autres_pages = [
  {
    link: "/discri",
    emoji : "🟰",
    label: "Discriminations",
    description: "Comment réagir et soutenir face aux discriminations ?",
  }
];


const Orientation = () => {
  return (
    <div className="page">

  <h1 className="titre-page gradient-title">Orientation sexuelle</h1>
  <Sommaire links={navLinks} />

      <div id="definitions">
        <h1 className="titre">Qu'est-ce que l'orientation sexuelle ?</h1>
        <ImageTextPopup
          image="./assets/cartes/as_coeur.png"
          title="La carte A♥"
          shortText="Orientation sexuelle : comprendre et respecter la diversité"
          longText="L’orientation sexuelle fait partie de l’identité de chacun·e. Elle exprime vers qui l’on ressent de l’attirance, qu’elle soit romantique, affective ou sexuelle. Toutes les orientations sont légitimes et méritent respect et confidentialité."
          textButton="⤢ Agrandir la carte"
          suit="coeur"
        />
        <p className="texte">
          L'orientation sexuelle correspond à l'attirance affective, romantique et/ou sexuelle qu'une personne peut ressentir envers d'autres personnes. Elle n'est pas choisie, mais fait partie intégrante de l'identité d'une personne. Elle est différente de l'identité de genre, qui concerne le fait de se sentir homme, femme, les deux, aucun des deux ou autrement.
        </p>

        <h2 className="sous-titre-2">Quelques repères</h2>

        <p className="texte"> Il peut y avoir autant d'orientations sexuelles que de personnes. On dénombre toutefois le plus souvent les 6 suivantes :  </p>
        <BulletList
          items={[
            <><b>Hétérosexualité :</b> attirance affective et/ou sexuelle pour les personnes d'un genre différent du sien</>,
            <><b>Homosexualité :</b> attirance affective et/ou sexuelle pour les personnes du même genre</>,
            <><b>Bisexualité :</b> attirance pour plusieurs genres</>,
            <><b>Asexualité :</b> absence ou très faible attirance sexuelle, mais possible attirance romantique</>,
            <><b>Pansexualité :</b> attirance indépendante du genre ou du sexe</>,
            <><b>Questionnement :</b> être dans une période d'incertitude, d'exploration, sans devoir tout savoir</>
          ]}

        />

        <ExternalLinkBlock resources={genre} />

        <ChiffresGroup chiffres={data} />

        <h2 className="sous-titre-2">Comment connaitre mon orientation sexuelle ?</h2>

        <p className="texte">Il est normal de se poser des questions sur son orientation sexuelle, au gré de sa vie et de ses expériences. Il est donc tout à fait normal que tu aies des doutes ou des questionnements.</p>
        <p className="texte">Mettre des mots sur ce que l'on ressent peut prendre du temps, et on ne se retrouve pas forcément dans une orientation précise. Tu as le droit ne pas savoir. Ce n'est pas parce qu'un garçon est attiré par un garçon qu'il est gay ou bisexuel. Tu as le droit d'expérimenter, cela t'aidera à te découvrir, et te permettra peut-être de découvrir de nouveaux plaisirs ! </p>
        <p className="texte">Si tu en ressens le besoin, tu peux en parler à des personnes de confiance, ou à des professionnel·le·s, par exemple via le tchat de Comment on s'aime ?.</p>

          <ContactCard
            image="/assets/logo-cosa.svg"
            title="Comment on s'aime ?"
            subtitle="Professionnels pour t'écouter et t'accompagner"
            hours="Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h"
            textButton="Voir le site web"
            link="https://commentonsaime.fr/"
            bgColor="#f6a21e"
            textColor="#ffffff"
          />


        <h2 className="sous-titre-2">Qu'est ce que l'hétéronormativité ?</h2>

        <p className="texte">C'est le fait de considérer que tout le monde est hétérosexuel par défaut, sauf mention contraire. Ainsi, il est supposé qu'une femme sera attirée par les hommes et un homme par les femmes. </p>
        <p className="texte">Cela pose problème pour les personnes ne se définissant pas comme hétérosexuelles, car leurs expériences et identités peuvent être invalidées ou ignorées. Il est ainsi plus difficile pour elles de s'accepter et de se faire accepter par leur entourage, ce qui peut les décourager de faire leur coming out ou de parler de leurs sentiments.</p>


        <h2 className="sous-titre-2">Qu'est ce que l' «outing» ?</h2>
        <p className="texte">L'outing est le fait de révéler l'orientation sexuelle ou l'identité de genre d'une personne sans son consentement. Cette pratique est généralement considérée comme une violation de la vie privée. L'orientation sexuelle est privée, et communiquer dessus doit être géré par l'individu lui-même. <b>Chaque personne a le droit de choisir quand et comment elle souhaite partager ces aspects de son identité.</b>
          </p>

          <p className="texte">L'outing peut avoir des conséquences graves sur la vie de la personne concernée, notamment en termes de sécurité, de santé mentale et de relations sociales.</p>

        <ExternalLinkBlock resources={outing} />

      <ExternalLinkBlock
          title="Pour en apprendre davantage sur la sexualité et l'orientation sexuelle"
          resources={ressources_sex}
        />

        <h2 className="sous-titre-2">Tu subis des discriminations ?</h2>
        <p className="texte">Si tu es victime de discriminations en raison de ton orientation sexuelle, sache qu'il existe des ressources et des personnes prêtes à t'aider.</p>
        <ExternalLinkBlock
          resources={resources_Autres_pages}
        />

      </div>


      <Separateur />

      <div id="comingout">
        <h1 className="titre">Parler de son orientation</h1>
          <p className="texte">
            Parler de son orientation, parfois appelé « coming out », c'est un choix personnel, libre et souvent progressif. On le fait quand on se sent prêt·e, ou on ne le fait pas : encore une fois, c'est un choix personnel. On peut commencer par soi-même, puis auprès d'un·e ami·e, proche ou d'un·e professionnel·le. Ce moment peut être source de soulagement, mais aussi de doutes : c'est normal.
          </p>
        
        <h2 className="sous-titre-2">Conseils pour t'aider</h2>
        <BulletList items={[
          "Donne-toi ton temps : tu n'es pas obligé·e de tout dire immédiatement",
          "Choisis une personne de confiance",
          "Prépare ce que tu veux dire, éventuellement avec écrit ou message",
          "Cherche des témoignages, groupes de parole pour ne pas te sentir seul·e"
        ]} />

        <ContactCard
          image="/assets/fsj.png"
          title="Fil Santé Jeunes"
          subtitle="Écoute anonyme & gratuite (12-25 ans)"
          phone="0 800 235 236"
          hours="Tous les jours de 9h à 23h"
          textButton="Voir le site web"
          link="https://www.filsantejeunes.com/"
        />


      </div>


        <ExternalLinkBlock
          title="Ressources pour aller plus loin"
          subtitle="Il y a également des numéros de téléphone ou des endroits dans Lyon pour discuter de ta sexualité si tu en ressens le besoin :"
          resources={ressourcesGenerales}
        />



      <Separateur />

      <div id="soutien">
        <h1 className="titre">Accompagner & soutenir</h1>
        <p className="texte">
          Que tu sois ami·e, proche, enseignant·e ou intervenant·e, voici des idées pour accompagner une personne LGBT+ de manière respectueuse et bienveillante.
        </p>

        <ListeNumerotee
          title="Gestes concrets pour un soutien efficace"
          subtitle="À faire au quotidien"
          items={[
            { title: "Écouter sans jugement", subtitle: "Laisser la parole, ne pas minimiser, ne pas forcer" },
            { title: "Respecter le rythme", subtitle: "Accepter qu'il y ait des moments de doutes ou de silence" },
            { title: "Agir contre les discriminations", subtitle: "Ne pas tolérer les propos ou actes LGBTphobes, soutenir la personne à signaler ou à se faire aider" },
            { title: "Orienter vers des ressources locales", subtitle: "Associations, services, ligne d'écoute à Lyon" },
          ]}
        />

        <p className="texte">
          L'Ecole Centrale de Lyon et le Crous proposent des dispositifs pour accompagner et soutenir : l'infirmière (qui est directement sur le campus), ou encore un service social d'écoute qui propose un accompagnement psychologique et administratif, et permet le signalement des violences et discriminations (LGBTphobes incluses) dans ses structures.
        </p>

        <ContactCard
          image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
          title="Infirmerie"
          subtitle="Infirmerie de Centrale Lyon"
          phone="Voir les informations"
          email="Voir les informations"
          hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
          textButton="Voir les informations"
          link="https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990"
          bgColor="#ffffff"
          textColor="#b22133"
        />

        <ContactCard
          image="/assets/logo_crous.png"
          title="Service social du CROUS de Lyon"
          subtitle="Soutien social et psychologique, et signalement des violences sexuelles, sexistes ou LGBTphobes"
          textButton="Voir les informations"
          link="https://www.crous-lyon.fr/social-et-accompagnement/soutien-et-ecoute/"
          bgColor="#ffffff"
          textColor="#e30613"
        />


      </div>

      <Separateur />
      <p className="texte"><em><b>Sources :</b> IFOP 2023, SOS Homophobie, MAG Jeunes Lyon, Le Refuge, Crous de Lyon, Santé mentale Rhône, Question Sexualité, Comment on s'aime ?</em></p>
    </div>
  );
};

export default Orientation;
