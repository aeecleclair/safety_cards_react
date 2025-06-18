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
  { label: "Définitions & repères", target: "definitions" },
  { label: "Sortir du silence", target: "comingout" },
  { label: "Faire face aux discriminations", target: "discrimination" },
  { label: "Ressources & soutien", target: "ressources" },
];

const ressourcesSpecifiques = [
  {
    link: "https://www.mag-jeunes.org/",
    imageSrc: "/assets/mag.png",
    label: "MAG Jeunes LGBT+",
    description: "Écoute, entraide & événements pour jeunes LGBT+",
  },
  {
    link: "https://www.asso-contact.org/pmex/gep",
    imageSrc: "/assets/contact.png",
    label: "Contact",
    description: "Dialogue familles & personnes LGBT+, groupes de parole",
  },
  {
    link: "https://www.le-refuge.org/",
    imageSrc: "/assets/refuge_logo.png",
    label: "Le Refuge",
    description: "Soutien & hébergement d'urgence pour jeunes LGBT+",
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
    description: "Etudier, vivre, sortir et s'impliquer comme étudiant à Lyon"
  },
  {
    link: "https://www.universite-lyon.fr/vie-des-campus/vie-etudiante/nos-portails-sante-et-aides-etudiantes/",
    imageSrc: "/assets/logo_UDL.png",
    label: "Portails Santé et Aides de l'UDL",
    description : "Toutes les informations, dispositifs et procédures"
  },
  {
    link: "https://commentonsaime.fr/",
    imageSrc: "/assets/logo-cosa.svg",
    label: "Comment on s'aime ?",
    description: "Pour se renseigner sur les relations amoureuses, amicales, familliales...",
  },
  {
    link: "https://www.crous-lyon.fr",
    imageSrc: "/assets/logo_crous.png",
    label: "Crous de Lyon",
    description: "Aides, accompagnement, logements, restauration, international...",
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Pour parler santé, sexualité, amour, mal être...",
  },
];

const Orientation = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Orientation sexuelle</h1>
      <Navbar links={navLinks} />

      <div id="definitions">
        <h1 className="titre">Définitions & repères</h1>
        <p className="texte">
          L’orientation sexuelle est l’attirance affective, romantique et/ou sexuelle qu’une personne peut ressentir envers d’autres personnes.
          Elle se distingue de l’identité de genre. Voici quelques repères pour mieux comprendre :
        </p>

        <BulletList
          items={[
            "Hétérosexualité : attirance envers un genre différent du sien",
            "Homosexualité : attirance envers le même genre",
            "Bisexualité : attirance envers plusieurs genres",
            "Asexualité : absence ou faible niveau d’attirance sexuelle",
            "Pansexualité : attirance indépendante du genre ou du sexe",
            "Questionnement : incertitude, exploration, évolution",
          ]}
        />

        <Quote text="On ne choisit pas son orientation, mais on choisit d'en être fier·e." />

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center", fontFamily: "sans-serif", marginTop: "2rem" }}>
          <div style={{ flex: "1 1 300px", background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ color: "#c62828", fontSize: "1.5rem", fontWeight: "bold" }}>1 étudiant·e sur 5</div>
            <div style={{ color: "#333", marginTop: "0.5rem" }}>ne se définit pas comme hétérosexuel·le</div>
            <div style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.3rem" }}>selon l’enquête IFOP 2023 chez les 18–25 ans</div>
          </div>
          <div style={{ flex: "1 1 300px", background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ color: "#c62828", fontSize: "1.5rem", fontWeight: "bold" }}>13,3%</div>
            <div style={{ color: "#333", marginTop: "0.5rem" }}>des élèves interrogé·es</div>
            <div style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.3rem" }}>ont subi des propos LGBTphobes sur le campus</div>
          </div>
        </div>
      </div>

      <Separateur />

      <div id="comingout">
        <h1 className="titre">Sortir du silence</h1>
        <TextImageRight
          text={
            <>
              Parler de son orientation n’est jamais une obligation. C’est un droit, pas un devoir. Ce que certain·es appellent "coming out" est souvent un chemin progressif : d’abord envers soi-même, puis peut-être envers les autres. Chaque parcours est unique.
              <br /><br />
              Ce qui aide :
              <ul>
                <li>Se sentir prêt·e, en sécurité, et soutenu·e</li>
                <li>S’entourer de personnes bienveillantes</li>
                <li>S’informer via des témoignages ou groupes de parole</li>
              </ul>
            </>
          }
        />
        <YouTubeVideo url="https://www.youtube.com/watch?v=GElYZjClx9Y" />
      </div>

      <Separateur />

      <div id="discrimination">
        <h1 className="titre">Faire face aux discriminations</h1>
        <p className="texte">
          Les propos ou actes LGBTphobes (moqueries, remarques, exclusions…) peuvent blesser durablement. À Centrale, ces comportements n’ont pas leur place. Voici quoi faire en cas de problème :
        </p>

        <BulletList
          items={[
            "En parler à un·e référent·e (vie étudiante, tuteur·rice, assos) ou à un pair de confiance",
            "Documenter les faits (captures, messages, témoins)",
            "Contacter une structure externe si besoin (Le Refuge, Fil Santé Jeunes, associations locales)"
          ]}
        />

        <Quote text="Ton orientation n’est pas un sujet de débat, c’est une part de toi." />
      </div>

      <Separateur />

      <div id="ressources">
        <h1 className="titre">Ressources & soutien</h1>

        <ExternalLinkBlock
          title="Associations spécialisées"
          subtitle="Accueil, soutien, groupes de parole et écoute LGBT+"
          resources={ressourcesSpecifiques}
        />

        <ExternalLinkBlock
          title="Sites généralistes utiles"
          subtitle="Ces portails regroupent aides étudiantes, infos santé et droits"
          resources={resources_sites}
        />

        <ContactCard
          image="/assets/nightline_logo.png"
          title="Nightline Lyon"
          subtitle="Écoute nocturne gratuite pour les étudiant·es"
          phone="04 85 30 00 10"
          email=""
          hours="Tous les soirs de 21h à 2h30"
          textButton="Voir le site web"
          link="https://www.nightline.fr/lyon"
        />

        <ContactCard
          image="/assets/fsj.png"
          title="Fil Santé Jeunes"
          subtitle="Écoute anonyme et gratuite pour les 12–25 ans"
          phone="0 800 235 236"
          email=""
          hours="Tous les jours de 9h à 23h"
          textButton="Voir le site web"
          link="https://www.filsantejeunes.com/"
        />
      </div>

      <Separateur />

      <p className="texte">
        <em>
          <b>Sources :</b> IFOP 2023, SOS Homophobie, MAG Jeunes, Le Refuge, État de l’art Centrale Lyon
        </em>
      </p>
    </div>
  );
};

export default Orientation;
