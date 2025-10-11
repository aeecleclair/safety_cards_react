import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, TextImageRight, ImageCenter } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import "../../App.css";
import Separateur from "../../components/Separateur";

const navLinks = [
  { label: "Mauvaises habitudes alimentaires", target: "habitudes" },
  { label: "Comment agir ?", target: "solutions" }
];

const items = [
  { title: "Prendre des repas réguliers", subtitle: "Éviter de sauter le petit-déjeuner ou le déjeuner" },
  { title: "Limiter les produits ultra-transformés", subtitle: "Favoriser les repas faits maison" },
  { title: "Boire suffisamment d'eau (1 à 2L par jour)", subtitle: "Éviter les sodas et boissons sucrées" },
  { title: "Manger équilibré", subtitle: "Associer légumes, protéines, féculents dans chaque repas" },
  { title: "Écouter sa faim", subtitle: "Ne pas manger par ennui ou stress" },
];

const resources = [
  {
    link: "/tca",
    emoji: "🍽️",
    label: "Tu grignotes ou sautes des repas très souvent ?",
    description: "Ce sont peut-être des signes de TCA",
  },
  {
    link: "/depression",
    emoji: "🥺",
    label: "Tu n'as plus la volonté de manger depuis des semaines ?",
    description: "Ce sont peut-être des signes de dépression",
  },
];

const resources2bis = [
  {
    link: "https://www.mangerbouger.fr",
    imageSrc: "/assets/mangerbouger.jpg",
    label: "Manger Bouger",
    description: "Conseils officiels et idées recettes pour une alimentation équilibrée",
  }
];

const resources2 = [
  ,
  {
    link: "https://www.ameli.fr/assure/sante/themes/alimentation-adulte/alimentation-adulte-equilibre-repas",
    imageSrc: "/assets/ameli.png",
    label: "Ameli Santé",
    description: "Bien manger pour préserver sa santé au quotidien",
  },
];

const resources3 = [
  {
    link: "/sedentarite",
    emoji: "🛋️",
    label: "Tu ne pratiques aucune activité physique ?",
    description: "Combiné à une mauvaise alimentation, cela peut nuire à ta santé",
  },
  {
    link: "/sport",
    emoji: "⛹️",
    label: "Tu fais du sport à côté ?",
    description: "Pense à bien nourrir ton corps !",
  },
];

const resources4 = [
  {
    link: "/prec_eco",
    emoji: "💰",
    label: "Situation de précarité économique ?",
    description: "Les solutions à ta disposition",
  }
];

const data = [
  { number: "30%", title: "des étudiant·e·s", description: "avouent sauter au moins un repas par jour" },
  { number: "50%", title: "des jeunes", description: "consomment trop de produits sucrés chaque semaine" },
];

const appli = [
  { label: "OpenFoodFacts", 
    description: "Scanner les produits alimentaires pour connaître leur composition, leur degré de transformation et leur impact environnemental", 
    link: "https://fr.openfoodfacts.org/",
    imageSrc: "/assets/openfoodfacts.png"},
]

