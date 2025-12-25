import React from "react";
import "../../App.css";

import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, TextImageRight, AnchorButton } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { ChiffresGroup } from "../../components/Chiffres";
import ListeNumerotee from "../../components/Listes";
import ImageTextPopup from "../../components/Cartes"; 
import { useLanguage } from "../../LanguageProvider";
import fr from "./Suicide/fr.jsx";
import en from "./Suicide/en.jsx";

const dict = { fr, en };



const Suicide = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;
  return (
    <div className="page">
      <h1 className="titre-page">{t.titlePage}</h1>
      <Sommaire links={t.navLinks} />

      <div id="comprendre">
        <h1 className="titre">{t.understandTitle}</h1>
        
      <ImageTextPopup
        image={t.card7_pique.image}
        title={t.card7_pique.title}
        shortText={t.card7_pique.shortText}
        longText={t.card7_pique.longText}
        textButton={t.card7_pique.buttonText}
        suit={t.card7_pique.suit}
      />
        
        
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.introStatsHtml }} />

        <ChiffresGroup chiffres={t.statsData} />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.explainHtml }} />

        <ExternalLinkBlock resources={t.depressionResources} />
 

      <h2 className="sous-titre-2">{t.reasonsTitle}</h2>


      <p className="texte">{t.reasonsIntro}</p>

      <ul className="bullet-list">
        {t.reasonsListHtml.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>

     </div>

      <Separateur />

      <div id="souffrance">
        <h1 className="titre">{t.sufferingTitle}</h1>
        <p className="texte">
        </p>

        <h2 className="sous-titre-2">{t.feelBadTitle}</h2>
        <p className="texte">{t.feelBadIntro}</p>
        <ListeNumerotee
          title={t.feelBadTitle}
          subtitle={t.feelBadIntro}
          items={t.feelBadActions}
        />

        <ExternalLinkBlock resources={t.psyResources} />

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



        <h2 className="sous-titre-2">{t.suicidalIdeasTitle}</h2>
        <p className="texte">{t.suicidalIdeasIntro}</p>

        <ul className="bullet-list">
          {t.suicidalIdeasActionsHtml.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <AnchorButton target={t.securityPlanSectionId}>{t.anchorPlanButtonLabel}</AnchorButton>

        <ExternalLinkBlock resources={[t.resource3114]} />

        <h2 className="sous-titre-2">{t.whoToTalkTitle}</h2>
        <ul className="bullet-list">
          {t.whoToTalkListHtml.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <ContactCard
          image={t.contact3114Card.image}
          title={t.contact3114Card.title}
          subtitle={t.contact3114Card.subtitle}
          phone={t.contact3114Card.phone}
          email={t.contact3114Card.email}
          hours={t.contact3114Card.hours}
          textButton={t.contact3114Card.textButton}
          link={t.contact3114Card.link}
        />


      </div>

      <Separateur />

      <div id="inquiet">
        <h1 className="titre">{t.worriedTitle}</h1>

        <ImageTextPopup
          image={t.card4_diamond.image}
          title={t.card4_diamond.title}
          shortText={t.card4_diamond.shortText}
          longText={t.card4_diamond.longText}
          textButton={t.card4_diamond.buttonText}
          suit={t.card4_diamond.suit}
        />


        <h2 className="sous-titre-2">{t.signsTitle}</h2>

        <p className="texte">{t.signsIntro}</p>

        <ul className="bullet-list">
          {t.signsListHtml.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.cautionHtml }} />

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.alcoholDrugsHtml }} />

        <ExternalLinkBlock resources={t.risksLinks} />

      <ListeNumerotee 
        title ={t.actionPlanTitleSummary}
        subtitle={t.actionPlanSubtitleSummary}
        items={t.actionPlanItems} />

      <ExternalLinkBlock resources={[t.worriedExternalResource]} />

        <h2 className="sous-titre-2">{t.startConversationTitle}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.startConversationCheckHtml }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.startConversationPlaceHtml }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.startConversationMentionHtml }} />
        <BulletList items={t.startConversationExamples} />

        <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.askSuicideHtml }} />

        <p className="texte">{t.cannotLeadText}</p>

        <h2 className="sous-titre-2">{t.listenTitle}</h2>
        <ul className="bullet-list">
          {t.listenListHtml.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <h2 className="sous-titre-2">{t.urgencyTitle}</h2>
        <p className="texte">{t.urgencyIntro}</p>
        <ul className="bullet-list">
          {t.urgencyChecksHtml.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

      <div id={t.securityPlanSectionId}>

        <h2 className="sous-titre-2">{t.securityPlanSectionTitle}</h2>
      <ListeNumerotee 
        title ={t.securityPlanTitle}
        subtitle={t.securityPlanSubtitle}
        items={t.securityPlanItems} />

      <p className="mise-avant">{t.focusNote}</p>
      </div>

      <h2 className="sous-titre-2">{t.emergencyContactsTitle}</h2>

        <ContactCard
          image={t.contact3114.image}
          title={t.contact3114.title}
          subtitle={t.contact3114.subtitle}
          phone={t.contact3114.phone}
          email={t.contact3114.email}
          hours={t.contact3114.hours}
          textButton={t.contact3114.textButton}
          link={t.contact3114.link}
        />

      <ContactCard
        image={t.contactSAMU.image}
        title={t.contactSAMU.title}
        subtitle={t.contactSAMU.subtitle}
        phone={t.contactSAMU.phone}
        textButton={t.contactSAMU.textButton}
        link={t.contactSAMU.link}
        bgColor={t.contactSAMU.bgColor}
        textColor={t.contactSAMU.textColor}
      />

        <ContactCard
          image={t.contactInfirmary.image}
          title={t.contactInfirmary.title}
          subtitle={t.contactInfirmary.subtitle}
          phone={t.contactInfirmary.phone}
          email={t.contactInfirmary.email}
          hours={t.contactInfirmary.hours}
          textButton={t.contactInfirmary.textButton}
          link={t.contactInfirmary.link}
          bgColor={t.contactInfirmary.bgColor}
          textColor={t.contactInfirmary.textColor}
        />


      <h2 className="sous-titre-2">{t.selfHarmTitle}</h2>


        <p className="texte" dangerouslySetInnerHTML={{ __html: t.selfHarmIntroHtml }} />
      <p className="texte">{t.selfHarmRedirectText}</p>

      <ExternalLinkBlock resources={[t.selfHarmLink]} />

      <h2 className="sous-titre-2">{t.selfCareTitle}</h2>
      <p className="texte">{t.selfCareIntro}</p>
      <BulletList
        items={t.selfCareListHtml}
      />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.selfCareImpactHtml }} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.selfCareImportantHtml }} />
      <BulletList
        items={t.selfCareImportantListHtml}
      />

      </div>

      <Separateur />

      <div id="impact">
        <h1 className="titre">{t.impactTitle}</h1>

        <ImageTextPopup
          image={t.cardD_pique.image}
          title={t.cardD_pique.title}
          shortText={t.cardD_pique.shortText}
          longText={t.cardD_pique.longText}
          textButton={t.cardD_pique.buttonText}
          suit={t.cardD_pique.suit}
        />


        <p className="texte" dangerouslySetInnerHTML={{ __html: t.impactParagraph1Html }} />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.impactParagraph2Html }} />
        <p className="texte">{t.impactParagraph3}</p>

        <ExternalLinkBlock resources={t.impactResources} />
        
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

      </div>

      <Separateur />

      <div id="temoin">
        <h1 className="titre">{t.witnessTitle}</h1>

        <p className="texte">{t.witnessIntro}</p>

        <h2 className="sous-titre-2">{t.griefTitle}</h2>

        <p className="texte" dangerouslySetInnerHTML={{ __html: t.griefTextHtml }} />

        <ExternalLinkBlock resources={t.witnessResources} />


        <Separateur />
  
              <h2 className="sous-titre-2">{t.pssmTitle}</h2>
        
              <TextImageRight  text={t.pssmText} imageSrc={t.pssmImage} />
        
              <Separateur />
        
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.sourcesHtml }} />
  






      </div>


    </div>
  );
};

export default Suicide;
