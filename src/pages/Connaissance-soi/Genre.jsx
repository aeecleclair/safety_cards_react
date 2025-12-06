import React from "react";
import "../../App.css";
import Quote from "../../components/Citation";
import ImageTextPopup from "../../components/Cartes";
import ListeNumerotee from "../../components/Listes";
import ExternalLinkBlock from "../../components/Liens-ext";
import { BulletList, NumberedList, TextImageRight, ImageCenter, YouTubeVideo } from "../../components/Common";
import Sommaire from "../../components/Sommaire";
import ContactCard from "../../components/Contact";
import Separateur from "../../components/Separateur";
import { Chiffre, ChiffresGroup } from "../../components/Chiffres";
import { useLanguage } from "../../LanguageProvider";
import fr from "./Genre/fr.jsx";
import en from "./Genre/en.jsx";

const dict = { fr, en };

// chiffres now provided by localization files



const étapesAccompagnement = [
  {
    title: "Utilisez les bons pronoms et prénoms",
    subtitle:
      "Employer le nouveau prénom et les pronoms choisis est un vrai soutien ; si vous vous trompez, excusez‑vous et corrigez‑vous.",
  },
  {
    title: "La transition est rétro‑active",
    subtitle:
      "Parlez du passé avec les pronoms actuels ; privilégiez des tournures neutres si besoin.",
  },
  {
    title: "Manifestez votre soutien activement",
    subtitle:
      "Exprimez clairement votre appui et, si vous êtes cis, utilisez votre position pour relayer sa voix face aux hostilités.",
  },
  {
    title: "Connaissez vos limites",
    subtitle:
      "Mieux vaut admettre un manque d’information que dire des inexactitudes qui blessent ou induisent en erreur.",
  },
  {
    title: "Votre proche n’est pas QUE trans",
    subtitle:
      "Il/elle reste la même personne, avec ses centres d’intérêt, ses projets et ses qualités.",
  },
  {
    title: "Soyez digne de confiance",
    subtitle:
      "Ne révélez jamais la transidentité sans consentement ; gardez l’info pour vous si vous n’êtes pas sûr·e.",
  },
  {
    title: "Trouvez une manière de relâcher la pression",
    subtitle:
      "Parlez de vos émotions avec un·e pro ou un·e ami·e de confiance plutôt que de les faire peser sur votre proche en transition.",
  },
  {
    title: "Évitez les sujets sensibles",
    subtitle:
      "Les questions intimes (ex. opérations) ne vous regardent pas ; si vous savez quelque chose, gardez‑le pour vous.",
  },
];


const resources_Autres_pages = [
  {
    link: "/discri",
    emoji : "🟰",
    label: "Discriminations",
    description: "Comment réagir et soutenir face aux discriminations ?",
  },
  {
    link: "https://chrysalide-asso.fr/nos-documents/reagir-face-a-la-transphobie/",
    label: "Brochure",
    description: "Réagir face à la transphobie : conseils à l'usage des personnes trans",
    imageSrc: "/assets/chrysalide.png"
  },
];


