"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../providers/ThemeProvider";
import { useLanguage } from "../providers/LanguageProvider";
import "./header.css";

// Pour désactiver une page : attribut inactive:true
const menuItemsFr = [
  {
    title: "🙆 Connaissance de soi",
    submenu: [
      { title: "💛 Confiance & estime de soi", link: "/conf" },
      { title: "🏳️‍⚧️ Identité de genre", link: "/genre" },
      { title: "🧍 Isolement", link: "/isolement" },
    ],
  },
  {
    title: "💉 Risques addictifs",
    submenu: [
      { title: "🔞 Addiction à la pornographie", link: "/add_porno" },
      { title: "📱 Addictions aux écrans & réseaux sociaux", link: "/add_reseaux" },
      { title: "🍺 Consommation d'alcool", link: "/alcool" },
      { title: "🎆 Consommation de stupéfiants", link: "/stup" },
      { title: "🚬 Tabac & vapotage", link: "/tabac" },
    ],
  },
  {
    title: "⚕️ Santé",
    submenu: [
      { title: "😶‍🌫️ Anxiété", link: "/anxiete" },
      { title: "🦓 Automutilation", link: "/automutil" },
      { title: "🥹 Dépression", link: "/depression" },
      { title: "🗺️ Déracinement culturel", link: "/deracinement" },
      { title: "🩸 Endométriose & douleurs menstruelles", link: "/endom" },
      { title: "🧑‍🦯 Situation de handicap", link: "/handicap" },
      { title: "💤 Sommeil", link: "/sommeil" },
      { title: "🍽️ Troubles des Conduites Alimentaires", link: "/tca" },
      { title: "🗣️ Tentative de suicide", link: "/suicide" },
    ],
  },
  {
    title: "💖 Sexualité et amour",
    submenu: [
      { title: "✅ Consentement", link: "/consent" },
      { title: "⚠️ IST", link: "/pratiques_sex" },
      { title: "♀️ IVG", link: "/ivg"},
      { title: "🏳️‍🌈 Orientation sexuelle", link: "/sex_orient" },
      { title: "💑 Relations de couple", link: "/couple" },
      { title: "⛔ Revenge porn", link: "/revenge" },
      { title: "😘 Sexualité et contraception", link: "/sex"},
    ],
  },
  {
    title: "🕰️ Vie courante",
    submenu: [
      { title: "🚗 Accidents de la circulation", link: "/accident"},
      { title: "🥬 Alimentation", link: "/aliment" },
      { title: "🌿 Démarches écologiques", link: "/ecolo" },
      { title: "🧘 Détente & relaxation", link: "/detente" },
      { title: "💰 Précarité économique", link: "/prec_eco" },
      { title: "💸 Précarité menstruelle", link: "/prec_mens" },
      { title: "⛹️ Santé physique & sport", link: "/sport"},
      { title: "🛋️ Sédentarité", link: "/sedentarite" },
      { title: "🏠 Risques domestiques", link: "/domestique" },
    ],
  },
  {
    title: "🧑‍🤝‍🧑 Vie de groupe",
    submenu: [
      { title: "📵 Cyberharcèlement", link: "/cyber_harcel" },
      { title: "🟰 Discriminations", link: "/discri" },
      { title: "🙅 Effet de groupe", link: "/groupe" },
      { title: "🩵 Empathie", link: "/empathie" },
      { title: "😠 Harcèlement", link: "/harcel" },
      { title: "🍾 Pratiques d'intégration", link: "/inte" },
      { title: "💊 Soumission chimique", link: "/soumission" },
      { title: "🫂 VSS", link: "/vss" },
    ],
  },
];

