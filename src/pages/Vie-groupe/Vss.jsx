import React from "react";
import "../../App.css";

import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";

const navLinks = [
  { label: "De quoi parle-t-on ?", target: "vss" },
  { label: "Je suis victime", target: "victime" },
  { label: "Je suis témoin", target: "temoin" }
];


const items_aerer = [
  { title: "Approcher la personne, évaluer et assister", 
    subitems: [ 
      { title : "Approchez la victime", subtitle: "Trouvez le moment et le lieu où vous vous sentez tous les deux à l'aise pour discuter. Si la personne n'est pas disposée à parler, ne la forcez pas à parler, elle peut avoir besoin de temps pour se confier : signalez-lui simplement que vous restez à sa disposition." },
      {title : "Si vous percevez des signes de crise", subtitle: "Si il est fait mention pendant la conversation d'idées suicidaires ou d'automutilation non suicidaire, la victime peut être en crise. Il est alors nécessaire de l'assister. Référez-vous aux pages Suicide et Automutilation." }
      ] },

  { title: "Écouter activement et sans jugement", subtitle: "Posez des questions, reformulez ses propos pour bien comprendre, n'interrompez pas la personne, regardez-la quand elle vous parle, n'exprimez pas de jugement et évitez la confontation." },
  { title: "Réconforter et informer", subtitle: "Rassurez le·la quant au fait qu'il·elle peut se rétablir, rappelez qu'il·elle n'est pas seul·e à faire face à ce type de situation, proposez votre aide en prenant garde à ne pas tout assumer à sa place, réfléchissez à des solutions ensemble. " },
  { title: "Encourager à aller vers des professionnels", subtitle: "Par exemple l'infirmière de Centrale, un médecin généraliste ou un psychologue. Si la victime ne souhaite pas voir de professionnels, discutez de ce refus. Quoiqu'il en soit, signalez-lui que vous restez à sa disposition." },
  { title: "Renseigner sur les autres ressources disponibles", subtitle: "Encouragez-le·la à communiquer avec d'autres ami·e·s ou avec des membres de leur famille. Vous pouvez aussi les orienter vers des ressources en ligne, présentes sur cette page par exemple." },
];

const resources_consent = [

  {
    link: "/consent",
    emoji : "✅",
    label: "Consentement",
    description: "On fait le point ?",
  }
];


const couple = [
  {
    link: "/couple",
    emoji: "💑",
    label: "Couple",
    description: "Suis-je dans une relation saine ?",
  }
];



const resources_vss_plus = [


  {
    link: "https://arretonslesviolences.gouv.fr/",
    imageSrc:"/assets/arretons_violence.svg",
    label: "Arretons les violences",
    description: "Le site du gouvernement qui regroupe un grand nombre d'informations",
  },
  {
    link: "https://lessalopettes.wordpress.com/",
    label: "Les salopettes",
    description: "L'association féministe de l'ENS Lyon (informations et ressources)",
  },
  
  {
    link: "https://www.noustoutes.org/",
    
    label: "Nous toutes ",
    description: "Un collectif féministe pour s'informer sur les VSS et s'engager",
    imageSrc: "/assets/noustoutes.jpg",
  },

  {
    link: "/assets/rapport_hce_25.pdf",
    label: "Etat des lieux du sexisme en France", 
    description: "Le rapport 2025 du Haut Conseil à l'Egalité entre les femmes et les hommes",
  }
];

const data = [
  { number: "26", title: "VSS", description: "recensées à Centrale Lyon sur l'année scolaire 2023-2024" },
  { number: "93,3%", title: "des VSS", description: "se déroulent en soirée selon les victimes" },
  { number: "50%", title: "des victimes environ", description: "ont demandé de l'aide" },
];

