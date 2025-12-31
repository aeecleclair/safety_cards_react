"use client";

import React from "react";
import "@/src/App.css";

import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo, AnchorButton } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import Quote from "@/components/Citation";
import { ChiffresGroup } from "@/components/Chiffres";
import ListeNumerotee from "@/components/Listes";
import ImageTextPopup from "@/components/Cartes"; 
import { label } from "framer-motion/m";

/** Navigation */
const navLinks = [
  { label: "Comprendre le suicide", target: "comprendre" },
  { label: "Je suis en souffrance", target: "souffrance" },
  { label: "Je m'inquiète pour quelqu'un", target: "inquiet" },
  { label: "Je suis impacté·e", target: "impact" },
  { label: "J'ai été témoin d'un suicide", target: "temoin" }
];

const depression = [
  {
    link: "/depression",
    label: "Dépression",
    description: "Un état dépressif peut être un facteur de risque important.",
    emoji: "🥺"
  }
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
      <Sommaire links={navLinks} />

      <div id="comprendre">
        <h1 className="titre">Comprendre un comportement suicidaire ou une tentative de suicide</h1>
        
      <ImageTextPopup
        image="./assets/cartes/7_pique.png"
        title="La carte 7♠"
        shortText="Tu n'es pas seul·e. Contacte le 3114 ou un·e psy."
        longText="Le suicide est généralement planifié par la personne, elle a souvent réfléchi à son acte, à sa manière de mourir, au moment et au lieu de son passage à l'acte... C'est rarement une décision impulsive. Si tu abordes le sujet avec elle, il est probable qu'elle te parle de ses pensées. Il ne faut jamais oublier qu'il existe des étapes avant de passer à l'acte : ton entourage, l'infirmière, ou des professionnel·le·s comme ceux du 3114 sont là pour toi et peuvent t'aider."
        textButton="⤢ Agrandir la carte"
        suit="pique"

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
          Le suicide est souvent <b>précédé d'idées suicidaires</b>. C'est le résultat d'une <b>accumulation de souffrances et de facteurs personnels</b> et environnementaux (il n'y a pas une « cause » unique). Ce n'est pas un acte impulsif sans signe avant-coureur. Il se développe souvent progressivement sous l'effet de la souffrance mentale. Reconnaître les facteurs de risque et en parler avec un professionnel peut aider à prévenir le passage à l'acte.
        </p>

        <ExternalLinkBlock resources={depression} />
 

      <h2 className="sous-titre-2">Les raisons invoquées par les personnes ayant tenté de se suicider</h2>


      <p className="texte">
        Les raisons invoquées par les personnes ayant tenté de se suicider sont multiples. Parmi elles, on retrouve souvent :
      </p>

      <BulletList items={[
        <>La nécessité d'<b>échapper à une souffrance émotionnelle insupportable</b>. Le suicide apparait comme l'unique solution à sa situation désespérée.</>,
        <>La volonté d'<b>interpeller son entourage et de montrer son mal-être</b> : c'est un appel à l'aide.</>
      ]} />

     </div>

      <Separateur />

      <div id="souffrance">
        <h1 className="titre">Je suis en souffrance</h1>
        <p className="texte">
        </p>

        <h2 className="sous-titre-2">Je me sens mal ou dépassé·e</h2>
        <p className="texte">
          Si tu te sens mal ou dépassé·e, il est important de le reconnaître et d'en parler. Tu n'es pas seul·e dans cette situation, et il existe des ressources pour t'aider. 
        </p>
        <ListeNumerotee
          title="Que faire si tu te sens mal ou dépassé·e ?"
          subtitle="Des actions simples pour te soulager et chercher de l'aide"
          items={[
            { subtitle: "Tenir un journal de tes sentiments ou des choses que tu apprécies vraiment" },
            { subtitle: "Appeler un·e ami·e ou un membre de ta famille en qui tu as confiance, pour parler de ce que tu ressens ou juste pour te changer les idées" },
            { subtitle: "Essayer de te détendre en écoutant de la musique, en méditant, en allant te promener" },
            { subtitle: "Te dépenser en faisant du sport" },
            { subtitle: "Communiquer avec un professionnel de la santé mentale : infirmière, médecin généraliste, psychologue, 3114, etc." }
          ]}
        />

        <ExternalLinkBlock resources={psy} />

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



        <h2 className="sous-titre-2">J'ai des idées suicidaires</h2>
        <p className="texte">
          Peu importe les raisons qui t'amènent à avoir de telles idées, ta douleur est légitime. Bien des choses peuvent t'inciter à mettre fin à ta vie, par exemple : les émotions se sont accumulées avec le temps, la douleur que tu ressens devient intolérable, un déclencheur ou événement subit… Si tu as de telles pensées, il est important que tu demandes de l'aide. Tu peux :
        </p>

        <BulletList items={[
          <>Utiliser ton <b>plan de mise en sécurité</b> si tu en as un, ou en crééer un avec une personne formée.</>,
          <><b>Appeler un·e ami·e ou un membre de ta famille</b> en qui tu as confiance</>,
          <>Contacter un <b>professionnel du 3114</b></>,
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
          <><b>Un·e élève formé·e aux premiers secours en santé mentale</b> ou en contactant l'association <b>Peer Care</b></>,
          <><b>Un·e professionnel·le de santé</b> : infirmière, médecin généraliste, psychologue, etc.</>,
          <><b>Un·e professionnel·le de la prévention du suicide</b> via la ligne <b>3114</b>. Cela pourra t'aider à explorer des options et à trouver l'aide disponible qui correspond le mieux à ta situation et à tes besoins. Il peut s'agir, entre autres, d'une ligne d'écoute, d'un lieu de consultation près de chez toi ou encore d'un centre d'accueil et de crise.</>,
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
        longText="Il ne faut pas hésiter à parler de tes inquiétudes avec la personne concernée. Parfois, le simple fait de poser la question du suicide ou de montrer son inquiétude à l'autre peut aider. Si tu sens que la situation est urgente, n'hésite pas à contacter un professionnel ou les urgences."
        textButton="⤢ Agrandir la carte"
        suit = "carreau"

      />


        <h2 className="sous-titre-2">Les signes d'alerte et les facteurs de risques</h2>

        <p className="texte">
          Les personnes de ton entourage n'osent pas forcément parler de leurs idées et de leur détresse. Il est donc important d'être attentif aux signes qui pourraient indiquer qu'elles ont besoin d'aide. Par exemple :
        </p>

        <BulletList items={[
          <>Les <b>changements d'humeur soudains</b> (colère, tristesse, etc.), l'expression de désespoir ou de vengeance</>,
          <>Les <b>propos et écrits sur la mort ou le suicide</b>, la menace de se faire du mal ou de se tuer</>,
          <><b>L'éloignement de sa famille ou de ses ami·e·s</b></>,
          <><b>L'anxiété, l'agitation ou la somnolence permanente</b></>,
          <>L'engagement dans des <b>activités risquées</b>, imprudentes et apparemment irréfléchies</>,
          <>La recherche de <b>moyens de mettre fin à ses jours</b> (médicaments ou autres moyens)</>,
          <>Le <b>sentiment d'être piégé·e</b> ou de ne plus avoir de raisons de vivre</>,
        ]} />

        <p className="mise-avant"> <b>Attention :</b> certaines personnes plus fragiles peuvent agir de manière compulsive, sans que leur mal être soit visible.</p>

        <p className="texte">La consommation d'<b>alcool</b> ou de <b>substances</b> peut aussi aggraver les comportements suicidaires.</p>

        <ExternalLinkBlock resources={[
          { link: "/alcool", 
            label: "Alcool", 
            description: "Comment aborder la consommation d'alcool ?", 
            emoji: "🍺"
          },
          { link: "/stup",
            label: "Stupéfiants",
            description: "Comment aborder la consommation de stupéfiants ?",
            emoji: "🎆"
          }
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
        <p className="texte"><b>Interroge-toi :</b> es-tu capable de mener cette conversation, et es-tu disponible et à l'écoute ?</p>
        <p className="texte"><b>Choisissez un cadre agréable qui vous convienne à tou·te·s les deux :</b> dans un endroit calme et isolé, au parc ou autour d'un café, au téléphone...</p>

        <p className="texte"><b>Mentionnez ce que vous avez remarqué sans juger ni culpabiliser :</b></p>
        <BulletList items={[
          "« Je ne t'ai pas beaucoup vu ces derniers jours. Est-ce que tout va bien ? »",
          "« J'ai l'impression que tu vas mal. Tu veux qu'on en parle ? »",
          "« Tu n'es plus le même. Je m'inquiète. Qu'est-ce qu'il se passe ? »",
          "Reconnaissez ses émotions : « Ça semble vraiment difficile. », « J'ai l'impression que tu es triste. »",
          "Faites-lui savoir que vous êtes là pour lui : « Merci de te confier à moi. Je suis là pour toi. »",
        ]} />

        <p className="mise-avant"><b>Aborder la question du suicide :</b> <br/>
          
          - Il faut être direct pour lui donner la possibilité de parler de ses souffrances (cela montre que tu t'inquiètes pour lui ou elle) : « As-tu des idées suicidaires ? », « Envisages-tu de te donner la mort ? »  <br/>
          - Pas de jugement de valeur (ex. « quelque chose de stupide »), pas de sous-entendu <br/>
          - Reste calme et empathique
          </p>

        <p className="texte">Si tu ne te sens pas capable de mener la conversation, oriente vers quelqu'un d'autre : l'infirmière, une personne formée PSSM, un·e professionnel·le de santé ou le 3114.</p>

        <h2 className="sous-titre-2">Ecoute activement</h2>
        <BulletList items={[
          <>Fais preuve d'<b>empathie</b> lorsque la personne parle de ce qu'elle ressent, n'entre pas dans un débat.</>,
          <>Ecoute <b>sans jugement</b> et sans culpabiliser.</>,
          <>Pose des <b>questions ouvertes</b> (auxquelles on ne peut pas répondre par oui ou non) afin de maintenir une conversation.</>,
          <>N'hésite pas à <b>reformuler ou à clarifier certains points</b>, afin de montrer ton intérêt et d'être sûr·e de bien comprendre.</>,
          <><b>Récapitule ce qu'il dit</b> : « Si je comprends bien, tu te sens... »</>,
          <><b>Ne ramène pas la conversation à toi</b> et ne tente <b>pas d'émettre un diagnostic de trouble psychique.</b></>
        ]} />

        <h2 className="sous-titre-2">Détermine l'urgence de la situation</h2>
        <p className="texte">Afin d'évaluer l'urgence de la situation, tu peux surveiller plusieurs points. On peut considérer que la sécurité de la personne est compromise si :</p>
        <BulletList items={[
          <>Il ou elle a prévu un <b>scénario suicidaire</b> (quand, où, comment)</>,
          <>Il ou elle a des <b>moyens concrets pour passer à l'acte</b> (armes, médicaments, etc.)</>,
          <>Il ou elle fait ses <b>adieux</b></>,
          <>Il ou elle tient des <b>propos évasifs</b> : « T'as bien mieux à faire que de t'occuper de moi », « J'ai pensé à une solution, mais je ne veux pas en parler »</>,
          <>Il ou elle tient des <b>propos allusifs</b> : « J'en ai assez de me battre », « Bientôt, vous n'aurez plus à entendre parler de moi »</>,
          <>Il ou elle tient des <b>propos explicites</b> : « J'en peux plus, plutôt me tuer que de vivre ça », « Pour moi, la mort est la seule option »</>
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
          {title: "Dresser la liste des contacts", subtitle: "à joindre en cas de crise."},
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
              image="/assets/15.png"
              title="SAMU"
              subtitle="Urgence médicale"
              phone="15"
              textButton="Appeler"
              link="tel:15"
              bgColor="#ffffff"
              textColor="#ee3624"
      />

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
          <><b>Encourage la personne à s'ouvrir à d'autres</b>. « À qui d'autre en as-tu parlé ? »</>,
          <><b>Appelez ensemble le numéro national de prévention du suicide au 3114</b>.</>,
          <><b>À la suite de cette conversation, et si tu t'en sens capable, maintiens un contact</b>. « Comment te sens-tu aujourd'hui ? »</>,
          <><b>Si elle ou il planifie de façon imminente de mettre fin à sa vie, appelle le 3114</b>, et efforce-toi de ne pas la ou le laisser seul·e.</>,
        ]}
      />

      <p className="texte">
        Offrir du soutien à une personne qui vit des difficultés peut être très valorisant. Mais cela peut aussi avoir un impact sur toi : tu peux rapidement ressentir de la fatigue, voire de l'épuisement. Pour arriver à rester disponible pour l'autre, il est essentiel de prendre soin de soi et de respecter ses limites.
      </p>

      <p className="texte"><b>Il est donc important que tu :</b></p>
      <BulletList
        items={[
          <><b>Détermines jusqu'où tu peux apporter ton aide</b>.</>,
          <><b>Ne fasses pas de promesse intenable</b>.</>,
          <><b>T'accordes des moments de repos où tu pourras penser à autre chose</b>.</>,
          <><b>Cherches le soutien de ton entourage</b>.</>,
          <><b>Contactes le 3114, pour toi, en cas de besoin et à tout moment</b>.</>,
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
        longText="Lorsqu'on est confronté à un suicide, il est normal de ressentir une multitude d'émotions : tristesse, colère, culpabilité. Le processus de deuil peut être long et difficile, mais il est essentiel de prendre le temps de vivre ces émotions. Tu peux te faire aider par des pairs ou des professionnel·le·s."
        textButton="⤢ Agrandir la carte"
        suit="pique"

      />


        <p className="texte">
          Perdre quelqu'un par suicide est une épreuve douloureuse. Se sentir coupable, confus, en colère ou chercher des réponses est normal. <b>Ce n'est pas parce que la personne a agi ainsi qu'elle ne t'aimait pas.</b>
        </p>
        <p className="texte">
          Si tu as été témoin ou trouvé le corps, tu peux ressentir stress post-traumatique, flashbacks, cauchemars. Même si tu n'étais pas apparenté·e, ton ressenti est légitime.<b> Parler de ce que tu vis avec un ami ou un professionnel (ex. 3114) peut aider.</b>
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

        <p className="texte">Tu ne réaliseras peut-être pas immédiatement que le suicide a eu un impact significatif sur toi. Tu pourras penser que tu ne devrais pas être affecté·e de la même manière, que ta réaction n'est pas légitime. Cependant, face à ce traumatisme, en parler peut t'aider, que ce soit à un ami ou via une ligne d'assistance comme le 3114.</p>

        <h2 className="sous-titre-2">Comment traverser le deuil ?</h2>

        <p className="texte"><b>Les premiers jours qui suivent un suicide engendrent quelque fois une perception déformée de la réalité, une sidération.</b>
        Cette période est généralement suivie d'un chaos dans les pensées et les sentiments, engendrant par là des questions comme « Pourquoi ? », « Aurais-je pu remarquer quelque chose ? », « Qu'aurais-je pu faire ? », « Pourquoi ne m'a-t-elle/il pas parlé de sa souffrance ? ». La douleur de la perte peut s'accompagner de réflexions relatives à l'abandon, l'impuissance, le désespoir, la culpabilité, la colère…
        <b>Les personnes endeuillées par suicide rapportent qu'à un moment, contre toute attente, elles découvrent qu'il y a de la place pour autre chose : un projet, un espoir.</b> Ce n'est pas tant que ton chagrin diminue ; c'est que tu grandis avec ton chagrin.
        </p>

        <ExternalLinkBlock resources={temoin} />


        <Separateur />
  
              <h2 className="sous-titre-2">Pour aller + loin : la formation PSSM</h2>
        
              <TextImageRight  text="Les PSSM (Premiers Secours en Santé Mentale) constituent l'aide qui est apportée à une personne touchée par un trouble ou une crise de santé mentale. Les premiers secours sont donnés jusqu'à ce qu'une aide professionnelle puisse être apportée ou jusqu'à ce que la crise soit résolue. Ils sont l'équivalent en santé mentale des gestes de premiers secours qui, eux, apportent une aide physique à la personne en difficulté.
              Ouverte à toutes et tous, et sans pré-requis, la formation PSSM vise à apprendre à savoir réagir face à une détresse psychique : entrer en contact, soutenir et orienter.
              La formation est dispensée à Centrale par l'infirmière : si tu es intéressé·e, tu peux la contacter ou voir avec l'association Peer Care." 
              imageSrc="/assets/logo-pssm.svg" />
        
              <Separateur />
        
        <p className="texte"><em><b>Sources :</b> Etat de l'Enseignement supérieur, de la Recherche et de l'Innovation en France n°13, 3114, PSSM France</em></p>
  






      </div>


    </div>
  );
};

export default Suicide;
