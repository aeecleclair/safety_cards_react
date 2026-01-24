"use client";

import React, { useEffect, useState } from "react";
import { assetPath } from "../utils/assetPath";
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

export const ZoomableImage = ({
  src,
  alt = "Illustration",
  className = "",
  overlayBg = "rgba(0,0,0,0.5)",
}) => {
  const [open, setOpen] = useState(false);
  const imgSrc = src?.startsWith('/') ? assetPath(src) : src;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const openZoom = () => setOpen(true);
  const closeZoom = () => setOpen(false);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openZoom();
    }
  };

  return (
    <>
      <div
        className={`zoomable-wrapper ${className}`.trim()}
        onClick={openZoom}
        tabIndex={0}
        role="button"
        aria-label={`Agrandir l'image: ${alt}`}
        onKeyDown={onKeyDown}
      >
        <img src={imgSrc} alt={alt} className="zoomable-image" />
        <div className="zoomable-overlay" aria-hidden="true">
          <button
            type="button"
            className="zoomable-button"
            onClick={openZoom}
            tabIndex={-1}
          >
            ⤢ Agrandir
          </button>
        </div>
      </div>

      {open && (
        <div
          className="image-zoom-overlay"
          style={{ background: overlayBg }}
          onClick={closeZoom}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            className="image-zoom-close"
            aria-label="Fermer l'image agrandie"
            onClick={closeZoom}
          >
            ×
          </button>
          <img
            src={imgSrc}
            alt={alt}
            className="image-zoom-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export const TextImageRight = ({ text, imageSrc, alt = "Illustration", enlargeOnClick = false }) => {
  const imgSrc = imageSrc?.startsWith('/') ? assetPath(imageSrc) : imageSrc;
  return (
    <div className="text-image-container">
      <p className="text-content">{text}</p>
      {enlargeOnClick ? (
        <ZoomableImage src={imgSrc} alt={alt} className="image-content" />
      ) : (
        <img className="image-content" src={imgSrc} alt={alt} />
      )}
    </div>
  );
};

export const ImageCenter = ({ imageSrc, alt = "Illustration", enlargeOnClick = false }) => {
  const imgSrc = imageSrc?.startsWith('/') ? assetPath(imageSrc) : imageSrc;
  return (
    <div className="image-container-center">
      {enlargeOnClick ? (
        <ZoomableImage src={imgSrc} alt={alt} className="image-content-center" />
      ) : (
        <img className="image-content-center" src={imgSrc} alt={alt} />
      )}
    </div>
  );
};

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
