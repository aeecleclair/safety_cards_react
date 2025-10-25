import React, { useState, useEffect, useRef } from 'react';
import './scrolltop.css';


const ScrollToTopButton = ({
  threshold = 300,
  showProgress = true,
  size: buttonSize = 56,
  arrowSize: explicitArrowSize,
  arrowStrokeWidth,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0); // 0 à 1
  const tickingRef = useRef(false);

  const handleScroll = () => {
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
        setProgress(ratio);
        setIsVisible(scrollTop > threshold);
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  };

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  // Dimensions du cercle (utilise la taille du bouton pour centrage parfait)
  const size = buttonSize; // doit correspondre à --btn-size en CSS
  const stroke = 3.2;
  const radius = (size / 2) - (stroke * 2);
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - progress * circumference;

  // Taille de la flèche centrale (calcul dynamique si non fourni)
  const arrowSize = explicitArrowSize || Math.min(Math.max(Math.round(buttonSize * 0.42), 22), buttonSize - 14);
  // Epaisseur du trait (plus épais que précédemment)
  const arrowStroke = arrowStrokeWidth != null
    ? arrowStrokeWidth
    : Math.min(Math.max(3, Math.round(arrowSize / 8.5)), 6); // bornes 3 à 6

  return (
    <button
      type="button"
      aria-label="Revenir en haut de la page"
      className={`scroll-to-top ${isVisible ? 'visible' : ''} ${showProgress ? 'with-progress' : ''}`}
      onClick={scrollToTop}
    >
      {showProgress && (
        <svg
          className="scroll-progress"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden="true"
        >
          <circle
            className="scroll-progress-bg"
            cx={size/2}
            cy={size/2}
            r={radius}
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            className="scroll-progress-fg"
            cx={size/2}
            cy={size/2}
            r={radius}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
      )}
      <span className="scroll-arrow" aria-hidden="true">
        <svg
          width={arrowSize}
          height={arrowSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={arrowStroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </span>
    </button>
  );
};

export default ScrollToTopButton;