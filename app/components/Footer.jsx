"use client";

import React from 'react';
import Link from "next/link";
import { useLanguage } from "../providers/LanguageProvider";
import { assetPath } from "../utils/assetPath";
import "./footer.css";

const footerData = {
  fr: {
    disclaimer: "Aucune hiérarchie n'a été faite dans la présentation des thématiques ; leur ordre est alphabétique.",
    categories: [
      {
        title: "Connaissance de soi",
        links: [
          { path: "/conf", label: "Confiance & estime de soi" },
          { path: "/genre", label: "Identité de genre" },
          { path: "/isolement", label: "Isolement" },
        ],
      },
      {
        title: "Risques addictifs",
        links: [
          { path: "/add_porno", label: "Addiction à la pornographie" },
          { path: "/add_reseaux", label: "Addictions aux écrans & réseaux sociaux" },
          { path: "/alcool", label: "Consommation d'alcool" },
          { path: "/stup", label: "Consommation de stupéfiants" },
          { path: "/tabac", label: "Tabac & vapotage" },
        ],
      },
      {
        title: "Santé",
        links: [
          { path: "/anxiete", label: "Anxiété" },
          { path: "/automutil", label: "Automutilation" },
          { path: "/depression", label: "Dépression" },
          { path: "/deracinement", label: "Déracinement culturel" },
          { path: "/endom", label: "Endométriose & douleurs menstruelles" },
          { path: "/handicap", label: "Situation de handicap" },
          { path: "/sommeil", label: "Sommeil" },
          { path: "/tca", label: "Troubles des Conduites Alimentaires" },
          { path: "/suicide", label: "Tentative de suicide" },
        ],
      },
      {
        title: "Sexualité et amour",
        links: [
          { path: "/consent", label: "Consentement" },
          { path: "/pratiques_sex", label: "IST" },
          { path: "/ivg", label: "IVG" },
          { path: "/sex_orient", label: "Orientation sexuelle" },
          { path: "/couple", label: "Relations de couple" },
          { path: "/revenge", label: "Revenge porn" },
          { path: "/sex", label: "Sexualité et contraception" },
        ],
      },
      {
        title: "Vie courante",
        links: [
          { path: "/accident", label: "Accidents de la circulation" },
          { path: "/aliment", label: "Alimentation" },
          { path: "/ecolo", label: "Démarches écologiques" },
          { path: "/detente", label: "Détente & relaxation" },
          { path: "/prec_eco", label: "Précarité économique" },
          { path: "/prec_mens", label: "Précarité menstruelle" },
          { path: "/sport", label: "Santé physique & sport" },
          { path: "/sedentarite", label: "Sédentarité" },
          { path: "/domestique", label: "Risques domestiques" },
        ],
      },
      {
        title: "Vie de groupe",
        links: [
          { path: "/cyber_harcel", label: "Cyberharcèlement" },
          { path: "/discri", label: "Discriminations" },
          { path: "/groupe", label: "Effet de groupe" },
          { path: "/empathie", label: "Empathie" },
          { path: "/harcel", label: "Harcèlement" },
          { path: "/inte", label: "Pratiques d'intégration" },
          { path: "/soumission", label: "Soumission chimique" },
          { path: "/vss", label: "VSS" },
        ],
      },
    ],
    copyright: "© 2026 Safety Cards. Tous droits réservés.",
    logoSafetyAlt: "Logo Safety Cards",
    logoCentraleAlt: "Logo Centrale Lyon",
  },
  en: {
    disclaimer: "No hierarchy has been made in the presentation of topics; their order is alphabetical.",
    categories: [
      {
        title: "Self-awareness",
        links: [
          { path: "/conf", label: "Self-confidence & self-esteem" },
          { path: "/genre", label: "Gender identity" },
          { path: "/isolement", label: "Isolation" },
        ],
      },
      {
        title: "Addictions",
        links: [
          { path: "/add_porno", label: "Pornography addiction" },
          { path: "/add_reseaux", label: "Screen & social media addiction" },
          { path: "/alcool", label: "Alcohol consumption" },
          { path: "/stup", label: "Drug use" },
          { path: "/tabac", label: "Tobacco & vaping" },
        ],
      },
      {
        title: "Health",
        links: [
          { path: "/anxiete", label: "Anxiety" },
          { path: "/automutil", label: "Self-harm" },
          { path: "/depression", label: "Depression" },
          { path: "/deracinement", label: "Cultural uprooting" },
          { path: "/endom", label: "Endometriosis & menstrual pain" },
          { path: "/handicap", label: "Disability" },
          { path: "/sommeil", label: "Sleep" },
          { path: "/tca", label: "Eating disorders" },
          { path: "/suicide", label: "Suicide attempt" },
        ],
      },
      {
        title: "Sexuality & love",
        links: [
          { path: "/consent", label: "Consent" },
          { path: "/pratiques_sex", label: "STIs" },
          { path: "/ivg", label: "Abortion" },
          { path: "/sex_orient", label: "Sexual orientation" },
          { path: "/couple", label: "Relationships" },
          { path: "/revenge", label: "Revenge porn" },
          { path: "/sex", label: "Sexuality & contraception" },
        ],
      },
      {
        title: "Everyday life",
        links: [
          { path: "/accident", label: "Road accidents" },
          { path: "/aliment", label: "Nutrition" },
          { path: "/ecolo", label: "Eco-friendly actions" },
          { path: "/detente", label: "Relaxation" },
          { path: "/prec_eco", label: "Financial insecurity" },
          { path: "/prec_mens", label: "Period poverty" },
          { path: "/sport", label: "Physical health & sport" },
          { path: "/sedentarite", label: "Sedentary lifestyle" },
          { path: "/domestique", label: "Home hazards" },
        ],
      },
      {
        title: "Group life",
        links: [
          { path: "/cyber_harcel", label: "Cyberbullying" },
          { path: "/discri", label: "Discrimination" },
          { path: "/groupe", label: "Peer pressure" },
          { path: "/empathie", label: "Empathy" },
          { path: "/harcel", label: "Harassment" },
          { path: "/inte", label: "Hazing practices" },
          { path: "/soumission", label: "Drug-facilitated assault" },
          { path: "/vss", label: "VSS" },
        ],
      },
    ],
    copyright: "© 2026 Safety Cards. All rights reserved.",
    logoSafetyAlt: "Safety Cards logo",
    logoCentraleAlt: "Centrale Lyon logo",
  },
};

const Footer = () => {
  const { lang } = useLanguage() || { lang: 'fr' };
  const t = footerData[lang] || footerData.fr;
  return (
    <footer>
      <p>{t.disclaimer}</p>
      <div className="liens-footer">
        {t.categories.map((cat, idx) => (
          <div key={idx} className='liens-footer-col'>
            <p className='titre-categorie'>{cat.title}</p>
            <div>
              {cat.links.map((l, i) => (
                <React.Fragment key={l.path}>
                  <Link href={l.path}>{l.label}</Link>{i < cat.links.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="logos">
        <img src={assetPath("/assets/logo_nb_bis.png")} alt={t.logoSafetyAlt} className="logo-safety" />
        <img src={assetPath("/assets/2024_LOGO-CENTRALE-H_BLANC.png")} alt={t.logoCentraleAlt} className="logo-centrale" />
      </div>
      <p>{t.copyright}</p>
    </footer>
  );
};

export default Footer;
