"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '../providers/ThemeProvider';
import { useLanguage } from '../providers/LanguageProvider';
import "./raccourcis.css";

export default function Raccourcis() {
  const router = useRouter();
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme() || {};
  const { lang, toggleLanguage } = useLanguage() || { lang: 'fr' };
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
  const inModeSoiree = modeSoireeRoutes.has(pathname);

  const handleQuit = () => {
    try { window.location.replace('https://www.google.com/'); }
    catch { window.location.href = 'https://www.google.com/'; }
  };

  return (
    <nav
      ref={navRef}
      className={`raccourcis-nav ${hideNearFooter ? 'fade-out' : ''}`}
      style={typeof window !== 'undefined' && window.innerWidth > 1200 ? { top } : undefined}
      aria-hidden={hideNearFooter ? 'true' : undefined}
    >
      <div className="raccourcis-card">
        <div className="fab-item">
          <button type="button" className="fab-btn fab-exit" onClick={handleQuit} aria-label="Quitter le site">
            <span className="fab-icon" aria-hidden>❌</span>
            <span className="fab-label">{lang === 'en' ? 'Exit website' : 'Quitter le site'}</span>
          </button>
        </div>
        <div className="fab-item">
          <button type="button" className="fab-btn fab-theme" onClick={() => setDarkMode?.(!darkMode)} aria-label={darkMode ? 'Passer en thème clair' : 'Passer en thème sombre'}>
            <span className="fab-icon" aria-hidden>{darkMode ? '☀️' : '🌙'}</span>
            <span className="fab-label">{darkMode ? (lang === 'en' ? 'Light theme' : 'Thème clair') : (lang === 'en' ? 'Dark theme' : 'Thème sombre')}</span>
          </button>
        </div>
        <div className="fab-item">
          <button
            type="button"
            className="fab-btn"
            onClick={toggleLanguage}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Switch to French'}
          >
            <span className="fab-icon" aria-hidden>
              {lang === 'fr' ? (
                <svg width="20" height="20" viewBox="0 0 60 36" role="img" aria-hidden="true">
                  <defs>
                    <clipPath id="uk-clip"><rect width="60" height="36" rx="3" ry="3"/></clipPath>
                  </defs>
                  <g clipPath="url(#uk-clip)">
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
                <svg width="20" height="20" viewBox="0 0 60 36" role="img" aria-hidden="true">
                  <rect width="60" height="36" rx="3" ry="3" fill="#fff"/>
                  <rect width="20" height="36" rx="3" ry="3" fill="#0055A4"/>
                  <rect x="40" width="20" height="36" rx="3" ry="3" fill="#EF4135"/>
                </svg>
              )}
            </span>
            <span className="fab-label">{lang === 'fr' ? 'English version' : 'Version française'}</span>
          </button>
        </div>
        <div className="fab-item">
          <button
            type="button"
            className="fab-btn fab-soiree"
            onClick={() => { if (inModeSoiree) router.push('/'); else router.push('/mode-soiree'); }}
            aria-label={inModeSoiree ? 'Quitter le mode soirée' : 'Activer le mode soirée'}
          >
            <span className="fab-icon" aria-hidden>{inModeSoiree ? '↩️' : '🎉'}</span>
            <span className="fab-label">{inModeSoiree ? (lang === 'en' ? 'Exit party mode' : 'Quitter le mode soirée') : (lang === 'en' ? 'Party mode' : 'Mode soirée')}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
