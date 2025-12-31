"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { BulletList, TextImageRight } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ImageTextPopup from "@/components/Cartes";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "./Anxiete/fr.js";
import en from "./Anxiete/en.js";

const dict = { fr, en };

const Anxiete = () => {
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
          image={t.carte2_pique.image}
          title={t.carte2_pique.title}
          shortText={t.carte2_pique.shortText}
          longText={t.carte2_pique.longText}
          textButton={t.carte2_pique.buttonText}
          suit={t.carte2_pique.suit}
        />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionText1 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionText2 }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.definitionText3 }} />

        <h2 className="sous-titre-2">{t.signesSymptomesTitle}</h2>
        <BulletList items={t.signesSymptomesList} />

        <h2 className="sous-titre-2">{t.typesTroublesTitle}</h2>
        <p className="texte">{t.typesTroublesIntro}</p>
        <BulletList items={t.typesTroublesList.map((item, i) => <span key={i} dangerouslySetInnerHTML={{ __html: item }} />)} />

        <p className="texte">{t.troublesComplement}</p>

        <ExternalLinkBlock resources={t.ressourcesTroubles} />

        <ChiffresGroup chiffres={t.chiffresAnxiete} />
      </div>

      <Separateur />

      {/* --- SECTION PERSONNE CONCERNEE --- */}
      <div id="personne-concernee">
        <h2 className="titre">{t.personneConcerneeTitle}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.personneConcerneeIntro }} />

        <ContactCard {...t.cardInfirmerie} />
        <ExternalLinkBlock resources={t.ressourcesInfos} />

        <p className="texte">{t.autresRessourcesIntro}</p>
        <ContactCard {...t.cardFilSanteJeunes} />
        <ContactCard {...t.cardNightline} />

        <h2 className="sous-titre-2">{t.crisePaniqueTitle}</h2>
        <p className="texte">{t.crisePaniqueIntro}</p>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.crisePaniqueConseilsIntro }} />
        <BulletList items={t.crisePaniqueConseilsList} />
      </div>

      <Separateur />

      {/* --- SECTION ACCOMPAGNANT --- */}
      <div id="accompagnant">
        <h2 className="titre">{t.accompagnantTitle}</h2>

        <ListeNumerotee
          title={t.itemsAererTitle}
          subtitle={t.itemsAererSubtitle}
          items={t.itemsAerer}
        />

        <p className="mise-avant">{t.accompagnantMiseAvant1}</p>
        <p className="mise-avant">{t.accompagnantMiseAvant2}</p>

        <ExternalLinkBlock resources={t.ressourcesAerer} />

        <h2 className="sous-titre-2">{t.assisterPaniqueTitle}</h2>
        <BulletList items={t.assisterPaniqueList} />

        <ExternalLinkBlock resources={t.ressourcesCrisePanique} />

        <h2 className="sous-titre-2">{t.formationPSSMTitle}</h2>
        <TextImageRight text={t.formationPSSMText} imageSrc={t.formationPSSMImage} />
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

export default Anxiete;
