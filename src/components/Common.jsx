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

  // Sticky shadow logic (inchangé)
  useEffect(() => {
    const nav = navRef.current;
    const onScroll = () => {
      if (!nav) return;
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

  // Fermer le sommaire au clic dehors
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Gestion du scroll vers l'ancre
  const handleNavClick = (target) => {
    setOpen(false);
    const el = document.getElementById(target);
    if (el) {
      const offset = window.innerWidth <= 1000 ? 140 : 100; // 100px sur tablette/mobile, 40px sur pc
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar${open ? " open" : ""}`}
      ref={navRef}
    >
      <button
        className="navbar-pill"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="navbar-links"
      >
        Sommaire
      </button>
      <div className="navbar-links" id="navbar-links">
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