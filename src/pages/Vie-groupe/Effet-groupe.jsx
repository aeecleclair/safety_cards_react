import React from "react";
import "../../App.css";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import ListeNumerotee from "../../components/Listes";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ImageTextPopup from "../../components/Cartes";



const navLinks = [
  { label: "Comprendre l’effet de groupe", target: "comprendre" },
  { label: "Je suis victime de bizutage", target: "bizutage" },
  { label: "Moi et les autres", target: "moi-autres" },
  { label: "J'organise une soirée", target: "organiser" },
];

const resources_liens1 = [
  {
    link: "https://www.contrelebizutage.fr/",
    label: "Contre le bizutage",
    description: "Site d'information et de prévention contre le bizutage",
    imageSrc: "/assets/cncb.jpg",
  },
  {
    link: "https://commentonsaime.fr/mes-etudes/on-ma-demande-de-faire-des-trucs-bizarres-en-soiree/",
    label: "Comment on s’aime",
    description: "Témoignage et explication sur la pression sociale",
    imageSrc: "/assets/logo-cosa.svg",
  },

];

const resources_liens2 = [
  {
    link: "https://www.etudiant.gouv.fr/fr/soirees-etudiantes-1684",
    label: "Ministère de l'Enseignement supérieur",
    description: "Informations officielles sur les soirées étudiantes et le bizutage",
    imageSrc: "/assets/etudiant_gouv.jpg",
  },
];

const resources_liens3 = [
  {
    link: "https://www.masecurite.interieur.gouv.fr/fr/trouver-un-commissariat-une-gendarmerie",
    label: "Trouver un commissariat",
    description: "Porter plainte ou signaler un bizutage",
  },
  {
    link: "/vss",
    label: "VSS",
    description: "Tu as été victime de violences sexuelles et sexistes ?",
    emoji: "🫂",
  },
];

const items_5D = [

  { title: "Distraire", subtitle: "Fais semblant de connaître la victime ou la personne qui agresse, demande lui l’heure, pose lui une question, propose lui d’aller danser ou s’asseoir – toute interaction qui serait en mesure de stopper la situation de violence" },
  { title: "Déléguer", subtitle: "Tu peux demander de l’aide à une figure d’autorité (Vigiles, BDE, Peer Care, Bar…)" },
  { title: "Documenter", subtitle: "Tu peux tenter de renseigner un maximum d’indices en cas de témoignage, filmer la scène, en rassemblant le plus d’éléments possibles (date, lieu, heure, etc.), faire des enregistrements audio, des photos, etc. et les donner à la victime par la suite. Ce sera à elle de choisir quoi faire de ces preuves" },
  { title: "Diriger", subtitle: "Tu peux donner un ordre à la personne qui agresse pour qu’elle stoppe les violences, et utiliser des mots directifs, clairs, nets et précis. Par exemple “Enlève ta main de sa cuisse”, “Arrête d’insister et éloigne-toi”" },
  { title: "Dialoguer", subtitle: "Même si tu n’arrive pas à réagir pendant la situation, il est possible de le faire après, en discutant avec la victime, en la rassurant, en lui proposant de l’aide, tout en respectant son espace personnel et sa temporalité." },

];

const resources = [
  {
    link: "https://montetasoiree.com/",
    imageSrc: "/assets/monte-ta-soiree.png",
    label: "Monte ta soirée",
    description: "Un 1er outil pour organiser des soirées plus responsables",
  },
  {
    link: "https://pimp-my-party.fr/",
    imageSrc: "/assets/pimp-my-party.png",
    label: "Pimp my party",
    description: "Un 2ème outil pour organiser des soirées en toute sécurité",
  },
  {
    link: "https://www.contrelebizutage.fr/ressources/chartes-et-guides/",
    imageSrc: "/assets/cncb.jpg",
    label: "Comité national contre le bizutage",
    description: "Chartes et guides pour organiser des soirées étudiantes",
  },
];

