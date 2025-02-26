import React from "react";
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



const Navbar = ({ links }) => {
    return (
      <nav className="navbar">
        {links.map((link, index) => (
          <button key={index} onClick={() => document.getElementById(link.target).scrollIntoView({ behavior: "smooth" })}>
            {link.label}
          </button>
        ))}
      </nav>
    );
  };
  


function YouTubeVideo({ url }) {
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



export default { BulletList, NumberedList, TextImageRight, Navbar, YouTubeVideo };