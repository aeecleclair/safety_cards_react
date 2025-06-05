import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import { image } from "framer-motion/client";


const navLinks = [
  { label: "Conseils clés", target: "resume-conseils" },
  { label: "Comprendre", target: "definition" },
  { label: "Prévenir", target: "prevention" },
  { label: "Agir en urgence", target: "urgence" }
];

const chiffresRisquesDomestiques = [
  { number: "20 000", title: "décès par an", description: "dus aux accidents de la vie courante en France" },
  { number: "75%", title: "des accidents domestiques", description: "sont des chutes, touchant majoritairement les personnes âgées" },
  { number: "600", title: "intoxications mortelles", description: "par médicaments chaque année" }
];

const typesRisques = [
  "Incendies domestiques",
  "Intoxications (produits ménagers, monoxyde de carbone)",
  "Brûlures (liquides chauds, appareils électriques)",
  "Chutes (escaliers, sols glissants)",
  "Électrocutions",
  "Étouffements (aliments, petits objets)",
  "Noyades (baignoire, piscine)",
  "Défenestrations (fenêtres non sécurisées)"
];

const conseilsPrevention = [
  {
    title: "Installer des détecteurs de fumée",
    subtitle: "Obligatoires dans tous les logements, ils permettent une alerte précoce en cas d'incendie."
  },
  {
    title: "Ne jamais laisser un plat sur le feu sans surveillance",
    subtitle: "La cuisine est la première cause d'incendies domestiques."
  },
  {
    title: "Ventiler régulièrement",
    subtitle: "Une bonne aération réduit les risques d’intoxication au monoxyde de carbone, surtout avec des appareils à combustion."
  },
  {
    title: "Éviter les surcharges de multiprises",
    subtitle: "Trop d'appareils branchés sur une seule prise peuvent provoquer une surchauffe et un incendie. Préférez des multiprises avec interrupteur et protection contre les surtensions."
  },
  {
    title: "Débrancher les appareils inutilisés",
    subtitle: "Chargeurs, bouilloires, plaques électriques... débranchez-les quand vous ne les utilisez pas pour éviter tout risque de court-circuit ou de chauffe."
  },
  {
    title: "Ne jamais bloquer les sorties",
    subtitle: "Gardez les portes d’entrée et les fenêtres dégagées. En cas d'incendie ou d'évacuation, chaque seconde compte."
  },
  {
    title: "Stocker les produits ménagers séparément des aliments",
    subtitle: "Évitez les intoxications accidentelles en ne mettant jamais de produits d’entretien près de la nourriture ou dans des contenants alimentaires."
  },
  {
    title: "Utiliser des rallonges en bon état",
    subtitle: "Ne les faites pas passer sous les tapis ou les meubles lourds, et évitez les rallonges endommagées ou trop longues."
  }
];

const ressourcesUtiles = [
  {
    link: "https://www.pompiers.fr/grand-public/prevention-des-risques",
    label: "Pompiers de France",
    description: "Conseils pour prévenir les accidents domestiques",
    imageSrc: "/assets/logo-sp.jpg"

  },
  {
    link: "https://www.sdis38.fr/61-les-accidents-domestiques.htm",
    label: "SDIS 38",
    description: "Informations sur les principaux risques à domicile"
  },
  {
    link: "https://www.rhone.gouv.fr/Politiques-publiques/Securite-et-protection-de-la-population/La-securite-civile/Les-risques-domestiques",
    label: "Préfecture du Rhône",
    description: "Recommandations de la sécurité civile",  
    imageSrc: "/assets/rep-logo.png"
  }
];

