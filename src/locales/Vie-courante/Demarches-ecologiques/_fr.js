const fr = {
  pageTitle: "Démarches écologiques",
  navLinks: [
    { label: "Tri et compost", target: "tri" },
    { label: "Jardins partagés", target: "jardin" },
    { label: "Consommation de viande", target: "viande" },
    { label: "Transport", target: "transport" },
    { label: "Numérique", target: "numerique" },
  ],
  triTitle: "Tri des déchets et compostage",
  carte3Carreau: {
    image: "/assets/cartes/3_carreau.png",
    title: "La carte 3♦",
    shortText: "Découvre toutes les manières de réduire ton impact sur l'environnement.",
    longText: "Même à l'échelle individuelle, il existe de nombreuses manières concrètes de réduire son impact environnemental. Tu peux jouer sur ton alimentation, la gestion de tes déchets ou sur ton usage d'internet. Ces petits gestes comptent, même s'ils doivent aussi s'accompagner d'actions collectives et politiques pour être vraiment efficaces.",
    textButton: "⤢ Agrandir la carte",
  },
  triText1: "Depuis 2024, le <b>tri à la source des déchets verts et alimentaires</b> est obligatoire. Ils doivent être séparés pour être compostés ou méthanisés. En résidence universitaire, renseignez-vous sur les composteurs collectifs disponibles.",
  triText2: "Au sein du campus de Centrale Lyon, tu disposes de nombreux points de tri sélectif. Des poubelles bleues sont aussi à disposition dans les salles de classe afin de trier le papier.",
  triText3: "Le tri des déchets est aussi réalisé en résidences (Comparat et Adoma). Des bacs à compost sont aussi mis à disposition des habitant·es, au bas des résidences de Comparat.",
  resourcesTri: [
    {
      link: "https://campus.ec-lyon.fr/tri-et-recyclage-5673.kjsp?RH=ACCUEIL",
      label: "Tri et recyclage - Campus ECL",
      description: "Consignes de tri selon les déchets, plan général des points de tri",
      imageSrc: "/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png",
    },
    {
      link: "/docs/lyon_guide_tri.pdf",
      label: "Guide de tri - Métropole Grand Lyon",
      description: "Conseils de tri et de réduction des déchets",
      imageSrc: "/assets/logo-metropole-lyon.svg",
    },
    {
      link: "https://agirpourlatransition.ademe.fr/particuliers/reduire-dechets/bien-jeter",
      label: "ADEME",
      description: "Bien jeter les déchets pour mieux les valoriser",
      imageSrc: "/assets/logo-ademe.svg",
    },
  ],
  jardinTitle: "Jardins partagés et serres",
  jardinText1: "À Centrale Lyon, les jardins partagés sont situés au bas des bâtiments T et X. En y participant, tu peux <b>découvrir le jardinage ou transmettre tes connaissances</b>, le tout dans la bonne humeur ! C'est aussi l'occasion d'accéder à des formations mensuelles pour apprendre et partager de bons moments.",
  jardinText2: "Les jardins partagés sont gérés par l'association <b>Planet&Co</b>.",
  resourcesJardin: [
    {
      link: "https://www.instagram.com/planetandcoecl/",
      label: "Planet&Co - Instagram",
      description: "Association écologique de Centrale Lyon.",
      imageSrc: "/assets/planet-co.jpg",
    },
  ],
  viandeTitle: "Consommation de viande",
  viandeText1: "L'élevage est responsable d'environ 14 % des émissions mondiales de gaz à effet de serre. Réduire sa consommation de viande, surtout rouge, est un levier écologique puissant.",
  viandeImageSrc: "/assets/emissions_ges_nourriture.png",
  viandeText2: "Même un ou deux repas végétariens par semaine ont donc un impact. Pense aussi à l'AMAP, gérée par <b>Planet&Co</b>, qui te permet d'avoir des fruits et légumes locaux et de saison, du miel, du fromage et du pain chaque semaine. Tu peux réserver depuis l'application <b>MyECL</b>.",
  resourcesViande: [
    {
      link: "https://agirpourlatransition.ademe.fr/particuliers/evaluer-son-impact/calculer-impact-alimentation/mesurez-empreinte-carbone-assiette",
      label: "ADEME",
      description: "Calcule l'empreinte carbone de ton assiette et découvre des conseils pour la réduire",
      imageSrc: "/assets/logo-ademe.svg",
    },
    {
      link: "https://www.instagram.com/planetandcoecl/",
      label: "Planet&Co - Instagram",
      description: "Association écologique de Centrale Lyon.",
      imageSrc: "/assets/planet-co.jpg",
    },
    {
      link: "https://agirpourlatransition.ademe.fr/particuliers/mieux-consommer/alimentation",
      label: "ADEME",
      description: "Avoir une alimentation saine et durable",
      imageSrc: "/assets/logo-ademe.svg",
    },
  ],
  transportTitle: "Transport",
  transportText1: "Les transports représentent plus de 30 % des émissions françaises. Les trajets en train, bus ou covoiturage sont à privilégier par rapport à la voiture individuelle ou l'avion.",
  transportImageSrc: "/assets/emissions_ges_secteurs.png",
  transportText2: "Dans ton quotidien, tu peux :",
  transportList: [
    "Utiliser vélo et marche pour les trajets courts. Planet&Co loue des vélos dans ce but (tu peux les contacter via Insta pour connaître les modalités).",
    "Favoriser train, tram, bus (C6, 55 et 3 au départ de Centrale Lyon) et covoiturage.",
    "Préférer le train et la visioconférence pour les réunions professionnelles.",
  ],
  resourcesTransport: [
    {
      link: "https://impactco2.fr/outils/transport",
      label: "ADEME",
      description: "Calcule l'empreinte carbone de tes déplacements et trouve des solutions pour la réduire !",
      imageSrc: "/assets/logo-ademe.svg",
    },
  ],
  numeriqueTitle: "Numérique : streaming, Wi-Fi et IA",
  numeriqueText1: "Le numérique n'est pas neutre : un smartphone émet ~85 kg CO₂ à la fabrication, et le streaming représente 80 % du trafic Internet. L'IA et les requêtes lourdes ont aussi un coût énergétique important. Pour réduire ton impact numérique, tu peux :",
  numeriqueList: [
    "Limiter la qualité du streaming (HD ou SD suffisent).",
    "Privilégier le Wi-Fi au réseau mobile (la 4G consomme 23 fois plus d'énergie que le Wi-Fi).",
    "Éteindre sa box la nuit, supprimer les fichiers inutiles.",
    "Limiter les requêtes IA (une requête textuelle consomme 6x plus qu'une recherche internet classique), surtout les requêtes lourdes (génération d'images et de vidéos).",
    "Prolonger la durée de vie de ses appareils : bien les entretenir, réparer plutôt que remplacer, acheter d'occasion ou reconditionné.",
  ],
  resourcesNumerique: [
    {
      link: "https://agirpourlatransition.ademe.fr/particuliers/evaluer-son-impact/calculer-empreinte-carbone/calculez-empreinte-carbone-usages-numeriques",
      label: "ADEME",
      description: "Calcule l'empreinte carbone de tes usages numériques et découvre des conseils pour la réduire",
      imageSrc: "/assets/logo-ademe.svg",
    },
    {
      link: "https://agirpourlatransition.ademe.fr/particuliers/mieux-consommer/numerique",
      label: "Bien choisir ses appareils numériques",
      description: "pour réduire leur impact",
      imageSrc: "/assets/logo-ademe.svg",
    },
  ],
  sourcesText: "<em><b>Sources :</b> ADEME, Ministère de la Transition écologique, Planet&Co, Métropole Grand Lyon</em>",
};

export default fr;
