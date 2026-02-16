import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";
import Separateur from "@/components/Separateur";
import ContactCard from "@/components/Contact";
import "@/src/App.css";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Sante/Automutilation/_fr.jsx";
import en from "@/locales/Sante/Automutilation/_en.jsx";


const dict = { fr, en };
  

const Automutilation = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.titlePage}</h1>
      <Sommaire links={t.navLinks} />

      <div id="automutilation">
        <h1 className="titre">{t.sectionDefinitionTitle}</h1>
      </div>

      <ImageTextPopup
        image={t.carte3_pique.image}
        title={t.carte3_pique.title}
        shortText={t.carte3_pique.shortText}
        longText={t.carte3_pique.longText}
        textButton={t.carte3_pique.buttonText}
        suit={t.carte3_pique.suit}
      />

      <h2 className="sous-titre-2">{t.nssiTitle}</h2>

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.nssiIntro }} />
      <BulletList items={t.nssiExamples} />

      <h2 className="sous-titre-2">{t.driversTitle}</h2>
      <TextImageRight text={t.driversText} imageSrc={t.driversImage} />

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.importantHtml }} />

      <p className="texte">{t.suicidePromptText}</p>
      <ExternalLinkBlock resources={t.suicideResources} />

      <h2 className="sous-titre-2">{t.statsTitle}</h2>
      <ChiffresGroup chiffres={t.statsData} />

      <ExternalLinkBlock
        title={t.resourcesInfosTitle}
        subtitle={t.resourcesInfosSubtitle}
        resources={t.resourcesInfos}
      />

      <Separateur />
      <div id="victime">
        <h1 className="titre">{t.victimSectionTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.cravingTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.cravingIntro }} />
      <BulletList items={t.cravingActions} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.servicesIntro }} />

      <ContactCard
        image={t.nightlineCard.image}
        title={t.nightlineCard.title}
        subtitle={t.nightlineCard.subtitle}
        phone={t.nightlineCard.phone}
        email={t.nightlineCard.email}
        hours={t.nightlineCard.hours}
        textButton={t.nightlineCard.textButton}
        link={t.nightlineCard.link}
      />
      <ContactCard
        image={t.line3114Card.image}
        title={t.line3114Card.title}
        subtitle={t.line3114Card.subtitle}
        phone={t.line3114Card.phone}
        email={t.line3114Card.email}
        hours={t.line3114Card.hours}
        textButton={t.line3114Card.textButton}
        link={t.line3114Card.link}
      />

      <h2 className="sous-titre-2">{t.afterCravingTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.afterCravingIntro }} />
      <BulletList items={t.afterCravingPoints} />

      <h2 className="sous-titre-2">{t.harmReductionTitle}</h2>
      <p className="texte">{t.harmReductionIntro}</p>
      <BulletList items={t.harmReductionList} />

      <h2 className="sous-titre-2">{t.needTalkTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.needTalkIntro }} />
      <ContactCard
        image={t.infirmaryCard.image}
        title={t.infirmaryCard.title}
        subtitle={t.infirmaryCard.subtitle}
        phone={t.infirmaryCard.phone}
        email={t.infirmaryCard.email}
        hours={t.infirmaryCard.hours}
        textButton={t.infirmaryCard.textButton}
        link={t.infirmaryCard.link}
        bgColor={t.infirmaryCard.bgColor}
        textColor={t.infirmaryCard.textColor}
      />

      <p className="texte">{t.longTermSupportIntro}</p>
      <ExternalLinkBlock resources={t.longTermSupportResources} />

      <Separateur />
      <div id="aidant">
        <h1 className="titre">{t.helperSectionTitle}</h1>
      </div>

      <h2 className="sous-titre-2">{t.signsTitle}</h2>
      <p className="text" dangerouslySetInnerHTML={{ __html: t.signsIntro }} />
      <BulletList items={t.signsList} />

      <h2 className="sous-titre-2">{t.reactTitle}</h2>
      <p className="text" dangerouslySetInnerHTML={{ __html: t.reactIntro }} />

      <ListeNumerotee
        title={t.actionPlanTitle}
        subtitle={t.actionPlanSubtitle}
        items={t.helperPlanItems}
      />

      <h2 className="sous-titre-2">{t.avoidTitle}</h2>
      <BulletList items={t.avoidList} />

      <h2 className="sous-titre-2">{t.pssmTitle}</h2>
      <TextImageRight text={t.pssmText} imageSrc={t.pssmImage} />

      <Separateur />

     <p className="texte">
        <em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}</em>
      </p>
    </div>
  );
};

export default Automutilation;