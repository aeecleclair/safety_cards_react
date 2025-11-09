import React from "react";
import "../../App.css";

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Qu'est-ce que l'IVG ?", target: "ivg" },
  { label: "Comment se déroule une IVG ?", target: "deroulement" },
  { label: "Où et qui contacter à Écully / Lyon ?", target: "contacts" },
  { label: "Aide, droits & urgences", target: "aide" },
];

const chiffres = [
  { number: "14", title: "semaines : délai légal", description: "maximum pour réaliser une IVG en France" },
  { number: "7e", title: "semaine : IVG médicamenteuse", description: "possible jusqu'à la fin de la 7ᵉ semaine de grossesse. " },
  { number: "251 270 ", title: "IVG en France en 2024", description: "soit 7000 de plus qu'en 2023." }
];

const localResources = [

  {
    link: "https://www.planning-familial.org/fr/le-numero-vert-national-sexualites-contraception-ivg-0800-08-11-11-261",
    imageSrc: "/assets/planning-familial.jpg",
    label: "Numéro vert national (Planning Familial)",
    description: "0 800 08 11 11 — information gratuite, anonyme : sexualités, contraception, IVG."
  },
  {
    link: "https://ivg.gouv.fr/",
    imageSrc: "/assets/min.png",
    label: "Service public IVG",
    description: "Informations officielles et aide pour trouver des lieux de prise en charge."
  }
];

const resources_infos = [

  {
    link: "https://ivg.gouv.fr/",
    imageSrc: "/assets/gouv.png",
    label: "Site officiel du gouvernement",
    description: "pour répondre aux questions en lien avec l'IVG."
  }
];

const contraception = [
  {
    link: "/contraception",
    label: "Sexualité et contraception",
    description: "Quels sont les différents moyens contraceptifs ?",
    emoji : "🏳️??",
  }
];