const barometres = [

  {
    link: "/assets/Violentomètre_relations_profs_eleves.pdf",
    label: "Les VSS dans les relations professeurs-élèves",
    description: "",
    emoji: "🎓",
  },
  {
    link: "/assets/Violentometre_VSS_travail.pdf",
    label: "Les VSS dans le milieu professionnel",
    description: "",
    emoji: "💼",
  },
  {
    link: "/assets/violentometre_depliant_monde_scientifique.pdf",
    label: "Les VSS dans le monde scientifique",
    description: "",
    emoji: "🔬",
  },
  {
    link: "/assets/reglo_sport_reglette.pdf",
    label: "Les VSS dans le sport",
    description: "",
    emoji: "⚽",
  }
];



const Vss = () => {
    return (
      <div className = "page">

        <h1 className = "titre-page">Violences sexistes et sexuelles</h1>


      <Navbar links={navLinks} />

      <div id = "vss">
        <h1 className="titre">De quoi parle-t-on ?</h1>
      </div>

      <ImageTextPopup
        image="./assets/9_coeur.png"
        title="La carte 9&hearts;"
        shortText="La pyramide des VSS"
        longText=""
        textButton="⤢ Agrandir la carte"
      />


      <h2 className="sous-titre-2">Qu'est-ce qu'une VSS ?</h2>

      <p className="texte">Les violences sexistes et sexuelles (VSS) regroupent les violences sexuelles (actes à connotation sexuelle commis avec violence, contrainte, menace ou surprise) et les violences sexistes (injures ou comportements humiliants basés sur le genre). 


         
      </p>

      <BulletList items={["L’outrage sexiste (insulte ou geste sexuel offensant) est passible d’une amende (1 500 € en règle générale). ",
"L’exhibition sexuelle (imposer un acte sexuel ou exhiber ses organes génitaux en public ou à la vue de tous) est puni d’un an d’emprisonnement et 15 000 € d’amende.",
"Le harcèlement sexuel (commentaires sexuels répétés ou non, chantage, etc.) est réprimé par deux ans de prison et 30 000 € d’amende.",
"L’agression sexuelle (atteinte sexuelle avec violence, contrainte, menace ou surprise) est un délit. On parle d’agression sexuelle si l’atteinte a lieu sur une partie du corps considérée comme intime et sexuelle (la bouche, la poitrine, le sexe, les fesses, les cuisses et l’intérieur des cuisses).",
"Le viol (toute pénétration sexuelle forcée) est un crime puni jusqu’à 15 ans de réclusion criminelle (20 ans si circonstances aggravantes)."
]} />


      <ExternalLinkBlock
        title=""
        subtitle=""
        resources={resources_consent}
      />

      <p className="texte">Si les chiffres recensés à Centrale Lyon sont plus bas que les moyennes nationales dans l'enseignement supérieur, les VSS restent présentes au sein de l'établissement :</p>
      <ChiffresGroup chiffres={data} />

      <h2 className="sous-titre-2">Les formes moins visibles : l'iceberg des violences sexistes</h2>

      <TextImageRight  
        text={
        <>
        La violence sexiste ne se limite pas aux agressions visibles et choquantes mais prend aussi de nombreuses formes, souvent banalisées, invisibles ou normalisées dans la vie quotidienne. C’est ce que met en lumière le modèle de l’iceberg de la violence sexiste.
        Au sommet de l’iceberg, on trouve les violences qui sont reconnues par la société comme inacceptables, et clairement punies par la loi, et qui ont été évoquées en détail précédemment. Cela ne représente que la partie émergée d’un ensemble plus vaste
        Sous la surface, on trouve une vaste zone de comportements qui ne sont pas toujours perçus comme de la violence, mais qui en constituent pourtant les racines. Ces actes, parfois considérés comme « anodins », alimentent un climat sexiste et facilitent les violences plus graves.
        <br/> On y trouve :

        </>
        }
        imageSrc="/assets/iceberg.jpg"
      />

      <BulletList items={["Les blagues sexistes ou « graveleuses », en présence de la personne ou sur des groupes de discussion. Mais ce n’est pas « juste une blague », c’est un maillon d’une chaîne de violences.",
        "Les remarques sur le physique et l’habillement",
        "Les sifflements, regards insistants, gestes intrusifs",
        "La minimisation ou le déni des violences (« Elle exagère »)",
        "L’hypersexualisation des femmes dans les pubs, clips, jeux vidéo",
        "Les injonctions de genre (« Une vraie femme doit être douce », « un homme ne pleure pas »)",
        "La culture du viol (Justification ou excuse des violences sexuelles par le comportement de la victime)"

      ]} />

      <p className="texte">Ces comportements, souvent moins visibles que ceux au sommet de l'iceberg, peuvent aussi être très présents dans une relation de couple.</p>

      <ExternalLinkBlock
        resources={couple}
      />

      
      <ExternalLinkBlock
        title="Pour en apprendre davantage"
        subtitle="Quelques ressources pour approfondir le sujet des VSS"
        resources={resources_vss_plus}
      />

      <h2 className="sous-titre-2">Evaluer ma situation : les violentomètres</h2>
      <p className="texte">Si tu te sens perdu·e face à une situation, tu peux utiliser les violentomètres suivants pour évaluer ta situation et savoir si tu es victime ou témoin d'une VSS.</p>

      <ExternalLinkBlock
        resources={barometres}
      />



      <Separateur />
      
      <div id = "victime">
        <h1 className="titre">Je suis victime de VSS</h1>
      </div>

      <h2 className="sous-titre-2">Sur le moment, comment agir ?</h2>
      
      <p className="texte"><b>Si tu subis une VSS, sache d’abord que ce n’est pas de ta faute.</b> Essaie de te <b>mettre en sécurité</b> (quitte les lieux, va chez un·e ami·e, appelle quelqu’un) et de rester entouré·e si possible. En soirée, différents personnes sont là pour t'aider : tu peux aller voir les rondeurs <b>Peer Care (gilets roses)</b>, <b>les rondeurs sécurité (brassards jaunes)</b> ou les vigiles. Tu peux aussi te rendre en<b> zone Chill</b>, où tu seras accueilli·e par des étudiant·e·s formé·e·s pour t'aider. 
      <br/> <b> Si tu es en danger immédiat, appelle le 17 (police) ou le 18/112/114 (pompiers).</b>
        <br/> <br/> <b> Conserve tous les indices matériels de l’agression</b> (vêtements, photos, SMS, messages, témoignages), et <b>évite de nettoyer ou de laver quoi que ce soit</b>. Cela permettra de réaliser un examen médico-légal : le ou la médecin recherchera des traces (ADN, blessures, drogues potentiellement administrées) et pourra établir un certificat médical utile pour une plainte. Des tests de dépistage (VIH, grossesse, hépatites, etc.) seront proposés si nécessaire. 
        <br/> Pour réaliser un examen medico-légal, tu peux te rendre chez un <b>médecin</b> ou en <b>centre hospitalier</b>. </p>


      <h2 className="sous-titre-2">A qui en parler ?</h2>
      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
        title="Infirmerie"
        subtitle="Infirmerie de Centrale Lyon"
        phone="Voir les informations"
        email="Voir les informations"
        hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
        textButton="Voir les informations"
        link="/infirmerie"

        bgColor="#ffffff"    //informations facultatives
        textColor="#b22133"  //elles seront chosies en fonction de la couleur du logo si non spécifiées

      />

      <p className="texte">Il existe aussi des services en ligne. Tu peux contacter la <b>Nightline</b>, service qui te mettra en contact avec des <b>étudiants bénévoles</b> de manière gratuite et anonyme, que tu aies besoin d'aide ou simplement besoin de vider ton sac. Si tu préfères parler à des <b>professionnels</b>, toujours de manière gratuite et anonyme, alors tu peux contacter <b>Comment on s'aime ?</b>.</p>

          <ContactCard
          image="/assets/nightline_logo.png" 
          title="Nightline Lyon"
          subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s lyonnais·e·s"
          phone="04 85 30 00 10"
          email=""
          hours="Tous les soirs, de 21h à 2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />

          <ContactCard
            image="/assets/logo-cosa.svg" 
            title="Comment on s'aime ?"
            subtitle="Écoute et réponse à tes questions par des professionnels"
            hours="Lundi à jeudi : 10h à 00h, Vendredi à samedi : 10h à 21h"
            textButton="Voir le site web"
            link="https://commentonsaime.fr/"

            bgColor="#f6a21e"    //informations facultatives
            textColor="#ffffff"
          />

    



      <h2 className="sous-titre-2">Tu es en détresse ou tu as des pensées suicidaires ?</h2>
      
      <ContactCard
        image="/assets/3114.jpg" 
        title="3114"
        subtitle="Numéro national de prévention du suicide"
        phone="3114"
        email=""
        hours="24h/24 et 7j/7"
        textButton="Voir le site web"
        link="https://3114.fr/"

      />

      

      <Separateur />
      
      <div id = "temoin">
        <h1 className="titre">Je m'inquiète pour quelqu'un</h1>
      </div>

      <p className="texte">Si vous êtes en présence d’une personne en dépression, votre <b>soutien</b> peut faire toute la différence.  
      En tant que secouriste, <b>il est normal que certaines journées soient plus éprouvantes que d’autres. </b> 
      Avant d’intervenir pour aider les autres, prenez donc un moment pour vous assurer que vous êtes en mesure d’écouter avec <b>bienveillance</b> et <b>sans jugement</b>.
         
      </p>

      <ListeNumerotee 
          
          title="Plan d'action pour les Premiers Secours en Santé Mentale (Plan AÉRER)" 
          subtitle="Comment aider un personne qui fait face à des troubles dépressifs ?" 
          items={items_aerer} //on fait appel à des constantes de début de la page
          
      />
 

      <ImageTextPopup
        image="./assets/6_carreau.png"
        title="La carte 6&diams;"
        shortText="Dépression : aider en tant que témoin"
        longText="Cette image nous confronte à une vérité essentielle : la dépression ne se voit pas toujours. On peut rire, parler, jouer… tout en étant profondément mal à l’intérieur. En tant qu’aidant ou simple témoin, il est important de changer son regard. Les apparences sont trompeuses et certains sourires peuvent être des masques. Si vous êtes un parent, un ami, un collègue, un professeur, il est vital de ne pas attendre des signaux évidents pour s’inquiéter et de toujours être présent pour son entourage."
        textButton="⤢ Agrandir la carte"
      />

      <h2 className="sous-titre-2">Pour aller + loin : la formation PSSM</h2>

      <TextImageRight  text="Les PSSM (Premiers Secours en Santé Mentale) constituent l’aide qui est apportée à une personne touchée par un trouble ou une crise de santé mentale. Les premiers secours sont donnés jusqu’à ce qu’une aide professionnelle puisse être apportée ou jusqu’à ce que la crise soit résolue. Ils sont l’équivalent en santé mentale des gestes de premiers secours qui, eux, apportent une aide physique à la personne en difficulté.
      Ouverte à toutes et tous, et sans pré-requis, la formation PSSM vise à apprendre à savoir réagir face à une détresse psychique : entrer en contact, soutenir et orienter.
      La formation est dispensée à Centrale par l'infirmière : si tu es intéressé·e, tu peux la contacter ou voir avec l'association Peer Care." 
      imageSrc="/assets/logo-pssm.svg" />

      <Separateur />

      <p className="texte"><em> <b>Sources :</b> Manuel des Premiers Secours en Santé Mentale pour les jeunes , Portail Santé de l'Université de Lyon, PAI 22 : Qualité de vie en études à l'ECL, Comment on s'aime ?, CNAE </em>
         </p>
      </div>
    );
  };
  
  export default Vss;