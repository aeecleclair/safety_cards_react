"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, TextImageRight, ImageCenter, YouTubeVideo, NumberedList } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import { ChiffresGroup } from "@/components/Chiffres";
import Separateur from "@/components/Separateur";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Sante/Tca/_fr";
import en from "@/locales/Sante/Tca/_en";

const dict = { fr, en };

const TCA = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="definition">
        <h1 className="titre">{t.defTitle}</h1>

        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.defIntro }} />

        <ImageTextPopup
          image={t.carteRoiPique.image}
          title={t.carteRoiPique.title}
          shortText={t.carteRoiPique.shortText}
          textButton={t.carteRoiPique.textButton}
          longText={t.carteRoiPique.longText}
          suit={t.carteRoiPique.suit}
        />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.defDescription }} />

        <ChiffresGroup chiffres={t.chiffres} />

        <h2 className="sous-titre-2">{t.typesTitle}</h2>
        <p className="texte">{t.typesIntro}</p>
        <NumberedList items={t.typesList} />

        <ExternalLinkBlock resources={t.ressourcesPrincipales} />
        
        <h2 className="sous-titre-2">{t.causesTitle}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.causesIntro }} />
        <p className="texte">{t.causesListIntro}</p>
        <BulletList items={t.causesList} />

        <ExternalLinkBlock resources={t.causesLinks} />
      </div>

      <Separateur />

      <div id="concerne">
        <h1 className="titre">{t.concerneTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.concerneIntro }} />

      <h2 className="sous-titre-2">{t.alerteTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.alerteIntro }} />

      <YouTubeVideo url={t.videoUrl} />

      <p className="texte">{t.alerteListIntro}</p>
      <BulletList items={t.alerteList} />

      <ExternalLinkBlock resources={t.concerneExtraLinks} />

      <h2 className="sous-titre-2">{t.queFaireTitle}</h2>
      <ListeNumerotee 
        title={t.queFaireListTitle}
        items={t.itemsQueFaire}
      />
    
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.consequenceText }} />

      <ExternalLinkBlock resources={t.santeMentaleLinks} />

      <h1 className="sous-titre-2">{t.besoinParlerTitle}</h1>

      <ContactCard {...t.contactFFAB} />
      <ContactCard {...t.contactNightline} />

      <Separateur />

      <div id="accompagner">
        <h1 className="titre">{t.temoinTitle}</h1>
      </div>

      <p className="mise-avant">{t.temoinIntro}</p>

      <h2 className="sous-titre-2">{t.repererTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.repererIntro }} />
      <BulletList items={t.repererList} />
      
      <h2 className="sous-titre-2">{t.aiderTitle}</h2>
      <ListeNumerotee 
        title={t.aiderListTitle}
        items={t.itemsAider}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aiderOutro }} />
    
      <Separateur />

      <p className="texte">
        <em><b dangerouslySetInnerHTML={{ __html: t.sourcesTitle }} /> {t.sourcesList}</em>
      </p>
    </div>
  );
};

export default TCA;