import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { BulletList, TextImageRight } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ImageTextPopup from "../../components/Cartes";

import { useLanguage } from "../../LanguageProvider";
import fr from "./Integration/fr.js";
import en from "./Integration/en.js"; // si tu veux l’anglais plus tard

const dict = { fr, en };

const Bizutage = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">

      {/* --- TITRE + NAVIGATION --- */}
      <h1 className="titre-page">{t.title}</h1>
      <Sommaire links={t.navLinks} />

      {/* --- SECTION DEFINITION --- */}
      <div id="definition">
        <h2 className="titre">{t.definitionTitle}</h2>

        <ImageTextPopup
          image={t.carteD_trefle.image}
          title={t.carteD_trefle.title}
          shortText={t.carteD_trefle.shortText}
          longText={t.carteD_trefle.longText}
          textButton={t.carteD_trefle.buttonText}
          suit={t.carteD_trefle.suit}
        />

        <p
          className="texte"
          dangerouslySetInnerHTML={{ __html: t.definitionIntro1 }}
        />
        <p
          className="texte"
          dangerouslySetInnerHTML={{ __html: t.definitionIntro2 }}
        />
        <h2 className="sous-titre-2">{t.titleTable}</h2>
        {/* Tableau intégration / bizutage */}
        <h3 className="sous-titre-2">{t.differencesTable.title}</h3>
        <div className="tableau-container">
          <table className="tableau">
            <thead>
              <tr>
                {t.differencesTable.headers.map((h, idx) => (
                  <th key={idx} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {t.differencesTable.rows.map((row, idx) => (
                <tr key={idx}>
                  <td dangerouslySetInnerHTML={{ __html: row[0] }} />
                  <td dangerouslySetInnerHTML={{ __html: row[1] }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mise-avant">
          <strong>{t.rappelAretir.title}</strong><br />
          {t.rappelAretir.bullets.map((b, i) => (
            <span key={i}>
              {b}
              <br />
            </span>
          ))}
        </p>
      </div>

      {/* --- ACTES RELEVANT DU BIZUTAGE --- */}
      <h2 className="sous-titre-2">{t.actesBizutageTitle}</h2>
      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.actesBizutageIntro }}
      />
      <BulletList items={t.pratiquesBizutage} />

      <ChiffresGroup chiffres={t.chiffres} />

      {/* --- SANCTIONS LÉGALES --- */}
      <h2 className="sous-titre-2">{t.sanctionsTitle}</h2>
      <p className="texte">{t.sanctionsIntro}</p>
      <BulletList items={t.sanctionsList} />

      <ExternalLinkBlock
        title={t.ressourcesTitle}
        subtitle={t.ressourcesSubtitle}
        resources={t.ressourcesExternes}
      />

      <Separateur />

      {/* --- RISQUES --- */}
      <div id="risques">
        <h2 className="titre">{t.risquesTitle}</h2>

        <p className="texte">{t.risquesIntro1}</p>
        <p className="texte">{t.risquesIntro2}</p>

        <BulletList items={t.risquesList} />
      </div>

      <Separateur />

      {/* --- AGIR --- */}
      <div id="agir">
        <h2 className="titre">{t.agirTitle}</h2>
        <p className="texte">{t.agirIntro}</p>

        <ListeNumerotee
          title={t.actionsPossibleTitle}
          subtitle={t.actionsPossibleSubtitle}
          items={t.actionsPossibleList}
        />

        {/* Victimes */}
        <h2 className="sous-titre-2">Je suis victime de bizutage</h2>
        <p
          className="texte"
          dangerouslySetInnerHTML={{ __html: t.victimesIntro1 }}
        />
        <p
          className="texte"
          dangerouslySetInnerHTML={{ __html: t.victimesIntro2 }}
        />

        <ContactCard {...t.cardServiceVie} />

        <p
          className="texte"
          dangerouslySetInnerHTML={{ __html: t.ecouteIntro }}
        />

        <ContactCard {...t.cardCommentOnSaime} />
        <ContactCard {...t.cardNightline} />

        {/* Témoins */}
        <h2 className="sous-titre-2">{t.temoinsTitle}</h2>
        <p
          className="texte"
          dangerouslySetInnerHTML={{ __html: t.temoinsIntro }}
        />

        <ExternalLinkBlock resources={t.temoinsResource} />

        {/* Ne pas devenir bizuteur */}
        <h2 className="sous-titre-2">{t.bizutTitle}</h2>

        <ImageTextPopup
          image={t.carte8_trefle.image}
          title={t.carte8_trefle.title}
          shortText={t.carte8_trefle.shortText}
          longText={t.carte8_trefle.longText}
          textButton={t.carte8_trefle.buttonText}
          suit={t.carte8_trefle.suit}
        />
        <p className="texte">{t.bizutText}</p>
        <ExternalLinkBlock resources={t.effetGroupeResources} />

        <ListeNumerotee
          title={t.mythesTitle}
          subtitle={t.mythesSubtitle}
          items={t.mythesList}
        />
      </div>

      <Separateur />

      {/* --- SECTION ASSOS / ORGANISATEURS --- */}
      <div id="assos">
        <h2 className="titre">{t.assosTitle}</h2>

        <TextImageRight
          text={<span dangerouslySetInnerHTML={{ __html: t.assosText }} />}
          imageSrc="/assets/cartes/dame_trefle.png"
        />

        <ExternalLinkBlock resources={t.ressourcesList} />
      </div>

      <Separateur />

      <p className="texte">
        <em>
          <b>{t.sourcesPrefix}</b> {t.sources}
        </em>
      </p>
    </div>
  );
};

export default Bizutage;
