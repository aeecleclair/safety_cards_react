"use client";

import React from "react";
import Link from "next/link";
import "./liens-ext.css";

const ExternalLinkBlock = ({ title, subtitle, resources }) => {
  return (
    <div className="block-container">
      <h2 className="block-title">{title}</h2>
      <p className="block-subtitle">{subtitle}</p>
      <div className="links-container">
        {resources.map((resource, index) => {
          const isExternal = resource.link.startsWith("http") || resource.link.includes("/docs");
          
          if (isExternal) {
            return (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
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
          }
          
          return (
            <Link
              key={index}
              href={resource.link}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExternalLinkBlock;
