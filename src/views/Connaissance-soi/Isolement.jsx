"use client";

import React from "react";
import "@/src/App.css";

// --- Composants maison ---
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Connaissance-soi/Isolement/_fr.jsx";
import en from "@/locales/Connaissance-soi/Isolement/_en.jsx";


const dict = { fr, en };



const Isolement = () => {
  
  const { lang } = useLanguage();
  const t = dict[lang] || fr;
  return (
    <div className="page">
      {/* En-tête */}
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      {/* SECTION : Comprendre */}
      <div id="comprendre">
        <h1 className="titre">{t.understandTitle}</h1>

        <ImageTextPopup
          image={t.card.image}
          title={t.card.title}
          shortText={t.card.shortText}
          longText={t.card.longText}
          textButton={t.card.textButton}
          suit={t.card.suit}
        />


        <h2 className="sous-titre-2">{t.whyTitle}</h2>
        <BulletList items={t.whyBullets} />

        <ExternalLinkBlock resources={t.confResources} />

        <p className="texte">{t.studyNote}</p>
        <ChiffresGroup chiffres={t.chiffres} />
      </div>

      <h2 className="sous-titre-2">{t.feelAloneTitle}</h2>
      <p className="texte">{t.feelAloneText}</p>

      <ExternalLinkBlock resources={t.depressionResources} />


      <Separateur />

      <div id="rompre">
        <h1 className="titre">{t.breakTitle}</h1>
<p className="texte">{t.breakIntro}</p>

        <ListeNumerotee title={t.breakStepsTitle} items={t.breakSteps} />

        <ExternalLinkBlock
          title={t.socialTitle}
          subtitle={t.socialSubtitle}
          resources={t.socialResources}
        />
      </div>

      <Separateur />

      <div id="aide">
        <h1 className="titre">{t.helpTitle}</h1>
        <p className="texte">
          {t.helpIntro}
        </p>

        {t.helpContacts && t.helpContacts[0] && (
          <ContactCard
            image={t.helpContacts[0].image}
            title={t.helpContacts[0].title}
            subtitle={t.helpContacts[0].subtitle}
            phone={t.helpContacts[0].phone}
            hours={t.helpContacts[0].hours}
            textButton={t.helpContacts[0].textButton}
            link={t.helpContacts[0].link}
          />
        )}
        {t.helpContacts && t.helpContacts[1] && (
          <ContactCard
            image={t.helpContacts[1].image}
            title={t.helpContacts[1].title}
            subtitle={t.helpContacts[1].subtitle}
            phone={t.helpContacts[1].phone}
            hours={t.helpContacts[1].hours}
            textButton={t.helpContacts[1].textButton}
            link={t.helpContacts[1].link}
          />
        )}
      </div>
      <Separateur />

        <div id="aider">
      <h1 className="titre">{t.helpOthersTitle}</h1>
      </div>
      <p className="texte">{t.helpOthersIntro}</p>

      <BulletList items={t.helpOthersBullets} />

      <Separateur />

      <p className="texte">
        <em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}</em>
      </p>
    </div>
  );
};

export default Isolement;
