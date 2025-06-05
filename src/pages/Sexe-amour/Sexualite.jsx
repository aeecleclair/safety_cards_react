import React from "react";
import "../../App.css";
import "./Sexualite.css";

import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";


const navLinks = [
  { label: "Comprendre", target: "definition" },
  { label: "Je suis concerné·e", target: "personne-concernee" },
  { label: "J’accompagne", target: "accompagnant" }
];

const chiffresSexualite = [
  { number: "1/3", title: "Jeunes adultes", description: "n'ont jamais parlé de contraception avec un professionnel de santé" },
  { number: "70%", title: "Des grossesses non prévues", description: "concernent des femmes utilisant une contraception" },
  { number: "1/5", title: "Étudiant·e·s", description: "déclarent avoir eu un rapport sexuel non consenti" }
];

const contraceptionInfos = [
  "Préservatif masculin et féminin",
  "Pilule, patch, anneau vaginal",
  "Stérilet (DIU) hormonal ou en cuivre",
  "Implant, injection contraceptive",
  "Méthodes naturelles (moins fiables)",
  "Contraception d’urgence (pilule du lendemain)"
];

const ressourcesGenerales = [
  {
    link: "https://www.onsexprime.fr/",
    label: "On s'exprime",
    description: "Site de référence sur la sexualité des jeunes, par Santé publique France"
  },
  {
    link: "https://questionsexualite.fr/choisir-sa-contraception",
    label: "Choisir sa contraception",
    description: "Informations détaillées sur toutes les méthodes contraceptives"
  },
  {
    link: "https://www.questionsexualite.fr/",
    label: "Question Sexualité",
    description: "Réponses d’experts sur la santé sexuelle"
  }
];

const ressourcesAide = [
  {
    link: "https://www.planning-familial.org/fr",
    label: "Planning Familial",
    description: "Écoute, accompagnement, accès à la contraception et à l'IVG"
  },
  {
    link: "https://ivg.gouv.fr/",
    label: "IVG.Gouv.fr",
    description: "Informations officielles sur l'interruption volontaire de grossesse"
  },
  {
    link: "https://www.filsantejeunes.com/",
    label: "Fil Santé Jeunes",
    description: "Discuter anonymement avec des professionnel·le·s"
  }
];

const accompagnementInfos = [
  {
    title: "Écouter sans juger",
    subtitle: "Laisse la personne s’exprimer librement. Adopte une posture bienveillante, quel que soit le sujet (orientation, contraception, infection, IVG…)."
  },
  {
    title: "Respecter l’intimité",
    subtitle: "Tout le monde n’a pas envie d’en parler. Sois attentif·ve à la limite entre aider et s’imposer."
  },
  {
    title: "Informer avec des sources fiables",
    subtitle: "Redirige vers les bons interlocuteurs : planning familial, médecins, associations étudiantes formées."
  },
  {
    title: "Soutenir sans infantiliser",
    subtitle: "Respecte les choix et le rythme de la personne, même si tu ne ferais pas les mêmes."
  }
];

