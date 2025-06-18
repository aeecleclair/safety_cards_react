import React from "react";
import "../../App.css";
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import {
  Navbar,
  BulletList,
  NumberedList,
  TextImageRight,
  ImageCenter,
  YouTubeVideo,
} from "../../components/Common";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";

const navLinks = [
  { label: "Définition & contexte", target: "definition" },
  { label: "Risques", target: "risques" },
  { label: "Se protéger", target: "prevention" },
  { label: "Ressources & soutien", target: "ressources" },
];

const ressourcesSpecifiques = [
  {
    link: "https://www.maad-digital.fr/articles/chemsex-et-risques-daddiction",
    imageSrc: "/assets/maad.png",
    label: "MAAD Digital – Chemsex",
    description: "Article scientifique vulgarisé sur les risques du chemsex",
  },
  {
    link: "https://mendorspas.org/",
    imageSrc: "/assets/mendorspas.png",
    label: "M'endors Pas",
    description: "Infos pratiques : soumission chimique & produits en soirée",
  },
  {
    link: "https://questionsexualite.fr/",
    imageSrc: "/assets/qsex.png",
    label: "QuestionSexualité",
    description: "Tout savoir sur sexualité, IST, consentement et addictions",
  },
];

const resources_sites = [
  {
    link: "https://www.etudiant.gouv.fr/fr",
    imageSrc: "/assets/etudiant_gouv.jpg",
    label: "Etudiant.gouv.fr",
    description: "Le site officiel du gouvernement pour les étudiants",
  },
  {
    link: "https://www.lyoncampus.com/",
    imageSrc: "/assets/logo_lyon_campus.png",
    label: "Lyon Campus",
    description: "Étudier, vivre, sortir et s'impliquer comme étudiant à Lyon",
  },
  {
    link: "https://commentonsaime.fr/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s'aime ?",
    description: "Infos et tchat sur relations, sexualité, consentement…",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Pour parler santé, sexualité, amour, mal‑être (12–25 ans)",
  },
];

