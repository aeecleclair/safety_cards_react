import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mode-soiree.css';

// Placeholders temporaires (remplacer plus tard par les vrais plans)
const PLAN_IMAGES = {
  rdc: '/assets/m16_rdc.png',
  soussol: '/assets/m16_ss.png'
};

const PlanSoiree = () => {
  const [niveau, setNiveau] = useState('rdc');
  const navigate = useNavigate();

  const currentSrc = PLAN_IMAGES[niveau];

  return (
    <div className="page">
  <h1 className="titre-page">Plan de la soirée</h1>
  <button className="back-inline-btn" onClick={() => navigate(-1)}>⟵ Retour</button>
      <p className="texte">
        Sélectionne un niveau pour afficher le plan correspondant.
      </p>

      <div className="plan-tabs">
        <button
          className={"plan-tab-btn" + (niveau==='rdc' ? ' active' : '')}
          onClick={() => setNiveau('rdc')}
        >Rez-de-chaussée</button>
        <button
          className={"plan-tab-btn" + (niveau==='soussol' ? ' active' : '')}
          onClick={() => setNiveau('soussol')}
        >Sous-sol</button>
      </div>

      <div className="plan-image-wrapper">
        <img src={currentSrc} alt={`Plan ${niveau === 'rdc' ? 'rez-de-chaussée' : 'sous-sol'}`} />
      </div>

            <div className="mode-soiree-note">
        (Ces ressources sont propres aux élèves de Centrale Lyon)
      </div>

      <div className="initiative-peer-care">
        <p className="texte" style={{marginBottom:'12px'}}>Une initiative de l'association <strong>Peer Care</strong></p>
        <img
          src="/assets/peer_care.png"
          alt="Logo Peer Care"
          className="peer-care-logo"
        />
      </div>

    </div>
  );
};

export default PlanSoiree;
