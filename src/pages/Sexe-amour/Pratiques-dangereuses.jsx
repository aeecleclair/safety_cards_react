import Quote from "../../components/Citation"; 
import ImageTextPopup from "../../components/Cartes"; 
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import ContactCard from "../../components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";
import { ExternalLink } from "lucide-react";


const navLinks = [
  { label: "Qu'est-ce qu'une IST ?", target: "quoi" },
  { label: "Se protéger", target: "se-proteger" },
  { label: "Dépistage", target: "depistage" },
  { label: "Traitements", target: "traitements" }
];

const symptomes = [
  "Pertes inhabituelles (vaginales, péniennes)",
  "Douleurs ou brûlures en urinant",
  "Douleurs pelviennes ou testiculaires",
  "Verrues, ulcérations ou lésions sur les organes génitaux",
  "Saignements entre les règles ou après un rapport",
  "Parfois aucune manifestation — de nombreuses IST sont silencieuses"
];


const planAide = [
  { title: "Faire le point", subtitle: "Après un rapport à risque : évaluer le risque et envisager un dépistage" },
  { title: "Se faire dépister", subtitle: "Aller en laboratoire, CeGIDD ou centre de santé sexuelle — plusieurs tests existent (sang, urine, prélèvements locaux)" },
  { title: "Traiter et prévenir la transmission", subtitle: "Si diagnostic positif : traitement adapté et information des partenaires" },
  { title: "Suivi médical", subtitle: "Suivre les prescriptions et refaire un contrôle si demandé par le professionnel" },
  { title: "Parler", subtitle: "Informer ses partenaires récents de façon factuelle et non-accusatoire" }
];

const chiffres = [
  { number: "2,3 %", title: "de cas de Chlamydia estimés", description: "chez les jeunes femmes de 15-24 ans" },
  { number: "23 000", title: "cas estimés de Gonococcie (2023)", description: "diagnostics en France" },
  { number: "5 800", title: "cas estimés de Syphilis (2023)", description: "diagnostics en France" }
];

const resources4 = [
  { link: "https://www.sida-info-service.org/dossier-la-prep/#:~:text=La%20PrEP%2C%20(Prophylaxie%20Pr%C3%A9%2D,%C3%AAtre%20contamin%C3%A9%20par%20le%20VIH.",
    imageSrc: "/assets/sida.jpg",
    label: "PrEP Info",
    description: "Si tu as des rapports sexuels avec des partenaires porteurs du VIH"
  }]

const resources5 = [
  { link: "https://www.sida-info-service.org/risque-moins-de-48-heures/",
    imageSrc: "/assets/sida.jpg",
    label: "PEP Info",
    description: "Si tu as été exposé·e au VIH il y a moins de 48h"
  }
  ]

const resources3 = [
  { link: "https://cemagcare.com/les-ist-et-les-rapports-sexuels-entre-femmes-fsf/",
    imageSrc: "/assets/cemag.jpg",
    label: "Cemag Care",
    description: "Pour en savoir plus sur la protection des IST dans les rapports entre femmes (personnes menstruées)"
  }
];

const resources2 = [
  { link: "https://www.questionsexualite.fr/s-informer-sur-les-infections-et-les-maladies/qu-est-ce-qu-une-infection-sexuellement-transmissible/qu-est-ce-qu-une-ist?at_medium=sl&at_campaign=2024-04-01-Changer-SEA-SPF-Question+Sexualit%C3%A9_ISTMST_Textuelle-604989&at_format=R-Visibilite-dCPC-GA-GrandPublic-Generique-RSA&gclsrc=aw.ds&gad_source=1&gad_campaignid=21177196714&gbraid=0AAAAAD8OEM2z-ZH9CJepMuWU1gvu4taJx&gclid=Cj0KCQjwgKjHBhChARIsAPJR3xfqC9RjKddnwf3ciSv1lZQnPbTX5_cjcfNZXJUNwr5ggmPmNV0A_ZwaAgAhEALw_wcB",
    imageSrc: "/assets/question_sexualite.png",
    label: "Question Sexualité",
    description: "Informations claires et accessibles sur les IST"
  },    
  { link: "https://www.ameli.fr/assure/sante/themes/infections-sexuellement-transmissibles-ist",
    imageSrc: "/assets/ameli.png",
    label: "Ameli",
    description: "Informations officielles sur les IST, prévention et dépistage"
  }
];

