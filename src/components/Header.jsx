import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Importation de Link pour les liens
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../ThemeProvider";
import "./header.css";

// Pour désactiver une page : attribut inactive:true

const menuItems = [
  {
    title: "🙆 Connaissance de soi",
    submenu: [
      { title: "💛 Confiance & estime de soi", link: "/conf"},
      { title: "🏳️‍⚧️ Identité de genre", link: "/genre", inactive:true},
      { title: "🧍 Isolement", link: "/isolement"},
    ],
  },
  {
    title: "💉 Risques addictifs",
    submenu: [
      { title: "🔞 Addiction à la pornographie", link: "/add_porno", inactive:true},
      { title: "📱 Addictions aux écrans & réseaux sociaux", link: "/add_reseaux" },
      { title: "🍺 Consommation d'alcool", link: "/alcool" },
      { title: "🎆 Consommation de stupéfiants", link: "/stup" },
      { title: "🚬 Tabac & vapotage", link: "/tabac"},
    ],
  },
  {
    title: "⚕️ Santé",
    submenu: [
      { title: "🦓 Automutilation", link: "/automutil" },
      { title: "🥹 Dépression", link: "/depression" },
      { title: "🗺️ Déracinement culturel", link: "/deracinement", inactive:true },
      { title: "🩸 Endométriose & douleurs menstruelles", link: "/endom" },
      { title: "🧑‍🦯 Situation de handicap", link: "/handicap" },
      { title: "💤 Sommeil", link: "/sommeil", inactive:true },
      { title: "🍽️ Troubles des Conduites Alimentaires", link: "/tca", inactive:true },
      { title: "🗣️ Tentative de suicide", link: "/suicide", inactive:true },
    ],
  },
  {
    title: "💖 Sexualité et amour",
    submenu: [
      { title: "✅ Consentement", link: "/consent" },
      { title: "⚠️ IST", link: "/pratiques_sex", inactive:true },
      { title: "♀️ IVG", link: "/ivg", inactive:true },
      { title: "🏳️‍🌈 Orientation sexuelle", link: "/sex_orient" },
      { title: "💑 Relations de couple", link: "/couple" },
      { title: "⛔ Revenge porn", link: "/revenge" },
      { title: "😘 Sexualité", link: "/sex", inactive:true },
    ],
  },
  {
    title: "🕰️ Vie courante",
    submenu: [
      { title: "🚗 Accidents de la circulation", link: "/accident", inactive:true },
      { title: "🥬 Alimentation", link: "/aliment"  },
      { title: "😶‍🌫️ Anxiété", link: "/anxiete"  },
      { title: "🌿 Démarches écologiques", link: "/ecolo", inactive:true  },
      { title: "🧘 Détente & relaxation", link: "/detente", inactive:true  },
      { title: "💰 Précarité économique", link: "/prec_eco"  },
      { title: "💸 Précarité menstruelle", link: "/prec_mens"  },
      { title: "⛹️ Santé physique & sport", link: "/sport", inactive:true  },
      { title: "🛋️ Sédentarité", link: "/sedentarite"  },
      { title: "🏠 Risques domestiques", link: "/domestique" },
    ],
  },
  {
    title: "🧑‍🤝‍🧑 Vie de groupe",
    submenu: [
      { title: "📵 Cyberharcèlement", link: "/cyber_harcel" },
      { title: "🟰 Discriminations", link: "/discri", inactive:true  },
      { title: "🙅 Effet de groupe", link: "/groupe" },
      { title: "🩵 Empathie", link: "/empathie", inactive:true  },
      { title: "😠 Harcèlement", link: "/harcel" },
      { title: "🍾 Pratiques d'intégration", link: "/inte" },
      { title: "💊 Soumission chimique", link: "/soumission" },
      { title: "🫂 VSS", link: "/vss" },
    ],
  },
];



