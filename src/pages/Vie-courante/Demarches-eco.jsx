import React from "react";
import "../../App.css";

import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, ImageCenter } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import Separateur from "../../components/Separateur";
import { image } from "framer-motion/client";
import ImageTextPopup from "../../components/Cartes";

const navLinks = [
  { label: "Tri et compost", target: "tri" },
  { label: "Jardins partagés", target: "jardin" },
  { label: "Consommation de viande", target: "viande" },
  { label: "Transport", target: "transport" },
  { label: "Numérique", target: "numerique" },
];

const DemarchesEcologiques = () => {
  return (
    <div className="page">
      <h1 className="titre-page">Démarches écologiques</h1>
      <Sommaire links={navLinks} />

      <div id="tri">
        <h1 className="titre">Tri des déchets et compostage</h1>

        <ImageTextPopup
          image="/assets/cartes/3_carreau.png"
          title="La carte 3♦"
          shortText="Découvre toutes les manières de réduire ton impact sur l'environnement."
          longText="Même à l'échelle individuelle, il existe de nombreuses manières concrètes de réduire son impact environnemental. Tu peux jouer sur ton alimentation, la gestion de tes déchets ou sur ton usage d'internet. Ces petits gestes comptent, même s'ils doivent aussi s'accompagner d'actions collectives et politiques pour être vraiment efficaces."
          textButton="⤢ Agrandir la carte"
          suit="carreau"
        />

        <p className="texte">
          Depuis 2024, le <b>tri à la source des déchets verts et alimentaires</b> est obligatoire. Ils doivent être séparés pour être compostés ou méthanisés. En résidence universitaire, renseignez-vous sur les composteurs collectifs disponibles.
        </p>
        <p className="texte">
          Au sein du campus de Centrale Lyon, tu disposes de nombreux points de tri sélectif. Des poubelles bleues sont aussi à disposition dans les salles de classe afin de trier le papier.        
          </p>

        <p className="texte"> Le tri des déchets est aussi réalisé en résidences (Comparat et Adoma). Des bacs à compost sont aussi mis à disposition des habitant·es, au bas des résidences de Comparat.</p>
        <ExternalLinkBlock
          resources={[
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
          ]}
        />
      </div>

      <div id="jardin">
        <h1 className="titre">Jardins partagés et serres</h1>
        <p className="texte">
          À Centrale Lyon, les jardins partagés sont situés au bas des bâtiments T et X. En y participant, tu peux <b>découvrir le jardinage ou transmettre tes connaissances</b>, le tout dans la bonne humeur ! C'est aussi l'occasion d'accéder à des formations mensuelles pour apprendre et partager de bons moments.
        </p>
        <p className="texte">
          Les jardins partagés sont gérés par l'association <b>Planet&Co</b>.
        </p>

        <ExternalLinkBlock
          resources={[
            {
              link: "https://www.instagram.com/planetandcoecl/",
              label: "Planet&Co - Instagram",
              description: "Association écologique de Centrale Lyon.",
              imageSrc: "/assets/planet-co.jpg",
            },
          ]}
        />
      </div>

      <div id="viande">
        <h1 className="titre">Consommation de viande</h1>
        <p className="texte">
          L’élevage est responsable d’environ 14 % des émissions mondiales de gaz à effet de serre. Réduire sa consommation de viande, surtout rouge, est un levier écologique puissant. 
        </p>

        <ImageCenter
          imageSrc="/assets/emissions_ges_nourriture.png"
          enlargeOnClick 
        />

        <p className="texte">
          Même un ou deux repas végétariens par semaine ont donc un impact. Pense aussi à l'AMAP, gérée par <b>Planet&Co</b>, qui te permet d'avoir des fruits et légumes locaux et de saison, du miel, du fromage et du pain chaque semaine. Tu peux réserver depuis l'application <b>MyECL</b>.
        </p>
        <ExternalLinkBlock
          resources={[
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
          ]}
        />
      </div>

      <div id="transport">
        <h1 className="titre">Transport</h1>
        <p className="texte">
          Les transports représentent plus de 30 % des émissions françaises. Les trajets en train, bus ou covoiturage sont à privilégier par rapport à la voiture individuelle ou l’avion.
        </p>

        <ImageCenter
          imageSrc="/assets/emissions_ges_secteurs.png"
          enlargeOnClick
        />

        <p className="texte">Dans ton quotidien, tu peux :</p>

        <BulletList
          items={[
            "Utiliser vélo et marche pour les trajets courts. Planet&Co loue des vélos dans ce but.",
            "Favoriser train, tram, bus (C6, 55 et 3 au départ de Centrale Lyon) et covoiturage.",
            "Préférer le train et la visioconférence pour les réunions professionnelles.",
          ]}
        />
        <ExternalLinkBlock
          resources={[
            {
              link: "https://impactco2.fr/outils/transport",
              label: "ADEME ",
              description: "Calcule l'empreinte carbone de tes déplacements et trouve des solutions pour la réduire !",
              imageSrc: "/assets/logo-ademe.svg",
            },
          ]}
        />
      </div>

      <div id="numerique">
        <h1 className="titre">Numérique : streaming, Wi-Fi et IA</h1>
        <p className="texte">
          Le numérique n’est pas neutre : un smartphone émet ~85 kg CO₂ à la fabrication, et le streaming représente 80 % du trafic Internet. L’IA et les requêtes lourdes ont aussi un coût énergétique important. Pour réduire ton impact numérique, tu peux :
        </p>
        <BulletList
          items={[
            "Limiter la qualité du streaming (HD ou SD suffisent).",
            "Privilégier le Wi-Fi au réseau mobile (la 4G consomme 23 fois plus d'énergie que le Wi-Fi).",
            "Éteindre sa box la nuit, supprimer fichiers inutiles.",
            "Limiter les requêtes IA (une requête textuelle consomme 6x plus qu'une recherche internet classique), surtout les requêtes lourdes (génération d'images et de vidéos).",
            "Prolonger la durée de vie de ses appareils : bien les entretenir, réparer plutôt que remplacer, acheter d'occasion ou reconditionné.",
          ]}
        />
        <ExternalLinkBlock
          resources={[
            {
              link: "https://agirpourlatransition.ademe.fr/particuliers/evaluer-son-impact/calculer-empreinte-carbone/calculez-empreinte-carbone-usages-numeriques",
              label: "ADEME",
              description: "Calcule l'empreinte carbone de tes usages numériques et découvre des conseils pour la réduire",
              imageSrc: "/assets/logo-ademe.svg",
            },

            {
              link: "https://agirpourlatransition.ademe.fr/particuliers/evaluer-son-impact/calculer-empreinte-carbone/calculez-empreinte-carbone-usages-numeriques",
              label: "Bien choisir ses appareils numériques",
              description: "pour réduire leur impact",
              imageSrc: "/assets/logo-ademe.svg",
            },
          ]}
        />
      </div>

      <Separateur />

      <p className="texte"><em><b>Sources :</b> ADEME, Ministère de la Transition écologique, Planet&Co, Matropole Grand Lyon</em></p>



    </div>
  );
};

export default DemarchesEcologiques;
