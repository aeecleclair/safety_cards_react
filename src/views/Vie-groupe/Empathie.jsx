"use client";


import React from "react";
import "@/src/App.css";

import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import Separateur from "@/components/Separateur";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/src/locales/Vie-groupe/empathie/_fr";
import en from "@/src/locales/Vie-groupe/empathie/_en";

const dict = { fr, en };


const Empathie = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="definition">
        <h1 className="titre">{t.definitionTitle}</h1>
        <ImageTextPopup {...t.card} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionText1 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionText2 }} />
      </div>

      <h2 className="sous-titre-2">{t.subtitleDeracinement}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.deracinementText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.deracinementText2 }} />
      <BulletList items={t.deracinementList} />
      <p className="texte">{t.deracinementText3}</p>
      <ExternalLinkBlock resources={t.deracinementLinks} />

      <h2 className="sous-titre-2">{t.subtitleHarcel}</h2>
      <p className="texte">{t.harcelText1}</p>
      <BulletList items={t.harcelList} />
      <p className="texte">{t.harcelText2}</p>
      <ExternalLinkBlock resources={t.harcelLinks} />

      <h2 className="sous-titre-2">{t.subtitleConfiance}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.confianceText1 }} />
      <BulletList items={t.confianceList} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.confianceText2 }} />
      <ExternalLinkBlock resources={t.confianceLinks} />

      <h2 className="sous-titre-2">{t.subtitleEcoute}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.ecouteText1 }} />
      <p className="texte">{t.ecouteText2}</p>
      <BulletList items={t.ecouteList} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.ecouteText3 }} />
      <ExternalLinkBlock resources={t.ecouteLinks} />

      <Separateur />

      <div id="developpement">
        <h1 className="titre">{t.developpementTitle}</h1>
      </div>

      <ListeNumerotee
        title={t.developpementListTitle}
        subtitle={t.developpementListSubtitle}
        items={t.developpementList}
      />

      <Separateur />

      <p className="texte">
        <em>
          {t.sources}
        </em>
      </p>
    </div>
  );
};

export default Empathie;