const PratiquesSexuellesDangereuses = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Pratiques sexuelles dangereuses</h1>

      <Navbar links={navLinks} />

      {/* -------------------------------------------------- DEFINITION ------------------------------------------------- */}
      <div id="definition">
        <h1 className="titre">Définition & contexte</h1>
        <p className="texte">
          Certaines pratiques, comme le <b>chemsex</b> (usage de substances pour prolonger ou
          intensifier les rapports sexuels), le <b>slam</b> (injection de drogues pendant le sexe) ou
          encore les rapports sans protection ni dépistage régulier, augmentent
          considérablement les risques pour la santé physique et mentale.
        </p>

        <BulletList
          items={[
            "Substances souvent impliquées : 3‑MMC, GHB/GBL, MDMA, cocaïne, kétamine, poppers.",
            "Sessions pouvant durer plusieurs heures voire jours, avec privation de sommeil.",
            "Perte de contrôle → consentement flou, rapports non protégés, overdoses possibles.",
          ]}
        />

        <Quote text="Le plaisir ne devrait jamais faire oublier la sécurité ni le consentement." />
      </div>

      <Separateur />

      {/* -------------------------------------------------- RISQUES ------------------------------------------------- */}
      <div id="risques">
        <h1 className="titre">Quels risques ?</h1>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center", fontFamily: "sans-serif", marginTop: "1.5rem" }}>
          <div style={{ flex: "1 1 260px", background: "#fff", padding: "1.3rem", borderRadius: "12px", boxShadow: "0 0 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ color: "#c62828", fontSize: "1.4rem", fontWeight: "bold" }}>IST & infections</div>
            <div style={{ color: "#555", marginTop: "0.6rem" }}>VIH, hépatites, syphilis, gonorrhée… transmission facilitée en cas de rapports non protégés ou de matériel d'injection partagé.</div>
          </div>
          <div style={{ flex: "1 1 260px", background: "#fff", padding: "1.3rem", borderRadius: "12px", boxShadow: "0 0 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ color: "#c62828", fontSize: "1.4rem", fontWeight: "bold" }}>Addictions</div>
            <div style={{ color: "#555", marginTop: "0.6rem" }}>Usage répété ⟶ dépendance psychique ou physique, difficultés à avoir une sexualité sans substances.</div>
          </div>
          <div style={{ flex: "1 1 260px", background: "#fff", padding: "1.3rem", borderRadius: "12px", boxShadow: "0 0 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ color: "#c62828", fontSize: "1.4rem", fontWeight: "bold" }}>Troubles psychiques</div>
            <div style={{ color: "#555", marginTop: "0.6rem" }}>Anxiété, dépression, épisodes psychotiques lors de la descente (crash) ou à long terme.</div>
          </div>
        </div>

        <YouTubeVideo url="https://www.youtube.com/watch?v=JVmkaGtmZzQ" />
      </div>

      <Separateur />

      {/* -------------------------------------------------- PREVENTION ------------------------------------------------- */}
      <div id="prevention">
        <h1 className="titre">Se protéger & réduire les risques</h1>
        <NumberedList
          items={[
            "Se fixer des limites avant la soirée (type & quantité de produit, partenaires, durée).",
            "Utiliser systématiquement préservatifs externes/interne & gants, lubrifiant à base d'eau.",
            "Ne jamais partager seringues ou pailles ; utiliser du matériel stérile (kits à moindre coût dans les Caarud ou dispositif Tactic).",
            "Prévoir de l'eau, des pauses, un lieu sûr pour dormir et récupérer.",
            "Dépistage VIH/IST régulier ; envisager la PrEP si partenaires multiples.",
            "En cas de bad trip ou overdose présumée : appeler immédiatement le 15 (Samu).",
          ]}
        />

        <TextImageRight
          text={
            <>📍 <b>Bon à savoir</b> : En France, des <b>kits Narcan</b> (naloxone) peuvent inverser temporairement une overdose d'opioïdes. Renseigne‑toi dans un Cegidd ou Caarud.<br/><br/>
            Pour la <b>PrEP</b> (prophylaxie pré‑exposition) ou le <b>TPE</b> (traitement post‑exposition), adresse‑toi à un Cegidd dans les 48 h après un rapport à risque.</>
          }
        />
      </div>

      <Separateur />

      {/* -------------------------------------------------- RESSOURCES ------------------------------------------------- */}
      <div id="ressources">
        <ExternalLinkBlock
          title="Associations & infos spécialisées"
          subtitle="Comprendre les risques, trouver du soutien anonymement"
          resources={ressourcesSpecifiques}
        />

        <ExternalLinkBlock
          title="Portails étudiants & santé"
          subtitle="Aides financières, logement, santé, vie étudiante"
          resources={resources_sites}
        />

        <ContactCard
          image="/assets/logo_craa.png"
          title="CAARUD / CSAPA Lyon"
          subtitle="Échange de matériel stérile, réduction des risques, consultations addictologie"
          phone="04 78 XX XX XX"
          email=""
          hours="Accueil anonyme & gratuit – voir site pour horaires"
          textButton="Voir les adresses"
          link="https://sante.gouv.fr/addictions/caarud"
        />

        <ContactCard
          image="/assets/fsj.png"
          title="Fil Santé Jeunes"
          subtitle="Écoute anonyme 12–25 ans"
          phone="0 800 235 236"
          email=""
          hours="Tous les jours 9h‑23h"
          textButton="Site web"
          link="https://www.filsantejeunes.com/"
        />
      </div>

      <Separateur />

      <p className="texte"><em><b>Sources :</b> CRAFS, Santé Publique France, MAAD‑Digital, État de l’art Centrale Lyon</em></p>
    </div>
  );
};

export default PratiquesSexuellesDangereuses;
