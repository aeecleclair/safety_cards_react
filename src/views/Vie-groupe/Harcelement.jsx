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
import fr from "@/locales/Vie-groupe/Harcelement/_fr";
import en from "@/locales/Vie-groupe/Harcelement/_en";

const dict = { fr, en };

const Harcelement = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="definition">
        <h1 className="titre">{t.definitionTitle}</h1>
      </div>

      <ImageTextPopup
        image={t.carteRoiCarreau.image}
        title={t.carteRoiCarreau.title}
        shortText={t.carteRoiCarreau.shortText}
        longText={t.carteRoiCarreau.longText}
        textButton={t.carteRoiCarreau.textButton}
        suit="carreau"
      />

      <h2 className="sous-titre-2">{t.formesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.formesIntro }} />
      <BulletList items={t.formesList.map(item => <span dangerouslySetInnerHTML={{ __html: item }} />)} />

      <ExternalLinkBlock resources={t.resourcesHarcelement1} />

      <h2 className="sous-titre-2">{t.exemplesTitle}</h2>
      <BulletList items={t.exemplesList.map(item => <span dangerouslySetInnerHTML={{ __html: item }} />)} />

      <ExternalLinkBlock resources={t.resourcesHarcelement2} />

      <h2 className="sous-titre-2">{t.chiffresTitle}</h2>
      <ChiffresGroup chiffres={t.chiffresHarcelement} />

      <h2 className="sous-titre-2">{t.loiTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.loiText }} />
      <ExternalLinkBlock resources={t.resourcesLois} />

      <YouTubeVideo url="https://www.youtube.com/watch?v=Nclf7ELuQGM" />

      <Separateur />

      <div id="rue">
        <h1 className="titre">{t.rueTitle}</h1>
      </div>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.rueText }} />

      <h2 className="sous-titre-2">{t.applisTitle}</h2>
      <p className="texte">{t.applisIntro}</p>
      <BulletList items={t.applisList} />
      <ExternalLinkBlock resources={t.resourcesApplis} />

      <h2 className="sous-titre-2">{t.angelaTitle}</h2>
      <TextImageRight
        imageSrc="/assets/angela.png"
        text={t.angelaText}
      />
      <ExternalLinkBlock resources={t.resourcesAngela} />

      <Separateur />

      <div id="victime">
        <h1 className="titre">{t.victimeTitle}</h1>
      </div>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.victimeText }} />

      <ContactCard
        image="/assets/2024_LOGO-CENTRALE-H_ROUGE_CMJN_carre.png"
        title={t.contactCellule.title}
        subtitle={t.contactCellule.subtitle}
        email={t.contactCellule.email}
        textButton={t.contactCellule.textButton}
        link={t.contactCellule.link}
        bgColor="#ffffff"  
        textColor="#b22133"
      />

      <ContactCard
        image="/assets/etudiant_gouv.jpg"
        title={t.contactCNAE.title}
        subtitle={t.contactCNAE.subtitle}
        hours={t.contactCNAE.hours}
        email={t.contactCNAE.email}
        phone={t.contactCNAE.phone}
        textButton={t.contactCNAE.textButton}
        link={t.contactCNAE.link}
        bgColor="#ffffff"
        textColor="#000000"
      />

      <h2 className="sous-titre-2">{t.evaluerTitle}</h2>
      <p className="texte">{t.evaluerText}</p>
      <ExternalLinkBlock resources={t.resourcesBarometres} />

      <h2 className="sous-titre-2">{t.reagirTitle}</h2>
      <ListeNumerotee
        items={t.cinqDMethod.items}
        title={t.cinqDMethod.title}
        subtitle={t.cinqDMethod.subtitle} 
      />

      <ExternalLinkBlock resources={t.resourcesPedagogiques} />

      <Quote text={t.quoteText} />

      <YouTubeVideo url="https://www.youtube.com/watch?v=q9w-fJqSZpU" />

      <Separateur />

      <p className="texte">
        <em>
          <b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}
        </em>
      </p>
    </div>
  );
};

export default Harcelement;