import React from "react";
import "../../App.css";

import Quote from "../../components/Citation";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import { BulletList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ImageTextPopup from "../../components/Cartes";

import { useLanguage } from "../../LanguageProvider";
import fr from "./Sexualite/fr.js";
import en from "./Sexualite/en.js";

const dict = { fr, en };

const Sexualite = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="definition">
        <h2 className="titre">{t.Deftitre}</h2>

        <ImageTextPopup
          image={t.carte10_coeur.image}
          title={t.carte10_coeur.title}
          shortText={t.carte10_coeur.shortText}
          longText={t.carte10_coeur.longText}
          textButton={t.carte10_coeur.buttonText}
          suit={t.carte10_coeur.suit}
        />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.contraceptionIntro }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.contraceptionTypes }} />
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.texts.istWarning }} />


        <ExternalLinkBlock resources={t.page_ist} />

        <h2 className="soustitre">{t.texts.contraceptionMethods}</h2>
        <BulletList items={t.contraceptionInfos.map((item, i) => <span key={i} dangerouslySetInnerHTML={{ __html: item }} />)} />

        <ExternalLinkBlock resources={t.ressourceQuSex} />

        <div className="texte bloc-info">
          <h3>{t.texts.freeCapoteTitre}</h3>
          <p>{t.texts.freeCapoteTexte}</p>
        </div>


        <h2 className="soustitre">{t.comparatifContraceptionTitle}</h2>
        <div className="table-container">
          <table className="tableau">
            <thead>
              <tr>
                <th>{t.comparatifContraception1}</th>
                <th>{t.comparatifContraception2}</th>
                <th>{t.comparatifContraception3}</th>
                <th>{t.comparatifContraception4}</th>
              </tr>
            </thead>
            <tbody>
              {t.comparatifContraception.map((item, index) => (
                <tr key={index}>
                  <td>{item.methode}</td>
                  <td>{item.efficacite}</td>
                  <td>{item.plus}</td>
                  <td>{item.moins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ExternalLinkBlock resources={[t.comparatifLink]} />






        <h2 className="soustitre" dangerouslySetInnerHTML={{ __html: t.texts.responsibilityTitre }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.responsibility }} />

        <ExternalLinkBlock resources={t.autre_page} />

        <h2 className="soustitre">{t.texts.unintendedPregnancyTitre}</h2>
        <p className="texte">{t.texts.unintendedPregnancy}</p>
        <ExternalLinkBlock resources={t.page_ivg} />

        <h2 className="soustitre" dangerouslySetInnerHTML={{ __html: t.texts.contraAutresSitesTitre }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.contraAutresSites }} />
        <ExternalLinkBlock resources={t.ressourcesGenerales} />
      </div>

      <Separateur />

      <div id="sexualite">
        <h2 className="titre">{t.texts.sexualiteIntroTitre}</h2>
        <p className="texte">{t.texts.sexualiteIntro}</p>

        <ExternalLinkBlock resources={[
          t.autre_page[0], 
          ...t.page_porno.slice(1,2)
        ]} />

        <h2 className="sous-titre-2">{t.texts.soloSexualiteTitre}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.soloSexualite1 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.soloSexualite2 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.soloSexualite3 }} />

        <ExternalLinkBlock resources={[t.page_porno[2]]} />


        <h2 className="sous-titre-2">{t.texts.rapportsSansPenetrationTitre}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.rapportsSansPenetration1 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.rapportsSansPenetration2 }} />

        <BulletList items={t.sansPenetration.map((item, i) => <span key={i} dangerouslySetInnerHTML={{ __html: item }} />)} />

        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.texts.rapportsSansPenetration3 }} />

        <ExternalLinkBlock resources={t.page_ist} />

        <h2 className="soustitre">{t.texts.pornoWarningTitre}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.pornoWarning }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.texts.pornoAdvice }} />

        <ExternalLinkBlock resources={[t.page_porno[0]]} />

        <h2 className="soustitre">{t.texts.formesDeSex}</h2>
        <p className="texte">{t.texts.formesDeSexText}</p>

        <ExternalLinkBlock resources={t.ressourcesGenerales} />
      </div>

      <Separateur />

      <div id="personne-concernee">
        <h2 className="titre">{t.texts.concerneeTitre}</h2>
        <p className="texte">{t.texts.concerneeText}</p>
        <ContactCard {...t.cardInfirmerie} />
        <ContactCard {...t.cardFSJ} />
        <ContactCard {...t.cardPlanning} />

        <h2 className="soustitre">{t.texts.moreInfosTitle}</h2>
        <p className="texte">{t.texts.moreInfosText}</p>

        <ExternalLinkBlock resources={t.ressourcesAide} />
      </div>

      <Separateur />

      <div id="accompagnant">
        <h2 className="titre">{t.texts.accompagnantTitre}</h2>

        <ListeNumerotee
          title={t.accompagnantInfosTitre}
          subtitle={t.accompagnantInfosSoustitre}
          items={t.accompagnementInfos}
        />
      </div>

      <p className="texte">
        <em>
          <b>{t.texts.sourcesPrefixe}</b> {t.texts.sources}
        </em>
      </p>
    </div>
  );
};

export default Sexualite;
