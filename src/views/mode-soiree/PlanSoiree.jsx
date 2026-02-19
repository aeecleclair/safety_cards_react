"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { assetPath } from '@/app/utils/assetPath';
import './mode-soiree.css';

// Placeholders temporaires (remplacer plus tard par les vrais plans)
const PLAN_IMAGES = {
  rdc: '/assets/m16_rdc.png',
  soussol: '/assets/m16_ss.png',
  campus : '/assets/campus_plan.png',
  soiree1 : '/assets/soiree_zone.png',
  soiree0 : '/assets/m16_ss.png',
};

const PlanSoiree = () => {
  const [niveau, setNiveau] = useState('campus');
  const router = useRouter();

  const currentSrc = assetPath(PLAN_IMAGES[niveau]);

  return (
    <div className="page">
  <h1 className="titre-page">Plan du campus</h1>
  <button className="back-inline-btn" onClick={() => router.back()}>⟵ Retour</button>
      <p className="texte">
        Sélectionne un niveau pour afficher le plan correspondant.
      </p>

      <div className="plan-tabs">
 
        <button
          className={"plan-tab-btn" + (niveau==='campus' ? ' active' : '')}
          onClick={() => setNiveau('campus')}
        >Plan du campus</button>

        <button
          className={"plan-tab-btn" + (niveau==='soiree1' ? ' active' : '')}
          onClick={() => setNiveau('soiree1')}
        >Zone de soirée</button>

        <button
          className={"plan-tab-btn" + (niveau==='soiree0' ? ' active' : '')}
          onClick={() => setNiveau('soiree0')}
        >Sous-sol </button>


        {/* Mode soirées
        <button
          className={"plan-tab-btn" + (niveau==='rdc' ? ' active' : '')}
          onClick={() => setNiveau('rdc')}
        >Rez-de-chaussée</button>
        <button
          className={"plan-tab-btn" + (niveau==='soussol' ? ' active' : '')}
          onClick={() => setNiveau('soussol')}
        >Sous-sol</button>

                */}
      </div>

      <div className="plan-image-wrapper">
        <img src={currentSrc} alt={`Plan ${niveau === 'campus' ? 'du campus' : niveau === 'soiree1' ? 'de la zone de soirée' : 'du sous-sol'}`} />
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

export default PlanSoiree;



