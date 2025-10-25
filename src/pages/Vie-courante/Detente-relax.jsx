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
  { label: "Le stress", target: "stress" },
  { label: "En cas de crise", target: "crise" },
  { label: "Sur le long terme", target: "solutions" },
];

const chiffres = [
  { number: "1/3", title: "Personnes très stressées", description: "selon certaines enquêtes de santé (estimation)" },
  { number: "25–30%", title: "Troubles du sommeil", description: "prévalence estimée chez les personnes stressées" },
  { number: "—", title: "Impact", description: "Stress non traité = retentissement sur la santé physique et mentale" }
];

const symptomesPhysiques = [
  "Maux de tête fréquents",
  "Tensions musculaires (nuque, mâchoire, épaules)",
  "Troubles digestifs (nausées, brûlures, diarrhée)",
  "Fatigue chronique ou épuisement",
  "Palpitations ou sensation d’oppression"
];

const signesPsychologiques = [
  "Irritabilité, sautes d'humeur",
  "Difficulté de concentration",
  "Pensées intrusives et ruminations",
  "Baisse de plaisir dans les activités (anhédonie)"
];

const planAide = [
  { title: "Reconnaître", subtitle: "Identifier les signes (physiques, émotionnels, comportementaux)" },
  { title: "Parler", subtitle: "En parler à un proche, un professionnel ou une ligne d'écoute" },
  { title: "Agir sur le quotidien", subtitle: "Hygiène de vie, sommeil, organisation et limites" },
  { title: "Chercher de l'aide professionnelle", subtitle: "Thérapie, consultations médicales si nécessaire" }
];

const resources = [
  { link: "https://www.sante.fr/", imageSrc: "/assets/sante_fr.png", label: "Sante.fr", description: "Fiches et conseils sur le stress et le sommeil" },
  { link: "https://www.ameli.fr/", imageSrc: "/assets/ameli.png", label: "Ameli", description: "Informations santé et prévention" },
  { link: "https://www.psychologies.com/", imageSrc: "/assets/psychologies.png", label: "Psychologies", description: "Articles pratiques et techniques de relaxation" }
];

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

const techniquesList = [
  {
    title: "Respiration diaphragmatique",
    items: [
      "Inspire lentement par le nez en gonflant le ventre (4 secondes)",
      "Retiens 1-2 secondes",
      "Expire lentement par la bouche (6 secondes)",
      "Répète 5 à 10 cycles"
    ]
  },
  {
    title: "Relaxation musculaire progressive (Jacobson)",
    items: [
      "Contracte puis relâche chaque groupe musculaire (pieds → tête)",
      "Concentre-toi sur la sensation de relâchement",
      "Durée : 10–20 minutes"
    ]
  },
  {
    title: "Ancrage / Grounding",
    items: [
      "Utilise les 5 sens pour revenir au présent (nommer 5 choses que tu vois, 4 que tu touches...)",
      "Utile en cas de pensées envahissantes"
    ]
  },
  {
    title: "Méditation de pleine conscience",
    items: [
      "Focalise sur la respiration ou un point d'appui",
      "Accueillir les pensées sans les juger",
      "Commencer 5–10 minutes par jour"
    ]
  },
  {
    title: "Sophrologie",
    items: [
      "Techniques de relaxation dynamique combinant respiration, visualisation et mouvements doux",
      "Aide à mieux gérer le stress et les émotions",
      "Possible dans certaines infirmeries ou centres de santé étudiants"
    ]
  },
  {
    title: "Techniques pour dormir",
    items: [
      "Routine régulière de coucher",
      "Éviter écrans 1h avant le lit",
      "Sieste < 20 minutes"
    ]
  }
];