const menuItemsEn = [
  {
    title: "🙆 Self-awareness",
    submenu: [
      { title: "💛 Self-confidence & self-esteem", link: "/conf" },
      { title: "🏳️‍⚧️ Gender identity", link: "/genre" },
      { title: "🧍 Isolation", link: "/isolement" },
    ],
  },
  {
    title: "💉 Addictions",
    submenu: [
      { title: "🔞 Pornography addiction", link: "/add_porno" },
      { title: "📱 Screen & social media addiction", link: "/add_reseaux" },
      { title: "🍺 Alcohol consumption", link: "/alcool" },
      { title: "🎆 Drug use", link: "/stup" },
      { title: "🚬 Tobacco & vaping", link: "/tabac" },
    ],
  },
  {
    title: "⚕️ Health",
    submenu: [
      { title: "😶‍🌫️ Anxiety", link: "/anxiete" },
      { title: "🦓 Self-harm", link: "/automutil" },
      { title: "🥹 Depression", link: "/depression" },
      { title: "🗺️ Cultural uprooting", link: "/deracinement" },
      { title: "🩸 Endometriosis & menstrual pain", link: "/endom" },
      { title: "🧑‍🦯 Disability", link: "/handicap" },
      { title: "💤 Sleep", link: "/sommeil" },
      { title: "🍽️ Eating disorders", link: "/tca" },
      { title: "🗣️ Suicide attempt", link: "/suicide" },
    ],
  },
  {
    title: "💖 Sexuality & love",
    submenu: [
      { title: "✅ Consent", link: "/consent" },
      { title: "⚠️ STIs", link: "/pratiques_sex" },
      { title: "♀️ Abortion", link: "/ivg"},
      { title: "🏳️‍🌈 Sexual orientation", link: "/sex_orient" },
      { title: "💑 Relationships", link: "/couple" },
      { title: "⛔ Revenge porn", link: "/revenge" },
      { title: "😘 Sexuality & contraception", link: "/sex"},
    ],
  },
  {
    title: "🕰️ Everyday life",
    submenu: [
      { title: "🚗 Road accidents", link: "/accident"},
      { title: "🥬 Nutrition", link: "/aliment" },
      { title: "🌿 Eco-friendly actions", link: "/ecolo" },
      { title: "🧘 Relaxation", link: "/detente" },
      { title: "💰 Financial insecurity", link: "/prec_eco" },
      { title: "💸 Period poverty", link: "/prec_mens" },
      { title: "⛹️ Physical health & sport", link: "/sport"},
      { title: "🛋️ Sedentary lifestyle", link: "/sedentarite" },
      { title: "🏠 Home hazards", link: "/domestique" },
    ],
  },
  {
    title: "🧑‍🤝‍🧑 Group life",
    submenu: [
      { title: "📵 Cyberbullying", link: "/cyber_harcel" },
      { title: "🟰 Discrimination", link: "/discri" },
      { title: "🙅 Peer pressure", link: "/groupe" },
      { title: "🩵 Empathy", link: "/empathie" },
      { title: "😠 Harassment", link: "/harcel" },
      { title: "🍾 Hazing practices", link: "/inte" },
      { title: "💊 Drug-facilitated assault", link: "/soumission" },
      { title: "🫂 VSS", link: "/vss" },
    ],
  },
];

