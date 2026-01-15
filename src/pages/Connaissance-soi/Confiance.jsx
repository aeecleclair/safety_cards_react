"use client";

import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import Separateur from "../../components/Separateur";
import "../../App.css";
import { useLanguage } from "../../LanguageProvider";
import fr from "./Confiance/fr.jsx";
import en from "./Confiance/en.jsx";


const Confiance = () => {
  const { lang } = useLanguage();
  const dict = { fr, en };
  const t = dict[lang] || fr;
  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

            <div id="definition">
        <h1 className="titre">{t.navLinks[0]?.label}</h1>
      </div>

      <ImageTextPopup
        image={t.card.image}
        title={t.card.title}
        shortText={t.card.shortText}
        longText={t.card.longText}
        textButton={t.card.textButton}
        suit={t.card.suit}
      />



      <h2 className="sous-titre-2">{t.subtitleDefine}</h2>
      <p className="texte">{t.definitionIntro}</p>
      
      <BulletList items={[
        t.bulletsDefinition[0],
        t.bulletsDefinition[1],
      ]} />

      <TextImageRight
        text={t.estimePillarsText}
        imageSrc={t.estimePillarsImage}
      />

      <ChiffresGroup chiffres={t.chiffres} />

      <h2 className="sous-titre-2">{t.whyTitle}</h2>
      <p className="texte">{t.whyText}</p>

      <ExternalLinkBlock resources={t.resources} />

      <ExternalLinkBlock
        title={t.resourcesInfosTitle}
        subtitle={t.resourcesInfosSubtitle}
        resources={t.resourcesInfos}
      />


      <Separateur />
      <div id="renforcer">
        <h1 className="titre">{t.sectionReinforceTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.actionsSubtitle}</h2>
      <p className="texte">{t.actionsIntro}</p>

      <BulletList items={[

        t.actionsBullets[0],
        t.actionsBullets[1],
        t.actionsBullets[2],
        t.actionsBullets[3],
        t.actionsBullets[4],
        t.actionsBullets[5],
        t.actionsBullets[6],

      ]} />

      <p className="texte">{t.helpIntro}</p>

          {t.helpContacts && t.helpContacts[0] && (
            <ContactCard
              image={t.helpContacts[0].image}
              title={t.helpContacts[0].title}
              subtitle={t.helpContacts[0].subtitle}
              phone={t.helpContacts[0].phone}
              email={t.helpContacts[0].email}
              hours={t.helpContacts[0].hours}
              textButton={t.helpContacts[0].textButton}
              link={t.helpContacts[0].link}
              bgColor={t.helpContacts[0].bgColor}
              textColor={t.helpContacts[0].textColor}
            />
          )}
          {t.helpContacts && t.helpContacts[1] && (
            <ContactCard
              image={t.helpContacts[1].image}
              title={t.helpContacts[1].title}
              subtitle={t.helpContacts[1].subtitle}
              phone={t.helpContacts[1].phone}
              email={t.helpContacts[1].email}
              hours={t.helpContacts[1].hours}
              textButton={t.helpContacts[1].textButton}
              link={t.helpContacts[1].link}
              bgColor={t.helpContacts[1].bgColor}
              textColor={t.helpContacts[1].textColor}
            />
          )}

      <ExternalLinkBlock resources={t.resourcesAide} />

      <YouTubeVideo url={t.videoUrl} />

      <Separateur />
      <div id="aider">
        <h1 className="titre">{t.helpListTitle}</h1>
      </div>

      <p className="texte">{t.helpIntro}</p>

      <ListeNumerotee
        title={t.helpListTitle}
        subtitle={t.helpListSubtitle}
        items={t.helpListItems}
      />

      <ContactCard
        image="/assets/fsj.png"
        title={t.fsjContact.title}
        subtitle={t.fsjContact.subtitle}
        phone={t.fsjContact.phone}
        email=""
        hours={t.fsjContact.hours}
        textButton={t.fsjContact.textButton}
        link={t.fsjContact.link}
      />

      <h2 className="sous-titre-2">{t.avoidTitle}</h2>

      <BulletList items={[...t.avoidBullets]} />

      <Separateur />

      <p className="texte"><em>{t.sourcesText}</em></p>

    </div>
  );
};

export default Confiance;
