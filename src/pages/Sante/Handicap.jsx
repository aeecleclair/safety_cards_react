import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { BulletList } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ImageTextPopup from "../../components/Cartes";

import { useLanguage } from "../../LanguageProvider";
import fr from "./Handicap/fr.js";
import en from "./Handicap/en.js";

const dict = { fr, en };

const SituationHandicap = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      {/* Constat */}
      <div id="constat">
        <h2 className="titre">{t.navLinks[0].label}</h2>
        <ImageTextPopup
          image={t.carteValet.image}
          title={t.carteValet.title}
          shortText={t.carteValet.shortText}
          longText={t.carteValet.longText}
          textButton={t.carteValet.buttonText}
          suit={t.carteValet.suit}
        />
        <p className="texte">{t.constatIntro}</p>
        <ChiffresGroup chiffres={t.chiffresData} />
        <Quote author={t.constatQuote.author} text={t.constatQuote.text} />
      </div>

      <Separateur />

      {/* Aides à Centrale */}
      <div id="internes">
        <h2 className="titre">{t.navLinks[1].label}</h2>
        <p className="texte">{t.internesIntro}</p>
        <BulletList items={t.internesBulletList} />
      </div>

      <Separateur />

      {/* Ressources externes */}
      <div id="externes">
        <h2 className="titre">{t.externesTitle}</h2>
        <p className="texte">{t.externesIntro}</p>
        <ExternalLinkBlock resources={t.ressourcesUtiles} />
        <ContactCard {...t.contactCrous} />
      </div>

      <Separateur />

      {/* Droits */}
      <div id="droits">
        <h2 className="titre">{t.droitsTitle}</h2>
        <p className="texte">{t.droitsIntro}</p>
        <ListeNumerotee
          title={t.listeTitre}
          subtitle={t.listeText}
          items={t.droits}
        />
        <ExternalLinkBlock resources={t.dispositifsLiens} />
      </div>

      <Separateur />

      {/* Jeunes aidants */}
      <div id="aidants">
        <h2 className="titre">{t.aidantsTitle}</h2>
        <p className="texte">{t.aidantsIntro}</p>
        <ListeNumerotee
          title="Services et événements"
          subtitle=""
          items={t.jeunesAidants}
        />
        <ExternalLinkBlock resources={t.lienPauseBrindille} />
      </div>

      <Separateur />

      {/* Associations */}
      <div id="association">
        <h2 className="titre">{t.navLinks[5].label}</h2>
        <p className="texte">{t.associationIntro}</p>
        <ExternalLinkBlock resources={t.guideAccessibilite} />
      </div>

      <Separateur />

      {/* Sources */}
      <p className="texte">
        <em>{t.sourcesText}</em>
      </p>
    </div>
  );
};

export default SituationHandicap;
