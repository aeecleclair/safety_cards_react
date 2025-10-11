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
import { image } from "framer-motion/m";

const navLinks = [
  { label: "De quoi parle-t-on ?", target: "vss" },
  { label: "Je suis victime", target: "victime" },
  { label: "Je suis témoin ou proche", target: "temoin" }
];


const items_non = [
  { title: "La sidération", subtitle: "Lorsque le cerveau est soumis à une violence trop grande, on peut se sentir comme tétanisé·e, pétrifié·e. On ne peut pas crier, ni parler et dire non, ni bouger. Le cerveau se bloque et cela peut créer une amnésie traumatique. " },
  { title: "La dissociation", subtitle: "C'est une forme de déconnexion entre l'esprit et la réalité, donnant l'impression de sortir de son propre corps. Ce mécanisme permet de réduire l'intensité des émotions sur le moment, afin de mieux faire face à une situation traumatisante. A posteriori, cela peut donner lieu à un discours sans émotion, puisque la victime voit la situation avec une distance. Pour autant, cela ne signifie pas que ce qu'elle a vécu n'est pas grave ou ne l'a pas touchée !" },
  { title: "La banalisation des violences", subtitle: "En focntion du milieu dans lequel on a grandi et évolué, on peut percevoir certaines violences comme plus acceptables. Là encore, ce n'est pas parce que la personne exprime un détachement qu'il ne faut pas prendre sa situation au sérieux !" },

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
  },
  {
    link: "/assets/barometre_violences_gyneco.pdf",
    label: "Les VSS chez le ou la gynécologue",
    description: "",
    emoji: "🚺",
  },
];


const arbre = [
  {
    link: "/docs/arbre-vss-centrale-lyon.pdf",
    label: "Arbre de décision",
    description: "Je suis victime ou témoin de VSS (étudiants et personnels de Centrale Lyon)",
    imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
  }
];

const plainte = [
    {
    link: "/docs/depot_plainte_vss.pdf",
    label: "Comment se passe le dépôt de plainte en cas de VSS ?",
    description: "Explications claires et complètes",
    imageSrc:"/assets/rep-logo.png",
  },

  {
    link: "https://www.masecurite.interieur.gouv.fr/fr/trouver-un-commissariat-une-gendarmerie",
    label: "Porter plainte",
    description: "Trouve un commissariat ou une gendarmerie près de chez toi",
    imageSrc:"/assets/rep-logo.png",
  },
];

const liens_ext_temoins = [
  {
    link: "https://arretonslesviolences.gouv.fr/je-suis-temoin/que-faire-quand-j-assiste-a-une-agression",
    label: "Pour aller + loin",
    description: "Comment réagir en tant que témoin ?",
    imageSrc: "/assets/arretons_violence.svg",
  }]

  const liens_ext_temoins_aidant = [
  {
    link: "https://arretonslesviolences.gouv.fr/je-suis-temoin",
    label: "Arrêtons les violences",
    description: "Agir sur le moment et a posteriori",
    imageSrc: "/assets/arretons_violence.svg",
  }]


