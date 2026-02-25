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
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Sante/Deracinement/_fr";
import en from "@/locales/Sante/Deracinement/_en";

const dict = { fr, en };

const Deracinement = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

return (
    <div className="page">
      <h1 className="titre-page">{t.titlePage}</h1>
      <Sommaire links={t.navLinks} />

      {/* PARTIE 1 - COMPRENDRE */}
      <div id="comprendre">
        <h2 className="titre">{t.comprendreTitle}</h2>

        <ImageTextPopup
          image="/assets/cartes/10_carreau.png"
          title={t.popup.title}
          shortText={t.popup.shortText}
          longText={t.popup.longText}
          textButton={t.popup.button}
          suit="carreau"
        />

        <p className="texte">{t.comprendreIntro}</p>

        <BulletList items={t.comprendrePoints.map(point => {
          const [bold, rest] = point.split(':');
          return <><span className="font-bold">{bold}:</span>{rest}</>;
        })} />

        <p className="texte">{t.comprendreConclusion}</p>

        <ChiffresGroup chiffres={t.chiffresDeracinement} />

        <ContactCard
          image="/assets/nightline_logo.png" 
          {...t.cardNightline}
        />
        <ContactCard
          image="/assets/arhm.jpg"
          {...t.cardARHM}
          bgColor="#ffffff"
          textColor="#fa9020"
        />
      </div>

      <Separateur />

      {/* PARTIE 2 - SE FAIRE ACCOMPAGNER */}
      <div id="accompagnement">
        <h2 className="titre">{t.accompagnementTitle}</h2>
        <p className="texte">{t.accompagnementIntro}</p>

        <ContactCard
          image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
          {...t.cardInfirmerie}
          bgColor="#ffffff"
          textColor="#b22133"
        />

        <ExternalLinkBlock
          subtitle={t.equipeInterSubtitle}
          resources={t.resourcesEquipeInter}
        />

        <p>{t.isolementPrompt}</p>
        <ExternalLinkBlock resources={t.resourceIsolement} />

        <p className="texte">{t.crousText}</p>
        <ExternalLinkBlock resources={t.resourceCrous} />
        
        <p className="texte">{t.accompagnementConseil}</p>
      </div>

      <Separateur />

      {/* PARTIE 3 - SOUTENIR */}
      <div id="soutenir">
        <h2 className="titre">{t.soutenirTitle}</h2>
        <p className="texte">{t.soutenirIntro}</p>

        <ListeNumerotee items={t.itemsSoutien} />
        
        <p>{t.soutenirConclusion}</p>
      </div>

      <Separateur />

      <p className="texte">
        <em><b>Sources :</b> {t.sources}</em>
      </p>
    </div>
  );
};

export default Deracinement;