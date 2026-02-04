"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, TextImageRight } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-courante/Detente-relax/_fr";
import en from "@/locales/Vie-courante/Detente-relax/_en";

const dict = { fr, en };

const Detente_relax = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      {/* Pourquoi */}
      <div id="pourquoi">
        <h1 className="titre">{t.pourquoiTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.pourquoiIntro }} />

      <ImageTextPopup
        image={t.carte10Pique.image}
        title={t.carte10Pique.title}
        shortText={t.carte10Pique.shortText}
        longText={t.carte10Pique.longText}
        textButton={t.carte10Pique.textButton}
        suit="pique"
      />

      <h2 className="sous-titre-2">{t.facteursTensionTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.facteursTensionText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.facteursTensionText2 }} />

      <h2 className="sous-titre-2">{t.importanceDetenteTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.importanceDetenteText }} />
      
      <Separateur />

      {/* Stress */}
      <div id="stress">
        <h1 className="titre">{t.stressTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.stressIntro }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.stressDetails }} />

      <ChiffresGroup chiffres={t.chiffresData} />

      <h2 className="sous-titre-2">{t.signesPhysiquesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.signesPhysiquesIntro }} />
      <BulletList items={t.signesPhysiquesList} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.signesPhysiquesExemple }} />

      <h2 className="sous-titre-2">{t.signesPsyTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.signesPsyIntro }} />
      <BulletList items={t.signesPsyList} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.penseesStressantes }} />
      <BulletList items={t.penseesList} />

      <ExternalLinkBlock resources={t.resourcesOMS} />

      <h2 className="sous-titre-2">{t.sommeilTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sommeilText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sommeilText2 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sommeilText3 }} />
      <ExternalLinkBlock resources={t.resourceSommeil} />

      <h2 className="sous-titre-2">{t.aiguVsChroniqueTitle}</h2>
      <p className="texte">{t.aiguVsChroniqueText1}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aiguVsChroniqueText2 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aiguVsChroniqueText3 }} />

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.attentionStress }} />

      <h2 className="sous-titre-2">{t.distinctionAnxieteTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.distinctionAnxieteText }} />
      <ExternalLinkBlock resources={t.resourceClinique} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionStressAnxiete1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionStressAnxiete2 }} />
      <ExternalLinkBlock resources={t.resourceAnxiete} />

      <Separateur />

      {/* Crise */}
      <div id="crise">
        <h1 className="titre">{t.criseTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.criseIntro }} />

      <h2 className="sous-titre-2">{t.techniquesImmediatesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.techniquesImmediatesText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.techniquesImmediatesText2 }} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.respirationIntro }} />
      <ListeNumerotee title={t.respirationTitle} items={t.respirationItems} />
      <p className="texte">{t.respirationNote}</p>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.jacobsonIntro }} />
      <ListeNumerotee title={t.jacobsonTitle} items={t.jacobsonItems} />
      <p className="texte">{t.jacobsonNote}</p>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.ancrageIntro }} />
      <ListeNumerotee title={t.ancrageTitle} items={t.ancrageItems} />
      <p className="texte">{t.ancrageNote}</p>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.visualisationIntro }} />
      <ListeNumerotee title={t.visualisationTitle} items={t.visualisationItems} />
      <p className="texte">{t.visualisationNote}</p>

      <p className="texte"><b>{t.autresAstucesTitle}</b></p>
      <p className="texte">{t.autresAstucesText}</p>
      <BulletList items={t.autresAstucesList} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.trouverFonctionne }} />
      
      <Separateur />

      {/* Long Terme */}
      <div id="solutions">
        <h1 className="titre">{t.longTermeTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.longTermeIntro }} />

      <h2 className="sous-titre-2">{t.identifierSourcesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.identifierSourcesText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.identifierSourcesText2 }} />

      <h2 className="sous-titre-2">{t.ameliorerVieTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.ameliorerVieIntro }} />
      <BulletList items={t.ameliorerVieList.map(item => <span dangerouslySetInnerHTML={{ __html: item }} />)} />

      <p className="texte">{t.enSavoirPlusPages}</p>
      <ExternalLinkBlock resources={t.resourceLongTerme} />

      <h2 className="sous-titre-2">{t.relaxationQuotidienneTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.relaxationQuotidienneText }} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.meditationIntro }} />
      <ListeNumerotee title={t.meditationTitle} items={t.meditationItems} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.meditationNote1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.meditationNote2 }} />
      <ExternalLinkBlock resources={t.resourceEcrans} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.yogaIntro }} />
      <ListeNumerotee title={t.yogaTitle} items={t.yogaItems} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.yogaNote }} />
      <ExternalLinkBlock resources={t.resourceNike} />

      <h2 className="texte" dangerouslySetInnerHTML={{ __html: t.sophrologieTitle }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sophrologieText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sophrologieText2 }} />

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

      <h2 className="sous-titre-2">{t.autresApprochesTitle}</h2>
      <BulletList items={t.autresApprochesList.map(item => <span dangerouslySetInnerHTML={{ __html: item }} />)} />

      <h2 className="sous-titre-2">{t.besoinParlerTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.besoinParlerIntro }} />
      
      <ContactCard
        image={t.contactFSJ.image}
        title={t.contactFSJ.title}
        subtitle={t.contactFSJ.subtitle}
        phone={t.contactFSJ.phone}
        hours={t.contactFSJ.hours}
        textButton={t.contactFSJ.textButton}
        link={t.contactFSJ.link}
      />

      <ContactCard
        image={t.contactNightline.image}
        title={t.contactNightline.title}
        subtitle={t.contactNightline.subtitle}
        phone={t.contactNightline.phone}
        hours={t.contactNightline.hours}
        textButton={t.contactNightline.textButton}
        link={t.contactNightline.link}
      />

      <h2 className="sous-titre-2">{t.quandConsulterTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.quandConsulterText }} />
      <ExternalLinkBlock resources={t.resourcePsy} />

      <Separateur />

      {/* Aide */}
      <div id="aide">
        <h1 className="titre">{t.aideTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.aideCriseTitle}</h2>
      <p className="texte">{t.aideCriseIntro}</p>

      <ListeNumerotee title={t.aideCriseListeTitle} items={t.aideCriseItems} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aideCriseNote }} />

      <h2 className="sous-titre-2">{t.aideLongTermeTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.aideLongTermeIntro }} />

      <ListeNumerotee title={t.aideLongTermeListeTitle} items={t.aideLongTermeItems} />

      <Separateur />
      <p className="texte">
        <em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /></em> {t.sourcesList}
      </p>
    </div>
  );
};

export default Detente_relax;