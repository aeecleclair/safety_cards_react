"use client";

import React from "react";
import "@/src/App.css";

import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import Quote from "@/components/Citation";
import ListeNumerotee from "@/components/Listes";
import { ChiffresGroup } from "@/components/Chiffres";
import ImageTextPopup from "@/components/Cartes";
import { label } from "framer-motion/client";

import { useLanguage } from "../../LanguageProvider";
import fr from "./Couple/fr.jsx";
import en from "./Couple/en.jsx";

const dict = { fr, en };


const RelationsCouple = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="violences">
        <h1 className="titre">{t.violencesTitle}</h1>

        <ImageTextPopup
          image={t.card.image}
          title={t.card.title}
          shortText={t.card.shortText}
          longText={t.card.longText}
          textButton={t.card.textButton}
          suit={t.card.suit}
        />

        <p className="texte">{t.violenceIntro}</p>

        <ChiffresGroup chiffres={t.chiffres} />

        <h2 className="sous-titre-2">{t.formsTitle}</h2>

        <p className="texte">{t.formsIntro}</p>
        <BulletList items={t.formsBullets} />

        <ExternalLinkBlock resources={t.typesViolences} />

        <Quote text={t.violencesQuote} />

        <h2 className="sous-titre-2">{t.violenceVsConflictTitle}</h2>
        <p className="texte">{t.violenceVsConflictText}</p>

        <ExternalLinkBlock resources={t.violenceConflit} />

        <h2 className="sous-titre-2">{t.violenceCycleTitle}</h2>

        <ImageCenter imageSrc="/assets/cycle_violence.png" enlargeOnClick />

        <p className="texte">{t.violenceCycleText}</p>

        <ExternalLinkBlock resources={t.violentometre} />

        <h2 className="sous-titre-2">{t.helpTitle}</h2>
        <p className="texte">{t.helpIntro1}</p>
        <p className="texte">{t.helpIntro2}</p>

        {t.helpContact && (
          <ContactCard
            image={t.helpContact.image}
            title={t.helpContact.title}
            subtitle={t.helpContact.subtitle}
            hours={t.helpContact.hours}
            phone={t.helpContact.phone}
            textButton={t.helpContact.textButton}
            link={t.helpContact.link}
            bgColor={t.helpContact.bgColor}
            textColor={t.helpContact.textColor}
          />
        )}

        {t.additionalViolenceResources && (
          <ExternalLinkBlock resources={t.additionalViolenceResources} />
        )}
      </div>

      <Separateur />

      <div id="sexualite">
        <h1 className="titre">{t.sexualityTitle}</h1>

        <ListeNumerotee title={t.sexualityListTitle} items={t.sexualityListItems} />

        <ExternalLinkBlock resources={t.sexualityResources} />

        <Quote text={t.sexualityQuote} />
      </div>

      <Separateur />

      <div id="communication">
        <h1 className="titre">{t.communicationTitle}</h1>
        <p className="texte">{t.communicationIntro}</p>

        <ListeNumerotee
          title={t.communicationListTitle}
          items={t.communicationListItems}
        />
      </div>

      <Separateur />

      <p className="texte">
        <em>{t.sourcesText}</em>
      </p>
    </div>
  );
};

export default RelationsCouple;