const Effet_groupe = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Effet de groupe</h1>
      <Navbar links={navLinks} />

      <div id="comprendre">
        <h1 className="titre">Comprendre l’effet de groupe</h1>


      <ImageTextPopup
        image="./assets/cartes/dame_carreau.png"
        title="La carte D&diams;"
        shortText="Effet de groupe : informations et conseils"
        longText="Il peut être compliqué de voir qu'on est soumis à l'effet de groupe. Si tu te reconnais dans les 4 situations proposées, n'hésite pas à en parler, tu trouvers de nombreuses ressources sur cette page. Dans tous les cas, souviens-toi que tu n'es jamais obligé·e de faire quelque chose qui te met mal à l'aise. "
        textButton="⤢ Agrandir la carte"
        suit="carreau"
      />

      
        <p className="texte">
          L’effet de groupe, c’est cette pression sociale qui nous pousse à « faire comme tout le monde » pour être accepté·e.
          En groupe, on a souvent tendance à imiter les autres ou à obéir aux règles implicites du groupe. Parfois c’est positif
          (entraide, esprit de cohésion), mais quand les comportements sont risqués, cela peut devenir dangereux. En milieu étudiant,
          la pression de groupe peut nous amener à boire beaucoup d’alcool, participer à un bizutage humiliant, tenir des propos sexistes
          ou « forcer » quelqu’un à faire ce qu’il ou elle ne veut pas.
        </p>

        <ExternalLinkBlock resources={resources_liens1} />

        <h2 className="sous-titre-2">Que dit la loi ?</h2>
        <p className="texte">
          Le bizutage est un délit qui porte atteinte à la dignité humaine. Il consiste à amener une personne à subir des actes
          humiliants ou dégradants, même avec son consentement, notamment lors de soirées étudiantes.
          Il est puni de 6 mois d'emprisonnement et de 7 500 € d'amende. Ces peines sont aggravées si les victimes sont vulnérables
          ou en cas de violences. Les personnes physiques qui n'ont pas causé directement le dommage peuvent aussi être sanctionnés si leur négligence a contribué aux faits.
        </p>

        <ExternalLinkBlock resources={resources_liens2} />

        <h2 className="sous-titre-2">Reconnaître la pression du groupe</h2>
        <BulletList
          items={[
            "Tu te sens mal à l’aise ou anxieux·se. Par exemple, tes ami·es insistent lourdement pour que tu boives ou participes à un défi, et tu n’en as pas vraiment envie.",
            "« Comme tout le monde » : On te répète que « tout le monde le fait » ou que tu es trop sérieux·se. Cette phrase rime souvent avec « si tu dis non, tu n’as pas d’humour ».",
            "Menaces implicites : On rit de ton refus, on te taquine ou on te met à l’écart si tu ne suis pas le groupe. Tu crains d’être exclu·e ou jugé·e.",
            "Changement de ton : D’habitude tu ne fais pas ça, mais en groupe tu as l’impression que c’est obligatoire. Tu te dis « même si je n’en ai pas envie, je vais le faire pour que ça ne fasse pas de problème ».",
          ]}
        />

        <h2 className="sous-titre-2">S’affirmer et dire non</h2>
        <p className="texte">
        Rappelle-toi que tu as toujours le droit de dire non à ce qui te met mal à l’aise. Il n’y a pas de honte à t’affirmer. Voici des exemples de phrases simples pour refuser :
        </p>
        <BulletList
          items={[
            "« Non merci, je suis déjà servi·e. »",
            "« Ça me va comme ça, je passe mon tour. »",
            "« Chacun son truc, moi j’ai décidé d’arrêter là. »",
            "« Mon lit me fait de l’œil, je dois rentrer dormir. »",
            "« Je trouve ça pas cool, je préfère m’arrêter. »",
          ]}
        />
        <p className="texte">
        Tu peux aussi donner un prétexte ou un compromis si tu préfères ne pas répondre directement : par exemple dire que tu dois rentrer tôt, que tu as un examen ou un sport demain. L’important, c’est de t’en tenir à ta décision. Tiens-toi droit·e, fixe la personne du regard, parle calmement mais fermement. Si besoin, reparle à voix haute pour que tout le monde entende : cela montre que tu es sûr·e de toi. Et si tu te sens trop poussé·e, sache que tu peux toujours quitter la pièce ou la fête : ta sécurité et ton confort passent avant tout.
        </p>
      </div>


      <Separateur />

      <div id="bizutage">
        <h1 className="titre">Victime de bizutage ?</h1>
        <p className="texte">Besoin de parler ? Un chat est ouvert sur le site Comment on s’aime.</p>

        <ContactCard
          image="/assets/logo-cosa.svg"
          title="Comment on s'aime ?"
          subtitle="Service anonyme et gratuit pour parler"
          hours="Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h"
          textButton="Voir le site"
          link="https://commentonsaime.fr/"
          bgColor="#f6a21e"
          textColor="#ffffff"
        />

        <h2 className="sous-titre-2">Vous pouvez :</h2>
        <BulletList
          items={[
            "porter plainte au commissariat ou à la gendarmerie de votre choix,",
            "informer sans délai l'école ",
          ]}
        />

        <h2 className="sous-titre-2">Si vous signalez cet événement, l'école devra ensuite :</h2>
        <BulletList
          items={[
            "saisir le procureur de la République,",
            "engager des poursuites disciplinaires contre les auteurs.",
          ]}
        />

        <ExternalLinkBlock resources={resources_liens3} />
      </div>

      <Separateur />

      <div id="moi-autres">
        <h1 className="titre">Moi et les autres</h1>
        <h2 className="sous-titre-2">Ne pas faire subir la pression aux autres</h2>
        <BulletList
          items={[
            "Respecte les limites de chacun·e. Si tu proposes un défi ou une blague, assure-toi que tout le monde est à l’aise. Si un·e ami·e hésite ou refuse, ne le/la taquine pas et passe à autre chose.",
            "Ne participe pas aux moqueries. Si quelqu’un est embarrassé ou refusé, ne rit pas de lui/d’elle et ne partage pas de photos ou vidéos humiliantes sur les réseaux. Être complice sans action, c’est encourager le comportement.",
            "Encourage la diversité des choix. Dis clairement : « Si tu ne veux pas, c’est OK. Chacun fait comme il veut. » Montre que la tolérance est un choix de valeur, pas un renoncement.",
            "Aide les plus vulnérables. Par exemple, si un·e pote a trop bu, accompagne-le·la pour qu’il/elle se repose ou rentre chez lui/elle en sécurité (taxi, canapé chez toi). Si tu vois quelqu’un intimidé (éloigné, seul·e, silencieux·se), propose-lui ta compagnie ou parle-lui pour savoir comment il/elle va."
          ]}
        />

