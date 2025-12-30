import React from "react";

const fr = {
  pageTitle: "Relations de couple",
  navLinks: [
    { label: "Les violences conjugales", target: "violences" },
    { label: "La sexualité dans le couple", target: "sexualite" },
    { label: "La communication dans le couple", target: "communication" },
  ],
  card: {
    image: "/assets/cartes/dame_coeur.png",
    title: "La carte D♥",
    shortText: "Les violences conjugales",
    longText: "Les violences conjugales peuvent être physiques, psychologiques, sexuelles, économiques ou administratives. Elles s'inscrivent souvent dans un cycle de la violence qui rend difficile pour la victime de prendre du recul. Il est important de savoir les reconnaître et de chercher de l'aide si tu en es victime ou témoin.",
    textButton: "⤢ Agrandir la carte",
    suit: "coeur",
  },
  violencesTitle: "Les violences conjugales",
  violenceIntro: (
    <>
      Une relation de couple suppose un engagement affectif et sexuel entre deux personnes, fondé sur le respect
      mutuel, la confiance et la communication. Dans la pratique, des désaccords peuvent apparaître. Toutefois, il
      faut différencier le <b>conflit passager</b> (où chacun a encore la liberté de s'exprimer) d'une situation de
      <b>violence conjugale</b>, dans laquelle l'un des partenaires cherche à dominer, contrôler ou détruire l'autre.
      Les violences dans le couple ne se limitent pas aux coups. Elles peuvent être <b>psychologiques, verbales,
      sexuelles, économiques ou administratives</b>. Elles s'inscrivent souvent dans un <b>cycle de la violence</b> qui
      alterne phases de tension, crise, excuses et réconciliation, rendant difficile pour la victime de prendre du
      recul.
    </>
  ),
  chiffres: [
    { number: "93", title: "victimes de féminicides", description: "recensées en 2023" },
    { number: "373 000", title: "femmes victimes de violences", description: "commises par leur conjoint ou ex-conjoint en 2022" },
    { number: "16%", title: "de ces victimes", description: "ont déclaré avoir déposé une plainte à la suite de ces violences" },
  ],
  formsTitle: "Les formes de violences",
  formsIntro: (
    <>
      Les violences conjugales peuvent prendre <b>plusieurs formes, reconnues par la loi</b> :
    </>
  ),
  formsBullets: [
    <>
      <b>Violence physique</b> : coups, bousculades, étranglements, brûlures, morsures…
    </>,
    <>
      <b>Violence verbale et psychologique</b> : injures, menaces, humiliations, chantage affectif, isolement forcé
      (interdiction de voir sa famille ou ses amis)
    </>,
    <>
      <b>Violence sexuelle</b> : tout rapport ou toute pratique imposée contre la volonté (viol, attouchements,
      pénétration forcée, diffusion de photos intimes sans consentement…)
    </>,
    <>
      <b>Violence économique ou matérielle</b> : confiscation ou contrôle total des ressources financières, interdiction de
      travailler, destruction d'effets personnels, etc.
    </>,
    <>
      <b>Violence administrative</b> : confiscation de papiers d'identité, mises sous tutelle ou hospitalisation forcée
      abusives, privation d'accès aux aides sociales, etc.
    </>,
    <>
      <b>Cyberviolence</b> : surveillance abusive à distance (traçage des déplacements, piratage de téléphone,
      cyberharcèlement) ou diffusion non consentie de contenus privés en ligne.
    </>,
  ],
  typesViolences: [
    {
      link: "/vss",
      label: "VSS",
      description: "Si tu veux développer davantage le sujet des violences sexuelles",
      emoji: "🫂",
    },
    {
      link: "/cyber_harcel",
      label: "Cyberharcèlement",
      description: "Si tu veux développer davantage le sujet des cyberviolences",
      emoji: "📵",
    },
    {
      link: "/harcel",
      label: "Harcèlement",
      description: "Pour connaitre les conséquences du harcèlement dans le couple",
      emoji: "😠",
    },
    {
      link: "/revenge",
      label: "Revenge porn",
      description: "Si jamais des images intimes de toi sont diffusées, ou qu'on te menace",
      emoji: "⛔",
    },
  ],
  violencesQuote:
    "Par ses propos et comportements, votre partenaire ou ex‐partenaire veut vous contrôler et vous détruire… Ces violences créent un climat de peur et de tension permanent.",
  violenceVsConflictTitle: "Violence VS conflit",
  violenceVsConflictText: (
    <>
      Dans un <b>conflit</b> de couple normal, les deux partenaires <b>expriment leurs opinions et cherchent un
      compromis</b> dans un <b>rapport encore égalitaire</b>. Par contraste, la <b>violence conjugale</b> traduit un
      <b>rapport de domination</b> : l'auteur·e impose sa volonté par la peur et le contrôle. Cela peut être le point de
      départ de violences conjugales, où la victime est peu à peu enfermée dans un climat de tension et de peur. Si vous
      vous sentez <b>en permanence sur la défensive, menacé·e ou soumis·e</b>, il est possible que vous viviez de la
      <b>violence conjugale plutôt qu'un simple conflit</b>.
    </>
  ),
  violenceConflit: [
    {
      link: "https://arretonslesviolences.gouv.fr/besoin-d-aide/violences-au-sein-du-couple#:~:text=,contr%C3%B4ler%20et%20d%C3%A9truire%20sa%20partenaire",
      label: "Arrêtons les violences",
      description: "Pour détecter les violences au sein du couple",
      imageSrc: "/assets/arretons_violence.svg",
    },
    {
      link: "https://www.ecouteviolencesconjugales.be/pourquoi-appeler/victime/violence-vs-conflit/#:~:text=La%20violence%20conjugale%20n%E2%80%99arrive%20jamais,de%20tension%20et%20de%20peur",
      label: "Ecoute Violences Conjugales",
      description: "Un tableau pour distinguer clairement violence et conflit",
    },
  ],
  violenceCycleTitle: "Le cycle de la violence",
  violenceCycleText: (
    <>
      La violence conjugale ne survient pas toujours brutalement. Elle <b>s'installe souvent selon un cycle de la
      violence</b> : une <b>tension sourde</b> qui monte progressivement, jusqu'à un <b>accès d'agression</b> (crise), suivi
      d'<b>excuses ou de promesses de changement</b> (période dite de « lune de miel »), puis <b>retour à la tension</b>.
      À chaque répétition, les épisodes de violence deviennent plus fréquents et plus graves, épuisant la victime et
      rendant difficile la prise de recul. Comprendre ce cycle aide à identifier la situation et à trouver un soutien
      adapté.
    </>
  ),
  violentometre: [
    {
      link: "/assets/violences-couple-violentometre.pdf",
      label: "Violentomètre",
      description: "Un outil pour évaluer la toxicité et la violence dans un couple",
      emoji: "🌡️",
    },
  ],
  helpTitle: "Aide et numéros d'urgence",
  helpIntro1:
    "Si tu es victime ou témoin de violences conjugales, il est essentiel d'en parler. Tu peux te tourner vers un·e ami·e, un·e personnel·le ou un·e professeur·e en qui tu as confiance, etc. ou directement les secours en cas d'urgence (17 pour la police, 112 urgence européenne).",
  helpIntro2: (
    <>
      Tu peux aussi contacter le <b>3919 – Violences Femmes Info, ligne nationale d'écoute (par téléphone ou chat)
      gratuite et anonyme ouverte 7j/7</b>, qui fournit informations et orientation vers des professionnels
      spécialisés. Ce numéro est ouvert à toutes les personnes victimes de violences conjugales ou sexistes. Le 3919
      n'étant pas un appel d'urgence, en situation critique préférez toujours contacter la police. Tu peux aussi trouver
      une <b>association</b> à proximité de chez toi.
    </>
  ),
  helpContact: {
    image: "/assets/arretons_violence.svg",
    title: "Arrêtons les violences",
    subtitle: "Aide au téléphone, en ligne, ou via une association",
    hours: "24h/24, 7j/7",
    phone: "3919",
    textButton: "Accéder au site et au chat",
    link: "https://arretonslesviolences.gouv.fr/besoin-d-aide",
    bgColor: "#ffffff",
    textColor: "#CC3C32",
  },
  additionalViolenceResources: [
    {
      label: "VSS (Sections « Je suis victime » et « Je suis témoin »)",
      link: "/vss",
      description: "Contacts externes et internes, conseils...",
      emoji: "🫂",
    },
  ],
  sexualityTitle: "La sexualité dans le couple",
  sexualityListTitle: "Quelques conseils pour une sexualité épanouie et respectueuse",
  sexualityListItems: [
    {
      title: "L'accord mutuel",
      subtitle:
        "Avant toute relation sexuelle, assure-toi que le consentement est partagé entre vous deux (explicite, lucide, volontaire et spécifique). Un geste ou un mot peut tout changer, alors n'hésite pas à demander si tu es incertain·e. Ce n'est pas parce qu'un jour l'un·e n'a pas envie que c'est dû à l'amour, l'envie fluctue chez chacun·e.",
    },
    {
      title: "L'expression des envies et des limites",
      subtitle:
        "Parle ouvertement de ce qui te plaît ou non. Il peut s'agir du choix des pratiques sexuelles, de l'utilisation d'un préservatif ou d'une contraception. Discuter des moyens de contraception (pilule, préservatif…) et de protection contre les IST est important pour que chacun se sente en sécurité.",
    },
    {
      title: "La communication continue",
      subtitle:
        "Pendant l'acte sexuel, surveille le confort de l'autre. Si l'un·e de vous n'est plus à l'aise, il faut pouvoir l'exprimer sans crainte. C'est une des clés d'une sexualité épanouie.",
    },
    {
      title: "La bienveillance et le respect",
      subtitle:
        "Aimer c'est respecter l'intégrité de l'autre. Le plaisir en couple se construit sur la confiance mutuelle. Sois à l'écoute de l'autre et prends soin de ses besoins.",
    },
  ],
  sexualityResources: [
    {
      link: "/consent",
      label: "Consentement",
      description: "Petits rappels et conseils sur le consentement",
      emoji: "✅",
    },
    {
      link: "/sex",
      label: "Sexualité",
      description: "Pour en savoir plus sur la sexualité et la contraception",
      emoji: "😘",
    },
    {
      link: "https://commentonsaime.fr/rubrique/mon-couple/",
      label: "Comment on s'aime",
      description: "Il ou elle veut toujours avoir des rapports, ses pratiques me gênent...",
      imageSrc: "/assets/logo-cosa.svg",
    },
    {
      link: "https://questionsexualite.fr/",
      label: "Question Sexualité",
      description: "Les réponses à toutes tes questions concernant la sexualité",
      imageSrc: "/assets/question_sexualite.png",
    },
  ],
  sexualityQuote: "Le « devoir conjugal » est un mythe, ces actes sont interdits et punis par la loi.",
  communicationTitle: "La communication dans le couple",
  communicationIntro: (
    <>
      La <b>communication</b> est le ciment d'une relation de couple solide. Exprimer ses besoins et écouter activement son
      ou sa partenaire est fondamental pour <b>éviter malentendus et ressentiments</b>. Oser dire ce que l'on ressent (« je
      suis blessé·e quand… », « j'ai besoin de plus de… ») tout en restant à l'écoute de ce que l'autre exprime crée un
      <b> climat de confiance mutuelle</b>.
    </>
  ),
  communicationListTitle: "Outils de communication",
  communicationListItems: [
    {
      title: "Exprime tes besoins et émotions",
      subtitle:
        "Parlez de vos ressentis et de vos attentes clairement, sans reproches. Désammorce les malentendus, ne garde pas tes émotions pour toi, au risque de créer des malentendus. Exprime tes besoins et tes limites, cela ouvrira le dialogue et pourra te permettre d'être plus à l'aise dans ton couple.",
    },
    {
      title: "Ecoute activement",
      subtitle:
        "Lorsque ton partenaire parle, prête attention à ses paroles et à son langage non verbal. Manifeste de l'empathie, par exemple en répétant et reformulant ce que tu as entendu pour vérifier ta compréhension.",
    },
    {
      title: "Communique de manière non violente",
      subtitle:
        "Adopte un ton calme et respectueux, même en désaccord. La communication non violente consiste à exprimer un fait (sans juger), à décrire son ressenti (sans blâmer) et à formuler ensuite une demande concrète. Par exemple : « Quand tu rentres tard sans m'en informer (faits), je me sens seul·e et inquiet·e (ressenti), car j'ai besoin de savoir que tout va bien (besoin). Pourrais-tu, à l'avenir, m'envoyer un message si tu vas rentrer très tard ? »",
    },
    {
      title: "Valide les émotions de l'autre",
      subtitle:
        "Reconnais ce que l'autre ressent. Un simple « Je comprends que tu sois en colère » ou « Je vois que ça te rend triste » peut apaiser un climat tendu.",
    },
    {
      title: "Gère les conflits",
      subtitle:
        "Il est normal d'avoir des désaccords. Essaye de les résoudre rapidement plutôt que de les laisser s'envenimer. Fixez-vous des moments calmes pour en parler et n'hésitez pas à faire des compromis l'un comme l'autre.",
    },
  ],
  sourcesText: (
    <>
      <b>Sources :</b> Comment on s'aime, Écoute Violences Conjugales, Arrêtons les violences, Question Sexualité.
    </>
  ),
};

export default fr;
