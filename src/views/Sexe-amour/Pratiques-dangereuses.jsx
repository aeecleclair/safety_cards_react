"use client";

import React from "react";
import "@/src/App.css";

import Quote from "@/components/Citation"; 
import ImageTextPopup from "@/components/Cartes"; 
import ListeNumerotee from "@/components/Listes";
import ExternalLinkBlock from "@/components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import { Chiffre, ChiffresGroup } from "@/components/Chiffres";
import Separateur from "@/components/Separateur";

import { useLanguage } from "@/app/providers/LanguageProvider";
import fr from "@/locales/Sexe-amour/Pratiques-dangereuses/_fr";
import en from "@/locales/Sexe-amour/Pratiques-dangereuses/_en";

const dict = { fr, en };

const Ist = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.pageTitle}</h1>
      <Sommaire links={t.navLinks} />

      <div id="quoi">
        <h1 className="titre">{t.quoiTitle}</h1>
      </div>
      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.quoiIntro }} />
      
      <ImageTextPopup
        image={t.carte7Coeur.image}
        title={t.carte7Coeur.title}
        shortText={t.carte7Coeur.shortText}
        longText={t.carte7Coeur.longText}
        textButton={t.carte7Coeur.textButton}
      />

      <h2 className="sous-titre-2">{t.detailsTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.detailsText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.detailsText2 }} />

      <ChiffresGroup chiffres={t.chiffres} />

      <p className="texte">{t.commonIstTitle}</p>

      <TextImageRight
        imageSrc="/assets/IST.png"
        text={<BulletList items={t.istList} />}
      />
      <p className="texte"><em>{t.illustrationSource}</em></p>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.vihSidaNote }} />
     
      <h2 className="sous-titre-2">{t.transmissionTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.transmissionIntro }} />
      <BulletList items={t.transmissionList} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.oralSexRisk }} />

      <h2 className="sous-titre-2">{t.symptomesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.symptomesIntro }} />
      <BulletList items={t.symptomesList} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.asymptomaticNote }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.consultNote }} />

      <ExternalLinkBlock resources={t.resourcesIntro} />

      <Separateur />

      <div id="se-proteger">
        <h1 className="titre">{t.protectionTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.protectionIntro }} />
      <BulletList items={t.protectionList} />
      
      <h2 className="sous-titre-2">{t.condomTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.condomText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.condomText2 }} />

      <ContactCard {...t.contactInfirmerie} />
      
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.oralProtection }} />
      <ExternalLinkBlock resources={t.resourcesOral} />
      
      <p className="texte">{t.condomLimit}</p>
      <p className="texte">{t.womenSexNote}</p>

      <ExternalLinkBlock resources={t.resourcesWomen} />

      <h2 className="sous-titre-2">{t.vaccinationTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.vaccinationIntro }} />
      <BulletList items={t.vaccinationList} />
      <p className="texte">{t.noVaccineNote}</p>

      <h2 className="sous-titre-2">{t.prepTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.prepText }} />
      <ExternalLinkBlock resources={t.resourcesPrep} />

      <h2 className="sous-titre-2">{t.prejugesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.prejugesIntro }} />
      <BulletList items={t.prejugesList} />

      <ExternalLinkBlock resources={t.pagesDiscri} />

      <Separateur />

      <div id="depistage">
        <h1 className="titre">{t.depistageTitle}</h1>
      </div>

      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.depistageIntro }} />

      <h2 className="sous-titre-2">{t.whenTitle}</h2>
      <p className="texte">{t.whenIntro}</p>
      <BulletList items={t.whenList} />

      <h2 className="sous-titre-2">{t.howTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.howText }} />

      <ContactCard {...t.contactCegidd} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.monTestIstText }} />
      <ExternalLinkBlock resources={t.resourcesDepistage} />

      <h2 className="sous-titre-2">{t.afterTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.afterText1 }} />
      <ExternalLinkBlock resources={t.pagesSexualite} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.afterNegative }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.afterPositive }} />

      <ListeNumerotee title={t.planAideTitle} items={t.planAideItems} />
      <ExternalLinkBlock resources={t.resourcesPartner} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.finalNote }} />

      <h2 className="sous-titre-2">{t.regularTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.regularText }} />

      <Separateur />

      <div id="traitements">
        <h1 className="titre">{t.traitementsTitle}</h1>
      </div>
      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.traitementsIntro }} />

      <h2 className="sous-titre-2">{t.traitementsDetailsTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.traitementsDetailsText }} />
      <ExternalLinkBlock resources={t.resourcesTreatments} />

      <p className="texte" dangerouslySetInnerHTML={{ __html: t.treatmentCompliance }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.treatmentPrecaution }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.treatmentFollowup }} />

      <ContactCard {...t.contactSidaInfo} />

      <h2 className="sous-titre-2">{t.pepTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.pepText }} />
      <ExternalLinkBlock resources={t.resourcesPep} />

      <Separateur />

      <div id="pratiques">
        <h1 className="titre">{t.pratiquesTitle}</h1>
      </div>
      <p className="mise-avant" dangerouslySetInnerHTML={{ __html: t.pratiquesIntro }} />
      <p className="texte">{t.pratiquesListIntro}</p>
      <BulletList items={t.pratiquesList} />

      <h2 className="sous-titre-2">{t.substancesTitle}</h2>
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.substancesText1 }} />
      <p className="texte" dangerouslySetInnerHTML={{ __html: t.substancesText2 }} />
      <ExternalLinkBlock resources={t.pagesConsentement} />

      <Separateur />
      <p className="texte"><em><b dangerouslySetInnerHTML={{ __html: t.sourcesLabel }} /> {t.sourcesList}</em></p>
    </div>
  );
};

export default Ist;