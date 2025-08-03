import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importation de Link pour les liens
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../ThemeProvider";
import "./header.css";

const menuItems = [
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
      { title: "♀️ IVG", link: "/ivg" },
      { title: "🏳️‍🌈 Orientation sexuelle", link: "/sex_orient" },
      { title: "⚠️ IST", link: "/pratiques_sex" },
      { title: "💑 Relations de couple", link: "/couple" },
      { title: "⛔ Revenge porn", link: "/revenge" },
      { title: "😘 Sexualité", link: "/sex" },
    ],
  },
  {
    title: "🕰️ Vie courante",
    submenu: [
      { title: "🚗 Accidents de la circulation", link: "/accident" },
      { title: "🥬 Alimentation", link: "/aliment" },
      { title: "😶‍🌫️ Anxiété", link: "/anxiete" },
      { title: "🌿 Démarches écologiques", link: "/ecolo" },
      { title: "🧘 Détente & relaxation", link: "/detente" },
      { title: "💰 Précarité économique", link: "/prec_eco" },
      { title: "💸 Précarité menstruelle", link: "/prec_mens" },
      { title: "⛹️ Santé physique & sport", link: "/sport" },
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



// Composant principal Header
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); //texte rouge lorsque sous menu ouvert
  const { darkMode, setDarkMode } = useTheme(); 
  const [navbarOpen, setNavbarOpen] = useState(false);


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
              <Link to={item.link} className={`a ${hoveredIndex === index ? "hovered" : ""}`}>{item.title}</Link>

              <ul className="dropdown-menu" 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
                {item.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>

            </li>

          ))}


        </ul>
      </nav>

      <div className= "boutons_haut" >
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

        <div className="navbar-burger" onClick={() => window.toggleNavbar?.()}>
          ⌕
        </div>

      </div>

      


      <div className={`menu ${menuOpen ? "show" : ""}`}>
          <span className="menu-close" onClick={() => setMenuOpen(false)}>&times;</span>
          {/* Affichage du sous-menu si un menu est actif */}
          
          <div className="logo-burger">
            <Link to="/">
              <img src="/logo.png" alt="Logo Safety Cards" />
            </Link>
          </div>

          {activeMenu ? (
            <div className="submenu-container">
              <button className="menu-back" onClick={() => setActiveMenu(null)}>‹</button>
              <ul>
                {activeMenu.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.link} onClick={() => setMenuOpen(false)}>{sub.title}</Link>
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
              
            </ul>
          )}

      </div>
      
    </header>
  );
};

export default Header;
