import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import Components from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";
import "./automutilation.css"

const { BulletList, NumberedList, TextImageRight, ImageCenter, Navbar, YouTubeVideo} = Components;

const navLinks = [
  { label: "Qu'est-ce que l'automutilation ?", target: "automutilation" },
  { label: "Je m'automutile, comment agir ?", target: "victime" },
  { label: "Je suis témoin, comment réagir ?", target: "aidant" }
];

const resources_suicide = [
  {
    link: "/suicide",
    emoji: "🗣️",
    label: "Suicide",
    description: "Comment réagir si j'ai ou si quelqu'un de mon entourage a ces idées ?",}
  ];


  const data = [
    { number: "1/10", title: "jeune", description: "pratiquera l'automutilation à un moment donné" },
    { number: "7%", title: "des étudiants", description: "se blessent intentionnellement au moins 5 fois par an" },
    { number: "2x", title: "plus souvent", description: "Les filles sont davantage touchées par l'automutilation" }
  ];

  
const resources_infos = [

  {
    link: "https://www.rcpsych.ac.uk/mental-health/translations/french/lautomutilation",
    label: "Automutilation",
    description: "Informations à destination des automutilés ou de leurs proches",
  },

];


  const resources_aide = [

    {
      link: "https://monsoutienpsy.ameli.fr/recherche-psychologue",
      
      label: "Mon soutien psy ",
      description: "12 séances gratuites avec un psychologue",
    },
    {
      link: "https://masante.universite-lyon.fr/sante-mentale/annuaire-sante-mentale/",
      imageSrc:"/src/assets/logo_UDL.png",
      label: "Annuaire",
      description: "de l'Université de Lyon : accompagnement, suivi, urgences...",
    },
    {
      link: "https://www.nightline.fr/soutien-etudiant",
      imageSrc:"/src/assets/nightline_logo.png",
      label: "Annuaire",
      description: "de la Nigtline : les aides gratuites autour de toi",
    }
  ];


  const items_temoin = [
    { title: "Approchez la personne", subtitle:"Trouvez un lieu calme qui vous met à l'aise. Trouvez le bon moment, où vous et la victime êtes disposés à parler."},
    { title: "Débutez la conversation", subtitle: "Expliquez directement à la personne que vous craignez qu'elle s'automutile. Montrez que vous êtes prêt·e·s à l'écouter. Toutefois, gardez en tête que l'automutilation est un sujet très personnel qui peut être difficile à aborder. La personne peut avoir besoin de temps pour le faire. N'exigez pas de parler de sujets que la personne n'est pas prête à aborder." },
    { title: "Au cours de la conversation", subtitle: "L'arrêt de l'automutilation ne doit pas être au centre de la conversation. Cherchez plutôt des moyens pour rendre la vie de la personne plus agréable : mettre un terme à l'automutilation est un processus long, qui ne s'accomplit pas du jour au lendemain." },
    { title: "Exprimez votre inquiétude et écoutez activement", subtitle: "Signifiez à la personne ce que vous ressentez en faisant usage du «Je» : «Je m'inquiète» et non «Tu m'inquiètes». Montrez que vous êtes à l'écoute en reprenant ses propos. Réagissez avec calme, sans juger la personne et sans prendre ses sentiments à la légère." },
    { title: "Offrez votre soutien et votre réconfort", subtitle: "Faites preuve d'empathie, dites-lui que vous comprenez ce qu'elle ou il vit. Signifiez-lui qu'elle ou il n'est pas seul·e et que vous êtes là pour l'aider." },
    { title: "Encouragez à aller voir des professionnels", subtitle: "Par exemple l'infirmière de Centrale, un médecin généraliste, un psychologue... Si vous devez en parler avec quelqu'un pour sa sécurité, demandez-lui son accord avant. Ne contactez les secours (15 ou 112) que si la blessure est grave. Gardez en tête que la plupart des personnes qui s’automutilent ne souhaitent pas mettre fin à leurs jours.  " },
  ];
  

