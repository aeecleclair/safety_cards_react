import React from "react";
import "../../App.css";

import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  AnchorButton,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import Quote from "../../components/Citation";
import { ChiffresGroup } from "../../components/Chiffres";
import ListeNumerotee from "../../components/Listes";
import ImageTextPopup from "../../components/Cartes"; 

/** Navigation */
const navLinks = [
  { label: "Comprendre le suicide", target: "comprendre" },
  { label: "Je suis en souffrance", target: "souffrance" },
  { label: "Je m'inquiète pour quelqu'un", target: "inquiet" },
  { label: "Je suis impacté·e", target: "impact" },
  { label: "J'ai été témoin d'un suicide", target: "temoin" }
];

const psy = [
  {
    link: "https://santepsy.etudiant.gouv.fr/",
    imageSrc: "/assets/Sante_psy_etudiant.png",
    label: "Santé Psy Étudiant",
    description: "Consultations psychologiques gratuites pour les étudiants (infos & annuaire)."
  },
];


const impacte = [
  {
    link: "https://3114.fr/je-suis-eprouve-par-un-suicide/",
    label: "Je suis impacté·e par un suicide",
    description: "Comment comprendre et accepter ? Est-ce normal de se sentir coupable ? etc.",
    imageSrc: "/assets/3114.png"
  }
];

const temoin = [
  {
    link: "https://3114.fr/je-suis-eprouve-par-un-suicide/jai-ete-temoin-dun-suicide/",
    label: "Je suis témoin d'un suicide",
    description: "Problématiques liées, contacts, etc.",
    imageSrc: "/assets/3114.png"
  }
];