const resources = [
  {
    link: "https://mon-test-ist.ameli.fr/",
    imageSrc: "/assets/mon_test_ist.jpg",
    label: "Mon Test IST (Ameli)",
    description: "Dépistage en labo ou chez soi sans ordonnance"
  },
  {
    link: "https://www.sante.fr/comment-reconnaitre-une-ist",
    imageSrc: "/assets/sante_fr.png",
    label: "Sante.fr",
    description: "Fiches pratiques : symptômes, dépistage et conduite à tenir"
  },
];


const contacts = [
  {
    image: "/assets/sida-info-service.png",
    title: "Sida Info Service",
    subtitle: "Écoute, informations et orientation sur le VIH/IST",
    phone: "0800 840 800",
    email: "",
    hours: "7j/7, de 8h à 23h",
    textButton: "Voir le site web",
    link: "https://www.sida-info-service.org/"
  },
  {
    image: "/assets/planning-familial.png",
    title: "Le Planning Familial",
    subtitle: "Conseils, orientation et centres de santé sexuelle",
    phone: "0800 08 11 11",
    email: "",
    hours: "Du lundi au samedi, 9h-20h",
    textButton: "Voir le site web",
    link: "https://www.planning-familial.org/"
  }
];

const Ist = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Infections Sexuellement Transmissibles (IST)</h1>
      <Navbar links={navLinks} />

      <div id="quoi">
        <h1 className="titre">Qu'est-ce qu'une IST ?</h1>
      </div>
      
      <ImageTextPopup
        image="./assets/cartes/7_coeur.png"
        title="La carte 7&hearts;"
        shortText="Prévention sur les pratiques sexuelles à risque"
        longText="Certaines pratiques sexuelles comportent un risque plus élevé de transmission d'IST, notamment les rapports anaux et vaginaux sans préservatif. L'utilisation systématique de préservatifs est essentielle pour diminuer ce risque. Si un préservatif n'est pas utilisé, il est important de se faire dépister rapidement et si nécessaire, de suivre un traitement adapté."
        textButton="⤢ Agrandir la carte"
      />
      <h2 className="sous-titre-2">Qu'est-ce que c'est ?</h2>
      
      <p className="texte"><b>Une IST (infection sexuellement transmissible)</b> est une infection qui se transmet principalement lors de <b>rapports sexuels</b> (vaginaux, anaux ou oraux). Elles peuvent être causées par des <b>bactéries, des virus ou des parasites.</b></p>
      
      <p className="texte">Les IST sont très fréquentes, en particulier chez les jeunes et les personnes ayant des partenaires multiples. Beaucoup d'IST sont <b>asymptomatiques</b> (silencieuses) mais peuvent entraîner des complications graves si elles ne sont pas traitées.</p>

      <ChiffresGroup chiffres={chiffres} />

      <p className="texte">Les types d'IST les plus courantes sont :</p>

    <TextImageRight
        imageSrc="/assets/IST.png"
        text={
          <>
      <BulletList items={[
        "Chlamydia",
        "Gonorrhée (gonocoque)",
        "Syphilis",
        "VIH",
        "Herpès (HSV)",
        "HPV (papillomavirus)",
        "Hépatite B"
      ]} /> </>
          }
      />


      <p className="mise-avant">Le VIH (virus de l’immunodéficience humaine) est une <b>infection sexuellement transmissible</b>, mais il ne provoque pas toujours le SIDA. Le <b>VIH</b> est le virus, tandis que le <b>SIDA</b> (syndrome d’immunodéficience acquise) correspond au stade avancé de l’infection, lorsque le système immunitaire est affaibli et que des maladies opportunistes apparaissent. Grâce aux traitements actuels, une personne vivant avec le VIH peut rester en bonne santé, ne pas transmettre le virus et ne jamais développer le SIDA.</p>
     
      <h2 className="sous-titre-2">Comment ça se transmet ?</h2>
      
      <p className="texte">Les IST se transmettent <b>principalement par contact direct avec les muqueuses ou les liquides corporels</b> (sang, sperme, sécrétions vaginales) lors de <b>rapports sexuels non protégés</b>. Certaines IST peuvent aussi se transmettre par d'autres voies :</p>
      <BulletList items={[
        "De la mère à l'enfant pendant la grossesse, l'accouchement ou l'allaitement (ex. VIH, syphilis, hépatite B)",
        "Par contact avec du sang contaminé (ex. partage de seringues)",
        "Par contact cutané ou muqueux avec des lésions infectées (ex. herpès, syphilis)"
      ]} />

      <p className="texte">Oui, les IST peuvent se transmettre par le sexe oral (cunnilingus, fellation, anulingus). Le risque est généralement plus faible que pour les rapports vaginaux ou anaux, mais il n'est pas nul.</p>
      <p className="texte">Pour les <b>rapports entre femmes</b>, l'utilisation de barrières comme les digues dentaires, les préservatifs internes ou les gants en latex peut également réduire le risque de transmission selon les pratiques.</p>

      <ExternalLinkBlock resources={resources3} />
      
      <h2 className="sous-titre-2">Quels sont les symptômes ?</h2>
      <p className="texte">Beaucoup d'IST peuvent être <b>asymptomatiques</b> (silencieuses). Quand il y a des signes, il peut s'agir de :</p>

      <BulletList items={symptomes} />

      <p className="texte">Même sans symptôme, une IST peut se transmettre et provoquer des complications si elle n'est pas traitée : infertilité, douleurs chroniques, complications pendant la grossesse, risques accrus d'acquisition du VIH, etc.</p>
      <p className="texte">D'autres maladies peuvent provoquer ce type de symptômes, comme par exemple les mycoses vaginales ou les infections urinaires. Pour ces raisons, il est important de consulter un professionnel de santé en cas de doute, ou d'<b>effectuer un dépistage</b>.</p>


      <ExternalLinkBlock resources={resources2} />

      <Separateur />

      <div id="se-proteger">
        <h1 className="titre">Comment s'en protéger ?</h1>
      </div>

      <p className="mise-avant"><b>La prévention combinée</b> est la plus efficace : préservatif, vaccination quand elle est disponible, dépistage régulier et réduction des facteurs de risque.</p>

      <BulletList items={[
      "Utiliser des préservatifs (externes ou internes) systématiquement pour les rapports sexuels",
        "Se faire vacciner contre le HPV et l'hépatite B si recommandé (vaccins très efficaces)",
        "Limiter le nombre de partenaires et connaître le statut de ses partenaires",
        "Ne pas partager d'aiguilles ou d'objets contaminés",
        "Penser à la PrEP si vous êtes exposé·e au VIH de façon régulière (parlez-en à un professionnel de santé)",
        "En cas d'exposition récente (agression, rapport non protégé) : demander une prophylaxie post‑exposition (TPE/PPE) dans les 48–72h"
      ]} />
      
      <h2 className="sous-titre-2">La PrEP pour le VIH</h2>
      <p className="texte">La <b>PrEP (prophylaxie pré-exposition)</b> est un traitement préventif qui réduit fortement le risque d'infection par le VIH chez les personnes à risque élevé. Il s'agit de prendre un médicament antirétroviral avant et après une exposition potentielle au virus (par exemple, lors de rapports sexuels non protégés avec un partenaire séropositif).</p>
      <ExternalLinkBlock resources={resources4} />

      <h2 className="sous-titre-2">La PEP après une exposition au VIH</h2>
      <p className="texte">La <b>PEP (prophylaxie post-exposition)</b> est un traitement d'urgence qui peut prévenir l'infection par le VIH après une exposition récente (moins de 48-72 heures). Elle consiste en une prise quotidienne d'antirétroviraux pendant 28 jours et doit être commencée le plus rapidement possible après l'exposition.</p>
      <ExternalLinkBlock resources={resources5} />

      <h2 className="sous-titre-2">Préjugés sur les IST</h2>
      <p className="texte">Les IST sont souvent entourées de <b>préjugés et de stigmatisation</b>, ce qui peut empêcher les personnes concernées de se faire dépister ou traiter. Il est important de rappeler que :</p>
      <BulletList items={[
        "Les IST sont très courantes et peuvent toucher tout le monde",
        "Les IST n'ont rien à voir avec l'hygiène ou la moralité",
        "Se faire dépister et traiter est un acte responsable et courageux",
        "Informer ses partenaires permet de protéger leur santé et la vôtre"
      ]} />

      <Quote text="Parler ouvertement des IST contribue à réduire la stigmatisation et à promouvoir une sexualité saine et responsable." />

      <Separateur />

      <div id="depistage">
        <h1 className="titre">Se faire dépister</h1>
      </div>


      <h2 className="sous-titre-2">Le dépistage régulier</h2>
      <p className="texte">Le dépistage régulier des IST est essentiel, même en l'absence de symptômes, surtout si vous avez des partenaires multiples ou des pratiques à risque. Un dépistage précoce permet un traitement rapide et réduit le risque de complications et de transmission.</p>

      <Quote text="Se dépister, ce n'est pas se culpabiliser — c'est prendre soin de soi et des autres." />

      <h2 className="sous-titre-2">Comment se faire dépister ?</h2>

      <p className="texte">Le dépistage peut se faire par prise de sang, test urinaire ou prélèvement local (urètre, col, gorge, rectum) selon l'IST recherchée. Il est recommandé :</p>

      <BulletList items={[
        "Après un rapport non protégé ou un doute",
        "Avant d'arrêter le préservatif avec un(e) nouveau(elle) partenaire",
        "Régulièrement si vous avez des partenaires multiples ou des pratiques à risque",
        "En préparation d'une grossesse"
      ]} />

      <p className="texte">Le dépistage peut se faire gratuitement et de manière anonyme dans les CeGIDD (Centres gratuits d'information, de dépistage et de diagnostic), les centres de santé sexuelle, ou chez un professionnel de santé (médecin, gynécologue, infirmier·e). Certains tests rapides sont aussi disponibles en pharmacie ou en ligne.</p>

      <p className="texte">Depuis 2024, le dispositif « Mon Test IST » permet de se présenter directement en laboratoire pour un bilan IST sans ordonnance et gratuit pour les 18-25 ans. Il est même possible de commander un kit de dépistage par auto-prélèvement pour les infections à Chlamydia et à gonocoque.</p>

      <ExternalLinkBlock resources={resources} />

      <ListeNumerotee
        title="Que faire si le test est positif ?"
        items={planAide}
      />

      <p className="texte">Pour t'aider concrètement, voici des contacts utiles :</p>

      {contacts.map((c, i) => (
        <ContactCard
          key={i}
          image={c.image}
          title={c.title}
          subtitle={c.subtitle}
          phone={c.phone}
          email={c.email}
          hours={c.hours}
          textButton={c.textButton}
          link={c.link}
        />
      ))}


      <Separateur />


      <div id="traitements">
        <h1 className="titre">Se faire traiter</h1>
      </div>
      <h2 className="sous-titre-2">Traitement des IST</h2>

      <p className="texte">Les IST bactériennes (ex. chlamydia, gonorrhée, syphilis) sont en général <b>soignées par des antibiotiques</b>. Les IST virales (ex. herpès, VIH) se <b>contrôlent</b> par des antiviraux — pour le VIH, un traitement antirétroviral permet d'atteindre une charge virale indétectable et d'empêcher la transmission.</p>




      <p className="texte">Tu n'as pas d'idées ? Voici des rubriques utiles à ajouter sur la page — je les ai développées pour toi :</p>

      <NumberedList items={[
        "Droits & confidentialité : anonymat des CeGIDD, confidentialité des résultats, obligations (ex. partenaires à prévenir)",
        "Que dire à son/sa partenaire : modèle de message neutre et exemple de conversation",
        "Urgences : quoi faire en cas d'agression sexuelle (prise en charge médico‑légale, TPE)",
        "Mythes & idées reçues : démystifier les idées fausses (ex. \"on le verrait forcément\")",
        "Conséquences à long terme : fertilité, grossesse, risques de complications",
        "Offres locales : CeGIDD, centres de planning familial, nocturnes et lignes d'écoute"
      ]} />

      <Separateur />
      <p className="texte"><em><b>Sources :</b> Santé Publique France, Sante.fr, Ameli (Mon Test IST), WHO — pour des informations détaillées et à jour, consulter les liens ci‑dessous.</em></p>

    </div>
  );
};

export default Ist;
