// SportSante.jsx     UTILE : dangerouslySetInnerHTML={{ __html: t. }}
import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { BulletList, TextImageRight } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ImageTextPopup from "../../components/Cartes";

import { useLanguage } from "../../LanguageProvider";
import fr from "./Sante-Physique/fr.js";
import en from "./Sante-Physique/en.js"; // laissé vide/à remplir si nécessaire

const dict = { fr, en };

const SportSante = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      {/* --- TITRE + NAVIGATION --- */}
      <h1 className="titre-page">{t.Titlepage}</h1>
      <Sommaire links={t.navLinks} />

      {/* --- SECTION IMPORTANCE --- */}
      <div id="importance">
        <h2 className="titre">{t.importanceTitle}</h2>

        <ImageTextPopup
          image={t.carte5_pique.image}
          title={t.carte5_pique.title}
          shortText={t.carte5_pique.shortText}
          longText={t.carte5_pique.longText}
          textButton={t.carte5_pique.buttonText}
          suit={t.carte5_pique.suit}
        />

        <p className="texte">{t.importanceIntro}</p>

        <p className="texte">{t.importanceBeneficesIntro}</p>

        <BulletList items={t.importanceBeneficesList.map((s) => <span dangerouslySetInnerHTML={{ __html: s }} />)} />

        <p 
          className="texte" 
          dangerouslySetInnerHTML={{ __html: t.importanceInfra }}
        />

        <h3 className="sous-titre-2">{t.importanceEquilibreTitle}</h3>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.importanceEquilibre1 }}/>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.importanceEquilibre2 }}/>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.importanceEquilibre3 }}/>

        <ChiffresGroup chiffres={t.chiffres} />

        <ExternalLinkBlock
          title={t.infrastructuresTitle}
          subtitle={t.infrastructuresSubtitle}
          resources={t.infrastructuresLyon}
        />

        <p className="texte">{t.gestesQuotidiens}</p>

        <ListeNumerotee
          title={t.comparatifTitle}
          subtitle={t.comparatifSubtitle}
          items={t.comparatifItems}
        />
      </div>

      <Separateur />

      {/* --- OBSTACLES --- */}
      <div id="obstacles">
        <h2 className="titre">{t.obstaclesTitle}</h2>

        <p className="texte">{t.obstaclesIntro}</p>

        <ListeNumerotee
          title="Les freins principaux"
          subtitle="Obstacles rencontrés par les étudiant·e·s"
          items={t.obstaclesList}
        />

        <ExternalLinkBlock resources={t.barometres} />

        <p className="texte">{t.solutionsIntro}</p>

        <ListeNumerotee
          title="Des solutions adaptées"
          subtitle="Ce qui peut aider à reprendre ou maintenir une pratique"
          items={t.solutionsList}
        />

        <ExternalLinkBlock resources={t.vssResources} />

        <ContactCard
          image={t.cardInfirmerie.image}
          title={t.cardInfirmerie.title}
          subtitle={t.cardInfirmerie.subtitle}
          phone={t.cardInfirmerie.phone}
          email={t.cardInfirmerie.email}
          hours={t.cardInfirmerie.hours}
          textButton={t.cardInfirmerie.textButton}
          link={t.cardInfirmerie.link}
          bgColor={t.cardInfirmerie.bgColor}
          textColor={t.cardInfirmerie.textColor}
        />
      </div>

      <Separateur />

      {/* --- PREVENTION / BIEN-ETRE --- */}
      <div id="prevention">
        <h2 className="titre">{t.preventionTitle}</h2>

        <p className="texte">{t.preventionIntro}</p>

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.preventionSommeil }}/>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.preventionNutrition }}/>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.preventionDentaire }}/>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.preventionIsosteo }}/>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.preventionMobilite }}/>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.preventionRelaxation }}/>

        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.preventionResources}
        />

        <ContactCard
          image={t.cardIsosteo.image}
          title={t.cardIsosteo.title}
          subtitle={t.cardIsosteo.subtitle}
          phone={t.cardIsosteo.phone}
          email={t.cardIsosteo.email}
          hours={t.cardIsosteo.hours}
          textButton={t.cardIsosteo.textButton}
          link={t.cardIsosteo.link}
          bgColor={t.cardIsosteo.bgColor}
          textColor={t.cardIsosteo.textColor}
        />

        <p className="texte">{t.preventionConclusion}</p>
      </div>

      <Separateur />

      <p className="texte"><em><b>{t.sourcesPrefix}</b> {t.sources}</em></p>
    </div>
  );
};

export default SportSante;
