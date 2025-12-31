"use client";

import React from "react";
import "../App.css";

import Quote from "../components/Citation"; 
import ImageTextPopup from "../components/Cartes"; 
import ListeNumerotee from "../components/Listes";
import ExternalLinkBlock from "../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../components/Common";
import ContactCard from "../components/Contact";
import Separateur from "../components/Separateur";
import { Chiffre, ChiffresGroup } from "../components/Chiffres";
import RandomPageSelector from "../components/Randompage";
import PreviewBanner from "../components/PreviewBanner";
import { useLanguage } from "../LanguageProvider";
import fr from "./Home/fr";
import en from "./Home/en";

const Home = () => {
  const { lang } = useLanguage();
  const dict = { fr, en };
  const t = dict[lang] || fr;

  const resources_contacts = t.contacts;
  const resources_sites = t.sites;
  return (
    <div className = "page">


  <h1 className="titre-page">{t.titleWelcomePrefix} <span style={{ color: "#b22133" }}>{t.titleBrand}</span></h1>

  <p className="texte">{t.introLine1} <br/> {t.introLine2}
  <br/> <em>{t.introEmphasis}</em></p>

      
      <h1 className = "titre">{t.randomTitle}</h1>
      <RandomPageSelector />

      <h1 className = "titre">{t.contactsTitle}</h1>
      <ExternalLinkBlock
        subtitle={t.contactsSubtitle}
        resources={resources_contacts}
      />

      <h1 className = "titre">{t.resourcesTitle}</h1>
      <ExternalLinkBlock
        subtitle={t.resourcesSubtitle}
        resources={resources_sites}
      />
    
      

    </div>
  );
};

export default Home;