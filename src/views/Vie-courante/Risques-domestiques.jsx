"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { BulletList } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import { useLanguage } from "@/app/providers/LanguageProvider";

import fr from "@/locales/Vie-courante/Risques-domestiques/_fr.js";
import en from "@/locales/Vie-courante/Risques-domestiques/_en.js";

const dict = { fr, en };

const RisquesDomestiques = () => {
  const { lang } = useLanguage();
  const t = dict[lang] ?? fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.title}</h1>
      <Sommaire links={t.navLinks} />

      <div id="resume-conseils">
        <h2 className="titre">{t.resumeTitle}</h2>

        {t.conseilsUrgence.map((item, i) => (
          <p key={i} className="mise-avant">{item}</p>
        ))}
      </div>

      <div id="definition">
        <h1 className="titre">{t.definitionTitle}</h1>

        <ImageTextPopup {...t.popup} suit="trefle" />

        <p className="texte">{t.definitionText}</p>

        <BulletList items={t.typesRisques} />
        <ChiffresGroup chiffres={t.chiffres} />
      </div>

      <Separateur />

      <div id="prevention">
        <h1 className="titre">{t.preventionTitle}</h1>
        <p className="texte">{t.preventionIntro}</p>

        <ListeNumerotee
          title={t.preventionListTitle}
          subtitle={t.preventionListSubtitle}
          items={t.conseilsPrevention}
        />

        <ExternalLinkBlock
          title={t.ressourcesTitle}
          subtitle={t.ressourcesSubtitle}
          resources={t.ressourcesUtiles}
        />
      </div>

      <Separateur />

      <div id="urgence">
        <h1 className="titre">{t.urgenceTitle}</h1>

        <ExternalLinkBlock
          title={t.evacuationTitle}
          subtitle={t.evacuationSubtitle}
          resources={t.ressourcesFeu}
        />


        <p className="texte">{t.urgenceIntro}</p>


     
        <ContactCard
          image="/assets/18.png" 
          {...t.cardPompier}
        />
        <ContactCard
          image="/assets/15.png" 
          {...t.cardSAMU}
        />
        <ContactCard
          image="/assets/17.png" 
          {...t.cardPoliceSecours}
        />
        <ContactCard
          image="/assets/112.png" 
          {...t.cardNumeroEuropeen}
        />
        <ContactCard
          image="/assets/114.png" 
          {...t.cardSourdMalentendant}
        />
        <ContactCard
          image="/assets/CAP.jpg" 
          {...t.cardAntipoison}
        />
      </div>

      <p className="texte">
        <em><b>{t.sourcesPrefix}</b> {t.sources}</em>
      </p>
    </div>
  );
};

export default RisquesDomestiques;