const RisquesDomestiques = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Risques Domestiques</h1>
      <Navbar links={navLinks} />

      <div id="resume-conseils">
        <h2 className="titre">Conseils clés</h2>
        
        <p className="mise-avant">

            En cas d'<b>intoxication</b>, conservez l'emballage du produit en cause pour le montrer aux secours.
      
            Appelez le <b>Centre Antipoison au 04 72 11 69 11</b>.
        </p>
      <p className="mise-avant">
            En cas de <b>brûlure</b>, refroidissez la zone avec de l'eau froide pendant au moins 10 minutes.

            Si nécessaire, appelez les <b>pompiers au 18</b> ou le <b>SAMU au 15</b>.
      </p>
      <p className="mise-avant">
            En cas d'<b>étouffement</b>, alternez entre 5 tapes dans le dos entre les ompoplates et 5 compressions abdominales (manœuvre de Heimlich) si vous savez effectuer ce geste.
            <br />
            Si la situation ne s'améliore pas, appelez <b>le SAMU au 15</b>.
      </p>
      <p className="mise-avant">
            En cas d'<b>électrocution</b>, coupez immédiatement le courant sans toucher la victime.
         
            Appelez les secours au <b>18</b> (pompiers) ou <b>112</b> (numéro d'urgence européen).
    
      </p>
      </div>


      <div id="definition">
        <h1 className="titre">Comprendre les risques domestiques</h1>
        <p className="texte">
          Les accidents domestiques représentent une cause majeure de blessures et de décès en France. Ils touchent particulièrement les enfants et les personnes âgées. Les principaux risques incluent les chutes, les brûlures, les intoxications, les étouffements, les noyades, les électrocutions et les incendies. Une vigilance constante et des mesures de prévention adaptées peuvent significativement réduire ces dangers.
        </p>
        <BulletList items={typesRisques} />
        <ChiffresGroup chiffres={chiffresRisquesDomestiques} />
      </div>

        <ImageTextPopup
        image="./assets/work_in_progress.jpg"
        title="La carte 4♣"
        shortText="Confiance en soi : renforcer et accompagner"
        longText="Confiance en soi : renforcer et accompagner"
        textButton="⤢ Agrandir la carte"
      />

      <Separateur />

      <div id="prevention">
        <h1 className="titre">Prévenir les accidents domestiques</h1>
        <p className="texte">
          Adopter des gestes simples au quotidien permet de sécuriser son domicile et de protéger ses proches. Voici quelques conseils pratiques :
        </p>

        <ListeNumerotee
          title="Conseils de prévention"
          subtitle="Mesures à mettre en place chez soi"
          items={conseilsPrevention}
        />

        <ExternalLinkBlock
          title="Ressources complémentaires"
          subtitle="Sites officiels pour en savoir plus"
          resources={ressourcesUtiles}
        />
      </div>

      <Separateur />

      <div id="urgence">
        <h1 className="titre">Agir en cas d'urgence</h1>
        <p className="texte">
          En cas d'accident domestique, il est crucial de réagir rapidement et efficacement. Voici les numéros d'urgence à connaître :
        </p>


            <ContactCard
              image="/assets/18.png"
              title="Pompiers"
              subtitle="Incendie, accident, secours"
              phone="18"
              textButton="Voir le site"
              link="https://www.pompiers.fr"
              bgColor="#ffffff"
              textColor="#f5871f"
            />

            <ContactCard
              image="/assets/15.png"
              title="SAMU"
              subtitle="Urgence médicale"
              phone="15"
              textButton="Voir le site"
              link="https://www.samu-urgences-de-france.fr/fr/"
              bgColor="#ffffff"
              textColor="#ee3624"
            />



            <ContactCard
              image="/assets/17.png"
              title="Police Secours"
              subtitle="Trouble à l'ordre public"
              phone="17"
              textButton="Voir le site"
              link="https://www.police-nationale.interieur.gouv.fr"
              bgColor="#ffffff"
              textColor="#126782"
            />

            <ContactCard
              image="/assets/112.png"
              title="Numéro européen"
              subtitle="Urgences en Europe"
              phone="112"
              textButton="Voir le site"
              link="https://digital-strategy.ec.europa.eu/fr/policies/112"
              bgColor="#ffffff"
              textColor="#587b37"
            />



            <ContactCard
              image="/assets/114.png"
              title="Urgence pour sourds et malentendants"
              subtitle="SMS, fax, tchat, visiophonie"
              phone="114"
              textButton="Voir le site"
              link="https://www.info.urgence114.fr/prehome/"
              bgColor="#ffffff"
              textColor="#737057"
            />
 
            <ContactCard
              image="/assets/CAP.jpg"
              title="Centre Antipoison"
              subtitle="Intoxications"
              phone="04 72 11 69 11"
              textButton="Voir le site"
              link="https://www.centres-antipoison.net"
              bgColor="#ffffff"
              textColor="#000000"
            />

      </div>

      <p className="texte"><em><b>Sources :</b> Pompiers de France, SDIS 38, Préfecture du Rhône, Santé publique France</em></p>
    </div>
  );
};

export default RisquesDomestiques;
