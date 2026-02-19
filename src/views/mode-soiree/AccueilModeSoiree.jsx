"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/providers/ThemeProvider";
import { assetPath } from "@/app/utils/assetPath";
import "./mode-soiree.css";

const AccueilModeSoiree = () => {
  const router = useRouter();
  const { darkMode, enterModeSoiree, modeSoireeActive } = useTheme() || {};

  useEffect(() => {
    // Active mode soirée via l'API centralisée (une seule fois au montage)
    enterModeSoiree();
    window.dispatchEvent(new Event('dark-mode-change'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page">
      <h1 className="titre-page">{/*Mode soirée*/}Mode Challenge</h1>
      <p className="texte intro">
        {/*Tu es en soirée. Cette interface te donne un accès rapide aux ressources essentielles.*/}
        Bienvenue au Challenge 2026 ! Cette interface te donne un accès rapide aux ressources essentielles pour passer un week-end en toute sécurité.
      </p>
      <div className="mode-soiree-buttons">
  <button className="ms-btn urgent" onClick={() => router.push("/contacts-urgence") }>
          🚨 Contacts d'urgence
        </button>
  <button className="ms-btn plan" onClick={() => router.push("/plan-soiree") }>
          🗺️ Plan du campus
        </button>
      </div>
      <div className="mode-soiree-note">
        {/*(Ces ressources sont propres aux élèves de Centrale Lyon)*/}
      </div>

      <div className="initiative-peer-care">
        <p className="texte" style={{marginBottom:'12px'}}>Une initiative de l'association <strong>Peer Care</strong></p>
        <img
          src={assetPath("/assets/peer_care.png")}
          alt="Logo Peer Care"
          className="peer-care-logo"
        />
      </div>
    </div>
  );
};

export default AccueilModeSoiree;