const Detente_relax = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Détente & relaxation</h1>
      <Sommaire links={navLinks} />

      <div id="stress">
        <h1 className="titre">Le stress</h1>
      </div>

      <p className="mise-avant"><b>Le stress</b> est une réaction normale et adaptative du corps face à une situation perçue comme exigeante. À court terme il peut aider à mobiliser les ressources ; à long terme, s'il est intense ou chronique, il peut nuire à la santé. </p>
      <p className="texte">Le stress apparaît parce que le corps active une réponse dite « fuite ou lutte » : adrénaline, cortisol, accélération cardiaque. Si cette activation revient trop souvent, elle finit par épuiser les systèmes de l'organisme.</p>


      <h2 className="sous-titre-2">Signes et symptômes</h2>
      <p className="texte">Le stress peut se manifester par des signes physiques et psychologiques. Il est important de les repérer tôt.</p>

      <TextImageRight
        imageSrc="/assets/stress_symptomes.png"
        text={
          <>
            <BulletList items={symptomesPhysiques} />
            <p className="texte" style={{ marginTop: "8px" }}><b>Psychologique :</b></p>
            <BulletList items={signesPsychologiques} />
          </>
        }
      />

      <ChiffresGroup chiffres={chiffres} />

      <h2 className="sous-titre-2">Pensées stressantes</h2>
      <p className="texte">Les pensées stressantes (inquiétudes, scénarios catastrophiques, ruminations) maintiennent et amplifient la réaction de stress. Les identifier est la première étape pour les modifier.</p>

      <BulletList items={[
        "Ruminations : repasser en boucle des événements passés",
        "Anticipations catastrophiques : imaginer le pire sans preuve",
        "Pensées dichotomiques : tout ou rien",
        "Jugements excessifs sur soi (je ne suis pas à la hauteur)"
      ]} />

      <h2 className="sous-titre-2">Difficultés à dormir</h2>
      <p className="texte">Le stress et les pensées intrusives sont des causes fréquentes d'insomnie. Le manque de sommeil augmente à son tour la sensibilité au stress : c'est un cercle vicieux.</p>

      <ImageCenter imageSrc="/assets/sommeil.jpg" altText="Sommeil" />

      <p className="texte">Signes d'un mauvais sommeil : réveils fréquents, endormissement long (plus de 30 minutes), sensation de sommeil non réparateur, somnolence diurne.</p>

      <h2 className="sous-titre-2">La distinction avec l'anxiété</h2>
      <p className="texte"><b>Stress</b> = réaction à une situation identifiée et souvent temporaire. <b>Anxiété</b> = état plus durable, parfois sans déclencheur clair, avec une anticipation excessive et des symptômes physiques persistants. L'anxiété peut être un trouble diagnosticable (ex. trouble anxieux généralisé) — dans ce cas, un professionnel de santé peut proposer des traitements spécifiques.</p>

      <Separateur />

      <div id="crise">
        <h1 className="titre">En cas de crise</h1>
      </div>
      <ImageTextPopup
        image="./assets/cartes/10_pique.png"
        title="La carte 10♠"
        shortText="Comprendre et agir sur le stress"
        longText=""
        textButton="⤢ Agrandir la carte"
        suit="pique"
      />

      <h2 className="sous-titre-2">Identifier les sources de stress</h2>

      <h2 className="sous-titre-2">Stratégies globales</h2>
      <p className="mise-avant">Agir sur plusieurs plans (physique, cognitif, social) est la stratégie la plus efficace pour réduire le stress durablement.</p>

      <BulletList items={[
        "Hygiène de vie : activité physique régulière, alimentation équilibrée, limiter alcool et stimulants",
        "Sommeil : routines régulières, environnement propice (obscurité, calme)",
        "Organisation : prioriser, décomposer les tâches, poser des limites",
        "Support social : parler à des proches, demander de l'aide",
        "Techniques cognitives : recadrage des pensées, limiter les ruminations",
        "Aide professionnelle : psychothérapie (TCC, thérapies basées sur la pleine conscience), médecins si nécessaire"
      ]} />

      <h2 className="sous-titre-2">Plan d'action simple</h2>
      <ListeNumerotee
        title="3 étapes immédiates"
        items={[
          { title: "Respire", subtitle: "Pratique 2 minutes de respiration diaphragmatique" },
          { title: "Pose des limites", subtitle: "Décale ou refuse une tâche non urgente" },
          { title: "Bouge", subtitle: "Fais 10 minutes d'activité physique légère" }
        ]}
      />

      <ExternalLinkBlock resources={resources} />

      <div id="solutions">
        <h1 className="titre">Comment se détendre et se relaxer — Techniques</h1>
      </div>

      <p className="texte">Voici une sélection de techniques classées par accessibilité : certaines demandent peu de temps, d'autres sont des pratiques à intégrer sur le long terme.</p>

      {techniquesList.map((tech, i) => (
        <div key={i} className="carte-technique">
          <h3 className="sous-titre-3">{tech.title}</h3>
          <BulletList items={tech.items} />
        </div>
      ))}

      <h2 className="sous-titre-2">Autres approches utiles</h2>
      <BulletList items={[
        "Activité physique régulière (marche, natation, vélo) — 30 min plusieurs fois / semaine",
        "Exposition à la nature (balade, jardinage)",
        "Loisirs créatifs et activités plaisantes (musique, dessin)",
        "Limiter la consommation d'informations anxiogènes (réseaux, actu)"
      ]} />

      <YouTubeVideo videoId="dQw4w9WgXcQ" />

      <Separateur />

      <h2 className="sous-titre-2">Que faire si ça ne suffit pas ?</h2>
      <p className="texte">Si le stress impacte durablement la vie quotidienne, le sommeil, le travail ou les relations, il est important de consulter : médecin généraliste, psychiatre ou psychologue. Des traitements (thérapies, parfois médicaments) peuvent aider. En cas de pensées de mort ou de détresse intense, contacte les services d'urgence immédiatement.</p>

      <ListeNumerotee
        title="Plan d'aide"
        items={planAide}
      />

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

      <p className="texte"><em><b>Sources :</b> Sante.fr, Ameli, recommandations générales en santé mentale et sommeil.</em></p>

    </div>
  );
};

export default Detente_relax;