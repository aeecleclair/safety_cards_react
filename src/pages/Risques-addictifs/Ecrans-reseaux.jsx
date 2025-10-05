import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import "../../App.css";
import Separateur from "../../components/Separateur";




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
    imageSrc: "/assets/lebonusagedesecrans.png",
    label: "Le bon usage des écrans",
    description: "Retrouver le contrôle sur son temps d'écran",
  },
  {link: "https://youtube.com/playlist?list=PL8Ax_z5vzflz8JveM9VetLiZ3LPtFsttW&si=GZMy1ZTr3JaKGWsD",
  label: "Dopamine (série arte)",
  description: "Découvre toutes les techniques employées pour retenir ton attention",
  emoji: "💊"
  },
  {
    link: "https://www.addictaide.fr/ecrans/",
    imageSrc: "/assets/addictaide.jpg",
    label: "Addict'aide",
    description: "Page d'informations et d'actualités sur les addictions numériques",
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


const data = [
  { number: "1/2", title: "élève considère que son temps d'écran", description: "impacte négativement son sommeil" },
  { number: "24%", title: "des jeunes équipés", description: "ne tiendraient pas plus d'1h sans leur téléphone" },
];


const Ecrans_reseaux = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Addiction aux écrans & réseaux sociaux</h1>
      <Navbar links={navLinks} />

    <div id = "écrans">
      <h1 className="titre">Addiction aux écrans</h1>
    </div>
      <div id="resume-conseils">
      <p className="mise-avant">Les écrans sont conçus pour <b>capter ton attention</b> et, à forte dose, peuvent entraîner des problèmes de <b>sommeil</b>, de <b>concentration</b>, de <b>stress</b> ou encore d’<b>isolement social</b>.</p>
      <p className="mise-avant">Pour éviter d’en être dépendant, tu peux essayer de trouver un équilibre en <b>fixant des limites</b>, en <b>coupant les notifications</b> et en privilégiant des <b>activités sans écran</b>.</p>
      </div>
      <ImageTextPopup
          image="./assets/cartes/6_pique.png"
          title="La carte 6♠"
          shortText="Prévention sur l'utilisation excessive des écrans"
          longText="Tu sors ton portable à la moindre pause ? Tu enchaînes les stories et les vidéos sans t'en rendre compte ? Tu te sens de plus en plus fatigué·e et stressé·e à force de rester scotché·e à ton écran ? Tu es peut-être en train de développer une dépendance aux écrans."
          textButton="⤢ Agrandir la carte"
          suit="pique"
        />
         
          
      <p className="sous-titre-2"> Les effets des écrans</p>
      <p className="texte"> Les écrans captent ton attention, souvent sans que tu t’en rendes compte. Scroll infini, notifications constantes, vidéos en boucle… Tout est fait pour te <b>garder connecté</b> le plus longtemps possible. Le problème des écrans, c'est qu'ils peuvent facilement t'aspirer loin de la vraie vie et te <b>déconnecter du réel</b>. Les meilleurs moments ne se vivent pas à travers un écran !</p>

      

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

      <p className="texte">Si tu as <b>l'impression de</b> :</p>
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
      imageSrc="/assets/phone-night.jpg"
      text={
        <>Il est aussi possible d'installer des applications de <strong>contrôle du temps d'écran</strong> ("Temps d'écran" sur Iphone, "Bien-être numérique" sur Android), d'utiliser les <strong>modes de concentration</strong> intégrés à certains téléphones ou encore d'installer des applications qui <strong>bloquent les éventuelles distractions</strong> (notifications, applications) selon l'heure et la durée d'utilisation. Tu peux aussi basculer ton <b>écran en noir et blanc</b> afin de réduire son attrait. Enfin, n'oublie pas de protéger ta vue en <strong>diminuant la luminosité de ton écran</strong> dans la pénombre et en activant le <strong>filtre anti lumière bleue</strong>.
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
        image="/assets/nightline_logo.png" 
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

      <div id="resume-conseils">
      <p className="mise-avant">Les réseaux sociaux créent une dépendance avec <b>likes</b>, <b>scroll infini</b> et <b>comparaisons constantes</b>.</p>
      <p className="mise-avant">À forte dose, ils <b>nuisent à l’estime de soi et au bien-être mental</b>.</p>
      </div>

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


  
      <Separateur />
      <p className="texte"><em><b>Sources : </b></em>e-enfance, Le bon usage des écrans, Addict'aide, Rapport Qualité de Vie en Etude à l'ECL</p>
    </div>
    );
  };
  
  export default Ecrans_reseaux;