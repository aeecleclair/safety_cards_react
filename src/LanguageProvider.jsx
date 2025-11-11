import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "fr");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  const value = useMemo(() => ({ lang, setLang, toggleLanguage }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
