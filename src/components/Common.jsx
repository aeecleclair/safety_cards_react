import React, { useEffect, useRef, useState } from "react";
import "./common.css";

export const BulletList = ({ items }) => (
  <ul className="bullet-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const NumberedList = ({ items }) => (
  <ol className="numbered-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);

export const TextImageRight = ({ text, imageSrc }) => (
  <div className="text-image-container">
    <p className="text-content">{text}</p>
    <img className="image-content" src={imageSrc} alt="Illustration" />
  </div>
);

export const ImageCenter = ({ imageSrc }) => (
  <div className="image-container-center">
    <img className="image-content-center" src={imageSrc} alt="Illustration" />
  </div>
);



export const Navbar = ({ links }) => {
  const navRef = useRef();
  const [open, setOpen] = useState(false);


    // Indique que le sommaire existe
    useEffect(() => {
      window.__hasSommaire = true;
      return () => { window.__hasSommaire = false; };
    }, []);


  // Sticky shadow logic (pc seulement)
  useEffect(() => {
    const nav = navRef.current;
    const onScroll = () => {
      if (!nav || window.innerWidth <= 1000) return;
      const { top } = nav.getBoundingClientRect();
      if (top <= 30) {
        nav.classList.add("is-sticky");
      } else {
        nav.classList.remove("is-sticky");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Exposer la fonction pour permettre au Header de contrôler la navbar
  useEffect(() => {
    window.toggleNavbar = () => setOpen((prev) => !prev);
    window.closeNavbar = () => setOpen(false);
  }, []);

  // Fermer la navbar au redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Gestion du scroll vers l'ancre
  const handleNavClick = (target) => {
    setOpen(false);
    const el = document.getElementById(target);
    if (el) {
      const offset = window.innerWidth <= 1000 ? 140 : 100;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar${open ? " open" : ""}`}
      ref={navRef}
    >
      {/* Bouton fermer pour mobile */}
      {open && (
        <button
          className="navbar-close-mobile"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      )}

      
      <div className="navbar-links" id="navbar-links">
        <p className="sommaire">Sommaire</p>
        {links.map((link, index) => (
          <button
            className="lien-navbar"
            key={index}
            onClick={() => handleNavClick(link.target)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export function YouTubeVideo({ url }) {
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  return (
    <div className="video-container">
      {url ? (
        <iframe
          className="video-frame"
          src={getYouTubeEmbedUrl(url)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Aucune vidéo disponible</p>
      )}
    </div>
  );
}