import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, TextImageRight, ImageCenter, YouTubeVideo, NumberedList } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";

const navLinks = [
  { label: "Comprendre les TCA", target: "definition" },
  { label: "Je suis concerné·e", target: "concerne" },
  { label: "Je suis témoin", target: "accompagner" },
];

const chiffres = [
  { number: "900 000", title: "personnes en France", description: "souffrent de troubles du comportement alimentaire" },
  { number: "13-25 ans", title: "principalement concernés", description: "les TCA apparaissent souvent à l’adolescence" },
  { number: "1/10", title: "personnes touchées", description: "seulement consultent un professionnel de santé" },
];

const ressources = [
  {
    link: "https://www.psychologue.fr/blog/tca/guide/",
    imageSrc: "/assets/psychologue_fr.jpg",
    label: "Psychologue.fr",
    description: "Guide TCA : comprendre, reconnaître, agir",
  },
  {
    link: "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/troubles-des-conduites-alimentaires-tca/",
    imageSrc: "/assets/psycom.png",
    label: "Psycom – Comprendre les TCA",
    description: "Site de référence sur la santé mentale et les troubles du comportement alimentaire",
  },
];


const items = [
  { title: "Reconnaître les signaux d’alerte", subtitle: "Changements de poids, isolement, obsessions alimentaires, hypercontrôle du corps" },
  { title: "Ne pas banaliser", subtitle: "Les TCA ne relèvent pas d’un simple manque de volonté, mais d’une réelle souffrance psychique" },
  { title: "Consulter", subtitle: "Un·e médecin, psychiatre, ou psychologue peut aider à diagnostiquer et accompagner le trouble" },
  { title: "S’entourer", subtitle: "Parler à ses proches, à une infirmière, ou à une association de soutien" },
];

const items2 = [
  { title: "Écouter sans juger", subtitle: "Ne pas faire de remarques sur le corps ou l’alimentation" },
  { title: "Encourager la parole", subtitle: "Proposer un espace bienveillant pour échanger librement" },
  { title: "Aider à consulter", subtitle: "Proposer d’accompagner la personne à un rendez-vous médical" },
  { title: "Rester patient·e", subtitle: "Le chemin vers la guérison est long, il faut du soutien et de la constance" },
];

