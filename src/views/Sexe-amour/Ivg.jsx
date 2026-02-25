"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { useLanguage } from "@/app/providers/LanguageProvider";

import fr from "@/locales/Sexe-amour/IVG/_fr.js";
import en from "@/locales/Sexe-amour/IVG/_en.js";

const dict = { fr, en };

const IVG = () => {
  const { lang } = useLanguage();
  const t = dict[lang] ?? fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.title}</h1>

      <Sommaire links={t.navLinks} />

      <div id="ivg">
        <h2 className="titre">{t.introTitle}</h2>

        <ImageTextPopup {...t.popup} suit="coeur" />

        <p className="texte">{t.introText}</p>

        <Quote text={t.quote.text} author={t.quote.author} />

        <ChiffresGroup chiffres={t.chiffres} />

        <p className="texte">{t.contraceptionText}</p>
        <ExternalLinkBlock resources={t.contraception} />

        <p className="texte">{t.questionSexText}</p>
        <ExternalLinkBlock resources={t.resources_questionsex} />
      </div>

      <Separateur />

      <div id="deroulement">
        <h2 className="titre">{t.deroulementTitle}</h2>

        <h3 className="sous-titre-2">{t.methodesTitle}</h3>
        <BulletList items={t.methodes} />

        <h3 className="sous-titre-2">{t.mineursTitle}</h3>
        <p className="texte">{t.mineursText}</p>

        <h3 className="sous-titre-2">{t.partenaireTitle}</h3>
        <p className="texte">{t.partenaireText1}</p>
        <p className="texte">{t.partenaireText2}</p>
        <p className="texte">{t.partenaireText3}</p>

        <h3 className="sous-titre-2">{t.parcoursTitle}</h3>
        <p className="texte">{t.parcoursIntro}</p>

        <ListeNumerotee
          title=""
          subtitle={t.parcoursSubtitle}
          items={t.parcoursSteps}
        />

        <p className="texte">{t.parcoursLinkText}</p>
        <ExternalLinkBlock resources={t.resources_etapes} />
      </div>

      <Separateur />

      <div id="aide">
        <h2 className="titre">{t.aideTitle}</h2>

        <p className="texte">{t.aideIntro}</p>

        <BulletList items={t.aideList1} />
        <ExternalLinkBlock resources={t.resources_infos} />
        <BulletList items={t.aideList2} />

        <h3 className="sous-titre-2">{t.suiviTitle}</h3>
        <p className="texte">{t.suiviText}</p>

        <h3 className="sous-titre-2">{t.adminTitle}</h3>
        <p className="texte">{t.adminText}</p>
      </div>

      <Separateur />

      <div id="contacts">
        <h2 className="titre">{t.contactsTitle}</h2>

        <p className="texte">{t.contactsIntro}</p>

        <h3 className="sous-titre-2">{t.hospitauxTitle}</h3>

        <ContactCard
          image="/assets/EdouardHerriot.jpg" 
          {...t.cardEdouartHerriot}
        />
        <ContactCard
          image="/assets/CroixRousse.jpg" 
          {...t.cardCroixRousse}
        />
        <ContactCard
          image="/assets/LyonSud.png" 
          {...t.cardLyonSud}
        />

        <p className="texte">{t.ecullyText}</p>
        <ExternalLinkBlock resources={t.localResources} />

      </div>

      <Separateur />

      <p className="texte">
        <em><b>{t.sourcesPrefix}</b> {t.sources}</em>
      </p>
    </div>
  );
};

export default IVG;