<h2 className="sous-titre-2">Soutenir et protéger contre l'effet de groupe</h2>
        <p className="texte">
        On est tous et toutes concernés : en groupe, chacun a le pouvoir d’influencer positivement. Sois un·e bon·ne ami·e et n’hésite pas à intervenir pour le bien de tous·tes :
        </p>
        <BulletList
          items={[
            "Veille sur les autres : Si un·e ami·e semble mal à l’aise ou en danger (ivre, isolé·e, harcelé·e), propose-lui de s’éloigner un moment ou de partir. Dites : « Ça va aller ? On sort prendre l’air ? » ou « Viens, on rentre, on en parlera demain ».",
            "Parle haut et fort : Face à un acte choquant, ne reste pas silencieux·se. Une phrase posée peut stopper net la pression (« Laisse·le/la tranquille, c’est non »).",
            "Construis la confiance : Rappelle à ton entourage qu’il n’y a pas d’avantages à mettre les autres mal à l’aise. Encourage les moments festifs sans risque : soirées « sans alcool », jeux amusants sans défis dangereux, conversations drôles qui ne blessent personne.",
            "Mobilise la communauté : Si tu identifies des situations répétées de bizutage ou de violences, parlez-en ensemble et alertez les référents (BDE ou BDS, infirmière, administration, etc.).",

          ]}
        />
      </div>

      <ListeNumerotee 
          
          title="La règle des 5D" 
          subtitle="Développée par l’ONG Right to Be, la méthode des 5D a été pensée pour aider les témoins à réagir au harcèlement sexiste et sexuel dans l’espace public, et elle peut servir dans plein de situations !" 
          items={items_5D} //on fait appel à des constantes de début de la page
          
      />

<div id = "organiser">
        <h1 className="titre">J'organise une soirée</h1>
      </div>

      <TextImageRight  
        text={
          <>
            Boire un coup entre amis doit rester un <b>moment de convivialité</b>.
Mais dans un groupe, il peut être difficile de <b>dire non à un verre</b> ou de <b>suivre son propre rythme</b>.
<b> L’effet de groupe peut amplifier la pression à consommer</b>, même inconsciemment.

Pour que chacun se sente à l’aise, il est important de <b>favoriser un climat de respect et d’écoute</b>, où les choix de chacun sont acceptés sans jugement.
Tu peux trouver des outils pour organiser des <b>soirées plus responsables et sécurisées</b> sur les sites suivants :
          </>
        }
        imageSrc="/assets/alcool.jpg"
      />

    
      <ExternalLinkBlock

        resources={resources}
      />

      <Separateur />
      <p className="texte">
        <em><b>Sources :</b> Ministère de l'Enseignement supérieur, Comment on s’aime, Contre le bizutage, Étudiant.gouv, Right To Be </em>
      </p>
    </div>
  );
};

export default Effet_groupe;
