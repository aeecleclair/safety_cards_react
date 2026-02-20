"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, TextImageRight, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-groupe/Soumission-chimique/_fr";
import en from "@/locales/Vie-groupe/Soumission-chimique/_en";

const dict = { fr, en };
const Soumission_chimique = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="soumission">
        <h1 className="titre">{t.sectionDefinitionTitle}</h1>
      </div>

      <ImageTextPopup {...t.card} />

      <h2 className="sous-titre-2">{t.subtitleDeQuoiParle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.deQuoiParleText }} />

      <Quote text={t.quoteText} author={t.quoteAuthor} />

      <ExternalLinkBlock
        title={t.resourcesInfosTitle}
        subtitle={t.resourcesInfosSubtitle}
        resources={t.resourcesInfos}
      />

      <h2 className="sous-titre-2">{t.subtitleSymptomes}</h2>
      <p>{t.symptomesIntro}</p>
      <BulletList items={t.symptomesList} />
      <p>{t.symptomesAlerte}</p>
      <BulletList items={t.symptomesAlerteList} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.symptomesConclusion }} />

      <ContactCard {...t.crafsCard} />

      <h2 className="sous-titre-2">{t.subtitleConseils}</h2>
      <BulletList items={t.conseilsList} />
      <YouTubeVideo url={t.videoUrl} />

      <Separateur />

      <div id="victime">
        <h1 className="titre">{t.sectionVictimeTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.subtitleReagir}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.reagirText }} />

      <h2 className="sous-titre-2">{t.subtitleNumUrgence}</h2>
      <ChiffresGroup chiffres={t.chiffres} />

      <h2 className="sous-titre-2">{t.subtitleAgressions}</h2>
      <p className="texte">{t.agressionsText}</p>

      <ListeNumerotee
        title={t.agressionsListTitle}
        subtitle={t.agressionsListSubtitle}
        items={t.agressionsItems}
      />

      <ExternalLinkBlock resources={t.resourcesVictime} />

      <Separateur />

      <div id="aidant">
        <h1 className="titre">{t.sectionAidantTitle}</h1>
      </div>

      <p>
        <b>{t.aidantEnSoiree}</b>{" "}
        <span dangerouslySetInnerHTML={{ __html: t.aidantEnSoireeText }} />
      </p>
      <p dangerouslySetInnerHTML={{ __html: t.aidantText1 }} />
      <p dangerouslySetInnerHTML={{ __html: t.aidantText2 }} />
      <p>{t.aidantText3}</p>
      <p dangerouslySetInnerHTML={{ __html: t.aidantText4 }} />

      <ExternalLinkBlock resources={t.resourcesAidant} />

      <Separateur />

      <div id="organiser">
        <h1 className="titre">{t.sectionOrganiserTitle}</h1>
      </div>

      <TextImageRight
        text={<>{t.organiserText}</>}
        imageSrc={t.organiserImageSrc}
      />

      <ExternalLinkBlock resources={t.resourcesOrga} />

      <Separateur />

      <p className="texte">
        <em>
          <b>{t.sourcesPrefix}</b> {t.sources}
        </em>
      </p>
    </div>
  );
};

export default Soumission_chimique;