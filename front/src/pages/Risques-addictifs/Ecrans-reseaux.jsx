import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import "../../App.css";
import Separateur from "../../components/Separateur";



const { BulletList, NumberedList, TextImageRight, Navbar, YouTubeVideo} = Components;

const navLinks = [
  { label: "Addiction aux écrans", target: "écrans" },
  { label: "Addiction aux réseaux sociaux", target: "réseaux" }
];

const items = [
  { title: "Fixer des horaires", subtitle: "Limiter le temps accordé devant les écrans chaque jour" },
  { title: "Désactiver les notifications", subtitle: "Réduire les distractions en coupant les alertes" },
  { title: "Faire des pauses", subtitle: "Prendre 10-15 minutes sans écran toutes les heures" },
  { title: "Privilégier le réel", subtitle: "Opter pour des activités sans écran (sport, lecture, sorties...)" },
  { title: "Créer des zones sans écran", subtitle: "Réserver certaines pièces pour des moments sans technologie" },
];


const resources2 = [
  {
    link: "https://lebonusagedesecrans.fr/",
    imageSrc: "/public/assets/lebonusagedesecrans.png",
    label: "Le bon usage des écrans",
    description: "Retrouver le contrôle sur son temps d'écran",
  },
];

const resources = [
  {
    link: "/sommeil",
    emoji: "💤",
    label: "Difficile de trouver le sommeil ?",
    description: "Comment lutter contre l'insomnie et mieux dormir",
  },
  {
    link: "/detente",
    emoji: "🧘",
    label: "Les écrans t'aident à décompresser ?",
    description: "D'autres moyens de se relaxer sans écran",
  },
];

const resources3 = [
  {
    link: "/conf",
    emoji: "💛",
    label: "Tu te compares souvent ?",
    description: "Des conseils pour booster ton estime de soi",
  },
  {
    link: "/tca",
    emoji: "🍽️",
    label: "Mal dans ton assiette ?",
    description: "Comment retrouver une relation saine à la nourriture",
  },
];

const resources4 = [
  {
    link: "https://www.e-enfance.org/",
    label: "e-enfance",
    description: "Association de protection de l'enfance sur Internet",
  },
];

const data = [
  { number: "1/2", title: "élève considère que son temps d'écran", description: "impacte négativement son sommeil" },
  { number: "24%", title: "des jeunes équipés", description: "ne tiendraient pas plus d'1h sans leur téléphone" },
];


