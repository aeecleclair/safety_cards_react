import React, { useEffect, useRef, useState } from "react";
import "./common.css";

export const BulletList = ({ items }) => (
  <ul className="bullet-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const NumberedList = ({ items }) => (
  <ol className="numbered-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);

export const TextImageRight = ({ text, imageSrc }) => (
  <div className="text-image-container">
    <p className="text-content">{text}</p>
    <img className="image-content" src={imageSrc} alt="Illustration" />
  </div>
);

export const ImageCenter = ({ imageSrc }) => (
  <div className="image-container-center">
    <img className="image-content-center" src={imageSrc} alt="Illustration" />
  </div>
);

// Bouton d'ancre réutilisable (scroll lissé avec offset navbar)
export const AnchorButton = ({
  target,
  children,
  offsetDesktop = 100,
  offsetMobile = 140,
  className = ""
}) => {
  const handleClick = () => {
    const el = document.getElementById(target);
    if (!el) return;
    const offset = window.innerWidth <= 1000 ? offsetMobile : offsetDesktop;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`anchor-button ${className}`.trim()}
      onClick={handleClick}
      aria-label={`Aller à la section ${target}`}
    >
      {children}
    </button>
  );
};

export function YouTubeVideo({ url }) {
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  return (
    <div className="video-container">
      {url ? (
        <iframe
          className="video-frame"
          src={getYouTubeEmbedUrl(url)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Aucune vidéo disponible</p>
      )}
    </div>
  );
}