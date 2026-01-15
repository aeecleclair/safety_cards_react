"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '../providers/ThemeProvider';
import { useLanguage } from "../providers/LanguageProvider";
import "./sommaire.css";

export default function Sommaire({ links }) {
  const navRef = useRef();
  const [open, setOpen] = useState(false);
  const [sectionsProgress, setSectionsProgress] = useState({});
  const [headerOffset, setHeaderOffset] = useState(110);
  const [computedTop, setComputedTop] = useState(110);
  const [hideNearFooter, setHideNearFooter] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 1200 : false);
  const hasLinks = Array.isArray(links) && links.length > 0;


  const { lang, toggleLanguage } = useLanguage() || { lang: 'fr', toggleLanguage: () => {} };
  const { darkMode, setDarkMode } = useTheme() || {};
  const router = useRouter();
  const pathname = usePathname();
  const modeSoireeRoutes = new Set([
    '/mode-soiree',
    '/contacts-urgence',
    '/plan-soiree',
  ]);
  const inModeSoiree = modeSoireeRoutes.has(pathname);



  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__hasSommaire = true;
      window.__sommaireLinksPresent = !!hasLinks;
      window.dispatchEvent(new CustomEvent('sommaire:links-change', { detail: { present: !!hasLinks } }));
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.__sommaireLinksPresent = false;
        window.dispatchEvent(new CustomEvent('sommaire:links-change', { detail: { present: false } }));
      }
    };
  }, [hasLinks]);

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

  useEffect(() => {
    const computeHeaderOffset = () => {
      const header = document.querySelector('header');
      if (!header) return;
      const rect = header.getBoundingClientRect();
      const gap = 10;
      const top = Math.max(10, Math.round(rect.bottom + gap));
      setHeaderOffset(top);
    };
    computeHeaderOffset();
    const onResize = () => computeHeaderOffset();
    const onScroll = () => computeHeaderOffset();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Track mobile viewport
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 1200);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Keep nav above footer: adjust top or hide when overlapping
  useEffect(() => {
    const updateTopForFooter = () => {
      const nav = navRef.current;
      if (!nav || window.innerWidth <= 1200) return;
      const footer = document.querySelector('footer');
      const baseTop = headerOffset;
      if (!footer) {
        setComputedTop(baseTop);
        setHideNearFooter(false);
        return;
      }
      const footerTopPage = footer.getBoundingClientRect().top + window.scrollY;
      const navHeight = nav.offsetHeight || 0;
      const margin = 12;
      const maxTopViewport = (footerTopPage - navHeight - margin) - window.scrollY;
      const safeTop = Math.min(baseTop, Math.max(10, Math.floor(maxTopViewport)));
      setComputedTop(safeTop);
      setHideNearFooter(maxTopViewport < 10);
    };

    updateTopForFooter();
    window.addEventListener('scroll', updateTopForFooter, { passive: true });
    window.addEventListener('resize', updateTopForFooter);
    return () => {
      window.removeEventListener('scroll', updateTopForFooter);
      window.removeEventListener('resize', updateTopForFooter);
    };
  }, [headerOffset, open]);

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
        const ratio = raw <= 0 ? 0 : raw >= 1 ? 1 : raw;
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.toggleNavbar = () => setOpen((prev) => !prev);
      window.closeNavbar = () => setOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      className={`navbar sommaire-nav${open ? " open" : ""} ${hideNearFooter ? 'fade-out' : ''}`}
      ref={navRef}
      style={typeof window !== 'undefined' && window.innerWidth > 1200 ? { top: computedTop } : undefined}
      aria-hidden={hideNearFooter ? 'true' : undefined}
    >
      {open && (
        <button
          className="navbar-close-mobile"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      )}

      {hasLinks && (
        <div className="navbar-links" id="navbar-links">
          <p className="sommaire">{lang === 'en' ? 'Summary' : 'Sommaire'}</p>
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
      )}

      {hasLinks && open && isMobile && (
        <div className="sommaire-actions">
          <p className="sommaire">{lang === 'en' ? 'Shortcuts' : 'Raccourcis'}</p>
          <button
            type="button"
            className="menu-button-style"
            onClick={() => { toggleLanguage(); setOpen(false); }}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Switch to French'}
          >
            <span style={{ width: '1.5em', display: 'inline-block', textAlign: 'center' }} aria-hidden>
              {lang === 'fr' ? '🇬🇧' : '🇫🇷'}
            </span>
            <span>{lang === 'fr' ? 'English version' : 'Version française'}</span>
          </button>

          <button
            type="button"
            className="menu-button-style"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? (lang === 'en' ? 'Switch to light theme' : 'Passer en thème clair') : (lang === 'en' ? 'Switch to dark theme' : 'Passer en thème sombre')}
          >
            <span style={{ width: '1.5em', display: 'inline-block', textAlign: 'center' }} aria-hidden>
              {darkMode ? '☀️' : '🌙'}
            </span>
            <span>{darkMode ? (lang === 'en' ? 'Light theme' : 'Thème clair') : (lang === 'en' ? 'Dark theme' : 'Thème sombre')}</span>
          </button>

          <button
            type="button"
            className="menu-button-style"
            onClick={() => { try { window.location.replace('https://www.google.com/'); } catch { window.location.href = 'https://www.google.com/'; } }}
            aria-label={lang === 'en' ? 'Exit website' : 'Quitter le site'}
          >
            <span style={{ width: '1.5em', display: 'inline-block', textAlign: 'center' }} aria-hidden>❌</span>
            <span>{lang === 'en' ? 'Exit website' : 'Quitter le site'}</span>
          </button>

          <button
            type="button"
            className="menu-button-style"
            onClick={() => { if (inModeSoiree) router.push('/'); else router.push('/mode-soiree'); }}
            aria-label={inModeSoiree ? (lang === 'en' ? 'Exit party mode' : 'Quitter le mode soirée') : (lang === 'en' ? 'Activate party mode' : 'Activer le mode soirée')}
          >
            <span style={{ width: '1.5em', display: 'inline-block', textAlign: 'center' }} aria-hidden>
              {inModeSoiree ? '↩️' : '🎉'}
            </span>
            <span>{inModeSoiree ? (lang === 'en' ? 'Exit party mode' : 'Quitter le mode soirée') : (lang === 'en' ? 'Party mode' : 'Mode soirée')}</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export function ActionsRapidesOnly() {
  const router = useRouter();
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme() || {};
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(110);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const onLinksChange = (e) => {
      const present = !!(e?.detail?.present);
      setShouldShow(!present);
    };
    window.addEventListener('sommaire:links-change', onLinksChange);
    const linksInDom = !!document.querySelector('.sommaire-nav .navbar-links');
    setShouldShow(!window.__sommaireLinksPresent && !linksInDom);
    return () => {
      window.removeEventListener('sommaire:links-change', onLinksChange);
    };
  }, []);

  useEffect(() => {
    setShouldShow(!window.__sommaireLinksPresent);
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__hasSommaire = true;
    }
  }, []);

  useEffect(() => {
    const computeTop = () => {
      const header = document.querySelector('header');
      if (!header) return;
      const rect = header.getBoundingClientRect();
      const gap = 10;
      setTop(Math.max(10, Math.round(rect.bottom + gap)));
    };
    computeTop();
    window.addEventListener('resize', computeTop);
    window.addEventListener('scroll', computeTop, { passive: true });
    return () => {
      window.removeEventListener('resize', computeTop);
      window.removeEventListener('scroll', computeTop);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.toggleNavbar = () => setOpen(prev => !prev);
      window.closeNavbar = () => setOpen(false);
    }
  }, []);

  const modeSoireeRoutes = new Set([
    '/mode-soiree',
    '/contacts-urgence',
    '/plan-soiree',
  ]);
  const inModeSoiree = modeSoireeRoutes.has(pathname);

  if (!shouldShow) return null;

  const handleQuit = () => {
    try { window.location.replace('https://www.google.com/'); }
    catch { window.location.href = 'https://www.google.com/'; }
  };

  return (
    <nav className={`navbar sommaire-nav${open ? ' open' : ''}`} style={typeof window !== 'undefined' && window.innerWidth > 1200 ? { top } : undefined}>
      {open && (
        <button className="navbar-close-mobile" onClick={() => setOpen(false)}>×</button>
      )}
      <div className="sommaire-actions">
        <p className="sommaire">Raccourcis</p>
        <div className="fab-item">
          <button type="button" className="fab-btn fab-exit" onClick={handleQuit} aria-label="Quitter le site">
            <span className="fab-icon" aria-hidden>❌</span>
            <span className="fab-label">Quitter le site</span>
          </button>
        </div>
        <div className="fab-item">
          <button type="button" className="fab-btn fab-theme" onClick={() => setDarkMode?.(!darkMode)} aria-label={darkMode ? 'Passer en thème clair' : 'Passer en thème sombre'}>
            <span className="fab-icon" aria-hidden>{darkMode ? '☀️' : '🌙'}</span>
            <span className="fab-label">{darkMode ? 'Thème clair' : 'Thème sombre'}</span>
          </button>
        </div>
        <div className="fab-item fab-theme">
          <button type="button" className="fab-btn" onClick={() => {}} aria-label="English version">
            <span className="fab-icon" aria-hidden>🇬🇧</span>
            <span className="fab-label">English version</span>
          </button>
        </div>
        <div className="fab-item">
          <button type="button" className="fab-btn fab-soiree" onClick={() => { if (inModeSoiree) router.push('/'); else router.push('/mode-soiree'); }} aria-label={inModeSoiree ? 'Quitter le mode soirée' : 'Activer le mode soirée'}>
            <span className="fab-icon" aria-hidden>{inModeSoiree ? '↩️' : '🎉'}</span>
            <span className="fab-label">{inModeSoiree ? 'Quitter le mode soirée' : 'Mode soirée'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
