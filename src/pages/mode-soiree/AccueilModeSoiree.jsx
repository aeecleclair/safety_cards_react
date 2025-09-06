import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeProvider";
import "./mode-soiree.css";

const AccueilModeSoiree = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme(); //le thème est toujours sombre

  useEffect(() => {
    if (!darkMode) {
      setDarkMode(true);
      window.dispatchEvent(new Event('dark-mode-change'));
    }
  }, [darkMode, setDarkMode]);
  return (
    <div className="page">
      <h1 className="titre-page">Mode soirée</h1>
      <p className="texte intro">
        Tu es en soirée. Cette interface te donne un accès rapide aux ressources essentielles.
      </p>
      <div className="mode-soiree-buttons">
  <button className="ms-btn urgent" onClick={() => navigate("/contacts-urgence") }>
          🚨 Contacts d'urgence
        </button>
  <button className="ms-btn plan" onClick={() => navigate("/plan-soiree") }>
          🗺️ Plan de la soirée
        </button>
      </div>
      <div className="mode-soiree-note">
        (Ces ressources sont propres aux élèves de Centrale Lyon)
      </div>

      <div className="initiative-peer-care">
        <p className="texte" style={{marginBottom:'12px'}}>Une initiative de l'association <strong>Peer Care</strong></p>
        <img
          src="/assets/peer_care_sans_fond.png"
          alt="Logo Peer Care"
          className="peer-care-logo"
        />
      </div>
    </div>
  );
};

export default AccueilModeSoiree;
