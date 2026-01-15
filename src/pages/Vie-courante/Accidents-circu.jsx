"use client";

import React from "react";
import "@/src/App.css";

import ImageTextPopup from "@/components/Cartes";
import Quote from "@/components/Citation";
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "./Accidents-circu/fr.js";
import en from "./Accidents-circu/en.js";

const dict = { fr, en };

const RisquesCirculation = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      {/* --- TITRE + NAVIGATION --- */}
      <h1 className="titre-page">{t.title}</h1>
      <Sommaire links={t.navLinks} />

      {/* --- SECTION PROBLEME --- */}
      <div id="probleme">
        <h2 className="titre">{t.navLinks[0].label}</h2>

        <ImageTextPopup
          image={t.carte_ri_trefle.image}
          title={t.carte_ri_trefle.title}
          shortText={t.carte_ri_trefle.shortText}
          longText={t.carte_ri_trefle.longText}
          textButton={t.carte_ri_trefle.textButton}
          suit={t.carte_ri_trefle.suit}
        />

        <p className="texte"> {t.jeunes}</p>
        <p className="texte"> {t.facteurs}</p> 

        <BulletList
          items={t.causesAccidents.map((c, i) => (
            <span key={i} dangerouslySetInnerHTML={{ __html: c }} />
          ))}
        />
        <ChiffresGroup chiffres={t.chiffresCirculation} />
      </div>

      <div id="ressources">
        <ExternalLinkBlock
          title={t.ressourcesUtilestitle}
          subtitle={t.ressourcesUtilessubtitle}
          resources={t.ressourcesUtiles}
        />

        <p className="texte">{t.videoalcool}</p>
        <YouTubeVideo url="https://www.youtube.com/watch?v=cIybaOWeJlU" />

        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.ressources_alcool}
        />
      </div>

      <Separateur />
      
      {/* --- SECTION PREVENTION --- */}
      <div id="prevention">
        <h2 className="titre">{t.navLinks[1].label}</h2>

        <p className="texte">{t.prevention_txt1}</p>

        <ListeNumerotee
          title={t.conseilsPreventiontitle}
          subtitle={t.conseilsPreventionsubtitle}
          items={[
            { title: t.conseilsPreventionAlc[0].title },
            { title: t.conseilsPreventionDodo[0].title },
            { title: t.conseilsPreventionTel[0].title },
            { title: t.conseilsPreventionVit[0].title },
            { title: t.conseilsPreventionGroup[0].title },
            { title: t.conseilsPreventionCeinture[0].title }
          ]}
        />
        {/* Alcool / drogues */}
        <p className="sous-titre-2">{t.conseilsPreventionAlc[0].title}</p>
        <p className="texte">{t.conseilsPreventionAlc[0].subtitle}</p>
        {t.conseilsPreventionAlc[0].details.map((d, i) => (
          <p className="texte" key={i}>{d}</p>
        ))}
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.conseilsPreventionAlc[0].externalLinks}
        />
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.resources_drogue}
        />

        {/* Fatigue / sommeil */}
        <p className="sous-titre-2">{t.conseilsPreventionDodo[0].title}</p>
        <p className="texte">{t.conseilsPreventionDodo[0].subtitle}</p>
        {t.conseilsPreventionDodo[0].details.map((d, i) => (
          <p className="texte" key={i}>{d}</p>
        ))}
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.resources_sommeil}
        />

        {/* Téléphone */}
        <p className="sous-titre-2">{t.conseilsPreventionTel[0].title}</p>
        <p className="texte">{t.conseilsPreventionTel[0].subtitle}</p>
        {t.conseilsPreventionTel[0].details.map((d, i) => (
          <p className="texte" key={i}>{d}</p>
        ))}
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.conseilsPreventionTel[0].externalLinks}
        />

        {/* Vitesse */}
        <p className="sous-titre-2">{t.conseilsPreventionVit[0].title}</p>
        <p className="texte">{t.conseilsPreventionVit[0].subtitle}</p>
        {t.conseilsPreventionVit[0].details.map((d, i) => (
          <p className="texte" key={i}>{d}</p>
        ))}
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.conseilsPreventionVit[0].externalLinks}
        />

        {/* Effets de groupe */}
        <p className="sous-titre-2">{t.conseilsPreventionGroup[0].title}</p>
        <p className="texte">{t.conseilsPreventionGroup[0].subtitle}</p>
        {t.conseilsPreventionGroup[0].details.map((d, i) => (
          <p className="texte" key={i}>{d}</p>
        ))}
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.resources_groupe}
        />

        {/* Ceinture */}
        <p className="sous-titre-2">{t.conseilsPreventionCeinture[0].title}</p>
        <p className="texte">{t.conseilsPreventionCeinture[0].subtitle}</p>
        {t.conseilsPreventionCeinture[0].details.map((d, i) => (
          <p className="texte" key={i}>{d}</p>
        ))}
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.conseilsPreventionCeinture[0].externalLinks}
        />

      </div>


      <Separateur />

      {/* --- SECTION STAGES --- */}
      <div id="stages">
        <h2 className="titre">{t.stagesTitle}</h2>

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.stagesIntro1 }} />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.stagesIntro2 }} />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.stagesIntro3 }} />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.stagesIntro4 }} />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.stagesIntro5 }} />

        <ExternalLinkBlock
          title={t.stagesUtilestitle}
          subtitle={t.stagesUtilessubtitle}
          resources={t.stagesUtiles}
        />
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

export default RisquesCirculation;
