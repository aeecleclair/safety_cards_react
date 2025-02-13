import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    title: "⚕️Santé",
    link: "/Sante-main",
    submenu: [
      { title: "Addiction à la pornographie", link: "/risques-addictifs/pornographie" },
      { title: "Addictions aux drogues", link: "/risques-addictifs/drogues" },
      { title: "Addiction aux écrans et réseaux sociaux", link: "/risques-addictifs/ecrans" },
    ],
  },
  {
    title: "💖 Sexualité et vie amoureuse",
    link: "/Sexe-amour-main",
    submenu: [
      { title: "Addiction à la pornographie", link: "/risques-addictifs/pornographie" },
      { title: "Addictions aux drogues", link: "/risques-addictifs/drogues" },
      { title: "Addiction aux écrans et réseaux sociaux", link: "/risques-addictifs/ecrans" },
    ],
  },
  {
    title: "🕰️ Vie courante",
    link: "/Vie-courante-main",
    submenu: [
      { title: "Addiction à la pornographie", link: "/risques-addictifs/pornographie" },
      { title: "Addictions aux drogues", link: "/risques-addictifs/drogues" },
      { title: "Addiction aux écrans et réseaux sociaux", link: "/risques-addictifs/ecrans" },
    ],
  },
  {
    title: "🧑‍🤝‍🧑 Vie de groupe",
    link: "/Vie-groupe-main",
    submenu: [
      { title: "Addiction à la pornographie", link: "/risques-addictifs/pornographie" },
      { title: "Addictions aux drogues", link: "/risques-addictifs/drogues" },
      { title: "Addiction aux écrans et réseaux sociaux", link: "/risques-addictifs/ecrans" },
    ],
  },
  
];

const DropdownMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Navigation principale */}
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          {menuItems.map((item, index) => (
            <DropdownMenu key={index} item={item} />
          ))}
        </ul>
      </nav>

      {/* Menu Burger pour mobile */}
      <div className="menu-burger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      {menuOpen && (
        <ul className="menu show">
          <li><Link to="/">Accueil</Link></li>
          {menuItems.map((item, index) => (
            <li key={index} className="submenu-parent">
              <Link to={item.link} className="submenu-toggle">{item.title}</Link>
              <ul className="submenu">
                {item.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
