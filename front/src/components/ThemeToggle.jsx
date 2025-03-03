import React from "react";
import { useTheme } from "../ThemeProvider";
import "./themetoggle.css"

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button className = "theme-toggle-button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
