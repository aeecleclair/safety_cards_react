"use client";

import React from "react";
import "@/src/App.css";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import ListeNumerotee from "@/components/Listes";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ImageTextPopup from "@/components/Cartes";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-groupe/Effet-groupe/_fr";
import en from "@/locales/Vie-groupe/Effet-groupe/_en";

const dict = { fr, en };

const html = (items) => items.map((h, i) => <span key={i} dangerouslySetInnerHTML={{ __html: h }} />);

const Effet_groupe = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      {/* 1. Comprendre l'effet de groupe */}
      <div id="comprendre">
        <h1 className="titre">{t.comprendreTitle}</h1>

        <ImageTextPopup
          image={t.carteDameCarreau.image}
          title={t.carteDameCarreau.title}
          shortText={t.carteDameCarreau.shortText}
          longText={t.carteDameCarreau.longText}
          textButton={t.carteDameCarreau.textButton}
          suit={t.carteDameCarreau.suit}
        />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.comprendreIntro }} />

        <ExternalLinkBlock resources={t.resources_liens1} />

        <h2 className="sous-titre-2">{t.loiTitle}</h2>

        <TextImageRight
          text={<span dangerouslySetInnerHTML={{ __html: t.loiText }} />}
          imageSrc={t.loiImage}
        />

        <ExternalLinkBlock resources={t.resources_liens2} />

        <h2 className="sous-titre-2">{t.pressionTitle}</h2>
        <BulletList items={html(t.pressionList)} />

        <h2 className="sous-titre-2">{t.affirmerTitle}</h2>
        <p className="texte">{t.affirmerIntro}</p>
        <BulletList items={t.affirmerList} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.affirmerOutro }} />
      </div>

      <Separateur />

      {/* 2. Victime de bizutage */}
      <div id="bizutage">
        <h1 className="titre">{t.bizutageTitle}</h1>
        <p className="texte">{t.bizutageIntro}</p>

        <ContactCard
          image={t.contactCosa.image}
          title={t.contactCosa.title}
          subtitle={t.contactCosa.subtitle}
          hours={t.contactCosa.hours}
          textButton={t.contactCosa.textButton}
          link={t.contactCosa.link}
          bgColor={t.contactCosa.bgColor}
          textColor={t.contactCosa.textColor}
        />

        <h2 className="sous-titre-2">{t.bizutageVousPouvezTitle}</h2>
        <BulletList items={t.bizutageVousPouvezList} />

        <h2 className="sous-titre-2">{t.bizutageSiSignalerTitle}</h2>
        <BulletList items={t.bizutageSiSignalerList} />

        <ExternalLinkBlock resources={t.resources_liens3} />
      </div>

      <Separateur />

      {/* 3. Moi et les autres */}
      <div id="moi-autres">
        <h1 className="titre">{t.moiAutresTitle}</h1>

        <h2 className="sous-titre-2">{t.nepasSubirTitle}</h2>
        <BulletList items={html(t.nepasSubirList)} />

        <h2 className="sous-titre-2">{t.soutenirTitle}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.soutenirIntro }} />
        <BulletList items={html(t.soutenirList)} />
      </div>

      <ListeNumerotee
        title={t.cinqDTitle}
        subtitle={t.cinqDSubtitle}
        items={t.items_5D}
      />

      <Separateur />

      {/* 4. J'organise une soiree */}
      <div id="organiser">
        <h1 className="titre">{t.organiserTitle}</h1>
      </div>

      <TextImageRight
        text={<span dangerouslySetInnerHTML={{ __html: t.organiserText }} />}
        imageSrc={t.organiserImage}
      />

      <ExternalLinkBlock resources={t.resources} />

      <Separateur />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sources }} />
    </div>
  );
};

export default Effet_groupe;