const Alimentation = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Alimentation</h1>
      <Navbar links={navLinks} />

      <div id="habitudes">
        <h1 className="titre">Mauvaises habitudes alimentaires</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant">Sauter des repas, manger de manière déséquilibrée ou grignoter régulièrement peut <b>nuire à ton énergie</b> et ton <b>bien-être</b>.</p>
        <p className="mise-avant">Une alimentation <b>régulière et variée</b> est essentielle pour rester en forme et prévenir la fatigue.</p>
      </div>

      <ImageTextPopup
        image="./assets/cartes/as_pique.png"
        title="La carte A♠"
        shortText="Prévention sur les mauvaises habitudes alimentaires"
        longText="Tu manges toujours la même chose sans jamais varier ? Tu sautes souvent le petit-déjeuner ? Tu grignotes devant les écrans ? Tes habitudes alimentaires peuvent avoir un impact sur ta santé : fatigue, baisse de concentration, mal-être... Une &quot;mauvaise&quot; alimentation peut entraîner des carences nutritionnelles et affecter ton énergie ainsi que ton humeur au quotidien."
        textButton="⤢ Agrandir la carte"
        suit="pique"
      />

      <div id="habitudes">
        <h1 className="sous-titre-2">Manger déséquilibré</h1>
        <p className="texte">Manger de façon déséquilibrée, c'est consommer trop d'aliments riches en sucre, en sel ou en matières grasses, et pas assez de fruits, légumes, protéines et fibres. Cela peut entraîner des <b>carences nutritionnelles</b> qui affectent ton énergie et ta concentration. Manger toujours la même chose sans aucune variété n'est pas non plus synonyme de bonne alimentation.</p>
      </div> 

      <ExternalLinkBlock
        resources={resources2}
      />

        <h1 className="sous-titre-2">Grignoter</h1>
        <p className="texte">Lorsqu'on a faim, on a tendance à se précipiter sur des aliments riches en sucre ou en matières grasses pour retrouver rapidement de l'énergie. Cependant, ces aliments peuvent entraîner une <b>sensation de fatigue et de faim</b> peu de temps après qui t'invitent à grignoter à nouveau. Pour éviter ce cercle vicieux, il est important de <b>manger des repas équilibrés</b> et de <b>boire suffisamment d'eau</b> tout au long de la journée. Un <b>repas déséquilibré</b> peut te donner l'impression d'être rassasié·e mais <b>ne pas apporter les nutriments nécessaires à ton organisme</b> et te laisser sur ta faim deux heures plus tard.</p>
 

        <h1 className="sous-titre-2">Sauter des repas</h1>
        <p className="texte">Sauter des repas peut sembler une solution rapide pour perdre du poids, grapiller quelques minutes de sommeil sur le petit-déjeuner ou ne pas avoir à faire la cuisine, mais cela fatigue ton corps, qui a besoin <b>de nutriments</b>, notamment au réveil. Sauter un repas peut entraîner une <b>fatigue accrue</b>, des <i><b>cravings</b></i> <i>(fringales)</i> pour des aliments sucrés et une <b>baisse de concentration</b>. Manger de façon régulière et équilibrée t'apporte de l'énergie et aide à ton bien-être.</p>
 
      <Quote text="Bien manger, c'est aussi prendre soin de sa santé mentale." />


      <p className="sous-titre-2">Les risques</p>
      <p className='texte'>Adopter de mauvaises habitudes alimentaires, manger trop ou pas assez peut avoir des conséquences sur ta <b>santé physique et mentale</b>. Voici quelques signes qui peuvent t'alerter :</p>
      <BulletList
        items={[
          "Manque d'énergie et fatigue",
          "Difficulté de concentration",
          "Carences nutritionnelles",
          "Prise ou perte de poids déséquilibrée",
          "Impact sur le moral et le stress",
        ]}
      />

        <ExternalLinkBlock resources={resources} />

        <Separateur />  

      <div id="solutions">
        <h1 className="titre">Comment agir ?</h1>
      </div>

        <div id="resume-conseils2">
        <p className="mise-avant"><b>Manger équilibré ne signifie pas manger parfaitement</b>. Il est important de se faire plaisir de temps en temps et de ne pas culpabiliser si tu manges un aliment moins sain. Ton équilibre alimentaire se construit sur le long terme et avec des habitudes durables.</p>
        </div>
        

        <h1 className="sous-titre-2">Comment manger équilibré ?</h1>


        <p className="texte">Adopter une alimentation équilibrée ne veut pas dire se priver, mais apprendre à <b>mieux organiser ses repas</b> et <b>écouter son corps</b>. Voici quelques pistes :</p>

        <ListeNumerotee title="Plan d'action pour mieux s'alimenter" items={items} />

        <TextImageRight
          imageSrc="/assets/assiette.png"
          text={
            <>Prépare à l'avance des <strong>repas simples</strong>, garde des <strong>fruits et légumes</strong> accessibles pour éviter le grignotage et privilégie la <strong>cuisine maison</strong> quand c'est possible. Pense aussi à <strong>t'accorder du temps</strong> pour manger sans distraction et lentement afin d'apprécier tes repas. Evite de manger rapidement, cela retarde la sensation de satiété et t'incite à manger plus !</>
          }
        />
        
      <ExternalLinkBlock
        resources={resources2bis}
      />

      <p className="texte">Si tu veux te fournir en fruits et légumes, miel, pains, fromages locaux et autres produits de saison, n'hésite pas à te rendre sur les marchés ou à privilégier les circuits courts. Tu peux par exemple <b>commander</b> des paniers de fruits et légumes <b>auprès de l'AMAP</b>, un service proposé par l'assocation Planet&Co de l'école !</p>

      
        <ExternalLinkBlock resources={resources3} />

      <div id="solutions">
        <h1 className="sous-titre-2">Je n'ai pas le temps de manger</h1>
        <p className="texte">Prends autant que possible le temps de manger, même lorsque tu es pressé·e. Pour ça, anticipe : essaie de <b>planifier des repas simples et rapides</b> à préparer, et n'hésite pas à emporter des <b>encas sains</b> avec toi pour éviter de sauter des repas ou avoir la fringale. A défaut, pense à <b>bien t'hydrater</b> ! La fatigue ou la faim peuvent aussi venir d'un manque d'eau. </p>
        <p className='texte'>Evidemment, si tu n'as pas le choix, <b>prends un petit moment pour te poser et manger quelque chose, même si c'est rapide et pas toujours sain</b>. Ton corps a besoin de carburant !</p>
      </div>


      <div id="solutions">
        <h1 className="sous-titre-2">Je n'ai pas les moyens de manger plus sain</h1>
        <p className="texte">Il existe des solutions pour les étudiant·e·s en difficulté financière. Tu peux par exemple te tourner vers le <b>restaurant universitaire (RU)</b> qui propose des repas complets et équilibrés à prix réduit (1 à 3 euros) le midi et à emporter le soir (à la cafétéria l'Escale). Pour les boursiers, il y a aussi des <b>distibutions alimentaires</b> organisées par l'association Solidari'terre à l'épicerie solidaire, en bas du bâtiment X les lundis soirs. </p>
      </div>


      <ExternalLinkBlock resources={resources4} />

      <h1 className="sous-titre-2">Chiffres clés</h1>
      <ChiffresGroup chiffres={data} />


          <h1 className="sous-titre-2">Application utile</h1>
          <ExternalLinkBlock resources={appli} />

      <Separateur />
      <p className="texte"><em><b>Sources :</b></em> Manger Bouger, Ameli, Santé Publique France</p>
    </div>
  );
};

export default Alimentation;
