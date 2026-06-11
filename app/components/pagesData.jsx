// Français
const pagesDataFr = [
  {
    category: "🕰️ Vie courante",
    items: [
      { name: "🥬 Alimentation", path: "/aliment" },
      { name: "🧘 Détente et relaxation", path: "/detente" },
      { name: "🛋️ Sédentarité", path: "/sedentarite" },
      { name: "⛹️ Santé physique & pratique du sport", path: "/sport" },
      { name: "💰 Précarité économique", path: "/prec_eco" },
      { name: "💸 Précarité menstruelle", path: "/prec_mens" },
      { name: "🌿 Démarches écologiques", path: "/ecolo" },
      { name: "🚗 Accidents de la circulation", path: "/accident" },
      { name: "🏠 Risques domestiques", path: "/domestique" },
    ],
  },
  {
    category: "⚕️ Santé",
    items: [
      { name: "🍽️ TCA", path: "/tca" },
      { name: "🧑‍🦯 Situation de handicap", path: "/handicap" },
      { name: "💤 Sommeil", path: "/sommeil" },
      { name: "🩸 Endométriose et douleurs menstruelles", path: "/endom" },
      { name: "🗣️ Tentative de suicide", path: "/suicide" },
      { name: "🥹 Dépression", path: "/depression" },
      { name: "🦓 Automutilation", path: "/automutil" },
      { name: "🗺️ Déracinement culturel & vie des internationaux", path: "/deracinement" },
      { name: "😶‍🌫️ Anxiété", path: "/anxiete" },
      { name: "👂 Risques auditifs", path: "/audit" },
    ],
  },
  {
    category: "💉 Risques addictifs",
    items: [
      { name: "📱 Addiction aux écrans et réseaux sociaux", path: "/add_reseaux" },
      { name: "🚬 Tabac & vapotage", path: "/tabac" },
      { name: "🎆 Consommation de stupéfiants", path: "/stup" },
      { name: "🍺 Consommation d'alcool", path: "/alcool" },
      { name: "🔞 Addiction à la pornographie", path: "/add_porno" },
    ],
  },
  {
    category: "🧑‍🤝‍🧑 Vie de groupe",
    items: [
      { name: "😠 Harcèlement", path: "/harcel" },
      { name: "🙅 Effet de groupe", path: "/groupe" },
      { name: "🟰 Discriminations", path: "/discri" },
      { name: "🩵 Empathie", path: "/empathie" },
      { name: "📵 Cyberharcèlement", path: "/cyber_harcel" },
      { name: "🍾 Pratiques d'intégration", path: "/inte" },
      { name: "🫂 VSS", path: "/vss" },
      { name: "💊 Soumission chimique", path: "/soumission" },
    ],
  },
  {
    category: "💖 Sexualité et amour",
    items: [
      { name: "🏳️‍🌈 Orientation sexuelle", path: "/sex_orient" },
      { name: "⛔ Revenge porn", path: "/revenge" },
      { name: "💑 Relations de couple", path: "/couple" },
      { name: "😘 Sexualité", path: "/sex" },
      { name: "⚠️ IST", path: "/pratiques_sex" },
      { name: "♀️ IVG", path: "/ivg" },
      { name: "✅ Consentement", path: "/consent" },
    ],
  },
  {
    category: "🙆 Connaissance de soi",
    items: [
      { name: "💛 Confiance & estime de soi", path: "/conf" },
      { name: "🧍 Isolement", path: "/isolement" },
      { name: "🏳️‍⚧️ Identité de genre", path: "/genre" },
    ],
  },
];

// Anglais
const pagesDataEn = [
  {
    category: "🕰️ Everyday life",
    items: [
      { name: "🥬 Nutrition", path: "/aliment" },
      { name: "🧘 Relaxation", path: "/detente" },
      { name: "🛋️ Sedentary lifestyle", path: "/sedentarite" },
      { name: "⛹️ Physical health & sport", path: "/sport" },
      { name: "💰 Financial insecurity", path: "/prec_eco" },
      { name: "💸 Period poverty", path: "/prec_mens" },
      { name: "🌿 Eco-friendly actions", path: "/ecolo" },
      { name: "🚗 Road accidents", path: "/accident" },
      { name: "🏠 Home hazards", path: "/domestique" },
    ],
  },
  {
    category: "⚕️ Health",
    items: [
      { name: "🍽️ Eating disorders", path: "/tca" },
      { name: "🧑‍🦯 Disability", path: "/handicap" },
      { name: "💤 Sleep", path: "/sommeil" },
      { name: "🩸 Endometriosis & menstrual pain", path: "/endom" },
      { name: "🗣️ Suicide attempt", path: "/suicide" },
      { name: "🥹 Depression", path: "/depression" },
      { name: "🦓 Self-harm", path: "/automutil" },
      { name: "🗺️ Cultural uprooting & international student life", path: "/deracinement" },
      { name: "😶‍🌫️ Anxiety", path: "/anxiete" },
      { name: "👂 Risks of hearing damage", path: "/audit" },
    ],
  },
  {
    category: "💉 Addictions",
    items: [
      { name: "📱 Screen & social media addiction", path: "/add_reseaux" },
      { name: "🚬 Tobacco & vaping", path: "/tabac" },
      { name: "🎆 Drug use", path: "/stup" },
      { name: "🍺 Alcohol consumption", path: "/alcool" },
      { name: "🔞 Pornography addiction", path: "/add_porno" },
    ],
  },
  {
    category: "🧑‍🤝‍🧑 Group life",
    items: [
      { name: "😠 Harassment", path: "/harcel" },
      { name: "🙅 Peer pressure", path: "/groupe" },
      { name: "🟰 Discrimination", path: "/discri" },
      { name: "🩵 Empathy", path: "/empathie" },
      { name: "📵 Cyberbullying", path: "/cyber_harcel" },
      { name: "🍾 Hazing practices", path: "/inte" },
      { name: "🫂 VSS", path: "/vss" },
      { name: "💊 Drug-facilitated assault", path: "/soumission" },
    ],
  },
  {
    category: "💖 Sexuality & love",
    items: [
      { name: "🏳️‍🌈 Sexual orientation", path: "/sex_orient" },
      { name: "⛔ Revenge porn", path: "/revenge" },
      { name: "💑 Relationships", path: "/couple" },
      { name: "😘 Sexuality", path: "/sex" },
      { name: "⚠️ STIs", path: "/pratiques_sex" },
      { name: "♀️ Abortion", path: "/ivg" },
      { name: "✅ Consent", path: "/consent" },
    ],
  },
  {
    category: "🙆 Self-awareness",
    items: [
      { name: "💛 Self-confidence & self-esteem", path: "/conf" },
      { name: "🧍 Isolation", path: "/isolement" },
      { name: "🏳️‍⚧️ Gender identity", path: "/genre" },
    ],
  },
];

export const pagesData = pagesDataFr;
export const pagesDataByLang = { fr: pagesDataFr, en: pagesDataEn };
export default pagesDataFr;
