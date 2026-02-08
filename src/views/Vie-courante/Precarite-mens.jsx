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
import fr from "@/locales/Vie-courante/Precarite-mens/_fr";
import en from "@/locales/Vie-courante/Precarite-mens/_en";

const dict = { fr, en };

const PrecariteMens = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      {/* Comprendre */}
      <div id="comprendre">
        <h1 className="titre">{t.comprendreTitle}</h1>
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.comprendreIntro }} />
        
        <ImageTextPopup
          image={t.carte2Coeur.image}
          title={t.carte2Coeur.title}
          shortText={t.carte2Coeur.shortText}
          longText={t.carte2Coeur.longText}
          textButton={t.carte2Coeur.textButton}
          suit="coeur"
        />
        
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionText }} />
      </div>

      <ChiffresGroup chiffres={t.chiffresData} />

      <h2 className="sous-titre-2">{t.consequencesTitle}</h2>
      <BulletList items={t.consequencesList} />

      <Separateur />

      {/* Risques */}
      <div id="risques">
        <h1 className="titre">{t.risquesTitle}</h1>
      </div>
      
      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.risquesIntro }} />
      
      <h2 className="sous-titre-2">{t.changerRegulierTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.changerRegulierText }} />
      
      <h2 className="sous-titre-2">{t.chocToxiqueTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.chocToxiqueText }} />

      <ExternalLinkBlock resources={t.resourcesSante} />
      <ExternalLinkBlock resources={t.resourcesSCT} />

      <Separateur />

      {/* Agir */}
      <div id="agir">
        <h1 className="titre">{t.agirTitle}</h1>
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.agirIntro }} />
        
        <h2 className="sous-titre-2">{t.protectionsExistantesTitle}</h2>
        <BulletList items={t.protectionsList} />

        <p className="texte">{t.reutilisablesText}</p>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.remboursementText }} />

        <h2 className="sous-titre-2">{t.obtenirGratuitTitle}</h2>
        <p className="texte">{t.obtenirGratuitIntro}</p>
        <BulletList items={t.obtenirGratuitList} />
      </div>
      
      <ExternalLinkBlock          
        title={t.ressourcesUtilesTitle}
        subtitle={t.ressourcesUtilesSubtitle}
        resources={t.resourcesAsso} 
      />

      <Separateur />

      <h2 className="sous-titre-2">{t.besoinParlerTitle}</h2>

      <ContactCard
        image={t.contactInfirmerie.image} 
        title={t.contactInfirmerie.title}
        subtitle={t.contactInfirmerie.subtitle}
        phone={t.contactInfirmerie.phone}
        email={t.contactInfirmerie.email}
        hours={t.contactInfirmerie.hours}
        textButton={t.contactInfirmerie.textButton}
        link={t.contactInfirmerie.link}
        bgColor="#ffffff"
        textColor="#b22133"
      />

      <ContactCard
        image={t.contactParlonsRegles.image} 
        title={t.contactParlonsRegles.title}
        subtitle={t.contactParlonsRegles.subtitle}
        hours={t.contactParlonsRegles.hours}
        textButton={t.contactParlonsRegles.textButton}
        link={t.contactParlonsRegles.link}
      />

      <Separateur />

      <p className="texte">
        <em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}</em>
      </p>
    </div>
  );
};

export default PrecariteMens;