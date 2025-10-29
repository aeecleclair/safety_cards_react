import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Pourquoi vouloir se détendre ?", target: "pourquoi" },
  { label: "Le stress", target: "stress" },
  { label: "En cas de crise", target: "crise" },
  { label: "Sur le long terme", target: "solutions" },
  { label: "Comment aider ?", target: "aide" }
];

const chiffres = [
  { number: "68%", title: "des 18-24 ans", description: "déclarent être stressés, dont 20% très stressés" },
  { number: "> 1/2", title: "jeune", description: "est touché·e par un stress régulier" },
  { number: "Travail", title: "et études", description: "sont les premières causes de stress en France" }
];



const planAide = [
  { title: "Reconnaître", subtitle: "Identifier les signes (physiques, émotionnels, comportementaux)" },
  { title: "Parler", subtitle: "En parler à un proche, un professionnel ou une ligne d'écoute" },
  { title: "Agir sur le quotidien", subtitle: "Hygiène de vie, sommeil, organisation et limites" },
  { title: "Chercher de l'aide professionnelle", subtitle: "Thérapie, consultations médicales si nécessaire" }
];

const resources = [
  { link: "https://www.who.int/fr/news-room/questions-and-answers/item/stress", 
    imageSrc: "/assets/OMS.png", 
    label: "OMS", 
    description: "FAQ sur le stress" },];

const contacts = [
  {
    image: "/assets/infirmerie.png",
    title: "Infirmerie / Centre de santé",
    subtitle: "Conseils, orientation, relaxation et séances de sophrologie possibles",
    phone: "Voir les informations locales",
    email: "",
    hours: "Selon l'établissement",
    textButton: "Voir le site",
    link: "https://www.sante.fr/"
  },
  {
    image: "/assets/numero_urgence.png",
    title: "Numéro d'écoute",
    subtitle: "Si tu te sens dépassé·e ou en détresse",
    phone: "15 / 112 (urgences) ou numéro local d'écoute",
    email: "",
    hours: "24/7",
    textButton: "Voir les ressources",
    link: "https://www.sante.fr/"
  }
];

const ressources1 = [
  {
    link: "https://www.la-clinique-e-sante.com/blog/troubles-anxieux/differences-stress-anxiete",
    imageSrc: "/assets/la_clinique_e_sante.jpg",
    label: "La Clinique e-santé",
    description: "Plus de détails sur la différence entre stress et anxiété"
  }
];

const anxiete = [
  {
    link: "\anxiete",
    emoji: "😟",
    label: "Anxiété",
    description: "Comment faire face à son anxiété ?",
  }
];

const sommeil = [
  {
    link: "\sommeil",
    emoji: "😴",
    label: "Sommeil",
    description: "Conseils et techniques pour mieux dormir"
  }
];