const TCA = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Troubles des conduites alimentaires</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Comprendre les TCA</h1>

        <p className="mise-avant">Les <b>TCA</b> ne se résument pas à « mal manger » : ce sont de <b>vrais troubles psychiques</b>, souvent liés à une grande souffrance intérieure et à une perte de contrôle vis-à-vis de l’alimentation, du corps ou du poids.</p>

        <ImageTextPopup
          image="./assets/cartes/roi_pique.png"
          title="La carte R♠"
          shortText="Prévention sur les TCA"
          textButton="⤢ En savoir plus"
          longText="Courir après un idéal de minceur irréaliste, chercher à contrôler son poids ou son alimentation pour se sentir mieux, ou encore utiliser la nourriture pour gérer des émotions difficiles sont des comportements qui peuvent masquer une souffrance profonde. Les TCA sont souvent liés à des facteurs psychologiques (anxiété, dépression, estime de soi), sociaux (pression des normes de beauté, harcèlement) et biologiques (prédispositions génétiques)."
          suit="pique"
        />

        <p className="texte">Les <b>troubles des conduites alimentaires</b> ou <b>troubles du comportement alimentaire</b> (TCA) se traduisent par une <b>relation perturbée avec la nourriture et l’image corporelle</b>, pouvant avoir de lourdes conséquences physiques, psychologiques et sociales. Ces troubles ne sont pas un « choix », ni une question de volonté. Ils nécessitent un <b>accompagnement médical et psychologique</b>.</p>

        <h2 className="sous-titre-2">Signes d'alerte</h2>
        <p className="texte"><b>Beaucoup de personnes souffrant de TCA</b> ne présentent <b>pas de signes visibles</b>. On peut être en détresse même avec un poids considéré comme « normal ». Les TCA sont avant tout des <b>troubles de la pensée et des émotions</b>, et non une simple question d’apparence physique.</p>



        <p className="texte">Voici néanmoins quelques signes qui peuvent indiquer la présence d’un TCA :</p>
        <BulletList
          items={[
            "Préoccupation excessive pour la nourriture, les calories, le poids ou l’image corporelle",
            "Comportements alimentaires inhabituels (restrictions, crises de boulimie, vomissements, usage excessif de laxatifs)",
            "Isolement social, évitement des repas en groupe",
            "Symptômes physiques : fatigue, troubles digestifs, aménorrhée (absence de règles), etc.",
            "Pensées intrusives sur la nourriture, le poids et l'image corporelle",
            "Changements rapides de poids (perte ou prise)"
          ]}
        />
        
      <ExternalLinkBlock
        resources={ressources}
      />

        <h2 className="sous-titre-2">Les principaux types de TCA</h2>
        <p className="texte">Il existe plusieurs formes de TCA, les plus courantes étant :</p>
        <NumberedList
          items={[
            "Anorexie mentale : restriction alimentaire volontaire entraînant une perte de poids importante et une peur intense de grossir, souvent associée à une image corporelle déformée.",
            "Boulimie nerveuse : épisodes de crises de boulimie (ingestion rapide et excessive de nourriture), suivies de comportements compensatoires comme le vomissement, le jeûne ou l’activité physique excessive.",
            "Hyperphagie boulimique : crises alimentaires sans comportements compensatoires, souvent liées à une détresse émotionnelle.",
            "Autres formes : grignotage compulsif, orthorexie (obsession de manger « sain »), ou troubles mixtes ne correspondant pas à une seule catégorie."
          ]}
        />

        <YouTubeVideo url="https://www.youtube.com/watch?v=Hb-xvuzHoyg"/>

        
        <h2 className="sous-titre-2">Les causes</h2>
        <p className="texte">Les TCA peuvent toucher <b>toute personne</b>, quel que soit son âge, son genre ou son poids. Cependant, ils apparaissent souvent à l’adolescence ou chez les jeunes adultes, notamment dans les contextes de <b>fort stress, de pression sociale ou d’estime de soi fragile</b>.</p>
        <p className="texte">Les causes les plus répandues des TCA sont les suivantes :</p>
        <BulletList
          items={[
            "Facteurs psychologiques : Faible estime de soi, perfectionnisme, anxiété, ou dépression. Besoin de contrôle dans un contexte d’impuissance",
            "Facteurs biologiques : Prédispositions génétiques et déséquilibres hormonaux (par ex., sérotonine).",
            "Facteurs sociaux et culturels : Pression des normes de beauté (médias, réseaux sociaux). Influence de la famille ou de l'entourage (attentes, commentaires, activité sportive, métier où l’apparence est importante, harcèlement)"
          ]}
        />

        <ExternalLinkBlock
          resources={
            [
              { link: "/conf",
            emoji: "💛",
            label: "Confiance & estime de soi",
            description: "Tu manques de confiance en toi ? Voici des conseils pour t'aider.",
              },
              { link: "/aliment",
            emoji: "🍽️",
            label: "Alimentation",
            description: "Tu jeûnes car tu ne sais pas comment t'alimenter ? Quelques ressources pour trouver des idées repas.",
              }
            ]
          }
          />

      </div>

      <Separateur />

      <div id="concerne">
        <h1 className="titre">Je suis concerné·e</h1>
      </div>

      <p className="mise-avant">
        Si tu penses avoir une relation compliquée avec la nourriture ou ton corps, <b>tu n’es pas seul·e</b>. 
        En parler est souvent le premier pas vers la guérison.
      </p>


      <p className="texte">
        Ces troubles des conduites alimentaires peuvent provoquer une <b>fatigue intense</b>, des <b>troubles hormonaux</b>, une <b>baisse de concentration</b> et un <b>isolement social</b>. Si tu te reconnais dans ces signes, il est essentiel de consulter rapidement un·e professionnel·le de santé.
      </p>

      <ListeNumerotee 
        title="Comment agir si tu te reconnais dans ces signes ?"
        items={items}
      />
    
      <h1 className="sous-titre-2">Besoin d'en parler ?</h1>
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

      <ContactCard
        image="/assets/ffab.png"
        title="Fédération Française Anorexie Boulimie"
        subtitle="Accompagnement et ressources pour les proches et les personnes concernées"
        phone=""
        hours=""
        textButton="Voir le site web"
        link="https://www.ffab.fr/"
        
      />
      

      <Separateur />

      <div id="accompagner">
        <h1 className="titre">Je suis témoin</h1>
      </div>

      <p className="mise-avant">
        Avoir un proche touché par un TCA peut être déstabilisant. L’écoute, la bienveillance et la patience sont les meilleurs soutiens possibles.
      </p>

      <ListeNumerotee 
        title="Comment aider une personne concernée par un TCA ?"
        items={items2}
      />

      <p className="texte">Le plus important est de <b>ne pas juger ni minimiser</b> les difficultés de la personne. Les TCA ne disparaissent pas avec des conseils alimentaires, mais grâce à un <b>accompagnement médical et psychologique</b>. Propose ton aide pour prendre rendez-vous avec un·e professionnel·le, ou contacte une association spécialisée.</p>
    
      <Separateur />

      <p className="texte"><em><b>Sources :</b> Ameli.fr, Fédération Française Anorexie Boulimie, Psycom, Inserm, HAS</em></p>
    </div>
  );
};

export default TCA;
