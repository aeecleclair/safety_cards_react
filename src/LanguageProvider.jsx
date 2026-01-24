import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext({ lang: "fr", setLang: () => {}, toggleLanguage: () => {} });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("lang") || "fr";
    setLang(storedLang);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang, mounted]);

  const toggleLanguage = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  const value = useMemo(() => ({ lang, setLang, toggleLanguage }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
