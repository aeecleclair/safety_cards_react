"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-courante/Précarité-économique/_fr";
import en from "@/locales/Vie-courante/Précarité-économique/_en";

const dict = { fr, en };

const PrecariteEconomique = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      {/* 1. Comprendre la précarité */}
      <div id="constat">
        <h1 className="titre">{t.comprendreTitle}</h1>
      </div>

      <ImageTextPopup
        image={t.carteValetCarreau.image}
        title={t.carteValetCarreau.title}
        shortText={t.carteValetCarreau.shortText}
        longText={t.carteValetCarreau.longText}
        textButton={t.carteValetCarreau.textButton}
        suit={t.carteValetCarreau.suit}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.comprendreIntro }} />

      <h2 className="sous-titre-2">{t.chiffresTitle}</h2>
      <ChiffresGroup chiffres={t.chiffresPrecarite} />

      <Separateur />

      {/* 2. Je suis en difficulté */}
      <div id="difficulte">
        <h1 className="titre">{t.difficulteTitle}</h1>
      </div>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.difficulteIntro }} />

      <ContactCard
        image={t.contactServiceSocial.image}
        title={t.contactServiceSocial.title}
        subtitle={t.contactServiceSocial.subtitle}
        textButton={t.contactServiceSocial.textButton}
        phone={t.contactServiceSocial.phone}
        email={t.contactServiceSocial.email}
        link={t.contactServiceSocial.link}
        bgColor={t.contactServiceSocial.bgColor}
        textColor={t.contactServiceSocial.textColor}
      />

      <p className="texte">{t.crousIntro}</p>

      <ContactCard
        image={t.contactCrous.image}
        title={t.contactCrous.title}
        subtitle={t.contactCrous.subtitle}
        textButton={t.contactCrous.textButton}
        link={t.contactCrous.link}
        bgColor={t.contactCrous.bgColor}
        textColor={t.contactCrous.textColor}
      />

      <h2 className="sous-titre-2">{t.parcoursTitle}</h2>
      <ListeNumerotee
        title={t.parcoursListTitle}
        subtitle={t.parcoursListSubtitle}
        items={t.items_parcours}
      />

      <Separateur />

      {/* 3. Les aides en détail */}
      <div id="détails">
        <h1 className="titre">{t.aidesTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.bourseCrousTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.bourseCrousText }} />
      <ExternalLinkBlock resources={t.bourse_crous} />

      <h2 className="sous-titre-2">{t.aideUrgenceTitle}</h2>
      <p className="texte">{t.aideUrgenceText}</p>

      <ContactCard
        image={t.contactAideUrgence.image}
        title={t.contactAideUrgence.title}
        subtitle={t.contactAideUrgence.subtitle}
        phone={t.contactAideUrgence.phone}
        textButton={t.contactAideUrgence.textButton}
        link={t.contactAideUrgence.link}
        bgColor={t.contactAideUrgence.bgColor}
        textColor={t.contactAideUrgence.textColor}
      />

      <h2 className="sous-titre-2">{t.aideLogementTitle}</h2>
      <p className="texte">{t.aideLogementText}</p>

      <YouTubeVideo url="https://www.youtube.com/watch?v=zWKHqGwHw1c" />

      <p className="texte">{t.visaleText}</p>
      <ExternalLinkBlock resources={t.aides_logement} />

      <h2 className="sous-titre-2">{t.aidesCentraleTitle}</h2>
      <BulletList items={t.aidesCentraleList} />
      <ExternalLinkBlock resources={t.aides_centrale} />

      <h2 className="sous-titre-2">{t.epicerieTitle}</h2>
      <p className="texte">{t.epicerieText1}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.epicerieText2 }} />
      <ExternalLinkBlock resources={t.epicerie} />

      <h2 className="sous-titre-2">{t.materielTitle}</h2>
      <p className="texte">{t.materielText}</p>
      <ExternalLinkBlock resources={t.eclair} />

      <h2 className="sous-titre-2">{t.jobsTitle}</h2>
      <p className="texte">{t.jobsText}</p>
      <ExternalLinkBlock resources={t.jobs} />

      <h2 className="sous-titre-2">{t.mobiliteTitle}</h2>
      <p className="texte">{t.mobiliteText}</p>
      <BulletList items={t.mobiliteList} />
      <ExternalLinkBlock resources={t.mobilite} />

      <Separateur />

      {/* 4. Témoin / proche */}
      <div id="temoin">
        <h1 className="titre">{t.temoinTitle}</h1>
      </div>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.temoinIntro }} />

      <BulletList items={t.temoinList} />

      <Separateur />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sources }} />
    </div>
  );
};

export default PrecariteEconomique;
