import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { Navbar, BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";



const navLinks = [
  { label: "Le problème", target: "probleme" },
  { label: "Prévention", target: "prevention" },
  { label: "Stages", target: "stages" },
  { label: "Ressources", target: "ressources" }
];

const chiffresCirculation = [
  { number: "531", title: "jeunes tués", description: "sur la route en 2024 (18-24 ans)" },
  { number: "44%", title: "des accidents mortels", description: "chez les jeunes sont dus à la vitesse" },
  { number: "29%", title: "ont failli s'endormir", description: "au volant avant 24 ans" },
  { number: "3 431", title: "morts sur les routes", description: "en 2024 tous âges confondus (France entière)" },
  { number: "12%", title: "des conducteurs impliqués", description: "dans un accident mortel ont pris des stupéfiants" }
];

const causesAccidents = [
  "Vitesse excessive (1ère cause d'accident chez les jeunes)",
  "Conduite sous alcool ou stupéfiants",
  "Fatigue et somnolence (surtout la nuit et sur autoroute)",
  "Utilisation du téléphone au volant",
  "Manque d'expérience ou surestimation de ses capacités",
  "Refus de priorité, non-respect du Code de la route",
  "Conditions météorologiques (pluie, verglas)",
  "Mauvais état des routes secondaires",
  "Défaut d’équipement ou absence de ceinture de sécurité",
  "Conduite de deux-roues sans protection adaptée"
];

const conseilsPrevention = [
  {
    title: "Ne jamais conduire sous l'emprise d'alcool ou de drogues",
    subtitle: "Le seuil légal est de 0,2 g/L pour les jeunes conducteurs (permis probatoire), soit une seule boisson alcoolisée. Sanction : retrait de 6 points, amende jusqu'à 4 500 €, suspension de permis. Voir l'article R234-1 du Code de la route."
  },
  {
    title: "Limiter les trajets de nuit ou longs trajets sans pause",
    subtitle: "17h de veille équivalent à 0,5g/L d'alcool dans le sang. Faites une pause toutes les 2 heures minimum."
  },
  {
    title: "Ne touchez jamais votre téléphone",
    subtitle: "Utiliser son téléphone en conduisant multiplie par 3 le risque d’accident. SMS = risque x 23."
  },
  {
    title: "Respecter toutes les limitations de vitesse",
    subtitle: "Sur route, la vitesse excessive reste la principale cause de mortalité, surtout chez les jeunes hommes."
  },
  {
    title: "Conduire bien reposé",
    subtitle: "29 % des jeunes conducteurs déclarent avoir déjà failli s'endormir au volant."
  },
  {
    title: "Éviter les effets de groupe",
    subtitle: "Dans une voiture pleine, avec des amis, on prend plus de risques sans s’en rendre compte. Soyez celui/celle qui dit stop."
  },
  {
    title: "Portez toujours la ceinture",
    subtitle: "1 personne tuée sur 5 ne portait pas de ceinture de sécurité."
  }
];

const ressourcesUtiles = [
  {
    link: "https://www.securite-routiere.gouv.fr/les-medias/nos-campagnes-de-communication",
    label: "Campagnes de prévention",
    description: "Les vidéos et affiches officielles de la sécurité routière"
  },
  {
    link: "https://www.youtube.com/watch?v=cIybaOWeJlU",
    label: "Vidéo - Au revoir Maman",
    description: "Une campagne choc sur les conséquences de la vitesse"
  },
  {
    link: "https://www.facebook.com/SamLeConducteurEngage",
    label: "Sam, le conducteur désigné",
    description: "Suivez-le sur Facebook pour ses conseils pratiques"
  },
  {
    link: "https://www.onisr.securite-routiere.gouv.fr/sites/default/files/2025-01/2025%2001%2030_ONISR_Accidentalit%C3%A9_Bilan_provisoire_2024_v8ter.pdf",
    label: "Chiffres 2024 – Sécurité routière",
    description: "Bilan complet des accidents en France"
  }
];

const stagesUtiles = [
  {
    link: "https://www.permisapoints.fr/stage-recuperation-points/",
    label: "Stage de récupération de points",
    description: "Permet de récupérer jusqu'à 4 points sur le permis de conduire. Durée : 2 jours. Accessible une fois par an."
  },
  {
    link: "https://www.service-public.fr/particuliers/vosdroits/F14208",
    label: "Stage de sensibilisation à la sécurité routière",
    description: "Obligatoire dans certains cas (décision judiciaire, composition pénale). Ne permet pas de récupérer des points."
  },
  {
    link: "https://www.actua-formation.fr/solutions/formation/conduite-hivernale/?gad_source=1&gad_campaignid=22226608776&gclid=Cj0KCQjw9O_BBhCUARIsAHQMjS59Nn2Eq0SOANFzjgxiyiWKGFDUfv36vGYJ58ZGwrGX7zcLIvoDfJcaAlkJEALw_wcB",
    label: "Stage de conduite sur neige et glace",
    description: "Formation pratique pour apprendre à maîtriser son véhicule en conditions hivernales."
  },
  {
    link: "https://gsformation.fr/parcours-alcool-au-volant-avec-karting/#",
    label: "Atelier de sensibilisation à l'alcool au volant",
    description: "Expérience pratique pour comprendre les effets de l'alcool sur la conduite."
  }
];

const RisquesCirculation = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Accidents de la route</h1>

      <Navbar links={navLinks} />

      <div id="probleme">
        <h2 className="titre">Le problème</h2>
        <p className="texte">
          Les jeunes de 18 à 24 ans ne représentent que 8 % de la population française, mais comptent pour 17 % des tués sur la route. Le pic d’accidents mortels intervient entre 6 et 18 mois après l’obtention du permis, avec un pic critique au 3e trimestre. La combinaison vitesse, alcool, drogue et fatigue multiplie les risques.
        </p>
        <p className="texte">
          D'autres facteurs aggravants entrent en jeu : pression sociale entre amis, inexpérience, téléphone au volant ou conduite de nuit. À noter : les deux-roues représentent aussi une part importante des victimes chez les jeunes.
        </p>
        <BulletList items={causesAccidents} />
        <ChiffresGroup chiffres={chiffresCirculation} />
      </div>

      <Separateur />

      <div id="prevention">
        <h2 className="titre">Prévention</h2>

        <p className="texte">
          Adopter les bons réflexes peut sauver des vies. Conduire, c'est anticiper, s'adapter et renoncer au moindre doute. Être raisonnable, c’est être responsable pour soi et pour les autres.
        </p>

        {/* Encadré avec uniquement les titres des conseils */}
        <ListeNumerotee
          title="Conseils de sécurité routière"
          subtitle="À appliquer à chaque trajet"
          items={conseilsPrevention.map(({ title }) => ({ title }))}
        />

        {/* Développement détaillé de chaque conseil */}
        <div className="developpement-conseils">
          {/* 1 */}
          <h3>{conseilsPrevention[0].title}</h3>
          <p>
            Conduire sous l’emprise de l’alcool ou de drogues est extrêmement dangereux : cela altère les réflexes, la perception du danger et ralentit le temps de réaction.
          </p>
          <div className="legal-link-box">
            Risques légaux : Le seuil légal pour les jeunes conducteurs (permis probatoire) est de 0,2 g/L d’alcool dans le sang. En cas de dépassement, sanctions sévères : retrait de 6 points minimum, amende pouvant aller jusqu’à 4 500 €, suspension voire annulation du permis. 
            <br />
            <ExternalLinkBlock
              resources={[
                {
                  link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038954545/2023-05-01",
                  label: "Article R234-1 du Code de la route"
                }
              ]}
            />
          </div>

          {/* 2 */}
          <h3>{conseilsPrevention[1].title}</h3>
          <p>
            La fatigue est une cause majeure d’accidents, en particulier lors des trajets de nuit ou prolongés sans pause. La vigilance diminue fortement, augmentant le risque d’endormissement au volant.
          </p>
          <div className="legal-link-box">
            Risques légaux : En cas d’accident dû à une somnolence avérée, la responsabilité du conducteur peut être engagée, pouvant entraîner sanctions pénales et civile.
            <br />
            Conseil pratique : faites une pause toutes les 2 heures au minimum.
          </div>

          {/* 3 */}
          <h3>{conseilsPrevention[2].title}</h3>
          <p>
            Utiliser un téléphone en conduisant multiplie par 3 le risque d’accident, car cela détourne l’attention et réduit la capacité de réaction.
          </p>
          <div className="legal-link-box">
            Risques légaux : L’utilisation du téléphone au volant est interdite et sanctionnée par une amende de 135 € et un retrait de 3 points.
            <br />
            <ExternalLinkBlock
              resources={[
                {
                  link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041910422",
                  label: "Article R412-6-1 du Code de la route"
                }
              ]}
            />
          </div>

          {/* 4 */}
          <h3>{conseilsPrevention[3].title}</h3>
          <p>
            Le respect des limitations de vitesse est crucial car la vitesse excessive est la première cause de mortalité routière, notamment chez les jeunes conducteurs.
          </p>
          <div className="legal-link-box">
            Risques légaux : Dépasser la vitesse autorisée expose à des amendes, retraits de points, voire suspension du permis en cas de dépassement important.
            <br />
            <ExternalLinkBlock
              resources={[
                {
                  link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048533039",
                  label: "Article R413-14 du Code de la route"
                }
              ]}
            />
          </div>

          {/* 5 */}
          <h3>{conseilsPrevention[4].title}</h3>
          <p>
            La fatigue réduit la vigilance, augmente le temps de réaction et le risque d’endormissement au volant. 29 % des jeunes conducteurs ont déjà failli s’endormir.
          </p>
          <div className="legal-link-box">
            Risques légaux : En cas d’accident grave dû à la fatigue, la responsabilité peut être engagée. Il est important d’écouter son corps et de s’arrêter au besoin.
          </div>

          {/* 6 */}
          <h3>{conseilsPrevention[5].title}</h3>
          <p>
            En situation de groupe, les comportements à risque se multiplient souvent par mimétisme. Il est important de garder son jugement et savoir dire non aux excès.
          </p>
          <div className="legal-link-box">
            Risques légaux : Les infractions commises sous pression peuvent toujours entraîner des sanctions pénales et civiles.
          </div>

          {/* 7 */}
          <h3>{conseilsPrevention[6].title}</h3>
          <p>
            Le port de la ceinture de sécurité réduit fortement le risque de blessures graves en cas d’accident.
          </p>
          <div className="legal-link-box">
            Risques légaux : Ne pas porter sa ceinture est sanctionné par une amende de 135 € et un retrait de 3 points.
            <br />
            <ExternalLinkBlock
              resources={[
                {
                  link: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037411287",
                  label: "Article R412-1 du Code de la route"
                }
              ]}
            />
          </div>
        </div>
      </div>

      <Separateur />

      <div id="stages">
        <h2 className="titre">Stages de sensibilisation et perfectionnement</h2>

        <p className="texte">
          Participer à un stage peut sauver des points, améliorer ses réflexes et renforcer sa conscience des risques. Il existe plusieurs types de stages, adaptés à chaque besoin, qu’on soit jeune conducteur, contrevenant ou simplement soucieux de mieux maîtriser sa conduite.
        </p>

        <p className="texte">
          Les <b>stages de récupération de points</b> permettent de regagner jusqu’à 4 points sur le permis, en deux jours, sous certaines conditions. Ils sont accessibles une fois par an. Ces stages abordent la perception des risques, la vitesse, l’alcool, les drogues et les limites physiques du conducteur.
        </p>

        <p className="texte">
          Les <b>stages de sensibilisation à la sécurité routière</b>, eux, sont parfois <b>obligatoires</b> (sur décision judiciaire ou préfectorale) lorsqu'une infraction grave a été commise. Ils ne permettent pas de récupérer de points mais visent à éviter la récidive.
        </p>

        <p className="texte">
          Il existe aussi des <b>formations spécifiques</b> pour apprendre à conduire dans des conditions extrêmes (neige, verglas) ou pour simuler les effets de l’alcool sur la perception et les réflexes. Ces ateliers sont souvent proposés par des centres de formation ou des auto-écoles spécialisées.
        </p>

        <p className="texte">
          ➜ Pour s’inscrire, il suffit de consulter un centre agréé ou de passer par des plateformes spécialisées. Certains stages sont pris en charge partiellement par les assurances ou la justice.
        </p>

        <ExternalLinkBlock
          title="Formations disponibles"
          subtitle="Pour améliorer vos compétences et votre sécurité"
          resources={stagesUtiles}
        />
      </div>


      <Separateur />

      <div id="ressources">
        <h2 className="titre">Ressources utiles</h2>
        <ExternalLinkBlock
          title="Pour aller plus loin"
          subtitle="Des contenus pour mieux comprendre et sensibiliser"
          resources={ressourcesUtiles}
        />
      </div>


      <p className="texte source">
        <em><b>Sources :</b> ONISR (Rapport 2024), sécurité-routière.gouv.fr, Légifrance, Matmut, Direct Assurance, TF1 Info, France Info, DSR.</em>
      </p>
    </div>
  );
};

export default RisquesCirculation;
