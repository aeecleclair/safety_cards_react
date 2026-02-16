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
import fr from "@/locales/Sexe-amour/Consentement/_fr";
import en from "@/locales/Sexe-amour/Consentement/_en";

const dict = { fr, en };

const Consentement = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="definition">
        <h1 className="titre">{t.definitionTitle}</h1>
      </div>

      <ImageTextPopup
        image={t.carte4Coeur.image}
        title={t.carte4Coeur.title}
        shortText={t.carte4Coeur.shortText}
        longText={t.carte4Coeur.longText}
        textButton={t.carte4Coeur.textButton}
        suit="coeur"
      />

      <h2 className="sous-titre-2">{t.chiffresTitle}</h2>
      <ChiffresGroup chiffres={t.chiffresConsentement} />

      <h2 className="sous-titre-2">{t.principesTitle}</h2>
      <ListeNumerotee 
        items={t.principesItems} 
        title={t.principesListTitle}
        subtitle={t.principesListSubtitle}
      />

      <ExternalLinkBlock resources={t.resourcesSalopettes} />

      <h2 className="sous-titre-2">{t.loiTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.loiText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.loiText2 }} />
      <ExternalLinkBlock resources={t.resourcesLoi} />

      <h2 className="sous-titre-2">{t.fauxOuiTitle}</h2>
      <BulletList items={t.fauxOuiList} />

      <Quote text={t.quoteText} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.coupleText }} />
      <ExternalLinkBlock resources={t.resourcesCouple} />

      <h2 className="sous-titre-2">{t.consentometreTitle}</h2>
      <p className="texte">{t.consentometreText}</p>
      <ExternalLinkBlock resources={t.resourcesConsentometre} />

      <YouTubeVideo url="https://www.youtube.com/watch?v=fGoWLWS4-kU" />

      <Separateur />

      <div id="victime">
        <h1 className="titre">{t.victimeTitle}</h1>
      </div>

      <p className="texte">{t.victimeText1}</p>

      <ContactCard
        image="/assets/arretons_violence.svg"
        title={t.contactGouv.title}
        subtitle={t.contactGouv.subtitle}
        hours={t.contactGouv.hours}
        phone={t.contactGouv.phone}
        textButton={t.contactGouv.textButton}
        link={t.contactGouv.link}
        bgColor="#ffffff"
        textColor="#CC3C32"
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.ecouteText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.ecouteText2 }} />
      
      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
        title={t.contactCellule.title}
        subtitle={t.contactCellule.subtitle}
        email={t.contactCellule.email}
        textButton={t.contactCellule.textButton}
        link={t.contactCellule.link}
        bgColor="#ffffff"  
        textColor="#b22133"
      />

      <ExternalLinkBlock resources={t.resourcesVSS} />

      <Separateur />

      <div id="ressources">
        <h1 className="titre">{t.ressourcesTitreSection}</h1>
      </div>

      <ExternalLinkBlock
        title={t.ressourcesUtilesTitle}
        subtitle={t.ressourcesUtilesSubtitle}
        resources={t.resourcesConsentis}
      />

      <p className="texte">{t.flyersIntro}</p>
      <ExternalLinkBlock resources={t.resourcesFlyers} />

      <Separateur />

      <p className="texte">
        <em>
          <b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}
        </em>
      </p>
    </div>
  );
};

export default Consentement;