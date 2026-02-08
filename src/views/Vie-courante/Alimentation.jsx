"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, TextImageRight, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-courante/Alimentation/_fr";
import en from "@/locales/Vie-courante/Alimentation/_en";

const dict = { fr, en };

const Alimentation = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="habitudes">
        <h1 className="titre">{t.habitudesTitle}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.habitudesIntro }} />
      </div>

      <ImageTextPopup
        image={t.carteAsPique.image}
        title={t.carteAsPique.title}
        shortText={t.carteAsPique.shortText}
        longText={t.carteAsPique.longText}
        textButton={t.carteAsPique.textButton}
        suit="pique"
      />

      <h2 className="sous-titre-2">{t.desequilibreTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.desequilibreText }} />

      <ExternalLinkBlock resources={t.resourcesAmeli} />

      <h2 className="sous-titre-2">{t.grignoterTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.grignoterText }} />

      <h2 className="sous-titre-2">{t.sauterRepasTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sauterRepasText }} />

      <Quote text={t.quoteText} />      
      <h2 className="sous-titre-2">{t.chiffresTitle}</h2>
      <ChiffresGroup chiffres={t.chiffresData} />

      <h2 className="sous-titre-2">{t.risquesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.risquesIntro }} />
      <BulletList items={t.risquesList} />

      <ExternalLinkBlock resources={t.resourcesTCA} />

      <Separateur />

      <div id="solutions">
        <h1 className="titre">{t.solutionsTitle}</h1>
      </div>

      <div id="resume-conseils2">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.solutionsIntro }} />
      </div>

      <h2 className="sous-titre-2">{t.pourquoiSainTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.pourquoiSainIntro }} />
      <BulletList items={t.pourquoiSainList} />
      <p className="texte">{t.pourquoiSainNote}</p>
      
      <ExternalLinkBlock resources={t.resourcesStress} />

      <h2 className="sous-titre-2">{t.commentEquilibreTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.commentEquilibreIntro }} />

      <ListeNumerotee title={t.planActionTitle} items={t.itemsList} />

      <TextImageRight
        imageSrc="/assets/assiette.png"
        text={<span dangerouslySetInnerHTML={{ __html: t.textImagePlate }} />}
      />

      <ExternalLinkBlock resources={t.resourcesMangerBouger} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.amapText }} />

      <ExternalLinkBlock resources={t.resourcesSport} />

      <h2 className="sous-titre-2">{t.pasDeTempsTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.pasDeTempsText1 }} />
      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.pasDeTempsText2 }} />

      <h2 className="sous-titre-2">{t.pasDeMoyensTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.pasDeMoyensText }} />

      <ExternalLinkBlock resources={t.resourcesPrecarite} />

      <h2 className="sous-titre-2">{t.appTitle}</h2>
      <ExternalLinkBlock resources={t.appResources} />

      <Separateur />
      <p className="texte">
        <em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /></em> {t.sourcesList}
      </p>
    </div>
  );
};

export default Alimentation;