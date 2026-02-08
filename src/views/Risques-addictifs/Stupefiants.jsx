// Structure similaire à la page alcool, adaptée aux drogues
import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import React from "react";
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";
import Separateur from "@/components/Separateur";
import "@/src/App.css";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Risques-addictifs/Stupefiants/_fr";
import en from "@/locales/Risques-addictifs/Stupefiants/_en";

const dict = { fr, en };

const Stupefiants = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>

      <Sommaire links={t.navLinks} />

      <div id="ensemble">
        <h1 className="titre">{t.sectionEnsembleTitle}</h1>
      </div>

      <div id="resume-conseils">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.resumeIntro }}
        />
      </div>
      
      <ImageTextPopup
        image={t.carteValetTrefle.image}
        title={t.carteValetTrefle.title}
        shortText={t.carteValetTrefle.shortText}
        longText={t.carteValetTrefle.longText}
        textButton={t.carteValetTrefle.buttonText}
        suit={t.carteValetTrefle.suit}
      />

      <p className="sous-titre-2">{t.effectsTitle}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.effectsIntro }} />

      <BulletList
        items={t.effectsList.map((it, i) => (
          <span key={i} dangerouslySetInnerHTML={{ __html: it }} />
        ))}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.ifSuspect }} />

      <ExternalLinkBlock resources={t.resources4} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.contextIntro }} />

      <ChiffresGroup chiffres={t.data2} />

      <p className="sous-titre-2">{t.risksTitle}</p>
      <BulletList
        items={t.risquesList.map((it, i) => (
          <span key={i} dangerouslySetInnerHTML={{ __html: it }} />
        ))}
      />

      <ExternalLinkBlock resources={t.resources6} />

        <Separateur/>

      <div id="conso">
        <h1 className="titre">{t.sectionConsoTitle}</h1>
      </div>

      <div id="resume-conseils-2">
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.resumeConsoIntro }}
        />
      </div>

      <p className="sous-titre-2">{t.whyTitle}</p>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.whyIntro }} />

      <BulletList
        items={t.whyList.map((it, i) => (
          <span key={i} dangerouslySetInnerHTML={{ __html: it }} />
        ))}
      />

      <ExternalLinkBlock resources={t.resources5} />

      <Quote text={t.quote1} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.consoLongText }} />


      <h1 className="sous-titre-2">{t.reduceRisksTitle}</h1>
      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.reduceRisksIntro }}
      />

      <ListeNumerotee
        title={t.reduceRisksListTitle}
        items={t.reduceRisksList.map((it) => ({
          title: it.title,
          subtitle: it.subtitle,
        }))}
      />

      <h1 className="sous-titre-2">{t.regularUseTitle}</h1>

      <ImageTextPopup
        image={t.carte10Trefle.image}
        title={t.carte10Trefle.title}
        shortText={t.carte10Trefle.shortText}
        longText={t.carte10Trefle.longText}
        textButton={t.carte10Trefle.buttonText}
        suit={t.carte10Trefle.suit}
      />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.regularUseIntro1 }}
      />

      <p
        className="texte"
        dangerouslySetInnerHTML={{ __html: t.regularUseIntro2 }}
      />

      <BulletList
        items={t.regularUseList.map((it, i) => (
          <span key={i} dangerouslySetInnerHTML={{ __html: it }} />
        ))}
      />

      <h1 className="sous-titre-2">{t.helpTitle}</h1>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.helpIntro }} />

      <ExternalLinkBlock resources={t.resources2} />

      <h1 className="">{t.needTalkTitle}</h1>

      <div id="Contacts">
        <ContactCard {...t.contactCJC} />
        <ContactCard {...t.contactNightline} />
      </div>

      <Separateur />

      <div id="temoin">
        <h1 className="titre">{t.sectionTemoinTitle}</h1>
      </div>

      <div>
        <p
          className="mise-avant"
          dangerouslySetInnerHTML={{ __html: t.resumeTemoinIntro }}
        />
      </div>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.temoinIntro }} />

      <ListeNumerotee
        title={t.temoinListTitle}
        items={t.temoinList.map((it) => ({
          title: it.title,
          subtitle: it.subtitle ?? ""
        }))}
      />

      <Separateur />

      <div id="organiser">
        <h1 className="titre">{t.sectionOrganiserTitle}</h1>
      </div>

      <TextImageRight
        imageSrc={t.organiserImage}
        text={
          <div
            dangerouslySetInnerHTML={{ __html: t.organiserTextImageRight }}
          />
        }
      />

      <ExternalLinkBlock resources={t.resources} />

      <Separateur />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.sources }} />
    </div>
  );
};

export default Stupefiants;
