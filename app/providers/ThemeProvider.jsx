"use client";

import React, { createContext, useState, useEffect, useContext, useCallback, useRef } from "react";

const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
  enterModeSoiree: () => {},
  exitModeSoiree: () => {},
  modeSoireeActive: false,
  userPreference: false,
  setUserPreference: () => {},
});

// Fonction pour vérifier si on est sur une page mode soirée
const isModeSoireePath = () => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname;
  return path.includes('mode-soiree') || 
         path.includes('contacts-urgence') || 
         path.includes('plan-soiree');
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [modeSoireeActive, setModeSoireeActive] = useState(false);
  // Préférence utilisateur (ce qu'il a choisi, appliqué en dehors du mode soirée)
  const [userPreference, setUserPreference] = useState(false);
  // Sauvegarde du thème avant d'entrer en mode soirée
  const themeBeforeModeSoiree = useRef(null);

  // Initialisation côté client
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = stored === "dark";
    const isSoiree = isModeSoireePath();
    
    setUserPreference(prefersDark);
    
    if (isSoiree) {
      // En mode soirée, on force le dark mode visuellement
      setDarkMode(true);
      setModeSoireeActive(true);
      document.body.classList.add("dark-mode");
    } else if (prefersDark) {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    
    setMounted(true);
  }, []);

  // Synchronise le thème visuel (sauf en mode soirée où c'est forcé dark)
  useEffect(() => {
    if (!mounted) return;
    
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode, mounted]);

  // Sauvegarde la préférence utilisateur en localStorage
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", userPreference ? "dark" : "light");
  }, [userPreference, mounted]);

  // Quand on change le darkMode hors mode soirée, ça devient aussi la préférence
  const handleSetDarkMode = useCallback((value) => {
    setDarkMode(value);
    setModeSoireeActive((active) => {
      if (!active) {
        setUserPreference(value);
      }
      return active;
    });
  }, []);

  const enterModeSoiree = useCallback(() => {
    setModeSoireeActive((current) => {
      if (!current) {
        // Sauvegarde le thème actuel seulement si on n'est pas déjà en mode soirée
        themeBeforeModeSoiree.current = darkMode;
        setDarkMode(true);
      }
      return true;
    });
  }, [darkMode]);

  const exitModeSoiree = useCallback(() => {
    // Restaure le thème tel qu'il était avant d'entrer en mode soirée
    const savedTheme = themeBeforeModeSoiree.current;
    if (savedTheme !== null) {
      setDarkMode(savedTheme);
      themeBeforeModeSoiree.current = null;
    } else {
      // Fallback sur la préférence utilisateur
      setDarkMode(userPreference);
    }
    setModeSoireeActive(false);
  }, [userPreference]);

  // Toujours fournir le contexte, même avant l'hydratation
  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      setDarkMode: handleSetDarkMode, 
      enterModeSoiree, 
      exitModeSoiree, 
      modeSoireeActive, 
      mounted,
      userPreference,
      setUserPreference
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
