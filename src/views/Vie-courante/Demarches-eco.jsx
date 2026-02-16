"use client";

import React from "react";
import "@/src/App.css";

import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, ImageCenter } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import Separateur from "@/components/Separateur";
import ImageTextPopup from "@/components/Cartes";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-courante/Demarches-ecologiques/_fr.js";
import en from "@/locales/Vie-courante/Demarches-ecologiques/_en.js";

const dict = { fr, en };

const DemarchesEcologiques = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="tri">
        <h1 className="titre">{t.triTitle}</h1>

        <ImageTextPopup
          image={t.carte3Carreau.image}
          title={t.carte3Carreau.title}
          shortText={t.carte3Carreau.shortText}
          longText={t.carte3Carreau.longText}
          textButton={t.carte3Carreau.textButton}
          suit="carreau"
        />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.triText1 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.triText2 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.triText3 }} />
        <ExternalLinkBlock resources={t.resourcesTri} />
      </div>

      <div id="jardin">
        <h1 className="titre">{t.jardinTitle}</h1>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.jardinText1 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.jardinText2 }} />
        <ExternalLinkBlock resources={t.resourcesJardin} />
      </div>

      <div id="viande">
        <h1 className="titre">{t.viandeTitle}</h1>
        <p className="texte">{t.viandeText1}</p>

        <ImageCenter
          imageSrc={t.viandeImageSrc}
          enlargeOnClick 
        />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.viandeText2 }} />
        <ExternalLinkBlock resources={t.resourcesViande} />
      </div>

      <div id="transport">
        <h1 className="titre">{t.transportTitle}</h1>
        <p className="texte">{t.transportText1}</p>

        <ImageCenter
          imageSrc={t.transportImageSrc}
          enlargeOnClick
        />

        <p className="texte">{t.transportText2}</p>

        <BulletList items={t.transportList} />
        <ExternalLinkBlock resources={t.resourcesTransport} />
      </div>

      <div id="numerique">
        <h1 className="titre">{t.numeriqueTitle}</h1>
        <p className="texte">{t.numeriqueText1}</p>
        <BulletList items={t.numeriqueList} />
        <ExternalLinkBlock resources={t.resourcesNumerique} />
      </div>

      <Separateur />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sourcesText }} />

    </div>
  );
};

export default DemarchesEcologiques;
