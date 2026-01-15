"use client";

import React, { createContext, useState, useEffect, useContext, useRef } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prevThemeRef = useRef(null);
  const [modeSoireeActive, setModeSoireeActive] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  const enterModeSoiree = () => {
    if (prevThemeRef.current === null) {
      prevThemeRef.current = darkMode;
    }
    if (!darkMode) setDarkMode(true);
    if (!modeSoireeActive) setModeSoireeActive(true);
  };

  const exitModeSoiree = () => {
    const prev = prevThemeRef.current;
    if (prev !== null) {
      setDarkMode(prev);
    } else {
      setDarkMode(false);
    }
    prevThemeRef.current = null;
    setModeSoireeActive(false);
  };

  // Eviter le flash avant hydratation
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, enterModeSoiree, exitModeSoiree, modeSoireeActive }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
