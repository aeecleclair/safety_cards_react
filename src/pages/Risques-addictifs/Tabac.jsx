
import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";import ContactCard from "@/components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";
import Separateur from "@/components/Separateur";
import "@/src/App.css";


import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "./Tabac/fr";
import en from "./Tabac/en";

const dict = { fr, en };

const Tabac = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">

      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="ensemble">
        <h1 className="titre">{t.section1Title}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.resumeIntro }} />
      </div>

      <h2 className="sous-titre-2">{t.effetsTitle}</h2>

      <ImageTextPopup
        image={t.carteAs_trefle.image}
        title={t.carteAs_trefle.title}
        shortText={t.carteAs_trefle.shortText}
        longText={t.carteAs_trefle.longText}
        textButton={t.carteAs_trefle.buttonText}
        suit={t.carteAs_trefle.suit}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.effetsIntro }} />
      <BulletList items={t.effetsList} />

      <h2 className="sous-titre-2">{t.effetsVapeTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.effetsVapeIntro1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.effetsVapeIntro2 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.effetsVapeIntro3 }} />
      <BulletList items={t.effetsVapeList} />

      <ChiffresGroup chiffres={t.data2} />

      <h2 className="sous-titre-2">{t.chichaTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.chichaIntro1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.chichaIntro2 }} />
      <BulletList items={t.chichaList} />

      <h2 className="sous-titre-2">{t.passifTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.passifIntro }} />
      <BulletList items={t.passifList} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.passifConseils }} />

      <Separateur />

      <div id="conso">
        <h1 className="titre">{t.section2Title}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.consoIntro }} />
      </div>

      <h2 className="sous-titre-2">{t.whyTitle}</h2>
      <BulletList items={t.whyList} />

      <ExternalLinkBlock resources={t.resourcesDetente} />

      <Quote text={t.quote1} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.dependanceIntro }} />

      <h2 className="sous-titre-2">{t.regularTitle}</h2>

      <ImageTextPopup
        image={t.carte2_trefle.image}
        title={t.carte2_trefle.title}
        shortText={t.carte2_trefle.shortText}
        longText={t.carte2_trefle.longText}
        textButton={t.carte2_trefle.buttonText}
        suit={t.carte2_trefle.suit}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.regularIntro }} />
      <BulletList items={t.regularList} />

      <h2 className="sous-titre-2">{t.reduceTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.reduceIntro }} />

      <ListeNumerotee title={t.conseilsListTitle} items={t.conseils} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.chichaConseilsIntro }} />
      <ListeNumerotee title={t.conseilsChichaTitle} items={t.conseilsChicha} />

      <ExternalLinkBlock resources={t.resourcesChicha} />

      <h2 className="sous-titre-2">{t.arreterTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.arreterIntro1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.arreterIntro2 }} />

      <ExternalLinkBlock resources={t.resourcesArreter} />

      <h1 className="sous-titre-2">{t.needTalkTitle}</h1>
      <ContactCard {...t.contactTIS} />
      <ContactCard {...t.contactFSJ} />

      <h2 className="sous-titre-2">{t.noStopTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.noStopIntro }} />
      <BulletList items={t.noStopList} />

      <Separateur />

      <div id="temoin">
        <h1 className="titre">{t.section3Title}</h1>
      </div>

      <div id="resume-conseils">
        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.temoinIntro }} />
      </div>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.temoinText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.temoinText2 }} />

      <Separateur />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sources }} />
    </div>
  );
};

export default Tabac;