const Sexualite = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Sexualité & Contraception</h1>
      <Navbar links={navLinks} />

      <div id="definition">
        <h1 className="titre">Comprendre la sexualité et la contraception</h1>
        <p className="texte">
          La sexualité est une composante naturelle et intime de notre vie. S’informer sur les différentes pratiques, les moyens de contraception et la prévention permet de vivre une sexualité libre, respectueuse et responsable.
        </p>
        <BulletList items={contraceptionInfos} />

        <h2 className="soustitre">Comparatif des méthodes contraceptives</h2>
        <div className="table-container">
          <table className="contraception-table">
            <thead>
              <tr>
                <th>Méthode</th>
                <th>Efficacité (usage typique)</th>
                <th>Avantages</th>
                <th>Limites</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Préservatif masculin</td>
                <td>85-98%</td>
                <td>Protège des IST, en vente libre</td>
                <td>Peut glisser ou se déchirer</td>
              </tr>
              <tr>
                <td>Pilule contraceptive</td>
                <td>92%</td>
                <td>Régule les cycles, prise quotidienne</td>
                <td>Oubli = risque, effets secondaires</td>
              </tr>
              <tr>
                <td>Implant</td>
                <td>99,9%</td>
                <td>Durée 3 ans, sans entretien</td>
                <td>Pose médicale, effets possibles</td>
              </tr>
              <tr>
                <td>Stérilet (DIU) cuivre</td>
                <td>99%</td>
                <td>Longue durée (5–10 ans), sans hormones</td>
                <td>Douleurs possibles à la pose</td>
              </tr>
              <tr>
                <td>Pilule du lendemain</td>
                <td>58–95%</td>
                <td>Utilisable après un rapport à risque</td>
                <td>Moins efficace si prise tardive, contraception dite "d'urgence"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ChiffresGroup chiffres={chiffresSexualite} />
        <ExternalLinkBlock
          title="Ressources pour s’informer"
          subtitle="Des sites fiables, pensés pour les jeunes"
          resources={ressourcesGenerales}
        />
      </div>

      <Separateur />

      <div id="personne-concernee">
        <h1 className="titre">Je suis concerné·e</h1>
        <p className="texte">
        Tu te poses des questions sur ta sexualité, ton orientation, tes pratiques, ou tu vis une situation particulière (grossesse, IST, IVG…) ? Tu n’es pas seul·e. Des professionnel·le·s formé·e·s sont là pour t’écouter, t’informer et t’accompagner sans jugement, à ton rythme.
        </p>

        <ContactCard
          image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
          title="Infirmerie de Centrale Lyon"
          phone="Voir les informations"
          email="Voir les informations"
          hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00"
          textButton="Voir les informations"
          link="https://www.ec-lyon.fr/campus/campus-lyon-ecully/sante-et-prevention-centrale-lyon"
          bgColor="#ffffff"
          textColor="#b22133"
        />

        <div className="two-column-container">
          <div className="column">
            <ContactCard
              image="/assets/filsantejeunes.png"
              title="Fil Santé Jeunes"
              subtitle="Anonyme, gratuit et à l’écoute"
              phone="0 800 235 236"
              hours="7j/7, 9h-23h"
              textButton="Voir le site"
              link="https://www.filsantejeunes.com/"
            />
          </div>
          <div className="column">
            <ContactCard
              image="/assets/planning.png"
              title="Planning Familial"
              subtitle="Orientation, IVG, contraception"
              hours="Selon les centres"
              textButton="Trouver un centre"
              link="https://www.planning-familial.org/"
              bgColor="#ff5f63"
              textColor="#ffffff"
            />
          </div>
        </div>

        <div className="texte bloc-info">
          <h3>🛡️ Accès gratuit aux préservatifs</h3>
          <p>
            Des préservatifs sont disponibles gratuitement à l’infirmerie de Centrale Lyon : n’hésite pas à en demander, c’est confidentiel et sans jugement.
            Si tu as moins de 26 ans, tu peux également en obtenir gratuitement en pharmacie (internes et externes), sans ordonnance, grâce au dispositif de l’Assurance Maladie.
          </p>
        </div>

        
        <ExternalLinkBlock
          title="Besoin de plus d’infos ?"
          subtitle="Des professionnels répondent à toutes les questions"
          resources={ressourcesAide}
        />
      </div>

      <Separateur />

      <div id="accompagnant">
        <h1 className="titre">J’accompagne ou je suis témoin</h1>
        <p className="texte">
          Tu veux soutenir un·e ami·e, un·e proche dans une situation liée à sa sexualité ? Voici quelques réflexes pour accompagner sans juger ni imposer.
        </p>

        <ListeNumerotee
          title="Comment soutenir ?"
          subtitle="Posture et réflexes à adopter"
          items={accompagnementInfos}
        />

        <ImageTextPopup
          image="./assets/contraception-carte.jpg"
          title="La carte contraceptive"
          shortText="Un guide rapide pour explorer les options"
          longText="Cette carte récapitule les méthodes de contraception existantes, leur efficacité, leurs avantages et leurs limites. Idéal pour démarrer un échange sans tabou."
          textButton="⤢ Voir la carte"
        />
      </div>

      <p className="texte"><em><b>Sources :</b> Onsexprime.fr, Santé publique France, Planning Familial, INPES, QuestionSexualité.fr</em></p>
    </div>
  );
};

export default Sexualite;
