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
import fr from "@/locales/Sexe-amour/Revenge-porn/_fr";
import en from "@/locales/Sexe-amour/Revenge-porn/_en";

const dict = { fr, en };

const Revenge_porn = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="revenge">
        <h1 className="titre">{t.revengeTitle}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.revengeIntro }} />
      </div>

      <ImageTextPopup
        image={t.carteRoiCoeur.image}
        title={t.carteRoiCoeur.title}
        shortText={t.carteRoiCoeur.shortText}
        longText={t.carteRoiCoeur.longText}
        textButton={t.carteRoiCoeur.textButton}
      />

      <h2 className="sous-titre-2">{t.detailsTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.detailsText }} />

      <ChiffresGroup chiffres={t.chiffres} />

      <ExternalLinkBlock
        title={t.resourcesInfosTitle}
        subtitle={t.resourcesInfosSubtitle}
        resources={t.resourcesInfos}
      />

      <h2 className="sous-titre-2">{t.accessTitle}</h2>
      <p>{t.accessIntro}</p>
      <BulletList items={t.accessList} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.reactViteNote }} />

      <h2 className="sous-titre-2">{t.conseilsImpactTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.conseilsImpactIntro }} />
      <BulletList items={t.conseilsImpactList} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.consentNote }} />
      <YouTubeVideo url="https://www.youtube.com/watch?v=t2b3Id8nSM0" />

      <Separateur />

      <div id="victime">
        <h1 className="titre">{t.victimeTitle}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.victimeIntro }} />
      </div>

      <h2 className="sous-titre-2">{t.commentReagirTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.commentReagirText }} />
      
      <ContactCard {...t.contactNightline} />
      <ContactCard {...t.contactFranceVictimes} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.preuvesIntro }} />
      <BulletList items={t.preuvesList} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.preuvesNote }} />

      <h2 className="sous-titre-2">{t.retraitTitle}</h2>
      <TextImageRight
        text={<span dangerouslySetInnerHTML={{ __html: t.retraitDirect }} />}
        imageSrc="/assets/justice.png"
      />
      
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.signalementRS }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.outilsRetrait }} />

      <ContactCard {...t.contact3018} />
      <ExternalLinkBlock resources={t.resourcesNCII} />

      <h2 className="sous-titre-2">{t.plainteTitle}</h2>
      <Quote text={t.loiQuote.text} author={t.loiQuote.author} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.plainteText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.plainteText2 }} />

      <ExternalLinkBlock resources={t.resourcesVictime} />

      <Separateur />
      
      <div id="aidant">
        <h1 className="titre">{t.aidantTitle}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.aidantIntro }} />
      </div>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aidantText1 }} />
      <ExternalLinkBlock resources={t.resourcePharos} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aidantText2 }} />

      <ExternalLinkBlock title={t.assocTitle} resources={t.resourcesAssoc} />

      <Separateur />
      <p className="texte"><em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}</em></p>
    </div>
  );
};

export default Revenge_porn;