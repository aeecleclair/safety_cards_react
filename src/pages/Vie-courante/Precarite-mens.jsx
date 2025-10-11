// Page Precarité menstruelle
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, TextImageRight } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import Separateur from "../../components/Separateur";
import "../../App.css";
import { ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "Comprendre la situation", target: "comprendre" },
  { label: "Les risques", target: "risques" },
  { label: "Les dispositifs d'aide", target: "agir" }
];

const actions = [
  { subtitle: "Demander des protections à l'infirmerie ou au service social de l'école" },
  { subtitle: "Participer ou organiser des collectes (Règles Élémentaires)" },
  { subtitle: "Installer des distributeurs gratuits dans les lieux de vie (RU, résidences)" },
  { subtitle: "Favoriser les protections réutilisables (culottes, coupe) quand possible" },
];

const resources = [
  {
    link: "https://www.regleselementaires.com/",
    imageSrc: "/assets/regles_elementaires.png",
    label: "Règles Élémentaires",
    description: "Association nationale de collecte et distribution de protections menstruelles",
  },
  {
    link: "https://www.wenabi.com/ressources/precarite-menstruelle",
    imageSrc: "/assets/wenabi.png",
    label: "Wenabi (guide et collectes)",
    description: "Outils pour organiser des collectes solidaires dans les entreprises et établissements",
  },
  {
    link: "https://www.enseignementsup-recherche.gouv.fr/fr/lutte-contre-la-precarite-menstruelle-un-acces-gratuit-aux-protections-periodiques-pour-les-49201",
    imageSrc: "/assets/min_ens_sup.png",
    label: "Ministère (enseignement supérieur)",
    description: "Information sur la mise à disposition gratuite de protections dans l'enseignement supérieur",
  }
];


const chiffres = [
  { number: "1/3", title: "des étudiantes", description: "déclarent avoir des difficultés à se procurer des protections menstruelles" },
  { number: "50%", title: "des français·es", description: "pensent que les règles sont taboues" },
  { number: "13%", title: "des étudiantes", description: "ont déjà dû choisir entre acheter des protections et un produit de première nécessité faute de moyens" },
];


const resources2 = [
  {
    link: "/prec_eco",
    emoji: "💰",
    label: "Précarité économique",
    description: "Les aides et solutions économiques accessibles aux étudiants",
  },
  {
    link: "/endom",
    emoji: "🩸",
    label: "Endométriose & douleurs menstruelles",
    description: "Tu souffres de douleurs menstruelles intenses ? Renseigne-toi sur tes symptômes."
  }
]

