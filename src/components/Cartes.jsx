import React, { useState } from "react";
import "./cartes.css";

const ImageTextPopup = ({ image, title, shortText, longText, textButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Conteneur principal */}
      <div className="image-text-container">
        <div className="text-container" onClick={() => setIsOpen(true)}>
          <h2 className = "titre-carte">{title}</h2>
          <p className="description">{shortText}</p>
          <button className="expand-button" onClick={() => setIsOpen(true)}>
          {textButton}
        </button>
        </div>
        <div className="image-container">
          <img src={image} alt={title} />
        </div>

      </div>

      {/* Popup (Modal) */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              &times;
            </button>

            <div className="modal-text-image">
              <div className="modal-image-container">
                <img src={image} alt={title} />
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
