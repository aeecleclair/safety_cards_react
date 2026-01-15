"use client";

import React from "react";
import "@/src/App.css";
import ExternalLinkBlock from "@/components/Liens-ext";
import ImageTextPopup from "@/components/Cartes";
import ListeNumerotee from "@/components/Listes";
import { BulletList, TextImageRight } from "@/components/Common";
import Sommaire from "@/components/Sommaire";
import ContactCard from "@/components/Contact";
import Separateur from "@/components/Separateur";
import { ChiffresGroup } from "@/components/Chiffres";
import { img } from "framer-motion/m";

import { useLanguage } from "../../LanguageProvider";
import fr from "./Orientation/fr.js";
import en from "./Orientation/en.js";

const dict = { fr, en };

const Orientation = () => {
  const { lang } = useLanguage();
  const t = (lang === "en" ? en : fr);

  return (
    <div className="page">
      <h1 className="titre-page gradient-title">{t.title}</h1>
      <Sommaire links={t.navLinks} />

      <div id="definitions">
          <h2 className="titre">{t.definitionsTitle}</h2>
        <ImageTextPopup
          image={t.carteA_coeur.image}
          title={t.carteA_coeur.title}
          shortText={t.carteA_coeur.shortText}
          longText={t.carteA_coeur.longText}
          textButton={t.carteA_coeur.buttonText}
          suit={t.carteA_coeur.suit}
        />
        
        <p dangerouslySetInnerHTML={{ __html: t.definitionText1 }} />


      </div>

      <div>
        <h2 className="sous-titre-2">{t.reperesTitle}</h2>
        <p className="texte">{t.reperesIntro}</p>
        <ul className="list-disc ml-6 mt-2 flex flex-col gap-1">
          {t.reperesList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      <ExternalLinkBlock resources={t.id_genre} />

      <ChiffresGroup chiffres={t.chiffres} />
      
        <h2 className="sous-titre-2">{t.connaitreOriTitle}</h2>
        <p className="texte">{t.connaitreOriText1}</p>
        <p className="texte">{t.connaitreOriText2}</p>
        <p className="texte">{t.connaitreOriText3}</p>
      <ContactCard {...t.cardCommentonsaime} />

      <div>
        <h2 className="sous-titre-2">{t.heteronormTitle}</h2>
        <p className="texte">{t.heteronormText1}</p>
        <p className="texte">{t.heteronormText2}</p>
      </div>

        <h2 className="sous-titre-2">{t.outingTitle}</h2>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t.outingText1 }} />
        <p className="texte">{t.outingText2}</p>

        <ExternalLinkBlock resources={t.outing} />
        <h2 className="sous-titre-2">{t.ressourcesSexTitle}</h2>
        <ExternalLinkBlock resources={t.ressourcesSex} />

      {/* Discriminations */}
      <div>
        <h2 className="sous-titre-2">{t.discriTitle}</h2>
        <p className="texte">{t.discriText}</p>
      </div>
      
      <ExternalLinkBlock resources={t.resAutresPages} />

      <Separateur/>
      <div id="comingout">
        <h1 className="titre">{t.comingOutTitle}</h1>
          <p className="texte">{t.comingOutIntro}</p>
        
        <h2 className="sous-titre-2">{t.comingOutConseilsTitle}</h2>
        <BulletList items={t.comingOutConseilsList} />
        
        <ContactCard {...t.cardFSJ} />
   
      </div>
      
      
        <ExternalLinkBlock
                title={t.ressourcesGeneralesTitle}
                subtitle={t.ressourcesGeneralesSubtitle}
                resources={t.ressourcesGenerales}
        />
      
      
      
      <Separateur />

      <div id="soutien">
        <h1 className="titre">{t.soutienTitle}</h1>
        <p className="texte">{t.soutienIntro}</p>

        <ListeNumerotee
          title={t.listeNumerotee.title}
          subtitle={t.listeNumerotee.sutitle}
          items={t.listeNumerotee.items}
        />

        <p className="texte">{t.soutienText}</p>

        <ContactCard {...t.cardInfirmerie}/>

        <ContactCard {...t.cardCrous}/>


      </div>

      <Separateur />

      {/* Sources */}
      <p className="texte">
        <em>
          <b>{t.sourcesPrefix}</b> {t.sources}
        </em>
      </p>

    </div>
  );
}
export default Orientation;
