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
import fr from "@/locales/Sante/Sommeil/_fr";
import en from "@/locales/Sante/Sommeil/_en";

const dict = { fr, en };

const Sommeil = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>

      <Sommaire links={t.navLinks} />

      {/* ===================== COMPRENDRE LE SOMMEIL ===================== */}

      <div id="definition">
        <h1 className="titre">{t.sectionDefinitionTitle}</h1>
      </div>

      <div id="resume-conseils">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.definitionIntro }}
        />
      </div>

      <p className="texte">{t.phasesIntro}</p>

      <BulletList items={t.phasesList} />

      <ChiffresGroup chiffres={t.chiffres} />

      <h2 className="sous-titre-2">{t.importanceTitle}</h2>

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.importanceText }}
      />

      <BulletList items={t.consequencesList} />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.importanceOutro }}
      />

      <ExternalLinkBlock resources={t.ressources1} />

      <h2 className="sous-titre-2">{t.badSleepTitle}</h2>

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.badSleepText }}
      />

      <Separateur />

      {/* ===================== TROUBLES DU SOMMEIL ===================== */}

      <div id="troubles">
        <h1 className="titre">{t.sectionTroublesTitle}</h1>
      </div>

      <div id="resume-details">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.troublesIntro }}
        />
      </div>

      <ImageTextPopup
        image={t.carteSommeil.image}
        title={t.carteSommeil.title}
        shortText={t.carteSommeil.shortText}
        longText={t.carteSommeil.longText}
        textButton={t.carteSommeil.textButton}
        suit={t.carteSommeil.suit}
      />

      <h2 className="sous-titre-2">{t.fallAsleepTitle}</h2>

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.fallAsleepText1 }}
      />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.fallAsleepText2 }}
      />

      <ExternalLinkBlock resources={t.relatedLinks} />

      <h2 className="sous-titre-2">{t.troublesListTitle}</h2>

      <p className="texte">{t.troublesListIntro}</p>

      <BulletList items={t.troublesList} />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.drivingWarning }}
      />

      <ExternalLinkBlock resources={t.accidentLink} />

      <h2 className="sous-titre-2">{t.insomniaTypesTitle}</h2>

      <p
        className="mise-avant"
        dangerouslySetInnerHTML={{ __html: t.insomniaIntro }}
      />

      <BulletList items={t.insomniaTypes} />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.consultText }}
      />

      <h1 className="sous-titre-2">{t.needTalkTitle}</h1>

      <ContactCard
        image={t.contactInfirmary.image}
        title={t.contactInfirmary.title}
        subtitle={t.contactInfirmary.subtitle}
        phone={t.contactInfirmary.phone}
        email={t.contactInfirmary.email}
        hours={t.contactInfirmary.hours}
        textButton={t.contactInfirmary.textButton}
        link={t.contactInfirmary.link}
        bgColor={t.contactInfirmary.bgColor}
        textColor={t.contactInfirmary.textColor}
      />

      <ContactCard
        image={t.contactNightline.image}
        title={t.contactNightline.title}
        subtitle={t.contactNightline.subtitle}
        phone={t.contactNightline.phone}
        email={t.contactNightline.email}
        hours={t.contactNightline.hours}
        textButton={t.contactNightline.textButton}
        link={t.contactNightline.link}
      />

      <Separateur />

      {/* ===================== MAUVAIS RÉFLEXES ===================== */}

      <div id="mauvais-reflexes">
        <h1 className="titre">{t.badHabitsTitle}</h1>
      </div>

      <div id="resume-details">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.badHabitsIntro }}
        />
      </div>

      {t.badHabitsSections.map((section, index) => (
        <div key={index}>
          <h2 className="sous-titre-2">{section.title}</h2>
          <p
            className="texte"
            dangerouslySetInnerHTML={{ __html: section.text }}
          />
        </div>
      ))}

      <Separateur />

      {/* ===================== SOLUTIONS ===================== */}

      <div id="solutions">
        <h1 className="titre">{t.solutionsTitle}</h1>
      </div>

      <div id="resume-details">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.solutionsIntro }}
        />
      </div>

      <h2 className="sous-titre-2">{t.tipsTitle}</h2>

      <ListeNumerotee
        title={t.actionPlanTitle}
        items={t.actionPlanItems}
      />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.regularityText }}
      />

      <p className="texte">{t.resourcesIntro}</p>

      <ExternalLinkBlock resources={t.ressources} />

      <h2 className="sous-titre-2">{t.relaxTitle}</h2>

      <p className="texte">{t.relaxIntro}</p>

      <ListeNumerotee items={t.relaxItems} />

      <ExternalLinkBlock resources={t.relaxLink} />

      <Separateur />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.sources }}
      />
    </div>
  );
};

export default Sommeil;