// Composant principal Header
const Header = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); //texte rouge lorsque sous menu ouvert
  const { darkMode, setDarkMode, enterModeSoiree, exitModeSoiree, modeSoireeActive } = useTheme(); 
  const [hasSommaire, setHasSommaire] = useState(window.__hasSommaire || false);
  const location = useLocation();
  const navigate = useNavigate();
  // Pages considérées comme faisant partie du "mode soirée"
  const modeSoireeRoutes = new Set([
    "/mode-soiree",
    "/contacts-urgence",
    "/plan-soiree",
  ]);
  // L'étiquette du bouton dépend uniquement de l'URL
  const inModeSoiree = modeSoireeRoutes.has(location.pathname);

  // Rend un lien de menu (actif/inactif) pour desktop et mobile
  const renderMenuLink = ({ title, link, inactive }, extraClass = "") => {
    const label = inactive ? `${title} 🚧` : title;
    const className = `${extraClass} ${inactive ? "inactive-link" : ""}`.trim();
    if (inactive) {
      // Lien inactif: grisé et non cliquable
      return (
        <span className={className} aria-disabled="true" role="link">
          {label}
        </span>
      );
    }
    // Titre principal de menu 
    if (!link) {
      return <a className={className}>{label}</a>;
    }
    return (
      <Link to={link} className={className}>
        {label}
      </Link>
    );
  };

  useEffect(() => {
    // Attend la fin du rendu pour lire la variable globale
    const timer = setTimeout(() => {
      setHasSommaire(window.__hasSommaire || false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  // Synchronise automatiquement le "mode soirée" avec l'URL
  useEffect(() => {
    const onModeRoute = modeSoireeRoutes.has(location.pathname);
    if (onModeRoute && !modeSoireeActive) {
      enterModeSoiree();
    } else if (!onModeRoute && modeSoireeActive) {
      exitModeSoiree();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, modeSoireeActive]);


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
          <Link to="/">
            <img src="/logo.png" alt="Logo Safety Cards" />
          </Link>
          <h1>safety cards</h1>
        </div>

        <ul>
          <li><Link to="/">Accueil</Link></li>

          {menuItems.map((item, index) => (
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

      <div className= "boutons_haut" >
          {inModeSoiree ? (
            <button
              className="mode-soiree quit-mode-soiree"
              onClick={() => {
                // On navigue, l'effet ci-dessous appellera exitModeSoiree()
                navigate("/");
              }}
            >
              <span className="close-website-icon">↩️</span> Quitter le mode soirée
            </button>
          ) : (
            <button
              className="mode-soiree"
              onClick={() => {
                // On navigue, l'effet ci-dessous appellera enterModeSoiree()
                navigate("/mode-soiree");
              }}
            >
              <span className="close-website-icon">🎉</span> Mode soirée
            </button>
          )}

          <ThemeToggle/>
          <button className="quit-site" onClick={() => window.location.href = "https://www.google.com/"}>
            <span className="close-website-icon">&times;</span> Quitter le site
          </button>
            
        </div>




      {/* Menu Burger pour mobile */}

      <div className = "bandeau">
        <div className="menu-burger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>


        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo Safety Cards" />
          </Link>
          <h1>safety cards</h1>
        </div>

        {/* Affiche l'icône sommaire si Navbar existe */}
        {hasSommaire && (
        <div className="navbar-burger" onClick={() => window.toggleNavbar?.()}>
          ⋮
        </div>
        )}

      </div>

      


      <div className={`menu ${menuOpen ? "show" : ""}`}>
          <span className="menu-close" onClick={() => setMenuOpen(false)}>&times;</span>
          {/* Affichage du sous-menu si un menu est actif */}
          
          <div className="logo-burger">
            <Link to="/" onClick={() => setMenuOpen(false)}>
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
                        <Link to={sub.link} onClick={() => setMenuOpen(false)} className="menu-button-style">
                          {sub.title}
                        </Link>
                      )}
                  </li>
                ))}
                
                <li className="menu-divider"></li>
                
                <li>
                  <button className="menu-button-style" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️ Thème clair" : "🌙 Thème sombre"}
                  </button>
                </li>


                <li>
                  <button className="menu-button-style" onClick={() => window.location.href = "https://www.google.com/"}>
                    <span className="close-website-icon">&times;</span> Quitter le site
                  </button>
                </li>

                <li>
                  {inModeSoiree ? (
                    <button className="menu-button-style" onClick={() => { setMenuOpen(false); navigate('/'); }}>
                      ↩️ Quitter le mode soirée
                    </button>
                  ) : (
                    <button className="menu-button-style" onClick={() => { setMenuOpen(false); navigate('/mode-soiree'); }}>
                      🎉 Mode soirée
                    </button>
                  )}
                </li>

              </ul>
            </div>
          ) : (
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button className="submenu-toggle" onClick={() => setActiveMenu(item)}>
                    {item.title} 
                  </button>
                </li>
              ))}
              
              <li className="menu-divider"></li>
              
              <li>
                <button className="menu-button-style" onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? "☀️ Thème clair" : "🌙 Thème sombre"}
                </button>
              </li>
             

              <li>
                <button className="menu-button-style" onClick={() => window.location.href = "https://www.google.com/"}>
                  <span className="close-website-icon">&times;</span> Quitter le site
                </button>
              </li>

                <li>
                  {inModeSoiree ? (
                    <button className="menu-button-style" onClick={() => { setMenuOpen(false); navigate('/'); }}>
                      ↩️ Quitter le mode soirée
                    </button>
                  ) : (
                    <button className="menu-button-style" onClick={() => { setMenuOpen(false); navigate('/mode-soiree'); }}>
                      🎉 Mode soirée
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