const PrecariteMens = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Précarité menstruelle</h1>
      <Navbar links={navLinks} />

      <div id="comprendre">
        <h1 className="titre">Qu'est-ce que la précarité menstruelle ?</h1>
        
              <ImageTextPopup
                image="./assets/cartes/2_coeur.png"
                title="La carte 2❤"
                shortText="Prévention sur la précarité menstruelle"
                textButton="⤢ Agrandir la carte"
                longText="Lorsqu'on parle de précarité menstruelle, on fait référence à la difficulté de se procurer des protections hygiéniques adaptées à ses règles (serviettes, tampons, culottes de règles, coupe menstruelle) en raison de contraintes financières, sociales ou culturelles. Cette situation touche particulièrement les jeunes en situation de précarité économique qui ne peuvent pas toujours se permettre d'acheter ces produits essentiels. Cela peut entraîner des conséquences négatives sur la santé, le bien-être et la participation sociale des personnes concernées."
                suit="coeur"
              />
        
        <p className="texte">La précarité menstruelle désigne la difficulté ou l'impossibilité d'accéder à des protections hygiéniques de première nécessité (serviettes, tampons, culottes de règles, coupe) et aux informations et lieux adaptés pour vivre ses règles dans la dignité.</p>
      </div>

      <ChiffresGroup
        chiffres={chiffres}
      />

      <h2 className="sous-titre-2">Conséquences</h2>
      <BulletList items={[
        "Absences ou renoncement aux activités (cours, travail)",
        "Utilisation de protections inadaptées ou dangereuses",
        "Retentissement sur la santé mentale et la dignité",
        "Coût financier et charge inégale selon les revenus"
      ]} />

      <Separateur />
      <div id="risques">
      <h1 className="titre">Risques pour la santé</h1>
      </div>
      
      <h2 className="sous-titre-2">Changer régulièrement de protection</h2>
      <p className="texte">Quelle que soit la protection utilisée, il est essentiel de ne pas la garder trop longtemps. Au-delà de l'inconfort et des risques de fuites, un <b>port prolongé augmente les risques d'infections</b> (mycoses, irritations, syndrome du choc toxique avec les tampons notamment). Pour des raisons économiques, certaines personnes prolongent l'usage d'une protection au-delà des recommandations, mais cela peut mettre leur santé en danger.</p>
      
      <h2 className="sous-titre-2">Le syndrome du choc toxique</h2>
      <p className="texte">Le <b>syndrome du choc toxique</b> est une infection rare mais grave, liée à la bactérie <i>staphylocoque doré</i>. Il peut survenir lorsqu'un tampon ou une coupe menstruelle est gardé trop longtemps, favorisant la prolifération bactérienne. Les symptômes peuvent inclure une forte fièvre, des vomissements, des étourdissements, une éruption cutanée et une grande fatigue. Si tu ressens ces signes pendant tes règles, retire immédiatement ta protection et consulte en urgence un médecin.</p>

      <ExternalLinkBlock
        resources={resources2}
        />

      <Separateur />

      <div id="agir">
        <h1 className="titre">Les dispositifs d'aide</h1>
        
      <h2 className="sous-titre-2">Les protections existantes</h2>
      <BulletList items={[
  "Serviettes hygiéniques jetables : pratiques et accessibles, mais à usage unique et générant beaucoup de déchets",
  "Tampons : discrets et adaptés aux activités sportives, nécessitent un changement régulier",
  "Protège-slips : pour flux légers ou en complément d'une autre protection",
  "Coupes menstruelles (cup) : réutilisables, économiques et écologiques, nécessitent un entretien régulier",
  "Serviettes lavables : réutilisables, confortables et durables, demandent du lavage après usage",
  "Culottes menstruelles : réutilisables, confortables, pratiques, nécessitent aussi un entretien et un investissement initial",
  "Éponges menstruelles : alternatives réutilisables, moins répandues, demandent un nettoyage rigoureux"
]} />

      <p className="texte"> Les protections réutilisables (culottes, coupe) sont économiques sur le long terme et plus écologiques, même si l'investissement de départ peut être plus élevé.</p>

      <p className="texte">Certaines mutuelles étudiantes ou complémentaires santé proposent un <b>remboursement partiel des protections hygiéniques réutilisables</b>. N'hésite pas à te renseigner auprès de ta mutuelle, et à demander conseil au service social de ton établissement.</p>

        <h2 className="sous-titre-2">Où obtenir des protections gratuites</h2>
        <p className="texte">A Centrale et dans ses alentours, il est possible de se procurer des protections menstruelles gratuites dans plusieurs lieux :</p>
        <BulletList items={["Infirmerie de l'école",
          "Associations locales et collectes (Règles Élémentaires, banques alimentaires partenaires)",
          "Distributeurs gratuits au W1 et au W1bis à partir de la rentrée",
        ]} />

      </div>
      
        <ExternalLinkBlock         
        title="Ressources utiles"
        subtitle="Sites pour mieux comprendre la précarité menstruelle et agir"
        resources={resources} />

      <Separateur />


        <h2 className="sous-titre-2">Besoin d'en parler ?</h2>

      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
        title="Infirmerie"
        subtitle="Infirmerie de Centrale Lyon"
        phone="Voir les informations"
        email="Voir les informations"
        hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
        textButton="Voir les informations"
        link="https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990"

        bgColor="#ffffff"    //informations facultatives
        textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

      />
            <ContactCard
        image="/assets/parlons_regles.png" 
        title="Parlons règles"
        subtitle="Questions fréquentes sur les règles et la précarité menstruelle"
        hours="24/7 sur le chat en ligne"
        textButton="Voir la FAQ"
        link="https://www.parlonsregles.fr/Jeunes/QuestionsUtilisateurs"
      />



      <Separateur />

      <p className="texte"><em><b>Sources :</b> Règles Élémentaires, Wenabi, Ministère de l'Enseignement supérieur, IFOP</em></p>
    </div>
  );
};

export default PrecariteMens;