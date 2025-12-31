"use client";

import React, { useState } from "react";
import "./cartes.css";
import { useLanguage } from "../providers/LanguageProvider";

const ImageTextPopup = ({ image, title, shortText, longText, textButton, suit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage() || { lang: 'fr' };

  const rawSuit = (suit || '').toString().trim();
  const normalized = rawSuit
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
  const suitMap = {
    coeur: 'coeur',
    carreau: 'carreau',
    trefle: 'trefle',
    pique: 'pique'
  };
  const suitKey = suitMap[normalized] || (rawSuit ? 'coeur' : null);
  const containerClass = `image-text-container${suitKey ? ' suit-' + suitKey : ''}`;

  return (
    <>
      <div className={containerClass}>
        <div className="text-container" onClick={() => setIsOpen(true)}>
          <h2 className="titre-carte">{title}</h2>
          <p className="description">{shortText}</p>
          <button className="expand-button" onClick={() => setIsOpen(true)}>
            {textButton}
          </button>
        </div>
        <div className="image-container">
          <img src={image} alt={title} />
        </div>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-text-image">
              <div className="modal-image-container">
                <img src={image} alt={title} />
                <p className="image-caption notice-caption">
                  {lang === 'en' 
                    ? 'ⓘ AI-generated image based on our ideas, then retouched by us :)' 
                    : 'ⓘ  Image générée par IA à partir de nos idées, puis retouchée par nos soins :)'}
                </p>
              </div>
              <div className="modal-text">
                <h2>{title}</h2>
                <p>{longText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageTextPopup;
