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
  const [sectionsProgress, setSectionsProgress] = useState({}); // {target: 0..1}


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

  // Progression mid-to-mid (desktop + mobile)
  useEffect(() => {
    let sections = [];

    const collectSections = () => {
      sections = links
        .map(l => {
          const el = document.getElementById(l.target);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: l.target, top: rect.top + window.scrollY };
        })
        .filter(Boolean)
        .sort((a,b) => a.top - b.top);
    };

    const compute = () => {
      if (!sections.length) return;
      const centerLine = window.scrollY + window.innerHeight / 2;
      const newProgress = {};
      for (let i = 0; i < sections.length; i++) {
        const current = sections[i];
        const next = sections[i + 1];
        const start = current.top;
        const end = next ? next.top : (document.documentElement.scrollHeight - window.innerHeight * 0.5);
        const span = end - start || 1;
        const raw = (centerLine - start) / span;
        const ratio = raw <= 0 ? 0 : raw >= 1 ? 1 : raw; // micro-optim
        newProgress[current.id] = ratio;
      }
      setSectionsProgress(prev => {
        let changed = false;
        const out = { ...prev };
        for (const k in newProgress) {
          const v = newProgress[k];
            if (Math.abs((prev[k] || 0) - v) > 0.012) { out[k] = v; changed = true; }
        }
        return changed ? out : prev;
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { compute(); ticking = false; });
        ticking = true;
      }
    };
    const onResize = () => {
      collectSections();
      compute();
    };
    const onOrientation = () => {
      collectSections();
      compute();
    };

    collectSections();
    compute();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientation);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onOrientation);
    };
  }, [links, open]);

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
        {links.map((link, index) => {
          const p = sectionsProgress[link.target] || 0;
          return (
            <button
              className="lien-navbar"
              key={index}
              onClick={() => handleNavClick(link.target)}
              data-progress={p.toFixed(2)}
            >
              <span className="lien-navbar-label">{link.label}</span>
              <span className="lien-navbar-progress">
                <span
                  className="lien-navbar-progress-bar"
                  style={{ transform: `scaleX(${p})` }}
                />
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

// Bouton d'ancre réutilisable (scroll lissé avec offset navbar)
export const AnchorButton = ({
  target,
  children,
  offsetDesktop = 100,
  offsetMobile = 140,
  className = ""
}) => {
  const handleClick = () => {
    const el = document.getElementById(target);
    if (!el) return;
    const offset = window.innerWidth <= 1000 ? offsetMobile : offsetDesktop;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`anchor-button ${className}`.trim()}
      onClick={handleClick}
      aria-label={`Aller à la section ${target}`}
    >
      {children}
    </button>
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