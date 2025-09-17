import React, { createContext, useState, useEffect, useContext, useRef } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const prevThemeRef = useRef(null); // mémorise le thème avant mode soirée
  const [modeSoireeActive, setModeSoireeActive] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const enterModeSoiree = () => {
    // Stocke le thème actuel une seule fois (évite l'écrasement si appels consécutifs)
    if (prevThemeRef.current === null) {
      prevThemeRef.current = darkMode;
    }
    if (!darkMode) setDarkMode(true);
    if (!modeSoireeActive) setModeSoireeActive(true);
  };

  const exitModeSoiree = () => {
    const prev = prevThemeRef.current;
    // Restaure le thème précédent si connu, sinon clair
    if (prev !== null) {
      setDarkMode(prev);
    } else {
      setDarkMode(false);
    }
    prevThemeRef.current = null;
    setModeSoireeActive(false);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, enterModeSoiree, exitModeSoiree, modeSoireeActive }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);