const IVG = () => {
  return (
    <div className="page">
      <h1 className="titre-page">IVG : Interruption Volontaire de Grossesse</h1>

      <Sommaire links={navLinks} />

      {/* INTRO */}
      <div id="ivg">
        <h2 className="titre">Qu'est-ce que l'IVG ?</h2>

        <ImageTextPopup
          image="./assets/cartes/5_coeur.png"
          title="La carte 5♥"
          shortText="IVG : comprendre, choisir et se faire accompagner"
          longText="L’IVG est un acte médical légal, confidentiel, et accessible à toute personne enceinte. Ce choix est personnel, protégé par la loi, et s’accompagne d’un suivi bienveillant et d’une totale discrétion médicale."
          textButton="⤢ Agrandir la carte"
          suit="coeur"
        />

        <p className="texte">
          L'IVG est un acte médical accessible en France. Il existe plusieurs façons d'y accéder (consultations d'information, entretien psycho-social si proposé, méthode adaptée selon le terme). Le choix de la méthode se fait avec l'équipe soignante en tenant compte de l'état de santé et du terme de la grossesse.
        </p>

        <Quote
          text="Le droit à avorter, et à pratiquer l'avortement, est garanti par la loi et permet aux femmes qui souhaitent interrompre leur grossesse de le faire sans risque d'être sanctionnées."
          author="Source : Site officiel du gouvernement"
        />

        <ChiffresGroup chiffres={chiffres} />
        <p className="texte">
          Il existe aujourd’hui de nombreuses méthodes de <b>contraception</b> : pilule, préservatif, implant, DIU (stérilet), patch, et bien d’autres. 
          Chacune a ses avantages et ses spécificités, et le choix dépend de ton mode de vie, de ta santé et de tes préférences. 
          Si tu souhaites en savoir plus sur la contraception ou la sexualité, tu peux consulter notre page dédiée :
        </p>
        <ExternalLinkBlock resources={contraception} />
      </div>

      <Separateur />

      {/* DEROULEMENT */}
      <div id="deroulement">
        <h2 className="titre">Comment se déroule une IVG ?</h2>

        <h3 className="soustitre">Les deux grandes méthodes</h3>
        <BulletList
          items={[
            "IVG médicamenteuse : prise de médicaments sous contrôle médical. Possible en ville (médecin, sage-femme) ou à l'hôpital selon le cas, et jusqu'à la fin de la 7ᵉ semaine de grossesse.",
            "IVG instrumentale (ou chirurgicale) : intervention réalisée en milieu hospitalier ou clinique, utilisée après la 7ᵉ semaine et jusqu'au délai légal.",
          ]}
        />

        <h3 className="soustitre">Qu'en est-il des mineur·e·s ?</h3>
        <p className="texte">
          Les mineur·e·s peuvent demander une IVG sans avoir besoin d'une autorisation parentale : dans ce cas, il faut cependant être accompagnées d'une personne majeure de leur choix (accompagnement obligatoire), et la confidentialité est protégée par la loi. Les professionnels doivent proposer une information adaptée et l'accès aux soins se fait gratuitement via l'Assurance maladie. 
        </p>

        <h3 className="soustitre">Une décision qui ne concerne pas toujours une seule personne</h3>

        <p className="texte">
          Une grossesse ne concerne pas uniquement la personne enceinte. Dans de nombreuses situations, <b>la décision d'interrompre ou de poursuivre une grossesse se vit à deux</b>. 
          L'IVG reste bien sûr un <b>droit individuel</b> et la personne enceinte est <b>la seule</b> à pouvoir en décider, mais il est essentiel de rappeler que le <b>soutien du ou de la partenaire</b> peut être précieux.
        </p>

        <p className="texte">
          Être présent, écouter sans juger, accompagner aux rendez-vous si c’est souhaité, partager les démarches ou simplement manifester de la bienveillance 
          peut <b>aider la personne à se sentir soutenue</b> dans un moment souvent complexe émotionnellement. 
          La responsabilité de la contraception, de la prévention et de l’écoute <b>incombe aux deux partenaires</b> : une approche partagée favorise un climat de confiance et de respect mutuel.
        </p>

        <p className="texte">
          Dans certains centres (notamment les CPEF et les centres IVG hospitaliers), <b>des entretiens de couple ou de soutien psychologique</b> peuvent être proposés, 
          afin d’aider à traverser cette période ensemble, sereinement et sans culpabilité.
        </p>
        

      </div>

      <Separateur />

      {/* CONTACTS LOCAUX */}
      <div id="contacts">
        <h2 className="titre">Où se faire accompagner & qui contacter ?</h2>

        <p className="texte">
          Si tu es à Écully ou à Lyon, il y a des lieux et des contacts locaux qui pratiquent ou orientent vers l'IVG. En cas d'urgence, contacte le numéro national ou rends-toi au service des urgences le plus proche.
        </p>

        <h3 className="soustitre">Centres hospitaliers et planning familial</h3>

        <ContactCard
          image="/assets/EdouardHerriot.jpg"
          title="Hôpital Édouard Herriot (Centre d’orthogénie / IVG)"
          subtitle="5 place d’Arsonval - 69003 Lyon"
          phone="04 72 11 03 96"
          textButton="Prendre RDV / Infos"
          link="https://myhcl.sante-ra.fr/Espacepublic/rendezvous.aspx?CR=21520"

          bgColor="#ffffff"    //informations facultatives
          textColor="#0da8e8"  //elles seront chosies en fonction de la couleur du logo si non spécifiées
        />

        <ContactCard
          image="/assets/CroixRousse.jpg"
          title="Hôpital de la Croix-Rousse (Centre d’orthogénie / IVG)"
          subtitle="103 grande rue de la Croix-Rousse - 69004 Lyon"
          phone="04 72 07 16 63"
          textButton="Prendre RDV / Infos"
          link="https://myhcl.sante-ra.fr/Espacepublic/rendezvous.aspx?CR=21520"
        />

        <ContactCard
          image="/assets/LyonSud.png"
          title="Hôpital Lyon Sud (Centre IVG)"
          subtitle="165 chemin du Grand Revoyet - 69310 Pierre-Bénite"
          phone="04 78 86 65 70"
          textButton="Prendre RDV / Infos"
          link="https://myhcl.sante-ra.fr/Espacepublic/rendezvous.aspx?CR=21520"

          bgColor="#ffffff"    //informations facultatives
          textColor="#0da8e8"  //elles seront chosies en fonction de la couleur du logo si non spécifiées
        />

        {/* Clinique / Ecully */}
        <p className="texte">
          À Écully plusieurs sages-femmes et cliniques proposent des consultations d'information et des IVG médicamenteuses selon les cas (prendre RDV et vérifier la disponibilité). Des praticiens locaux apparaissent sur Doctolib (ex. sages-femmes proposant IVG médicamenteuse à Écully). En cas de doute, appelle le numéro vert national pour être orienté·e.
        </p>

        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={localResources}
        />
      </div>

      <Separateur />

      {/* AIDE, DROITS, URGENCES */}
      <div id="aide">
        <h2 className="titre">Aide, droits & urgences</h2>

        <p className="texte">
          Si tu as besoin d'information, du soutien pour te déplacer, d'un hébergement ou d'une aide financière, plusieurs dispositifs peuvent t'aider. Voici les points essentiels :
        </p>

        <BulletList
          items={[
            "Numéro vert national — 0 800 08 11 11 : information anonyme et gratuite (sexualités, contraception, IVG), du lundi au samedi de 9h à 20h.",
            "Site officiel d'aide et d'information (chat, numéros et informations utiles) :"
          ]}
        />
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={resources_infos}
        />
        <BulletList
          items={[
            "Les consultations sont prises en charge à 100 % par l'Assurance maladie dans le cadre d'une IVG (se renseigner avec la structure)." ,
            "En cas d'urgence (complication, saignement important, douleur intolérable), rends-toi au service des urgences ou appelle le 15.",
          ]}
        />



        <h3 className="soustitre">Aide psychologique et suivi</h3>
        <p className="texte">
          Les équipes qui réalisent des IVG proposent aussi un accompagnement médical et psychosocial. Si tu ressens le besoin de parler avant ou après l'IVG, demande un rendez-vous de suivi (infirmière, sage-femme, psychologue, assistante sociale).
        </p>

        <h3 className="soustitre">Déroulement administratif et gratuité</h3>
        <p className="texte">
          L'IVG est prise en charge par l'Assurance maladie (avec le cas échéant le dispositif d'autorisation pour mineures souhaitant garder le secret). Les centres hospitaliers et CPEF (Centres de planification et d'éducation familiale) peuvent informer et orienter gratuitement.
        </p>
      </div>

      <Separateur />

      <p className="texte">
        <em><b>Sources principales :</b> ivg.gouv.fr — Ministère de la Santé ; Info.gouv / loi (délai 14 semaines) ; Ameli (délais IVG médicamenteuse) ; Hospices Civils de Lyon (centres d'orthogénie) ; Planning Familial (numéro vert 0 800 08 11 11).</em>
      </p>
    </div>
  );
};

export default IVG;
