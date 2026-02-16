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
import fr from "@/locales/Sante/Depression/_fr";
import en from "@/locales/Sante/Depression/_en";

const dict = { fr, en };

const Depression = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      {/* Dépression */}
      <div id="depression">
        <h1 className="titre">{t.depressionTitle}</h1>
      </div>

      <ImageTextPopup
        image={t.carte4Pique.image}
        title={t.carte4Pique.title}
        shortText={t.carte4Pique.shortText}
        longText={t.carte4Pique.longText}
        textButton={t.carte4Pique.textButton}
        suit="pique"
      />

      <h2 className="sous-titre-2">{t.symptomesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.symptomesIntro }} />
      <BulletList items={t.symptomesList} />

      <p className="texte">{t.chiffresIntro}</p>
      <ChiffresGroup chiffres={t.chiffresData} />

      <ExternalLinkBlock
        title={t.ressourcesInfosTitle}
        subtitle={t.ressourcesInfosSubtitle}
        resources={t.resourcesInfos}
      />

      <Separateur />
      <div id="victime">
        <h1 className="titre">{t.victimeTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.seFaireAiderTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.seFaireAiderText }} />
      <div className="conseil-encadre">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.incitationEntourage }} />
      </div>

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

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.nightlineIntro }} />

      <ContactCard
        image={t.contactNightline.image} 
        title={t.contactNightline.title}
        subtitle={t.contactNightline.subtitle}
        phone={t.contactNightline.phone}
        hours={t.contactNightline.hours}
        textButton={t.contactNightline.textButton}
        link={t.contactNightline.link}
      />

      <ExternalLinkBlock
        title={t.aideLongTermeTitle}
        subtitle={t.aideLongTermeSubtitle}
        resources={t.resourcesAide}
      />

      <h2 className="sous-titre-2">{t.detresseTitle}</h2>
      <ContactCard
        image={t.contact3114.image} 
        title={t.contact3114.title}
        subtitle={t.contact3114.subtitle}
        phone={t.contact3114.phone}
        hours={t.contact3114.hours}
        textButton={t.contact3114.textButton}
        link={t.contact3114.link}
      />

      <Separateur />
      
      {/* Aidant */}
      <div id="aidant">
        <h1 className="titre">{t.aidantTitle}</h1>
      </div>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aidantIntro }} />

      <ListeNumerotee 
        title={t.pssmTitle} 
        subtitle={t.pssmSubtitle} 
        items={t.pssmItems} 
      />
      
      <ExternalLinkBlock
        resources={t.resourcesAerer}
      />

      <h2 className="sous-titre-2">{t.visibiliteTitle}</h2>
      
      <ImageTextPopup
        image={t.carte6Carreau.image}
        title={t.carte6Carreau.title}
        shortText={t.carte6Carreau.shortText}
        longText={t.carte6Carreau.longText}
        textButton={t.carte6Carreau.textButton}
        suit="carreau"
      />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.visibiliteText }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.signesAttentionIntro }} />
      <BulletList items={t.signesAttentionList} />


      <h2 className="sous-titre-2">{t.formationTitle}</h2>
      <TextImageRight text={t.formationText} imageSrc="/assets/logo-pssm.svg" />

      <Separateur />

      <p className="texte">
        <em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}</em> 
      </p>
    </div>
  );
};

export default Depression;