const Suicide = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Tentative et comportement suicidaires</h1>
      <Navbar links={navLinks} />

      <div id="comprendre">
        <h1 className="titre">Comprendre un comportement suicidaire ou une tentative de suicide</h1>
        
      <ImageTextPopup
        image="./assets/cartes/7_pique.png"
        title="La carte 7♠"
        shortText="Tu n'es pas seul·e. Contacte le 3114 ou un·e psy."
        longText=""
        textButton="⤢ Agrandir la carte"
        suit = "pique"
        
      />
        
        
        <p className="texte">
          Chaque année en France, environ <b>9 000 personnes</b> décèdent par suicide. Pour chaque décès, il y a environ <b>20 tentatives</b>. Parmi les étudiants français, <b>8 %</b> déclarent avoir pensé au suicide et <b>4 %</b> avoir déjà tenté d'en finir avec leur vie. La tentative de suicide est un acte dirigé contre soi-même avec l'intention de mourir, mais sans aboutir au décès.
        </p>

        <ChiffresGroup chiffres={[
          { number: "9 000", title: "décès par suicide", description: "en France chaque année" },
          { number: "2ème", title: "cause de mortalité des 15-24 ans", description: "après les accidents de la route" },
          { number: "4%", title: "étudiants ayant tenté", description: "un acte suicidaire" }
        ]} />

        <p className="texte">
          Le suicide est souvent précédé d'idées suicidaires. C'est le résultat d’une accumulation de souffrances et de facteurs personnels et environnementaux (il n’y a pas une « cause » unique). Ce n’est pas un acte impulsif sans signe avant-coureur. Il se développe souvent progressivement sous l’effet de la souffrance mentale. Reconnaître les facteurs de risque et en parler avec un professionnel peut aider à prévenir le passage à l’acte.
        </p>
      </div>

      <h2 className="sous-titre-2">Les raisons invoquées par les personnes ayant tenté de se suicider</h2>


      <p className="texte">
        Les raisons invoquées par les personnes ayant tenté de se suicider sont multiples. Parmi elles, on retrouve souvent :
      </p>

      <BulletList items={[
        "La nécessité d'échapper à une souffrance émotionnelle insupportable. Le suicide apparait comme l'unique solution à sa situation désespérée.",
        "La volonté d'interpeller son entourage et de montrer son mal-être : c'est un appel à l'aide.",
      ]} />

      <Separateur />

      <div id="souffrance">
        <h1 className="titre">Je suis en souffrance</h1>
        <p className="texte">
        </p>

        <h2 className="sous-titre-2">Je me sens mal ou dépassé·e</h2>
        <p className="texte">
          Si tu te sens mal ou dépassé·e, il est important de le reconnaître et d'en parler. Tu n'es pas seul·e dans cette situation, et il existe des ressources pour t'aider. Si tu es dans cette situation, tu peux :
        </p>
        <BulletList items={[
          "Tenir un journal de tes sentiments ou des choses que tu apprécies vraiment",
          "Appeler un·e ami·e ou un membre de ta famille en qui tu as confiance, pour parler de ce que tu ressens ou juste pour te changer les idées",
          "Essayer de te détendre en écoutant de la musique, en méditant, en allant te promener",
          "Te dépenser en faisant du sport",
          "Communiquer avec un professionnel de la santé mentale : infirmière, médecin généraliste, psychologue, 3114, etc."
        ]} />

        <ExternalLinkBlock resources={psy} />

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



        <h2 className="sous-titre-2">J'ai des idées suicidaires</h2>
        <p className="texte">
          Peu importe les raisons qui vous amènent à avoir de telles idées, votre douleur est légitime. Bien des choses peuvent vous inciter à mettre fin à votre vie, par exemple : les émotions se sont accumulées avec le temps, la douleur que vous ressentez devient intolérable, un déclencheur ou événement subit… Si vous avez de telles pensées, il est important que vous demandiez de l’aide. Tu peux :
        </p>

        <BulletList items={[
          "Utiliser ton plan de mise en sécurité si tu en as un, ou en crééer un avec une personne formée.",
          "Appeler un·e ami·e ou un membre de ta famille en qui tu as confiance",
          "Contacter un professionnel du 3114",
        ]} />

        <AnchorButton target="plan_securite">Etablir mon plan de sécurité avec un secouriste ↓</AnchorButton>

        <ExternalLinkBlock resources={[
          {
            link: "https://3114.fr/je-suis-en-souffrance/",
            title: "3114",
            description: "Je suis en souffrance : les questions que tu peux te poser, les témoignages et conseils.",
            imageSrc: "/assets/3114.jpg"
          }
        ]} />

        <h2 className="sous-titre-2">A qui en parler ?</h2>
        <BulletList items={[
          <><b>Ton entourage</b> : tes ami·e·s, ta famille, tes professeur·e·s, ton tuteur ou ta tutrice PCP, etc.</>,
          <><b>Un élève formé aux premiers secours en santé mentale</b> ou en contactant l'association <b>Peer Care</b></>,
          <><b>Un professionnel de santé</b> : infirmière, médecin généraliste, psychologue, etc.</>,
          <><b>Un ou une professionnel·le de la prévention du suicide</b> via la ligne <b>3114</b>. Cela pourra t'aider à explorer des options et à trouver l’aide disponible qui correspond le mieux à ta situation et à tes besoins. Il peut s’agir, entre autres, d’une ligne d’écoute, d’un lieu de consultation près de chez toi ou encore d’un centre d’accueil et de crise.</>,
        ]} />

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


      </div>

      <Separateur />

      <div id="inquiet">
        <h1 className="titre">Je m'inquiète pour quelqu'un</h1>

        <ImageTextPopup
        image="./assets/cartes/4_carreau.png"
        title="La carte 4♦"
        shortText="Si tu détectes que quelqu'un va mal, en parler peut tout changer."
        longText=""
        textButton="⤢ Agrandir la carte"
        suit = "carreau"

      />


        <h2 className="sous-titre-2">Les signes d'alerte et les facteurs de risques</h2>

        <p className="texte">
          Les personnes de ton entourage n'osent pas forcément parler de leurs idées et de leur détresse. Il est donc important d'être attentif aux signes qui pourraient indiquer qu'elles ont besoin d'aide. Par exemple :
        </p>

        <BulletList items={[
          "Les changements d'humeur soudains (colère, tristesse, etc.), l'expression de désespoir ou de vengeance",
          "Les propos et écrits sur la mort ou le suicide, la menance de se faire du mal ou de se tuer",
          "L'éloignement de sa famille ou de ses ami·e·s",
          "L'anxiété, l'agitation ou la somnolence permanente",
          "L'engagement dans des activités risquées, imprudente et apparemment irréfléchie",
          "La recherche de moyens de mettre fin à ses jours (médicaments ou autres moyens)",
          "Le sentiment d'être piégé ou de ne plus avoir de raisons de vivre",
        ]} />

      <ListeNumerotee 
      title ="Plan d'action en cas de suspicion de crise suicidaire"
      subtitle="Voici les différentes étapes résumées pour assister une personne en cas de suspicion de crise suicidaire. Chaque étape est détaillée dans les parties suivantes. Si tu te sens dépassé·e en tant qu'aidant·e, tu peux contacter à tout moment le 3114 ou l'infirmière."
      items={[
          {title: "Entame la conversation", subtitle: "Si le cadre et le moment vous conviennent à tou·te·s les deux, mentionne ce que tu as remarqué sans juger ni faire culpabiliser. Si tu soupçonnes des idées suicidaires, sois direct·e en abordant la question."},
          {title: "Écoute activement", subtitle: "Laisse la personne s'exprimer sans l'interrompre. Montre-lui que tu es là pour l'écouter, reste calme et ouvert."},
          {title: "Détermine l'urgence de la situation", subtitle: "Si la personne a prévu un scénario suicidaire, si elle a des moyens concrets pour passer à l'acte ou si elle tient des propos inquiétants, on peut alors considérer que la situation est urgente."},
          {title: "Ne promets jamais de garder le secret", subtitle: "Cherchez ensemble des personnes et des moyens de l'aider. Explique-lui que ce n'est pas par trahison mais par inquiétude."},
          {title: "Si la situation ne compromet pas sa sécurité immédiate", subtitle: "Oriente-le ou la vers des professionnels (3114, hôpitaux, etc.). Vous pouvez aussi réaliser à 2 un plan de sécurité."},
          {title: "Si la situation présente un danger immédiat de suicide", subtitle: "Contacte les services de secours (15 ou 112) ou le 3114 pour demander des conseils sur la situation."}


      ]} />

      <ExternalLinkBlock resources={[
          {
            link: "https://3114.fr/je-minquiete-pour-quelquun",
            label: "Je m'inquiète pour quelqu'un",
            description: "Conseils, réponses à tes questions et contacts.",
            imageSrc: "/assets/3114.png"
          }
      ]} />

        <h2 className="sous-titre-2">Entame la conversation</h2>
        <p className="texte"><b>Interroge-toi :</b> es-tu capable de mener cette conversation, et es-tu disponible et à l’écoute ?</p>
        <p className="texte"><b>Choisissez un cadre agréable :</b> dans un dendroit calme et isolé, au parc ou autour d'un café, au téléphone...</p>

        <p className="texte"><b>Mentionnez ce que vous avez remarqué sans le juger ni le faire culpabiliser :</b></p>
        <BulletList items={[
          "« Je ne t’ai pas beaucoup vu ces derniers jours. Est-ce que tout va bien ? »",
          "« J’ai l’impression que tu vas mal. Tu veux qu’on en parle ? »",
          "« Tu n’es plus le même. Je m’inquiète. Qu’est-ce qu’il se passe ? »",
          "Reconnaissez ses émotions : « Ça semble vraiment difficile. », « J’ai l’impression que tu es triste. »",
          "Faites-lui savoir que vous êtes là pour lui : « Merci de te confier à moi. Je suis là pour toi. »",
        ]} />

        <p className="mise-avant"><b>Aborder la question du suicide :</b> <br/>
          
          - Il faut être direct pour lui donner la possibilité de parler de ses souffrances (cela montre que tu t’inquiètes pour lui ou elle) : « As-tu des idées suicidaires ? », « Envisages-tu de te donner la mort ? »  <br/>
          - Pas de jugement de valeur (ex. « quelque chose de stupide »), pas de sous-entendu <br/>
          - Reste calme et empathique
          </p>

        <p className="texte">Si tu ne te sens pas capable de mener la conversation, oriente vers quelqu’un d’autre : l’infirmière, une personne formée PSSM, un·e professionnel·le de santé ou le 3114.</p>

        <h2 className="sous-titre-2">Ecoute activement</h2>
        <BulletList items={[
          "Fais preuve d'empathie lorsque la personne parle de ce qu'elle ressent, n'entre pas dans un débat.",
          "Ecoute sans jugement et sans culpabiliser.",
          "Pose des questions ouvertes (auxquelles on ne peut pas répondre par oui ou non) afin de maintenir une conversation.",
          "N'hésite pas à reformuler ou à clarifier certains points, afin de montrer ton intérêt et d'être sûr·e de bien comprendre.",
          "Récapitule ce qu'il dit : « Si je comprends bien, tu te sens... »",
          "Ne ramène pas la conversation à toi et ne tente pas d'émettre un diagnostic de trouble psychique."
        ]} />

        <h2 className="sous-titre-2">Détermine l'urgence de la situation</h2>
        <p className="texte">Afin d'évaluer l'urgence de la situation, tu peux surveiller plusieurs points. On peut considérer que la sécurité de la personne est compromise si :</p>
        <BulletList items={[
          "Il ou elle a prévu un scénario suicidaire (quand, où, comment)",
          "Il ou elle a des moyens concrets pour passer à l'acte (armes, médicaments, etc.)",
          "Il ou elle fait ses adieux",
          "Il ou elle tient des propos évasifs : « T’as bien mieux à faire que de t’occuper de moi », « J’ai pensé à une solution, mais je ne veux pas en parler »",
          "Il ou elle tient des propos allusifs : « J’en ai assez de me battre », « Bientôt, vous n’aurez plus à entendre parler de moi »",
          "Il ou elle tient des propos explicites : « J’en peux plus, plutôt me tuer que de vivre ça », « Pour moi, la mort est la seule option »"
        ]} />

      <div id="plan_securite">

        <h2 className="sous-titre-2">Construire un plan de sécurité</h2>
      <ListeNumerotee 
      title ="Construire un plan de sécurité"
      subtitle="Rédiger ce plan permet de s'y référer lorsqu'on est moins en capacité de chercher des solutions, et de traverser les périodes où les pulsions suicidaires arrivent. C'est un accord entre la personne en souffrance et le secouriste."
      items={[
          {title: "Enumérer les signes", subtitle: "qui indiquent qu'une crise suicidaire peut arriver."},
          {title: "Enumérer les stratégies d'adaptation", subtitle: "pour détourner les pensées suicidaires, se calmer et se réconforter."},
          {title: "Dresser la liste des lieux, des activités sociales et des personnes", subtitle: "qui peuvent t'aider à te distraire."},
          {title: "Dresser la liste des contacts", subtitle: "pouvant être contactées en cas de crise."},
          {title: "Enumérer les professionnels de soins de santé mentale ", subtitle: "selon leurs horaires d'ouverture et les numéros de téléphone 24h/24 7j/7 en cas de crise."},
          {title: "Sécuriser le plus possible ton environnement "},
          {title: "Énumérer tes raisons importantes de vivre", subtitle: "et pourquoi tu es toujours en vie."},
          {title: "Énumérer les moyens de se mettre en sécurité"}

      ]} />

      <p className="mise-avant"> Il vaut mieux se focaliser sur ce que la personne peut faire (et non pas sur ce qu'elle ne doit pas faire). Soyez clairs et précis. </p>
      </div>

      <h2 className="sous-titre-2">Les contacts d'urgence</h2>

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

      <ContactCard
              image="/assets/15.png"
              title="SAMU"
              subtitle="Urgence médicale"
              phone="15"
              textButton="Appeler"
              link="tel:15"
              bgColor="#ffffff"
              textColor="#ee3624"
      />





      <h2 className="sous-titre-2">Un point sur l'automutilation</h2>


        <p className="texte">L'automutilation est le fait de se faire du mal à soi-même, souvent en se coupant, en se brûlant ou en se griffant. C'est une manière pour certaines personnes de gérer des émotions intenses. <b>L'automutilation n'a pas pour but de se donner la mort, et peut même aider à éviter de passer à l'acte. Les conseils ci-dessus s'appliquent uniquement si la personne est suicidaire.</b> </p>  
      <p className="texte"> Si ce n'est pas le cas, tu peux te référer à la page automutilation qui traite de l'automutilation non suicidaire.</p>

      <ExternalLinkBlock resources={[
          {
            link: "/automutil",
            label: "Automutilation",
            description: "Savoir comment réagir en cas d'automutilation non suicidaire.",
            emoji: "🦓"
          }
      ]} />

      <h2 className="sous-titre-2">Respecte tes propres limites et prends soin de toi</h2>
      <p className="texte">Tu es un·e ami·e, pas un·e thérapeute.</p>
      <BulletList
        items={[
          "Encourage la personne à s’ouvrir à d’autres. « À qui d’autre en as-tu parlé ? »",
          "Appelez ensemble le numéro national de prévention du suicide au 3114",
          "À la suite de cette conversation, et si tu t'en sens capable, maintiens un contact. « Comment te sens-tu aujourd’hui ? »",
          "S’il planifie de façon imminente de mettre fin à sa vie, appelle le 3114, et efforce-toi de ne pas le laisser seul.",
        ]}
      />

      <p className="texte">
        Offrir du soutien à une personne qui vit des difficultés peut être très valorisant. Mais cela peut aussi avoir un impact sur toi : tu peux rapidement ressentir de la fatigue, voire de l’épuisement. Pour arriver à rester disponible pour l’autre, il est essentiel de prendre soin de soi et de respecter ses limites.
      </p>

      <p className="texte">Il est donc important que tu :</p>
      <BulletList
        items={[
          "Détermines jusqu’où tu peux apporter ton aide",
          "Ne fasses pas de promesse intenable",
          "T'accordes des moments de repos où tu pourras penser à autre chose",
          "Cherches le soutien de ton entourage",
          "Contactes le 3114, pour toi, en cas de besoin et à tout moment.",
        ]}
      />

      </div>

      <Separateur />

      <div id="impact">
        <h1 className="titre">Je suis impacté·e par un suicide</h1>

        <ImageTextPopup
        image="./assets/cartes/dame_pique.png"
        title="La carte D♠"
        shortText="Faire le deuil lorsqu'on est impacté·e ou témoin d'un suicide."
        longText=""
        textButton="⤢ Agrandir la carte"
        suit = "pique"
        
      />


        <p className="texte">
          Perdre quelqu'un par suicide est une épreuve douloureuse. Se sentir coupable, confus, en colère ou chercher des réponses est normal. Ce n'est pas parce que la personne a agi ainsi qu'elle ne t'aimait pas.
        </p>
        <p className="texte">
          Si tu as été témoin ou trouvé le corps, tu peux ressentir stress post-traumatique, flashbacks, cauchemars. Même si tu n'étais pas apparenté, ton ressenti est légitime. Parler de ce que tu vis avec un ami ou un professionnel (ex. 3114) peut aider.
        </p>
        <p className="texte">
          Le deuil n'est pas linéaire : sidération, chaos émotionnel, questionnements et culpabilité sont fréquents. Avec le temps et le soutien, tu pourras trouver de l'espoir et continuer à vivre avec ton chagrin.
        </p>

        <ExternalLinkBlock resources={impacte} />
        
          <ContactCard
            image="/assets/nightline_logo.png"
            title="Nightline Lyon"
            subtitle="Service d'écoute nocturne gratuit pour les étudiant·e·s"
            phone="04 85 30 00 10"
            email=""
            hours="Tous les soirs, de 21h à 2h30"
            textButton="Voir le site web"
            link="https://www.nightline.fr/lyon"
          />

      </div>

      <Separateur />

      <div id="temoin">
        <h1 className="titre">J'ai été témoin d'un suicide</h1>

        <p className="texte">Tu ne réaliseras peut-être pas immédiatement que le suicide a eu un impact significatif sur toi, que tu ne devrais pas être affecté·e de la même manière, que ta réaction n’est pas légitime. Cependant, face à ce traumatisme, en parler peut t'aider, que ce soit à un ami ou via une ligne d’assistance comme le 3114.</p>

        <h2 className="sous-titre-2">Comment traverser le deuil ?</h2>

        <p className="texte">Les premiers jours qui suivent un suicide engendrent quelque fois une perception déformée de la réalité, une sidération.
        Cette période est généralement suivie d’un chaos dans les pensées et les sentiments, engendrant par là des questions comme « Pourquoi ? », « Aurais-je pu remarquer quelque chose ? », « Qu’aurais-je pu faire ? », « Pourquoi ne m’a-t-elle/il pas parlé de sa souffrance ? ». La douleur de la perte peut s’accompagner de réflexions relatives à l’abandon, l’impuissance, le désespoir, la culpabilité, la colère…
        Les personnes endeuillées par suicide rapportent qu’à un moment, contre toute attente, elles découvrent qu’il y a de la place pour autre chose – un projet, un espoir. Ce n’est pas tant que ton chagrin diminue ; c’est que tu grandis avec ton chagrin.
        </p>

        <ExternalLinkBlock resources={temoin} />


        <Separateur />
  
        <p className="texte"><em><b>Sources :</b> Etat de l'Enseignement supérieur, de la Recherche et de l'Innovation en France n°13, 3114, PSSM France</em></p>
  






      </div>


    </div>
  );
};

export default Suicide;
