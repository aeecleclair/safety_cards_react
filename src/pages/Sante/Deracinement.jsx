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
  { label: "Comprendre", target: "comprendre" },
  { label: "Se faire accompagner", target: "accompagnement" },
  { label: "Soutenir un·e étudiant·e", target: "soutenir" },
];

const chiffresDeracinement = [
  { number: "25%", title: "d'étudiant·e·s internationaux·ales", description: "à Centrale Lyon" },
  { number: "79%", title: "des étudiant·e·s internationaux·ales", description: "souffrent d’isolement selon le collectif POF (Paris-Ouest-France)" },
  { number: "55,8 %", title: "des étudiant·e·s internationaux·ales", description: "fréquentent les soirées centraliennes moins d'une fois par trimestre" },
];



const ressourcesExternes = [
  {
    link: "https://www.nightline.fr/en/lyon",
    imageSrc: "/assets/nightline_logo.png",
    label: "Nightline Lyon",
    description: "Service d’écoute nocturne gratuit et anonyme, en plusieurs langues, pour les étudiant·e·s lyonnais·e·s"
  },
  {
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd6jel4AEzH7YV4GtxotSbAaEFUM9bE2CVWxkBw3ssHqQ_F2g/viewform",
    imageSrc: "/assets/min.png",
    label: "Fondation ARHM – Écoute étudiants internationaux Lyon",
    description: "Soutien psychologique confidentiel et gratuit pour les étudiant·e·s internationaux·ales à Lyon"
  },
];

const resources_equipe_inter = [
  {
    link: "https://campus.ec-lyon.fr/l-equipe-des-relations-internationales-3819.kjsp?RH=1460360548247&ksession=7b5a654f-a002-4a63-a61e-eb6bc74f1394",
    imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    label: "Contact équipe des relations internationales",
    description: "Mails, téléphones et endroits où retrouver les membres de l'équipe des relations internationales"
  }
];

const resource_isolement = [
  {
    link: "/isolement",
    emoji : "??",
    label: "Isolement",
    description: "Que faire face  l'isolement ?",
  }
];


const items_soutient = [
  { title: "Prends le temps d’échanger, de demander comment il·elle vit son arrivée."},
  { title: "Propose de découvrir le campus, Lyon, les activités étudiantes."},
  { title: "Explique les petits codes du quotidien (repas, horaires, politesse…)."},
  { title: "Inclue-le/la dans les projets ou les sorties, même s’il·elle parle peu français."},
  { title: "Sois bienveillant·e face aux différences culturelles."}
];

