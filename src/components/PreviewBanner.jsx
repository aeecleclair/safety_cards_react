import React from "react";
import "./preview-banner.css";

const PreviewBanner = ({
  message = "Vous accédez actuellement à la préversion du site. Seulement quelques pages sont accessibles. RDV en octobre 2025 pour la version complète !",
  icon = "🚧",
  className = "",
  style = {},
}) => {
  return (
    <div className={`preview-banner ${className}`.trim()} style={style} role="status" aria-live="polite">
      <span className="preview-banner__icon" aria-hidden="true">{icon}</span>
      <div className="preview-banner__content">{message}</div>
    </div>
  );
};

export default PreviewBanner;
