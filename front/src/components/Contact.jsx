import { useEffect, useState } from "react";
import "./contact.css";

const ContactCard = ({ image, title, subtitle, phone, email, hours, textButton, link, bgColor: propBgColor, textColor: propTextColor }) => {
  const [bgColor, setBgColor] = useState(propBgColor || "#ffffff");
  const [textColor, setTextColor] = useState(propTextColor || "#000000");
  const [isDarkMode, setIsDarkMode] = useState(document.body.classList.contains("dark-mode"));

  useEffect(() => {
    if (!propBgColor || !propTextColor) {
      const img = new Image(); 
      img.crossOrigin = "Anonymous";
      img.src = image;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const pixelData = ctx.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

        if (!propBgColor) {
          setBgColor(color);
        }
        if (!propTextColor) {
          setTextColor("white");
        }
      };
    }
  }, [image, propBgColor, propTextColor]);
  

  useEffect(() => {
    const handleModeChange = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    window.addEventListener("dark-mode-change", handleModeChange);

    return () => {
      window.removeEventListener("dark-mode-change", handleModeChange);
    };
  }, []);

  return (
    <div className="contact-card" style={{ backgroundColor: isDarkMode && propBgColor ? "#343434" : bgColor, borderColor: isDarkMode ? "#343434" : textColor }}>
      <img src={image} alt={title} className="contact-image" />
      <div className="contact-info">
        <h2 style={{ color: isDarkMode && propTextColor ? "#ffffff" : textColor }}>{title}</h2>
        {subtitle && <h3 style={{ color: isDarkMode && propTextColor ? "#ffffff" : textColor }}>{subtitle}</h3>}
        {phone && <p style={{ color: isDarkMode && propTextColor ? "#ffffff" : textColor }}><strong>Téléphone :</strong> {phone}</p>}
        {email && <p style={{ color: isDarkMode && propTextColor ? "#ffffff" : textColor }}><strong>Email :</strong> {email}</p>}
        {hours && <p style={{ color: isDarkMode && propTextColor ? "#ffffff" : textColor }}><strong>Horaires :</strong> {hours}</p>}
        <a
          className="link-button" style={{ backgroundColor: isDarkMode && propBgColor ? "#343434" : bgColor, borderColor: isDarkMode && propTextColor ? "#ffffff" : textColor, color: isDarkMode && propTextColor ? "#ffffff" : textColor }}
          href={link}
          onMouseEnter={(e) => {
            e.target.style.color = isDarkMode && propTextColor ? "#343434" : bgColor;
            e.target.style.backgroundColor = isDarkMode && propBgColor ? "#ffffff" : textColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = isDarkMode && propTextColor ? "#ffffff" : textColor;
            e.target.style.backgroundColor = isDarkMode && propBgColor ? "#343434" : bgColor;
          }}
        >
          {textButton}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;