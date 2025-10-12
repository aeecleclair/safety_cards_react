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
  { label: "Se faire dépister", target: "depistage" },
  { label: "Se faire traiter", target: "traitements" },
  { label: "Pratiques à risques", target: "pratiques" },
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
  { title: "Ne pas paniquer", subtitle: "La plupart des IST sont guérissables avec un traitement adapté"},
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
    { link: "https://www.sante.fr/comment-reconnaitre-une-ist",
    imageSrc: "/assets/sante_fr.png",
    label: "Sante.fr",
    description: "Fiches pratiques : comment reconnaître une IST ?"
  }
];

const resources = [
  { 
    link: "https://www.ameli.fr/assure/sante/themes/mst-ist/depistage",
    imageSrc: "/assets/ameli.png",
    label: "Ameli",
    description: "Informations officielles sur le dépistage des IST"
  },
  {
    link: "https://mon-test-ist.ameli.fr/",
    imageSrc: "/assets/mon_test_ist.jpg",
    label: "Mon Test IST",
    description: "Dépistage en labo ou chez soi sans ordonnance"
  },
];

const resources6 = [
  { link: "https://www.sante.fr/fellation-cunnilingus-anulingus-peut-attraper-des-ist-par-la-bouche",
    imageSrc: "/assets/sante_fr.png",
    label: "Sante.fr",
    description: "Informations et conseils pour se protéger lors de rapports oraux"
  }
];

const resources7 = [
  {link: "https://www.ameli.fr/assure/sante/themes/mst-ist/traitement",
    imageSrc: "/assets/ameli.png",
    label: "Ameli",
    description: "Informations officielles sur le traitement des différentes IST"
  }
];

const resources8 = [
  { link: "https://questionsexualite.fr/s-informer-sur-les-infections-et-les-maladies/avoir-une-ist/pourquoi-et-comment-informer-votre-ou-vos-partenaires-de-votre-ist",
    imageSrc: "/assets/question_sexualite.png",
    label: "Question Sexualité",
    description: "Comment informer votre ou vos partenaires de votre IST ?"
  }
];

const pages = [
    {
    link: "/discri",
    emoji: "🟰",
    label: "Discriminations",
    description: "S'informer sur les discriminations liées à la sexualité"},
  {
    link: "/sex_orient",
    emoji: "🏳️‍🌈",
    label: "Orientation sexuelle",
    description: "Plus d'informations sur l'orientation sexuelle"
  }
];

const pages2 = [
    {
    link: "/sex",
    emoji: "😘",
    label: "Sexualité & Contraception",
    description: "Comment être plus épanoui et responsable dans sa sexualité ?"},
    ];
  
