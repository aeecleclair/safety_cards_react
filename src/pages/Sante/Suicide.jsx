import React from "react";
import "../../App.css";

import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import Quote from "../../components/Citation";
import { ChiffresGroup } from "../../components/Chiffres";
import ListeNumerotee from "../../components/Listes";
 

/** Navigation */
const navLinks = [
  { label: "Comprendre un comportement suicidaire", target: "comprendre" },
  { label: "Je réfléchis à passer à l'acte", target: "passer-acte" },
  { label: "Je m'inquiète pour quelqu'un", target: "inquiet" },
  { label: "Je suis impacté ou témoin", target: "impact" },
];

/** Ressources */
const ressourcesSuicide = [
  {
    link: "https://3114.fr/",
    label: "3114 - Prévention suicide",
    description: "Professionnels formés répondant 24h/24 et 7j/7, gratuit et anonyme.",
    emoji: "📞"
  },
  {
    link: "https://www.sos-amitie.com/",
    label: "SOS Amitié",
    description: "Accueil et écoute des personnes en détresse et de leur entourage, 7j/7 24h/24.",
    emoji: "🫂"
  },
  {
    link: "https://www.crous-lyon.fr/social-et-accompagnement/",
    label: "Services sociaux du Crous Lyon",
    description: "Soutien et accompagnement quotidien pour les étudiants.",
    emoji: "🏫"
  },
  {
    link: "https://www.ch-le-vinatier.fr/patients-et-entourage/live-une-ecoute-professionnelle-et-engageante-2867.html",
    label: "LIVE - Santé mentale",
    description: "Ligne d'aide et orientation en santé mentale, 7j/7 8h-20h.",
    emoji: "💚"
  },
  {
    link: "https://www.croix-rouge.fr/",
    label: "Croix-Rouge Écoute",
    description: "Service de soutien par téléphone, solitude, dépression, violence, addictions, 24h/24.",
    emoji: "❤️"
  }
];

/** Page principale */
const Suicide = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Tentative et comportement suicidaire</h1>
      <Navbar links={navLinks} />

      {/* Comprendre un comportement suicidaire */}
      <div id="comprendre">
        <h1 className="titre">Comprendre un comportement suicidaire ou une tentative de suicide</h1>
        <p className="texte">
          Chaque année en France, environ <b>9 000 personnes</b> décèdent par suicide. Pour chaque décès, il y a environ <b>20 tentatives</b>. Parmi les étudiants, <b>8 %</b> déclarent avoir pensé au suicide et <b>4 %</b> avoir déjà tenté d'en finir avec leur vie. La tentative de suicide est un acte dirigé contre soi-même avec l'intention de mourir, mais sans aboutir au décès.
        </p>

        <ChiffresGroup chiffres={[
          { number: "9 000", title: "décès par suicide", description: "en France chaque année" },
          { number: "20", title: "tentatives par décès", description: "estimation moyenne" },
          { number: "4%", title: "étudiants ayant tenté", description: "un acte suicidaire" }
        ]} />

        <p className="texte">
          Le suicide est souvent précédé d'idées suicidaires. Il résulte d'une accumulation de facteurs : troubles psychiatriques, traumatismes passés, isolement social, problèmes familiaux ou scolaires, difficultés financières. L'ambivalence est fréquente : une partie souhaite mettre fin à sa souffrance, l'autre souhaite continuer à vivre.
        </p>
      </div>

      <Separateur />

      {/* Je réfléchis à passer à l'acte */}
      <div id="passer-acte">
        <h1 className="titre">Je réfléchis à passer à l'acte</h1>
        <p className="texte">
          Si tu envisages le suicide, il est crucial de ne pas rester seul. Parler de ton mal-être peut soulager une partie de la souffrance. Tenir un journal, appeler un proche de confiance, te détendre ou bouger peuvent aider au quotidien.
        </p>
        <p className="texte">
          Pour une aide professionnelle, tu peux contacter le <b>3114</b>, disponible 24h/24 et 7j/7, gratuitement et anonymement, ou les services du Crous de Lyon, SOS Amitié, LIVE, ou Croix-Rouge Écoute.
        </p>

        <ExternalLinkBlock resources={ressourcesSuicide} />
      </div>

      <Separateur />

      {/* Je m'inquiète pour quelqu'un */}
      <div id="inquiet">
        <h1 className="titre">Je m'inquiète pour quelqu'un</h1>
        <p className="texte">
          Si tu observes chez un ami des signes de détresse (isolement, tristesse, perte d'intérêt, changements d'humeur ou comportements à risque), il est important d'agir avec bienveillance.
        </p>

        <BulletList items={[
          "Accès de colère ou changements brusques d’humeur",
          "Nervosité ou agitation",
          "Tristesse ou absence d’émotions",
          "Perte d’intérêt pour les activités ou études",
          "Difficultés à dormir ou sommeil excessif",
          "Changements de poids rapides",
          "Difficultés de concentration",
          "Abus d’alcool ou de drogues",
          "Tendance à se mettre en retrait et à s’isoler"
        ]} />

        <p className="texte">
          Pour parler à la personne : entame une conversation dans un cadre calme, observe sans juger, écoute activement et montre ton soutien. Utilise le plan <b>A.E.R.E.R.</b> de PSSM France : <b>Aller vers</b>, <b>Écouter</b>, <b>Relier</b>, <b>Encourager</b>, <b>Rester en lien</b>. Encourage la personne à contacter des professionnels, par exemple le <b>3114</b>.
        </p>
      </div>

      <Separateur />

      {/* Je suis impacté ou témoin d'un suicide */}
      <div id="impact">
        <h1 className="titre">Je suis impacté ou témoin d'un suicide</h1>
        <p className="texte">
          Perdre quelqu'un par suicide est une épreuve douloureuse. Se sentir coupable, confus, en colère ou chercher des réponses est normal. Ce n'est pas parce que la personne a agi ainsi qu'elle ne t'aimait pas.
        </p>
        <p className="texte">
          Si tu as été témoin ou trouvé le corps, tu peux ressentir stress post-traumatique, flashbacks, cauchemars. Même si tu n'étais pas apparenté, ton ressenti est légitime. Parler de ce que tu vis avec un ami ou un professionnel (ex. 3114) peut aider.
        </p>
        <p className="texte">
          Le deuil n'est pas linéaire : sidération, chaos émotionnel, questionnements et culpabilité sont fréquents. Avec le temps et le soutien, tu pourras trouver de l'espoir et continuer à vivre avec ton chagrin.
        </p>

        <ExternalLinkBlock resources={ressourcesSuicide} />
      </div>

    </div>
  );
};

export default Suicide;
