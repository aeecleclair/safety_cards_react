import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importation de Link pour les liens
import "./header.css";

const menuItems = [
  {
    title: "🙆 Connaissance de soi",
    link: "/Connaissance-de-soi-main",
    submenu: [
      { title: "Confiance, estime de soi", link: "/connaissance-de-soi/confiance" },
      { title: "Identité de genre", link: "/connaissance-de-soi/identite-genre" },
      { title: "Isolement", link: "/connaissance-de-soi/isolement" },
    ],
  },
  {
    title: "💉 Risques addictifs",
    link: "/Risques-addictifs-main",
    submenu: [
      { title: "Addiction à la pornographie", link: "/risques-addictifs/pornographie" },
      { title: "Addictions aux drogues", link: "/risques-addictifs/drogues" },
      { title: "Addiction aux écrans et réseaux sociaux", link: "/risques-addictifs/ecrans" },
    ],
  },
  {
    title: "⚕️ Santé",
    link: "/Sante-main",
    submenu: [
      { title: "Automutilation", link: "/automutil" },
      { title: "Dépression", link: "/depression" },
      { title: "Déracinement culturel", link: "/deracinement" },
      { title: "Endométriose & douleurs menstruelles", link: "/endom" },
      { title: "Situation de handicap", link: "/handicap" },
      { title: "Sommeil", link: "/sommeil" },
      { title: "TCA", link: "/tca" },
      { title: "Tentative de suicide", link: "/suicide" },
    ],
  },
  {
    title: "💖 Sexualité et amour",
    link: "/Sexe-amour-main",
    submenu: [
      { title: "Consentement", link: "/sexe-amour/consentement" },
      { title: "Contraception", link: "/sexe-amour/contraception" },
      { title: "IST et prévention", link: "/sexe-amour/ist-prevention" },
    ],
  },
  {
    title: "🕰️ Vie courante",
    link: "/Vie-courante-main",
    submenu: [
      { title: "🚗 Accidents de la circulation", link: "/accident" },
      { title: "🥬 Alimentation", link: "/aliment" },
      { title: "😶‍🌫️ Anxiété", link: "/anxiete" },
      { title: "🌿 Démarches écologiques", link: "/ecolo" },
      { title: "🧘 Détente & relaxation", link: "/detente" },
      { title: "💰 Précarité économique", link: "/prec_eco" },
      { title: "🩸 Précarité menstruelle", link: "/prec_mens" },
      { title: "⛹️ Santé physique & sport", link: "/sport" },
      { title: "🏠 Sédentarité", link: "/sedentarite" },
      { title: "🔥 Risques d'incendies", link: "/incendie" },
    ],
  },
  {
    title: "🧑‍🤝‍🧑 Vie de groupe",
    link: "/Vie-groupe-main",
    submenu: [
      { title: "Travail d'équipe", link: "/vie-groupe/travail-equipe" },
      { title: "Communication", link: "/vie-groupe/communication" },
      { title: "Conflits et résolution", link: "/vie-groupe/conflits" },
    ],
  },
];

// Composant Dropdown (menu déroulant pour le desktop)
const DropdownMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={item.link}>{item.title}</Link>
      {open && (
        <ul className="dropdown-menu">
          {item.submenu.map((sub, index) => (
            <li key={index}>
              <Link to={sub.link}>{sub.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// Composant principal Header
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

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
      <div className="logo">
        <img src="/logo.png" alt="Logo Safety Cards" />
        <h1>Safety Cards</h1>
      </div>

      {/* Menu Desktop */}
      <nav className="desktop-menu">
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link></li>
          {menuItems.map((item, index) => (
            <li key={index} className="dropdown">
              <Link to={item.link} className={location.pathname.startsWith(item.link) ? "active" : ""}>{item.title}</Link>
              <ul className="dropdown-menu">
                {item.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.link} className={location.pathname === sub.link ? "active" : ""}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Burger pour mobile */}
      <div className="menu-burger" onClick={() => setMenuOpen(true)}>
        &#9776;
      </div>

      {menuOpen && (
        <div className="menu show">
          <span className="menu-close" onClick={() => setMenuOpen(false)}>&times;</span>
          {activeMenu ? (
            <div className="submenu-container">
              <button className="back-button" onClick={() => setActiveMenu(null)}>← Retour</button>
              <ul>
                {activeMenu.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.link} onClick={() => setMenuOpen(false)}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button className="submenu-toggle" onClick={() => setActiveMenu(item)}>
                    {item.title} 
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
