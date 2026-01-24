"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { BulletList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ImageTextPopup from "@/components/Cartes";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Risques-addictifs/Alcool/_fr";
import en from "@/locales/Risques-addictifs/Alcool/_en";

const dict = { fr, en };

const Alcool = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="soirees">
        <h1 className="titre">{t.section1Title}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.risque1 }} />
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.risque2 }} />
      </div>

      <ImageTextPopup
        image={t.carte6_trefle.image}
        title={t.carte6_trefle.title}
        shortText={t.carte6_trefle.shortText}
        longText={t.carte6_trefle.longText}
        textButton={t.carte6_trefle.buttonText}
        suit={t.carte6_trefle.suit}
      />

      <h2 className="sous-titre-2">{t.effetsTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.effetsText }} />
      <BulletList items={t.effetsList} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.possibleDrugged }} />
      <ExternalLinkBlock resources={t.resources4} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.banalisationText }} />
      <ChiffresGroup chiffres={t.data} />

      <h2 className="sous-titre-2">{t.risquesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.risqueMoi }} />
      <BulletList items={t.risqueMoiList} />
      <YouTubeVideo url={t.videoURL} />
      <Quote text={t.quote1} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.risqueAutres }} />
      <BulletList items={t.risqueAutresList} />

      <TextImageRight text={<div dangerouslySetInnerHTML={{ __html: t.textImageRight }} />} imageSrc={t.imageJustice} />

      <Separateur />

      <div id="conso">
        <h1 className="titre">{t.section2Title}</h1>
      </div>

      <div id="resume-conseils2">
        {t.consoIntro.map((p, i) => (
          <p key={i} className="mise-avant" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>

      <h1 className="sous-titre-2">{t.consoTitle}</h1>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.consoIntroText }} />
      <BulletList items={t.consoTips.map((item, i) => <span key={i} dangerouslySetInnerHTML={{ __html: item }} />)} />

      <ImageTextPopup
        image={t.carteRoi_trefle.image}
        title={t.carteRoi_trefle.title}
        shortText={t.carteRoi_trefle.shortText}
        longText={t.carteRoi_trefle.longText}
        textButton={t.carteRoi_trefle.buttonText}
        suit={t.carteRoi_trefle.suit}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.conduiteText }} />

      <h1 className="sous-titre-2">{t.bingeTitle}</h1>
      <Quote text={t.bingeQuote} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.bingeText }} />
      <ChiffresGroup chiffres={t.data2} />
      <ExternalLinkBlock resources={t.resources3} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.warningGlass }} />
      <ImageCenter imageSrc="/assets/doses-alcool.png" />

      <h1 className="sous-titre-2">{t.tooMuchTitle}</h1>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.tooMuchText }} />
      <ImageTextPopup
        image={t.carte3_trefle.image}
        title={t.carte3_trefle.title}
        shortText={t.carte3_trefle.shortText}
        longText={t.carte3_trefle.longText}
        textButton={t.carte3_trefle.buttonText}
        suit={t.carte3_trefle.suit}
      />
      <ListeNumerotee title={t.consumptionRefTitle} items={t.items2} />
      <ExternalLinkBlock title={t.consumptionHelpTitle} subtitle={t.consumptionHelpSubtitle} resources={t.resources2} />

      <h1 className="sous-titre-2">{t.needTalkTitle}</h1>
      <ContactCard {...t.contactNightline} />
      <ContactCard {...t.contactFSJ} />

      <Separateur />

      <div id="temoin">
        <h1 className="titre">{t.section3Title}</h1>
      </div>

      <div id="resume-conseils3">
        {t.temoinIntro.map((p, i) => (
          <p key={i} className="mise-avant" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>

      <h1 className="sous-titre-2">{t.helpTitle}</h1>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.helpIntro }} />
      <ListeNumerotee title={t.helpPlanTitle} items={t.items} />

      <h1 className="sous-titre-2">{t.helpTooMuchTitle}</h1>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.helpTooMuchIntro }} />
      <ListeNumerotee title={t.helpTooMuchPlanTitle} items={t.items3} />

      <Separateur />

      <div id="organiser">
        <h1 className="titre">{t.section4Title}</h1>
      </div>

      <TextImageRight text={<div dangerouslySetInnerHTML={{ __html: t.organiserText }} />} imageSrc={t.organiserImage} />
      <ExternalLinkBlock resources={t.resources} />

      <Separateur />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sources }} />
    </div>
  );
};

export default Alcool;
