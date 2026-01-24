"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { BulletList, TextImageRight } from "@/components/Common";
import Sommaire from "@/components/Sommaire";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Risques-addictifs/Pornographie/_fr";
import en from "@/locales/Risques-addictifs/Pornographie/_en";

const dict = { fr, en };

const Pornographie = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="quoi">
        <h1 className="titre">{t.sectionQuoiTitle}</h1>
      </div>
      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.resumeIntro }} />

      <ImageTextPopup
        image={t.carte6_coeur.image}
        title={t.carte6_coeur.title}
        shortText={t.carte6_coeur.shortText}
        longText={t.carte6_coeur.longText}
        textButton={t.carte6_coeur.buttonText}
        suit={t.carte6_coeur.suit}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.descriptionIntro }} />

      <ChiffresGroup chiffres={t.chiffres} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.descriptionLongue }} />

      <p className="sous-titre-2">{t.risquesTitle}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.risquesIntro }} />
      <BulletList items={t.risquesList.map((it, i) => <span key={i} dangerouslySetInnerHTML={{ __html: it }} />)} />

      <ExternalLinkBlock resources={t.cliches} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.mecanismesIntro }} />
      <BulletList items={t.mecanismesList.map((it, i) => <span key={i} dangerouslySetInnerHTML={{ __html: it }} />)} />

      <ExternalLinkBlock resources={t.resources1} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.signesIntro }} />
      <BulletList items={t.signesList.map((it, i) => <span key={i} dangerouslySetInnerHTML={{ __html: it }} />)} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.autoDiagnosticIntro }} />
      <ExternalLinkBlock resources={t.test_addiction} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.consequencesIntro }} />
      <ExternalLinkBlock resources={t.couple} />
      <ExternalLinkBlock resources={t.depression} />
      <ExternalLinkBlock resources={t.isolement} />

      <Separateur />

      <div id="solutions">
        <h1 className="titre">{t.sectionSolutionsTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.resumeSolutionsIntro }} />

      <p className="sous-titre-2">{t.solutionsTabouTitle}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.solutionsTabouText }} />

      <p className="sous-titre-2">{t.solutionsPistesTitle}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.solutionsPistesIntro }} />

      {t.solutionsActions.map((block, i) => (
        <React.Fragment key={i}>
          <p className="texte" dangerouslySetInnerHTML={{ __html: block.title }} />
          <BulletList items={block.items.map((it, j) => <span key={j} dangerouslySetInnerHTML={{ __html: it }} />)} />
          {block.resources && <ExternalLinkBlock resources={block.resources} />}
        </React.Fragment>
      ))}

      <ContactCard {...t.contactFSJ} />

      <Separateur />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sources }} />
    </div>
  );
};

export default Pornographie;
