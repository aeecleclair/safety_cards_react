import React from "react";
import "../../App.css";
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";

const navLinks = [
  { label: "Comprendre la contraception", target: "definition" },
  { label: "Vivre sa sexualité", target: "sexualite" },
  { label: "Je suis concerné·e", target: "personne-concernee" },
  { label: "J'accompagne", target: "accompagnant" }
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
  "Contraception d'urgence (pilule du lendemain)"
];




const ressourcesGenerales = [
  {
    link: "https://www.onsexprime.fr/",
    imageSrc: "/assets/onsexprimepng-png.png",
    label: "On s'exprime",
    description: "Site de référence sur la sexualité des jeunes, par Santé publique France"
  },
  {
    link: "https://questionsexualite.fr/choisir-sa-contraception",
    imageSrc: "/assets/question_sexualite.png",
    label: "Choisir sa contraception",
    description: "Informations détaillées sur toutes les méthodes contraceptives"
  },
  {
    link: "https://www.questionsexualite.fr/",
    imageSrc: "/assets/question_sexualite.png",
    label: "Question Sexualité",
    description: "Réponses d'experts sur la santé sexuelle"
  },
  {
    link: "https://commentonsaime.fr/rubrique/ma-sexualite/sexualite-chill/",
    imageSrc: "/assets/commentonsaime.png",
    label: "Comment on s'aime",
    description: "Articles sur la sexualité avec un handicap, après une excision ou encore sur le porno."
  }
];

const ressourcesAide = [
  {
    link: "https://www.planning-familial.org/fr",
    imageSrc: "/assets/planning-familial.jpg",
    label: "Planning Familial",
    description: "Écoute, accompagnement, accès à la contraception et à l'IVG"
  },
  {
    link: "https://ivg.gouv.fr/",
    imageSrc: "/assets/min.png",
    label: "IVG.Gouv.fr",
    description: "Informations officielles sur l'interruption volontaire de grossesse"
  },
  {
    link: "https://www.filsantejeunes.com/",
    imageSrc: "/assets/fsj.png",
    label: "Fil Santé Jeunes",
    description: "Discuter anonymement avec des professionnel·le·s"
  }
];

