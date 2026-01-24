"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import ImageTextPopup from "@/components/Cartes";
import { BulletList } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Vie-groupe/Cyberharcelement/_fr.js";
import en from "@/locales/Vie-groupe/Cyberharcelement/_en.js";


const dict = { fr, en };

const Cyberharcelement = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.title}</h1>
      <Sommaire links={t.navLinks} />

      <div id="definition">
        <h2 className="titre">{t.definitionTitle}</h2>

        <ImageTextPopup
          image="./assets/cartes/5_carreau.png"
          title={t.popup.title}
          shortText={t.popup.shortText}
          longText={t.popup.longText}
          textButton={t.popup.button}
          suit="carreau"
        />

        <p className="texte">{t.definitionText}</p>
      </div>

      <div id="constat">
        <h2 className="titre">{t.constatTitle}</h2>
        <p className="texte">{t.constatText1}</p>

        <ChiffresGroup chiffres={t.chiffresCyber} />

        <p className="texte">{t.constatText2}</p>
      </div>

      <Separateur />

      <div id="formes">
        <h2 className="titre">{t.formesTitle}</h2>
        <p className="texte">{t.formesIntro}</p>
        <BulletList items={t.formesFrequentes} />

        <h2 className="sous-titre-2">{t.victimeQuestion}</h2>
        <p className="texte">{t.victimeText}</p>
        <ExternalLinkBlock resources={t.ressourceDiagnostic} />

        <div id="mythes">
          <h2 className="sous-titre-2">{t.mythesTitle}</h2>
          <ListeNumerotee title={t.mythesListTitle} subtitle={t.mythesListSubtitle} items={t.mythes} />
        </div>
      </div>

      <Separateur />

      <div id="signes">
        <h2 className="titre">{t.signesTitle}</h2>
        <p className="texte">{t.signesIntro}</p>
        <BulletList items={t.signesAlerte} />

        <p className="texte">{t.comportementsIntro}</p>
        <BulletList items={t.comportementsMinimises} />
        <p className="texte">{t.comportementsConclusion}</p>
      </div>

      <Separateur />

      <div id="agir">
        <h2 className="titre">{t.agirTitle}</h2>
        <ListeNumerotee title={t.agirListTitle} subtitle={t.agirListSubtitle} items={t.conseilsAction} />

        <ExternalLinkBlock resources={t.ressourcesExterne} />

        <ContactCard {...t.card3018} />

        <h2 className="sous-titre-2">{t.signalTitle}</h2>
        <ul className="bullet-points">
          {t.signalList.map((item, i) => (
            <li key={i}><b>{item.platform} :</b> {item.text}</li>
          ))}
        </ul>
        <p className="texte">{t.signalConclusion}</p>

        <h2 className="sous-titre-2">{t.preuvesTitle}</h2>
        <BulletList items={t.preuvesConserver} />
      </div>

      <h2 className="sous-titre-2">{t.droitsTitle}</h2>
      <BulletList items={t.droitsVictimes} />

      <h2 className="sous-titre-2">{t.respTitle}</h2>
      <BulletList items={t.responsabilites} />

      <Separateur />

      <div id="aide">
        <h2 className="titre">{t.aideTitle}</h2>
      </div>

      <ContactCard {...t.cardCNAE} />
      <ContactCard {...t.cardNightline} />

      <Separateur />

      <p className="texte">
        <em><b>{t.sourcesPrefix}</b> {t.sources}</em>
      </p>
    </div>
  );
};

export default Cyberharcelement;