const pages3 = [
  { link: "/consentement",
    emoji: "✅",
    label: "Consentement",
    description: "Comprendre et respecter le consentement dans les relations sexuelles"},
  { link: "/alcool",
    emoji: "🍻", 
    label: "Consommation d'alcool",
    description: "Les effets de l'alcool sur le consentement et les comportements sexuels" },
  { link: "/vss",
    emoji: "🫂"
    , label: "VSS",
    description: "Reconnaître, prévenir et agir face aux violences sexuelles"}
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
      <p className="mise-avant"><b>Une IST (infection sexuellement transmissible)</b> est une infection transmise lors de rapports sexuels, causée par des bactéries, des virus ou des parasites. Souvent silencieuses mais fréquentes, surtout chez les jeunes, elles peuvent entraîner des complications graves si elles ne sont pas dépistées et traitées à temps.</p>
      
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
      <p className="texte"><em>Source de l'illustration : depistage.be.</em></p>

      <p className="mise-avant">Le VIH (virus de l'immunodéficience humaine) est une <b>infection sexuellement transmissible</b>, mais il ne provoque pas toujours le SIDA. Le <b>VIH</b> est le virus, tandis que le <b>SIDA</b> (syndrome d'immunodéficience acquise) correspond au stade avancé de l'infection, lorsque le système immunitaire est affaibli et que des maladies opportunistes apparaissent. Grâce aux traitements actuels, une personne vivant avec le VIH peut rester en bonne santé, ne pas transmettre le virus et ne jamais développer le SIDA.</p>
     
      <h2 className="sous-titre-2">Comment ça se transmet ?</h2>
      
      <p className="texte">Les IST se transmettent <b>principalement par contact direct avec les muqueuses ou les liquides corporels</b> (sang, sperme, sécrétions vaginales) lors de <b>rapports sexuels non protégés</b>. Certaines IST peuvent aussi se transmettre par d'autres voies :</p>
      <BulletList items={[
        "De la mère à l'enfant pendant la grossesse, l'accouchement ou l'allaitement (ex. VIH, syphilis, hépatite B)",
        "Par contact avec du sang contaminé (ex. partage de seringues)",
        "Par contact cutané ou muqueux avec des lésions infectées (ex. herpès, syphilis)"
      ]} />

      <p className="texte">Oui, <b>les IST peuvent se transmettre par le sexe oral</b> (cunnilingus, fellation, anulingus). Le risque est généralement plus faible que pour les rapports vaginaux ou anaux, mais il n'est pas nul.</p>

      
      <h2 className="sous-titre-2">Quels sont les symptômes ?</h2>
      <p className="texte">Beaucoup d'IST peuvent être <b>asymptomatiques</b> (silencieuses). Quand il y a des signes, il peut s'agir de :</p>

      <BulletList items={symptomes} />

      <p className="texte"><b>Même sans symptômes, une IST peut se transmettre</b> et provoquer des complications si elle n'est pas traitée : infertilité, douleurs chroniques, complications pendant la grossesse, risques accrus d'acquisition du VIH, etc.</p>
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
      
      <h2 className="sous-titre-2">Le préservatif</h2>
      <p className="texte">Le <b>préservatif</b> (masculin ou féminin) est le moyen le plus efficace pour se protéger contre la plupart des IST lors de rapports sexuels. Il doit être <b>utilisé de manière correcte et systématique, du début à la fin du rapport</b>. Il est important de <b>vérifier la date de péremption et l'intégrité de l'emballage</b> avant utilisation.</p>
      <p className="texte">L'achat de préservatifs est <b>anonyme et gratuit</b> dans les centres de santé sexuelle, les CeGIDD, les centres de planning familial, et <b>à l'infirmerie de l'école</b>. Ils sont aussi disponibles en pharmacie, supermarchés, distributeurs automatiques et en ligne.</p>


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
      
      <p className="texte">Utiliser la bonne protection lors de rapports oraux permet aussi de réduire le risque de transmission d'une IST. Utiliser un <b>préservatif masculin</b> en cas de fellation et une <b>digue dentaire</b> (carré de latex) ou un préservatif coupé pour un cunilingus/anulingus.</p>

      <ExternalLinkBlock resources={resources6} />
      
      <p className="texte">Le préservatif n'offre pas une protection totale contre les IST qui se transmettent par contact cutané (ex. herpès, syphilis), mais il réduit significativement le risque.</p>
      <p className="texte">Pour les <b>rapports entre femmes</b>, l'utilisation de barrières comme les digues dentaires, les préservatifs internes ou les gants en latex peut également réduire le risque de transmission selon les pratiques.</p>

      <ExternalLinkBlock resources={resources3} />

      <h2 className="sous-titre-2">La vaccination</h2>
      <p className="texte">Des <b>vaccins efficaces</b> existent pour prévenir certaines IST :</p>
      <BulletList items={[
        "Contre le papillomavirus humain (HPV) : protège contre les types de HPV responsables de la majorité des cancers du col de l'utérus et des verrues génitales. Il est recommandé pour les filles et les garçons dès 11-14 ans, avec un rattrapage possible jusqu'à 19 ans.",
        "Contre l'hépatite B : protège contre une infection virale qui peut entraîner des maladies du foie. Il est recommandé pour tous les nourrissons et pour les personnes à risque (ex. partenaires multiples, usage de drogues injectables)."
      ]} />
      <p className="texte">Il n'existe pas de vaccin contre le VIH, la chlamydia, la gonorrhée ou la syphilis, mais la recherche est en cours.</p>


      <h2 className="sous-titre-2">La PrEP pour le VIH</h2>
      <p className="texte">La <b>PrEP (prophylaxie pré-exposition)</b> est un traitement préventif qui réduit fortement le risque d'infection par le VIH chez les personnes à risque élevé. Il s'agit de prendre un médicament antirétroviral avant et après une exposition potentielle au virus (par exemple, lors de rapports sexuels non protégés avec un partenaire séropositif).</p>
      <ExternalLinkBlock resources={resources4} />


      <h2 className="sous-titre-2">Préjugés sur les IST</h2>
      <p className="texte">Les IST sont souvent entourées de <b>préjugés et de stigmatisation</b>, ce qui peut empêcher les personnes concernées de se faire dépister ou traiter. Il est important de rappeler que :</p>
      <BulletList items={[
        "Les IST sont très courantes et peuvent toucher tout le monde",
        "Les IST n'ont rien à voir avec l'hygiène ou la moralité",
        "Se faire dépister et traiter est un acte responsable et courageux",
        "Informer ses partenaires permet de protéger leur santé et la vôtre",
        "Les personnes hommosexuelles ne sont pas plus à risque que les personnes hétérosexuelles si elles adoptent des comportements à risque similaires"
      ]} />

      <ExternalLinkBlock resources={pages} />

      <Separateur />

      <div id="depistage">
        <h1 className="titre">Se faire dépister</h1>
      </div>

      <p className="mise-avant">Il est recommandé de se faire <b>dépister régulièrement</b>, notamment après un rapport non protégé, avant d’arrêter le préservatif avec un nouveau partenaire ou en cas de doute. Le dépistage est <b>simple, gratuit et confidentiel</b> dans les CeGIDD ou via le dispositif « Mon Test IST », qui permet aux 18-25 ans de faire un test sans ordonnance, en laboratoire ou chez soi.</p>
      <h2 className="sous-titre-2">Quand se faire dépister ?</h2>

      <p className="texte">Il est recommandé de se faire dépister :</p>

      <BulletList items={[
        "Après un rapport non protégé ou un doute",
        "Avant d'arrêter le préservatif avec un(e) nouveau(elle) partenaire",
        "Régulièrement si vous avez des partenaires multiples ou des pratiques à risque",
        "En préparation d'une grossesse afin de protéger la santé de la mère et de l'enfant",
      ]} />

      <h2 className="sous-titre-2">Comment se faire dépister ?</h2>
      <p className="texte">Le dépistage peut se faire par <b>prise de sang, test urinaire ou prélèvement local</b> (urètre, col, gorge, rectum) selon l'IST recherchée. Le dépistage peut se faire <b>gratuitement et de manière anonyme dans les CeGIDD</b> (Centres gratuits d'information, de dépistage et de diagnostic), les centres de santé sexuelle, ou chez un professionnel de santé (médecin, gynécologue, infirmier·e). Certains tests rapides sont aussi disponibles en pharmacie ou en ligne.</p>

        <ContactCard
          image="/assets/hcl.png"
          title="CeGIDD autour de Lyon"
          subtitle="Centres gratuits d'information, de dépistage et de diagnostic"
          phone=""
          email=""
          hours=""
          textButton="Voir la liste des CeGIDD"
          link="https://www.chu-lyon.fr/depistage-sida-et-ist"
        />

      <p className="texte">Depuis 2024, le <b>dispositif « Mon Test IST »</b> permet de se présenter directement en laboratoire pour un <b>bilan IST sans ordonnance et gratuit pour les 18-25 ans</b>. Il est même possible de <b>commander un kit de dépistage par auto-prélèvement</b> pour les infections à Chlamydia et à gonocoque.</p>

      <ExternalLinkBlock resources={resources} />

      <h2 className="sous-titre-2">Après un dépistage</h2>
      <p className="texte">Les résultats des tests peuvent prendre de <b>quelques jours à une semaine</b> selon le type de test et le lieu de dépistage. Ils sont <b>confidentiels</b> et, dans les CeGIDD, le dépistage peut être anonyme. Pendant ce laps de temps, il est recommandé de <b>ne pas avoir de rapports sexuels non protégés</b> et de <b>prévenir ses partenaires sexuels</b> pour qu'ils puissent également se faire dépister.</p>

      <ExternalLinkBlock resources={pages2} />

      <p className="texte">Si le dépistage est <b>négatif</b>, il est important de continuer à se protéger et de refaire un dépistage régulièrement si vous avez des pratiques à risque.</p>
      <p className="texte">Si le dépistage est <b>positif</b>, un <b>traitement adapté</b> sera prescrit selon l'IST diagnostiquée. Il est essentiel de suivre les recommandations du professionnel de santé et d'<b>informer vos partenaires récents</b> pour qu'ils puissent également se faire dépister et traiter si nécessaire.</p>

      <ListeNumerotee
        title="Que faire si le test est positif ?"
        items={planAide}
      />

      <ExternalLinkBlock resources={resources8} />

      <p className="texte">N'oubliez pas que de <b>nombreuses IST sont guérissables</b> avec un traitement approprié, et que le <b>dépistage</b> est un <b>acte responsable</b> pour votre santé et celle de vos partenaires.</p>

      <h2 className="sous-titre-2">Le dépistage régulier</h2>
      <p className="texte">Le <b>dépistage régulier</b> des IST est essentiel, même en l'absence de symptômes, surtout si vous avez des <b>partenaires multiples ou des pratiques à risque</b>. Un dépistage précoce permet un traitement rapide et réduit le risque de complications et de transmission.</p>


      <Separateur />


      <div id="traitements">
        <h1 className="titre">Se faire traiter</h1>
      </div>
      <p className="mise-avant">Les IST <b>se soignent selon leur origine</b> : les infections bactériennes (comme la chlamydia ou la syphilis) sont traitées par antibiotiques, tandis que les infections virales (comme le VIH ou l’herpès) se contrôlent grâce à des antiviraux. Il est essentiel de <b>suivre le traitement prescrit jusqu’au bout</b>, d’<b>éviter les rapports non protégés pendant cette période</b> et de <b>prévenir ses partenaires pour limiter la transmission.</b></p>
      <h2 className="sous-titre-2">Traitement des IST</h2>
      <p className="texte">Le traitement des IST dépend de l'agent infectieux en cause. Les IST bactériennes (ex. chlamydia, gonorrhée, syphilis) sont en général <b>soignées par des antibiotiques</b>. Les IST virales (ex. herpès, VIH) se <b>contrôlent</b> par des antiviraux — pour le VIH, un traitement antirétroviral permet d'atteindre une charge virale indétectable et d'empêcher la transmission.</p>
      <ExternalLinkBlock resources={resources7} />

      <p className="texte">Il est crucial de <b>suivre le traitement prescrit jusqu'au bout</b>, même si les symptômes disparaissent rapidement. Ne pas interrompre le traitement peut entraîner une résistance aux médicaments et des complications.</p>
      <p className="texte">Pendant le traitement, il est recommandé d'<b>éviter les rapports sexuels</b> ou d'<b>utiliser systématiquement un préservatif</b> pour prévenir la transmission aux partenaires. Informer ses partenaires récents permet également de limiter la propagation des IST.</p>
      <p className="texte">Après le traitement, un <b>contrôle de dépistage</b> peut être nécessaire pour s'assurer de la guérison, surtout pour certaines IST comme la syphilis ou le VIH.</p>

          <ContactCard
          image="/assets/sida.jpg" 
          title="Sida Info Service"
          subtitle="Écoute, informations et orientation sur le VIH/Sida et les IST"
          phone="0 800 840 800"
          email=""
          hours="7j/7, de 8h à 23h"
          textButton="Voir le site web"
          link="https://www.sida-info-service.org/"
        />

      <h2 className="sous-titre-2">La PEP après une exposition au VIH</h2>
      <p className="texte">La <b>PEP (prophylaxie post-exposition)</b> ou TPE (traitement post-exposition) est un traitement d'urgence qui peut prévenir l'infection par le VIH après une exposition récente (moins de 48-72 heures). Elle consiste en une prise quotidienne d'antirétroviraux pendant 28 jours et doit être commencée le plus rapidement possible après l'exposition.</p>
      <ExternalLinkBlock resources={resources5} />

      <Separateur />
      <div id="pratiques">
      <h1 className="titre">Pratiques à risques</h1>
      </div>
      <p className="mise-avant">Les pratiques sexuelles à risque sont celles qui favorisent la transmission des IST. <b>L'alcool et les drogues peuvent altérer le jugement</b>, augmenter les comportements à risque et <b>annuler la validité du consentement</b>, ce qui peut avoir des <b>conséquences pénales graves.</b></p>
      <p className="texte">Les pratiques sexuelles à risques sont celles qui <b>augmentent le risque de transmission des IST</b>. Cela inclut :</p>
      <BulletList items={[
        "Rapports sexuels sans préservatif (vaginaux, anaux, oraux)",
        "Partage de jouets sexuels sans protection",
        "Multiples partenaires sexuels sans dépistage régulier",
        "Usage de drogues ou d'alcool qui altèrent le jugement et les comportements à risque"
      ]} />

      <h2 className="sous-titre-2">Relations sexuelles sous l'emprise de substances</h2>
      <p className="texte">L'usage de drogues ou d'alcool peut <b>altérer le jugement et augmenter les comportements à risque</b>, comme l'abandon du préservatif. Il est important de rester conscient·e de ses limites et de planifier des stratégies pour se protéger, même sous l'influence de substances.</p>
      <p className="texte">Rappelons que le <b>consentement</b> doit toujours être <b>volontaire, clair, lucide, spécifique et révocable</b>. Par définition, une personne sous l'emprise de substances ne peut pas donner un consentement valide. <b>Pénalement, cela peut se traduire par des poursuites pour agression sexuelle.</b></p>
      <ExternalLinkBlock resources={pages3} />

      <Separateur />
      <p className="texte"><em><b>Sources :</b> Santé Publique France, Sante.fr, Ameli (Mon Test IST), OMS, Sida Info Service</em></p>

    </div>
  );
};

export default Ist;