const accompagnementInfos = [
  {
    title: "Écouter sans juger",
    subtitle: "Laisse la personne s'exprimer librement. Adopte une posture bienveillante, quel que soit le sujet (orientation, contraception, infection, IVG…)."
  },
  {
    title: "Respecter l'intimité",
    subtitle: "Tout le monde n'a pas envie d'en parler. Sois attentif·ve à la limite entre aider et s'imposer."
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


const autre_page = [
  {
    link: "/consent",
    emoji : "✅",
    label: "Consentement",
    description: "Qu'est-ce que le consentement ?"
  }
];

const page_ivg = [
  {
    link : "/ivg",
    emoji : "♀️",
    label : "IVG",
    description : "Tout savoir sur l'interruption volontaire de grossesse : démarches, accompagnement, droits."
  }
];

const page_ist = [
  {
    link : "/pratiques_sex",
    emoji : "⚠️",
    label : "IST",
    description : "Qu'est-ce qu'une IST ? Comment se faire dépister ?"
  }
];

const page_porno = [
  {
    link : "/add_porno",
    emoji : "🔞",
    label : "Addiction à la pornographie",
    description : "Quels sont les risques de la pornographie ?"
  },
  {
    link : "/sex_orient",
    emoji : "🏳️‍🌈",
    label : "Orientation sexuelle",
    description : "Quels sont les différentes orientations sexuelles ?"
  }
];

/*Provisoire : page non faite */

import Workinprogress from "../../components/WorkInProgress";

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
    link: "https://www.crous-lyon.fr ",
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

const Sexualite = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Sexualité & Contraception</h1>





      <Sommaire links={navLinks} />

      <div id="definition">
        <h1 className="titre">Comprendre la contraception</h1>
          <ImageTextPopup
          image="/assets/cartes/10_coeur.png"
          title="La carte 10♥"
          shortText="Un guide rapide pour explorer les options"
          longText="Besoin d'un point sur les méthodes de contraception existantes, leur efficacité, leurs avantages et leurs limites ? Tu te poses des questions sur ta sexualité ? Cette page et cette carte sont idéal pour démarrer un échange sans jugement et sans tabou !"
          textButton="⤢ Voir la carte"
        />

        <p className="texte">
            La sexualité fait partie intégrante de la santé et du bien-être. Elle concerne le plaisir, le respect, les émotions, l’intimité et la responsabilité.  
            La <b>contraception</b> a pour but d’éviter une grossesse non désirée, de permettre à chacun·e de choisir <b>quand et si</b> il ou elle souhaite avoir un enfant.  
            Il n’existe pas de “meilleure” méthode universelle : chaque moyen a ses avantages, ses contraintes et son efficacité, qui dépendent du mode de vie, de la santé et des préférences personnelles.
          </p>

          <p className="texte">
            La contraception peut être <b>féminine</b>, <b>masculine</b>, <b>hormonale</b> ou <b>non hormonale</b>.  
            Certaines se prennent chaque jour, d’autres se posent pour plusieurs années.  
            Certaines protègent aussi des <b>infections sexuellement transmissibles (IST)</b> — notamment les préservatifs, qui restent indispensables pour les rapports sexuels avec de nouveaux partenaires. 
          </p>

          <p>
            Pour approfondir sur les IST :
          </p>
          
          <ExternalLinkBlock
            title=""
            subtitle=""
            resources={page_ist}
          />

          <h2 className="soustitre">Les principales méthodes contraceptives</h2>

          <BulletList items={[
            <><b>Préservatifs (masculin et féminin) :</b> barrières mécaniques à usage unique, ils empêchent le passage des spermatozoïdes et protègent des IST. Ils sont en vente libre et disponibles gratuitement pour les moins de 26 ans.</>,
            <><b>Pilule contraceptive :</b> comprimé hormonal à prendre chaque jour, elle bloque l’ovulation et rend la muqueuse utérine moins réceptive. Son efficacité dépend de la régularité de la prise.</>,
            <><b>Implant contraceptif :</b> petit bâtonnet placé sous la peau du bras, il diffuse une hormone en continu pendant 3 ans. Invisible et très efficace, il nécessite une pose et un retrait médical.</>,
            <><b>Anneau vaginal :</b> petit dispositif souple à insérer dans le vagin, libérant des hormones pendant 3 semaines avant une semaine d’arrêt. Il se change chaque mois.</>,
            <><b>Patch contraceptif :</b> timbre adhésif posé sur la peau, diffusant des hormones pendant 7 jours. Il se remplace chaque semaine pendant 3 semaines, avec une pause la 4ᵉ.</>,
            <><b>Stérilet (DIU) :</b> petit dispositif placé dans l’utérus par un·e professionnel·le de santé. Le DIU hormonal agit localement sur la muqueuse utérine, tandis que le DIU au cuivre empêche les spermatozoïdes de féconder l’ovule. Leur durée varie de 3 à 10 ans.</>,
            <><b>Injection contraceptive :</b> réalisée tous les 3 mois par un·e professionnel·le, elle bloque l’ovulation par un apport hormonal continu.</>,
            <><b>Méthodes naturelles :</b> observation du cycle, retrait, calendrier… Ces méthodes nécessitent une grande rigueur et sont grandement moins fiables que les autres. Elles ne protègent pas des IST.</>,
            <><b>Contraception d’urgence :</b> en cas de rapport à risque ou d’oubli, la pilule du lendemain peut être prise jusqu’à 3 à 5 jours après, de préférence le plus tôt possible. Elle ne remplace pas une méthode régulière.</>,
            <><b>Vasectomie et ligature des trompes :</b> interventions définitives (ou très difficilement réversibles) visant à empêcher la fécondation. Elles concernent les personnes sûres de leur choix de ne plus avoir d’enfant.</>
          ]} />

          <p className="texte">
            Parler contraception, c’est aussi parler de <b>liberté de choix</b> et de <b>partage des responsabilités</b>.  
            La contraception n’est pas qu’une affaire de femmes : elle concerne les couples et repose sur la confiance, la communication et le consentement.  
            Les professionnel·le·s de santé (médecin, gynécologue, sage-femme, infirmier·ère, pharmacien·ne) peuvent aider à trouver la méthode la plus adaptée à chaque situation.
          </p>

          <ExternalLinkBlock
            title=""
            subtitle=""
            resources={autre_page}
          />


          
          <h2 className="soustitre">Comparatif des méthodes contraceptives</h2>
          <div className="table-container">
            <table className="tableau">
              <thead>
                <tr>
                  <th>Méthode</th>
                  <th>Efficacité (usage typique)</th>
                  <th>Les +</th>
                  <th>Les -</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Préservatif masculin</td>
                  <td>85–98%</td>
                  <td>Protège des IST, en vente libre, immédiat</td>
                  <td>Peut se déchirer, dépend de l’utilisation correcte</td>
                </tr>
                <tr>
                  <td>Préservatif féminin</td>
                  <td>79–95%</td>
                  <td>Protège des IST, contrôle par la personne qui le porte</td>
                  <td>Moins connu, plus cher, demande de l’habitude</td>
                </tr>
                <tr>
                  <td>Pilule contraceptive</td>
                  <td>92%</td>
                  <td>Régule les cycles, soulage certaines douleurs de règles</td>
                  <td>Oubli = risque de grossesse, effets hormonaux possibles</td>
                </tr>
                <tr>
                  <td>Patch ou anneau vaginal</td>
                  <td>91–94%</td>
                  <td>Pas besoin d’y penser chaque jour</td>
                  <td>Effets hormonaux similaires à la pilule</td>
                </tr>
                <tr>
                  <td>Implant</td>
                  <td>99,9%</td>
                  <td>Discret, efficace 3 ans</td>
                  <td>Nécessite une pose médicale, parfois effets secondaires</td>
                </tr>
                <tr>
                  <td>Stérilet (DIU cuivre ou hormonal)</td>
                  <td>99%</td>
                  <td>Longue durée (3 à 10 ans), sans entretien</td>
                  <td>Douleurs à la pose possibles, pose par un·e professionnel·le</td>
                </tr>
                <tr>
                  <td>Injection contraceptive</td>
                  <td>94%</td>
                  <td>Une injection tous les 3 mois</td>
                  <td>Effets hormonaux, pas de retour immédiat à la fertilité</td>
                </tr>
                <tr>
                  <td>Pilule du lendemain</td>
                  <td>58–95%</td>
                  <td>Utilisable après un rapport à risque</td>
                  <td>Moins efficace si prise tardivement, contraception d’urgence</td>
                </tr>
              </tbody>
            </table>
          </div>
            <ChiffresGroup chiffres={chiffresSexualite} />

            <p>
              Parfois, malgré une contraception ou suite à un oubli, une grossesse non prévue peut survenir.
              Dans ce cas, il est essentiel de savoir que des solutions existent, dont l’interruption volontaire de grossesse (IVG).
              L’IVG est un droit garanti par la loi, accessible gratuitement et dans la confidentialité, accompagné par des professionnel·le·s de santé et des structures d’écoute comme le Planning Familial.
              Pour mieux comprendre les démarches, les délais et les différents types d’IVG, consulte notre page dédiée :
            </p>

            <ExternalLinkBlock
              title=""
              subtitle=""
              resources={page_ivg}
            />

            <ExternalLinkBlock
              title="Ressources pour aller plus loin"
              subtitle="Des sites fiables, pensés pour les jeunes"
              resources={ressourcesGenerales}
            />
          </div>

          <Separateur />
      <div id="sexualite">

          <h1 className="titre">Vivre sa sexualité</h1>

          <p className="texte">
            La sexualité ne se limite pas à la pénétration. Elle englobe un ensemble de pratiques, de désirs et d’expressions du plaisir, seul·e ou à plusieurs. 
            Chacun·e peut explorer sa sexualité à son rythme, selon ses envies et ses limites, dans le respect du consentement mutuel.
          </p>

          <p className="texte">
            Le <b>plaisir solo</b> (masturbation) est une pratique courante et saine : elle permet de mieux connaître son corps, de découvrir ce qui fait du bien, 
            et d’aborder plus sereinement la sexualité à deux. Il n’y a pas de “bonne” ou de “mauvaise” manière de se découvrir.
          </p>

          <p className="texte">
            Les <b>rapports sans pénétration</b> (caresses, baisers, frottements, échanges oraux, etc.) peuvent être tout aussi intimes et satisfaisants. 
            Ce sont des manières d’exprimer le désir sans forcément prendre de risques liés à une grossesse ou aux IST — 
            même si certaines pratiques nécessitent toujours une protection (préservatif ou digue dentaire pour le sexe oral par exemple).
          </p>

          <p className="texte">
            Le <b>porno</b> n’est pas un mode d’emploi : il montre des scénarios souvent irréalistes, centrés sur la performance plutôt que sur le plaisir partagé. 
            En vrai, la sexualité repose sur la communication, l’écoute, le respect et le consentement. 
            Personne ne doit se sentir obligé·e de faire ce qu’il ou elle ne souhaite pas.
          </p>

          <p className="texte">
            L’important, c’est d’apprendre à se connaître, à se respecter, et à s’assurer que chaque expérience se déroule dans le <b>consentement mutuel</b> et la <b>bienveillance</b>. 
            Chacun·e a le droit de dire non, de changer d’avis, ou de poser ses limites à tout moment.
          </p>

          <ExternalLinkBlock
            title=""
            subtitle=""
            resources={page_porno}
          />

      </div>


          <Separateur />

          <div id="personne-concernee">
            <h1 className="titre">Je suis concerné·e</h1>
            <p className="texte">
            Tu te poses des questions sur ta sexualité, ton orientation, tes pratiques, ou tu vis une situation particulière (grossesse, IST, IVG…) ? Tu n'es pas seul·e. Des professionnel·le·s formé·e·s sont là pour t'écouter, t'informer et t'accompagner sans jugement, à ton rythme.
            </p>

          <ContactCard
            image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png" 
            title="Infirmerie"
            subtitle="Infirmerie de Centrale Lyon"
            phone="Voir les informations"
            email="Voir les informations"
            hours="Lundi à jeudi : 7h30 - 15h30, Vendredi : 7h30 - 15h00 "
            textButton="Voir les informations"
            link="https://campus.ec-lyon.fr/infirmerie-medecine-du-travail-et-action-sociale-13245.kjsp?RH=1548411153990"

            bgColor="#ffffff"
            textColor="#b22133"
          />

          <ContactCard
            image="/assets/fsj.png"
            title="Fil Santé Jeunes"
            subtitle="Anonyme, gratuit et à l'écoute"
            phone="0 800 235 236"
            hours="7j/7, 9h-23h"
            textButton="Voir le site"
            link="https://www.filsantejeunes.com/"
          />

          <ContactCard
            image="/assets/planning-familial.jpg"
            title="Planning Familial"
            subtitle="Orientation, IVG, contraception"
            hours="Selon les centres"
            textButton="Trouver un centre"
            link="https://www.planning-familial.org/"
            bgColor="#ff5f63"
            textColor="#ffffff"
          />

          <div className="texte bloc-info">
            <h3>🛡️ Accès gratuit aux préservatifs</h3>
            <p>
              Des préservatifs sont disponibles gratuitement à l'infirmerie de Centrale Lyon : n'hésite pas à en demander, c'est confidentiel et sans jugement.
              Si tu as moins de 26 ans, tu peux également en obtenir gratuitement en pharmacie (internes et externes), sans ordonnance, grâce au dispositif de l'Assurance Maladie.
            </p>
          </div>

          <ExternalLinkBlock
            title="Besoin de plus d'infos ?"
            subtitle="Des professionnels répondent à toutes les questions"
            resources={ressourcesAide}
          />

      </div>

      <Separateur />

      <div id="accompagnant">
        <h1 className="titre">J'accompagne ou je suis témoin</h1>
        <p className="texte">
          Tu veux soutenir un·e ami·e, un·e proche dans une situation liée à sa sexualité ? Voici quelques réflexes pour accompagner sans juger ni imposer.
        </p>

        <ListeNumerotee
          title="Comment soutenir ?"
          subtitle="Posture et réflexes à adopter"
          items={accompagnementInfos}
        />
      </div>

      <p className="texte"><em><b>Sources :</b> Onsexprime.fr, Santé publique France, Planning Familial, QuestionSexualite.fr, ivg.gouv.fr</em></p>
    
    
      </div>
  );
};

export default Sexualite;



