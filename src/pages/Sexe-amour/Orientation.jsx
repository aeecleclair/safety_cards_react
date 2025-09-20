import React from "react";
import "../../App.css";
import ExternalLinkBlock from "../../components/Liens-ext";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import { Navbar, BulletList, TextImageRight } from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que l’orientation sexuelle ?", target: "definitions" },
  { label: "Parler de son orientation", target: "comingout" },
  { label: "Accompagner et soutenir", target: "soutien" },
];

const data = [
  { number: "1/5", title: "Étudiant·es", description: "ne se définissent pas comme hétérosexuel·les (IFOP 2023)" },
  { number: "13,3%", title: "Des élèves", description: "ont subi des propos LGBTphobes sur leur campus" },
  { number: "+50%", title: "Des jeunes LGBT+", description: "rapportent avoir déjà souffert d’isolement ou d’anxiété liés à leur orientation" },
];

const ressourcesSpecifiques = [
  {
    link: "https://www.mag-jeunes.org/",
    imageSrc: "/assets/mag.png",
    label: "MAG Jeunes LGBT+ Lyon",
    description: "Permanences, écoute, dépistage gratuit, santé sexuelle à Lyon"
  }
];

const resources_sites = [
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Conseils santé affective, sexuelle, amour, mal-être : tu peux y poser toutes tes questions !"
  },
  {
    link: "https://commentonsaime.fr/ma-sexualite/lamour-et-moi/comment-connaitre-son-orientation-sexuelle/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s’aime ?",
    description: "Explications, FAQ & conseils pour questionner son orientation"
  },
  {
    link: "https://www.crous-lyon.fr/social-et-accompagnement/",
    imageSrc: "/assets/logo_crous.png",
    label: "Service Social du CROUS de Lyon",
    description: "Écoute, aide psychologique & administrative, changement de prénom, etc. à Lyon"
  },
  {
    link: "https://masante.universite-lyon.fr/sante-mentale/annuaire-sante-mentale/lgbtq-rhone-309796.kjsp",
    imageSrc: "/assets/logo_sante_lyon.png",
    label: "Santé mentale & LGBTQI+ Rhône",
    description: "Ligne d’écoute, violence/discriminations, aide affective & sexuelle dans le Rhône"
  },
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
    description: "Ligne d’écoute, violence/discriminations, aide affective & sexuelle dans le Rhône"
  },
  {
    link: "https://le-refuge.org/la-ligne-decoute/",
    imageSrc: "/assets/le_refuge.png",
    label: "Le Refuge – Ligne d'écoute",
    description: "Jeunes LGBT+ en détresse — appel ou SMS"
  }
];

const resources_Autres_pages = [
  {
    link: "/genre",
    emoji : "??",
    label: "Identité de genre",
    description: "Comprendre le genre, les différentes identités et mieux se repérer dans son propre parcours",
  },

  {
    link: "/discri",
    emoji : "??",
    label: "Discriminations",
    description: "Comment réagir et soutenir face aux discriminations ?",
  }
];

const localContacts = [
  {
    image: "/assets/refuge_logo.png",
    title: "Le Refuge – Ligne d'écoute",
    subtitle: "Jeunes LGBT+ en détresse — appel ou SMS",
    phone: "06 31 59 69 50",
    hours: "7j/7, de 8h à minuit",
    textButton: "Voir le site web",
    link: "https://le-refuge.org/la-ligne-decoute/"
  }
];

const Orientation = () => {
  return (
    <div className="page">

      <h1 className="titre-page">Orientation sexuelle</h1>
      <Navbar links={navLinks} />

      {/* Définition */}
      <div id="definitions">
        <h1 className="titre">Qu'est-ce que l’orientation sexuelle ?</h1>
        <ImageTextPopup
          image="./assets/cartes/as_coeur.png"
          title="La carte A♥"
          shortText="TEXTE A FAIRE"
          longText="TEXTE A FAIRE"
          textButton="⤢ Agrandir la carte"
          suit="coeur"
        />
        <p className="texte">
          L’orientation sexuelle correspond à l’attirance affective, romantique et/ou sexuelle qu’une personne peut ressentir envers d’autres personnes. Elle n’est pas choisie, mais fait partie intégrante de l’identité d’une personne. Elle est différente de l’identité de genre, qui concerne le fait de se sentir homme, femme, les deux, aucun des deux ou autrement.
        </p>

        <h2 className="sous-titre-2">Quelques repères</h2>
        <BulletList
          items={[
            "Hétérosexualité : attirance affective et/ou sexuelle pour les personnes d’un genre différent du sien",
            "Homosexualité : attirance affective et/ou sexuelle pour les personnes du même genre",
            "Bisexualité : attirance pour plusieurs genres",
            "Asexualité : absence ou très faible attirance sexuelle, mais possible attirance romantique",
            "Pansexualité : attirance indépendante du genre ou du sexe",
            "Questionnement : être dans une période d’incertitude, d'exploration, sans devoir tout savoir"
          ]}
        />
        <ChiffresGroup chiffres={data} />
      </div>

      <Separateur />

      {/* Parler de son orientation */}
      <div id="comingout">
        <h1 className="titre">Parler de son orientation</h1>
          <p>
            Parler de son orientation, parfois appelé « coming out », c’est un choix personnel, libre et souvent progressif. On le fait quand on se sent prêt·e, ou on ne le fait pas : encore une fois, c'est un choix personnel. On peut commencer par soi-même, puis auprès d’un·e ami·e, proche ou d’un·e professionnel·le. Ce moment peut être source de soulagement, mais aussi de doutes : c’est normal.
          </p>
        
        <h2 className="sous-titre-2">Conseils pour t’aider</h2>
        <BulletList items={[
          "Donne-toi ton temps : tu n’es pas obligé·e de tout dire immédiatement",
          "Choisis une personne de confiance",
          "Prépare ce que tu veux dire, éventuellement avec écrit ou message",
          "Cherche des témoignages, groupes de parole pour ne pas te sentir seul·e"
        ]} />

        {/* Liens d'information */}
        {resources_sites.slice(0, 2).map((site, idx) => (
          <ContactCard
            key={idx}
            image={site.imageSrc}
            title={site.label}
            subtitle={site.description}
            textButton="Voir le site web"
            link={site.link}
          />
        ))}
      </div>

        <ExternalLinkBlock
          title="Ressources pour aller plus loin"
          subtitle="Il y a également des numéros de téléphone ou des endroits dans Lyon pour discuter de ta sexualité si tu en ressens le besoin :"
          resources={ressourcesGenerales}
        />

        <ExternalLinkBlock
          title=""
          subtitle="Tu te poses également des questions sur ton identité de genre ? Tu subis des discriminations ? N'hésite pas à continuer à te renseigner, tu n'es jamais seul·e."
          resources={resources_Autres_pages}
        />

      <Separateur />

      {/* Accompagner & soutenir */}
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
            { title: "Respecter le rythme", subtitle: "Accepter qu’il y ait des moments de doutes ou de silence" },
            { title: "Agir contre les discriminations", subtitle: "Ne pas tolérer les propos ou actes LGBTphobes, soutenir la personne à signaler ou à se faire aider" },
            { title: "Orienter vers des ressources locales", subtitle: "Associations, services, ligne d’écoute à Lyon" },
          ]}
        />

        <p>
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
          link="/infirmerie"
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
      <p className="texte"><em><b>Sources :</b> IFOP 2023, SOS Homophobie, MAG Jeunes Lyon, Le Refuge, Crous de Lyon, Santé mentale Rhône</em></p>
    </div>
  );
};

export default Orientation;
