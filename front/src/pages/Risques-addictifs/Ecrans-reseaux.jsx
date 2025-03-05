import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import "../../App.css";



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


const resources = [
  {
    link: "/isolement",
    emoji: "🧍",
    label: "Tu te sens seul·e ?",
    description: "Quelques conseils pour sortir de l'isolement",
  },
  {
    link: "/sedentarite",
    emoji: "🛋️",
    label: "Tu ne sors presque plus ?",
    description: "Des astuces pour bouger plus au quotidien",
  },
];

const resources2 = [
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

const data = [
  { number: "1/2", title: "élève considère que son temps d'écran", description: "impacte négativement son sommeil" }
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

        <Quote 
          text="Être toujours en ligne, c’est ne jamais être pleinement présent." 
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

      
<ImageTextPopup
          image="./src/assets/accro-reseaux.jpg"
          title="La carte 6♠"
          shortText="Prévention sur l'utilisation excessive des écrans"
          longText="Que dire ?"
          textButton="⤢ Agrandir la carte"
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
      <p className="texte">Il est aussi possible d'installer des applications de <b>contrôle du temps d'écran</b>, d'utiliser les <b>modes de concentration</b> intégrés à certains téléphones ou encore d'installer des applications qui <b>bloquent les éventuelles distractions</b> (notifications, applications) selon l'heure et la durée d'utilisation.</p>

      <p className="texte">Enfin, n'oublie pas de protéger ta vue en <b>diminuant la luminosité de ton écran</b> dans la pénombre et en activant le <b>filtre anti lumière-bleue.</b></p>
      <h1 className="sous-titre-2">Chiffres clés</h1>
      <ChiffresGroup chiffres={data} />

      <ExternalLinkBlock
        resources={resources2}
        />

      <h1 className="">Besoin d'en parler ?</h1>
      <div id = "Contacts">
      <ContactCard
        image="/src/assets/nightline_logo.png" 
        title="Nightline Lyon"
        subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
        phone="04 85 30 00 10"
        email=""
        hours="Tous les soirs de 21h à 2h30"
        textButton="Voir le site web"
        link="https://www.nightline.fr/lyon"
      />
      </div>

      <div id="réseaux"></div>
      <p className="titre">Addiction aux réseaux sociaux</p>



    <TextImageRight  text="Les réseaux sociaux, c’est comme une sorte de boucle sans fin où on se retrouve souvent piégé. Au départ, ça paraît anodin : on veut juste voir ce qui se passe, discuter avec des amis ou se détendre un peu. Mais petit à petit, on finit par passer des heures à scroller, à attendre des notifications, et à comparer nos vies à celles des autres. Le problème, c’est que ça affecte notre confiance en nous et notre bien-être mental. On se met à chercher la validation à travers les likes et les commentaires, ce qui peut créer de l’anxiété et du stress. En plus, on oublie qu’on ne voit que les « bonnes » facettes de la vie des autres, et pas la réalité derrière l'écran. Pour éviter ça, il faut vraiment apprendre à prendre du recul : se fixer des limites sur le temps passé en ligne, couper les notifications, et surtout profiter de moments sans écran. C’est à nous de reprendre le contrôle et de ne pas laisser les réseaux sociaux définir notre quotidien." 
      imageSrc="../src/assets/Reseaux.png" />

    <YouTubeVideo url="https://www.youtube.com/watch?v=9qLREeJs__A" />


      <div id = "Ressources_utiles">
      <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites utiles à visiter"
        resources={resources}
      />
      </div>

      
            <Separateur />
      
            <p className="texte"><em><b>Sources :</b> e-enfance</em></p>
            
        
    </div>
    );
  };
  
  export default Ecrans_reseaux;