const Ecrans_reseaux = () => {
  return (
    <div className="page">
      <h1 className="titre">Addiction aux écrans & réseaux sociaux</h1>
      <Navbar links={navLinks} />
        

    <div id = "écrans">
      <h1 className="titre">Addiction aux écrans</h1>
    </div>
          
      <p className="sous-titre-2"> Les effets des écrans</p>
      <p className="texte"> Les écrans captent ton attention, souvent sans que tu t’en rendes compte. Scroll infini, notifications constantes, vidéos en boucle… Tout est fait pour te <b>garder connecté</b> le plus longtemps possible. Le problème des écrans, c'est qu'ils peuvent facilement t'aspirer loin de la vraie vie et te <b>déconnecter du réel</b>. Les meilleurs moments ne se vivent pas à travers un écran !</p>

      
      <ImageTextPopup
          image="./public/assets/accro-reseaux.jpg"
          title="La carte 6♠"
          shortText="Prévention sur l'utilisation excessive des écrans"
          longText="Que dire ?"
          textButton="⤢ Agrandir la carte"
        />

      <p className="texte">A terme, <b>trop d'écran</b> peut provoquer :</p>
      <BulletList
        items={["Troubles du sommeil",
    "Fatigue visuelle",
    "Douleurs posturales",
    "Diminution de la concentration",
    "Stress et anxiété",
    "Isolement social"]}
      />


<Quote 
          text="Être toujours en ligne, c’est ne jamais être pleinement présent." 
        />

      <p className="texte">Si tu as l'impression de :</p>
      <BulletList
        items={["Constamment vérifier tes notifications",
    "Passer ton temps devant ton ordinateur, ta tablette, ton téléphone",
    "Ouvrir des apps/sites par réflexe et te distraire",
    "T'isoler pour être sur ton écran",
    "Te sentir mal lorsque tu n'y as pas accès"]}
      />

      <p className="texte">Il est peut-être temps de <b>revoir ta relation avec les écrans</b>. </p>
        <div id="Plan_action"></div>



      <ExternalLinkBlock 
        resources={resources}
      />

      <h1 className="sous-titre-2">Comment agir ?</h1>
      
      <p className="texte">Les écrans ne sont pas mauvais en soi, mais il est important de <b>trouver un équilibre</b> pour ne pas se laisser submerger. Pour cela, adopte de bonnes habitudes au quotidien : </p>

      <ListeNumerotee 
          
          title="Plan d'action pour limiter son exposition aux écrans"
          items={items} 
          
      />

    <TextImageRight
      imageSrc="/public/assets/phone-night.jpg"
      text={
        <>Il est aussi possible d'installer des applications de <strong>contrôle du temps d'écran</strong>, d'utiliser les <strong>modes de concentration</strong> intégrés à certains téléphones ou encore d'installer des applications qui <strong>bloquent les éventuelles distractions</strong> (notifications, applications) selon l'heure et la durée d'utilisation. Enfin, n'oublie pas de protéger ta vue en <strong>diminuant la luminosité de ton écran</strong> dans la pénombre et en activant le <strong>filtre anti lumière bleue</strong>.
        </>}
    />

      <h1 className="sous-titre-2">Chiffres clés</h1>
      <ChiffresGroup chiffres={data} />

      <ExternalLinkBlock
      title={"Ressources utiles"}
      subtitle={"Quelques sites utiles à visiter"}
        resources={resources2}
        />

      <h1 className="">Besoin d'en parler ?</h1>
      <div id = "Contacts">
        
      <ContactCard
        image="/public/assets/nightline_logo.png" 
        title="Nightline Lyon"
        subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
        phone="04 85 30 00 10"
        email=""
        hours="Tous les soirs de 21h à 2h30"
        textButton="Voir le site web"
        link="https://www.nightline.fr/lyon"
      />
      </div>

      <Separateur />  

      <div id="réseaux"></div>
      <h1 className="titre">Addiction aux réseaux sociaux</h1>

<p className="sous-titre-2">Les dangers des réseaux sociaux</p>
<p className="texte">
Les réseaux sociaux savent parfaitement capter notre attention grâce à des <b>algorithmes sur-mesure</b> qui nous présentent toujours le contenu qu’on a envie de voir, nous poussant à revenir constamment nourrir notre <b>besoin de consommation visuelle</b>. Les notifications et les likes agissent comme des <b>récompenses instantanées</b>, créant une véritable <b>dépendance à la validation</b>. Et avec la possibilité de scroller à l'infini, il devient de plus en plus difficile de s’arrêter une fois qu’on a commencé à naviguer...
</p>


<YouTubeVideo url="https://www.youtube.com/watch?v=9qLREeJs__A" />



<p className="texte">À long terme, une <b>surconsommation des réseaux</b> peut causer, en plus des effets des écrans :</p>
<BulletList
  items={[
    "Perte de temps et procrastination",
    "Comparaison permanente et baisse de l’estime de soi",
    "Fatigue mentale due à la surcharge d’informations"
  ]}
/>


<p className="texte">Si tu remarques ces <b>signes</b> chez toi :</p>
<BulletList
  items={[
    "Vérification obsessionnelle des stats de ton compte",
    "Heures perdues à scroller",
    "Mal-être sans réactions sur tes posts",
    "Comparaison constante aux autres",
    "Sensation d’isolement sans accès aux réseaux"
  ]}
/>

<p className="texte">Les réseaux sociaux ont sûrement trop de pouvoir sur toi.</p>

<Quote
  text="Ce que tu vois en ligne, c’est du montage, pas la réalité."
/>

<p className="texte"><b>Comparer ton apparence</b> ou ton quotidien aux vies parfaites des autres peut vite te faire douter de toi, affecter ton moral et même amplifier des troubles comme l’<b>anxiété</b> ou les <b>troubles du comportement alimentaire</b> (TCA). Les standards irréalistes diffusés sur les réseaux déforment la <b>perception de soi</b> et créent une pression inutile. Prends du recul : ces images sont filtrées, retouchées et ne reflètent <b>pas la réalité</b>. Ce qui compte, c’est ton bien-être, pas un idéal inatteignable.</p>

<ExternalLinkBlock 
  resources={resources3}
/>


<h1 className="">Besoin d'en parler ?</h1>
<div id="Contacts">
<ContactCard
  image="/public/assets/ffab.png" 
  title="Anorexie Boulimie, Info Ecoute"
  subtitle="Posez vos questions à des spécialistes des TCA"
  phone="09 69 325 900"
  hours="Tous les jours de 16h à 18h les lundis, mardis, jeudis et vendredis"
  textButton="Voir le site web"
  link="https://www.ffab.fr/"
/>
</div>
          
      <Separateur />
      <p className="texte"><em><b>Sources : </b></em>e-enfance, FFAB,</p>
    </div>
    );
  };
  
  export default Ecrans_reseaux;