const Detente_relax = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Détente & relaxation</h1>
      <Sommaire links={navLinks} />


      <div id="pourquoi">
        <h1 className="titre">Pourquoi vouloir se détendre ?</h1>
      </div>
            <ImageTextPopup
        image="./assets/cartes/10_pique.png"
        title="La carte 10♠"
        shortText="Comprendre et agir sur le stress"
        longText="Le chill guy, maître de la détente, te guide pour comprendre le stress et t'en libérer. Découvre des techniques simples pour apaiser ton esprit et ton corps, en cas de crise de stress et pour ressentir du bien-être au quotidien."
        textButton="⤢ Agrandir la carte"
        suit="pique"
      />
      
      <h2 className="sous-titre-2">Les facteurs de tension</h2>
      <p className="texte">Dans notre vie quotidienne, nous sommes souvent confronté·e·s à des situations qui génèrent des <b>tensions ou du stress</b> : examens, travail, relations sociales, incertitudes... Outre le stress, d'autres facteurs peuvent également contribuer à notre mal-être, tels que <b>la fatigue</b>, <b>le travail</b> ou des <b>problèmes personnels</b>.</p>
      <p className="texte">Même lorsqu’on ne se sent pas particulièrement tendu, <b>notre organisme et notre esprit</b> restent <b>constamment sollicités</b> par les exigences du quotidien : concentration prolongée, interactions sociales, flux d’informations, exposition aux écrans ou simple vigilance permanente. Ces stimulations continues maintiennent un léger <b>état d’alerte</b> qui, à la longue, <b>épuise nos ressources physiques et mentales</b>. </p>
      
      <h2 className="sous-titre-2">L'importance de la détente</h2>
      <p className="texte">Se détendre, c’est donc offrir à son corps un moment pour relâcher les tensions, réguler la respiration, apaiser le système nerveux et permettre au cerveau de se réorganiser. Cette pause consciente favorise non seulement la <b>récupération</b>, mais aussi la <b>créativité</b>, la <b>clarté d’esprit</b> et la <b>stabilité émotionnelle</b>. En somme, la détente n’est pas un luxe réservé aux périodes de stress, mais une nécessité régulière pour préserver notre santé globale et notre bien-être intérieur.</p>
      <Separateur />




      <div id="stress">
        <h1 className="titre">Le stress</h1>
      </div>

      <p className="mise-avant"><b>Le stress</b> est une réaction normale et adaptative du corps face à une situation perçue comme exigeante. À court terme il peut aider à mobiliser les ressources ; à long terme, s'il est intense ou chronique, il peut nuire à la santé. </p>
      <p className="texte">Le stress apparaît parce que le corps active une <b>réponse dite « fuite ou lutte »</b> : adrénaline, cortisol, accélération cardiaque. Si cette activation revient trop souvent, elle finit par <b>épuiser les systèmes de l'organisme</b>.</p>


      <ChiffresGroup chiffres={chiffres} />

      <h2 className="sous-titre-2">Signes physiques</h2>
      <p className="texte">Le stress peut se manifester par des <b>signes physiques ponctuels ou récurrents</b> tels que :</p>

     <BulletList items={[
     "Maux de tête fréquents",
    "Tensions musculaires (nuque, mâchoire, épaules)",
    "Troubles digestifs (nausées, brûlures, diarrhée)",
    "Fatigue chronique ou épuisement",
    "Palpitations ou sensation d’oppression"
      ]}/>

      <p className="texte">Par exemple, si à l'approche d'une épreuve tu te sens soudainement <b>tendu(e)</b>, avec des <b>palpitations</b> et une <b>sensation d'oppression</b>, cela peut être un signe de stress aigu. Ton corps réagit à une menace perçue et se prépare à y faire face. Pour <b>apaiser cette réaction</b>, tu peux essayer des techniques de relaxation détaillées plus bas.</p>

      <h2 className="sous-titre-2">Signes psychologiques</h2>
      <p className="texte">Des <b>signes psychologiques</b> sont aussi à relever, comme par exemple :</p>
      <BulletList items={[
      "Irritabilité, sautes d'humeur",
      "Difficulté de concentration",
      "Baisse de plaisir dans les activités (anhédonie)",
      "Pensées intrusives et ruminations"
      ]}/>

      <p className="texte">Les <b>pensées stressantes</b> (inquiétudes, scénarios catastrophiques, ruminations) <b>maintiennent et amplifient la réaction de stress</b>. Les identifier est la première étape pour les modifier.</p>

      <BulletList items={[
        "Ruminations : repasser en boucle des événements passés",
        "Anticipations catastrophiques : imaginer le pire sans preuve",
        "Pensées dichotomiques : tout ou rien",
        "Jugements excessifs sur soi (je ne suis pas à la hauteur)"
      ]} />


      <ExternalLinkBlock resources={resources} />
      <h2 className="sous-titre-2">Troubles du sommeil</h2>
      <p className="texte">Le stress et les pensées intrusives sont des <b>causes fréquentes d'insomnie</b>. Le manque de sommeil augmente à son tour la sensibilité au stress : c'est un <b>cercle vicieux</b>.</p>

      <p className="texte">Signes d'un mauvais sommeil : réveils fréquents, endormissement long (plus de 30 minutes), sensation de sommeil non réparateur, somnolence diurne...</p> 
      <p className="texte">Pour en savoir plus, consulte la page <em>Sommeil</em> ci-dessous :</p> 
        <ExternalLinkBlock resources={sommeil} />

      <h2 className="sous-titre-2">Stress aigu VS stress chronique</h2>
      <p className="texte">Il est important de distinguer deux types de stress :</p>
      <p className="texte">Le <b>stress aigu</b> désigne une <b>réaction immédiate</b> à une situation ponctuelle (examen, entretien). Il disparaît une fois la situation passée. </p>
      <p className="texte">Le <b>stress chronique</b> correspond à une exposition prolongée à des facteurs de stress (travail, études, vie personnelle). Il peut entraîner des problèmes de santé à long terme car il affecte le corps de manière continue.</p>

      <p className="mise-avant">Attention, <b>tout stress n'est pas mauvais</b> : c'est une réaction naturelle du corps qui peut aussi être un moteur de performance et de motivation. En revanche, un <b>stress mal géré peut avoir des conséquences néfastes</b>.</p>

      <h2 className="sous-titre-2">La distinction avec l'anxiété</h2>
      <p className="texte"><b>Stress et anxiété ne sont pas synonymes.</b> « Je suis stressé·e » ne veut pas dire la même chose que « Je suis anxieux·se ».</p>

      < ExternalLinkBlock resources={ressources1} />

      <p className="texte"><b>Stress</b> : réaction à une situation identifiée et souvent temporaire.</p>
      <p className="texte"><b>Anxiété</b> : état plus durable, parfois sans déclencheur clair, avec une anticipation excessive et des symptômes physiques persistants. L'anxiété peut être un trouble diagnosticable (ex. trouble anxieux généralisé) — dans ce cas, un professionnel de santé peut proposer des traitements spécifiques.</p>

        <ExternalLinkBlock resources={anxiete} />
      <Separateur />

      <div id="crise">
        <h1 className="titre">En cas de crise</h1>
      </div>

      <p className="mise-avant">Lors d'une crise de stress, il est important de savoir appliquer des <b>techniques simples et efficaces</b> pour retrouver rapidement un <b>état de calme</b>.</p>

      <h2 className="sous-titre-2">Techniques immédiates</h2>
      <p className="texte">En cas de crise de stress (palpitations, sensation d'oppression, pensées envahissantes), voici quelques techniques rapides pour apaiser la réaction physique et mentale.</p>
      <p className="texte">Ces différents exercices ont pour but de <b>réduire l'intensité du stress</b> et de <b>favoriser un retour au calme</b>. En régulant ta respiration, ton corps se détend et ton esprit s'apaise.</p>

      <p className="texte"><b>Pour calmer ta respiration :</b></p>
      <ListeNumerotee
        title="Respiration diaphragmatique"
        items={[
          { subtitle: "Inspire lentement par le nez en gonflant le ventre (4 secondes)" },
          { subtitle: "Retiens 1-2 secondes" },
          { subtitle: "Expire lentement par la bouche (6 secondes)" },
          { subtitle: "Répète 5 à 10 cycles" }
        ]}
      />
      <p className="texte">Cette respiration profonde active le système nerveux parasympathique, responsable de la relaxation. Elle aide à réduire la fréquence cardiaque et à calmer l'esprit.</p>

      <p className="texte"><b>Pour détendre ton corps :</b></p>
      <ListeNumerotee
        title="Relaxation musculaire progressive (Jacobson)"
        items={[
          { subtitle: "Contracte puis relâche chaque groupe musculaire (pieds → tête)" },
          { subtitle: "Concentre-toi sur la sensation de relâchement" },
          { subtitle: "Durée : 5 à 10 minutes" }
        ]}
      />

    <p className="texte">Cette technique aide à relâcher les tensions physiques et à favoriser un état de calme. Elle peut être pratiquée à tout moment de la journée.</p>

      <p className="texte"><b>Pour revenir au présent :</b></p>
      <ListeNumerotee
        title="Ancrage/Grounding"
        items={[
          { subtitle: "Utilise les 5 sens pour te reconnecter à l'instant présent" },
          { subtitle: "Nomme 5 choses que tu peux voir, 4 que tu peux toucher, 3 que tu peux entendre, 2 que tu peux sentir, 1 que tu peux goûter." }
        ]}
      />

      <p className="texte">L'ancrage aide à détourner l'attention des pensées stressantes en se focalisant sur l'environnement immédiat. C'est une technique utile en cas de pensées envahissantes.</p>

      <p className="texte"><b>Pour créer une bulle de calme :</b></p>
      <ListeNumerotee
        title="Visualisation positive"
        items={[
          { subtitle: "Imagine un lieu apaisant (plage, forêt...)" },
          { subtitle: "Focalise-toi sur les détails (sons, odeurs, sensations)" },
          { subtitle: "Durée : 5–10 minutes" }
        ]}
      />
      <p className="texte">La visualisation positive permet de créer un espace mental de calme et de sécurité, aidant à réduire le stress et l'anxiété.</p>


      <p className="texte"><b>Autres astuces :</b></p>
      <p className="texte">D'autres gestes simples peuvent te permettre de mieux gérer ton stress au quotidien :</p>
      <BulletList items={[
        "Sentir un parfum apaisant",
        "Marcher un peu",
        "Ecouter une musique que tu aimes bien",
        "Parler avec un·e ami·e",
      ]} />

      <p className="texte">L'important est de <b>trouver ce qui fonctionne le mieux pour toi</b> et de pratiquer régulièrement ces techniques pour qu'elles deviennent des <b>réflexes en cas de stress</b>.. Essaie surtout de ne pas oublier quelles techniques t'ont permis de te sentir mieux.</p>
      <Separateur />

      <div id="solutions">
        <h1 className="titre">Sur le long terme</h1>
      </div>

      <p className="mise-avant">Agir sur <b>plusieurs plans (physique, cognitif, social)</b> est la stratégie la plus efficace pour réduire le stress durablement.</p>
 
      <h2 className="sous-titre-2">Identifier les sources de stress</h2>
      <p className="texte">Après une crise de stress, il est utile de <b>réfléchir aux déclencheurs</b>. Identifier les situations, pensées ou comportements qui génèrent du stress te permettra de mieux les gérer à l'avenir.</p>

      <p className="texte">Tiens un journal de bord pendant quelques jours pour noter les moments où tu te sens stressé·e : contexte, pensées associées, réactions physiques et émotionnelles. Cela t'aidera à repérer des schémas récurrents.
      </p>





      <h2 className="sous-titre-2">Stratégies globales</h2>
      <BulletList items={[
        "Hygiène de vie : activité physique régulière, alimentation équilibrée, limiter alcool et stimulants",
        "Sommeil : routines régulières, environnement propice (obscurité, calme)",
        "Organisation : prioriser, décomposer les tâches, poser des limites",
        "Support social : parler à des proches, demander de l'aide",
        "Techniques cognitives : recadrage des pensées, limiter les ruminations",
        "Aide professionnelle : psychothérapie (TCC, thérapies basées sur la pleine conscience), médecins si nécessaire"
      ]} />

      <h2 className="sous-titre-2">Pratique du sport/Faire régulièrement de l'exercice</h2>
      <h2 className="sous-titre-2">Alimentation saine</h2>
      <h2 className="sous-titre-2">Techniques de relaxation</h2>

      <p className="texte"><b>Méditation de pleine conscience</b></p>
      <BulletList items={[
      "Focalise sur la respiration ou un point d'appui",
      "Accueillir les pensées sans les juger",
      "Commencer 5–10 minutes par jour"
    ]} />

      <p className="texte"><b>Yoga doux ou étirements</b></p>
      <BulletList items={[
      "Postures simples pour relâcher les tensions",
      "Respiration synchronisée avec les mouvements",
      "Durée : 10–30 minutes"
    ]} />

      <p className="texte"><b>Sophrologie</b></p>
      <BulletList items={[
      "Techniques de relaxation dynamique combinant respiration, visualisation et mouvements doux",
      "Aide à mieux gérer le stress et les émotions",
      "Possible dans certaines infirmeries ou centres de santé étudiants"
    ]} />
    
    <p className="texte">L'infirmière propose des séances de sophrologie sur les pauses méridiennes. Pour en savoir plus, n'hésite pas à la contacter.</p>
    
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

      <h2 className="sous-titre-2">Être organisé/e ou Maintenir une routine quotidienne</h2>
      <h2 className="sous-titre-2">Eviter les facteurs de stress (ex : actualités)</h2>
      <h2 className="sous-titre-2">S'entourer</h2>
      <h2 className="sous-titre-2">Dormir suffisamment</h2>
      <h2 className="sous-titre-2">Prendre des pauses pour méditer/se détendre</h2>


      <h2 className="sous-titre-2">Autres approches utiles</h2>
      <BulletList items={[
        "Activité physique régulière (marche, natation, vélo) — 30 min plusieurs fois / semaine",
        "Exposition à la nature (balade, jardinage)",
        "Loisirs créatifs et activités plaisantes (musique, dessin)",
        "Limiter la consommation d'informations anxiogènes (réseaux, actu)"
      ]} />



      <p className="texte">Si le stress impacte durablement la vie quotidienne, le sommeil, le travail ou les relations, il est important de consulter : médecin généraliste, psychiatre ou psychologue. Des traitements (thérapies, parfois médicaments) peuvent aider. En cas de pensées de mort ou de détresse intense, contacte les services d'urgence immédiatement.</p>


      <ExternalLinkBlock resources={contacts} />

      <ContactCard
        image="/assets/infirmerie.png"
        title="Infirmerie"
        subtitle="Conseils santé, orientation et sophrologie possible" 
        phone="Voir les informations"
        email=""
        hours="Selon l'établissement"
        textButton="Voir les informations"
        link="https://www.sante.fr/"
      />

      <Separateur />
      
      <div id="aide">
      <h2 className="sous-titre-2">Comment aider quelqu'un en cas de stress important ?</h2>
      </div>
      <p className="texte">Si tu remarques qu'un·e ami·e ou un·e proche est souvent stressé·e, propose-lui d'en parler. Écoute sans juger, encourage-le·la à utiliser des techniques de relaxation et à adopter une hygiène de vie saine. Si le stress persiste, suggère-lui de consulter un professionnel de santé.</p>
      
      <ListeNumerotee
        title="Plan d'aide"
        items={planAide}
      />

      <p className="texte"><em><b>Sources :</b> Sante.fr, Ameli, OMS.</em></p>

    </div>
  );
};

export default Detente_relax;