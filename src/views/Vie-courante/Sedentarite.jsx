"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import ImageTextPopup from "@/components/Cartes";
import { BulletList } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-courante/Sedentarite/_fr.js";
import en from "@/locales/Vie-courante/Sedentarite/_en.js";


const dict = { fr, en };

const Sedentarite = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.titrePageSedentarite}</h1>

      <Sommaire links={t.navLinks} />

      <div id="sedentarite">
        <h1 className="titre">{t.sommaireSedentarite1}</h1>
      </div>

      <ImageTextPopup
        image="/assets/cartes/8_pique.png"
        title={t.carte8piqueTitle}
        shortText={t.carte8piqueShort}
        longText={t.carte8piqueLong}
        textButton={t.carte8piqueButton}
        suit="pique"
      />

      <p className="texte">{t.textDefinitionSedentarite}</p>

      <h2 className="sous-titre-2">{t.risquesTitre}</h2>
      <BulletList items={t.risquesList} />

      <p className="texte">{t.chiffresIntro}</p>
      <ChiffresGroup chiffres={t.chiffresSedentarite} />

      <ExternalLinkBlock resources={t.ressourcesInfos} />

      <Separateur />

      <div id="etudiant">
        <h1 className="titre">{t.sommaireSedentarite2}</h1>
      </div>

      <h2 className="sous-titre-2">{t.deconnexionTitre}</h2>
      <p className="texte">{t.deconnexionTexte}</p>

      <ExternalLinkBlock resources={t.ecrans} />

      <h2 className="sous-titre-2">{t.conseilsTitle}</h2>
      <ListeNumerotee
        title={t.conseilsTitle}
        subtitle={t.conseilsSubtitle}
        items={t.conseilsBouger}
      />

      <p className="texte">{t.recommandationOMSTexte}</p>

      <h2 className="sous-titre-2">{t.ideesActivitesTitre}</h2>
      <p className="texte">{t.ideesActivitesTexte}</p>

      <ExternalLinkBlock resources={t.resources_sortir} />

      <Separateur />

      <p className="texte">
        <em><b>Sources:</b> {t.sourcesSedentarite}</em>
      </p>
    </div>
  );
};

export default Sedentarite;