const Deracinement = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Déracinement culturel</h1>
      <Sommaire links={navLinks} />

      {/* PARTIE 1 - COMPRENDRE */}
      <div id="comprendre">
        <h2 className="titre">Qu'est-ce que le déracinement culturel ?</h2>

        <ImageTextPopup
          image="./assets/cartes/10_carreau.png"
          title="La carte 10♦"
          shortText="Le déracinement culture : éloignement, adaptation, reconstruction"
          longText="Le déracinement culturel, c’est cette impression d’avoir laissé une partie de soi en changeant de pays. Les repères linguistiques, sociaux, familiaux et académiques se déplacent. Ce n’est pas qu’un choc culturel : c’est aussi une redéfinition de son équilibre et de son identité."
          textButton="⤢ Agrandir la carte"
          suit="carreau"
        />

        <p className="texte">
          Étudier à l’étranger est une expérience enrichissante : découverte, ouverture, aventure.  
          Mais c’est aussi un défi. Apprendre dans une langue différente, s’adapter à de nouveaux codes, vivre loin de sa famille ou de ses repères, peut provoquer un sentiment de solitude ou de perte de sens.
        </p>

        <BulletList
          items={[
            <><b>Barrière de la langue :</b> peur de ne pas tout comprendre ou d’être mal compris.</>,
            <><b>Méthodes d’enseignement différentes :</b> plus d’autonomie, moins de guidage.</>,
            <><b>Décalage social et culturel :</b> humour, interactions, rythme de vie.</>,
            <><b>Isolement :</b> difficultés à créer du lien ou à trouver sa place dans un nouveau groupe.</>,
          ]}
        />

        <p className="texte">
          Ces sentiments sont normaux et transitoires. Le déracinement n’est pas une faiblesse : c’est une phase d’adaptation que traversent beaucoup d’étudiant·e·s internationaux·ales.  
        </p>

        <ChiffresGroup chiffres={chiffresDeracinement} />

        <ExternalLinkBlock
          title="Besoin d’aide ou d’écoute ?"
          subtitle="Des dispositifs sont disponibles à Lyon pour accompagner les étudiant·e·s internationaux·ales"
          resources={ressourcesExternes}
        />
      </div>

      <Separateur />

      {/* PARTIE 2 - SE FAIRE ACCOMPAGNER */}
      <div id="accompagnement">
        <h2 className="titre">Se faire accompagner à Centrale Lyon</h2>

        <p className="texte">
          Si vous ressentez de la solitude, de la difficulté d’adaptation ou un simple besoin d’écoute, sachez qu’il existe sur le campus des dispositifs d’accompagnement spécialement dédiés aux étudiant·e·s : que vous soyez international·e ou en mobilité, vous avez le droit à du soutien.  
        </p>

        <ContactCard
          image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
          title="Infirmerie de Centrale Lyon"
          subtitle="Écoute, soutien et orientation vers des professionnels"
          phone="Voir les informations"
          email="Voir les informations"
          hours="Lundi à jeudi : 7h30-15h30 | Vendredi : 7h30-15h00"
          textButton="Voir les informations"
          link="https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990"

          bgColor="#ffffff"    //informations facultatives
          textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

        />


        <ExternalLinkBlock
          title=""
          subtitle="Si tu as des questions, tu peux également contacter l'équipe des relations internationales :"
          resources={resources_equipe_inter}
        />


        <p>
          Si tu te sens isolé·e, tu peux aussi te renseigner ici :
        </p>
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={resource_isolement}
        />

        <p className="texte">
          En tant qu’étudiant·e international·e, vous bénéficiez également de droits spécifiques et d’un cadre d’accueil :
        </p>
        <BulletList
          items={[
            "Vous devez disposer d’un visa étudiant ou d’un titre de séjour adapté pour étudier en France.",
            "Selon votre nationalité et votre formation, des frais d’inscription majorés (« droits différenciés ») peuvent s’appliquer ; veillez à vous renseigner dès votre admission.",
            "Vous pouvez accéder aux aides sociales du CROUS, aux bourses (ex. bourses du gouvernement français via Campus France) ; des dispositifs d’accueil sont en place pour faciliter votre installation en France."
          ]}
        />

        <p className="texte">
          N’hésitez pas à prendre contact rapidement avec l’infirmerie ou l’équipe relations internationales : mieux vaut intervenir tôt. Même des difficultés « légères » (logement, langue, réseau social) peuvent se transformer en sentiment fort de déracinement si elles ne sont pas accompagnées.
        </p>
      </div>


      <Separateur />

      {/* PARTIE 3 - SOUTENIR */}
      <div id="soutenir">
        <h2 className="titre">Soutenir un·e étudiant·e international·e</h2>

        <p className="texte">
          Si tu es étudiant·e français·e, tu peux beaucoup faire pour aider un·e camarade à se sentir bienvenu·e.  
          Le déracinement est moins lourd quand on se sent reconnu·e, écouté·e et inclus·e.
        </p>


        <ListeNumerotee 
            
            title="" 
            subtitle="" 
            items={items_soutient} 
            
        />
        <p>
          Le déracinement devient une richesse quand il s’accompagne de solidarité. Chaque geste d’accueil compte : un café partagé, une explication, une invitation. C’est ainsi que l’international devient une vraie communauté.
        </p>
      </div>

      <Separateur />

      <p className="texte">
        <em><b>Sources :</b> OVE, Enseignement supérieur – « La vie étudiante : fragilités psychologiques » ; Campus France – « Aides psychologiques pour les étudiant·e·s internationaux·ales » ; Fondation ARHM ; MDPI – « Adaptive Journeys: Cross-Cultural Adaptation ».</em>
      </p>
    </div>
  );
};

export default Deracinement;
