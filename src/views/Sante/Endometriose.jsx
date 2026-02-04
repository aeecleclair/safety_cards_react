"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ListeNumerotee from "@/components/Listes";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Sante/Endometriose/_fr";
import en from "@/locales/Sante/Endometriose/_en";

const dict = { fr, en };

const Endometriose = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>

      <Sommaire links={t.navLinks} />

      <div id="douleurs">
        <h1 className="titre">{t.sectionDouleursTitle}</h1>
      </div>

      <div id="resume-details">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.douleursIntro }}
        />
      </div>

      <ImageTextPopup
        image={t.carte3Coeur.image}
        title={t.carte3Coeur.title}
        shortText={t.carte3Coeur.shortText}
        longText={t.carte3Coeur.longText}
        textButton={t.carte3Coeur.buttonText}
      />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.douleursText1 }}
      />

      <BulletList items={t.pathologiesList} />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.douleursText2 }}
      />

      <Separateur />

      <div id="definition">
        <h1 className="titre">{t.sectionDefinitionTitle}</h1>
      </div>

      <div id="resume-conseils">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.definitionIntro }}
        />
      </div>

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.definitionText }}
      />

      <ChiffresGroup chiffres={t.chiffres} />

      <h2 className="sous-titre-2">{t.signesTitle}</h2>
      <BulletList items={t.signesList} />

      <YouTubeVideo url={t.videoUrl} />

      <Separateur />

      <div id="temoignages">
        <h1 className="titre">{t.sectionTemoinTitle}</h1>
      </div>

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.temoinIntro }}
      />

      <div className="column">
        <ContactCard {...t.contactPlanningFamilial} />
      </div>

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.precariteText }}
      />

      <ExternalLinkBlock resources={t.resourcesPrecarite} />

      <ExternalLinkBlock
        title={t.resourcesTitle}
        subtitle={t.resourcesSubtitle}
        resources={t.resources}
      />

      <Separateur />

      <div id="aidant">
        <h1 className="titre">{t.sectionAidantTitle}</h1>
      </div>

      <p className="texte">{t.aidantIntro}</p>

      <ListeNumerotee
        title={t.aidantPlanTitle}
        items={t.aidantPlan}
      />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.aidantOutro }}
      />

      <Separateur />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.sources }}
      />
    </div>
  );
};

export default Endometriose;
