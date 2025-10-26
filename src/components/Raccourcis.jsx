import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import "./raccourcis.css";

export default function Raccourcis() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode, setDarkMode } = useTheme();
  const navRef = useRef();
  const [top, setTop] = useState(110);
  const [hideNearFooter, setHideNearFooter] = useState(false);

  useEffect(() => {
    const computeBaseTop = () => {
      const header = document.querySelector('header');
      if (!header) return 110;
      const rect = header.getBoundingClientRect();
      const gap = 10;
      return Math.max(10, Math.round(rect.bottom + gap));
    };

    const updatePosition = () => {
      const baseTop = computeBaseTop();
      // Keep above footer
      const nav = navRef.current;
      if (!nav || window.innerWidth <= 1200) {
        setTop(baseTop);
        setHideNearFooter(false);
        return;
      }
      const footer = document.querySelector('footer');
      if (!footer) {
        setTop(baseTop);
        setHideNearFooter(false);
        return;
      }
      const footerTopPage = footer.getBoundingClientRect().top + window.scrollY;
      const navHeight = nav.offsetHeight || 0;
      const margin = 12;
      const maxTopViewport = (footerTopPage - navHeight - margin) - window.scrollY;
      const safeTop = Math.min(baseTop, Math.max(10, Math.floor(maxTopViewport)));
      setTop(safeTop);
      setHideNearFooter(maxTopViewport < 10);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, { passive: true });
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  const modeSoireeRoutes = new Set([
    '/mode-soiree',
    '/contacts-urgence',
    '/plan-soiree',
  ]);
  const inModeSoiree = modeSoireeRoutes.has(location.pathname);

  const handleQuit = () => {
    try { window.location.replace('https://www.google.com/'); }
    catch { window.location.href = 'https://www.google.com/'; }
  };

  return (
    <nav
      ref={navRef}
      className={`raccourcis-nav ${hideNearFooter ? 'fade-out' : ''}`}
      style={window.innerWidth > 1200 ? { top } : undefined}
      aria-hidden={hideNearFooter ? 'true' : undefined}
    >
      <div className="raccourcis-card">
        <p className="raccourcis-title">Raccourcis</p>
        <div className="fab-item">
          <button type="button" className="fab-btn fab-exit" onClick={handleQuit} aria-label="Quitter le site">
            <span className="fab-icon" aria-hidden>❌</span>
            <span className="fab-label">Quitter le site</span>
          </button>
        </div>
        <div className="fab-item">
          <button type="button" className="fab-btn fab-theme" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Passer en thème clair' : 'Passer en thème sombre'}>
            <span className="fab-icon" aria-hidden>{darkMode ? '☀️' : '🌙'}</span>
            <span className="fab-label">{darkMode ? 'Thème clair' : 'Thème sombre'}</span>
          </button>
        </div>
        <div className="fab-item">
          <button type="button" className="fab-btn" onClick={() => {}} aria-label="English version">
            <span className="fab-icon" aria-hidden>🇬🇧</span>
            <span className="fab-label">English version</span>
          </button>
        </div>
        <div className="fab-item">
          <button
            type="button"
            className="fab-btn fab-soiree"
            onClick={() => { if (inModeSoiree) navigate('/'); else navigate('/mode-soiree'); }}
            aria-label={inModeSoiree ? 'Quitter le mode soirée' : 'Activer le mode soirée'}
          >
            <span className="fab-icon" aria-hidden>{inModeSoiree ? '↩️' : '🎉'}</span>
            <span className="fab-label">{inModeSoiree ? 'Quitter le mode soirée' : 'Mode soirée'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
