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
import fr from "@/locales/Vie-groupe/Vss/_fr";
import en from "@/locales/Vie-groupe/Vss/_en";

const dict = { fr, en };
const html = (items) => items.map((h, i) => <span key={i} dangerouslySetInnerHTML={{ __html: h }} />);











const Vss = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="vss">
        <h1 className="titre">{t.sectionDefinitionTitle}</h1>
      </div>

      <ImageTextPopup {...t.card1} />

      <h2 className="sous-titre-2">{t.subtitleQuEstCe}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.quEstCeText }} />

      <BulletList items={html(t.vssTypesList)} />

      <ExternalLinkBlock resources={t.resourcesConsent} />

      <p className="texte">{t.chiffresIntro}</p>
      <ChiffresGroup chiffres={t.chiffres} />

      <h2 className="sous-titre-2">{t.subtitleIceberg}</h2>
      <TextImageRight
        text={<span dangerouslySetInnerHTML={{ __html: t.icebergText }} />}
        imageSrc={t.icebergImageSrc}
        enlargeOnClick
      />
      <BulletList items={html(t.icebergList)} />
      <p className="texte">{t.icebergConclusion}</p>
      <ExternalLinkBlock resources={t.resourcesCouple} />

      <h2 className="sous-titre-2">{t.subtitleEspaceVital}</h2>
      <p className="texte">{t.espaceVitalText}</p>
      <ImageTextPopup {...t.card2} />

      <ExternalLinkBlock
        title={t.resourcesVssPlusTitle}
        subtitle={t.resourcesVssPlusSubtitle}
        resources={t.resourcesVssPlus}
      />

      <h2 className="sous-titre-2">{t.subtitleViolentometres}</h2>
      <p className="texte">{t.violentometresText}</p>
      <ExternalLinkBlock resources={t.violentometres} />

      <Separateur />

      <div id="victime">
        <h1 className="titre">{t.sectionVictimeTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.subtitleMoment}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.momentText }} />

      <h2 className="sous-titre-2">{t.subtitleParler}</h2>
      <p className="texte">{t.parlerText}</p>
      <ExternalLinkBlock resources={t.arbre} />

      <p className="texte"><b>{t.interneTitle}</b></p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.interneText1 }} />
      <ContactCard {...t.infirmerieCard} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.interneText2 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.interneText3 }} />
      <ContactCard {...t.celluteEcouteCard} />

      <p className="texte"><b>{t.externeTitle}</b></p>
      <p className="texte">{t.externeText1}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.externeText2 }} />
      <ContactCard {...t.arretonsCard} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.noPressureText }} />

      <h2 className="sous-titre-2">{t.subtitlePorterPlainte}</h2>
      <p className="texte">{t.porterPlainteText1}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.porterPlainteText2 }} />
      <ExternalLinkBlock resources={t.plainte} />

      <Separateur />

      <div id="temoin">
        <h1 className="titre">{t.sectionTemoinTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.subtitleAgirTemoin}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.agirTemoinText }} />
      <ExternalLinkBlock resources={t.resourcesTemoin} />
      <p className="texte">{t.agirTemoinText2}</p>

      <ImageTextPopup {...t.card3} />

      <h2 className="sous-titre-2">{t.subtitleAccueillir}</h2>
      <p className="texte">{t.accueillirText}</p>
      <BulletList items={html(t.faireList)} />
      <p className="texte">{t.nePasFaireIntro}</p>
      <BulletList items={html(t.nePasFaireList)} />
      <p className="texte">{t.reactionIntro}</p>

      <ListeNumerotee
        title={t.pourquoiNonTitle}
        subtitle={t.pourquoiNonSubtitle}
        items={t.pourquoiNonItems}
      />

      <ExternalLinkBlock resources={t.resourcesAidant} />

      <Separateur />

      <p className="texte">
        <em>
          <b>{t.sourcesPrefix}</b> {t.sources}
        </em>
      </p>
    </div>
  );
};

export default Vss;