const texts = {
  fr: {
    home: "Accueil",
    logoAlt: "Logo Safety Cards",
    themeLight: "☀️ Thème clair",
    themeDark: "🌙 Thème sombre",
    quitSite: "Quitter le site",
    partyMode: "🎉 Mode soirée",
    exitPartyMode: "↩️ Quitter le mode soirée",
  },
  en: {
    home: "Home",
    logoAlt: "Safety Cards logo",
    themeLight: "☀️ Light theme",
    themeDark: "🌙 Dark theme",
    quitSite: "Exit site",
    partyMode: "🎉 Party mode",
    exitPartyMode: "↩️ Exit party mode",
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hasSommaire, setHasSommaire] = useState(false);
  const { darkMode, setDarkMode, enterModeSoiree, exitModeSoiree, modeSoireeActive } = useTheme() || {};
  const { lang, toggleLanguage } = useLanguage() || { lang: 'fr' };
  const pathname = usePathname();
  const router = useRouter();

  const modeSoireeRoutes = new Set([
    "/mode-soiree",
    "/contacts-urgence",
    "/plan-soiree",
  ]);
  const inModeSoiree = modeSoireeRoutes.has(pathname);

  const renderMenuLink = ({ title, link, inactive }, extraClass = "") => {
    const label = inactive ? `${title} 🚧` : title;
    const className = `${extraClass} ${inactive ? "inactive-link" : ""}`.trim();
    if (inactive) {
      return (
        <span className={className} aria-disabled="true" role="link">
          {label}
        </span>
      );
    }
    if (!link) {
      return <a className={className}>{label}</a>;
    }
    return (
      <Link href={link} className={className}>
        {label}
      </Link>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasSommaire(typeof window !== 'undefined' && window.__hasSommaire || false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!enterModeSoiree || !exitModeSoiree) return;
    const onModeRoute = modeSoireeRoutes.has(pathname);
    if (onModeRoute && !modeSoireeActive) {
      enterModeSoiree();
    } else if (!onModeRoute && modeSoireeActive) {
      exitModeSoiree();
    }
  }, [pathname, modeSoireeActive]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {/* Menu Desktop */}
      <nav className="desktop-menu">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt={texts[lang]?.logoAlt || texts.fr.logoAlt} />
          </Link>
          <h1>safety cards</h1>
        </div>

        <ul>
          <li><Link href="/">{texts[lang]?.home || texts.fr.home}</Link></li>

          {(lang === 'en' ? menuItemsEn : menuItemsFr).map((item, index) => (
            <li key={index} className="dropdown" >
              {renderMenuLink(
                { title: item.title, link: item.link, inactive: item.inactive },
                `a ${hoveredIndex === index ? "hovered" : ""}`
              )}

              <ul className="dropdown-menu" 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
                {item.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    {renderMenuLink(
                      { title: sub.title, link: sub.link, inactive: sub.inactive },
                      "a"
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Burger pour mobile */}
      <div className="bandeau">
        <div className="menu-burger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt={texts[lang]?.logoAlt || texts.fr.logoAlt} />
          </Link>
          <h1>safety cards</h1>
        </div>

        {hasSommaire && (
          <div className="navbar-burger" onClick={() => typeof window !== 'undefined' && window.toggleNavbar?.()}>
            ⋮
          </div>
        )}
      </div>

      <div className={`menu ${menuOpen ? "show" : ""}`}>
        <span className="menu-close" onClick={() => setMenuOpen(false)}>&times;</span>
        
        <div className="logo-burger">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Logo Safety Cards" />
          </Link>
        </div>

        {activeMenu ? (
          <div className="submenu-container">
            <button className="menu-back" onClick={() => setActiveMenu(null)}>‹</button>
            <ul>
              {activeMenu.submenu.map((sub, subIndex) => (
                <li key={subIndex}>
                  {sub.inactive
                    ? (
                      <span className="menu-button-style inactive-link" aria-disabled="true" role="link">
                        {`${sub.title} 🚧`}
                      </span>
                    )
                    : (
                      <Link href={sub.link} onClick={() => setMenuOpen(false)} className="menu-button-style">
                        {sub.title}
                      </Link>
                    )}
                </li>
              ))}
              
              <li className="menu-divider"></li>
              
              <li>
                <button
                  className="menu-button-style"
                  onClick={() => { toggleLanguage?.(); setMenuOpen(false); }}
                  aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
                >
                  <span aria-hidden>
                    {lang === 'fr' ? (
                      <svg width="18" height="18" viewBox="0 0 60 36" role="img" aria-hidden="true" style={{ verticalAlign: 'text-bottom', marginRight: 6 }}>
                        <defs>
                          <clipPath id="uk-clip-header"><rect width="60" height="36" rx="3" ry="3"/></clipPath>
                        </defs>
                        <g clipPath="url(#uk-clip-header)">
                          <rect width="60" height="36" fill="#012169"/>
                          <path d="M0,0 L8,0 L60,28 L60,36 L52,36 L0,8 Z" fill="#fff"/>
                          <path d="M60,0 L52,0 L0,28 L0,36 L8,36 L60,8 Z" fill="#fff"/>
                          <path d="M0,0 L4.5,0 L60,27 L60,36 L55.5,36 L0,9 Z" fill="#C8102E"/>
                          <path d="M60,0 L55.5,0 L0,27 L0,36 L4.5,36 L60,9 Z" fill="#C8102E"/>
                          <rect x="25" width="10" height="36" fill="#fff"/>
                          <rect y="13" width="60" height="10" fill="#fff"/>
                          <rect x="27.5" width="5" height="36" fill="#C8102E"/>
                          <rect y="15.5" width="60" height="5" fill="#C8102E"/>
                        </g>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 60 36" role="img" aria-hidden="true" style={{ verticalAlign: 'text-bottom', marginRight: 6 }}>
                        <rect width="60" height="36" rx="3" ry="3" fill="#fff"/>
                        <rect width="20" height="36" rx="3" ry="3" fill="#0055A4"/>
                        <rect x="40" width="20" height="36" rx="3" ry="3" fill="#EF4135"/>
                      </svg>
                    )}
                  </span>
                  {lang === 'fr' ? 'English version (coming soon)' : 'Version française'}
                </button>
              </li>

              <li>
                <button className="menu-button-style" onClick={() => setDarkMode?.(!darkMode)}>
                  {darkMode ? (texts[lang]?.themeLight || texts.fr.themeLight) : (texts[lang]?.themeDark || texts.fr.themeDark)}
                </button>
              </li>

              <li>
                <button className="menu-button-style" onClick={() => window.location.href = "https://www.google.com/"}>
                  <span className="close-website-icon">&times;</span> {texts[lang]?.quitSite || texts.fr.quitSite}
                </button>
              </li>

              <li>
                {inModeSoiree ? (
                  <button className="menu-button-style" onClick={() => { setMenuOpen(false); router.push('/'); }}>
                    {texts[lang]?.exitPartyMode || texts.fr.exitPartyMode}
                  </button>
                ) : (
                  <button className="menu-button-style" onClick={() => { setMenuOpen(false); router.push('/mode-soiree'); }}>
                    {texts[lang]?.partyMode || texts.fr.partyMode}
                  </button>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <ul>
            {(lang === 'en' ? menuItemsEn : menuItemsFr).map((item, index) => (
              <li key={index}>
                <button className="submenu-toggle" onClick={() => setActiveMenu(item)}>
                  {item.title} 
                </button>
              </li>
            ))}
            
            <li className="menu-divider"></li>
            
            <li>
              <button
                className="menu-button-style"
                onClick={() => { toggleLanguage?.(); setMenuOpen(false); }}
                aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              >
                <span aria-hidden>
                  {lang === 'fr' ? (
                    <svg width="18" height="18" viewBox="0 0 60 36" role="img" aria-hidden="true" style={{ verticalAlign: 'text-bottom', marginRight: 6 }}>
                      <defs>
                        <clipPath id="uk-clip-header-2"><rect width="60" height="36" rx="3" ry="3"/></clipPath>
                      </defs>
                      <g clipPath="url(#uk-clip-header-2)">
                        <rect width="60" height="36" fill="#012169"/>
                        <path d="M0,0 L8,0 L60,28 L60,36 L52,36 L0,8 Z" fill="#fff"/>
                        <path d="M60,0 L52,0 L0,28 L0,36 L8,36 L60,8 Z" fill="#fff"/>
                        <path d="M0,0 L4.5,0 L60,27 L60,36 L55.5,36 L0,9 Z" fill="#C8102E"/>
                        <path d="M60,0 L55.5,0 L0,27 L0,36 L4.5,36 L60,9 Z" fill="#C8102E"/>
                        <rect x="25" width="10" height="36" fill="#fff"/>
                        <rect y="13" width="60" height="10" fill="#fff"/>
                        <rect x="27.5" width="5" height="36" fill="#C8102E"/>
                        <rect y="15.5" width="60" height="5" fill="#C8102E"/>
                      </g>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 60 36" role="img" aria-hidden="true" style={{ verticalAlign: 'text-bottom', marginRight: 6 }}>
                      <rect width="60" height="36" rx="3" ry="3" fill="#fff"/>
                      <rect width="20" height="36" rx="3" ry="3" fill="#0055A4"/>
                      <rect x="40" width="20" height="36" rx="3" ry="3" fill="#EF4135"/>
                    </svg>
                  )}
                </span>
                {lang === 'fr' ? 'English version (coming soon)' : 'Version française'}
              </button>
            </li>

            <li>
              <button className="menu-button-style" onClick={() => setDarkMode?.(!darkMode)}>
                {darkMode ? (texts[lang]?.themeLight || texts.fr.themeLight) : (texts[lang]?.themeDark || texts.fr.themeDark)}
              </button>
            </li>

            <li>
              <button className="menu-button-style" onClick={() => window.location.href = "https://www.google.com/"}>
                <span className="close-website-icon">&times;</span> {texts[lang]?.quitSite || texts.fr.quitSite}
              </button>
            </li>

            <li>
              {inModeSoiree ? (
                <button className="menu-button-style" onClick={() => { setMenuOpen(false); router.push('/'); }}>
                  {texts[lang]?.exitPartyMode || texts.fr.exitPartyMode}
                </button>
              ) : (
                <button className="menu-button-style" onClick={() => { setMenuOpen(false); router.push('/mode-soiree'); }}>
                  {texts[lang]?.partyMode || texts.fr.partyMode}
                </button>
              )}
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