const Vss = () => {
    return (
      <div className = "page">

        <h1 className = "titre-page">Violences sexistes et sexuelles</h1>


      <Navbar links={navLinks} />

      <div id = "vss">
        <h1 className="titre">De quoi parle-t-on ?</h1>
      </div>

      <ImageTextPopup
        image="./assets/cartes/9_coeur.png"
        title="La carte 9&hearts;"
        shortText="La pyramide des VSS"
        longText=""
        textButton="⤢ Agrandir la carte"
      />


      <h2 className="sous-titre-2">Qu'est-ce qu'une VSS ?</h2>

      <p className="texte">Les violences sexistes et sexuelles (VSS) regroupent les violences sexuelles (actes à connotation sexuelle commis avec violence, contrainte, menace ou surprise) et les violences sexistes (injures ou comportements humiliants basés sur le genre). 


         
      </p>

      <BulletList items={["L'outrage sexiste (insulte ou geste sexuel offensant) est passible d'une amende (1 500 € en règle générale). ",
"L'exhibition sexuelle (imposer un acte sexuel ou exhiber ses organes génitaux en public ou à la vue de tous) est puni d'un an d'emprisonnement et 15 000 € d'amende.",
"Le harcèlement sexuel (commentaires sexuels répétés ou non, chantage, etc.) est réprimé par deux ans de prison et 30 000 € d'amende.",
"L'agression sexuelle (atteinte sexuelle avec violence, contrainte, menace ou surprise) est un délit. On parle d'agression sexuelle si l'atteinte a lieu sur une partie du corps considérée comme intime et sexuelle (la bouche, la poitrine, le sexe, les fesses, les cuisses et l'intérieur des cuisses).",
"Le viol (toute pénétration sexuelle forcée) est un crime puni jusqu'à 15 ans de réclusion criminelle (20 ans si circonstances aggravantes)."
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
        La violence sexiste ne se limite pas aux agressions visibles et choquantes mais prend aussi de nombreuses formes, souvent banalisées, invisibles ou normalisées dans la vie quotidienne. C'est ce que met en lumière le modèle de l'iceberg de la violence sexiste.
        Au sommet de l'iceberg, on trouve les violences qui sont reconnues par la société comme inacceptables, et clairement punies par la loi, et qui ont été évoquées en détail précédemment. Cela ne représente que la partie émergée d'un ensemble plus vaste
        Sous la surface, on trouve une vaste zone de comportements qui ne sont pas toujours perçus comme de la violence, mais qui en constituent pourtant les racines. Ces actes, parfois considérés comme « anodins », alimentent un climat sexiste et facilitent les violences plus graves.
        <br/> On y trouve :

        </>
        }
        imageSrc="/assets/iceberg.jpg"
      />

      <BulletList items={["Les blagues sexistes ou « graveleuses », en présence de la personne ou sur des groupes de discussion. Mais ce n'est pas « juste une blague », c'est un maillon d'une chaîne de violences.",
        "Les remarques sur le physique et l'habillement",
        "Les sifflements, regards insistants, gestes intrusifs",
        "La minimisation ou le déni des violences (« Elle exagère »)",
        "L'hypersexualisation des femmes dans les pubs, clips, jeux vidéo",
        "Les injonctions de genre (« Une vraie femme doit être douce », « un homme ne pleure pas »)",
        "La culture du viol (Justification ou excuse des violences sexuelles par le comportement de la victime)"

      ]} />

      <p className="texte">Ces comportements, souvent moins visibles que ceux au sommet de l'iceberg, peuvent aussi être très présents dans une relation de couple.</p>

      <ExternalLinkBlock
        resources={couple}
      />

      <ImageTextPopup
        image="./assets/cartes/9_trefle.png"
        title="La carte 9♣"
        shortText="VSS : L'espace vital"
        longText="VSS : L'espace vital"
        textButton="⤢ Agrandir la carte"
        suit="trefle"
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
      
      <p className="texte"><b>Si tu subis une VSS, sache d'abord que ce n'est pas de ta faute.</b> Essaie de te <b>mettre en sécurité</b> (quitte les lieux, va chez un·e ami·e, appelle quelqu'un) et de rester entouré·e si possible. En soirée, différents personnes sont là pour t'aider : tu peux aller voir les rondeurs <b>Peer Care (gilets roses)</b>, <b>les rondeurs sécurité (brassards jaunes)</b> ou les vigiles. Tu peux aussi te rendre en<b> zone Chill</b>, où tu seras accueilli·e par des étudiant·e·s formé·e·s pour t'aider. 
      <br/> <b> Si tu es en danger immédiat, appelle le 17 (police) ou le 18/112/114 (pompiers).</b>
        <br/> <br/> <b> Conserve tous les indices matériels de l'agression</b> (vêtements, photos, SMS, messages, témoignages), et <b>évite de nettoyer ou de laver quoi que ce soit</b>. Cela permettra de réaliser un examen médico-légal : le ou la médecin recherchera des traces (ADN, blessures, drogues potentiellement administrées) et pourra établir un certificat médical utile pour une plainte. Des tests de dépistage (VIH, grossesse, hépatites, etc.) seront proposés si nécessaire. 
        <br/> Pour réaliser un examen medico-légal, tu peux te rendre chez un <b>médecin</b> ou en <b>centre hospitalier</b>. </p>


      <h2 className="sous-titre-2">A qui en parler ?</h2>

      <p className="texte">Il est important de parler de ce que tu as vécu. Tu peux en parler à quelqu'un de confiance (ami·e, parent, professeur·e, etc.) ou à un professionnel. Il existe plusieurs ressources à Centrale Lyon et à l'extérieur pour t'aider.</p>

      <ExternalLinkBlock
        resources={arbre}
      />


      <p className="texte"><b>EN INTERNE</b></p>

      <p className="texte">Tu peux contacter l'<b>infirmière de Centrale Lyon</b>, qui est formée pour t'aider et te conseiller. Elle peut aussi t'orienter vers des professionnels extérieurs si nécessaire. En tant que professionnelle de santé, elle est soumise au <b>secret médical</b>, ta confidentialité est donc garantie. Tu peux décider d'en rester là et poursuivre ton signalement plus tard si désiré. </p>
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

      <p className="texte">Tu peux aussi faire remonter ton témoignage aux écoutants internes : <b>associations</b> (BDE, Le Mouv', Peer Care...) ou <b>cellule d'écoute.</b> </p>
      <p className="texte">La <b>cellule d'écoute</b> est composée de 4 personnels, qui sont là pour t'accompagner et pour faire remonter l'information en interne. Tu acceptes ainsi que l'école prenne en main la situation, et qu'elle mène une <b>enquête interne</b>. En tant que fonctionnaires, ils ont aussi l'obligation de faire remonter ton témoignage au <b>procureur de la République.</b>  </p>
      

      <ContactCard
        image="assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
        title="Cellule d'écoute"
        subtitle="Dispositif d'écoute et d'accompagnement de Centrale Lyon"
        email="Voir les informations"
        textButton="Voir les informations"
        link="/cellule-ecoute"
        bgColor="#ffffff"  
        textColor="#b22133"
      />


      <p className="texte"><b>SERVICES EXTERNES</b></p>

      <p className="texte"> Tu peux aussi t'orienter vers des ressources externes, garantissant l'anonymat et la confidentialité. Aucun retour n'est transmis à l'école, tu peux donc décider d'en rester là tant que tu le souhaites. </p>
      <p className="texte"><b>Arrêtons les violences</b> est une plateforme du gouvernement. Elle regroupe toute les ressources disponibles : le <b>3919</b> (7j/7, 24h/24, numéro d'écoute, d'information et d'orientation), un <b>tchat en ligne</b> (7j/7, 24h/24 pour signaler des violences et être accompagné·e) et un <b>annuaire des associations</b> autour de toi.</p>
      <ContactCard
          image="/assets/arretons_violence.svg"
          title="Arrêtons les violences"
          subtitle="Aide au téléphone, en ligne, ou via une association"
          hours="24h/24, 7j/7"
          phone="3919"
          textButton="J'ai besoin d'aide"
          link="https://arretonslesviolences.gouv.fr/besoin-d-aide"
          bgColor="#ffffff"
          textColor="#CC3C32"
        />

        <p className="texte"><b>Si tu ne souhaites pas en parler, c'est ton droit ! Se sentir prêt·e peut prendre du temps.</b></p>


      <h2 className="sous-titre-2">Porter plainte</h2>

      <p className="texte">Porter plainte est une démarche importante qui peut aider à faire cesser les violences et à protéger d'autres personnes. C'est aussi un moyen de faire reconnaître ce que tu as vécu et de chercher justice. Cependant, cette décision t'appartient entièrement et il n'y a pas de bonne ou de mauvaise réponse. Tu peux porter plainte immédiatement après les faits, ou prendre le temps de réfléchir avant de te décider. Si tu le souhaites, tu peux te faire accompagner par un proche au commissariat.</p>
      <p className="texte">Un certificat médical <b>n'est pas nécessaire</b> pour porter plainte en cas de VSS. </p>

      <ExternalLinkBlock
        resources={plainte}
      />

      <Separateur />
      
      <div id = "temoin">
        <h1 className="titre">Je suis témoin ou proche</h1>
      </div>

      <h2 className="sous-titre-2">Agir comme témoin</h2>

      <p className="texte"> Lorsque que tu es témoin de VSS, certains réflexes simples et actions concrètes peuvent faire la différence. Mieux vaut réagir ou alerter les autres pour rien que ne pas réagir du tout. Tu peux appliquer les conseils de la section « Je suis victime » ci-dessus, tous les organismes présentés sont aussi là pour encadrer les témoins. Quoiqu'il en soit,<b> montre à la victime que tu la crois et que tu es là pour elle, informe-la des moyens à sa disposition et respecte ses souhaits, sans prendre de décision à sa place. </b>Tu peux aussi récolter des preuves (audio, vidéo...) en vue de les transmettre à la victime et aux autorités uniquement. </p>

      <ExternalLinkBlock
        resources={liens_ext_temoins}
      />

      <p className="texte">

      En tant que témoin, tu peux avoir aussi vécu une situation traumatisante. Il est important de prendre soin de toi aussi. Tu peux contacter l'infirmière de Centrale Lyon ou les associations mentionnées dans la partie "Je suis victime" pour en parler.

      </p>

      <ImageTextPopup
        image="./assets/cartes/5_trefle.png"
        title="La carte 5♣"
        shortText="Réagir face à une VSS en soirée"
        longText="Réagir face à une VSS en soirée"
        textButton="⤢ Agrandir la carte"
        suit="trefle"
      />


      <h2 className="sous-titre-2">Accueillir un témoignage</h2>

      <p className="texte">
        Face à une personne victime de VSS, il est essentiel d'adopter une posture bienveillante, respectueuse et soutenante. Ainsi, pour contrer les stratégies de l'auteur des VSS, souvent fondées sur l'isolement, la dévalorisation ou la culpabilisation de la victime, il est crucial de renforcer la personne dans ce qu'elle vit, sans jugement ni pression.

      </p>

      <BulletList items={[
        "Maintiens le lien avec la victime : garder un contact régulier permet de briser l'isolement souvent imposé par l'auteur des violences.",
        "Valorise-la : lui rappeler sa valeur, ses qualités, ses forces contribue à reconstruire l'estime d'elle-même.",
        "Déculpabilise-la : aide-la à comprendre qu'elle n'est jamais responsable des violences subies.",
        "Rassure-la : rappelle-lui qu'elle est crue, qu'elle n'est pas seule et qu'il existe des ressources pour l'accompagner.",
        "Sois de son côté : fais preuve de loyauté, sans condition, pour qu'elle se sente soutenue dans son parcours."
      ]} />

      <p className="texte">En revanche, il est important d'éviter certains comportements qui pourraient aggraver la situation de la victime ou la mettre mal à l'aise. Voici quelques exemples de ce qu'il ne faut pas faire :</p>

      <BulletList items={[
        "Mettre en doute la réalité des faits : remettre en question ce que la personne raconte peut renforcer sa détresse et isoler davantage la victime.",
        "Culpabiliser la victime : lui faire porter la responsabilité des violences subies est une double peine injuste et destructrice.",
        "Minimiser ou banaliser les violences subies : qualifier les faits de « pas si graves » ou de « malentendus » revient à invalider le vécu de la victime.",
        "Exprimer un jugement moral : porter un regard moralisateur sur la situation ou sur les comportements de la victime empêche une écoute authentique.",
        "Ramener les propos à nous : parler de notre propre vécu détourne l'attention de la personne concernée et recentre l'échange sur nous-mêmes.",
        "Vouloir trouver des solutions immédiatement, donner des injonctions à agir : cela peut mettre une pression supplémentaire sur la victime, qui n'est peut-être pas prête à agir.",
        "Projeter ses propres angoisses et émotions : faire peser ses propres peurs ou colères sur la victime peut alourdir sa charge émotionnelle."
      ]} />

      <p className="texte">La réaction de certaines victimes face à une VSS peut sembler irrationnelle pour quelqu'un qui n'a pas vécu la situation. Il est important de prendre en compte les 3 points suivants :</p>





      <ListeNumerotee 
          
          title="« Pourquoi je n'ai pas dit non ? »" 
          subtitle="Comment expliquer cette réaction chez une victime de VSS ?" 
          items={items_non} //on fait appel à des constantes de début de la page
          
      />

      <ExternalLinkBlock
        resources={liens_ext_temoins_aidant}
      />
 


      <Separateur />

      <p className="texte"><em> <b>Sources :</b> Arrêtons les violences, formation Fil'Action, Portail Santé de l'Université de Lyon, PAI 22 : Qualité de vie en études à l'ECL, Comment on s'aime ?, CNAE, Charte VSS de Centrale Lyon </em>
         </p>
      </div>
    );
  };
  
  export default Vss;