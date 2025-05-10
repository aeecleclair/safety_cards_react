import React from "react";
import "./liens-ext.css";

const ExternalLinkBlock = ({ title, subtitle, resources }) => {
  return (
    <div className="block-container">
      <h2 className="block-title">{title}</h2>
      <p className="block-subtitle">{subtitle}</p>
      <div className="links-container">
        {resources.map((resource, index) => {
          const isExternal = resource.link.startsWith("http")|| resource.link.includes("/docs");
          return (
            <a
              key={index}
              href={resource.link}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : ""}
              className="link-block"
            >
              {resource.emoji ? (
                <span className="link-emoji">{resource.emoji}</span>
              ) : resource.imageSrc ? (
                <img src={resource.imageSrc} alt={resource.label} className="link-image" />
              ) : (
                <span className="link-icon">🔗</span>
              )}
              <div className="link-text">
                <span className="link-label">{resource.label}</span>
                <span className="link-description">{resource.description}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ExternalLinkBlock;