const Automutilation = () => {
    return (
      <div className="page">
        <h1 className="titre-page">Automutilation</h1>
        <Navbar links={navLinks} />
        
        <div id="automutilation">
          <h1 className="titre">Qu'est ce que l'automutilation ?</h1>
        </div>


        <h2 className="sous-titre-2">L'automutilation non suicidaire</h2>

      <p className="texte">L'automutilation non suicidaire se manifeste souvent de la manière suivante : </p>
      <BulletList items={[
          "Scarifications, coupures et brûlures",
          "Coups volontaires contre une surface dure",
          "Coups de poing ou claques auto-infligées",
          "Recherche de situations risquées : participation volontaire à des bagarres, recherche d'overdoses, sous ou suralimentation, vomissements volontaires, excès d'activité sportive."
      ]} />


      <h2 className="sous-titre-2"> Qu'est-ce qui pousse quelqu'un à s'automutiler ? </h2>

      

      
      <TextImageRight  text="De nombreuses personnes qui s’automutilent sont en grande détresse ou dans des situations insupportables. Elles souffrent souvent de cette manière pendant un certain temps avant de s’automutiler. L'automutilation peut par exemple être utilisée pour faire retomber le stress, exprimer leur douleur ou échapper à des souvenirs traumatisants. Dans certains cas, c’est leur sentiment de culpabilité qui les pousse à s’infliger une punition. " 
      imageSrc="/src/assets/zebre.jpg" />

      <p className="texte"> <b>Important</b> : la plupart des personnes qui s'automutilent <b>ne cherchent pas à mettre fin à leurs jours.</b> Si le doute se pose, n'hésitez pas à <b>poser la question à la personne.</b> </p>

        <p className="texte">Tu as des idées suicidaires ? Quelqu'un t'a fait part de ses idées suicidaires ? </p>
        <ExternalLinkBlock resources={resources_suicide} />

        <h2 className="sous-titre-2">L'automutilation est un problème étendu</h2>
        <ChiffresGroup chiffres={data} />

        <ExternalLinkBlock
        title="Ressources utiles"
        subtitle="Quelques sites à visiter pour continuer à se renseigner sur l'automutilation"
        resources={resources_infos}
      />


      <ImageTextPopup
        image="./src/assets/feu.jpg"
        title="La carte 3♠"
        shortText="Automutilation : agir en tant que victime et témoin"
        longText="Automutilation : agir en tant que victime et témoin"
        textButton="⤢ Agrandir la carte"
      />




       <Separateur/>
      <div id="victime">
        <h1 className="titre">Je m'automutile, comment agir ?</h1>
      </div>

      <h2 className="sous-titre-2">Quand tu as envie de te faire mal</h2>
      <p className="texte">Les idées suicidaires passent après un certain temps. Si tu parviens à les surmonter pendant une certaine période, ce sera plu simple de te retenir après. Pour faire passer ces idées, tu peux : </p>

      <BulletList items={[
          "Parler à quelqu’un : que ce soit à des memebres de ta famille, à des amis ou en appelant une ligne d'écoute (voir contacts plus bas).",
          "Te distraire en trouvant une activité qui te change les idées : tu peux sortir te balader, écouter de la musique, faire du sport ou n'importe quelle autre activité qui t'intéresse.",
          "Te détendre et concentrer ton esprit sur des pensées agréables et positives. Prends soin de toi et autorise-toi à faire quelque chose que tu aimes.",
          "Trouver un environnement qui te mette en confiance.",
          "Trouve une autre façon d'exprimer tes sentiments : tu peux dessiner des lignes rouges sur ta peau, presser des glaçons, ou t'infliger une douleur anodine comme manger un piment ou prendre une douche froide. ",
          "Si tu en éprouves le besoin, tu peux écrire ce que tu ressens et expliquer ce qui t'arrive. Personne d'autre n'a besoin de lire ce que tu as écrit.  "
      ]} />

      <p className="texte">Il existe des services en ligne. Tu peux contacter la <b>Nightline</b>, service qui te mettra en contact avec des <b>étudiants bénévoles</b> de manière gratuite et anonyme, que tu aies besoin d'aide ou simplement besoin de vider ton sac. Si tu préfères parler à des <b>professionnels</b>, toujours de manière gratuite et anonyme, alors tu peux contacter <b>Comment on s'aime ?</b>.</p>
      
      <div className="two-column-container">
        <div className="column">
          <ContactCard
          image="/src/assets/nightline_logo.png" 
          title="Nightline Lyon"
          subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
          phone="04 85 30 00 10"
          email=""
          hours="Tous les soirs, de 21h à 2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />
        </div>
        <div className="column">
          <ContactCard
            image="/src/assets/logo-cosa.svg" 
            title="Comment on s'aime ?"
            subtitle="Écoute et réponse à tes questions par des professionnels"
            hours="Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h"
            textButton="Voir le site web"
            link="https://commentonsaime.fr/"

            bgColor="#f6a21e"    //informations facultatives
            textColor="#ffffff"
          />
        </div>
      </div>

      <h2 className="sous-titre-2">Lorsque l'envie de te faire du mal est passée</h2>

      <p className="texte">Lorsque l'envie est passée et que tu te sens en sécurité, tu peux réfléchir aux poits suivants :</p>

      <BulletList items={[
          "Rappelle-toi de la dernière fois où tu n'avais pas envie de t'automutiler : quelles étaient tes pensées, que ressentais-tu, où et avec qui étais-tu ?",
          "Essaye de comprendre pourquoi tu as commencé à t'automutiler.",
          "Réfléchis à l'impact qu'a l'automutilation sur toi : te donne-t-elle un sentiment de liberté, de soulagement, de contrôle ? Quelle activité pourrait te donner ces mêmes sentiments sans te nuire ?",
          "Fais un enregistrement audio ou demande à une personne de confiance de la faire : parle de tes points forts, explique pourquoi tu veux arrêter de t'automutiler. Tu réécouteras cet enregistrement quand tu te sentiras mal.",
          "Construis un plan de crise avec quelqu'un : si tu as envie de t'automutiler, qui dois-tu contacter ? Comment te détourner de ces idées ? Quelles activités pour te distraire ? ... "
      ]} />
      

      <h2 className="sous-titre-2">Tu ne veux pas arrêter de t'automutiler ? </h2>

      <p className="texte">Tu peux quand même :</p>

      <BulletList items={[
          "Réduire les dommages causés à ton corps en utilisant une méthode moins nocive.",
          "Continuer à réfléchir à la manière de résoudre les problèmes qui te poussent à t'automutiler, que ce soit seul·e ou en en parlant avec des personnes de ton entourage.",
          "De temps en temps, revois ta décision de ne pas arrêter.",
      ]} />

      <h2 className="sous-titre-2">Besoin d'en parler ?</h2>


      <p className="texte"><b>Tu n'es pas seul·e</b> et de nombreuses initiatives sont mises en place pour t'écouter et t'aider. Si tu le souhaites, tu peux en parler à des membres de ta famille ou à des amis. Tu peux aussi prendre rendez-vous avec <b>l'infirmière de l'Ecole</b>, et ce même si tu as juste besoin de parler.</p>

      <ContactCard
        image="/src/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
        title="Infirmerie"
        subtitle="Infirmerie de Centrale Lyon"
        phone="Voir les informations"
        email="Voir les informations"
        hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
        textButton="Voir les informations"
        link=""

        bgColor="#ffffff"    //informations facultatives
        textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

      />

<p className="texte">Si tu veux trouver un soutien psychologique sur le long terme, tu peux utiliser les ressources suivantes : </p>


      <ExternalLinkBlock
        resources={resources_aide}
      />

      <Separateur/>
      <div id="aidant">
        <h1 className="titre">Je suis témoin, comment réagir ?</h1>
        </div>

        <h2 className="sous-titre-2">Les signes à repérer</h2>
        <p className="text">Si quelqu'un s'automutile, elle ou il peut :</p>
        <BulletList items={[
          "Présenter des coupures, des brûlures, des hématomes ou des cicatrices, notamment au niveau des bras, du ventre ou des cuisses. ",
          "Porter des vêtements qui masquent ces signes physiques, comme des hauts à manches longues. ",
          "Inventer des excuses pour expliquer ces blessures. ",
          "Transporter des objets coupants (couteaux, ciseaux...)",
          "Evoquer des senssations de douleur,de faiblesse ou d'étourdissements.",
          "Ressentir de la confusion, du dégoût, de la peur, ou montre des signes d'une mauvaise estime personnelle.",
          "Avoir la sensation de ne rien maitriser, d'être isolé·e ou seul·e."
      ]} />


        <h2 className="sous-titre-2">Comment réagir ?</h2>
        <p className="text">Si vous pensez qu'une personne s'automutile, <b>vous devez en parler avec elle ou lui</b>. Faites tout d'abord un point avec vos émotions. <b>Si vous ne vous sentez pas capable d'aborder le sujet</b>, essayez de trouver quelqu'un qui pourra le faire. Cela peut être un ami ou l'infirmière de Centrale. <br/> <b>Si vous vous sentez à même d'avoir cette conversation,</b> voici quelques étapes à suivre : </p>
      

        <ListeNumerotee 
          
          title="Plan d'action pour les Premiers Secours en cas d'automutilation" 
          subtitle="Comment aider un personne qui a recours à l'automutilation ?" 
          items={items_temoin}
          
      />

      <h2 className="sous-titre-2"> Ce qu'il faut éviter de faire</h2>

      <BulletList items={[
          "Essayer d'être son thérapeute. La meilleure façon de l’aider est d'être son ami, son parent ou son partenaire. ",
          "Réagir fortement, en vous montrant en colère, blessé ou bouleversé. Ceci l’amènera probablement à se sentir encore plus mal, ce qui rendra le changement plus difficile.",
          "Vous pouvez, honnêtement et ouvertement, parler à votre ami ou parent de l'effet que son automutilation a sur vous. Mais pour cela, vous devez être calme, afin de pouvoir parler d'une manière qui montre à quel point vous vous souciez d'eux.",
          "S’attendre à ce qu'elle s’arrête du jour au lendemain, cela demande généralement du temps et des efforts. ",
          "Luttez avec eux lorsqu'ils sont sur le point de s'automutiler. Il vaut mieux s'éloigner et leur suggérer de venir vous en parler plutôt que de se faire du mal. ",
          "Leur faire promettre de ne pas recommencer. ",
          "Leur dire que vous ne les verrez plus à moins qu'ils n'arrêtent de s'automutiler.  ",
          "Se sentir responsable de leur automutilation ou devenir la personne qui est censée les arrêter. Assurez-vous aussi d'avoir quelqu'un à qui parler afin d'obtenir le soutien dont vous avez aussi besoin."
      ]} />


            <h2 className="sous-titre-2">Pour aller + loin : la formation PSSM</h2>
      
            <TextImageRight  text="Les PSSM (Premiers Secours en Santé Mentale) constituent l’aide qui est apportée à une personne touchée par un trouble ou une crise de santé mentale. Les premiers secours sont donnés jusqu’à ce qu’une aide professionnelle puisse être apportée ou jusqu’à ce que la crise soit résolue. Ils sont l’équivalent en santé mentale des gestes de premiers secours qui, eux, apportent une aide physique à la personne en difficulté.
            Ouverte à toutes et tous, et sans pré-requis, la formation PSSM vise à apprendre à savoir réagir face à une détresse psychique : entrer en contact, soutenir et orienter.
            La formation est dispensée à Centrale par l'infirmière : si tu es intéressé·e, tu peux la contacter ou voir avec l'association Peer Care." 
            imageSrc="/src/assets/logo-pssm.svg" />
      
            <Separateur />
      
            <p className="texte"><em> <b>Sources :</b> Manuel des Premiers Secours en Santé Mentale pour les jeunes , Portail Santé de l'Université de Lyon, Royal College of Psychiatrists, Unicef </em>
            </p>

      </div>
    );
  };
  
  export default Automutilation;