import React from "react";
import "../../App.css";

import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import Separateur from "../../components/Separateur";

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
        <p className="texte">
          Depuis 2024, le tri à la source des biodéchets est obligatoire. Cela concerne les déchets alimentaires et végétaux. Ils doivent être séparés pour être compostés ou méthanisés. En résidence universitaire, renseignez-vous sur les composteurs collectifs disponibles.
        </p>
        <BulletList
          items={[
            "Oui au compost : épluchures, marc de café, coquilles d'œuf, pain, fleurs fanées.",
            "Non au compost : plastique, métal, viande, poissons, carton coloré, huiles."
          ]}
        />
        <p className="texte">
          Certains campus comme Grenoble ont installé des composteurs collectifs, encadrés par des étudiants. Ils permettent de réduire les déchets tout en produisant un terreau naturel utile.
        </p>
        <ExternalLinkBlock
          resources={[
            {
              link: "https://www.ademe.fr/particuliers-eco-citoyens/dechets/compostage",
              label: "ADEME - Compostage",
              description: "Conseils pour bien trier et composter chez soi ou collectivement.",
              emoji: "♻️",
            },
          ]}
        />
      </div>

      <div id="jardin">
        <h1 className="titre">Jardins partagés et serres</h1>
        <p className="texte">
          Les jardins partagés sont des potagers gérés collectivement par les étudiants. Ils permettent de cultiver légumes et herbes sans pesticides, de renforcer le lien social et de favoriser la biodiversité. 
        </p>
        <p className="texte">
          Sur certains campus, ces jardins sont accessibles via les associations étudiantes ou les services de développement durable. Chacun peut y participer, même sans expérience.
        </p>
        <BulletList
          items={[
            "Production locale sans emballages.",
            "Apprentissage du jardinage bio.",
            "Création de compost sur place."
          ]}
        />
        <ExternalLinkBlock
          resources={[
            {
              link: "https://www.campusverts.fr/",
              label: "Campus Verts",
              description: "Réseau de jardins étudiants écologiques en France.",
              emoji: "🌱",
            },
          ]}
        />
      </div>

      <div id="viande">
        <h1 className="titre">Consommation de viande</h1>
        <p className="texte">
          L’élevage est responsable d’environ 14 % des émissions mondiales de gaz à effet de serre. Réduire sa consommation de viande, surtout rouge, est un levier écologique puissant. 
        </p>
        <BulletList
          items={[
            "Limiter la viande rouge à 500 g/semaine.",
            "Remplacer par œufs, légumineuses, tofu.",
            "Consommer local et de saison."
          ]}
        />
        <p className="texte">
          Même un ou deux repas végétariens par semaine ont un impact. Pensez aussi aux AMAP et paniers de producteurs pour des alternatives locales.
        </p>
        <ExternalLinkBlock
          resources={[
            {
              link: "https://www.reseau-amap.org/",
              label: "Réseau des AMAP",
              description: "Trouver une AMAP proche de votre campus.",
              emoji: "🥕",
            },
          ]}
        />
      </div>

      <div id="transport">
        <h1 className="titre">Transport</h1>
        <p className="texte">
          Les transports représentent 30 % des émissions françaises. Les trajets en train, bus ou covoiturage sont à privilégier par rapport à la voiture individuelle ou l’avion.
        </p>
        <BulletList
          items={[
            "Utiliser vélo et marche pour les trajets courts.",
            "Favoriser train, tram, bus et covoiturage.",
            "Limiter les vols internes et préférer la visioconférence."
          ]}
        />
        <ExternalLinkBlock
          resources={[
            {
              link: "https://agirpourlatransition.ademe.fr/particuliers/deplacements",
              label: "ADEME - Déplacements",
              description: "Choisir des mobilités plus sobres en carbone.",
              emoji: "🚲",
            },
          ]}
        />
      </div>

      <div id="numerique">
        <h1 className="titre">Numérique : streaming, Wi-Fi et IA</h1>
        <p className="texte">
          Le numérique n’est pas neutre : un smartphone émet ~85 kg CO₂ à la fabrication, et la vidéo représente 80 % du trafic Internet. L’IA et les requêtes lourdes ont aussi un coût énergétique important.
        </p>
        <BulletList
          items={[
            "Limiter la qualité du streaming (HD ou SD suffisent).",
            "Privilégier le Wi-Fi au réseau mobile.",
            "Éteindre sa box la nuit, supprimer fichiers inutiles.",
            "Prolonger la durée de vie de ses appareils."
          ]}
        />
        <ExternalLinkBlock
          resources={[
            {
              link: "https://www.greenit.fr/",
              label: "Green IT",
              description: "Mesurer et réduire l'empreinte environnementale du numérique.",
              emoji: "💻",
            },
          ]}
        />
      </div>

      <Separateur />

      <ExternalLinkBlock
        resources={[
          {
            link: "https://librairie.ademe.fr/",
            label: "Librairie ADEME",
            description: "Toutes les publications de l’ADEME sur la transition écologique.",
            emoji: "📚",
          },
          {
            link: "https://www.ecologie.gouv.fr/",
            label: "Ministère de la Transition écologique",
            description: "Politiques publiques et informations officielles.",
            emoji: "🏛️",
          },
        ]}
      />
    </div>
  );
};

export default DemarchesEcologiques;
