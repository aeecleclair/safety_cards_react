import React from "react";

const en = {
  pageTitle: "Couple relationships",
  navLinks: [
    { label: "Intimate partner violence", target: "violences" },
    { label: "Sexuality in a relationship", target: "sexualite" },
    { label: "Communication in a relationship", target: "communication" },
  ],
  card: {
    image: "/assets/cartes/anglais/dame_coeur.png",
    title: "Card D♥",
    shortText: "Intimate partner violence",
    longText: "Intimate partner violence can be physical, psychological, sexual, economic, or administrative. It often follows a cycle of violence that makes it hard for the victim to gain perspective. It's important to recognize the signs and seek help if you’re a victim or a witness.",
    textButton: "⤢ Enlarge the card",
    suit: "coeur",
  },
  violencesTitle: "Intimate partner violence",
  violenceIntro: (
    <>
      A couple relationship implies an emotional and sexual commitment between two people, grounded in mutual respect,
      trust, and communication. Disagreements can naturally arise. Still, it is important to distinguish a 
      <b> temporary conflict</b> (where each person can still speak freely) from a situation of <b>intimate partner
      violence</b>, where one partner tries to dominate, control, or destroy the other. Violence within a couple is not
      limited to physical assaults. It can be <b>psychological, verbal, sexual, economic, or administrative</b>. It often
      follows a <b>cycle of violence</b> that alternates tension, crisis, apologies, and reconciliation, making it hard for
      the victim to step back.
    </>
  ),
  chiffres: [
    { number: "93", title: "femicide victims", description: "recorded in 2023" },
    { number: "373 000", title: "women victims of violence", description: "assaulted by their partner or ex-partner in 2022" },
    { number: "16%", title: "of these survivors", description: "reported having filed an official complaint" },
  ],
  formsTitle: "Forms of violence",
  formsIntro: (
    <>
      Intimate partner violence can take <b>several forms recognized by law</b>:
    </>
  ),
  formsBullets: [
    <>
      <b>Physical violence</b>: hitting, shoving, strangling, burning, biting, and more.
    </>,
    <>
      <b>Verbal and psychological violence</b>: insults, threats, humiliation, manipulative guilt, forced isolation (being
      forbidden to see family or friends).
    </>,
    <>
      <b>Sexual violence</b>: any sexual act or practice forced on the other person (rape, unwanted touching, forced
      penetration, sharing intimate photos without consent).
    </>,
    <>
      <b>Economic or material violence</b>: confiscating or fully controlling money, banning the victim from working,
      destroying personal belongings, etc.
    </>,
    <>
      <b>Administrative violence</b>: confiscating IDs, abusive guardianship or forced hospitalization, preventing access to
      social services, etc.
    </>,
    <>
      <b>Cyberviolence</b>: intrusive digital surveillance (tracking movements, hacking the phone, cyberharassment) or
      sharing private content online without consent.
    </>,
  ],
  typesViolences: [
    {
      link: "/vss",
      label: "VSS",
      description: "If you want to dive deeper into sexual violence",
      emoji: "🫂",
    },
    {
      link: "/cyber_harcel",
      label: "Cyberharassment",
      description: "To explore more about online abuse",
      emoji: "📵",
    },
    {
      link: "/harcel",
      label: "Harassment",
      description: "Learn more about the consequences of harassment in a relationship",
      emoji: "😠",
    },
    {
      link: "/revenge",
      label: "Revenge porn",
      description: "If intimate images of you are shared or used to threaten you",
      emoji: "⛔",
    },
  ],
  violencesQuote:
    "Through their words and behaviors, your partner or ex-partner wants to control and destroy you. These acts create a permanent climate of fear and tension.",
  violenceVsConflictTitle: "Violence vs. conflict",
  violenceVsConflictText: (
    <>
      In a typical <b>disagreement</b>, both partners <b>express their opinions and look for a compromise</b> within a
      <b> still balanced relationship</b>. By contrast, <b>intimate partner violence</b> shows a <b>dynamic of domination</b>:
      the abuser imposes their will through fear and control. This can mark the beginning of a violent pattern, slowly
      trapping the victim in a tense, frightening atmosphere. If you feel <b>constantly on guard, threatened, or forced</b>,
      you may be experiencing <b>violence rather than a simple conflict</b>.
    </>
  ),
  violenceConflit: [
    {
      link: "https://arretonslesviolences.gouv.fr/besoin-d-aide/violences-au-sein-du-couple#:~:text=,contr%C3%B4ler%20et%20d%C3%A9truire%20sa%20partenaire",
      label: "Arrêtons les violences",
      description: "Tools to detect violence within a relationship (FR)",
      imageSrc: "/assets/arretons_violence.svg",
    },
    {
      link: "https://www.ecouteviolencesconjugales.be/pourquoi-appeler/victime/violence-vs-conflit/#:~:text=La%20violence%20conjugale%20n%E2%80%99arrive%20jamais,de%20tension%20et%20de%20peur",
      label: "Écoute Violences Conjugales",
      description: "A clear table to distinguish violence from conflict (FR)",
    },
  ],
  violenceCycleTitle: "The cycle of violence",
  violenceCycleText: (
    <>
      Intimate partner violence does not always begin abruptly. It often <b>settles in through a cycle</b>: a phase of
      <b> underlying tension</b> that gradually grows, an <b>outburst</b> (crisis), followed by <b>apologies or promises to
      change</b> (the "honeymoon" stage), then <b>a return to tension</b>. Each time the cycle repeats, episodes become more
      frequent and severe, exhausting the victim and making it harder to get perspective. Understanding the cycle helps
      you recognize it and seek the right support.
    </>
  ),
  violentometre: [
    {
      link: "/assets/Consentometre_anglais.pdf",
      label: "Violentometer",
      description: "A tool to assess how toxic or violent a relationship is (EN)",
      emoji: "🌡️",
    },
  ],
  helpTitle: "Help and emergency numbers",
  helpIntro1:
    "If you are a victim or witness of intimate partner violence, it is essential to talk about it. You can reach out to a trusted friend, staff member, or professor, or directly contact emergency services (17 for police in France, 112 across the EU).",
  helpIntro2: (
    <>
      You can also contact <b>3919 - Violences Femmes Info, the national hotline (phone or chat), free, anonymous, and
      available 24/7</b>. They provide information and direct you to trained professionals. This number is open to anyone
      facing sexist or intimate partner violence. Because 3919 is not an emergency number, always call the police first
      in critical situations. You can also look for a nearby <b>support organization</b>.
    </>
  ),
  helpContact: {
    image: "/assets/arretons_violence.svg",
    title: "Arrêtons les violences (FR)",
    subtitle: "Help by phone, online chat, or partner organizations",
    hours: "24/7",
    phone: "3919",
    textButton: "Visit the website and chat",
    link: "https://arretonslesviolences.gouv.fr/besoin-d-aide",
    bgColor: "#ffffff",
    textColor: "#CC3C32",
  },
  additionalViolenceResources: [
    {
      label: "VSS (\"I'm a victim\" / \"I'm a witness\" sections)",
      link: "/vss",
      description: "Internal & external contacts, advice, and more",
      emoji: "🫂",
    },
  ],
  sexualityTitle: "Sexuality in the relationship",
  sexualityListTitle: "Tips for a fulfilling and respectful sexuality",
  sexualityListItems: [
    {
      title: "Mutual agreement",
      subtitle:
        "Before any sexual activity, make sure consent is shared by both partners (explicit, clear-minded, voluntary, and specific). A word or gesture can change everything, so ask if you are unsure. Desire naturally fluctuates - it is not a proof of love or lack of love.",
    },
    {
      title: "Express desires and limits",
      subtitle:
        "Talk openly about what you like or dislike, whether it is specific practices, using condoms, or contraception. Discussing contraception and STI protection (pill, condom, etc.) helps everyone feel safe.",
    },
    {
      title: "Continuous communication",
      subtitle:
        "Check in on your partner's comfort during sex. If one of you no longer feels at ease, it must be possible to say so without fear. This is one of the keys to a fulfilling sexuality.",
    },
    {
      title: "Kindness and respect",
      subtitle:
        "Loving someone means respecting their integrity. Shared pleasure is built on mutual trust. Listen to your partner and take care of their needs.",
    },
  ],
  sexualityResources: [
    {
      link: "/consent",
      label: "Consent",
      description: "Reminders and tips about consent",
      emoji: "✅",
    },
    {
      link: "/sex",
      label: "Sexuality",
      description: "Learn more about sexuality and contraception",
      emoji: "😘",
    },
    {
      link: "https://commentonsaime.fr/rubrique/mon-couple/",
      label: "Comment on s'aime",
      description: "When a partner insists on sex or their practices disturb you (FR)",
      imageSrc: "/assets/logo-cosa.svg",
    },
    {
      link: "https://questionsexualite.fr/",
      label: "Question Sexualité",
      description: "Answers to your sexuality questions (FR)",
      imageSrc: "/assets/question_sexualite.png",
    },
  ],
  sexualityQuote: 'The so-called "conjugal duty" is a myth; these acts are forbidden and punished by law.',
  communicationTitle: "Communication in the relationship",
  communicationIntro: (
    <>
      <b>Communication</b> is the glue of a strong relationship. Expressing your needs and actively listening to your
      partner are essential to <b>avoid misunderstandings and resentment</b>. Dare to share how you feel ("I feel hurt when...",
      "I need more...") while listening to what the other person says - this builds a <b>mutual trust climate</b>.
    </>
  ),
  communicationListTitle: "Communication tools",
  communicationListItems: [
    {
      title: "Express needs and emotions",
      subtitle:
        "Share feelings and expectations clearly, without blaming. Defuse misunderstandings by speaking up. Stating your needs and limits opens dialogue and helps you feel more at ease together.",
    },
    {
      title: "Listen actively",
      subtitle:
        "When your partner speaks, pay attention to their words and body language. Show empathy by rephrasing what you understood to make sure you're on the same page.",
    },
    {
      title: "Communicate nonviolently",
      subtitle:
        "Use a calm, respectful tone even when you disagree. Nonviolent communication means stating a fact (without judging), describing how you feel (without blaming), then making a concrete request. For example: \"When you come home late without telling me (fact), I feel lonely and worried (feeling) because I need to know you're safe (need). Could you text me if you'll be very late?\"",
    },
    {
      title: "Validate the other's emotions",
      subtitle:
        "Acknowledge what the other feels. Simple sentences like \"I understand you're angry\" or \"I can see this makes you sad\" can ease a tense moment.",
    },
    {
      title: "Manage conflicts",
      subtitle:
        "Disagreements are normal. Try to address them quickly instead of letting them escalate. Choose calm moments to talk them through and be ready to compromise on both sides.",
    },
  ],
  sourcesText: (
    <>
      <b>Sources:</b> Comment on s'aime, Écoute Violences Conjugales, Arrêtons les violences, Question Sexualité.
    </>
  ),
};

export default en;
