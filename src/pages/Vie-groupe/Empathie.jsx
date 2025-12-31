"use client";

import React from "react";
import "@/src/App.css";

import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import Separateur from "@/components/Separateur";

const navLinks = [
  { label: "Qu'est-ce que l'empathie ?", target: "definition" },
  { label: "Développer son empathie", target: "developpement" },
];

const Empathie = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Empathie</h1>
      <Sommaire links={navLinks} />

      <div id="definition">
        <h1 className="titre">Qu'est-ce que l'empathie ?</h1>

        <ImageTextPopup
          image="./assets/cartes/7_carreau.png"
          title="La carte 7♦"
          shortText="L'empathie en milieu étudiant"
          longText="L'empathie est une compétence essentielle pour vivre et étudier en groupe. Elle permet de comprendre les émotions et les perspectives des autres, favorisant ainsi un environnement bienveillant et inclusif. En se mettant à la place des autres, nous pouvons mieux soutenir nos camarades, prévenir les conflits et renforcer la cohésion au sein de la communauté étudiante."
          textButton="⤢ Agrandir la carte"
          suit="carreau"
        />

        <p className="texte">
          L'empathie, c'est la capacité à comprendre ce que l'autre vit et à
          percevoir ses émotions, même lorsqu'elles sont différentes des nôtres.
          Elle ne consiste pas seulement à « ressentir avec » quelqu'un, mais
          aussi à <b>adapter notre attitude, nos mots et nos comportements</b>
          pour tenir compte de sa sensibilité, de son contexte et de son vécu.
        </p>

        <p className="texte">
          Être empathique, c'est donc faire attention à l'impact de ce que l'on
          dit et fait, car chacun peut traverser une période différente :
          fatigue, anxiété, éloignement, surcharge d'études, etc. L'empathie ne
          demande pas de tout comprendre ni de tout résoudre : elle invite
          surtout à <b>écouter, observer et se montrer attentif</b>.
        </p>
      </div>

      <h2 className="sous-titre-2">Déracinement culturel : comprendre avant de juger</h2>
      <p className="texte">
        L'école accueille des étudiant·e·s internationaux venus d'horizons variés. Certains
        découvrent un nouveau pays, un nouveau mode de vie, et peuvent se sentir
        <b> désorienté·e·s, isolé·e·s ou incompris·e·s</b>. Une blague anodine sur les
        coutumes, l'accent ou la nourriture peut paraître drôle à certains, mais
        blesser profondément une personne qui cherche à s'intégrer.
      </p>
      <p className="texte">
        L'empathie, ici, consiste à <b>se mettre à la place de l'autre</b> :
        imaginer ce que cela représente d'être loin de sa famille, de devoir
        s'adapter à de nouvelles normes sociales ou universitaires, ou
        d'apprendre dans une langue étrangère.
      </p>
      <BulletList
        items={[
          "Un étudiant international décline une invitation à une soirée : ce n'est pas du désintérêt, mais peut-être une question de culture ou de religion.",
          "Une incompréhension dans un groupe de travail : la personne semble distante, alors qu'elle craint de ne pas maîtriser la langue ou les codes de communication.",
        ]}
      />
      <p className="texte">
        Faire preuve d'empathie, c'est accueillir cette différence avec bienveillance plutôt qu'avec jugement.
      </p>

      <ExternalLinkBlock
        resources={[
          {
            link: "/deracinement",
            label: "Déracinement culturel",
            description:"Exemples et conseils pour comprendre les différences culturelles et éviter les quiproquos.",
            emoji: "🗺️",
          },
        ]}
      />

      <h2 className="sous-titre-2">Harcèlement : quand le manque d'empathie blesse</h2>
      <p className="texte">
        Le harcèlement, qu'il soit verbal, moral, en ligne ou entre camarades,
        commence souvent par des plaisanteries répétées ou des remarques banales
        qui franchissent une limite émotionnelle. Une personne empathique est
        capable de remarquer quand une « blague » met quelqu'un mal à l'aise et
        de stopper avant que cela ne devienne blessant.
      </p>
      <BulletList
        items={[
          "Se moquer d'un camarade sur un trait physique ou une habitude peut sembler anodin, mais répété, cela renforce son malaise.",
          "Rire systématiquement des erreurs d'un étudiant plus timide peut miner sa confiance et son envie de participer.",
        ]}
      />
      <p className="texte">
        Développer son empathie permet donc de repérer la détresse de l'autre
        avant qu'elle ne s'aggrave, de désamorcer une situation et de devenir un
        témoin bienveillant, capable de dire « stop » ou d'offrir son soutien à
        la victime.
      </p>

      <ExternalLinkBlock
        resources={[
          {
            link: "/harcel",
            label: "Harcèlement",
            description:
              "Comment l'empathie peut prévenir et désamorcer les situations de harcèlement.",
            emoji: "😠",
          },
        ]}
      />

      <h2 className="sous-titre-2">Confiance en soi : l'effet miroir de l'empathie</h2>
      <p className="texte">
        L'empathie ne bénéficie pas qu'aux autres : elle renforce aussi la
        <b>confiance en soi</b>. Être à l'écoute et comprendre les émotions des
        autres développe la conscience de ses propres ressentis et de ses
        limites. C'est un cercle vertueux : plus on comprend les autres, plus on
        apprend à se comprendre soi-même.
      </p>
      <BulletList
        items={[
          "Lorsqu'on écoute sans juger, on apprend aussi à ne pas se juger soi-même trop sévèrement.",
          "Quand on adopte une posture bienveillante envers autrui, on se donne la permission d'être imparfait·e.",
          "En ressentant la reconnaissance ou la gratitude d'autrui, on renforce sa propre valeur.",
        ]}
      />
      <p className="texte">
        L'empathie devient ainsi un <b>levier d'estime personnelle</b> : en
        prenant soin des autres, on apprend à se valoriser autrement que par la
        performance.
      </p>

      <ExternalLinkBlock
        resources={[
          {
            link: "/conf",
            label: "Confiance en soi",
            description:
              "Comprendre le lien entre empathie, estime de soi et équilibre personnel.",
            emoji: "💛",
          },
        ]}
      />

      <h2 className="sous-titre-2">Être à l'écoute : repérer quand quelqu'un va mal</h2>
      <p className="texte">
        Une personne empathique n'a pas besoin d'être psychologue pour aider :
        il suffit souvent d'une <b>écoute attentive et sincère</b>. Un simple «
        tu veux en parler ? » peut suffire à ouvrir un espace de confiance. Cette
        capacité d'écoute rend l'empathie essentielle dans la prévention des
        difficultés psychologiques : elle permet de repérer des signaux faibles (fatigue, isolement, anxiété, repli) et d'encourager l'autre à demander
        de l'aide.
      </p>
      <p className="texte">
        Des dispositifs existent pour aller plus loin dans cette posture :
      </p>
      <BulletList
        items={[
          "PSSM (Premiers Secours en Santé Mentale) : formation dispensée à Centrale Lyon pour apprendre à écouter, comprendre et orienter une personne en souffrance.",
          "Peer Care : association étudiante d'entraide entre pairs, de prévention des risques et de lutte contre les VSS",
        ]}
      />
      <p className="texte">
        Ces initiatives montrent qu'en étant simplement attentif, on peut
        réellement <b>faire une différence</b> dans le quotidien d'un autre.
      </p>

      <ExternalLinkBlock
        resources={[
          {
            link: "https://www.pssmfrance.fr/",
            label: "PSSM",
            description:
              "Formation Premiers Secours en Santé Mentale : apprendre à écouter et orienter ses pairs.",
            imageSrc: "/assets/logo-pssm.svg",
          },
          {
            link: "https://www.instagram.com/peer_care_ecl?igsh=bHh2aGpmbDVjZzk0",
            label: "Peer Care",
            description:
              "Association de prévention de l'école Centrale Lyon",
            imageSrc: "/assets/peer_care.png",
          },
        ]}
      />

      <Separateur />

      <div id="developpement">
        <h1 className="titre">Développer son empathie</h1>
      </div>

      <ListeNumerotee
        title="Quelques idées..."
        subtitle="... pour développer son empathie au quotidien"
        items={[
          {
            title: "Écoute active",
            subtitle:
              "Laisse l'autre s'exprimer sans l'interrompre, reformule ce que tu as compris et montre que tu es présent.",
          },
          {
            title: "Observation",
            subtitle:
              "Sois attentif aux signaux non verbaux : posture, ton, regard, silence…",
          },
          {
            title: "Lecture et récits",
            subtitle:
              "Découvrir des histoires ou des cultures différentes aide à changer de perspective.",
          },
          {
            title: "Jeux de rôle ou théâtre",
            subtitle:
              "Se mettre dans la peau d'un autre développe la compréhension émotionnelle.",
          },
          {
            title: "Méditation et pleine conscience",
            subtitle:
              "Reconnaître ses émotions pour mieux accueillir celles des autres.",
          },
          {
            title: "Engagement collectif",
            subtitle:
              "Bénévolat, associations, PSSM ou Peer Care : des expériences qui renforcent la solidarité et la bienveillance.",
          },
        ]}
      />

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> ONU (Nations Unies), Université Paris-Saclay, PSSM France.
        </em>
      </p>
    </div>
  );
};

export default Empathie;