const Genre = () => {
  const { lang } = useLanguage();
  const t = dict[lang] || fr;
  return (
    <div className="page">
  <h1 className="titre-page gradient-title">{t.pageTitle}</h1>

      <Sommaire links={t.navLinks} />

      <div id="definition" className="section">
        <h2 className="titre">{t.navLinks[0]?.label}</h2>

      <ImageTextPopup
        image={t.card.image}
        title={t.card.title}
        shortText={t.card.shortText}
        longText={t.card.longText}
        textButton={t.card.textButton}
      />

        <TextImageRight
          imageSrc="/assets/personne-gingenre.jpg"
          enlargeOnClick
          text={<p className="texte">{t.definitionText}</p>}
        />

        <h3 className="sous-titre-2">{t.examplesTitle}</h3>

              <BulletList items={t.examplesBullets} />

              <ExternalLinkBlock resources={t.resourcesOrientation} />

              <ChiffresGroup chiffres={t.chiffresIdentite} />


              <h3 className="sous-titre-2">{t.dysphoriaTitle}</h3>

              <p className="texte">{t.dysphoriaText}</p>

              <ExternalLinkBlock
                resources={t.dysphoriaResources}
              />

              <Quote text={t.quote1} />



        <ExternalLinkBlock
          title={t.learnMoreTitle}
          subtitle={t.learnMoreSubtitle}
          resources={t.learnMoreResources}
        />
      </div>

      <Separateur />

      <div id="concernes" className="section">
        <h2 className="titre">{t.navLinks[1]?.label}</h2>

        <p className="texte">{t.concernsIntro}</p>

        <ExternalLinkBlock resources={t.concernsLinks} />



        <h3 className="sous-titre-2">{t.knowExperimentTitle}</h3>
        <BulletList
          items={t.knowExperimentBullets}
        />


        <h3 className="sous-titre-2">{t.informTitle}</h3>

        <p className="texte">{t.informIntro}</p>

          <BulletList items={t.informBullets} />

          <p className="texte">{t.informBrochuresNote}</p>

          <ExternalLinkBlock resources={t.infoResources} />

       


        <h3 className="sous-titre-2">{t.associationsTitle}</h3>
        <p className="texte">{t.associationsText}</p>

        {t.associationsContacts && t.associationsContacts[0] && (
          <ContactCard
            image={t.associationsContacts[0].image}
            title={t.associationsContacts[0].title}
            subtitle={t.associationsContacts[0].subtitle}
            phone={t.associationsContacts[0].phone}
            email={t.associationsContacts[0].email}
            hours={t.associationsContacts[0].hours}
            textButton={t.associationsContacts[0].textButton}
            link={t.associationsContacts[0].link}
            bgColor={t.associationsContacts[0].bgColor}
            textColor={t.associationsContacts[0].textColor}
          />
        )}
        {t.associationsContacts && t.associationsContacts[1] && (
          <ContactCard
            image={t.associationsContacts[1].image}
            title={t.associationsContacts[1].title}
            subtitle={t.associationsContacts[1].subtitle}
            phone={t.associationsContacts[1].phone}
            email={t.associationsContacts[1].email}
            hours={t.associationsContacts[1].hours}
            textButton={t.associationsContacts[1].textButton}
            link={t.associationsContacts[1].link}
            bgColor={t.associationsContacts[1].bgColor}
            textColor={t.associationsContacts[1].textColor}
          />
        )}


        <ExternalLinkBlock resources={t.associationsLinks} />

        <h3 className="sous-titre-2">{t.adminTitle}</h3>

        <p className="texte">{t.adminText}</p>

        <ExternalLinkBlock resources={t.adminLinks} />

      </div>
      

      <h2 className="sous-titre-2">{t.discriTitle}</h2>
        <p className="texte">{t.discriIntro}</p>
        <ExternalLinkBlock resources={t.discriResources} />

        <p className="texte">{t.discriLegalNote}</p>

        <Quote text={t.quote2} />

          <h2 className="sous-titre-2">{t.distressTitle}</h2>

          <p className="texte">{t.distressIntro}</p>


          <ContactCard
          image={t.distressContact.image}
          title={t.distressContact.title}
          subtitle={t.distressContact.subtitle}
          phone={t.distressContact.phone}
          hours={t.distressContact.hours}
          textButton={t.distressContact.textButton}
          link={t.distressContact.link}
          bgColor={t.distressContact.bgColor}
          textColor={t.distressContact.textColor}
        />




      <Separateur />

      <div id="accompagner" className="section">
        <h2 className="titre">{t.supportTitle}</h2>

        <p className="texte">{t.supportIntro}</p>

        <ListeNumerotee title="Conseils pour être un meilleur soutien" items={t.supportSteps} />





        <ExternalLinkBlock
          title={t.supportResourcesTitle}
          subtitle={t.supportResourcesSubtitle}
          resources={t.supportResources}
        />

      </div>
    


      <Separateur />

      <p className="texte">
        <em>{t.sourcesText}</em>
      </p>
    </div>
  );
};

export default Genre;
