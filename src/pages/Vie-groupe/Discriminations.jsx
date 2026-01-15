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
import fr from "./Discriminations/fr.js";
import en from "./Discriminations/en.js";


const dict = { fr, en };

const Discriminations = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;

  return (
    <div className="page">
      <h1 className="titre-page">{t.title}</h1>
    <Sommaire links={t.navLinks} />

      <div id="definitions">
        <h1 className="titre">{t.definitionTitle}</h1>
        <ImageTextPopup
          image="./assets/cartes/valet_coeur.png"
          title={t.carteVcoeur.title}
          shortText={t.carteVcoeur.shortText}
          longText={t.carteVcoeur.longText}
          textButton={t.carteVcoeur.buttonText}
          suit="coeur"
        />

        <p className="texte">{t.definitionParagraph} </p>
        <BulletList items={t.motifsList}/>

        <p className="texte">{t.legalStatusParagraph}</p>

        <ExternalLinkBlock resources={t.discrimetreResources} />  

        <p className="texte">{t.rightsParagraph1}</p>

        <p className="texte">{t.socialNetworksParagraph}</p>

        <ExternalLinkBlock
          resources={t.resourcesPenale1}
        />

        <h2 className="sous-titre-2">{t.chiffresTitle} </h2>

        <ChiffresGroup chiffres={t.dataGeneral} />
        <p className="texte">{t.chiffresIntro} </p>

        <h2 className="sous-titre-2">{t.contactsDiscriminationTitle} </h2>

        <ContactCard {...t.celluleCard} />

        <p className="texte">{t.arbreDiscriphrase} </p>


        <ExternalLinkBlock
          resources={t.arbreDiscriResources}
        /> 


        <ContactCard {...t.antiDiscriminationsCard} />


      </div>
      
      <p className="texte">{t.autresPagesIntro} </p>
        <ExternalLinkBlock
        title=""
        subtitle=""
        resources={t.autres_pages_global}
      />

      <Separateur />


      <div id="sexistes">
        <h1 className="titre">{t.sexistesTitle}</h1>
        <p className="texte">{t.sexismes_paragraph1}</p>

        <h2 className="sous-titre-2">{t.sexistesFrequentTitle}</h2>
        <BulletList
          items={t.sexistesFrequentList}
        />

        <p className="texte">{t.sexistesStat}</p>

        <p className="texte">{t.sexistesVSSIntro}</p>
        <ExternalLinkBlock
          resources={t.autres_pages_sexisme}
        />

        <p>{t.violentometresIntro}</p>

        <ExternalLinkBlock
          resources={t.barometres}
        />

        <h2 className="sous-titre-2">{t.contactsSexistesTitle}</h2>
        
      <ContactCard {...t.arretonsViolencesCard} />

        <p className="texte">{t.sexistesAssociationsIntro}</p>

        <ExternalLinkBlock
          resources={t.sexistesAssociationsResources}
        />


        <p className="texte">{t.sexistesTalk}</p>
        
        <ExternalLinkBlock
          resources={t.sexistesArbreResources}
        />  
        


        <ExternalLinkBlock
          title={t.sexistesMoreTitle}
          subtitle={t.sexistesMoreSubtitle}
          resources={t.sexistesMoreResources}
        />

        <p className="texte">{t.sexismeDayText}</p>
        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.sexismeDayResources}
        />

      </div>

      <Separateur />

      <div id="racistes">
        <h1 className="titre">{t.racistesTitle}</h1>
        <ImageTextPopup
          image="./assets/cartes/8_carreau.png"
          title={t.carte8carreau.title}
          shortText={t.carte8carreau.shortText}
          longText={t.carte8carreau.longText}
          textButton={t.carte8carreau.buttonText}
          suit="carreau"
        />
        <p className="texte">{t.racistesParagraph1}</p>
        <h2 className="sous-titre-2">{t.racistesFrequentTitle}</h2>
        <BulletList
          items={t.racistesFrequentList}
        />
        <p className="texte">{t.racistesStat}</p>

          <h2 className="sous-titre-2">{t.contactsRacistesTitle}</h2>


        <ContactCard {...t.sosRacismeCard} />

        <ExternalLinkBlock

          resources={t.racistesResources}
        />

        <h2 className="sous-titre-2">{t.racistesMoreTitle}</h2>


        <p className="texte">{t.racistesMoreText}</p>
        <ExternalLinkBlock

          resources={t.racistesMoreResources}
        />
      </div>

      <Separateur />

      <div id="lgbtphobes">
        <h1 className="titre">{t.lgbtTitle}</h1>
        <ImageTextPopup {...t.carte9carreau}  />

        <p className="texte">{t.lgbtParagraph1}</p>

        <h2 className="sous-titre-2">{t.lgbtFrequentTitle}</h2>
        <BulletList
          items={t.lgbtFrequentList}
        />

        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.autres_pages_lgbtphobie}
        />

        <p className="texte">{t.lgbtStatParagraph}</p>

        <ExternalLinkBlock
          resources={t.lgbtRelatedResources}
        />

        <h2 className="sous-titre-2">{t.contactsLgbtTitle}</h2>


        <ContactCard {...t.centreLgbtiCard}/>

          <ExternalLinkBlock
          resources={t.lgbtExternalResources}
        />

        <h2 className="sous-titre-2">{t.lgbtMoreTitle}</h2>

        <p className="texte">{t.lgbtMoreText}</p>

        <ExternalLinkBlock
          title=""
          subtitle=""
          resources={t.lgbtMoreResources}
        />


      </div>

      <Separateur />

      <div id="temoin">
        <h1 className="titre">{t.temoinTitle}</h1>
        <p className="texte">{t.temoinIntro}</p>


        <ListeNumerotee
          title={t.actionsPossibleTitle}
          subtitle={t.actionsPossibleSubtitle}
          items={t.actionsPossibleList}
        />

        <p className="texte">{t.temoinConclusion}</p>
      </div>
      <Separateur />

      <p className="texte">{t.sources}</p>

      
    </div>
  );
};

export default Discriminations;